
/**
 * Google Apps Script client library for the Vertex AI API
 * Documentation URL: https://cloud.google.com/vertex-ai/
 * @class
 */
class Aiplatform {
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
    this._rootUrl = 'https://aiplatform.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Updates a cache config.
     * @param {string} params.name - (Required) Identifier. Name of the cache config. Format: - `projects/{project}/cacheConfig`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.updateCacheConfig = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Gets a GenAI cache config.
     * @param {string} params.name - (Required) Required. Name of the cache config. Format: - `projects/{project}/cacheConfig`.
     * @return {object} The API response object.
     */
    this.projects.getCacheConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Sets (creates or updates) configs of publisher models. For example, sets the request/response logging config.
     * @param {string} params.name - (Required) Required. The name of the publisher model, in the format of `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.setPublisherModelConfig = (params) => this._makeRequest('v1beta1/{+name}:setPublisherModelConfig', 'POST', params);

    /**
     * Fetches the configs of publisher models.
     * @param {string} params.name - (Required) Required. The name of the publisher model, in the format of `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`.
     * @return {object} The API response object.
     */
    this.projects.fetchPublisherModelConfig = (params) => this._makeRequest('v1beta1/{+name}:fetchPublisherModelConfig', 'GET', params);

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Evaluates instances based on a given metric.
     * @param {string} params.location - (Required) Required. The resource name of the Location to evaluate the instances. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluateInstances = (params) => this._makeRequest('v1beta1/{+location}:evaluateInstances', 'POST', params);

    /**
     * Evaluates a dataset based on a set of given metrics.
     * @param {string} params.location - (Required) Required. The resource name of the Location to evaluate the dataset. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluateDataset = (params) => this._makeRequest('v1beta1/{+location}:evaluateDataset', 'POST', params);

    /**
     * Deploys a model to a new endpoint.
     * @param {string} params.destination - (Required) Required. The resource name of the Location to deploy the model in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deploy = (params) => this._makeRequest('v1beta1/{+destination}:deploy', 'POST', params);

    /**
     * Deploys publisher models.
     * @param {string} params.destination - (Required) Required. The resource name of the Location to deploy the model in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deployPublisherModel = (params) => this._makeRequest('v1beta1/{+destination}:deployPublisherModel', 'POST', params);

    /**
     * Updates a RagEngineConfig.
     * @param {string} params.name - (Required) Identifier. The name of the RagEngineConfig. Format: `projects/{project}/locations/{location}/ragEngineConfig`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.updateRagEngineConfig = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Gets a RagEngineConfig.
     * @param {string} params.name - (Required) Required. The name of the RagEngineConfig resource. Format: `projects/{project}/locations/{location}/ragEngineConfig`
     * @return {object} The API response object.
     */
    this.projects.locations.getRagEngineConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Retrieves relevant contexts for a query.
     * @param {string} params.parent - (Required) Required. The resource name of the Location from which to retrieve RagContexts. The users must have permission to make a call in the project. Format: `projects/{project}/locations/{location}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.retrieveContexts = (params) => this._makeRequest('v1beta1/{+parent}:retrieveContexts', 'POST', params);

    /**
     * Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses.
     * @param {string} params.parent - (Required) Required. The resource name of the Location from which to augment prompt. The users must have permission to make a call in the project. Format: `projects/{project}/locations/{location}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.augmentPrompt = (params) => this._makeRequest('v1beta1/{+parent}:augmentPrompt', 'POST', params);

    /**
     * Given an input text, it returns a score that evaluates the factuality of the text. It also extracts and returns claims from the text and provides supporting facts.
     * @param {string} params.parent - (Required) Required. The resource name of the Location from which to corroborate text. The users must have permission to make a call in the project. Format: `projects/{project}/locations/{location}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.corroborateContent = (params) => this._makeRequest('v1beta1/{+parent}:corroborateContent', 'POST', params);

    this.projects.locations.featurestores = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates a new Featurestore in a given project and location.
     * @param {string} params.featurestoreId - Required. The ID to use for this Featurestore, which will become the final component of the Featurestore's resource name. This value may be up to 60 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within the project and location.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create Featurestores. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.create = (params) => this._makeRequest('v1beta1/{+parent}/featurestores', 'POST', params);

    /**
     * Gets details of a single Featurestore.
     * @param {string} params.name - (Required) Required. The name of the Featurestore resource.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists Featurestores in a given project and location.
     * @param {string} params.filter - Lists the featurestores that match the filter expression. The following fields are supported: * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `update_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `online_serving_config.fixed_node_count`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. * `labels`: Supports key-value equality and key presence. Examples: * `create_time > "2020-01-01" OR update_time > "2020-01-01"` Featurestores created or updated after 2020-01-01. * `labels.env = "prod"` Featurestores with label "env" set to "prod".
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported Fields: * `create_time` * `update_time` * `online_serving_config.fixed_node_count`
     * @param {integer} params.pageSize - The maximum number of Featurestores to return. The service may return fewer than this value. If unspecified, at most 100 Featurestores will be returned. The maximum value is 100; any value greater than 100 will be coerced to 100.
     * @param {string} params.pageToken - A page token, received from a previous FeaturestoreService.ListFeaturestores call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeaturestoreService.ListFeaturestores must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list Featurestores. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.list = (params) => this._makeRequest('v1beta1/{+parent}/featurestores', 'GET', params);

    /**
     * Updates the parameters of a single Featurestore.
     * @param {string} params.name - (Required) Output only. Name of the Featurestore. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}`
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the Featurestore resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. Updatable fields: * `labels` * `online_serving_config.fixed_node_count` * `online_serving_config.scaling` * `online_storage_ttl_days`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Featurestore. The Featurestore must not contain any EntityTypes or `force` must be set to true for the request to succeed.
     * @param {boolean} params.force - If set to true, any EntityTypes and Features for this Featurestore will also be deleted. (Otherwise, the request will only work if the Featurestore has no EntityTypes.)
     * @param {string} params.name - (Required) Required. The name of the Featurestore to be deleted. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}`
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Batch reads Feature values from a Featurestore. This API enables batch reading Feature values, where each read instance in the batch may read Feature values of entities from one or more EntityTypes. Point-in-time correctness is guaranteed for Feature values of each read instance as of each instance's read timestamp.
     * @param {string} params.featurestore - (Required) Required. The resource name of the Featurestore from which to query Feature values. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.batchReadFeatureValues = (params) => this._makeRequest('v1beta1/{+featurestore}:batchReadFeatureValues', 'POST', params);

    /**
     * Searches Features matching a query in a given project.
     * @param {string} params.location - (Required) Required. The resource name of the Location to search Features. Format: `projects/{project}/locations/{location}`
     * @param {integer} params.pageSize - The maximum number of Features to return. The service may return fewer than this value. If unspecified, at most 100 Features will be returned. The maximum value is 100; any value greater than 100 will be coerced to 100.
     * @param {string} params.pageToken - A page token, received from a previous FeaturestoreService.SearchFeatures call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeaturestoreService.SearchFeatures, except `page_size`, must match the call that provided the page token.
     * @param {string} params.query - Query string that is a conjunction of field-restricted queries and/or field-restricted filters. Field-restricted queries and filters can be combined using `AND` to form a conjunction. A field query is in the form FIELD:QUERY. This implicitly checks if QUERY exists as a substring within Feature's FIELD. The QUERY and the FIELD are converted to a sequence of words (i.e. tokens) for comparison. This is done by: * Removing leading/trailing whitespace and tokenizing the search value. Characters that are not one of alphanumeric `[a-zA-Z0-9]`, underscore `_`, or asterisk `*` are treated as delimiters for tokens. `*` is treated as a wildcard that matches characters within a token. * Ignoring case. * Prepending an asterisk to the first and appending an asterisk to the last token in QUERY. A QUERY must be either a singular token or a phrase. A phrase is one or multiple words enclosed in double quotation marks ("). With phrases, the order of the words is important. Words in the phrase must be matching in order and consecutively. Supported FIELDs for field-restricted queries: * `feature_id` * `description` * `entity_type_id` Examples: * `feature_id: foo` --> Matches a Feature with ID containing the substring `foo` (eg. `foo`, `foofeature`, `barfoo`). * `feature_id: foo*feature` --> Matches a Feature with ID containing the substring `foo*feature` (eg. `foobarfeature`). * `feature_id: foo AND description: bar` --> Matches a Feature with ID containing the substring `foo` and description containing the substring `bar`. Besides field queries, the following exact-match filters are supported. The exact-match filters do not support wildcards. Unlike field-restricted queries, exact-match filters are case-sensitive. * `feature_id`: Supports = comparisons. * `description`: Supports = comparisons. Multi-token filters should be enclosed in quotes. * `entity_type_id`: Supports = comparisons. * `value_type`: Supports = and != comparisons. * `labels`: Supports key-value equality as well as key presence. * `featurestore_id`: Supports = comparisons. Examples: * `description = "foo bar"` --> Any Feature with description exactly equal to `foo bar` * `value_type = DOUBLE` --> Features whose type is DOUBLE. * `labels.active = yes AND labels.env = prod` --> Features having both (active: yes) and (env: prod) labels. * `labels.env: *` --> Any Feature which has a label with `env` as the key.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.searchFeatures = (params) => this._makeRequest('v1beta1/{+location}/featurestores:searchFeatures', 'GET', params);

    this.projects.locations.featurestores.entityTypes = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.permissions - The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Reads Feature values of a specific entity of an EntityType. For reading feature values of multiple entities of an EntityType, please use StreamingReadFeatureValues.
     * @param {string} params.entityType - (Required) Required. The resource name of the EntityType for the entity being read. Value format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entityType}`. For example, for a machine learning model predicting user clicks on a website, an EntityType ID could be `user`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.readFeatureValues = (params) => this._makeRequest('v1beta1/{+entityType}:readFeatureValues', 'POST', params);

    /**
     * Reads Feature values for multiple entities. Depending on their size, data for different entities may be broken up across multiple responses.
     * @param {string} params.entityType - (Required) Required. The resource name of the entities' type. Value format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entityType}`. For example, for a machine learning model predicting user clicks on a website, an EntityType ID could be `user`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.streamingReadFeatureValues = (params) => this._makeRequest('v1beta1/{+entityType}:streamingReadFeatureValues', 'POST', params);

    /**
     * Writes Feature values of one or more entities of an EntityType. The Feature values are merged into existing entities if any. The Feature values to be written must have timestamp within the online storage retention.
     * @param {string} params.entityType - (Required) Required. The resource name of the EntityType for the entities being written. Value format: `projects/{project}/locations/{location}/featurestores/ {featurestore}/entityTypes/{entityType}`. For example, for a machine learning model predicting user clicks on a website, an EntityType ID could be `user`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.writeFeatureValues = (params) => this._makeRequest('v1beta1/{+entityType}:writeFeatureValues', 'POST', params);

    /**
     * Creates a new EntityType in a given Featurestore.
     * @param {string} params.entityTypeId - Required. The ID to use for the EntityType, which will become the final component of the EntityType's resource name. This value may be up to 60 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within a featurestore.
     * @param {string} params.parent - (Required) Required. The resource name of the Featurestore to create EntityTypes. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.create = (params) => this._makeRequest('v1beta1/{+parent}/entityTypes', 'POST', params);

    /**
     * Gets details of a single EntityType.
     * @param {string} params.name - (Required) Required. The name of the EntityType resource. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}`
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists EntityTypes in a given Featurestore.
     * @param {string} params.filter - Lists the EntityTypes that match the filter expression. The following filters are supported: * `create_time`: Supports `=`, `!=`, `<`, `>`, `>=`, and `<=` comparisons. Values must be in RFC 3339 format. * `update_time`: Supports `=`, `!=`, `<`, `>`, `>=`, and `<=` comparisons. Values must be in RFC 3339 format. * `labels`: Supports key-value equality as well as key presence. Examples: * `create_time > \"2020-01-31T15:30:00.000000Z\" OR update_time > \"2020-01-31T15:30:00.000000Z\"` --> EntityTypes created or updated after 2020-01-31T15:30:00.000000Z. * `labels.active = yes AND labels.env = prod` --> EntityTypes having both (active: yes) and (env: prod) labels. * `labels.env: *` --> Any EntityType which has a label with 'env' as the key.
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `entity_type_id` * `create_time` * `update_time`
     * @param {integer} params.pageSize - The maximum number of EntityTypes to return. The service may return fewer than this value. If unspecified, at most 1000 EntityTypes will be returned. The maximum value is 1000; any value greater than 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous FeaturestoreService.ListEntityTypes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeaturestoreService.ListEntityTypes must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Featurestore to list EntityTypes. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.list = (params) => this._makeRequest('v1beta1/{+parent}/entityTypes', 'GET', params);

    /**
     * Updates the parameters of a single EntityType.
     * @param {string} params.name - (Required) Immutable. Name of the EntityType. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` The last part entity_type is assigned by the client. The entity_type can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z and underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given a featurestore.
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the EntityType resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. Updatable fields: * `description` * `labels` * `monitoring_config.snapshot_analysis.disabled` * `monitoring_config.snapshot_analysis.monitoring_interval_days` * `monitoring_config.snapshot_analysis.staleness_days` * `monitoring_config.import_features_analysis.state` * `monitoring_config.import_features_analysis.anomaly_detection_baseline` * `monitoring_config.numerical_threshold_config.value` * `monitoring_config.categorical_threshold_config.value` * `offline_storage_ttl_days`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a single EntityType. The EntityType must not have any Features or `force` must be set to true for the request to succeed.
     * @param {boolean} params.force - If set to true, any Features for this EntityType will also be deleted. (Otherwise, the request will only work if the EntityType has no Features.)
     * @param {string} params.name - (Required) Required. The name of the EntityType to be deleted. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}`
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Imports Feature values into the Featurestore from a source storage. The progress of the import is tracked by the returned operation. The imported features are guaranteed to be visible to subsequent read operations after the operation is marked as successfully done. If an import operation fails, the Feature values returned from reads and exports may be inconsistent. If consistency is required, the caller must retry the same import request again and wait till the new operation returned is marked as successfully done. There are also scenarios where the caller can cause inconsistency. - Source data for import contains multiple distinct Feature values for the same entity ID and timestamp. - Source is modified during an import. This includes adding, updating, or removing source data and/or metadata. Examples of updating metadata include but are not limited to changing storage location, storage class, or retention policy. - Online serving cluster is under-provisioned.
     * @param {string} params.entityType - (Required) Required. The resource name of the EntityType grouping the Features for which values are being imported. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entityType}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.importFeatureValues = (params) => this._makeRequest('v1beta1/{+entityType}:importFeatureValues', 'POST', params);

    /**
     * Exports Feature values from all the entities of a target EntityType.
     * @param {string} params.entityType - (Required) Required. The resource name of the EntityType from which to export Feature values. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.exportFeatureValues = (params) => this._makeRequest('v1beta1/{+entityType}:exportFeatureValues', 'POST', params);

    /**
     * Delete Feature values from Featurestore. The progress of the deletion is tracked by the returned operation. The deleted feature values are guaranteed to be invisible to subsequent read operations after the operation is marked as successfully done. If a delete feature values operation fails, the feature values returned from reads and exports may be inconsistent. If consistency is required, the caller must retry the same delete request again and wait till the new operation returned is marked as successfully done.
     * @param {string} params.entityType - (Required) Required. The resource name of the EntityType grouping the Features for which values are being deleted from. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entityType}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.deleteFeatureValues = (params) => this._makeRequest('v1beta1/{+entityType}:deleteFeatureValues', 'POST', params);

    this.projects.locations.featurestores.entityTypes.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.featurestores.entityTypes.features = {};

    /**
     * Creates a new Feature in a given EntityType.
     * @param {string} params.featureId - Required. The ID to use for the Feature, which will become the final component of the Feature's resource name. This value may be up to 128 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within an EntityType/FeatureGroup.
     * @param {string} params.parent - (Required) Required. The resource name of the EntityType or FeatureGroup to create a Feature. Format for entity_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.features.create = (params) => this._makeRequest('v1beta1/{+parent}/features', 'POST', params);

    /**
     * Creates a batch of Features in a given EntityType.
     * @param {string} params.parent - (Required) Required. The resource name of the EntityType/FeatureGroup to create the batch of Features under. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` `projects/{project}/locations/{location}/featureGroups/{feature_group}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.features.batchCreate = (params) => this._makeRequest('v1beta1/{+parent}/features:batchCreate', 'POST', params);

    /**
     * Gets details of a single Feature.
     * @param {integer} params.featureStatsAndAnomalySpec.latestStatsCount - Optional. If set, returns the most recent count of stats. Valid value is [0, 100]. If stats_time_range is set, return most recent count of stats within the stats_time_range.
     * @param {string} params.featureStatsAndAnomalySpec.statsTimeRange.endTime - Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     * @param {string} params.featureStatsAndAnomalySpec.statsTimeRange.startTime - Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     * @param {string} params.name - (Required) Required. The name of the Feature resource. Format for entity_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}`
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.features.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists Features in a given EntityType.
     * @param {string} params.filter - Lists the Features that match the filter expression. The following filters are supported: * `value_type`: Supports = and != comparisons. * `create_time`: Supports =, !=, <, >, >=, and <= comparisons. Values must be in RFC 3339 format. * `update_time`: Supports =, !=, <, >, >=, and <= comparisons. Values must be in RFC 3339 format. * `labels`: Supports key-value equality as well as key presence. Examples: * `value_type = DOUBLE` --> Features whose type is DOUBLE. * `create_time > \"2020-01-31T15:30:00.000000Z\" OR update_time > \"2020-01-31T15:30:00.000000Z\"` --> EntityTypes created or updated after 2020-01-31T15:30:00.000000Z. * `labels.active = yes AND labels.env = prod` --> Features having both (active: yes) and (env: prod) labels. * `labels.env: *` --> Any Feature which has a label with 'env' as the key.
     * @param {integer} params.latestStatsCount - Only applicable for Vertex AI Feature Store (Legacy). If set, return the most recent ListFeaturesRequest.latest_stats_count of stats for each Feature in response. Valid value is [0, 10]. If number of stats exists < ListFeaturesRequest.latest_stats_count, return all existing stats.
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `feature_id` * `value_type` (Not supported for FeatureRegistry Feature) * `create_time` * `update_time`
     * @param {integer} params.pageSize - The maximum number of Features to return. The service may return fewer than this value. If unspecified, at most 1000 Features will be returned. The maximum value is 1000; any value greater than 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous FeaturestoreService.ListFeatures call or FeatureRegistryService.ListFeatures call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeaturestoreService.ListFeatures or FeatureRegistryService.ListFeatures must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list Features. Format for entity_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.features.list = (params) => this._makeRequest('v1beta1/{+parent}/features', 'GET', params);

    /**
     * Updates the parameters of a single Feature.
     * @param {string} params.name - (Required) Immutable. Name of the Feature. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}/features/{feature}` `projects/{project}/locations/{location}/featureGroups/{feature_group}/features/{feature}` The last part feature is assigned by the client. The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the Features resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. Updatable fields: * `description` * `labels` * `disable_monitoring` (Not supported for FeatureRegistryService Feature) * `point_of_contact` (Not supported for FeaturestoreService FeatureStore)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.features.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Feature.
     * @param {string} params.name - (Required) Required. The name of the Features to be deleted. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}/features/{feature}` `projects/{project}/locations/{location}/featureGroups/{feature_group}/features/{feature}`
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.features.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.featurestores.entityTypes.features.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.features.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.features.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.features.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.features.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.entityTypes.features.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.featurestores.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.featurestores.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.models = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.models.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.models.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.permissions - The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.models.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Uploads a Model artifact into Vertex AI.
     * @param {string} params.parent - (Required) Required. The resource name of the Location into which to upload the Model. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.models.upload = (params) => this._makeRequest('v1beta1/{+parent}/models:upload', 'POST', params);

    /**
     * Gets a Model.
     * @param {string} params.name - (Required) Required. The name of the Model resource. Format: `projects/{project}/locations/{location}/models/{model}` In order to retrieve a specific version of the model, also provide the version ID or version alias. Example: `projects/{project}/locations/{location}/models/{model}@2` or `projects/{project}/locations/{location}/models/{model}@golden` If no version ID or alias is specified, the "default" version will be returned. The "default" version alias is created for the first version of the model, and can be moved to other versions later on. There will be exactly one default version.
     * @return {object} The API response object.
     */
    this.projects.locations.models.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists Models in a Location.
     * @param {string} params.filter - An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `model` supports = and !=. `model` represents the Model ID, i.e. the last segment of the Model's resource name. * `display_name` supports = and != * `labels` supports general map functions that is: * `labels.key=value` - key:value equality * `labels.key:* or labels:key - key existence * A key including a space must be quoted. `labels."a key"`. * `base_model_name` only supports = Some examples: * `model=1234` * `displayName="myDisplayName"` * `labels.myKey="myValue"` * `baseModelName="text-bison"`
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token. Typically obtained via ListModelsResponse.next_page_token of the previous ModelService.ListModels call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list the Models from. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.models.list = (params) => this._makeRequest('v1beta1/{+parent}/models', 'GET', params);

    /**
     * Lists versions of the specified model.
     * @param {string} params.filter - An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `labels` supports general map functions that is: * `labels.key=value` - key:value equality * `labels.key:* or labels:key - key existence * A key including a space must be quoted. `labels."a key"`. Some examples: * `labels.myKey="myValue"`
     * @param {string} params.name - (Required) Required. The name of the model to list versions for.
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `create_time` * `update_time` Example: `update_time asc, create_time desc`.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token. Typically obtained via next_page_token of the previous ListModelVersions call.
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.models.listVersions = (params) => this._makeRequest('v1beta1/{+name}:listVersions', 'GET', params);

    /**
     * Lists checkpoints of the specified model version.
     * @param {string} params.name - (Required) Required. The name of the model version to list checkpoints for. `projects/{project}/locations/{location}/models/{model}@{version}` Example: `projects/{project}/locations/{location}/models/{model}@2` or `projects/{project}/locations/{location}/models/{model}@golden` If no version ID or alias is specified, the latest version will be used.
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token. Typically obtained via next_page_token of the previous ListModelVersionCheckpoints call.
     * @return {object} The API response object.
     */
    this.projects.locations.models.listCheckpoints = (params) => this._makeRequest('v1beta1/{+name}:listCheckpoints', 'GET', params);

    /**
     * Updates a Model.
     * @param {string} params.name - (Required) The resource name of the Model.
     * @param {string} params.updateMask - Required. The update mask applies to the resource. For the `FieldMask` definition, see google.protobuf.FieldMask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.models.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Incrementally update the dataset used for an examples model.
     * @param {string} params.model - (Required) Required. The resource name of the Model to update. Format: `projects/{project}/locations/{location}/models/{model}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.models.updateExplanationDataset = (params) => this._makeRequest('v1beta1/{+model}:updateExplanationDataset', 'POST', params);

    /**
     * Deletes a Model. A model cannot be deleted if any Endpoint resource has a DeployedModel based on the model in its deployed_models field.
     * @param {string} params.name - (Required) Required. The name of the Model resource to be deleted. Format: `projects/{project}/locations/{location}/models/{model}`
     * @return {object} The API response object.
     */
    this.projects.locations.models.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Deletes a Model version. Model version can only be deleted if there are no DeployedModels created from it. Deleting the only version in the Model is not allowed. Use DeleteModel for deleting the Model instead.
     * @param {string} params.name - (Required) Required. The name of the model version to be deleted, with a version ID explicitly included. Example: `projects/{project}/locations/{location}/models/{model}@1234`
     * @return {object} The API response object.
     */
    this.projects.locations.models.deleteVersion = (params) => this._makeRequest('v1beta1/{+name}:deleteVersion', 'DELETE', params);

    /**
     * Merges a set of aliases for a Model version.
     * @param {string} params.name - (Required) Required. The name of the model version to merge aliases, with a version ID explicitly included. Example: `projects/{project}/locations/{location}/models/{model}@1234`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.models.mergeVersionAliases = (params) => this._makeRequest('v1beta1/{+name}:mergeVersionAliases', 'POST', params);

    /**
     * Exports a trained, exportable Model to a location specified by the user. A Model is considered to be exportable if it has at least one supported export format.
     * @param {string} params.name - (Required) Required. The resource name of the Model to export. The resource name may contain version id or version alias to specify the version, if no version is specified, the default version will be exported.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.models.export = (params) => this._makeRequest('v1beta1/{+name}:export', 'POST', params);

    /**
     * Copies an already existing Vertex AI Model into the specified Location. The source Model must exist in the same Project. When copying custom Models, the users themselves are responsible for Model.metadata content to be region-agnostic, as well as making sure that any resources (e.g. files) it depends on remain accessible.
     * @param {string} params.parent - (Required) Required. The resource name of the Location into which to copy the Model. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.models.copy = (params) => this._makeRequest('v1beta1/{+parent}/models:copy', 'POST', params);

    this.projects.locations.models.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.models.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.models.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.models.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.models.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.models.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.models.evaluations = {};

    /**
     * Imports an externally generated ModelEvaluation.
     * @param {string} params.parent - (Required) Required. The name of the parent model resource. Format: `projects/{project}/locations/{location}/models/{model}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.models.evaluations.import = (params) => this._makeRequest('v1beta1/{+parent}/evaluations:import', 'POST', params);

    /**
     * Gets a ModelEvaluation.
     * @param {string} params.name - (Required) Required. The name of the ModelEvaluation resource. Format: `projects/{project}/locations/{location}/models/{model}/evaluations/{evaluation}`
     * @return {object} The API response object.
     */
    this.projects.locations.models.evaluations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists ModelEvaluations in a Model.
     * @param {string} params.filter - The standard list filter.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token. Typically obtained via ListModelEvaluationsResponse.next_page_token of the previous ModelService.ListModelEvaluations call.
     * @param {string} params.parent - (Required) Required. The resource name of the Model to list the ModelEvaluations from. Format: `projects/{project}/locations/{location}/models/{model}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.models.evaluations.list = (params) => this._makeRequest('v1beta1/{+parent}/evaluations', 'GET', params);

    this.projects.locations.models.evaluations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.models.evaluations.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.models.evaluations.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.models.evaluations.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.models.evaluations.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.models.evaluations.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.models.evaluations.slices = {};

    /**
     * Imports a list of externally generated EvaluatedAnnotations.
     * @param {string} params.parent - (Required) Required. The name of the parent ModelEvaluationSlice resource. Format: `projects/{project}/locations/{location}/models/{model}/evaluations/{evaluation}/slices/{slice}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.models.evaluations.slices.batchImport = (params) => this._makeRequest('v1beta1/{+parent}:batchImport', 'POST', params);

    /**
     * Gets a ModelEvaluationSlice.
     * @param {string} params.name - (Required) Required. The name of the ModelEvaluationSlice resource. Format: `projects/{project}/locations/{location}/models/{model}/evaluations/{evaluation}/slices/{slice}`
     * @return {object} The API response object.
     */
    this.projects.locations.models.evaluations.slices.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists ModelEvaluationSlices in a ModelEvaluation.
     * @param {string} params.filter - The standard list filter. * `slice.dimension` - for =.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token. Typically obtained via ListModelEvaluationSlicesResponse.next_page_token of the previous ModelService.ListModelEvaluationSlices call.
     * @param {string} params.parent - (Required) Required. The resource name of the ModelEvaluation to list the ModelEvaluationSlices from. Format: `projects/{project}/locations/{location}/models/{model}/evaluations/{evaluation}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.models.evaluations.slices.list = (params) => this._makeRequest('v1beta1/{+parent}/slices', 'GET', params);

    this.projects.locations.endpoints = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.permissions - The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates an Endpoint.
     * @param {string} params.endpointId - Immutable. The ID to use for endpoint, which will become the final component of the endpoint resource name. If not provided, Vertex AI will generate a value for this ID. If the first character is a letter, this value may be up to 63 characters, and valid characters are `[a-z0-9-]`. The last character must be a letter or number. If the first character is a number, this value may be up to 9 characters, and valid characters are `[0-9]` with no leading zeros. When using HTTP/JSON, this field is populated based on a query string argument, such as `?endpoint_id=12345`. This is the fallback for fields that are not included in either the URI or the body.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the Endpoint in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.create = (params) => this._makeRequest('v1beta1/{+parent}/endpoints', 'POST', params);

    /**
     * Gets an Endpoint.
     * @param {string} params.name - (Required) Required. The name of the Endpoint resource. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists Endpoints in a Location.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `endpoint` supports `=` and `!=`. `endpoint` represents the Endpoint ID, i.e. the last segment of the Endpoint's resource name. * `display_name` supports `=` and `!=`. * `labels` supports general map functions that is: * `labels.key=value` - key:value equality * `labels.key:*` or `labels:key` - key existence * A key including a space must be quoted. `labels."a key"`. * `base_model_name` only supports `=`. Some examples: * `endpoint=1` * `displayName="myDisplayName"` * `labels.myKey="myValue"` * `baseModelName="text-bison"`
     * @param {string} params.gdcZone - Optional. Configures the Google Distributed Cloud (GDC) environment for online prediction. Only set this field when the Endpoint is to be deployed in a GDC environment.
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token. Typically obtained via ListEndpointsResponse.next_page_token of the previous EndpointService.ListEndpoints call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location from which to list the Endpoints. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Optional. Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.list = (params) => this._makeRequest('v1beta1/{+parent}/endpoints', 'GET', params);

    /**
     * Updates an Endpoint.
     * @param {string} params.name - (Required) Output only. The resource name of the Endpoint.
     * @param {string} params.updateMask - Required. The update mask applies to the resource. See google.protobuf.FieldMask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Updates an Endpoint with a long running operation.
     * @param {string} params.name - (Required) Output only. The resource name of the Endpoint.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.update = (params) => this._makeRequest('v1beta1/{+name}:update', 'POST', params);

    /**
     * Deletes an Endpoint.
     * @param {string} params.name - (Required) Required. The name of the Endpoint resource to be deleted. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Deploys a Model into this Endpoint, creating a DeployedModel within it.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint resource into which to deploy a Model. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.deployModel = (params) => this._makeRequest('v1beta1/{+endpoint}:deployModel', 'POST', params);

    /**
     * Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint resource from which to undeploy a Model. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.undeployModel = (params) => this._makeRequest('v1beta1/{+endpoint}:undeployModel', 'POST', params);

    /**
     * Updates an existing deployed model. Updatable fields include `min_replica_count`, `max_replica_count`, `required_replica_count`, `autoscaling_metric_specs`, `disable_container_logging` (v1 only), and `enable_container_logging` (v1beta1 only).
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint resource into which to mutate a DeployedModel. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.mutateDeployedModel = (params) => this._makeRequest('v1beta1/{+endpoint}:mutateDeployedModel', 'POST', params);

    /**
     * Perform an online prediction.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.predict = (params) => this._makeRequest('v1beta1/{+endpoint}:predict', 'POST', params);

    /**
     * Perform an online prediction with an arbitrary HTTP payload. The response includes the following HTTP headers: * `X-Vertex-AI-Endpoint-Id`: ID of the Endpoint that served this prediction. * `X-Vertex-AI-Deployed-Model-Id`: ID of the Endpoint's DeployedModel that served this prediction.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.rawPredict = (params) => this._makeRequest('v1beta1/{+endpoint}:rawPredict', 'POST', params);

    /**
     * Perform a streaming online prediction with an arbitrary HTTP payload.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.streamRawPredict = (params) => this._makeRequest('v1beta1/{+endpoint}:streamRawPredict', 'POST', params);

    /**
     * Perform an unary online prediction request to a gRPC model server for Vertex first-party products and frameworks.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.directPredict = (params) => this._makeRequest('v1beta1/{+endpoint}:directPredict', 'POST', params);

    /**
     * Perform an unary online prediction request to a gRPC model server for custom containers.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.directRawPredict = (params) => this._makeRequest('v1beta1/{+endpoint}:directRawPredict', 'POST', params);

    /**
     * Perform a server-side streaming online prediction request for Vertex LLM streaming.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.serverStreamingPredict = (params) => this._makeRequest('v1beta1/{+endpoint}:serverStreamingPredict', 'POST', params);

    /**
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.predictLongRunning = (params) => this._makeRequest('v1beta1/{+endpoint}:predictLongRunning', 'POST', params);

    /**
     * Fetch an asynchronous online prediction operation.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.fetchPredictOperation = (params) => this._makeRequest('v1beta1/{+endpoint}:fetchPredictOperation', 'POST', params);

    /**
     * Perform an online explanation. If deployed_model_id is specified, the corresponding DeployModel must have explanation_spec populated. If deployed_model_id is not specified, all DeployedModels must have explanation_spec populated.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the explanation. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.explain = (params) => this._makeRequest('v1beta1/{+endpoint}:explain', 'POST', params);

    /**
     * Perform a token counting.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to perform token counting. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.countTokens = (params) => this._makeRequest('v1beta1/{+endpoint}:countTokens', 'POST', params);

    /**
     * Generate content with multimodal inputs.
     * @param {string} params.model - (Required) Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*\/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.generateContent = (params) => this._makeRequest('v1beta1/{+model}:generateContent', 'POST', params);

    /**
     * Generate content with multimodal inputs with streaming support.
     * @param {string} params.model - (Required) Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*\/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.streamGenerateContent = (params) => this._makeRequest('v1beta1/{+model}:streamGenerateContent', 'POST', params);

    /**
     * Return a list of tokens based on the input text.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to get lists of tokens and token ids.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.computeTokens = (params) => this._makeRequest('v1beta1/{+endpoint}:computeTokens', 'POST', params);

    this.projects.locations.endpoints.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.endpoints.chat = {};

    /**
     * Exposes an OpenAI-compatible endpoint for chat completions.
     * @param {string} params.endpoint - (Required) Required. The name of the endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpoints.chat.completions = (params) => this._makeRequest('v1beta1/{+endpoint}/chat/completions', 'POST', params);

    this.projects.locations.notebookRuntimeTemplates = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimeTemplates.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimeTemplates.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.permissions - The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimeTemplates.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates a NotebookRuntimeTemplate.
     * @param {string} params.notebookRuntimeTemplateId - Optional. User specified ID for the notebook runtime template.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the NotebookRuntimeTemplate. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimeTemplates.create = (params) => this._makeRequest('v1beta1/{+parent}/notebookRuntimeTemplates', 'POST', params);

    /**
     * Gets a NotebookRuntimeTemplate.
     * @param {string} params.name - (Required) Required. The name of the NotebookRuntimeTemplate resource. Format: `projects/{project}/locations/{location}/notebookRuntimeTemplates/{notebook_runtime_template}`
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimeTemplates.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists NotebookRuntimeTemplates in a Location.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `notebookRuntimeTemplate` supports = and !=. `notebookRuntimeTemplate` represents the NotebookRuntimeTemplate ID, i.e. the last segment of the NotebookRuntimeTemplate's resource name. * `display_name` supports = and != * `labels` supports general map functions that is: * `labels.key=value` - key:value equality * `labels.key:* or labels:key - key existence * A key including a space must be quoted. `labels."a key"`. * `notebookRuntimeType` supports = and !=. notebookRuntimeType enum: [USER_DEFINED, ONE_CLICK]. * `machineType` supports = and !=. * `acceleratorType` supports = and !=. Some examples: * `notebookRuntimeTemplate=notebookRuntimeTemplate123` * `displayName="myDisplayName"` * `labels.myKey="myValue"` * `notebookRuntimeType=USER_DEFINED` * `machineType=e2-standard-4` * `acceleratorType=NVIDIA_TESLA_T4`
     * @param {string} params.orderBy - Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `display_name` * `create_time` * `update_time` Example: `display_name, create_time desc`.
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token. Typically obtained via ListNotebookRuntimeTemplatesResponse.next_page_token of the previous NotebookService.ListNotebookRuntimeTemplates call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location from which to list the NotebookRuntimeTemplates. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Optional. Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimeTemplates.list = (params) => this._makeRequest('v1beta1/{+parent}/notebookRuntimeTemplates', 'GET', params);

    /**
     * Deletes a NotebookRuntimeTemplate.
     * @param {string} params.name - (Required) Required. The name of the NotebookRuntimeTemplate resource to be deleted. Format: `projects/{project}/locations/{location}/notebookRuntimeTemplates/{notebook_runtime_template}`
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimeTemplates.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Updates a NotebookRuntimeTemplate.
     * @param {string} params.name - (Required) The resource name of the NotebookRuntimeTemplate.
     * @param {string} params.updateMask - Required. The update mask applies to the resource. For the `FieldMask` definition, see google.protobuf.FieldMask. Input format: `{paths: "${updated_filed}"}` Updatable fields: * `encryption_spec.kms_key_name`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimeTemplates.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.projects.locations.notebookRuntimeTemplates.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimeTemplates.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimeTemplates.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimeTemplates.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimeTemplates.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimeTemplates.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.featureOnlineStores = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.permissions - The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates a new FeatureOnlineStore in a given project and location.
     * @param {string} params.featureOnlineStoreId - Required. The ID to use for this FeatureOnlineStore, which will become the final component of the FeatureOnlineStore's resource name. This value may be up to 60 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within the project and location.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create FeatureOnlineStores. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.create = (params) => this._makeRequest('v1beta1/{+parent}/featureOnlineStores', 'POST', params);

    /**
     * Gets details of a single FeatureOnlineStore.
     * @param {string} params.name - (Required) Required. The name of the FeatureOnlineStore resource.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists FeatureOnlineStores in a given project and location.
     * @param {string} params.filter - Lists the FeatureOnlineStores that match the filter expression. The following fields are supported: * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `update_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `labels`: Supports key-value equality and key presence. Examples: * `create_time > "2020-01-01" OR update_time > "2020-01-01"` FeatureOnlineStores created or updated after 2020-01-01. * `labels.env = "prod"` FeatureOnlineStores with label "env" set to "prod".
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported Fields: * `create_time` * `update_time`
     * @param {integer} params.pageSize - The maximum number of FeatureOnlineStores to return. The service may return fewer than this value. If unspecified, at most 100 FeatureOnlineStores will be returned. The maximum value is 100; any value greater than 100 will be coerced to 100.
     * @param {string} params.pageToken - A page token, received from a previous FeatureOnlineStoreAdminService.ListFeatureOnlineStores call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeatureOnlineStoreAdminService.ListFeatureOnlineStores must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list FeatureOnlineStores. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.list = (params) => this._makeRequest('v1beta1/{+parent}/featureOnlineStores', 'GET', params);

    /**
     * Updates the parameters of a single FeatureOnlineStore.
     * @param {string} params.name - (Required) Identifier. Name of the FeatureOnlineStore. Format: `projects/{project}/locations/{location}/featureOnlineStores/{featureOnlineStore}`
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the FeatureOnlineStore resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. Updatable fields: * `labels` * `description` * `bigtable` * `bigtable.auto_scaling` * `bigtable.enable_multi_region_replica`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a single FeatureOnlineStore. The FeatureOnlineStore must not contain any FeatureViews.
     * @param {boolean} params.force - If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted. (Otherwise, the request will only work if the FeatureOnlineStore has no FeatureViews.)
     * @param {string} params.name - (Required) Required. The name of the FeatureOnlineStore to be deleted. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}`
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.featureOnlineStores.featureViews = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.permissions - The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Fetch feature values under a FeatureView.
     * @param {string} params.featureView - (Required) Required. FeatureView resource format `projects/{project}/locations/{location}/featureOnlineStores/{featureOnlineStore}/featureViews/{featureView}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.fetchFeatureValues = (params) => this._makeRequest('v1beta1/{+featureView}:fetchFeatureValues', 'POST', params);

    /**
     * Bidirectional streaming RPC to fetch feature values under a FeatureView. Requests may not have a one-to-one mapping to responses and responses may be returned out-of-order to reduce latency.
     * @param {string} params.featureView - (Required) Required. FeatureView resource format `projects/{project}/locations/{location}/featureOnlineStores/{featureOnlineStore}/featureViews/{featureView}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.streamingFetchFeatureValues = (params) => this._makeRequest('v1beta1/{+featureView}:streamingFetchFeatureValues', 'POST', params);

    /**
     * Search the nearest entities under a FeatureView. Search only works for indexable feature view; if a feature view isn't indexable, returns Invalid argument response.
     * @param {string} params.featureView - (Required) Required. FeatureView resource format `projects/{project}/locations/{location}/featureOnlineStores/{featureOnlineStore}/featureViews/{featureView}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.searchNearestEntities = (params) => this._makeRequest('v1beta1/{+featureView}:searchNearestEntities', 'POST', params);

    /**
     * Bidirectional streaming RPC to directly write to feature values in a feature view. Requests may not have a one-to-one mapping to responses and responses may be returned out-of-order to reduce latency.
     * @param {string} params.featureView - (Required) FeatureView resource format `projects/{project}/locations/{location}/featureOnlineStores/{featureOnlineStore}/featureViews/{featureView}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.directWrite = (params) => this._makeRequest('v1beta1/{+featureView}:directWrite', 'POST', params);

    /**
     * Creates a new FeatureView in a given FeatureOnlineStore.
     * @param {string} params.featureViewId - Required. The ID to use for the FeatureView, which will become the final component of the FeatureView's resource name. This value may be up to 60 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within a FeatureOnlineStore.
     * @param {string} params.parent - (Required) Required. The resource name of the FeatureOnlineStore to create FeatureViews. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}`
     * @param {boolean} params.runSyncImmediately - Immutable. If set to true, one on demand sync will be run immediately, regardless whether the FeatureView.sync_config is configured or not.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.create = (params) => this._makeRequest('v1beta1/{+parent}/featureViews', 'POST', params);

    /**
     * Gets details of a single FeatureView.
     * @param {string} params.name - (Required) Required. The name of the FeatureView resource. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}/featureViews/{feature_view}`
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists FeatureViews in a given FeatureOnlineStore.
     * @param {string} params.filter - Lists the FeatureViews that match the filter expression. The following filters are supported: * `create_time`: Supports `=`, `!=`, `<`, `>`, `>=`, and `<=` comparisons. Values must be in RFC 3339 format. * `update_time`: Supports `=`, `!=`, `<`, `>`, `>=`, and `<=` comparisons. Values must be in RFC 3339 format. * `labels`: Supports key-value equality as well as key presence. Examples: * `create_time > \"2020-01-31T15:30:00.000000Z\" OR update_time > \"2020-01-31T15:30:00.000000Z\"` --> FeatureViews created or updated after 2020-01-31T15:30:00.000000Z. * `labels.active = yes AND labels.env = prod` --> FeatureViews having both (active: yes) and (env: prod) labels. * `labels.env: *` --> Any FeatureView which has a label with 'env' as the key.
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `feature_view_id` * `create_time` * `update_time`
     * @param {integer} params.pageSize - The maximum number of FeatureViews to return. The service may return fewer than this value. If unspecified, at most 1000 FeatureViews will be returned. The maximum value is 1000; any value greater than 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous FeatureOnlineStoreAdminService.ListFeatureViews call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeatureOnlineStoreAdminService.ListFeatureViews must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the FeatureOnlineStore to list FeatureViews. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}`
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.list = (params) => this._makeRequest('v1beta1/{+parent}/featureViews', 'GET', params);

    /**
     * Updates the parameters of a single FeatureView.
     * @param {string} params.name - (Required) Identifier. Name of the FeatureView. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}/featureViews/{feature_view}`
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the FeatureView resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. Updatable fields: * `labels` * `service_agent_type` * `big_query_source` * `big_query_source.uri` * `big_query_source.entity_id_columns` * `feature_registry_source` * `feature_registry_source.feature_groups` * `sync_config` * `sync_config.cron` * `optimized_config.automatic_resources`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a single FeatureView.
     * @param {string} params.name - (Required) Required. The name of the FeatureView to be deleted. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}/featureViews/{feature_view}`
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Triggers on-demand sync for the FeatureView.
     * @param {string} params.featureView - (Required) Required. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}/featureViews/{feature_view}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.sync = (params) => this._makeRequest('v1beta1/{+featureView}:sync', 'POST', params);

    this.projects.locations.featureOnlineStores.featureViews.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.featureOnlineStores.featureViews.featureViewSyncs = {};

    /**
     * Gets details of a single FeatureViewSync.
     * @param {string} params.name - (Required) Required. The name of the FeatureViewSync resource. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}/featureViews/{feature_view}/featureViewSyncs/{feature_view_sync}`
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.featureViewSyncs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists FeatureViewSyncs in a given FeatureView.
     * @param {string} params.filter - Lists the FeatureViewSyncs that match the filter expression. The following filters are supported: * `create_time`: Supports `=`, `!=`, `<`, `>`, `>=`, and `<=` comparisons. Values must be in RFC 3339 format. Examples: * `create_time > \"2020-01-31T15:30:00.000000Z\"` --> FeatureViewSyncs created after 2020-01-31T15:30:00.000000Z.
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `create_time`
     * @param {integer} params.pageSize - The maximum number of FeatureViewSyncs to return. The service may return fewer than this value. If unspecified, at most 1000 FeatureViewSyncs will be returned. The maximum value is 1000; any value greater than 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous FeatureOnlineStoreAdminService.ListFeatureViewSyncs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeatureOnlineStoreAdminService.ListFeatureViewSyncs must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the FeatureView to list FeatureViewSyncs. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}/featureViews/{feature_view}`
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.featureViews.featureViewSyncs.list = (params) => this._makeRequest('v1beta1/{+parent}/featureViewSyncs', 'GET', params);

    this.projects.locations.featureOnlineStores.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.featureOnlineStores.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.featureGroups = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.permissions - The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates a new FeatureGroup in a given project and location.
     * @param {string} params.featureGroupId - Required. The ID to use for this FeatureGroup, which will become the final component of the FeatureGroup's resource name. This value may be up to 128 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within the project and location.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create FeatureGroups. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.create = (params) => this._makeRequest('v1beta1/{+parent}/featureGroups', 'POST', params);

    /**
     * Gets details of a single FeatureGroup.
     * @param {string} params.name - (Required) Required. The name of the FeatureGroup resource.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists FeatureGroups in a given project and location.
     * @param {string} params.filter - Lists the FeatureGroups that match the filter expression. The following fields are supported: * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `update_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `labels`: Supports key-value equality and key presence. Examples: * `create_time > "2020-01-01" OR update_time > "2020-01-01"` FeatureGroups created or updated after 2020-01-01. * `labels.env = "prod"` FeatureGroups with label "env" set to "prod".
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported Fields: * `create_time` * `update_time`
     * @param {integer} params.pageSize - The maximum number of FeatureGroups to return. The service may return fewer than this value. If unspecified, at most 100 FeatureGroups will be returned. The maximum value is 100; any value greater than 100 will be coerced to 100.
     * @param {string} params.pageToken - A page token, received from a previous FeatureRegistryService.ListFeatureGroups call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeatureRegistryService.ListFeatureGroups must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list FeatureGroups. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.list = (params) => this._makeRequest('v1beta1/{+parent}/featureGroups', 'GET', params);

    /**
     * Updates the parameters of a single FeatureGroup.
     * @param {string} params.name - (Required) Identifier. Name of the FeatureGroup. Format: `projects/{project}/locations/{location}/featureGroups/{featureGroup}`
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the FeatureGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. Updatable fields: * `labels` * `description` * `big_query` * `big_query.entity_id_columns` * `service_agent_type`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a single FeatureGroup.
     * @param {boolean} params.force - If set to true, any Features under this FeatureGroup will also be deleted. (Otherwise, the request will only work if the FeatureGroup has no Features.)
     * @param {string} params.name - (Required) Required. The name of the FeatureGroup to be deleted. Format: `projects/{project}/locations/{location}/featureGroups/{feature_group}`
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.featureGroups.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.featureGroups.features = {};

    /**
     * Creates a new Feature in a given FeatureGroup.
     * @param {string} params.featureId - Required. The ID to use for the Feature, which will become the final component of the Feature's resource name. This value may be up to 128 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within an EntityType/FeatureGroup.
     * @param {string} params.parent - (Required) Required. The resource name of the EntityType or FeatureGroup to create a Feature. Format for entity_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.features.create = (params) => this._makeRequest('v1beta1/{+parent}/features', 'POST', params);

    /**
     * Creates a batch of Features in a given FeatureGroup.
     * @param {string} params.parent - (Required) Required. The resource name of the EntityType/FeatureGroup to create the batch of Features under. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` `projects/{project}/locations/{location}/featureGroups/{feature_group}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.features.batchCreate = (params) => this._makeRequest('v1beta1/{+parent}/features:batchCreate', 'POST', params);

    /**
     * Gets details of a single Feature.
     * @param {integer} params.featureStatsAndAnomalySpec.latestStatsCount - Optional. If set, returns the most recent count of stats. Valid value is [0, 100]. If stats_time_range is set, return most recent count of stats within the stats_time_range.
     * @param {string} params.featureStatsAndAnomalySpec.statsTimeRange.endTime - Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     * @param {string} params.featureStatsAndAnomalySpec.statsTimeRange.startTime - Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     * @param {string} params.name - (Required) Required. The name of the Feature resource. Format for entity_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}`
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.features.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists Features in a given FeatureGroup.
     * @param {string} params.filter - Lists the Features that match the filter expression. The following filters are supported: * `value_type`: Supports = and != comparisons. * `create_time`: Supports =, !=, <, >, >=, and <= comparisons. Values must be in RFC 3339 format. * `update_time`: Supports =, !=, <, >, >=, and <= comparisons. Values must be in RFC 3339 format. * `labels`: Supports key-value equality as well as key presence. Examples: * `value_type = DOUBLE` --> Features whose type is DOUBLE. * `create_time > \"2020-01-31T15:30:00.000000Z\" OR update_time > \"2020-01-31T15:30:00.000000Z\"` --> EntityTypes created or updated after 2020-01-31T15:30:00.000000Z. * `labels.active = yes AND labels.env = prod` --> Features having both (active: yes) and (env: prod) labels. * `labels.env: *` --> Any Feature which has a label with 'env' as the key.
     * @param {integer} params.latestStatsCount - Only applicable for Vertex AI Feature Store (Legacy). If set, return the most recent ListFeaturesRequest.latest_stats_count of stats for each Feature in response. Valid value is [0, 10]. If number of stats exists < ListFeaturesRequest.latest_stats_count, return all existing stats.
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `feature_id` * `value_type` (Not supported for FeatureRegistry Feature) * `create_time` * `update_time`
     * @param {integer} params.pageSize - The maximum number of Features to return. The service may return fewer than this value. If unspecified, at most 1000 Features will be returned. The maximum value is 1000; any value greater than 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous FeaturestoreService.ListFeatures call or FeatureRegistryService.ListFeatures call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeaturestoreService.ListFeatures or FeatureRegistryService.ListFeatures must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list Features. Format for entity_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.features.list = (params) => this._makeRequest('v1beta1/{+parent}/features', 'GET', params);

    /**
     * Updates the parameters of a single Feature.
     * @param {string} params.name - (Required) Immutable. Name of the Feature. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}/features/{feature}` `projects/{project}/locations/{location}/featureGroups/{feature_group}/features/{feature}` The last part feature is assigned by the client. The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the Features resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. Updatable fields: * `description` * `labels` * `disable_monitoring` (Not supported for FeatureRegistryService Feature) * `point_of_contact` (Not supported for FeaturestoreService FeatureStore)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.features.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Feature.
     * @param {string} params.name - (Required) Required. The name of the Features to be deleted. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}/features/{feature}` `projects/{project}/locations/{location}/featureGroups/{feature_group}/features/{feature}`
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.features.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.featureGroups.features.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.features.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.features.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.features.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.features.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.featureGroups.featureMonitors = {};

    /**
     * Creates a new FeatureMonitor in a given project, location and FeatureGroup.
     * @param {string} params.featureMonitorId - Required. The ID to use for this FeatureMonitor, which will become the final component of the FeatureGroup's resource name. This value may be up to 60 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within the FeatureGroup.
     * @param {string} params.parent - (Required) Required. The resource name of FeatureGroup to create FeatureMonitor. Format: `projects/{project}/locations/{location}/featureGroups/{featuregroup}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.featureMonitors.create = (params) => this._makeRequest('v1beta1/{+parent}/featureMonitors', 'POST', params);

    /**
     * Gets details of a single FeatureMonitor.
     * @param {string} params.name - (Required) Required. The name of the FeatureMonitor resource.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.featureMonitors.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists FeatureGroups in a given project and location.
     * @param {string} params.filter - Optional. Lists the FeatureMonitors that match the filter expression. The following fields are supported: * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `update_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `labels`: Supports key-value equality and key presence. Examples: * `create_time > "2020-01-01" OR update_time > "2020-01-01"` FeatureMonitors created or updated after 2020-01-01. * `labels.env = "prod"` FeatureGroups with label "env" set to "prod".
     * @param {string} params.orderBy - Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported Fields: * `create_time` * `update_time`
     * @param {integer} params.pageSize - Optional. The maximum number of FeatureGroups to return. The service may return fewer than this value. If unspecified, at most 100 FeatureMonitors will be returned. The maximum value is 100; any value greater than 100 will be coerced to 100.
     * @param {string} params.pageToken - Optional. A page token, received from a previous FeatureRegistryService.ListFeatureMonitors call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeatureRegistryService.ListFeatureMonitors must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the FeatureGroup to list FeatureMonitors. Format: `projects/{project}/locations/{location}/featureGroups/{featureGroup}`
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.featureMonitors.list = (params) => this._makeRequest('v1beta1/{+parent}/featureMonitors', 'GET', params);

    /**
     * Updates the parameters of a single FeatureMonitor.
     * @param {string} params.name - (Required) Identifier. Name of the FeatureMonitor. Format: `projects/{project}/locations/{location}/featureGroups/{featureGroup}/featureMonitors/{featureMonitor}`
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the FeatureMonitor resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. Updatable fields: * `labels` * `description` * `schedule_config` * `feature_selection_config`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.featureMonitors.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a single FeatureMonitor.
     * @param {string} params.name - (Required) Required. The name of the FeatureMonitor to be deleted. Format: `projects/{project}/locations/{location}/featureGroups/{feature_group}/featureMonitors/{feature_monitor}`
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.featureMonitors.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.featureGroups.featureMonitors.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.featureMonitors.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.featureMonitors.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.featureMonitors.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.featureMonitors.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.featureGroups.featureMonitors.featureMonitorJobs = {};

    /**
     * Creates a new feature monitor job.
     * @param {string} params.featureMonitorJobId - Optional. Output only. System-generated ID for feature monitor job.
     * @param {string} params.parent - (Required) Required. The resource name of FeatureMonitor to create FeatureMonitorJob. Format: `projects/{project}/locations/{location}/featureGroups/{feature_group}/featureMonitors/{feature_monitor}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.featureMonitors.featureMonitorJobs.create = (params) => this._makeRequest('v1beta1/{+parent}/featureMonitorJobs', 'POST', params);

    /**
     * Get a feature monitor job.
     * @param {string} params.name - (Required) Required. The name of the FeatureMonitorJob resource. Format: `projects/{project}/locations/{location}/featureGroups/{feature_group}/featureMonitors/{feature_monitor}/featureMonitorJobs/{feature_monitor_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.featureMonitors.featureMonitorJobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * List feature monitor jobs.
     * @param {string} params.filter - Optional. Lists the FeatureMonitorJobs that match the filter expression. The following fields are supported: * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be Examples: * `create_time > "2020-01-01"` FeatureMonitorJobs created after 2020-01-01.
     * @param {string} params.orderBy - Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported Fields: * `create_time`
     * @param {integer} params.pageSize - Optional. The maximum number of FeatureMonitorJobs to return. The service may return fewer than this value. If unspecified, at most 100 FeatureMonitorJobs will be returned. The maximum value is 100; any value greater than 100 will be coerced to 100.
     * @param {string} params.pageToken - Optional. A page token, received from a previous FeatureRegistryService.ListFeatureMonitorJobs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeatureRegistryService.ListFeatureMonitorJobs must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the FeatureMonitor to list FeatureMonitorJobs. Format: `projects/{project}/locations/{location}/featureGroups/{feature_group}/featureMonitors/{feature_monitor}`
     * @return {object} The API response object.
     */
    this.projects.locations.featureGroups.featureMonitors.featureMonitorJobs.list = (params) => this._makeRequest('v1beta1/{+parent}/featureMonitorJobs', 'GET', params);

    this.projects.locations.publishers = {};

    this.projects.locations.publishers.models = {};

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.publishers.models.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets (creates or updates) configs of publisher models. For example, sets the request/response logging config.
     * @param {string} params.name - (Required) Required. The name of the publisher model, in the format of `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.publishers.models.setPublisherModelConfig = (params) => this._makeRequest('v1beta1/{+name}:setPublisherModelConfig', 'POST', params);

    /**
     * Fetches the configs of publisher models.
     * @param {string} params.name - (Required) Required. The name of the publisher model, in the format of `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`.
     * @return {object} The API response object.
     */
    this.projects.locations.publishers.models.fetchPublisherModelConfig = (params) => this._makeRequest('v1beta1/{+name}:fetchPublisherModelConfig', 'GET', params);

    /**
     * Perform an online prediction.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.publishers.models.predict = (params) => this._makeRequest('v1beta1/{+endpoint}:predict', 'POST', params);

    /**
     * Perform an online prediction with an arbitrary HTTP payload. The response includes the following HTTP headers: * `X-Vertex-AI-Endpoint-Id`: ID of the Endpoint that served this prediction. * `X-Vertex-AI-Deployed-Model-Id`: ID of the Endpoint's DeployedModel that served this prediction.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.publishers.models.rawPredict = (params) => this._makeRequest('v1beta1/{+endpoint}:rawPredict', 'POST', params);

    /**
     * Perform a streaming online prediction with an arbitrary HTTP payload.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.publishers.models.streamRawPredict = (params) => this._makeRequest('v1beta1/{+endpoint}:streamRawPredict', 'POST', params);

    /**
     * Perform a server-side streaming online prediction request for Vertex LLM streaming.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.publishers.models.serverStreamingPredict = (params) => this._makeRequest('v1beta1/{+endpoint}:serverStreamingPredict', 'POST', params);

    /**
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.publishers.models.predictLongRunning = (params) => this._makeRequest('v1beta1/{+endpoint}:predictLongRunning', 'POST', params);

    /**
     * Fetch an asynchronous online prediction operation.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.publishers.models.fetchPredictOperation = (params) => this._makeRequest('v1beta1/{+endpoint}:fetchPredictOperation', 'POST', params);

    /**
     * Perform a token counting.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to perform token counting. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.publishers.models.countTokens = (params) => this._makeRequest('v1beta1/{+endpoint}:countTokens', 'POST', params);

    /**
     * Generate content with multimodal inputs.
     * @param {string} params.model - (Required) Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*\/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.publishers.models.generateContent = (params) => this._makeRequest('v1beta1/{+model}:generateContent', 'POST', params);

    /**
     * Generate content with multimodal inputs with streaming support.
     * @param {string} params.model - (Required) Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*\/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.publishers.models.streamGenerateContent = (params) => this._makeRequest('v1beta1/{+model}:streamGenerateContent', 'POST', params);

    /**
     * Return a list of tokens based on the input text.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to get lists of tokens and token ids.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.publishers.models.computeTokens = (params) => this._makeRequest('v1beta1/{+endpoint}:computeTokens', 'POST', params);

    /**
     * Exports a publisher model to a user provided Google Cloud Storage bucket.
     * @param {string} params.name - (Required) Required. The name of the PublisherModel resource. Format: `publishers/{publisher}/models/{publisher_model}@{version_id}`, or `publishers/hf-{hugging-face-author}/models/{hugging-face-model-name}@001`
     * @param {string} params.parent - (Required) Required. The Location to export the model weights from Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.publishers.models.export = (params) => this._makeRequest('v1beta1/{+parent}/{+name}:export', 'POST', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.agents = {};

    this.projects.locations.agents.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.apps = {};

    this.projects.locations.apps.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.apps.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.apps.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.apps.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.apps.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.apps.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.edgeDevices = {};

    this.projects.locations.edgeDevices.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.edgeDevices.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.edgeDevices.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.edgeDevices.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.edgeDevices.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.edgeDevices.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.evaluationItems = {};

    this.projects.locations.evaluationItems.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluationItems.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluationItems.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluationItems.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluationItems.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.evaluationSets = {};

    this.projects.locations.evaluationSets.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluationSets.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluationSets.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluationSets.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluationSets.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.evaluationRuns = {};

    this.projects.locations.evaluationRuns.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluationRuns.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluationRuns.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluationRuns.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluationRuns.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.evaluationTasks = {};

    this.projects.locations.evaluationTasks.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluationTasks.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluationTasks.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluationTasks.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluationTasks.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.extensionControllers = {};

    this.projects.locations.extensionControllers.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.extensionControllers.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.extensionControllers.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.extensionControllers.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.extensionControllers.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.extensionControllers.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.ragEngineConfig = {};

    this.projects.locations.ragEngineConfig.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.ragEngineConfig.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.ragEngineConfig.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.ragEngineConfig.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.ragEngineConfig.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.ragEngineConfig.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.solvers = {};

    this.projects.locations.solvers.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.solvers.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.solvers.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.solvers.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.cachedContents = {};

    /**
     * Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage.
     * @param {string} params.parent - (Required) Required. The parent resource where the cached content will be created
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.cachedContents.create = (params) => this._makeRequest('v1beta1/{+parent}/cachedContents', 'POST', params);

    /**
     * Gets cached content configurations
     * @param {string} params.name - (Required) Required. The resource name referring to the cached content
     * @return {object} The API response object.
     */
    this.projects.locations.cachedContents.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates cached content configurations
     * @param {string} params.name - (Required) Immutable. Identifier. The server-generated resource name of the cached content Format: projects/{project}/locations/{location}/cachedContents/{cached_content}
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.cachedContents.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes cached content
     * @param {string} params.name - (Required) Required. The resource name referring to the cached content
     * @return {object} The API response object.
     */
    this.projects.locations.cachedContents.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Lists cached contents in a project
     * @param {integer} params.pageSize - Optional. The maximum number of cached contents to return. The service may return fewer than this value. If unspecified, some default (under maximum) number of items will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListCachedContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCachedContents` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of cached contents.
     * @return {object} The API response object.
     */
    this.projects.locations.cachedContents.list = (params) => this._makeRequest('v1beta1/{+parent}/cachedContents', 'GET', params);

    this.projects.locations.datasets = {};

    /**
     * Creates a Dataset.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the Dataset in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.create = (params) => this._makeRequest('v1beta1/{+parent}/datasets', 'POST', params);

    /**
     * Gets a Dataset.
     * @param {string} params.name - (Required) Required. The name of the Dataset resource.
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates a Dataset.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of the Dataset. Format: `projects/{project}/locations/{location}/datasets/{dataset}`
     * @param {string} params.updateMask - Required. The update mask applies to the resource. For the `FieldMask` definition, see google.protobuf.FieldMask. Updatable fields: * `display_name` * `description` * `labels`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Lists Datasets in a Location.
     * @param {string} params.filter - An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `display_name`: supports = and != * `metadata_schema_uri`: supports = and != * `labels` supports general map functions that is: * `labels.key=value` - key:value equality * `labels.key:* or labels:key - key existence * A key including a space must be quoted. `labels."a key"`. Some examples: * `displayName="myDisplayName"` * `labels.myKey="myValue"`
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `display_name` * `create_time` * `update_time`
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @param {string} params.parent - (Required) Required. The name of the Dataset's parent resource. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.list = (params) => this._makeRequest('v1beta1/{+parent}/datasets', 'GET', params);

    /**
     * Deletes a Dataset.
     * @param {string} params.name - (Required) Required. The resource name of the Dataset to delete. Format: `projects/{project}/locations/{location}/datasets/{dataset}`
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Imports data into a Dataset.
     * @param {string} params.name - (Required) Required. The name of the Dataset resource. Format: `projects/{project}/locations/{location}/datasets/{dataset}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.import = (params) => this._makeRequest('v1beta1/{+name}:import', 'POST', params);

    /**
     * Exports data from a Dataset.
     * @param {string} params.name - (Required) Required. The name of the Dataset resource. Format: `projects/{project}/locations/{location}/datasets/{dataset}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.export = (params) => this._makeRequest('v1beta1/{+name}:export', 'POST', params);

    /**
     * Searches DataItems in a Dataset.
     * @param {string} params.annotationFilters - An expression that specifies what Annotations will be returned per DataItem. Annotations satisfied either of the conditions will be returned. * `annotation_spec_id` - for = or !=. Must specify `saved_query_id=` - saved query id that annotations should belong to.
     * @param {string} params.annotationsFilter - An expression for filtering the Annotations that will be returned per DataItem. * `annotation_spec_id` - for = or !=.
     * @param {integer} params.annotationsLimit - If set, only up to this many of Annotations will be returned per DataItemView. The maximum value is 1000. If not set, the maximum value will be used.
     * @param {string} params.dataItemFilter - An expression for filtering the DataItem that will be returned. * `data_item_id` - for = or !=. * `labeled` - for = or !=. * `has_annotation(ANNOTATION_SPEC_ID)` - true only for DataItem that have at least one annotation with annotation_spec_id = `ANNOTATION_SPEC_ID` in the context of SavedQuery or DataLabelingJob. For example: * `data_item=1` * `has_annotation(5)`
     * @param {string} params.dataLabelingJob - The resource name of a DataLabelingJob. Format: `projects/{project}/locations/{location}/dataLabelingJobs/{data_labeling_job}` If this field is set, all of the search will be done in the context of this DataLabelingJob.
     * @param {string} params.dataset - (Required) Required. The resource name of the Dataset from which to search DataItems. Format: `projects/{project}/locations/{location}/datasets/{dataset}`
     * @param {string} params.fieldMask - Mask specifying which fields of DataItemView to read.
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending.
     * @param {string} params.orderByAnnotation.orderBy - A comma-separated list of annotation fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Must also specify saved_query.
     * @param {string} params.orderByAnnotation.savedQuery - Required. Saved query of the Annotation. Only Annotations belong to this saved query will be considered for ordering.
     * @param {string} params.orderByDataItem - A comma-separated list of data item fields to order by, sorted in ascending order. Use "desc" after a field name for descending.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer results than requested. Default and maximum page size is 100.
     * @param {string} params.pageToken - A token identifying a page of results for the server to return Typically obtained via SearchDataItemsResponse.next_page_token of the previous DatasetService.SearchDataItems call.
     * @param {string} params.savedQuery - The resource name of a SavedQuery(annotation set in UI). Format: `projects/{project}/locations/{location}/datasets/{dataset}/savedQueries/{saved_query}` All of the search will be done in the context of this SavedQuery.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.searchDataItems = (params) => this._makeRequest('v1beta1/{+dataset}:searchDataItems', 'GET', params);

    /**
     * Assesses the state or validity of the dataset with respect to a given use case.
     * @param {string} params.name - (Required) Required. The name of the Dataset resource. Used only for MULTIMODAL datasets. Format: `projects/{project}/locations/{location}/datasets/{dataset}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.assess = (params) => this._makeRequest('v1beta1/{+name}:assess', 'POST', params);

    /**
     * Assembles each row of a multimodal dataset and writes the result into a BigQuery table.
     * @param {string} params.name - (Required) Required. The name of the Dataset resource (used only for MULTIMODAL datasets). Format: `projects/{project}/locations/{location}/datasets/{dataset}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.assemble = (params) => this._makeRequest('v1beta1/{+name}:assemble', 'POST', params);

    this.projects.locations.datasets.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.datasets.datasetVersions = {};

    /**
     * Create a version from a Dataset.
     * @param {string} params.parent - (Required) Required. The name of the Dataset resource. Format: `projects/{project}/locations/{location}/datasets/{dataset}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.datasetVersions.create = (params) => this._makeRequest('v1beta1/{+parent}/datasetVersions', 'POST', params);

    /**
     * Updates a DatasetVersion.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of the DatasetVersion. Format: `projects/{project}/locations/{location}/datasets/{dataset}/datasetVersions/{dataset_version}`
     * @param {string} params.updateMask - Required. The update mask applies to the resource. For the `FieldMask` definition, see google.protobuf.FieldMask. Updatable fields: * `display_name`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.datasetVersions.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a Dataset version.
     * @param {string} params.name - (Required) Required. The resource name of the Dataset version to delete. Format: `projects/{project}/locations/{location}/datasets/{dataset}/datasetVersions/{dataset_version}`
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.datasetVersions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Gets a Dataset version.
     * @param {string} params.name - (Required) Required. The resource name of the Dataset version to delete. Format: `projects/{project}/locations/{location}/datasets/{dataset}/datasetVersions/{dataset_version}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.datasetVersions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists DatasetVersions in a Dataset.
     * @param {string} params.filter - Optional. The standard list filter.
     * @param {string} params.orderBy - Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending.
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Dataset to list DatasetVersions from. Format: `projects/{project}/locations/{location}/datasets/{dataset}`
     * @param {string} params.readMask - Optional. Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.datasetVersions.list = (params) => this._makeRequest('v1beta1/{+parent}/datasetVersions', 'GET', params);

    /**
     * Restores a dataset version.
     * @param {string} params.name - (Required) Required. The name of the DatasetVersion resource. Format: `projects/{project}/locations/{location}/datasets/{dataset}/datasetVersions/{dataset_version}`
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.datasetVersions.restore = (params) => this._makeRequest('v1beta1/{+name}:restore', 'GET', params);

    this.projects.locations.datasets.dataItems = {};

    /**
     * Lists DataItems in a Dataset.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Dataset to list DataItems from. Format: `projects/{project}/locations/{location}/datasets/{dataset}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.dataItems.list = (params) => this._makeRequest('v1beta1/{+parent}/dataItems', 'GET', params);

    this.projects.locations.datasets.dataItems.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.dataItems.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.dataItems.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.dataItems.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.dataItems.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.dataItems.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.datasets.dataItems.annotations = {};

    /**
     * Lists Annotations belongs to a dataitem.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @param {string} params.parent - (Required) Required. The resource name of the DataItem to list Annotations from. Format: `projects/{project}/locations/{location}/datasets/{dataset}/dataItems/{data_item}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.dataItems.annotations.list = (params) => this._makeRequest('v1beta1/{+parent}/annotations', 'GET', params);

    this.projects.locations.datasets.dataItems.annotations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.dataItems.annotations.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.dataItems.annotations.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.dataItems.annotations.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.dataItems.annotations.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.dataItems.annotations.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.datasets.savedQueries = {};

    /**
     * Lists SavedQueries in a Dataset.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Dataset to list SavedQueries from. Format: `projects/{project}/locations/{location}/datasets/{dataset}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.savedQueries.list = (params) => this._makeRequest('v1beta1/{+parent}/savedQueries', 'GET', params);

    /**
     * Deletes a SavedQuery.
     * @param {string} params.name - (Required) Required. The resource name of the SavedQuery to delete. Format: `projects/{project}/locations/{location}/datasets/{dataset}/savedQueries/{saved_query}`
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.savedQueries.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.datasets.savedQueries.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.savedQueries.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.savedQueries.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.savedQueries.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.savedQueries.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.savedQueries.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.datasets.annotationSpecs = {};

    /**
     * Gets an AnnotationSpec.
     * @param {string} params.name - (Required) Required. The name of the AnnotationSpec resource. Format: `projects/{project}/locations/{location}/datasets/{dataset}/annotationSpecs/{annotation_spec}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.annotationSpecs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.datasets.annotationSpecs.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.annotationSpecs.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.annotationSpecs.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.annotationSpecs.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.annotationSpecs.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.annotationSpecs.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.deploymentResourcePools = {};

    /**
     * Create a DeploymentResourcePool.
     * @param {string} params.parent - (Required) Required. The parent location resource where this DeploymentResourcePool will be created. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deploymentResourcePools.create = (params) => this._makeRequest('v1beta1/{+parent}/deploymentResourcePools', 'POST', params);

    /**
     * Get a DeploymentResourcePool.
     * @param {string} params.name - (Required) Required. The name of the DeploymentResourcePool to retrieve. Format: `projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}`
     * @return {object} The API response object.
     */
    this.projects.locations.deploymentResourcePools.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * List DeploymentResourcePools in a location.
     * @param {integer} params.pageSize - The maximum number of DeploymentResourcePools to return. The service may return fewer than this value.
     * @param {string} params.pageToken - A page token, received from a previous `ListDeploymentResourcePools` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDeploymentResourcePools` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent Location which owns this collection of DeploymentResourcePools. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.deploymentResourcePools.list = (params) => this._makeRequest('v1beta1/{+parent}/deploymentResourcePools', 'GET', params);

    /**
     * Update a DeploymentResourcePool.
     * @param {string} params.name - (Required) Immutable. The resource name of the DeploymentResourcePool. Format: `projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}`
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deploymentResourcePools.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Delete a DeploymentResourcePool.
     * @param {string} params.name - (Required) Required. The name of the DeploymentResourcePool to delete. Format: `projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}`
     * @return {object} The API response object.
     */
    this.projects.locations.deploymentResourcePools.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * List DeployedModels that have been deployed on this DeploymentResourcePool.
     * @param {string} params.deploymentResourcePool - (Required) Required. The name of the target DeploymentResourcePool to query. Format: `projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}`
     * @param {integer} params.pageSize - The maximum number of DeployedModels to return. The service may return fewer than this value.
     * @param {string} params.pageToken - A page token, received from a previous `QueryDeployedModels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryDeployedModels` must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.projects.locations.deploymentResourcePools.queryDeployedModels = (params) => this._makeRequest('v1beta1/{+deploymentResourcePool}:queryDeployedModels', 'GET', params);

    this.projects.locations.deploymentResourcePools.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.deploymentResourcePools.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.deploymentResourcePools.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.deploymentResourcePools.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.deploymentResourcePools.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.deploymentResourcePools.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.exampleStores = {};

    /**
     * Create an ExampleStore.
     * @param {string} params.exampleStore.createTime - Output only. Timestamp when this ExampleStore was created.
     * @param {string} params.exampleStore.description - Optional. Description of the ExampleStore.
     * @param {string} params.exampleStore.displayName - Required. Display name of the ExampleStore.
     * @param {string} params.exampleStore.exampleStoreConfig.vertexEmbeddingModel - Required. The embedding model to be used for vector embedding. Immutable. Supported models: * "text-embedding-005" * "text-multilingual-embedding-002"
     * @param {string} params.exampleStore.name - Identifier. The resource name of the ExampleStore. This is a unique identifier. Format: projects/{project}/locations/{location}/exampleStores/{example_store}
     * @param {string} params.exampleStore.updateTime - Output only. Timestamp when this ExampleStore was most recently updated.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the ExampleStore in. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.exampleStores.create = (params) => this._makeRequest('v1beta1/{+parent}/exampleStores:create', 'POST', params);

    /**
     * Get an ExampleStore.
     * @param {string} params.name - (Required) Required. The resource name of the ExampleStore. Format: `projects/{project}/locations/{location}/exampleStores/{example_store}`
     * @return {object} The API response object.
     */
    this.projects.locations.exampleStores.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Update an ExampleStore.
     * @param {string} params.name - (Required) Identifier. The resource name of the ExampleStore. This is a unique identifier. Format: projects/{project}/locations/{location}/exampleStores/{example_store}
     * @param {string} params.updateMask - Optional. Mask specifying which fields to update. Supported fields: * `display_name` * `description`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.exampleStores.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Delete an ExampleStore.
     * @param {string} params.name - (Required) Required. The resource name of the ExampleStore to be deleted. Format: `projects/{project}/locations/{location}/exampleStores/{example_store}`
     * @return {object} The API response object.
     */
    this.projects.locations.exampleStores.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * List ExampleStores in a Location.
     * @param {string} params.filter - Optional. The standard list filter. More detail in [AIP-160](https://google.aip.dev/160).
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list the ExampleStores from. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.exampleStores.list = (params) => this._makeRequest('v1beta1/{+parent}/exampleStores', 'GET', params);

    /**
     * Create or update Examples in the Example Store.
     * @param {string} params.exampleStore - (Required) Required. The name of the ExampleStore resource that examples are added to or updated in. Format: `projects/{project}/locations/{location}/exampleStores/{example_store}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.exampleStores.upsertExamples = (params) => this._makeRequest('v1beta1/{+exampleStore}:upsertExamples', 'POST', params);

    /**
     * Remove Examples from the Example Store.
     * @param {string} params.exampleStore - (Required) Required. The name of the ExampleStore resource that the examples should be removed from. Format: `projects/{project}/locations/{location}/exampleStores/{example_store}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.exampleStores.removeExamples = (params) => this._makeRequest('v1beta1/{+exampleStore}:removeExamples', 'POST', params);

    /**
     * Search for similar Examples for given selection criteria.
     * @param {string} params.exampleStore - (Required) Required. The name of the ExampleStore resource that examples are retrieved from. Format: `projects/{project}/locations/{location}/exampleStores/{example_store}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.exampleStores.searchExamples = (params) => this._makeRequest('v1beta1/{+exampleStore}:searchExamples', 'POST', params);

    /**
     * Get Examples from the Example Store.
     * @param {string} params.exampleStore - (Required) Required. The name of the ExampleStore resource that the examples should be fetched from. Format: `projects/{project}/locations/{location}/exampleStores/{example_store}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.exampleStores.fetchExamples = (params) => this._makeRequest('v1beta1/{+exampleStore}:fetchExamples', 'POST', params);

    this.projects.locations.exampleStores.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.exampleStores.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.exampleStores.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.exampleStores.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.exampleStores.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.exampleStores.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.extensions = {};

    /**
     * Imports an Extension.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to import the Extension in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.extensions.import = (params) => this._makeRequest('v1beta1/{+parent}/extensions:import', 'POST', params);

    /**
     * Gets an Extension.
     * @param {string} params.name - (Required) Required. The name of the Extension resource. Format: `projects/{project}/locations/{location}/extensions/{extension}`
     * @return {object} The API response object.
     */
    this.projects.locations.extensions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists Extensions in a location.
     * @param {string} params.filter - Optional. The standard list filter. Supported fields: * `display_name` * `create_time` * `update_time` More detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.orderBy - Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `display_name` * `create_time` * `update_time` Example: `display_name, create_time desc`.
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list the Extensions from. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.extensions.list = (params) => this._makeRequest('v1beta1/{+parent}/extensions', 'GET', params);

    /**
     * Updates an Extension.
     * @param {string} params.name - (Required) Identifier. The resource name of the Extension.
     * @param {string} params.updateMask - Required. Mask specifying which fields to update. Supported fields: * `display_name` * `description` * `runtime_config` * `tool_use_examples` * `manifest.description`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.extensions.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes an Extension.
     * @param {string} params.name - (Required) Required. The name of the Extension resource to be deleted. Format: `projects/{project}/locations/{location}/extensions/{extension}`
     * @return {object} The API response object.
     */
    this.projects.locations.extensions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Executes the request against a given extension.
     * @param {string} params.name - (Required) Required. Name (identifier) of the extension; Format: `projects/{project}/locations/{location}/extensions/{extension}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.extensions.execute = (params) => this._makeRequest('v1beta1/{+name}:execute', 'POST', params);

    /**
     * Queries an extension with a default controller.
     * @param {string} params.name - (Required) Required. Name (identifier) of the extension; Format: `projects/{project}/locations/{location}/extensions/{extension}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.extensions.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.projects.locations.extensions.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.extensions.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.extensions.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.extensions.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.extensions.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.extensions.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.tuningJobs = {};

    /**
     * Creates a TuningJob. A created TuningJob right away will be attempted to be run.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the TuningJob in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tuningJobs.create = (params) => this._makeRequest('v1beta1/{+parent}/tuningJobs', 'POST', params);

    /**
     * Gets a TuningJob.
     * @param {string} params.name - (Required) Required. The name of the TuningJob resource. Format: `projects/{project}/locations/{location}/tuningJobs/{tuning_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.tuningJobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists TuningJobs in a Location.
     * @param {string} params.filter - Optional. The standard list filter.
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token. Typically obtained via ListTuningJobsResponse.next_page_token of the previous GenAiTuningService.ListTuningJob][] call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list the TuningJobs from. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.tuningJobs.list = (params) => this._makeRequest('v1beta1/{+parent}/tuningJobs', 'GET', params);

    /**
     * Cancels a TuningJob. Starts asynchronous cancellation on the TuningJob. The server makes a best effort to cancel the job, but success is not guaranteed. Clients can use GenAiTuningService.GetTuningJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On successful cancellation, the TuningJob is not deleted; instead it becomes a job with a TuningJob.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and TuningJob.state is set to `CANCELLED`.
     * @param {string} params.name - (Required) Required. The name of the TuningJob to cancel. Format: `projects/{project}/locations/{location}/tuningJobs/{tuning_job}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tuningJobs.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Rebase a TunedModel.
     * @param {string} params.parent - (Required) Required. The resource name of the Location into which to rebase the Model. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tuningJobs.rebaseTunedModel = (params) => this._makeRequest('v1beta1/{+parent}/tuningJobs:rebaseTunedModel', 'POST', params);

    this.projects.locations.tuningJobs.operations = {};

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.tuningJobs.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.indexes = {};

    /**
     * Creates an Index.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the Index in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.indexes.create = (params) => this._makeRequest('v1beta1/{+parent}/indexes', 'POST', params);

    /**
     * Gets an Index.
     * @param {string} params.name - (Required) Required. The name of the Index resource. Format: `projects/{project}/locations/{location}/indexes/{index}`
     * @return {object} The API response object.
     */
    this.projects.locations.indexes.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Imports an Index from an external source (e.g., BigQuery).
     * @param {string} params.name - (Required) Required. The name of the Index resource to import data to. Format: `projects/{project}/locations/{location}/indexes/{index}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.indexes.import = (params) => this._makeRequest('v1beta1/{+name}:import', 'POST', params);

    /**
     * Lists Indexes in a Location.
     * @param {string} params.filter - The standard list filter.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token. Typically obtained via ListIndexesResponse.next_page_token of the previous IndexService.ListIndexes call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location from which to list the Indexes. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.indexes.list = (params) => this._makeRequest('v1beta1/{+parent}/indexes', 'GET', params);

    /**
     * Updates an Index.
     * @param {string} params.name - (Required) Output only. The resource name of the Index.
     * @param {string} params.updateMask - The update mask applies to the resource. For the `FieldMask` definition, see google.protobuf.FieldMask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.indexes.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes an Index. An Index can only be deleted when all its DeployedIndexes had been undeployed.
     * @param {string} params.name - (Required) Required. The name of the Index resource to be deleted. Format: `projects/{project}/locations/{location}/indexes/{index}`
     * @return {object} The API response object.
     */
    this.projects.locations.indexes.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Add/update Datapoints into an Index.
     * @param {string} params.index - (Required) Required. The name of the Index resource to be updated. Format: `projects/{project}/locations/{location}/indexes/{index}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.indexes.upsertDatapoints = (params) => this._makeRequest('v1beta1/{+index}:upsertDatapoints', 'POST', params);

    /**
     * Remove Datapoints from an Index.
     * @param {string} params.index - (Required) Required. The name of the Index resource to be updated. Format: `projects/{project}/locations/{location}/indexes/{index}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.indexes.removeDatapoints = (params) => this._makeRequest('v1beta1/{+index}:removeDatapoints', 'POST', params);

    this.projects.locations.indexes.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.indexes.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.indexes.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.indexes.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.indexes.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.indexes.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.indexEndpoints = {};

    /**
     * Creates an IndexEndpoint.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the IndexEndpoint in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.indexEndpoints.create = (params) => this._makeRequest('v1beta1/{+parent}/indexEndpoints', 'POST', params);

    /**
     * Gets an IndexEndpoint.
     * @param {string} params.name - (Required) Required. The name of the IndexEndpoint resource. Format: `projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}`
     * @return {object} The API response object.
     */
    this.projects.locations.indexEndpoints.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists IndexEndpoints in a Location.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `index_endpoint` supports = and !=. `index_endpoint` represents the IndexEndpoint ID, ie. the last segment of the IndexEndpoint's resourcename. * `display_name` supports =, != and regex() (uses [re2](https://github.com/google/re2/wiki/Syntax) syntax) * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* or labels:key - key existence A key including a space must be quoted. `labels."a key"`. Some examples: * `index_endpoint="1"` * `display_name="myDisplayName"` * `regex(display_name, "^A") -> The display name starts with an A. * `labels.myKey="myValue"`
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token. Typically obtained via ListIndexEndpointsResponse.next_page_token of the previous IndexEndpointService.ListIndexEndpoints call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location from which to list the IndexEndpoints. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Optional. Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.indexEndpoints.list = (params) => this._makeRequest('v1beta1/{+parent}/indexEndpoints', 'GET', params);

    /**
     * Updates an IndexEndpoint.
     * @param {string} params.name - (Required) Output only. The resource name of the IndexEndpoint.
     * @param {string} params.updateMask - Required. The update mask applies to the resource. See google.protobuf.FieldMask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.indexEndpoints.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes an IndexEndpoint.
     * @param {string} params.name - (Required) Required. The name of the IndexEndpoint resource to be deleted. Format: `projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}`
     * @return {object} The API response object.
     */
    this.projects.locations.indexEndpoints.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Deploys an Index into this IndexEndpoint, creating a DeployedIndex within it.
     * @param {string} params.indexEndpoint - (Required) Required. The name of the IndexEndpoint resource into which to deploy an Index. Format: `projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.indexEndpoints.deployIndex = (params) => this._makeRequest('v1beta1/{+indexEndpoint}:deployIndex', 'POST', params);

    /**
     * Undeploys an Index from an IndexEndpoint, removing a DeployedIndex from it, and freeing all resources it's using.
     * @param {string} params.indexEndpoint - (Required) Required. The name of the IndexEndpoint resource from which to undeploy an Index. Format: `projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.indexEndpoints.undeployIndex = (params) => this._makeRequest('v1beta1/{+indexEndpoint}:undeployIndex', 'POST', params);

    /**
     * Update an existing DeployedIndex under an IndexEndpoint.
     * @param {string} params.indexEndpoint - (Required) Required. The name of the IndexEndpoint resource into which to deploy an Index. Format: `projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.indexEndpoints.mutateDeployedIndex = (params) => this._makeRequest('v1beta1/{+indexEndpoint}:mutateDeployedIndex', 'POST', params);

    /**
     * Finds the nearest neighbors of each vector within the request.
     * @param {string} params.indexEndpoint - (Required) Required. The name of the index endpoint. Format: `projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.indexEndpoints.findNeighbors = (params) => this._makeRequest('v1beta1/{+indexEndpoint}:findNeighbors', 'POST', params);

    /**
     * Reads the datapoints/vectors of the given IDs. A maximum of 1000 datapoints can be retrieved in a batch.
     * @param {string} params.indexEndpoint - (Required) Required. The name of the index endpoint. Format: `projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.indexEndpoints.readIndexDatapoints = (params) => this._makeRequest('v1beta1/{+indexEndpoint}:readIndexDatapoints', 'POST', params);

    this.projects.locations.indexEndpoints.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.indexEndpoints.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.indexEndpoints.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.indexEndpoints.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.indexEndpoints.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.indexEndpoints.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.customJobs = {};

    /**
     * Creates a CustomJob. A created CustomJob right away will be attempted to be run.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the CustomJob in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.customJobs.create = (params) => this._makeRequest('v1beta1/{+parent}/customJobs', 'POST', params);

    /**
     * Gets a CustomJob.
     * @param {string} params.name - (Required) Required. The name of the CustomJob resource. Format: `projects/{project}/locations/{location}/customJobs/{custom_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.customJobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists CustomJobs in a Location.
     * @param {string} params.filter - The standard list filter. Supported fields: * `display_name` supports `=`, `!=` comparisons, and `:` wildcard. * `state` supports `=`, `!=` comparisons. * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: * `state="JOB_STATE_SUCCEEDED" AND display_name:"my_job_*"` * `state!="JOB_STATE_FAILED" OR display_name="my_job"` * `NOT display_name="my_job"` * `create_time>"2021-05-18T00:00:00Z"` * `labels.keyA=valueA` * `labels.keyB:*`
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token. Typically obtained via ListCustomJobsResponse.next_page_token of the previous JobService.ListCustomJobs call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list the CustomJobs from. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.customJobs.list = (params) => this._makeRequest('v1beta1/{+parent}/customJobs', 'GET', params);

    /**
     * Deletes a CustomJob.
     * @param {string} params.name - (Required) Required. The name of the CustomJob resource to be deleted. Format: `projects/{project}/locations/{location}/customJobs/{custom_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.customJobs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Cancels a CustomJob. Starts asynchronous cancellation on the CustomJob. The server makes a best effort to cancel the job, but success is not guaranteed. Clients can use JobService.GetCustomJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On successful cancellation, the CustomJob is not deleted; instead it becomes a job with a CustomJob.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and CustomJob.state is set to `CANCELLED`.
     * @param {string} params.name - (Required) Required. The name of the CustomJob to cancel. Format: `projects/{project}/locations/{location}/customJobs/{custom_job}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.customJobs.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.customJobs.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.customJobs.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.customJobs.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.customJobs.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.customJobs.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.customJobs.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.dataLabelingJobs = {};

    /**
     * Creates a DataLabelingJob.
     * @param {string} params.parent - (Required) Required. The parent of the DataLabelingJob. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataLabelingJobs.create = (params) => this._makeRequest('v1beta1/{+parent}/dataLabelingJobs', 'POST', params);

    /**
     * Gets a DataLabelingJob.
     * @param {string} params.name - (Required) Required. The name of the DataLabelingJob. Format: `projects/{project}/locations/{location}/dataLabelingJobs/{data_labeling_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.dataLabelingJobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists DataLabelingJobs in a Location.
     * @param {string} params.filter - The standard list filter. Supported fields: * `display_name` supports `=`, `!=` comparisons, and `:` wildcard. * `state` supports `=`, `!=` comparisons. * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: * `state="JOB_STATE_SUCCEEDED" AND display_name:"my_job_*"` * `state!="JOB_STATE_FAILED" OR display_name="my_job"` * `NOT display_name="my_job"` * `create_time>"2021-05-18T00:00:00Z"` * `labels.keyA=valueA` * `labels.keyB:*`
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order by default. Use `desc` after a field name for descending.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @param {string} params.parent - (Required) Required. The parent of the DataLabelingJob. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read. FieldMask represents a set of symbolic field paths. For example, the mask can be `paths: "name"`. The "name" here is a field in DataLabelingJob. If this field is not set, all fields of the DataLabelingJob are returned.
     * @return {object} The API response object.
     */
    this.projects.locations.dataLabelingJobs.list = (params) => this._makeRequest('v1beta1/{+parent}/dataLabelingJobs', 'GET', params);

    /**
     * Deletes a DataLabelingJob.
     * @param {string} params.name - (Required) Required. The name of the DataLabelingJob to be deleted. Format: `projects/{project}/locations/{location}/dataLabelingJobs/{data_labeling_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.dataLabelingJobs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Cancels a DataLabelingJob. Success of cancellation is not guaranteed.
     * @param {string} params.name - (Required) Required. The name of the DataLabelingJob. Format: `projects/{project}/locations/{location}/dataLabelingJobs/{data_labeling_job}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataLabelingJobs.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.dataLabelingJobs.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.dataLabelingJobs.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.dataLabelingJobs.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.dataLabelingJobs.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.dataLabelingJobs.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.dataLabelingJobs.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.hyperparameterTuningJobs = {};

    /**
     * Creates a HyperparameterTuningJob
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the HyperparameterTuningJob in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.hyperparameterTuningJobs.create = (params) => this._makeRequest('v1beta1/{+parent}/hyperparameterTuningJobs', 'POST', params);

    /**
     * Gets a HyperparameterTuningJob
     * @param {string} params.name - (Required) Required. The name of the HyperparameterTuningJob resource. Format: `projects/{project}/locations/{location}/hyperparameterTuningJobs/{hyperparameter_tuning_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.hyperparameterTuningJobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists HyperparameterTuningJobs in a Location.
     * @param {string} params.filter - The standard list filter. Supported fields: * `display_name` supports `=`, `!=` comparisons, and `:` wildcard. * `state` supports `=`, `!=` comparisons. * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: * `state="JOB_STATE_SUCCEEDED" AND display_name:"my_job_*"` * `state!="JOB_STATE_FAILED" OR display_name="my_job"` * `NOT display_name="my_job"` * `create_time>"2021-05-18T00:00:00Z"` * `labels.keyA=valueA` * `labels.keyB:*`
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token. Typically obtained via ListHyperparameterTuningJobsResponse.next_page_token of the previous JobService.ListHyperparameterTuningJobs call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list the HyperparameterTuningJobs from. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.hyperparameterTuningJobs.list = (params) => this._makeRequest('v1beta1/{+parent}/hyperparameterTuningJobs', 'GET', params);

    /**
     * Deletes a HyperparameterTuningJob.
     * @param {string} params.name - (Required) Required. The name of the HyperparameterTuningJob resource to be deleted. Format: `projects/{project}/locations/{location}/hyperparameterTuningJobs/{hyperparameter_tuning_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.hyperparameterTuningJobs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Cancels a HyperparameterTuningJob. Starts asynchronous cancellation on the HyperparameterTuningJob. The server makes a best effort to cancel the job, but success is not guaranteed. Clients can use JobService.GetHyperparameterTuningJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On successful cancellation, the HyperparameterTuningJob is not deleted; instead it becomes a job with a HyperparameterTuningJob.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and HyperparameterTuningJob.state is set to `CANCELLED`.
     * @param {string} params.name - (Required) Required. The name of the HyperparameterTuningJob to cancel. Format: `projects/{project}/locations/{location}/hyperparameterTuningJobs/{hyperparameter_tuning_job}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.hyperparameterTuningJobs.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.hyperparameterTuningJobs.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.hyperparameterTuningJobs.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.hyperparameterTuningJobs.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.hyperparameterTuningJobs.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.hyperparameterTuningJobs.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.hyperparameterTuningJobs.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.nasJobs = {};

    /**
     * Creates a NasJob
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the NasJob in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.nasJobs.create = (params) => this._makeRequest('v1beta1/{+parent}/nasJobs', 'POST', params);

    /**
     * Gets a NasJob
     * @param {string} params.name - (Required) Required. The name of the NasJob resource. Format: `projects/{project}/locations/{location}/nasJobs/{nas_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.nasJobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists NasJobs in a Location.
     * @param {string} params.filter - The standard list filter. Supported fields: * `display_name` supports `=`, `!=` comparisons, and `:` wildcard. * `state` supports `=`, `!=` comparisons. * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: * `state="JOB_STATE_SUCCEEDED" AND display_name:"my_job_*"` * `state!="JOB_STATE_FAILED" OR display_name="my_job"` * `NOT display_name="my_job"` * `create_time>"2021-05-18T00:00:00Z"` * `labels.keyA=valueA` * `labels.keyB:*`
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token. Typically obtained via ListNasJobsResponse.next_page_token of the previous JobService.ListNasJobs call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list the NasJobs from. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.nasJobs.list = (params) => this._makeRequest('v1beta1/{+parent}/nasJobs', 'GET', params);

    /**
     * Deletes a NasJob.
     * @param {string} params.name - (Required) Required. The name of the NasJob resource to be deleted. Format: `projects/{project}/locations/{location}/nasJobs/{nas_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.nasJobs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Cancels a NasJob. Starts asynchronous cancellation on the NasJob. The server makes a best effort to cancel the job, but success is not guaranteed. Clients can use JobService.GetNasJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On successful cancellation, the NasJob is not deleted; instead it becomes a job with a NasJob.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and NasJob.state is set to `CANCELLED`.
     * @param {string} params.name - (Required) Required. The name of the NasJob to cancel. Format: `projects/{project}/locations/{location}/nasJobs/{nas_job}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.nasJobs.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.nasJobs.nasTrialDetails = {};

    /**
     * Gets a NasTrialDetail.
     * @param {string} params.name - (Required) Required. The name of the NasTrialDetail resource. Format: `projects/{project}/locations/{location}/nasJobs/{nas_job}/nasTrialDetails/{nas_trial_detail}`
     * @return {object} The API response object.
     */
    this.projects.locations.nasJobs.nasTrialDetails.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * List top NasTrialDetails of a NasJob.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token. Typically obtained via ListNasTrialDetailsResponse.next_page_token of the previous JobService.ListNasTrialDetails call.
     * @param {string} params.parent - (Required) Required. The name of the NasJob resource. Format: `projects/{project}/locations/{location}/nasJobs/{nas_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.nasJobs.nasTrialDetails.list = (params) => this._makeRequest('v1beta1/{+parent}/nasTrialDetails', 'GET', params);

    this.projects.locations.batchPredictionJobs = {};

    /**
     * Creates a BatchPredictionJob. A BatchPredictionJob once created will right away be attempted to start.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the BatchPredictionJob in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.batchPredictionJobs.create = (params) => this._makeRequest('v1beta1/{+parent}/batchPredictionJobs', 'POST', params);

    /**
     * Gets a BatchPredictionJob
     * @param {string} params.name - (Required) Required. The name of the BatchPredictionJob resource. Format: `projects/{project}/locations/{location}/batchPredictionJobs/{batch_prediction_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.batchPredictionJobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists BatchPredictionJobs in a Location.
     * @param {string} params.filter - The standard list filter. Supported fields: * `display_name` supports `=`, `!=` comparisons, and `:` wildcard. * `model_display_name` supports `=`, `!=` comparisons. * `state` supports `=`, `!=` comparisons. * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: * `state="JOB_STATE_SUCCEEDED" AND display_name:"my_job_*"` * `state!="JOB_STATE_FAILED" OR display_name="my_job"` * `NOT display_name="my_job"` * `create_time>"2021-05-18T00:00:00Z"` * `labels.keyA=valueA` * `labels.keyB:*`
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token. Typically obtained via ListBatchPredictionJobsResponse.next_page_token of the previous JobService.ListBatchPredictionJobs call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list the BatchPredictionJobs from. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.batchPredictionJobs.list = (params) => this._makeRequest('v1beta1/{+parent}/batchPredictionJobs', 'GET', params);

    /**
     * Deletes a BatchPredictionJob. Can only be called on jobs that already finished.
     * @param {string} params.name - (Required) Required. The name of the BatchPredictionJob resource to be deleted. Format: `projects/{project}/locations/{location}/batchPredictionJobs/{batch_prediction_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.batchPredictionJobs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Cancels a BatchPredictionJob. Starts asynchronous cancellation on the BatchPredictionJob. The server makes the best effort to cancel the job, but success is not guaranteed. Clients can use JobService.GetBatchPredictionJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On a successful cancellation, the BatchPredictionJob is not deleted;instead its BatchPredictionJob.state is set to `CANCELLED`. Any files already outputted by the job are not deleted.
     * @param {string} params.name - (Required) Required. The name of the BatchPredictionJob to cancel. Format: `projects/{project}/locations/{location}/batchPredictionJobs/{batch_prediction_job}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.batchPredictionJobs.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.modelDeploymentMonitoringJobs = {};

    /**
     * Creates a ModelDeploymentMonitoringJob. It will run periodically on a configured interval.
     * @param {string} params.parent - (Required) Required. The parent of the ModelDeploymentMonitoringJob. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.modelDeploymentMonitoringJobs.create = (params) => this._makeRequest('v1beta1/{+parent}/modelDeploymentMonitoringJobs', 'POST', params);

    /**
     * Searches Model Monitoring Statistics generated within a given time window.
     * @param {string} params.modelDeploymentMonitoringJob - (Required) Required. ModelDeploymentMonitoring Job resource name. Format: `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.modelDeploymentMonitoringJobs.searchModelDeploymentMonitoringStatsAnomalies = (params) => this._makeRequest('v1beta1/{+modelDeploymentMonitoringJob}:searchModelDeploymentMonitoringStatsAnomalies', 'POST', params);

    /**
     * Gets a ModelDeploymentMonitoringJob.
     * @param {string} params.name - (Required) Required. The resource name of the ModelDeploymentMonitoringJob. Format: `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.modelDeploymentMonitoringJobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists ModelDeploymentMonitoringJobs in a Location.
     * @param {string} params.filter - The standard list filter. Supported fields: * `display_name` supports `=`, `!=` comparisons, and `:` wildcard. * `state` supports `=`, `!=` comparisons. * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: * `state="JOB_STATE_SUCCEEDED" AND display_name:"my_job_*"` * `state!="JOB_STATE_FAILED" OR display_name="my_job"` * `NOT display_name="my_job"` * `create_time>"2021-05-18T00:00:00Z"` * `labels.keyA=valueA` * `labels.keyB:*`
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @param {string} params.parent - (Required) Required. The parent of the ModelDeploymentMonitoringJob. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read
     * @return {object} The API response object.
     */
    this.projects.locations.modelDeploymentMonitoringJobs.list = (params) => this._makeRequest('v1beta1/{+parent}/modelDeploymentMonitoringJobs', 'GET', params);

    /**
     * Updates a ModelDeploymentMonitoringJob.
     * @param {string} params.name - (Required) Output only. Resource name of a ModelDeploymentMonitoringJob.
     * @param {string} params.updateMask - Required. The update mask is used to specify the fields to be overwritten in the ModelDeploymentMonitoringJob resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. For the objective config, the user can either provide the update mask for model_deployment_monitoring_objective_configs or any combination of its nested fields, such as: model_deployment_monitoring_objective_configs.objective_config.training_dataset. Updatable fields: * `display_name` * `model_deployment_monitoring_schedule_config` * `model_monitoring_alert_config` * `logging_sampling_strategy` * `labels` * `log_ttl` * `enable_monitoring_pipeline_logs` . and * `model_deployment_monitoring_objective_configs` . or * `model_deployment_monitoring_objective_configs.objective_config.training_dataset` * `model_deployment_monitoring_objective_configs.objective_config.training_prediction_skew_detection_config` * `model_deployment_monitoring_objective_configs.objective_config.prediction_drift_detection_config`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.modelDeploymentMonitoringJobs.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a ModelDeploymentMonitoringJob.
     * @param {string} params.name - (Required) Required. The resource name of the model monitoring job to delete. Format: `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.modelDeploymentMonitoringJobs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Pauses a ModelDeploymentMonitoringJob. If the job is running, the server makes a best effort to cancel the job. Will mark ModelDeploymentMonitoringJob.state to 'PAUSED'.
     * @param {string} params.name - (Required) Required. The resource name of the ModelDeploymentMonitoringJob to pause. Format: `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.modelDeploymentMonitoringJobs.pause = (params) => this._makeRequest('v1beta1/{+name}:pause', 'POST', params);

    /**
     * Resumes a paused ModelDeploymentMonitoringJob. It will start to run from next scheduled time. A deleted ModelDeploymentMonitoringJob can't be resumed.
     * @param {string} params.name - (Required) Required. The resource name of the ModelDeploymentMonitoringJob to resume. Format: `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.modelDeploymentMonitoringJobs.resume = (params) => this._makeRequest('v1beta1/{+name}:resume', 'POST', params);

    this.projects.locations.modelDeploymentMonitoringJobs.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.modelDeploymentMonitoringJobs.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.modelDeploymentMonitoringJobs.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.modelDeploymentMonitoringJobs.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.modelDeploymentMonitoringJobs.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.modelDeploymentMonitoringJobs.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.metadataStores = {};

    /**
     * Initializes a MetadataStore, including allocation of resources.
     * @param {string} params.metadataStoreId - The {metadatastore} portion of the resource name with the format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}` If not provided, the MetadataStore's ID will be a UUID generated by the service. Must be 4-128 characters in length. Valid characters are `/a-z-/`. Must be unique across all MetadataStores in the parent Location. (Otherwise the request will fail with ALREADY_EXISTS, or PERMISSION_DENIED if the caller can't view the preexisting MetadataStore.)
     * @param {string} params.parent - (Required) Required. The resource name of the Location where the MetadataStore should be created. Format: `projects/{project}/locations/{location}/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.create = (params) => this._makeRequest('v1beta1/{+parent}/metadataStores', 'POST', params);

    /**
     * Retrieves a specific MetadataStore.
     * @param {string} params.name - (Required) Required. The resource name of the MetadataStore to retrieve. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}`
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists MetadataStores for a Location.
     * @param {integer} params.pageSize - The maximum number of Metadata Stores to return. The service may return fewer. Must be in range 1-1000, inclusive. Defaults to 100.
     * @param {string} params.pageToken - A page token, received from a previous MetadataService.ListMetadataStores call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters must match the call that provided the page token. (Otherwise the request will fail with INVALID_ARGUMENT error.)
     * @param {string} params.parent - (Required) Required. The Location whose MetadataStores should be listed. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.list = (params) => this._makeRequest('v1beta1/{+parent}/metadataStores', 'GET', params);

    /**
     * Deletes a single MetadataStore and all its child resources (Artifacts, Executions, and Contexts).
     * @param {boolean} params.force - Deprecated: Field is no longer supported.
     * @param {string} params.name - (Required) Required. The resource name of the MetadataStore to delete. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}`
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.metadataStores.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.metadataStores.artifacts = {};

    /**
     * Creates an Artifact associated with a MetadataStore.
     * @param {string} params.artifactId - The {artifact} portion of the resource name with the format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/artifacts/{artifact}` If not provided, the Artifact's ID will be a UUID generated by the service. Must be 4-128 characters in length. Valid characters are `/a-z-/`. Must be unique across all Artifacts in the parent MetadataStore. (Otherwise the request will fail with ALREADY_EXISTS, or PERMISSION_DENIED if the caller can't view the preexisting Artifact.)
     * @param {string} params.parent - (Required) Required. The resource name of the MetadataStore where the Artifact should be created. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.artifacts.create = (params) => this._makeRequest('v1beta1/{+parent}/artifacts', 'POST', params);

    /**
     * Retrieves a specific Artifact.
     * @param {string} params.name - (Required) Required. The resource name of the Artifact to retrieve. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/artifacts/{artifact}`
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.artifacts.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists Artifacts in the MetadataStore.
     * @param {string} params.filter - Filter specifying the boolean condition for the Artifacts to satisfy in order to be part of the result set. The syntax to define filter query is based on https://google.aip.dev/160. The supported set of filters include the following: * **Attribute filtering**: For example: `display_name = "test"`. Supported fields include: `name`, `display_name`, `uri`, `state`, `schema_title`, `create_time`, and `update_time`. Time fields, such as `create_time` and `update_time`, require values specified in RFC-3339 format. For example: `create_time = "2020-11-19T11:30:00-04:00"` * **Metadata field**: To filter on metadata fields use traversal operation as follows: `metadata..`. For example: `metadata.field_1.number_value = 10.0` In case the field name contains special characters (such as colon), one can embed it inside double quote. For example: `metadata."field:1".number_value = 10.0` * **Context based filtering**: To filter Artifacts based on the contexts to which they belong, use the function operator with the full resource name `in_context()`. For example: `in_context("projects//locations//metadataStores//contexts/")` Each of the above supported filter types can be combined together using logical operators (`AND` & `OR`). Maximum nested expression depth allowed is 5. For example: `display_name = "test" AND metadata.field1.bool_value = true`.
     * @param {string} params.orderBy - How the list of messages is ordered. Specify the values to order by and an ordering operation. The default sorting order is ascending. To specify descending order for a field, users append a " desc" suffix; for example: "foo desc, bar". Subfields are specified with a `.` character, such as foo.bar. see https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - The maximum number of Artifacts to return. The service may return fewer. Must be in range 1-1000, inclusive. Defaults to 100.
     * @param {string} params.pageToken - A page token, received from a previous MetadataService.ListArtifacts call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters must match the call that provided the page token. (Otherwise the request will fail with INVALID_ARGUMENT error.)
     * @param {string} params.parent - (Required) Required. The MetadataStore whose Artifacts should be listed. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}`
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.artifacts.list = (params) => this._makeRequest('v1beta1/{+parent}/artifacts', 'GET', params);

    /**
     * Updates a stored Artifact.
     * @param {boolean} params.allowMissing - If set to true, and the Artifact is not found, a new Artifact is created.
     * @param {string} params.name - (Required) Output only. The resource name of the Artifact.
     * @param {string} params.updateMask - Optional. A FieldMask indicating which fields should be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.artifacts.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes an Artifact.
     * @param {string} params.etag - Optional. The etag of the Artifact to delete. If this is provided, it must match the server's etag. Otherwise, the request will fail with a FAILED_PRECONDITION.
     * @param {string} params.name - (Required) Required. The resource name of the Artifact to delete. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/artifacts/{artifact}`
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.artifacts.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Purges Artifacts.
     * @param {string} params.parent - (Required) Required. The metadata store to purge Artifacts from. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.artifacts.purge = (params) => this._makeRequest('v1beta1/{+parent}/artifacts:purge', 'POST', params);

    /**
     * Retrieves lineage of an Artifact represented through Artifacts and Executions connected by Event edges and returned as a LineageSubgraph.
     * @param {string} params.artifact - (Required) Required. The resource name of the Artifact whose Lineage needs to be retrieved as a LineageSubgraph. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/artifacts/{artifact}` The request may error with FAILED_PRECONDITION if the number of Artifacts, the number of Executions, or the number of Events that would be returned for the Context exceeds 1000.
     * @param {string} params.filter - Filter specifying the boolean condition for the Artifacts to satisfy in order to be part of the Lineage Subgraph. The syntax to define filter query is based on https://google.aip.dev/160. The supported set of filters include the following: * **Attribute filtering**: For example: `display_name = "test"` Supported fields include: `name`, `display_name`, `uri`, `state`, `schema_title`, `create_time`, and `update_time`. Time fields, such as `create_time` and `update_time`, require values specified in RFC-3339 format. For example: `create_time = "2020-11-19T11:30:00-04:00"` * **Metadata field**: To filter on metadata fields use traversal operation as follows: `metadata..`. For example: `metadata.field_1.number_value = 10.0` In case the field name contains special characters (such as colon), one can embed it inside double quote. For example: `metadata."field:1".number_value = 10.0` Each of the above supported filter types can be combined together using logical operators (`AND` & `OR`). Maximum nested expression depth allowed is 5. For example: `display_name = "test" AND metadata.field1.bool_value = true`.
     * @param {integer} params.maxHops - Specifies the size of the lineage graph in terms of number of hops from the specified artifact. Negative Value: INVALID_ARGUMENT error is returned 0: Only input artifact is returned. No value: Transitive closure is performed to return the complete graph.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.artifacts.queryArtifactLineageSubgraph = (params) => this._makeRequest('v1beta1/{+artifact}:queryArtifactLineageSubgraph', 'GET', params);

    this.projects.locations.metadataStores.artifacts.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.artifacts.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.artifacts.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.artifacts.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.artifacts.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.artifacts.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.metadataStores.contexts = {};

    /**
     * Creates a Context associated with a MetadataStore.
     * @param {string} params.contextId - The {context} portion of the resource name with the format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/contexts/{context}`. If not provided, the Context's ID will be a UUID generated by the service. Must be 4-128 characters in length. Valid characters are `/a-z-/`. Must be unique across all Contexts in the parent MetadataStore. (Otherwise the request will fail with ALREADY_EXISTS, or PERMISSION_DENIED if the caller can't view the preexisting Context.)
     * @param {string} params.parent - (Required) Required. The resource name of the MetadataStore where the Context should be created. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.contexts.create = (params) => this._makeRequest('v1beta1/{+parent}/contexts', 'POST', params);

    /**
     * Retrieves a specific Context.
     * @param {string} params.name - (Required) Required. The resource name of the Context to retrieve. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/contexts/{context}`
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.contexts.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists Contexts on the MetadataStore.
     * @param {string} params.filter - Filter specifying the boolean condition for the Contexts to satisfy in order to be part of the result set. The syntax to define filter query is based on https://google.aip.dev/160. Following are the supported set of filters: * **Attribute filtering**: For example: `display_name = "test"`. Supported fields include: `name`, `display_name`, `schema_title`, `create_time`, and `update_time`. Time fields, such as `create_time` and `update_time`, require values specified in RFC-3339 format. For example: `create_time = "2020-11-19T11:30:00-04:00"`. * **Metadata field**: To filter on metadata fields use traversal operation as follows: `metadata..`. For example: `metadata.field_1.number_value = 10.0`. In case the field name contains special characters (such as colon), one can embed it inside double quote. For example: `metadata."field:1".number_value = 10.0` * **Parent Child filtering**: To filter Contexts based on parent-child relationship use the HAS operator as follows: ``` parent_contexts: "projects//locations//metadataStores//contexts/" child_contexts: "projects//locations//metadataStores//contexts/" ``` Each of the above supported filters can be combined together using logical operators (`AND` & `OR`). Maximum nested expression depth allowed is 5. For example: `display_name = "test" AND metadata.field1.bool_value = true`.
     * @param {string} params.orderBy - How the list of messages is ordered. Specify the values to order by and an ordering operation. The default sorting order is ascending. To specify descending order for a field, users append a " desc" suffix; for example: "foo desc, bar". Subfields are specified with a `.` character, such as foo.bar. see https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - The maximum number of Contexts to return. The service may return fewer. Must be in range 1-1000, inclusive. Defaults to 100.
     * @param {string} params.pageToken - A page token, received from a previous MetadataService.ListContexts call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters must match the call that provided the page token. (Otherwise the request will fail with INVALID_ARGUMENT error.)
     * @param {string} params.parent - (Required) Required. The MetadataStore whose Contexts should be listed. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}`
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.contexts.list = (params) => this._makeRequest('v1beta1/{+parent}/contexts', 'GET', params);

    /**
     * Updates a stored Context.
     * @param {boolean} params.allowMissing - If set to true, and the Context is not found, a new Context is created.
     * @param {string} params.name - (Required) Immutable. The resource name of the Context.
     * @param {string} params.updateMask - Optional. A FieldMask indicating which fields should be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.contexts.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a stored Context.
     * @param {string} params.etag - Optional. The etag of the Context to delete. If this is provided, it must match the server's etag. Otherwise, the request will fail with a FAILED_PRECONDITION.
     * @param {boolean} params.force - The force deletion semantics is still undefined. Users should not use this field.
     * @param {string} params.name - (Required) Required. The resource name of the Context to delete. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/contexts/{context}`
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.contexts.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Purges Contexts.
     * @param {string} params.parent - (Required) Required. The metadata store to purge Contexts from. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.contexts.purge = (params) => this._makeRequest('v1beta1/{+parent}/contexts:purge', 'POST', params);

    /**
     * Adds a set of Artifacts and Executions to a Context. If any of the Artifacts or Executions have already been added to a Context, they are simply skipped.
     * @param {string} params.context - (Required) Required. The resource name of the Context that the Artifacts and Executions belong to. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/contexts/{context}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.contexts.addContextArtifactsAndExecutions = (params) => this._makeRequest('v1beta1/{+context}:addContextArtifactsAndExecutions', 'POST', params);

    /**
     * Adds a set of Contexts as children to a parent Context. If any of the child Contexts have already been added to the parent Context, they are simply skipped. If this call would create a cycle or cause any Context to have more than 10 parents, the request will fail with an INVALID_ARGUMENT error.
     * @param {string} params.context - (Required) Required. The resource name of the parent Context. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/contexts/{context}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.contexts.addContextChildren = (params) => this._makeRequest('v1beta1/{+context}:addContextChildren', 'POST', params);

    /**
     * Remove a set of children contexts from a parent Context. If any of the child Contexts were NOT added to the parent Context, they are simply skipped.
     * @param {string} params.context - (Required) Required. The resource name of the parent Context. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/contexts/{context}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.contexts.removeContextChildren = (params) => this._makeRequest('v1beta1/{+context}:removeContextChildren', 'POST', params);

    /**
     * Retrieves Artifacts and Executions within the specified Context, connected by Event edges and returned as a LineageSubgraph.
     * @param {string} params.context - (Required) Required. The resource name of the Context whose Artifacts and Executions should be retrieved as a LineageSubgraph. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/contexts/{context}` The request may error with FAILED_PRECONDITION if the number of Artifacts, the number of Executions, or the number of Events that would be returned for the Context exceeds 1000.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.contexts.queryContextLineageSubgraph = (params) => this._makeRequest('v1beta1/{+context}:queryContextLineageSubgraph', 'GET', params);

    this.projects.locations.metadataStores.contexts.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.contexts.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.contexts.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.contexts.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.contexts.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.contexts.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.metadataStores.executions = {};

    /**
     * Creates an Execution associated with a MetadataStore.
     * @param {string} params.executionId - The {execution} portion of the resource name with the format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/executions/{execution}` If not provided, the Execution's ID will be a UUID generated by the service. Must be 4-128 characters in length. Valid characters are `/a-z-/`. Must be unique across all Executions in the parent MetadataStore. (Otherwise the request will fail with ALREADY_EXISTS, or PERMISSION_DENIED if the caller can't view the preexisting Execution.)
     * @param {string} params.parent - (Required) Required. The resource name of the MetadataStore where the Execution should be created. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.executions.create = (params) => this._makeRequest('v1beta1/{+parent}/executions', 'POST', params);

    /**
     * Retrieves a specific Execution.
     * @param {string} params.name - (Required) Required. The resource name of the Execution to retrieve. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/executions/{execution}`
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.executions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists Executions in the MetadataStore.
     * @param {string} params.filter - Filter specifying the boolean condition for the Executions to satisfy in order to be part of the result set. The syntax to define filter query is based on https://google.aip.dev/160. Following are the supported set of filters: * **Attribute filtering**: For example: `display_name = "test"`. Supported fields include: `name`, `display_name`, `state`, `schema_title`, `create_time`, and `update_time`. Time fields, such as `create_time` and `update_time`, require values specified in RFC-3339 format. For example: `create_time = "2020-11-19T11:30:00-04:00"`. * **Metadata field**: To filter on metadata fields use traversal operation as follows: `metadata..` For example: `metadata.field_1.number_value = 10.0` In case the field name contains special characters (such as colon), one can embed it inside double quote. For example: `metadata."field:1".number_value = 10.0` * **Context based filtering**: To filter Executions based on the contexts to which they belong use the function operator with the full resource name: `in_context()`. For example: `in_context("projects//locations//metadataStores//contexts/")` Each of the above supported filters can be combined together using logical operators (`AND` & `OR`). Maximum nested expression depth allowed is 5. For example: `display_name = "test" AND metadata.field1.bool_value = true`.
     * @param {string} params.orderBy - How the list of messages is ordered. Specify the values to order by and an ordering operation. The default sorting order is ascending. To specify descending order for a field, users append a " desc" suffix; for example: "foo desc, bar". Subfields are specified with a `.` character, such as foo.bar. see https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - The maximum number of Executions to return. The service may return fewer. Must be in range 1-1000, inclusive. Defaults to 100.
     * @param {string} params.pageToken - A page token, received from a previous MetadataService.ListExecutions call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters must match the call that provided the page token. (Otherwise the request will fail with an INVALID_ARGUMENT error.)
     * @param {string} params.parent - (Required) Required. The MetadataStore whose Executions should be listed. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}`
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.executions.list = (params) => this._makeRequest('v1beta1/{+parent}/executions', 'GET', params);

    /**
     * Updates a stored Execution.
     * @param {boolean} params.allowMissing - If set to true, and the Execution is not found, a new Execution is created.
     * @param {string} params.name - (Required) Output only. The resource name of the Execution.
     * @param {string} params.updateMask - Optional. A FieldMask indicating which fields should be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.executions.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes an Execution.
     * @param {string} params.etag - Optional. The etag of the Execution to delete. If this is provided, it must match the server's etag. Otherwise, the request will fail with a FAILED_PRECONDITION.
     * @param {string} params.name - (Required) Required. The resource name of the Execution to delete. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/executions/{execution}`
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.executions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Purges Executions.
     * @param {string} params.parent - (Required) Required. The metadata store to purge Executions from. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.executions.purge = (params) => this._makeRequest('v1beta1/{+parent}/executions:purge', 'POST', params);

    /**
     * Adds Events to the specified Execution. An Event indicates whether an Artifact was used as an input or output for an Execution. If an Event already exists between the Execution and the Artifact, the Event is skipped.
     * @param {string} params.execution - (Required) Required. The resource name of the Execution that the Events connect Artifacts with. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/executions/{execution}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.executions.addExecutionEvents = (params) => this._makeRequest('v1beta1/{+execution}:addExecutionEvents', 'POST', params);

    /**
     * Obtains the set of input and output Artifacts for this Execution, in the form of LineageSubgraph that also contains the Execution and connecting Events.
     * @param {string} params.execution - (Required) Required. The resource name of the Execution whose input and output Artifacts should be retrieved as a LineageSubgraph. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/executions/{execution}`
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.executions.queryExecutionInputsAndOutputs = (params) => this._makeRequest('v1beta1/{+execution}:queryExecutionInputsAndOutputs', 'GET', params);

    this.projects.locations.metadataStores.executions.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.executions.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.executions.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.executions.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.executions.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.executions.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.metadataStores.metadataSchemas = {};

    /**
     * Creates a MetadataSchema.
     * @param {string} params.metadataSchemaId - The {metadata_schema} portion of the resource name with the format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/metadataSchemas/{metadataschema}` If not provided, the MetadataStore's ID will be a UUID generated by the service. Must be 4-128 characters in length. Valid characters are `/a-z-/`. Must be unique across all MetadataSchemas in the parent Location. (Otherwise the request will fail with ALREADY_EXISTS, or PERMISSION_DENIED if the caller can't view the preexisting MetadataSchema.)
     * @param {string} params.parent - (Required) Required. The resource name of the MetadataStore where the MetadataSchema should be created. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.metadataSchemas.create = (params) => this._makeRequest('v1beta1/{+parent}/metadataSchemas', 'POST', params);

    /**
     * Retrieves a specific MetadataSchema.
     * @param {string} params.name - (Required) Required. The resource name of the MetadataSchema to retrieve. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/metadataSchemas/{metadataschema}`
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.metadataSchemas.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists MetadataSchemas.
     * @param {string} params.filter - A query to filter available MetadataSchemas for matching results.
     * @param {integer} params.pageSize - The maximum number of MetadataSchemas to return. The service may return fewer. Must be in range 1-1000, inclusive. Defaults to 100.
     * @param {string} params.pageToken - A page token, received from a previous MetadataService.ListMetadataSchemas call. Provide this to retrieve the next page. When paginating, all other provided parameters must match the call that provided the page token. (Otherwise the request will fail with INVALID_ARGUMENT error.)
     * @param {string} params.parent - (Required) Required. The MetadataStore whose MetadataSchemas should be listed. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}`
     * @return {object} The API response object.
     */
    this.projects.locations.metadataStores.metadataSchemas.list = (params) => this._makeRequest('v1beta1/{+parent}/metadataSchemas', 'GET', params);

    this.projects.locations.migratableResources = {};

    /**
     * Searches all of the resources in automl.googleapis.com, datalabeling.googleapis.com and ml.googleapis.com that can be migrated to Vertex AI's given location.
     * @param {string} params.parent - (Required) Required. The location that the migratable resources should be searched from. It's the Vertex AI location that the resources can be migrated to, not the resources' original location. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migratableResources.search = (params) => this._makeRequest('v1beta1/{+parent}/migratableResources:search', 'POST', params);

    /**
     * Batch migrates resources from ml.googleapis.com, automl.googleapis.com, and datalabeling.googleapis.com to Vertex AI.
     * @param {string} params.parent - (Required) Required. The location of the migrated resource will live in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migratableResources.batchMigrate = (params) => this._makeRequest('v1beta1/{+parent}/migratableResources:batchMigrate', 'POST', params);

    this.projects.locations.migratableResources.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.migratableResources.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.migratableResources.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.migratableResources.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.migratableResources.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.migratableResources.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.modelMonitors = {};

    /**
     * Creates a ModelMonitor.
     * @param {string} params.modelMonitorId - Optional. The ID to use for the Model Monitor, which will become the final component of the model monitor resource name. The maximum length is 63 characters, and valid characters are `/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/`.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the ModelMonitor in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.modelMonitors.create = (params) => this._makeRequest('v1beta1/{+parent}/modelMonitors', 'POST', params);

    /**
     * Updates a ModelMonitor.
     * @param {string} params.name - (Required) Immutable. Resource name of the ModelMonitor. Format: `projects/{project}/locations/{location}/modelMonitors/{model_monitor}`.
     * @param {string} params.updateMask - Required. Mask specifying which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.modelMonitors.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Gets a ModelMonitor.
     * @param {string} params.name - (Required) Required. The name of the ModelMonitor resource. Format: `projects/{project}/locations/{location}/modelMonitors/{model_monitor}`
     * @return {object} The API response object.
     */
    this.projects.locations.modelMonitors.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists ModelMonitors in a Location.
     * @param {string} params.filter - The standard list filter. More detail in [AIP-160](https://google.aip.dev/160).
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list the ModelMonitors from. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.modelMonitors.list = (params) => this._makeRequest('v1beta1/{+parent}/modelMonitors', 'GET', params);

    /**
     * Deletes a ModelMonitor.
     * @param {boolean} params.force - Optional. Force delete the model monitor with schedules.
     * @param {string} params.name - (Required) Required. The name of the ModelMonitor resource to be deleted. Format: `projects/{project}/locations/{location}/modelMonitords/{model_monitor}`
     * @return {object} The API response object.
     */
    this.projects.locations.modelMonitors.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Searches Model Monitoring Stats generated within a given time window.
     * @param {string} params.modelMonitor - (Required) Required. ModelMonitor resource name. Format: `projects/{project}/locations/{location}/modelMonitors/{model_monitor}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.modelMonitors.searchModelMonitoringStats = (params) => this._makeRequest('v1beta1/{+modelMonitor}:searchModelMonitoringStats', 'POST', params);

    /**
     * Returns the Model Monitoring alerts.
     * @param {string} params.modelMonitor - (Required) Required. ModelMonitor resource name. Format: `projects/{project}/locations/{location}/modelMonitors/{model_monitor}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.modelMonitors.searchModelMonitoringAlerts = (params) => this._makeRequest('v1beta1/{+modelMonitor}:searchModelMonitoringAlerts', 'POST', params);

    this.projects.locations.modelMonitors.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.modelMonitors.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.modelMonitors.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.modelMonitors.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.modelMonitors.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.modelMonitors.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.modelMonitors.modelMonitoringJobs = {};

    /**
     * Creates a ModelMonitoringJob.
     * @param {string} params.modelMonitoringJobId - Optional. The ID to use for the Model Monitoring Job, which will become the final component of the model monitoring job resource name. The maximum length is 63 characters, and valid characters are `/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/`.
     * @param {string} params.parent - (Required) Required. The parent of the ModelMonitoringJob. Format: `projects/{project}/locations/{location}/modelMoniitors/{model_monitor}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.modelMonitors.modelMonitoringJobs.create = (params) => this._makeRequest('v1beta1/{+parent}/modelMonitoringJobs', 'POST', params);

    /**
     * Gets a ModelMonitoringJob.
     * @param {string} params.name - (Required) Required. The resource name of the ModelMonitoringJob. Format: `projects/{project}/locations/{location}/modelMonitors/{model_monitor}/modelMonitoringJobs/{model_monitoring_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.modelMonitors.modelMonitoringJobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists ModelMonitoringJobs. Callers may choose to read across multiple Monitors as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of modelMonitor id in the parent. Format `projects/{project_id}/locations/{location}/moodelMonitors/-/modelMonitoringJobs`
     * @param {string} params.filter - The standard list filter. More detail in [AIP-160](https://google.aip.dev/160).
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @param {string} params.parent - (Required) Required. The parent of the ModelMonitoringJob. Format: `projects/{project}/locations/{location}/modelMonitors/{model_monitor}`
     * @param {string} params.readMask - Mask specifying which fields to read
     * @return {object} The API response object.
     */
    this.projects.locations.modelMonitors.modelMonitoringJobs.list = (params) => this._makeRequest('v1beta1/{+parent}/modelMonitoringJobs', 'GET', params);

    /**
     * Deletes a ModelMonitoringJob.
     * @param {string} params.name - (Required) Required. The resource name of the model monitoring job to delete. Format: `projects/{project}/locations/{location}/modelMonitors/{model_monitor}/modelMonitoringJobs/{model_monitoring_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.modelMonitors.modelMonitoringJobs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.notebookRuntimes = {};

    /**
     * @param {string} params.name - (Required) Required. The name of the NotebookRuntime resource. Format: `projects/{project}/locations/{location}/notebookRuntimes/{notebook_runtime}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimes.reportEvent = (params) => this._makeRequest('v1beta1/{+name}:reportEvent', 'POST', params);

    /**
     * Internal only: Called from Compute Engine instance to obtain EUC for owner Anonymous access: authenticates caller using VM identity JWT. Design doc: go/colab-on-vertex-euc-dd
     * @param {string} params.name - (Required) Required. The name of the resource requesting the OAuth2 token. Format: `projects/{project}/locations/{location}/notebookRuntimes/{notebook_runtime}` `projects/{project}/locations/{location}/notebookExecutionJobs/{notebook_execution_job}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimes.generateAccessToken = (params) => this._makeRequest('v1beta1/{+name}:generateAccessToken', 'POST', params);

    /**
     * Assigns a NotebookRuntime to a user for a particular Notebook file. This method will either returns an existing assignment or generates a new one.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to get the NotebookRuntime assignment. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimes.assign = (params) => this._makeRequest('v1beta1/{+parent}/notebookRuntimes:assign', 'POST', params);

    /**
     * Gets a NotebookRuntime.
     * @param {string} params.name - (Required) Required. The name of the NotebookRuntime resource. Instead of checking whether the name is in valid NotebookRuntime resource name format, directly throw NotFound exception if there is no such NotebookRuntime in spanner.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimes.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists NotebookRuntimes in a Location.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `notebookRuntime` supports = and !=. `notebookRuntime` represents the NotebookRuntime ID, i.e. the last segment of the NotebookRuntime's resource name. * `displayName` supports = and != and regex. * `notebookRuntimeTemplate` supports = and !=. `notebookRuntimeTemplate` represents the NotebookRuntimeTemplate ID, i.e. the last segment of the NotebookRuntimeTemplate's resource name. * `healthState` supports = and !=. healthState enum: [HEALTHY, UNHEALTHY, HEALTH_STATE_UNSPECIFIED]. * `runtimeState` supports = and !=. runtimeState enum: [RUNTIME_STATE_UNSPECIFIED, RUNNING, BEING_STARTED, BEING_STOPPED, STOPPED, BEING_UPGRADED, ERROR, INVALID]. * `runtimeUser` supports = and !=. * API version is UI only: `uiState` supports = and !=. uiState enum: [UI_RESOURCE_STATE_UNSPECIFIED, UI_RESOURCE_STATE_BEING_CREATED, UI_RESOURCE_STATE_ACTIVE, UI_RESOURCE_STATE_BEING_DELETED, UI_RESOURCE_STATE_CREATION_FAILED]. * `notebookRuntimeType` supports = and !=. notebookRuntimeType enum: [USER_DEFINED, ONE_CLICK]. * `machineType` supports = and !=. * `acceleratorType` supports = and !=. Some examples: * `notebookRuntime="notebookRuntime123"` * `displayName="myDisplayName"` and `displayName=~"myDisplayNameRegex"` * `notebookRuntimeTemplate="notebookRuntimeTemplate321"` * `healthState=HEALTHY` * `runtimeState=RUNNING` * `runtimeUser="test@google.com"` * `uiState=UI_RESOURCE_STATE_BEING_DELETED` * `notebookRuntimeType=USER_DEFINED` * `machineType=e2-standard-4` * `acceleratorType=NVIDIA_TESLA_T4`
     * @param {string} params.orderBy - Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `display_name` * `create_time` * `update_time` Example: `display_name, create_time desc`.
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token. Typically obtained via ListNotebookRuntimesResponse.next_page_token of the previous NotebookService.ListNotebookRuntimes call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location from which to list the NotebookRuntimes. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Optional. Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimes.list = (params) => this._makeRequest('v1beta1/{+parent}/notebookRuntimes', 'GET', params);

    /**
     * Deletes a NotebookRuntime.
     * @param {string} params.name - (Required) Required. The name of the NotebookRuntime resource to be deleted. Instead of checking whether the name is in valid NotebookRuntime resource name format, directly throw NotFound exception if there is no such NotebookRuntime in spanner.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimes.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Upgrades a NotebookRuntime.
     * @param {string} params.name - (Required) Required. The name of the NotebookRuntime resource to be upgrade. Instead of checking whether the name is in valid NotebookRuntime resource name format, directly throw NotFound exception if there is no such NotebookRuntime in spanner.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimes.upgrade = (params) => this._makeRequest('v1beta1/{+name}:upgrade', 'POST', params);

    /**
     * Starts a NotebookRuntime.
     * @param {string} params.name - (Required) Required. The name of the NotebookRuntime resource to be started. Instead of checking whether the name is in valid NotebookRuntime resource name format, directly throw NotFound exception if there is no such NotebookRuntime in spanner.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimes.start = (params) => this._makeRequest('v1beta1/{+name}:start', 'POST', params);

    /**
     * Stops a NotebookRuntime.
     * @param {string} params.name - (Required) Required. The name of the NotebookRuntime resource to be stopped. Instead of checking whether the name is in valid NotebookRuntime resource name format, directly throw NotFound exception if there is no such NotebookRuntime in spanner.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimes.stop = (params) => this._makeRequest('v1beta1/{+name}:stop', 'POST', params);

    this.projects.locations.notebookRuntimes.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimes.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimes.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimes.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimes.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookRuntimes.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.notebookExecutionJobs = {};

    /**
     * @param {string} params.name - (Required) Required. The name of the NotebookExecutionJob resource. Format: `projects/{project}/locations/{location}/notebookExecutionJobs/{notebook_execution_jobs}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookExecutionJobs.reportEvent = (params) => this._makeRequest('v1beta1/{+name}:reportEvent', 'POST', params);

    /**
     * Internal only: Called from Compute Engine instance to obtain EUC for owner Anonymous access: authenticates caller using VM identity JWT. Design doc: go/colab-on-vertex-euc-dd
     * @param {string} params.name - (Required) Required. The name of the resource requesting the OAuth2 token. Format: `projects/{project}/locations/{location}/notebookRuntimes/{notebook_runtime}` `projects/{project}/locations/{location}/notebookExecutionJobs/{notebook_execution_job}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookExecutionJobs.generateAccessToken = (params) => this._makeRequest('v1beta1/{+name}:generateAccessToken', 'POST', params);

    /**
     * Creates a NotebookExecutionJob.
     * @param {string} params.notebookExecutionJobId - Optional. User specified ID for the NotebookExecutionJob.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the NotebookExecutionJob. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookExecutionJobs.create = (params) => this._makeRequest('v1beta1/{+parent}/notebookExecutionJobs', 'POST', params);

    /**
     * Gets a NotebookExecutionJob.
     * @param {string} params.name - (Required) Required. The name of the NotebookExecutionJob resource.
     * @param {string} params.view - Optional. The NotebookExecutionJob view. Defaults to BASIC.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookExecutionJobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists NotebookExecutionJobs in a Location.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `notebookExecutionJob` supports = and !=. `notebookExecutionJob` represents the NotebookExecutionJob ID. * `displayName` supports = and != and regex. * `schedule` supports = and != and regex. Some examples: * `notebookExecutionJob="123"` * `notebookExecutionJob="my-execution-job"` * `displayName="myDisplayName"` and `displayName=~"myDisplayNameRegex"`
     * @param {string} params.orderBy - Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `display_name` * `create_time` * `update_time` Example: `display_name, create_time desc`.
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token. Typically obtained via ListNotebookExecutionJobsResponse.next_page_token of the previous NotebookService.ListNotebookExecutionJobs call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location from which to list the NotebookExecutionJobs. Format: `projects/{project}/locations/{location}`
     * @param {string} params.view - Optional. The NotebookExecutionJob view. Defaults to BASIC.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookExecutionJobs.list = (params) => this._makeRequest('v1beta1/{+parent}/notebookExecutionJobs', 'GET', params);

    /**
     * Deletes a NotebookExecutionJob.
     * @param {string} params.name - (Required) Required. The name of the NotebookExecutionJob resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookExecutionJobs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.notebookExecutionJobs.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookExecutionJobs.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookExecutionJobs.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookExecutionJobs.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookExecutionJobs.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.notebookExecutionJobs.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.persistentResources = {};

    /**
     * Creates a PersistentResource.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the PersistentResource in. Format: `projects/{project}/locations/{location}`
     * @param {string} params.persistentResourceId - Required. The ID to use for the PersistentResource, which become the final component of the PersistentResource's resource name. The maximum length is 63 characters, and valid characters are `/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.persistentResources.create = (params) => this._makeRequest('v1beta1/{+parent}/persistentResources', 'POST', params);

    /**
     * Gets a PersistentResource.
     * @param {string} params.name - (Required) Required. The name of the PersistentResource resource. Format: `projects/{project_id_or_number}/locations/{location_id}/persistentResources/{persistent_resource_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.persistentResources.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists PersistentResources in a Location.
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token. Typically obtained via ListPersistentResourcesResponse.next_page_token of the previous PersistentResourceService.ListPersistentResource call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list the PersistentResources from. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.persistentResources.list = (params) => this._makeRequest('v1beta1/{+parent}/persistentResources', 'GET', params);

    /**
     * Deletes a PersistentResource.
     * @param {string} params.name - (Required) Required. The name of the PersistentResource to be deleted. Format: `projects/{project}/locations/{location}/persistentResources/{persistent_resource}`
     * @return {object} The API response object.
     */
    this.projects.locations.persistentResources.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Updates a PersistentResource.
     * @param {string} params.name - (Required) Immutable. Resource name of a PersistentResource.
     * @param {string} params.updateMask - Required. Specify the fields to be overwritten in the PersistentResource by the update method.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.persistentResources.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Reboots a PersistentResource.
     * @param {string} params.name - (Required) Required. The name of the PersistentResource resource. Format: `projects/{project_id_or_number}/locations/{location_id}/persistentResources/{persistent_resource_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.persistentResources.reboot = (params) => this._makeRequest('v1beta1/{+name}:reboot', 'POST', params);

    this.projects.locations.persistentResources.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.persistentResources.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.persistentResources.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.persistentResources.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.persistentResources.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.persistentResources.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.trainingPipelines = {};

    /**
     * Creates a TrainingPipeline. A created TrainingPipeline right away will be attempted to be run.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the TrainingPipeline in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.trainingPipelines.create = (params) => this._makeRequest('v1beta1/{+parent}/trainingPipelines', 'POST', params);

    /**
     * Gets a TrainingPipeline.
     * @param {string} params.name - (Required) Required. The name of the TrainingPipeline resource. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`
     * @return {object} The API response object.
     */
    this.projects.locations.trainingPipelines.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists TrainingPipelines in a Location.
     * @param {string} params.filter - The standard list filter. Supported fields: * `display_name` supports `=`, `!=` comparisons, and `:` wildcard. * `state` supports `=`, `!=` comparisons. * `training_task_definition` `=`, `!=` comparisons, and `:` wildcard. * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: * `state="PIPELINE_STATE_SUCCEEDED" AND display_name:"my_pipeline_*"` * `state!="PIPELINE_STATE_FAILED" OR display_name="my_pipeline"` * `NOT display_name="my_pipeline"` * `create_time>"2021-05-18T00:00:00Z"` * `training_task_definition:"*automl_text_classification*"`
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token. Typically obtained via ListTrainingPipelinesResponse.next_page_token of the previous PipelineService.ListTrainingPipelines call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list the TrainingPipelines from. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.trainingPipelines.list = (params) => this._makeRequest('v1beta1/{+parent}/trainingPipelines', 'GET', params);

    /**
     * Deletes a TrainingPipeline.
     * @param {string} params.name - (Required) Required. The name of the TrainingPipeline resource to be deleted. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`
     * @return {object} The API response object.
     */
    this.projects.locations.trainingPipelines.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Cancels a TrainingPipeline. Starts asynchronous cancellation on the TrainingPipeline. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use PipelineService.GetTrainingPipeline or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the TrainingPipeline is not deleted; instead it becomes a pipeline with a TrainingPipeline.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and TrainingPipeline.state is set to `CANCELLED`.
     * @param {string} params.name - (Required) Required. The name of the TrainingPipeline to cancel. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.trainingPipelines.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.trainingPipelines.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.trainingPipelines.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.trainingPipelines.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.trainingPipelines.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.trainingPipelines.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.trainingPipelines.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.pipelineJobs = {};

    /**
     * Creates a PipelineJob. A PipelineJob will run immediately when created.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the PipelineJob in. Format: `projects/{project}/locations/{location}`
     * @param {string} params.pipelineJobId - The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. If not provided, an ID will be automatically generated. This value should be less than 128 characters, and valid characters are `/a-z-/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelineJobs.create = (params) => this._makeRequest('v1beta1/{+parent}/pipelineJobs', 'POST', params);

    /**
     * Gets a PipelineJob.
     * @param {string} params.name - (Required) Required. The name of the PipelineJob resource. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.pipelineJobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists PipelineJobs in a Location.
     * @param {string} params.filter - Lists the PipelineJobs that match the filter expression. The following fields are supported: * `pipeline_name`: Supports `=` and `!=` comparisons. * `display_name`: Supports `=`, `!=` comparisons, and `:` wildcard. * `pipeline_job_user_id`: Supports `=`, `!=` comparisons, and `:` wildcard. for example, can check if pipeline's display_name contains *step* by doing display_name:\"*step*\" * `state`: Supports `=` and `!=` comparisons. * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `update_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `end_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `labels`: Supports key-value equality and key presence. * `template_uri`: Supports `=`, `!=` comparisons, and `:` wildcard. * `template_metadata.version`: Supports `=`, `!=` comparisons, and `:` wildcard. Filter expressions can be combined together using logical operators (`AND` & `OR`). For example: `pipeline_name="test" AND create_time>"2020-05-18T13:30:00Z"`. The syntax to define filter expression is based on https://google.aip.dev/160. Examples: * `create_time>"2021-05-18T00:00:00Z" OR update_time>"2020-05-18T00:00:00Z"` PipelineJobs created or updated after 2020-05-18 00:00:00 UTC. * `labels.env = "prod"` PipelineJobs with label "env" set to "prod".
     * @param {string} params.orderBy - A comma-separated list of fields to order by. The default sort order is in ascending order. Use "desc" after a field name for descending. You can have multiple order_by fields provided e.g. "create_time desc, end_time", "end_time, start_time, update_time" For example, using "create_time desc, end_time" will order results by create time in descending order, and if there are multiple jobs having the same create time, order them by the end time in ascending order. if order_by is not specified, it will order by default order is create time in descending order. Supported fields: * `create_time` * `update_time` * `end_time` * `start_time`
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token. Typically obtained via ListPipelineJobsResponse.next_page_token of the previous PipelineService.ListPipelineJobs call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list the PipelineJobs from. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelineJobs.list = (params) => this._makeRequest('v1beta1/{+parent}/pipelineJobs', 'GET', params);

    /**
     * Deletes a PipelineJob.
     * @param {string} params.name - (Required) Required. The name of the PipelineJob resource to be deleted. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`
     * @return {object} The API response object.
     */
    this.projects.locations.pipelineJobs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Batch deletes PipelineJobs The Operation is atomic. If it fails, none of the PipelineJobs are deleted. If it succeeds, all of the PipelineJobs are deleted.
     * @param {string} params.parent - (Required) Required. The name of the PipelineJobs' parent resource. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelineJobs.batchDelete = (params) => this._makeRequest('v1beta1/{+parent}/pipelineJobs:batchDelete', 'POST', params);

    /**
     * Cancels a PipelineJob. Starts asynchronous cancellation on the PipelineJob. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use PipelineService.GetPipelineJob or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the PipelineJob is not deleted; instead it becomes a pipeline with a PipelineJob.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and PipelineJob.state is set to `CANCELLED`.
     * @param {string} params.name - (Required) Required. The name of the PipelineJob to cancel. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelineJobs.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Batch cancel PipelineJobs. Firstly the server will check if all the jobs are in non-terminal states, and skip the jobs that are already terminated. If the operation failed, none of the pipeline jobs are cancelled. The server will poll the states of all the pipeline jobs periodically to check the cancellation status. This operation will return an LRO.
     * @param {string} params.parent - (Required) Required. The name of the PipelineJobs' parent resource. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelineJobs.batchCancel = (params) => this._makeRequest('v1beta1/{+parent}/pipelineJobs:batchCancel', 'POST', params);

    this.projects.locations.pipelineJobs.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelineJobs.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelineJobs.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelineJobs.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelineJobs.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelineJobs.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.reasoningEngines = {};

    /**
     * Queries using a reasoning engine.
     * @param {string} params.name - (Required) Required. The name of the ReasoningEngine resource to use. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    /**
     * Streams queries using a reasoning engine.
     * @param {string} params.name - (Required) Required. The name of the ReasoningEngine resource to use. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.streamQuery = (params) => this._makeRequest('v1beta1/{+name}:streamQuery', 'POST', params);

    /**
     * Creates a reasoning engine.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the ReasoningEngine in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.create = (params) => this._makeRequest('v1beta1/{+parent}/reasoningEngines', 'POST', params);

    /**
     * Gets a reasoning engine.
     * @param {string} params.name - (Required) Required. The name of the ReasoningEngine resource. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists reasoning engines in a location.
     * @param {string} params.filter - Optional. The standard list filter. More detail in [AIP-160](https://google.aip.dev/160).
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list the ReasoningEngines from. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.list = (params) => this._makeRequest('v1beta1/{+parent}/reasoningEngines', 'GET', params);

    /**
     * Updates a reasoning engine.
     * @param {string} params.name - (Required) Identifier. The resource name of the ReasoningEngine. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @param {string} params.updateMask - Optional. Mask specifying which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a reasoning engine.
     * @param {boolean} params.force - Optional. If set to true, child resources of this reasoning engine will also be deleted. Otherwise, the request will fail with FAILED_PRECONDITION error when the reasoning engine has undeleted child resources.
     * @param {string} params.name - (Required) Required. The name of the ReasoningEngine resource to be deleted. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.reasoningEngines.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.reasoningEngines.sandboxEnvironments = {};

    this.projects.locations.reasoningEngines.sandboxEnvironments.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sandboxEnvironments.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sandboxEnvironments.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sandboxEnvironments.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sandboxEnvironments.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sandboxEnvironments.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.reasoningEngines.examples = {};

    this.projects.locations.reasoningEngines.examples.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.examples.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.examples.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.examples.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.examples.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.reasoningEngines.memories = {};

    /**
     * Create a Memory.
     * @param {string} params.parent - (Required) Required. The resource name of the ReasoningEngine to create the Memory under. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.memories.create = (params) => this._makeRequest('v1beta1/{+parent}/memories', 'POST', params);

    /**
     * Get a Memory.
     * @param {string} params.name - (Required) Required. The resource name of the Memory. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/memories/{memory}`
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.memories.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Update a Memory.
     * @param {string} params.name - (Required) Identifier. The resource name of the Memory. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/memories/{memory}`
     * @param {string} params.updateMask - Optional. Mask specifying which fields to update. Supported fields: * `display_name` * `description` * `fact`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.memories.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * List Memories.
     * @param {string} params.filter - Optional. The standard list filter. More detail in [AIP-160](https://google.aip.dev/160). Supported fields (equality match only): * `scope` (as a JSON string)
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token.
     * @param {string} params.parent - (Required) Required. The resource name of the ReasoningEngine to list the Memories under. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.memories.list = (params) => this._makeRequest('v1beta1/{+parent}/memories', 'GET', params);

    /**
     * Delete a Memory.
     * @param {string} params.name - (Required) Required. The resource name of the Memory to delete. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/memories/{memory}`
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.memories.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Generate memories.
     * @param {string} params.parent - (Required) Required. The resource name of the ReasoningEngine to generate memories for. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.memories.generate = (params) => this._makeRequest('v1beta1/{+parent}/memories:generate', 'POST', params);

    /**
     * Retrieve memories.
     * @param {string} params.parent - (Required) Required. The resource name of the ReasoningEngine to retrieve memories from. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.memories.retrieve = (params) => this._makeRequest('v1beta1/{+parent}/memories:retrieve', 'POST', params);

    this.projects.locations.reasoningEngines.memories.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.memories.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.memories.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.memories.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.memories.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.memories.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.reasoningEngines.sessions = {};

    /**
     * Creates a new Session.
     * @param {string} params.parent - (Required) Required. The resource name of the location to create the session in. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sessions.create = (params) => this._makeRequest('v1beta1/{+parent}/sessions', 'POST', params);

    /**
     * Gets details of the specific Session.
     * @param {string} params.name - (Required) Required. The resource name of the session. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}`
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sessions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists Sessions in a given reasoning engine.
     * @param {string} params.filter - Optional. The standard list filter. Supported fields: * `display_name` Example: `display_name=abc`.
     * @param {string} params.orderBy - Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `create_time` * `update_time` Example: `create_time desc`.
     * @param {integer} params.pageSize - Optional. The maximum number of sessions to return. The service may return fewer than this value. If unspecified, at most 100 sessions will be returned.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list SessionService.ListSessions call.
     * @param {string} params.parent - (Required) Required. The resource name of the location to list sessions from. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sessions.list = (params) => this._makeRequest('v1beta1/{+parent}/sessions', 'GET', params);

    /**
     * Updates the specific Session.
     * @param {string} params.name - (Required) Identifier. The resource name of the session. Format: 'projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}'.
     * @param {string} params.updateMask - Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sessions.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes details of the specific Session.
     * @param {string} params.name - (Required) Required. The resource name of the session. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}`
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sessions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Appends an event to a given session.
     * @param {string} params.name - (Required) Required. The resource name of the session to append event to. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sessions.appendEvent = (params) => this._makeRequest('v1beta1/{+name}:appendEvent', 'POST', params);

    this.projects.locations.reasoningEngines.sessions.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sessions.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sessions.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sessions.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sessions.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sessions.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.reasoningEngines.sessions.events = {};

    /**
     * Lists Events in a given session.
     * @param {string} params.filter - Optional. The standard list filter. Supported fields: * `timestamp` range (i.e. `timestamp>="2025-01-31T11:30:00-04:00"` where the timestamp is in RFC 3339 format) More detail in [AIP-160](https://google.aip.dev/160).
     * @param {integer} params.pageSize - Optional. The maximum number of events to return. The service may return fewer than this value. If unspecified, at most 100 events will be returned. These events are ordered by timestamp in ascending order.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list SessionService.ListEvents call.
     * @param {string} params.parent - (Required) Required. The resource name of the session to list events from. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}`
     * @return {object} The API response object.
     */
    this.projects.locations.reasoningEngines.sessions.events.list = (params) => this._makeRequest('v1beta1/{+parent}/events', 'GET', params);

    this.projects.locations.schedules = {};

    /**
     * Creates a Schedule.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the Schedule in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.create = (params) => this._makeRequest('v1beta1/{+parent}/schedules', 'POST', params);

    /**
     * Deletes a Schedule.
     * @param {string} params.name - (Required) Required. The name of the Schedule resource to be deleted. Format: `projects/{project}/locations/{location}/schedules/{schedule}`
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Gets a Schedule.
     * @param {string} params.name - (Required) Required. The name of the Schedule resource. Format: `projects/{project}/locations/{location}/schedules/{schedule}`
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists Schedules in a Location.
     * @param {string} params.filter - Lists the Schedules that match the filter expression. The following fields are supported: * `display_name`: Supports `=`, `!=` comparisons, and `:` wildcard. * `state`: Supports `=` and `!=` comparisons. * `request`: Supports existence of the check. (e.g. `create_pipeline_job_request:*` --> Schedule has create_pipeline_job_request). * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `start_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `end_time`: Supports `=`, `!=`, `<`, `>`, `<=`, `>=` comparisons and `:*` existence check. Values must be in RFC 3339 format. * `next_run_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. Filter expressions can be combined together using logical operators (`NOT`, `AND` & `OR`). The syntax to define filter expression is based on https://google.aip.dev/160. Examples: * `state="ACTIVE" AND display_name:"my_schedule_*"` * `NOT display_name="my_schedule"` * `create_time>"2021-05-18T00:00:00Z"` * `end_time>"2021-05-18T00:00:00Z" OR NOT end_time:*` * `create_pipeline_job_request:*`
     * @param {string} params.orderBy - A comma-separated list of fields to order by. The default sort order is in ascending order. Use "desc" after a field name for descending. You can have multiple order_by fields provided. For example, using "create_time desc, end_time" will order results by create time in descending order, and if there are multiple schedules having the same create time, order them by the end time in ascending order. If order_by is not specified, it will order by default with create_time in descending order. Supported fields: * `create_time` * `start_time` * `end_time` * `next_run_time`
     * @param {integer} params.pageSize - The standard list page size. Default to 100 if not specified.
     * @param {string} params.pageToken - The standard list page token. Typically obtained via ListSchedulesResponse.next_page_token of the previous ScheduleService.ListSchedules call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list the Schedules from. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.list = (params) => this._makeRequest('v1beta1/{+parent}/schedules', 'GET', params);

    /**
     * Pauses a Schedule. Will mark Schedule.state to 'PAUSED'. If the schedule is paused, no new runs will be created. Already created runs will NOT be paused or canceled.
     * @param {string} params.name - (Required) Required. The name of the Schedule resource to be paused. Format: `projects/{project}/locations/{location}/schedules/{schedule}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.pause = (params) => this._makeRequest('v1beta1/{+name}:pause', 'POST', params);

    /**
     * Resumes a paused Schedule to start scheduling new runs. Will mark Schedule.state to 'ACTIVE'. Only paused Schedule can be resumed. When the Schedule is resumed, new runs will be scheduled starting from the next execution time after the current time based on the time_specification in the Schedule. If Schedule.catch_up is set up true, all missed runs will be scheduled for backfill first.
     * @param {string} params.name - (Required) Required. The name of the Schedule resource to be resumed. Format: `projects/{project}/locations/{location}/schedules/{schedule}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.resume = (params) => this._makeRequest('v1beta1/{+name}:resume', 'POST', params);

    /**
     * Updates an active or paused Schedule. When the Schedule is updated, new runs will be scheduled starting from the updated next execution time after the update time based on the time_specification in the updated Schedule. All unstarted runs before the update time will be skipped while already created runs will NOT be paused or canceled.
     * @param {string} params.name - (Required) Immutable. The resource name of the Schedule.
     * @param {string} params.updateMask - Required. The update mask applies to the resource. See google.protobuf.FieldMask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.projects.locations.schedules.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.specialistPools = {};

    /**
     * Creates a SpecialistPool.
     * @param {string} params.parent - (Required) Required. The parent Project name for the new SpecialistPool. The form is `projects/{project}/locations/{location}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.specialistPools.create = (params) => this._makeRequest('v1beta1/{+parent}/specialistPools', 'POST', params);

    /**
     * Gets a SpecialistPool.
     * @param {string} params.name - (Required) Required. The name of the SpecialistPool resource. The form is `projects/{project}/locations/{location}/specialistPools/{specialist_pool}`.
     * @return {object} The API response object.
     */
    this.projects.locations.specialistPools.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists SpecialistPools in a Location.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token. Typically obtained by ListSpecialistPoolsResponse.next_page_token of the previous SpecialistPoolService.ListSpecialistPools call. Return first page if empty.
     * @param {string} params.parent - (Required) Required. The name of the SpecialistPool's parent resource. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read. FieldMask represents a set of
     * @return {object} The API response object.
     */
    this.projects.locations.specialistPools.list = (params) => this._makeRequest('v1beta1/{+parent}/specialistPools', 'GET', params);

    /**
     * Deletes a SpecialistPool as well as all Specialists in the pool.
     * @param {boolean} params.force - If set to true, any specialist managers in this SpecialistPool will also be deleted. (Otherwise, the request will only work if the SpecialistPool has no specialist managers.)
     * @param {string} params.name - (Required) Required. The resource name of the SpecialistPool to delete. Format: `projects/{project}/locations/{location}/specialistPools/{specialist_pool}`
     * @return {object} The API response object.
     */
    this.projects.locations.specialistPools.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Updates a SpecialistPool.
     * @param {string} params.name - (Required) Required. The resource name of the SpecialistPool.
     * @param {string} params.updateMask - Required. The update mask applies to the resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.specialistPools.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.projects.locations.specialistPools.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.specialistPools.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.specialistPools.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.specialistPools.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.specialistPools.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.specialistPools.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.tensorboards = {};

    /**
     * Creates a Tensorboard.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the Tensorboard in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.create = (params) => this._makeRequest('v1beta1/{+parent}/tensorboards', 'POST', params);

    /**
     * Gets a Tensorboard.
     * @param {string} params.name - (Required) Required. The name of the Tensorboard resource. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}`
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates a Tensorboard.
     * @param {string} params.name - (Required) Output only. Name of the Tensorboard. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}`
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Tensorboard resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten if it's in the mask. If the user does not provide a mask then all fields are overwritten if new values are specified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Lists Tensorboards in a Location.
     * @param {string} params.filter - Lists the Tensorboards that match the filter expression.
     * @param {string} params.orderBy - Field to use to sort the list.
     * @param {integer} params.pageSize - The maximum number of Tensorboards to return. The service may return fewer than this value. If unspecified, at most 100 Tensorboards are returned. The maximum value is 100; values above 100 are coerced to 100.
     * @param {string} params.pageToken - A page token, received from a previous TensorboardService.ListTensorboards call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to TensorboardService.ListTensorboards must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list Tensorboards. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.list = (params) => this._makeRequest('v1beta1/{+parent}/tensorboards', 'GET', params);

    /**
     * Deletes a Tensorboard.
     * @param {string} params.name - (Required) Required. The name of the Tensorboard to be deleted. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}`
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Returns a list of monthly active users for a given TensorBoard instance.
     * @param {string} params.tensorboard - (Required) Required. The name of the Tensorboard resource. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}`
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.readUsage = (params) => this._makeRequest('v1beta1/{+tensorboard}:readUsage', 'GET', params);

    /**
     * Returns the storage size for a given TensorBoard instance.
     * @param {string} params.tensorboard - (Required) Required. The name of the Tensorboard resource. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}`
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.readSize = (params) => this._makeRequest('v1beta1/{+tensorboard}:readSize', 'GET', params);

    /**
     * Reads multiple TensorboardTimeSeries' data. The data point number limit is 1000 for scalars, 100 for tensors and blob references. If the number of data points stored is less than the limit, all data is returned. Otherwise, the number limit of data points is randomly selected from this time series and returned.
     * @param {string} params.tensorboard - (Required) Required. The resource name of the Tensorboard containing TensorboardTimeSeries to read data from. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}`. The TensorboardTimeSeries referenced by time_series must be sub resources of this Tensorboard.
     * @param {string} params.timeSeries - Required. The resource names of the TensorboardTimeSeries to read data from. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}/timeSeries/{time_series}`
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.batchRead = (params) => this._makeRequest('v1beta1/{+tensorboard}:batchRead', 'GET', params);

    this.projects.locations.tensorboards.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.tensorboards.experiments = {};

    /**
     * Creates a TensorboardExperiment.
     * @param {string} params.parent - (Required) Required. The resource name of the Tensorboard to create the TensorboardExperiment in. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}`
     * @param {string} params.tensorboardExperimentId - Required. The ID to use for the Tensorboard experiment, which becomes the final component of the Tensorboard experiment's resource name. This value should be 1-128 characters, and valid characters are `/a-z-/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.create = (params) => this._makeRequest('v1beta1/{+parent}/experiments', 'POST', params);

    /**
     * Gets a TensorboardExperiment.
     * @param {string} params.name - (Required) Required. The name of the TensorboardExperiment resource. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}`
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates a TensorboardExperiment.
     * @param {string} params.name - (Required) Output only. Name of the TensorboardExperiment. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}`
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the TensorboardExperiment resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten if it's in the mask. If the user does not provide a mask then all fields are overwritten if new values are specified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Lists TensorboardExperiments in a Location.
     * @param {string} params.filter - Lists the TensorboardExperiments that match the filter expression.
     * @param {string} params.orderBy - Field to use to sort the list.
     * @param {integer} params.pageSize - The maximum number of TensorboardExperiments to return. The service may return fewer than this value. If unspecified, at most 50 TensorboardExperiments are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous TensorboardService.ListTensorboardExperiments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to TensorboardService.ListTensorboardExperiments must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Tensorboard to list TensorboardExperiments. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.list = (params) => this._makeRequest('v1beta1/{+parent}/experiments', 'GET', params);

    /**
     * Deletes a TensorboardExperiment.
     * @param {string} params.name - (Required) Required. The name of the TensorboardExperiment to be deleted. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}`
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Batch create TensorboardTimeSeries that belong to a TensorboardExperiment.
     * @param {string} params.parent - (Required) Required. The resource name of the TensorboardExperiment to create the TensorboardTimeSeries in. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}` The TensorboardRuns referenced by the parent fields in the CreateTensorboardTimeSeriesRequest messages must be sub resources of this TensorboardExperiment.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.batchCreate = (params) => this._makeRequest('v1beta1/{+parent}:batchCreate', 'POST', params);

    /**
     * Write time series data points of multiple TensorboardTimeSeries in multiple TensorboardRun's. If any data fail to be ingested, an error is returned.
     * @param {string} params.tensorboardExperiment - (Required) Required. The resource name of the TensorboardExperiment to write data to. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.write = (params) => this._makeRequest('v1beta1/{+tensorboardExperiment}:write', 'POST', params);

    this.projects.locations.tensorboards.experiments.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.tensorboards.experiments.runs = {};

    /**
     * Creates a TensorboardRun.
     * @param {string} params.parent - (Required) Required. The resource name of the TensorboardExperiment to create the TensorboardRun in. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}`
     * @param {string} params.tensorboardRunId - Required. The ID to use for the Tensorboard run, which becomes the final component of the Tensorboard run's resource name. This value should be 1-128 characters, and valid characters are `/a-z-/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.create = (params) => this._makeRequest('v1beta1/{+parent}/runs', 'POST', params);

    /**
     * Batch create TensorboardRuns.
     * @param {string} params.parent - (Required) Required. The resource name of the TensorboardExperiment to create the TensorboardRuns in. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}` The parent field in the CreateTensorboardRunRequest messages must match this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.batchCreate = (params) => this._makeRequest('v1beta1/{+parent}/runs:batchCreate', 'POST', params);

    /**
     * Gets a TensorboardRun.
     * @param {string} params.name - (Required) Required. The name of the TensorboardRun resource. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}`
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates a TensorboardRun.
     * @param {string} params.name - (Required) Output only. Name of the TensorboardRun. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}`
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the TensorboardRun resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten if it's in the mask. If the user does not provide a mask then all fields are overwritten if new values are specified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Lists TensorboardRuns in a Location.
     * @param {string} params.filter - Lists the TensorboardRuns that match the filter expression.
     * @param {string} params.orderBy - Field to use to sort the list.
     * @param {integer} params.pageSize - The maximum number of TensorboardRuns to return. The service may return fewer than this value. If unspecified, at most 50 TensorboardRuns are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous TensorboardService.ListTensorboardRuns call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to TensorboardService.ListTensorboardRuns must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the TensorboardExperiment to list TensorboardRuns. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.list = (params) => this._makeRequest('v1beta1/{+parent}/runs', 'GET', params);

    /**
     * Deletes a TensorboardRun.
     * @param {string} params.name - (Required) Required. The name of the TensorboardRun to be deleted. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}`
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Write time series data points into multiple TensorboardTimeSeries under a TensorboardRun. If any data fail to be ingested, an error is returned.
     * @param {string} params.tensorboardRun - (Required) Required. The resource name of the TensorboardRun to write data to. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.write = (params) => this._makeRequest('v1beta1/{+tensorboardRun}:write', 'POST', params);

    this.projects.locations.tensorboards.experiments.runs.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.tensorboards.experiments.runs.timeSeries = {};

    /**
     * Creates a TensorboardTimeSeries.
     * @param {string} params.parent - (Required) Required. The resource name of the TensorboardRun to create the TensorboardTimeSeries in. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}`
     * @param {string} params.tensorboardTimeSeriesId - Optional. The user specified unique ID to use for the TensorboardTimeSeries, which becomes the final component of the TensorboardTimeSeries's resource name. This value should match "a-z0-9{0, 127}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.timeSeries.create = (params) => this._makeRequest('v1beta1/{+parent}/timeSeries', 'POST', params);

    /**
     * Gets a TensorboardTimeSeries.
     * @param {string} params.name - (Required) Required. The name of the TensorboardTimeSeries resource. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}/timeSeries/{time_series}`
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.timeSeries.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates a TensorboardTimeSeries.
     * @param {string} params.name - (Required) Output only. Name of the TensorboardTimeSeries.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the TensorboardTimeSeries resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten if it's in the mask. If the user does not provide a mask then all fields are overwritten if new values are specified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.timeSeries.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Lists TensorboardTimeSeries in a Location.
     * @param {string} params.filter - Lists the TensorboardTimeSeries that match the filter expression.
     * @param {string} params.orderBy - Field to use to sort the list.
     * @param {integer} params.pageSize - The maximum number of TensorboardTimeSeries to return. The service may return fewer than this value. If unspecified, at most 50 TensorboardTimeSeries are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous TensorboardService.ListTensorboardTimeSeries call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to TensorboardService.ListTensorboardTimeSeries must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the TensorboardRun to list TensorboardTimeSeries. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.timeSeries.list = (params) => this._makeRequest('v1beta1/{+parent}/timeSeries', 'GET', params);

    /**
     * Deletes a TensorboardTimeSeries.
     * @param {string} params.name - (Required) Required. The name of the TensorboardTimeSeries to be deleted. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}/timeSeries/{time_series}`
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.timeSeries.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Reads a TensorboardTimeSeries' data. By default, if the number of data points stored is less than 1000, all data is returned. Otherwise, 1000 data points is randomly selected from this time series and returned. This value can be changed by changing max_data_points, which can't be greater than 10k.
     * @param {string} params.filter - Reads the TensorboardTimeSeries' data that match the filter expression.
     * @param {integer} params.maxDataPoints - The maximum number of TensorboardTimeSeries' data to return. This value should be a positive integer. This value can be set to -1 to return all data.
     * @param {string} params.tensorboardTimeSeries - (Required) Required. The resource name of the TensorboardTimeSeries to read data from. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}/timeSeries/{time_series}`
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.timeSeries.read = (params) => this._makeRequest('v1beta1/{+tensorboardTimeSeries}:read', 'GET', params);

    /**
     * Gets bytes of TensorboardBlobs. This is to allow reading blob data stored in consumer project's Cloud Storage bucket without users having to obtain Cloud Storage access permission.
     * @param {string} params.blobIds - IDs of the blobs to read.
     * @param {string} params.timeSeries - (Required) Required. The resource name of the TensorboardTimeSeries to list Blobs. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}/timeSeries/{time_series}`
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.timeSeries.readBlobData = (params) => this._makeRequest('v1beta1/{+timeSeries}:readBlobData', 'GET', params);

    /**
     * Exports a TensorboardTimeSeries' data. Data is returned in paginated responses.
     * @param {string} params.tensorboardTimeSeries - (Required) Required. The resource name of the TensorboardTimeSeries to export data from. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}/timeSeries/{time_series}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.timeSeries.exportTensorboardTimeSeries = (params) => this._makeRequest('v1beta1/{+tensorboardTimeSeries}:exportTensorboardTimeSeries', 'POST', params);

    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.studies = {};

    /**
     * Creates a Study. A resource name will be generated after creation of the Study.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the CustomJob in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.create = (params) => this._makeRequest('v1beta1/{+parent}/studies', 'POST', params);

    /**
     * Gets a Study by name.
     * @param {string} params.name - (Required) Required. The name of the Study resource. Format: `projects/{project}/locations/{location}/studies/{study}`
     * @return {object} The API response object.
     */
    this.projects.locations.studies.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists all the studies in a region for an associated project.
     * @param {integer} params.pageSize - Optional. The maximum number of studies to return per "page" of results. If unspecified, service will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A page token to request the next page of results. If unspecified, there are no subsequent pages.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to list the Study from. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.studies.list = (params) => this._makeRequest('v1beta1/{+parent}/studies', 'GET', params);

    /**
     * Deletes a Study.
     * @param {string} params.name - (Required) Required. The name of the Study resource to be deleted. Format: `projects/{project}/locations/{location}/studies/{study}`
     * @return {object} The API response object.
     */
    this.projects.locations.studies.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Looks a study up using the user-defined display_name field instead of the fully qualified resource name.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to get the Study from. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.lookup = (params) => this._makeRequest('v1beta1/{+parent}/studies:lookup', 'POST', params);

    this.projects.locations.studies.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.studies.trials = {};

    /**
     * Adds one or more Trials to a Study, with parameter values suggested by Vertex AI Vizier. Returns a long-running operation associated with the generation of Trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.
     * @param {string} params.parent - (Required) Required. The project and location that the Study belongs to. Format: `projects/{project}/locations/{location}/studies/{study}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.suggest = (params) => this._makeRequest('v1beta1/{+parent}/trials:suggest', 'POST', params);

    /**
     * Adds a user provided Trial to a Study.
     * @param {string} params.parent - (Required) Required. The resource name of the Study to create the Trial in. Format: `projects/{project}/locations/{location}/studies/{study}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.create = (params) => this._makeRequest('v1beta1/{+parent}/trials', 'POST', params);

    /**
     * Gets a Trial.
     * @param {string} params.name - (Required) Required. The name of the Trial resource. Format: `projects/{project}/locations/{location}/studies/{study}/trials/{trial}`
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists the Trials associated with a Study.
     * @param {integer} params.pageSize - Optional. The number of Trials to retrieve per "page" of results. If unspecified, the service will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A page token to request the next page of results. If unspecified, there are no subsequent pages.
     * @param {string} params.parent - (Required) Required. The resource name of the Study to list the Trial from. Format: `projects/{project}/locations/{location}/studies/{study}`
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.list = (params) => this._makeRequest('v1beta1/{+parent}/trials', 'GET', params);

    /**
     * Adds a measurement of the objective metrics to a Trial. This measurement is assumed to have been taken before the Trial is complete.
     * @param {string} params.trialName - (Required) Required. The name of the trial to add measurement. Format: `projects/{project}/locations/{location}/studies/{study}/trials/{trial}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.addTrialMeasurement = (params) => this._makeRequest('v1beta1/{+trialName}:addTrialMeasurement', 'POST', params);

    /**
     * Marks a Trial as complete.
     * @param {string} params.name - (Required) Required. The Trial's name. Format: `projects/{project}/locations/{location}/studies/{study}/trials/{trial}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.complete = (params) => this._makeRequest('v1beta1/{+name}:complete', 'POST', params);

    /**
     * Deletes a Trial.
     * @param {string} params.name - (Required) Required. The Trial's name. Format: `projects/{project}/locations/{location}/studies/{study}/trials/{trial}`
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Checks whether a Trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.
     * @param {string} params.trialName - (Required) Required. The Trial's name. Format: `projects/{project}/locations/{location}/studies/{study}/trials/{trial}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.checkTrialEarlyStoppingState = (params) => this._makeRequest('v1beta1/{+trialName}:checkTrialEarlyStoppingState', 'POST', params);

    /**
     * Stops a Trial.
     * @param {string} params.name - (Required) Required. The Trial's name. Format: `projects/{project}/locations/{location}/studies/{study}/trials/{trial}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.stop = (params) => this._makeRequest('v1beta1/{+name}:stop', 'POST', params);

    /**
     * Lists the pareto-optimal Trials for multi-objective Study or the optimal Trials for single-objective Study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency
     * @param {string} params.parent - (Required) Required. The name of the Study that the optimal Trial belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.listOptimalTrials = (params) => this._makeRequest('v1beta1/{+parent}/trials:listOptimalTrials', 'POST', params);

    this.projects.locations.studies.trials.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.ragCorpora = {};

    /**
     * Creates a RagCorpus.
     * @param {string} params.parent - (Required) Required. The resource name of the Location to create the RagCorpus in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.create = (params) => this._makeRequest('v1beta1/{+parent}/ragCorpora', 'POST', params);

    /**
     * Updates a RagCorpus.
     * @param {string} params.name - (Required) Output only. The resource name of the RagCorpus.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Gets a RagCorpus.
     * @param {string} params.name - (Required) Required. The name of the RagCorpus resource. Format: `projects/{project}/locations/{location}/ragCorpora/{rag_corpus}`
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists RagCorpora in a Location.
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token. Typically obtained via ListRagCorporaResponse.next_page_token of the previous VertexRagDataService.ListRagCorpora call.
     * @param {string} params.parent - (Required) Required. The resource name of the Location from which to list the RagCorpora. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.list = (params) => this._makeRequest('v1beta1/{+parent}/ragCorpora', 'GET', params);

    /**
     * Deletes a RagCorpus.
     * @param {boolean} params.force - Optional. If set to true, any RagFiles in this RagCorpus will also be deleted. Otherwise, the request will only work if the RagCorpus has no RagFiles.
     * @param {string} params.name - (Required) Required. The name of the RagCorpus resource to be deleted. Format: `projects/{project}/locations/{location}/ragCorpora/{rag_corpus}`
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.ragCorpora.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.locations.ragCorpora.ragFiles = {};

    /**
     * Import files from Google Cloud Storage or Google Drive into a RagCorpus.
     * @param {string} params.parent - (Required) Required. The name of the RagCorpus resource into which to import files. Format: `projects/{project}/locations/{location}/ragCorpora/{rag_corpus}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.ragFiles.import = (params) => this._makeRequest('v1beta1/{+parent}/ragFiles:import', 'POST', params);

    /**
     * Gets a RagFile.
     * @param {string} params.name - (Required) Required. The name of the RagFile resource. Format: `projects/{project}/locations/{location}/ragCorpora/{rag_corpus}/ragFiles/{rag_file}`
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.ragFiles.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists RagFiles in a RagCorpus.
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token. Typically obtained via ListRagFilesResponse.next_page_token of the previous VertexRagDataService.ListRagFiles call.
     * @param {string} params.parent - (Required) Required. The resource name of the RagCorpus from which to list the RagFiles. Format: `projects/{project}/locations/{location}/ragCorpora/{rag_corpus}`
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.ragFiles.list = (params) => this._makeRequest('v1beta1/{+parent}/ragFiles', 'GET', params);

    /**
     * Deletes a RagFile.
     * @param {string} params.name - (Required) Required. The name of the RagFile resource to be deleted. Format: `projects/{project}/locations/{location}/ragCorpora/{rag_corpus}/ragFiles/{rag_file}`
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.ragFiles.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.ragCorpora.ragFiles.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.ragFiles.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.ragFiles.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.ragFiles.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.ragFiles.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {string} params.timeout - The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.ragCorpora.ragFiles.operations.wait = (params) => this._makeRequest('v1beta1/{+name}:wait', 'POST', params);

    this.projects.modelGardenEula = {};

    /**
     * Checks the EULA acceptance status of a publisher model.
     * @param {string} params.parent - (Required) Required. The project requesting access for named model. The format is `projects/{project}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.modelGardenEula.check = (params) => this._makeRequest('v1beta1/{+parent}/modelGardenEula:check', 'POST', params);

    /**
     * Accepts the EULA acceptance status of a publisher model.
     * @param {string} params.parent - (Required) Required. The project requesting access for named model. The format is `projects/{project}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.modelGardenEula.accept = (params) => this._makeRequest('v1beta1/{+parent}/modelGardenEula:accept', 'POST', params);

    this.datasets = {};

    /**
     * Creates a Dataset.
     * @param {string} params.parent - Required. The resource name of the Location to create the Dataset in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.datasets.create = (params) => this._makeRequest('v1beta1/datasets', 'POST', params);

    /**
     * Gets a Dataset.
     * @param {string} params.name - (Required) Required. The name of the Dataset resource.
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.datasets.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates a Dataset.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of the Dataset. Format: `projects/{project}/locations/{location}/datasets/{dataset}`
     * @param {string} params.updateMask - Required. The update mask applies to the resource. For the `FieldMask` definition, see google.protobuf.FieldMask. Updatable fields: * `display_name` * `description` * `labels`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.datasets.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Lists Datasets in a Location.
     * @param {string} params.filter - An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `display_name`: supports = and != * `metadata_schema_uri`: supports = and != * `labels` supports general map functions that is: * `labels.key=value` - key:value equality * `labels.key:* or labels:key - key existence * A key including a space must be quoted. `labels."a key"`. Some examples: * `displayName="myDisplayName"` * `labels.myKey="myValue"`
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `display_name` * `create_time` * `update_time`
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @param {string} params.parent - Required. The name of the Dataset's parent resource. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.datasets.list = (params) => this._makeRequest('v1beta1/datasets', 'GET', params);

    /**
     * Deletes a Dataset.
     * @param {string} params.name - (Required) Required. The resource name of the Dataset to delete. Format: `projects/{project}/locations/{location}/datasets/{dataset}`
     * @return {object} The API response object.
     */
    this.datasets.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.datasets.datasetVersions = {};

    /**
     * Create a version from a Dataset.
     * @param {string} params.parent - (Required) Required. The name of the Dataset resource. Format: `projects/{project}/locations/{location}/datasets/{dataset}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.datasets.datasetVersions.create = (params) => this._makeRequest('v1beta1/{+parent}/datasetVersions', 'POST', params);

    /**
     * Updates a DatasetVersion.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of the DatasetVersion. Format: `projects/{project}/locations/{location}/datasets/{dataset}/datasetVersions/{dataset_version}`
     * @param {string} params.updateMask - Required. The update mask applies to the resource. For the `FieldMask` definition, see google.protobuf.FieldMask. Updatable fields: * `display_name`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.datasets.datasetVersions.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a Dataset version.
     * @param {string} params.name - (Required) Required. The resource name of the Dataset version to delete. Format: `projects/{project}/locations/{location}/datasets/{dataset}/datasetVersions/{dataset_version}`
     * @return {object} The API response object.
     */
    this.datasets.datasetVersions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Gets a Dataset version.
     * @param {string} params.name - (Required) Required. The resource name of the Dataset version to delete. Format: `projects/{project}/locations/{location}/datasets/{dataset}/datasetVersions/{dataset_version}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.datasets.datasetVersions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists DatasetVersions in a Dataset.
     * @param {string} params.filter - Optional. The standard list filter.
     * @param {string} params.orderBy - Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending.
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Dataset to list DatasetVersions from. Format: `projects/{project}/locations/{location}/datasets/{dataset}`
     * @param {string} params.readMask - Optional. Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.datasets.datasetVersions.list = (params) => this._makeRequest('v1beta1/{+parent}/datasetVersions', 'GET', params);

    /**
     * Restores a dataset version.
     * @param {string} params.name - (Required) Required. The name of the DatasetVersion resource. Format: `projects/{project}/locations/{location}/datasets/{dataset}/datasetVersions/{dataset_version}`
     * @return {object} The API response object.
     */
    this.datasets.datasetVersions.restore = (params) => this._makeRequest('v1beta1/{+name}:restore', 'GET', params);

    this.batchPredictionJobs = {};

    /**
     * Creates a BatchPredictionJob. A BatchPredictionJob once created will right away be attempted to start.
     * @param {string} params.parent - Required. The resource name of the Location to create the BatchPredictionJob in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.batchPredictionJobs.create = (params) => this._makeRequest('v1beta1/batchPredictionJobs', 'POST', params);

    /**
     * Gets a BatchPredictionJob
     * @param {string} params.name - (Required) Required. The name of the BatchPredictionJob resource. Format: `projects/{project}/locations/{location}/batchPredictionJobs/{batch_prediction_job}`
     * @return {object} The API response object.
     */
    this.batchPredictionJobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists BatchPredictionJobs in a Location.
     * @param {string} params.filter - The standard list filter. Supported fields: * `display_name` supports `=`, `!=` comparisons, and `:` wildcard. * `model_display_name` supports `=`, `!=` comparisons. * `state` supports `=`, `!=` comparisons. * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: * `state="JOB_STATE_SUCCEEDED" AND display_name:"my_job_*"` * `state!="JOB_STATE_FAILED" OR display_name="my_job"` * `NOT display_name="my_job"` * `create_time>"2021-05-18T00:00:00Z"` * `labels.keyA=valueA` * `labels.keyB:*`
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token. Typically obtained via ListBatchPredictionJobsResponse.next_page_token of the previous JobService.ListBatchPredictionJobs call.
     * @param {string} params.parent - Required. The resource name of the Location to list the BatchPredictionJobs from. Format: `projects/{project}/locations/{location}`
     * @param {string} params.readMask - Mask specifying which fields to read.
     * @return {object} The API response object.
     */
    this.batchPredictionJobs.list = (params) => this._makeRequest('v1beta1/batchPredictionJobs', 'GET', params);

    this.endpoints = {};

    /**
     * Perform an online prediction.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.endpoints.predict = (params) => this._makeRequest('v1beta1/{+endpoint}:predict', 'POST', params);

    /**
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.endpoints.predictLongRunning = (params) => this._makeRequest('v1beta1/{+endpoint}:predictLongRunning', 'POST', params);

    /**
     * Fetch an asynchronous online prediction operation.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.endpoints.fetchPredictOperation = (params) => this._makeRequest('v1beta1/{+endpoint}:fetchPredictOperation', 'POST', params);

    /**
     * Perform a token counting.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to perform token counting. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.endpoints.countTokens = (params) => this._makeRequest('v1beta1/{+endpoint}:countTokens', 'POST', params);

    /**
     * Generate content with multimodal inputs.
     * @param {string} params.model - (Required) Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*\/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.endpoints.generateContent = (params) => this._makeRequest('v1beta1/{+model}:generateContent', 'POST', params);

    /**
     * Generate content with multimodal inputs with streaming support.
     * @param {string} params.model - (Required) Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*\/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.endpoints.streamGenerateContent = (params) => this._makeRequest('v1beta1/{+model}:streamGenerateContent', 'POST', params);

    /**
     * Return a list of tokens based on the input text.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to get lists of tokens and token ids.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.endpoints.computeTokens = (params) => this._makeRequest('v1beta1/{+endpoint}:computeTokens', 'POST', params);

    this.endpoints.chat = {};

    /**
     * Exposes an OpenAI-compatible endpoint for chat completions.
     * @param {string} params.endpoint - (Required) Required. The name of the endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.endpoints.chat.completions = (params) => this._makeRequest('v1beta1/{+endpoint}/chat/completions', 'POST', params);

    this.publishers = {};

    this.publishers.models = {};

    /**
     * Perform an online prediction.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.publishers.models.predict = (params) => this._makeRequest('v1beta1/{+endpoint}:predict', 'POST', params);

    /**
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.publishers.models.predictLongRunning = (params) => this._makeRequest('v1beta1/{+endpoint}:predictLongRunning', 'POST', params);

    /**
     * Fetch an asynchronous online prediction operation.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.publishers.models.fetchPredictOperation = (params) => this._makeRequest('v1beta1/{+endpoint}:fetchPredictOperation', 'POST', params);

    /**
     * Perform a token counting.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to perform token counting. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.publishers.models.countTokens = (params) => this._makeRequest('v1beta1/{+endpoint}:countTokens', 'POST', params);

    /**
     * Generate content with multimodal inputs.
     * @param {string} params.model - (Required) Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*\/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.publishers.models.generateContent = (params) => this._makeRequest('v1beta1/{+model}:generateContent', 'POST', params);

    /**
     * Generate content with multimodal inputs with streaming support.
     * @param {string} params.model - (Required) Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*\/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.publishers.models.streamGenerateContent = (params) => this._makeRequest('v1beta1/{+model}:streamGenerateContent', 'POST', params);

    /**
     * Return a list of tokens based on the input text.
     * @param {string} params.endpoint - (Required) Required. The name of the Endpoint requested to get lists of tokens and token ids.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.publishers.models.computeTokens = (params) => this._makeRequest('v1beta1/{+endpoint}:computeTokens', 'POST', params);

    /**
     * Gets a Model Garden publisher model.
     * @param {string} params.huggingFaceToken - Optional. Token used to access Hugging Face gated models.
     * @param {boolean} params.includeEquivalentModelGardenModelDeploymentConfigs - Optional. Whether to cnclude the deployment configs from the equivalent Model Garden model if the requested model is a Hugging Face model.
     * @param {boolean} params.isHuggingFaceModel - Optional. Boolean indicates whether the requested model is a Hugging Face model.
     * @param {string} params.languageCode - Optional. The IETF BCP-47 language code representing the language in which the publisher model's text information should be written in.
     * @param {string} params.name - (Required) Required. The name of the PublisherModel resource. Format: `publishers/{publisher}/models/{publisher_model}`
     * @param {string} params.view - Optional. PublisherModel view specifying which fields to read.
     * @return {object} The API response object.
     */
    this.publishers.models.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists publisher models in Model Garden.
     * @param {string} params.filter - Optional. The standard list filter.
     * @param {string} params.languageCode - Optional. The IETF BCP-47 language code representing the language in which the publisher models' text information should be written in. If not set, by default English (en).
     * @param {boolean} params.listAllVersions - Optional. List all publisher model versions if the flag is set to true.
     * @param {string} params.orderBy - Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending.
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token. Typically obtained via ListPublisherModelsResponse.next_page_token of the previous ModelGardenService.ListPublisherModels call.
     * @param {string} params.parent - (Required) Required. The name of the Publisher from which to list the PublisherModels. Format: `publishers/{publisher}`
     * @param {string} params.view - Optional. PublisherModel view specifying which fields to read.
     * @return {object} The API response object.
     */
    this.publishers.models.list = (params) => this._makeRequest('v1beta1/{+parent}/models', 'GET', params);

    this.reasoningEngines = {};

    /**
     * Queries using a reasoning engine.
     * @param {string} params.name - (Required) Required. The name of the ReasoningEngine resource to use. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reasoningEngines.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    /**
     * Streams queries using a reasoning engine.
     * @param {string} params.name - (Required) Required. The name of the ReasoningEngine resource to use. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reasoningEngines.streamQuery = (params) => this._makeRequest('v1beta1/{+name}:streamQuery', 'POST', params);

    /**
     * Creates a reasoning engine.
     * @param {string} params.parent - Required. The resource name of the Location to create the ReasoningEngine in. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reasoningEngines.create = (params) => this._makeRequest('v1beta1/reasoningEngines', 'POST', params);

    /**
     * Gets a reasoning engine.
     * @param {string} params.name - (Required) Required. The name of the ReasoningEngine resource. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @return {object} The API response object.
     */
    this.reasoningEngines.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists reasoning engines in a location.
     * @param {string} params.filter - Optional. The standard list filter. More detail in [AIP-160](https://google.aip.dev/160).
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token.
     * @param {string} params.parent - Required. The resource name of the Location to list the ReasoningEngines from. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.reasoningEngines.list = (params) => this._makeRequest('v1beta1/reasoningEngines', 'GET', params);

    /**
     * Updates a reasoning engine.
     * @param {string} params.name - (Required) Identifier. The resource name of the ReasoningEngine. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @param {string} params.updateMask - Optional. Mask specifying which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reasoningEngines.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a reasoning engine.
     * @param {boolean} params.force - Optional. If set to true, child resources of this reasoning engine will also be deleted. Otherwise, the request will fail with FAILED_PRECONDITION error when the reasoning engine has undeleted child resources.
     * @param {string} params.name - (Required) Required. The name of the ReasoningEngine resource to be deleted. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @return {object} The API response object.
     */
    this.reasoningEngines.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.reasoningEngines.memories = {};

    /**
     * Create a Memory.
     * @param {string} params.parent - (Required) Required. The resource name of the ReasoningEngine to create the Memory under. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reasoningEngines.memories.create = (params) => this._makeRequest('v1beta1/{+parent}/memories', 'POST', params);

    /**
     * Get a Memory.
     * @param {string} params.name - (Required) Required. The resource name of the Memory. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/memories/{memory}`
     * @return {object} The API response object.
     */
    this.reasoningEngines.memories.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Update a Memory.
     * @param {string} params.name - (Required) Identifier. The resource name of the Memory. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/memories/{memory}`
     * @param {string} params.updateMask - Optional. Mask specifying which fields to update. Supported fields: * `display_name` * `description` * `fact`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reasoningEngines.memories.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * List Memories.
     * @param {string} params.filter - Optional. The standard list filter. More detail in [AIP-160](https://google.aip.dev/160). Supported fields (equality match only): * `scope` (as a JSON string)
     * @param {integer} params.pageSize - Optional. The standard list page size.
     * @param {string} params.pageToken - Optional. The standard list page token.
     * @param {string} params.parent - (Required) Required. The resource name of the ReasoningEngine to list the Memories under. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @return {object} The API response object.
     */
    this.reasoningEngines.memories.list = (params) => this._makeRequest('v1beta1/{+parent}/memories', 'GET', params);

    /**
     * Delete a Memory.
     * @param {string} params.name - (Required) Required. The resource name of the Memory to delete. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/memories/{memory}`
     * @return {object} The API response object.
     */
    this.reasoningEngines.memories.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Generate memories.
     * @param {string} params.parent - (Required) Required. The resource name of the ReasoningEngine to generate memories for. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reasoningEngines.memories.generate = (params) => this._makeRequest('v1beta1/{+parent}/memories:generate', 'POST', params);

    /**
     * Retrieve memories.
     * @param {string} params.parent - (Required) Required. The resource name of the ReasoningEngine to retrieve memories from. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reasoningEngines.memories.retrieve = (params) => this._makeRequest('v1beta1/{+parent}/memories:retrieve', 'POST', params);

    this.reasoningEngines.sessions = {};

    /**
     * Creates a new Session.
     * @param {string} params.parent - (Required) Required. The resource name of the location to create the session in. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reasoningEngines.sessions.create = (params) => this._makeRequest('v1beta1/{+parent}/sessions', 'POST', params);

    /**
     * Gets details of the specific Session.
     * @param {string} params.name - (Required) Required. The resource name of the session. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}`
     * @return {object} The API response object.
     */
    this.reasoningEngines.sessions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists Sessions in a given reasoning engine.
     * @param {string} params.filter - Optional. The standard list filter. Supported fields: * `display_name` Example: `display_name=abc`.
     * @param {string} params.orderBy - Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `create_time` * `update_time` Example: `create_time desc`.
     * @param {integer} params.pageSize - Optional. The maximum number of sessions to return. The service may return fewer than this value. If unspecified, at most 100 sessions will be returned.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list SessionService.ListSessions call.
     * @param {string} params.parent - (Required) Required. The resource name of the location to list sessions from. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
     * @return {object} The API response object.
     */
    this.reasoningEngines.sessions.list = (params) => this._makeRequest('v1beta1/{+parent}/sessions', 'GET', params);

    /**
     * Updates the specific Session.
     * @param {string} params.name - (Required) Identifier. The resource name of the session. Format: 'projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}'.
     * @param {string} params.updateMask - Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reasoningEngines.sessions.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes details of the specific Session.
     * @param {string} params.name - (Required) Required. The resource name of the session. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}`
     * @return {object} The API response object.
     */
    this.reasoningEngines.sessions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Appends an event to a given session.
     * @param {string} params.name - (Required) Required. The resource name of the session to append event to. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reasoningEngines.sessions.appendEvent = (params) => this._makeRequest('v1beta1/{+name}:appendEvent', 'POST', params);

    this.reasoningEngines.sessions.events = {};

    /**
     * Lists Events in a given session.
     * @param {string} params.filter - Optional. The standard list filter. Supported fields: * `timestamp` range (i.e. `timestamp>="2025-01-31T11:30:00-04:00"` where the timestamp is in RFC 3339 format) More detail in [AIP-160](https://google.aip.dev/160).
     * @param {integer} params.pageSize - Optional. The maximum number of events to return. The service may return fewer than this value. If unspecified, at most 100 events will be returned. These events are ordered by timestamp in ascending order.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list SessionService.ListEvents call.
     * @param {string} params.parent - (Required) Required. The resource name of the session to list events from. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}`
     * @return {object} The API response object.
     */
    this.reasoningEngines.sessions.events.list = (params) => this._makeRequest('v1beta1/{+parent}/events', 'GET', params);

    this.media = {};

    /**
     * Upload a file into a RagCorpus.
     * @param {string} params.parent - (Required) Required. The name of the RagCorpus resource into which to upload the file. Format: `projects/{project}/locations/{location}/ragCorpora/{rag_corpus}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.media.upload = (params) => this._makeRequest('v1beta1/{+parent}/ragFiles:upload', 'POST', params);
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
