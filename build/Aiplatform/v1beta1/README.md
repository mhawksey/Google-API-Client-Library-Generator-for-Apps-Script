# Vertex AI API - Apps Script Client Library

Auto-generated client library for using the **Vertex AI API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:45:52 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:20:32 GMT
- **Created:** Sun, 20 Jul 2025 16:11:23 GMT



---

## API Reference

### `projects`

#### `projects.updateCacheConfig()`

Updates a cache config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the cache config. Format: - `projects/{project}/cacheConfig`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.getCacheConfig()`

Gets a GenAI cache config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the cache config. Format: - `projects/{project}/cacheConfig`. |

#### `projects.setPublisherModelConfig()`

Sets (creates or updates) configs of publisher models. For example, sets the request/response logging config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the publisher model, in the format of `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.fetchPublisherModelConfig()`

Fetches the configs of publisher models.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the publisher model, in the format of `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`. |

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

#### `projects.locations.evaluateInstances()`

Evaluates instances based on a given metric.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The resource name of the Location to evaluate the instances. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.evaluateDataset()`

Evaluates a dataset based on a set of given metrics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The resource name of the Location to evaluate the dataset. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.deploy()`

Deploys a model to a new endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.destination` | `string` | Yes | Required. The resource name of the Location to deploy the model in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.deployPublisherModel()`

Deploys publisher models.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.destination` | `string` | Yes | Required. The resource name of the Location to deploy the model in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.updateRagEngineConfig()`

Updates a RagEngineConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The name of the RagEngineConfig. Format: `projects/{project}/locations/{location}/ragEngineConfig` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.getRagEngineConfig()`

Gets a RagEngineConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RagEngineConfig resource. Format: `projects/{project}/locations/{location}/ragEngineConfig` |

#### `projects.locations.retrieveContexts()`

Retrieves relevant contexts for a query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location from which to retrieve RagContexts. The users must have permission to make a call in the project. Format: `projects/{project}/locations/{location}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.augmentPrompt()`

Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location from which to augment prompt. The users must have permission to make a call in the project. Format: `projects/{project}/locations/{location}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.corroborateContent()`

Given an input text, it returns a score that evaluates the factuality of the text. It also extracts and returns claims from the text and provides supporting facts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location from which to corroborate text. The users must have permission to make a call in the project. Format: `projects/{project}/locations/{location}`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.featurestores`

#### `projects.locations.featurestores.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.create()`

Creates a new Featurestore in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create Featurestores. Format: `projects/{project}/locations/{location}` |
| `params.featurestoreId` | `string` | No | Required. The ID to use for this Featurestore, which will become the final component of the Featurestore's resource name. This value may be up to 60 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within the project and location. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.get()`

Gets details of a single Featurestore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Featurestore resource. |

#### `projects.locations.featurestores.list()`

Lists Featurestores in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list Featurestores. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | Lists the featurestores that match the filter expression. The following fields are supported: * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `update_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `online_serving_config.fixed_node_count`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. * `labels`: Supports key-value equality and key presence. Examples: * `create_time > "2020-01-01" OR update_time > "2020-01-01"` Featurestores created or updated after 2020-01-01. * `labels.env = "prod"` Featurestores with label "env" set to "prod". |
| `params.pageSize` | `integer` | No | The maximum number of Featurestores to return. The service may return fewer than this value. If unspecified, at most 100 Featurestores will be returned. The maximum value is 100; any value greater than 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous FeaturestoreService.ListFeaturestores call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeaturestoreService.ListFeaturestores must match the call that provided the page token. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported Fields: * `create_time` * `update_time` * `online_serving_config.fixed_node_count` |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.featurestores.patch()`

Updates the parameters of a single Featurestore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Name of the Featurestore. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}` |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the Featurestore resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. Updatable fields: * `labels` * `online_serving_config.fixed_node_count` * `online_serving_config.scaling` * `online_storage_ttl_days` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.delete()`

Deletes a single Featurestore. The Featurestore must not contain any EntityTypes or `force` must be set to true for the request to succeed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Featurestore to be deleted. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}` |
| `params.force` | `boolean` | No | If set to true, any EntityTypes and Features for this Featurestore will also be deleted. (Otherwise, the request will only work if the Featurestore has no EntityTypes.) |

#### `projects.locations.featurestores.batchReadFeatureValues()`

Batch reads Feature values from a Featurestore. This API enables batch reading Feature values, where each read instance in the batch may read Feature values of entities from one or more EntityTypes. Point-in-time correctness is guaranteed for Feature values of each read instance as of each instance's read timestamp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.featurestore` | `string` | Yes | Required. The resource name of the Featurestore from which to query Feature values. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.searchFeatures()`

Searches Features matching a query in a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The resource name of the Location to search Features. Format: `projects/{project}/locations/{location}` |
| `params.query` | `string` | No | Query string that is a conjunction of field-restricted queries and/or field-restricted filters. Field-restricted queries and filters can be combined using `AND` to form a conjunction. A field query is in the form FIELD:QUERY. This implicitly checks if QUERY exists as a substring within Feature's FIELD. The QUERY and the FIELD are converted to a sequence of words (i.e. tokens) for comparison. This is done by: * Removing leading/trailing whitespace and tokenizing the search value. Characters that are not one of alphanumeric `[a-zA-Z0-9]`, underscore `_`, or asterisk `*` are treated as delimiters for tokens. `*` is treated as a wildcard that matches characters within a token. * Ignoring case. * Prepending an asterisk to the first and appending an asterisk to the last token in QUERY. A QUERY must be either a singular token or a phrase. A phrase is one or multiple words enclosed in double quotation marks ("). With phrases, the order of the words is important. Words in the phrase must be matching in order and consecutively. Supported FIELDs for field-restricted queries: * `feature_id` * `description` * `entity_type_id` Examples: * `feature_id: foo` --> Matches a Feature with ID containing the substring `foo` (eg. `foo`, `foofeature`, `barfoo`). * `feature_id: foo*feature` --> Matches a Feature with ID containing the substring `foo*feature` (eg. `foobarfeature`). * `feature_id: foo AND description: bar` --> Matches a Feature with ID containing the substring `foo` and description containing the substring `bar`. Besides field queries, the following exact-match filters are supported. The exact-match filters do not support wildcards. Unlike field-restricted queries, exact-match filters are case-sensitive. * `feature_id`: Supports = comparisons. * `description`: Supports = comparisons. Multi-token filters should be enclosed in quotes. * `entity_type_id`: Supports = comparisons. * `value_type`: Supports = and != comparisons. * `labels`: Supports key-value equality as well as key presence. * `featurestore_id`: Supports = comparisons. Examples: * `description = "foo bar"` --> Any Feature with description exactly equal to `foo bar` * `value_type = DOUBLE` --> Features whose type is DOUBLE. * `labels.active = yes AND labels.env = prod` --> Features having both (active: yes) and (env: prod) labels. * `labels.env: *` --> Any Feature which has a label with `env` as the key. |
| `params.pageSize` | `integer` | No | The maximum number of Features to return. The service may return fewer than this value. If unspecified, at most 100 Features will be returned. The maximum value is 100; any value greater than 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous FeaturestoreService.SearchFeatures call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeaturestoreService.SearchFeatures, except `page_size`, must match the call that provided the page token. |

### `projects.locations.featurestores.entityTypes`

#### `projects.locations.featurestores.entityTypes.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.entityTypes.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.featurestores.entityTypes.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.permissions` | `string` | No | The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). |

#### `projects.locations.featurestores.entityTypes.readFeatureValues()`

Reads Feature values of a specific entity of an EntityType. For reading feature values of multiple entities of an EntityType, please use StreamingReadFeatureValues.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.entityType` | `string` | Yes | Required. The resource name of the EntityType for the entity being read. Value format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entityType}`. For example, for a machine learning model predicting user clicks on a website, an EntityType ID could be `user`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.entityTypes.streamingReadFeatureValues()`

Reads Feature values for multiple entities. Depending on their size, data for different entities may be broken up across multiple responses.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.entityType` | `string` | Yes | Required. The resource name of the entities' type. Value format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entityType}`. For example, for a machine learning model predicting user clicks on a website, an EntityType ID could be `user`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.entityTypes.writeFeatureValues()`

Writes Feature values of one or more entities of an EntityType. The Feature values are merged into existing entities if any. The Feature values to be written must have timestamp within the online storage retention.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.entityType` | `string` | Yes | Required. The resource name of the EntityType for the entities being written. Value format: `projects/{project}/locations/{location}/featurestores/ {featurestore}/entityTypes/{entityType}`. For example, for a machine learning model predicting user clicks on a website, an EntityType ID could be `user`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.entityTypes.create()`

Creates a new EntityType in a given Featurestore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Featurestore to create EntityTypes. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}` |
| `params.entityTypeId` | `string` | No | Required. The ID to use for the EntityType, which will become the final component of the EntityType's resource name. This value may be up to 60 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within a featurestore. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.entityTypes.get()`

Gets details of a single EntityType.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EntityType resource. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` |

#### `projects.locations.featurestores.entityTypes.list()`

Lists EntityTypes in a given Featurestore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Featurestore to list EntityTypes. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}` |
| `params.filter` | `string` | No | Lists the EntityTypes that match the filter expression. The following filters are supported: * `create_time`: Supports `=`, `!=`, `<`, `>`, `>=`, and `<=` comparisons. Values must be in RFC 3339 format. * `update_time`: Supports `=`, `!=`, `<`, `>`, `>=`, and `<=` comparisons. Values must be in RFC 3339 format. * `labels`: Supports key-value equality as well as key presence. Examples: * `create_time > \"2020-01-31T15:30:00.000000Z\" OR update_time > \"2020-01-31T15:30:00.000000Z\"` --> EntityTypes created or updated after 2020-01-31T15:30:00.000000Z. * `labels.active = yes AND labels.env = prod` --> EntityTypes having both (active: yes) and (env: prod) labels. * `labels.env: *` --> Any EntityType which has a label with 'env' as the key. |
| `params.pageSize` | `integer` | No | The maximum number of EntityTypes to return. The service may return fewer than this value. If unspecified, at most 1000 EntityTypes will be returned. The maximum value is 1000; any value greater than 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous FeaturestoreService.ListEntityTypes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeaturestoreService.ListEntityTypes must match the call that provided the page token. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `entity_type_id` * `create_time` * `update_time` |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.featurestores.entityTypes.patch()`

Updates the parameters of a single EntityType.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Name of the EntityType. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` The last part entity_type is assigned by the client. The entity_type can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z and underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given a featurestore. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the EntityType resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. Updatable fields: * `description` * `labels` * `monitoring_config.snapshot_analysis.disabled` * `monitoring_config.snapshot_analysis.monitoring_interval_days` * `monitoring_config.snapshot_analysis.staleness_days` * `monitoring_config.import_features_analysis.state` * `monitoring_config.import_features_analysis.anomaly_detection_baseline` * `monitoring_config.numerical_threshold_config.value` * `monitoring_config.categorical_threshold_config.value` * `offline_storage_ttl_days` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.entityTypes.delete()`

Deletes a single EntityType. The EntityType must not have any Features or `force` must be set to true for the request to succeed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EntityType to be deleted. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` |
| `params.force` | `boolean` | No | If set to true, any Features for this EntityType will also be deleted. (Otherwise, the request will only work if the EntityType has no Features.) |

#### `projects.locations.featurestores.entityTypes.importFeatureValues()`

Imports Feature values into the Featurestore from a source storage. The progress of the import is tracked by the returned operation. The imported features are guaranteed to be visible to subsequent read operations after the operation is marked as successfully done. If an import operation fails, the Feature values returned from reads and exports may be inconsistent. If consistency is required, the caller must retry the same import request again and wait till the new operation returned is marked as successfully done. There are also scenarios where the caller can cause inconsistency. - Source data for import contains multiple distinct Feature values for the same entity ID and timestamp. - Source is modified during an import. This includes adding, updating, or removing source data and/or metadata. Examples of updating metadata include but are not limited to changing storage location, storage class, or retention policy. - Online serving cluster is under-provisioned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.entityType` | `string` | Yes | Required. The resource name of the EntityType grouping the Features for which values are being imported. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entityType}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.entityTypes.exportFeatureValues()`

Exports Feature values from all the entities of a target EntityType.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.entityType` | `string` | Yes | Required. The resource name of the EntityType from which to export Feature values. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.entityTypes.deleteFeatureValues()`

Delete Feature values from Featurestore. The progress of the deletion is tracked by the returned operation. The deleted feature values are guaranteed to be invisible to subsequent read operations after the operation is marked as successfully done. If a delete feature values operation fails, the feature values returned from reads and exports may be inconsistent. If consistency is required, the caller must retry the same delete request again and wait till the new operation returned is marked as successfully done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.entityType` | `string` | Yes | Required. The resource name of the EntityType grouping the Features for which values are being deleted from. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entityType}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.featurestores.entityTypes.operations`

#### `projects.locations.featurestores.entityTypes.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.featurestores.entityTypes.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.featurestores.entityTypes.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.featurestores.entityTypes.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.featurestores.entityTypes.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.featurestores.entityTypes.features`

#### `projects.locations.featurestores.entityTypes.features.create()`

Creates a new Feature in a given EntityType.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the EntityType or FeatureGroup to create a Feature. Format for entity_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}` |
| `params.featureId` | `string` | No | Required. The ID to use for the Feature, which will become the final component of the Feature's resource name. This value may be up to 128 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within an EntityType/FeatureGroup. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.entityTypes.features.batchCreate()`

Creates a batch of Features in a given EntityType.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the EntityType/FeatureGroup to create the batch of Features under. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` `projects/{project}/locations/{location}/featureGroups/{feature_group}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.entityTypes.features.get()`

Gets details of a single Feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Feature resource. Format for entity_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}` |
| `params.featureStatsAndAnomalySpec.latestStatsCount` | `integer` | No | Optional. If set, returns the most recent count of stats. Valid value is [0, 100]. If stats_time_range is set, return most recent count of stats within the stats_time_range. |
| `params.featureStatsAndAnomalySpec.statsTimeRange.startTime` | `string` | No | Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. |
| `params.featureStatsAndAnomalySpec.statsTimeRange.endTime` | `string` | No | Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. |

#### `projects.locations.featurestores.entityTypes.features.list()`

Lists Features in a given EntityType.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list Features. Format for entity_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}` |
| `params.filter` | `string` | No | Lists the Features that match the filter expression. The following filters are supported: * `value_type`: Supports = and != comparisons. * `create_time`: Supports =, !=, <, >, >=, and <= comparisons. Values must be in RFC 3339 format. * `update_time`: Supports =, !=, <, >, >=, and <= comparisons. Values must be in RFC 3339 format. * `labels`: Supports key-value equality as well as key presence. Examples: * `value_type = DOUBLE` --> Features whose type is DOUBLE. * `create_time > \"2020-01-31T15:30:00.000000Z\" OR update_time > \"2020-01-31T15:30:00.000000Z\"` --> EntityTypes created or updated after 2020-01-31T15:30:00.000000Z. * `labels.active = yes AND labels.env = prod` --> Features having both (active: yes) and (env: prod) labels. * `labels.env: *` --> Any Feature which has a label with 'env' as the key. |
| `params.pageSize` | `integer` | No | The maximum number of Features to return. The service may return fewer than this value. If unspecified, at most 1000 Features will be returned. The maximum value is 1000; any value greater than 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous FeaturestoreService.ListFeatures call or FeatureRegistryService.ListFeatures call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeaturestoreService.ListFeatures or FeatureRegistryService.ListFeatures must match the call that provided the page token. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `feature_id` * `value_type` (Not supported for FeatureRegistry Feature) * `create_time` * `update_time` |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |
| `params.latestStatsCount` | `integer` | No | Only applicable for Vertex AI Feature Store (Legacy). If set, return the most recent ListFeaturesRequest.latest_stats_count of stats for each Feature in response. Valid value is [0, 10]. If number of stats exists < ListFeaturesRequest.latest_stats_count, return all existing stats. |

#### `projects.locations.featurestores.entityTypes.features.patch()`

Updates the parameters of a single Feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Name of the Feature. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}/features/{feature}` `projects/{project}/locations/{location}/featureGroups/{feature_group}/features/{feature}` The last part feature is assigned by the client. The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the Features resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. Updatable fields: * `description` * `labels` * `disable_monitoring` (Not supported for FeatureRegistryService Feature) * `point_of_contact` (Not supported for FeaturestoreService FeatureStore) |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featurestores.entityTypes.features.delete()`

Deletes a single Feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Features to be deleted. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}/features/{feature}` `projects/{project}/locations/{location}/featureGroups/{feature_group}/features/{feature}` |

### `projects.locations.featurestores.entityTypes.features.operations`

#### `projects.locations.featurestores.entityTypes.features.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.featurestores.entityTypes.features.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.featurestores.entityTypes.features.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.featurestores.entityTypes.features.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.featurestores.entityTypes.features.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.featurestores.operations`

#### `projects.locations.featurestores.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.featurestores.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.featurestores.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.featurestores.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.featurestores.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.models`

#### `projects.locations.models.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.models.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.models.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.permissions` | `string` | No | The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). |

#### `projects.locations.models.upload()`

Uploads a Model artifact into Vertex AI.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location into which to upload the Model. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.models.get()`

Gets a Model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Model resource. Format: `projects/{project}/locations/{location}/models/{model}` In order to retrieve a specific version of the model, also provide the version ID or version alias. Example: `projects/{project}/locations/{location}/models/{model}@2` or `projects/{project}/locations/{location}/models/{model}@golden` If no version ID or alias is specified, the "default" version will be returned. The "default" version alias is created for the first version of the model, and can be moved to other versions later on. There will be exactly one default version. |

#### `projects.locations.models.list()`

Lists Models in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list the Models from. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `model` supports = and !=. `model` represents the Model ID, i.e. the last segment of the Model's resource name. * `display_name` supports = and != * `labels` supports general map functions that is: * `labels.key=value` - key:value equality * `labels.key:* or labels:key - key existence * A key including a space must be quoted. `labels."a key"`. * `base_model_name` only supports = Some examples: * `model=1234` * `displayName="myDisplayName"` * `labels.myKey="myValue"` * `baseModelName="text-bison"` |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. Typically obtained via ListModelsResponse.next_page_token of the previous ModelService.ListModels call. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.models.listVersions()`

Lists versions of the specified model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the model to list versions for. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. Typically obtained via next_page_token of the previous ListModelVersions call. |
| `params.filter` | `string` | No | An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `labels` supports general map functions that is: * `labels.key=value` - key:value equality * `labels.key:* or labels:key - key existence * A key including a space must be quoted. `labels."a key"`. Some examples: * `labels.myKey="myValue"` |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `create_time` * `update_time` Example: `update_time asc, create_time desc`. |

#### `projects.locations.models.listCheckpoints()`

Lists checkpoints of the specified model version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the model version to list checkpoints for. `projects/{project}/locations/{location}/models/{model}@{version}` Example: `projects/{project}/locations/{location}/models/{model}@2` or `projects/{project}/locations/{location}/models/{model}@golden` If no version ID or alias is specified, the latest version will be used. |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. Typically obtained via next_page_token of the previous ListModelVersionCheckpoints call. |

#### `projects.locations.models.patch()`

Updates a Model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the Model. |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. For the `FieldMask` definition, see google.protobuf.FieldMask. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.models.updateExplanationDataset()`

Incrementally update the dataset used for an examples model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.model` | `string` | Yes | Required. The resource name of the Model to update. Format: `projects/{project}/locations/{location}/models/{model}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.models.delete()`

Deletes a Model. A model cannot be deleted if any Endpoint resource has a DeployedModel based on the model in its deployed_models field.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Model resource to be deleted. Format: `projects/{project}/locations/{location}/models/{model}` |

#### `projects.locations.models.deleteVersion()`

Deletes a Model version. Model version can only be deleted if there are no DeployedModels created from it. Deleting the only version in the Model is not allowed. Use DeleteModel for deleting the Model instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the model version to be deleted, with a version ID explicitly included. Example: `projects/{project}/locations/{location}/models/{model}@1234` |

#### `projects.locations.models.mergeVersionAliases()`

Merges a set of aliases for a Model version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the model version to merge aliases, with a version ID explicitly included. Example: `projects/{project}/locations/{location}/models/{model}@1234` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.models.export()`

Exports a trained, exportable Model to a location specified by the user. A Model is considered to be exportable if it has at least one supported export format.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Model to export. The resource name may contain version id or version alias to specify the version, if no version is specified, the default version will be exported. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.models.copy()`

Copies an already existing Vertex AI Model into the specified Location. The source Model must exist in the same Project. When copying custom Models, the users themselves are responsible for Model.metadata content to be region-agnostic, as well as making sure that any resources (e.g. files) it depends on remain accessible.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location into which to copy the Model. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.models.operations`

#### `projects.locations.models.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.models.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.models.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.models.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.models.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.models.evaluations`

#### `projects.locations.models.evaluations.import()`

Imports an externally generated ModelEvaluation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent model resource. Format: `projects/{project}/locations/{location}/models/{model}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.models.evaluations.get()`

Gets a ModelEvaluation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ModelEvaluation resource. Format: `projects/{project}/locations/{location}/models/{model}/evaluations/{evaluation}` |

#### `projects.locations.models.evaluations.list()`

Lists ModelEvaluations in a Model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Model to list the ModelEvaluations from. Format: `projects/{project}/locations/{location}/models/{model}` |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. Typically obtained via ListModelEvaluationsResponse.next_page_token of the previous ModelService.ListModelEvaluations call. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

### `projects.locations.models.evaluations.operations`

#### `projects.locations.models.evaluations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.models.evaluations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.models.evaluations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.models.evaluations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.models.evaluations.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.models.evaluations.slices`

#### `projects.locations.models.evaluations.slices.batchImport()`

Imports a list of externally generated EvaluatedAnnotations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent ModelEvaluationSlice resource. Format: `projects/{project}/locations/{location}/models/{model}/evaluations/{evaluation}/slices/{slice}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.models.evaluations.slices.get()`

Gets a ModelEvaluationSlice.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ModelEvaluationSlice resource. Format: `projects/{project}/locations/{location}/models/{model}/evaluations/{evaluation}/slices/{slice}` |

#### `projects.locations.models.evaluations.slices.list()`

Lists ModelEvaluationSlices in a ModelEvaluation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the ModelEvaluation to list the ModelEvaluationSlices from. Format: `projects/{project}/locations/{location}/models/{model}/evaluations/{evaluation}` |
| `params.filter` | `string` | No | The standard list filter. * `slice.dimension` - for =. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. Typically obtained via ListModelEvaluationSlicesResponse.next_page_token of the previous ModelService.ListModelEvaluationSlices call. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

### `projects.locations.endpoints`

#### `projects.locations.endpoints.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.endpoints.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.permissions` | `string` | No | The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). |

#### `projects.locations.endpoints.create()`

Creates an Endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the Endpoint in. Format: `projects/{project}/locations/{location}` |
| `params.endpointId` | `string` | No | Immutable. The ID to use for endpoint, which will become the final component of the endpoint resource name. If not provided, Vertex AI will generate a value for this ID. If the first character is a letter, this value may be up to 63 characters, and valid characters are `[a-z0-9-]`. The last character must be a letter or number. If the first character is a number, this value may be up to 9 characters, and valid characters are `[0-9]` with no leading zeros. When using HTTP/JSON, this field is populated based on a query string argument, such as `?endpoint_id=12345`. This is the fallback for fields that are not included in either the URI or the body. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.get()`

Gets an Endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Endpoint resource. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |

#### `projects.locations.endpoints.list()`

Lists Endpoints in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location from which to list the Endpoints. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `endpoint` supports `=` and `!=`. `endpoint` represents the Endpoint ID, i.e. the last segment of the Endpoint's resource name. * `display_name` supports `=` and `!=`. * `labels` supports general map functions that is: * `labels.key=value` - key:value equality * `labels.key:*` or `labels:key` - key existence * A key including a space must be quoted. `labels."a key"`. * `base_model_name` only supports `=`. Some examples: * `endpoint=1` * `displayName="myDisplayName"` * `labels.myKey="myValue"` * `baseModelName="text-bison"` |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. Typically obtained via ListEndpointsResponse.next_page_token of the previous EndpointService.ListEndpoints call. |
| `params.readMask` | `string` | No | Optional. Mask specifying which fields to read. |
| `params.gdcZone` | `string` | No | Optional. Configures the Google Distributed Cloud (GDC) environment for online prediction. Only set this field when the Endpoint is to be deployed in a GDC environment. |

#### `projects.locations.endpoints.patch()`

Updates an Endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the Endpoint. |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. See google.protobuf.FieldMask. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.update()`

Updates an Endpoint with a long running operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the Endpoint. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.delete()`

Deletes an Endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Endpoint resource to be deleted. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |

#### `projects.locations.endpoints.deployModel()`

Deploys a Model into this Endpoint, creating a DeployedModel within it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint resource into which to deploy a Model. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.undeployModel()`

Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint resource from which to undeploy a Model. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.mutateDeployedModel()`

Updates an existing deployed model. Updatable fields include `min_replica_count`, `max_replica_count`, `required_replica_count`, `autoscaling_metric_specs`, `disable_container_logging` (v1 only), and `enable_container_logging` (v1beta1 only).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint resource into which to mutate a DeployedModel. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.predict()`

Perform an online prediction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.rawPredict()`

Perform an online prediction with an arbitrary HTTP payload. The response includes the following HTTP headers:

* `X-Vertex-AI-Endpoint-Id`: ID of the Endpoint that served this prediction.

* `X-Vertex-AI-Deployed-Model-Id`: ID of the Endpoint's DeployedModel that served this prediction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.streamRawPredict()`

Perform a streaming online prediction with an arbitrary HTTP payload.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.directPredict()`

Perform an unary online prediction request to a gRPC model server for Vertex first-party products and frameworks.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.directRawPredict()`

Perform an unary online prediction request to a gRPC model server for custom containers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.serverStreamingPredict()`

Perform a server-side streaming online prediction request for Vertex LLM streaming.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.predictLongRunning()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.fetchPredictOperation()`

Fetch an asynchronous online prediction operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.explain()`

Perform an online explanation. If deployed_model_id is specified, the corresponding DeployModel must have explanation_spec populated. If deployed_model_id is not specified, all DeployedModels must have explanation_spec populated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the explanation. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.countTokens()`

Perform a token counting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to perform token counting. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.generateContent()`

Generate content with multimodal inputs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.model` | `string` | Yes | Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.streamGenerateContent()`

Generate content with multimodal inputs with streaming support.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.model` | `string` | Yes | Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpoints.computeTokens()`

Return a list of tokens based on the input text.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to get lists of tokens and token ids. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.endpoints.operations`

#### `projects.locations.endpoints.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.endpoints.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.endpoints.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.endpoints.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.endpoints.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.endpoints.chat`

#### `projects.locations.endpoints.chat.completions()`

Exposes an OpenAI-compatible endpoint for chat completions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.notebookRuntimeTemplates`

#### `projects.locations.notebookRuntimeTemplates.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.notebookRuntimeTemplates.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.notebookRuntimeTemplates.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.permissions` | `string` | No | The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). |

#### `projects.locations.notebookRuntimeTemplates.create()`

Creates a NotebookRuntimeTemplate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the NotebookRuntimeTemplate. Format: `projects/{project}/locations/{location}` |
| `params.notebookRuntimeTemplateId` | `string` | No | Optional. User specified ID for the notebook runtime template. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.notebookRuntimeTemplates.get()`

Gets a NotebookRuntimeTemplate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the NotebookRuntimeTemplate resource. Format: `projects/{project}/locations/{location}/notebookRuntimeTemplates/{notebook_runtime_template}` |

#### `projects.locations.notebookRuntimeTemplates.list()`

Lists NotebookRuntimeTemplates in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location from which to list the NotebookRuntimeTemplates. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `notebookRuntimeTemplate` supports = and !=. `notebookRuntimeTemplate` represents the NotebookRuntimeTemplate ID, i.e. the last segment of the NotebookRuntimeTemplate's resource name. * `display_name` supports = and != * `labels` supports general map functions that is: * `labels.key=value` - key:value equality * `labels.key:* or labels:key - key existence * A key including a space must be quoted. `labels."a key"`. * `notebookRuntimeType` supports = and !=. notebookRuntimeType enum: [USER_DEFINED, ONE_CLICK]. * `machineType` supports = and !=. * `acceleratorType` supports = and !=. Some examples: * `notebookRuntimeTemplate=notebookRuntimeTemplate123` * `displayName="myDisplayName"` * `labels.myKey="myValue"` * `notebookRuntimeType=USER_DEFINED` * `machineType=e2-standard-4` * `acceleratorType=NVIDIA_TESLA_T4` |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. Typically obtained via ListNotebookRuntimeTemplatesResponse.next_page_token of the previous NotebookService.ListNotebookRuntimeTemplates call. |
| `params.readMask` | `string` | No | Optional. Mask specifying which fields to read. |
| `params.orderBy` | `string` | No | Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `display_name` * `create_time` * `update_time` Example: `display_name, create_time desc`. |

#### `projects.locations.notebookRuntimeTemplates.delete()`

Deletes a NotebookRuntimeTemplate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the NotebookRuntimeTemplate resource to be deleted. Format: `projects/{project}/locations/{location}/notebookRuntimeTemplates/{notebook_runtime_template}` |

#### `projects.locations.notebookRuntimeTemplates.patch()`

Updates a NotebookRuntimeTemplate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the NotebookRuntimeTemplate. |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. For the `FieldMask` definition, see google.protobuf.FieldMask. Input format: `{paths: "${updated_filed}"}` Updatable fields: * `encryption_spec.kms_key_name` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.notebookRuntimeTemplates.operations`

#### `projects.locations.notebookRuntimeTemplates.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.notebookRuntimeTemplates.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.notebookRuntimeTemplates.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.notebookRuntimeTemplates.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.notebookRuntimeTemplates.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.featureOnlineStores`

#### `projects.locations.featureOnlineStores.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureOnlineStores.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.featureOnlineStores.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.permissions` | `string` | No | The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). |

#### `projects.locations.featureOnlineStores.create()`

Creates a new FeatureOnlineStore in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create FeatureOnlineStores. Format: `projects/{project}/locations/{location}` |
| `params.featureOnlineStoreId` | `string` | No | Required. The ID to use for this FeatureOnlineStore, which will become the final component of the FeatureOnlineStore's resource name. This value may be up to 60 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within the project and location. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureOnlineStores.get()`

Gets details of a single FeatureOnlineStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the FeatureOnlineStore resource. |

#### `projects.locations.featureOnlineStores.list()`

Lists FeatureOnlineStores in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list FeatureOnlineStores. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | Lists the FeatureOnlineStores that match the filter expression. The following fields are supported: * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `update_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `labels`: Supports key-value equality and key presence. Examples: * `create_time > "2020-01-01" OR update_time > "2020-01-01"` FeatureOnlineStores created or updated after 2020-01-01. * `labels.env = "prod"` FeatureOnlineStores with label "env" set to "prod". |
| `params.pageSize` | `integer` | No | The maximum number of FeatureOnlineStores to return. The service may return fewer than this value. If unspecified, at most 100 FeatureOnlineStores will be returned. The maximum value is 100; any value greater than 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous FeatureOnlineStoreAdminService.ListFeatureOnlineStores call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeatureOnlineStoreAdminService.ListFeatureOnlineStores must match the call that provided the page token. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported Fields: * `create_time` * `update_time` |

#### `projects.locations.featureOnlineStores.patch()`

Updates the parameters of a single FeatureOnlineStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the FeatureOnlineStore. Format: `projects/{project}/locations/{location}/featureOnlineStores/{featureOnlineStore}` |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the FeatureOnlineStore resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. Updatable fields: * `labels` * `description` * `bigtable` * `bigtable.auto_scaling` * `bigtable.enable_multi_region_replica` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureOnlineStores.delete()`

Deletes a single FeatureOnlineStore. The FeatureOnlineStore must not contain any FeatureViews.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the FeatureOnlineStore to be deleted. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}` |
| `params.force` | `boolean` | No | If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted. (Otherwise, the request will only work if the FeatureOnlineStore has no FeatureViews.) |

### `projects.locations.featureOnlineStores.featureViews`

#### `projects.locations.featureOnlineStores.featureViews.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureOnlineStores.featureViews.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.featureOnlineStores.featureViews.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.permissions` | `string` | No | The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). |

#### `projects.locations.featureOnlineStores.featureViews.fetchFeatureValues()`

Fetch feature values under a FeatureView.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.featureView` | `string` | Yes | Required. FeatureView resource format `projects/{project}/locations/{location}/featureOnlineStores/{featureOnlineStore}/featureViews/{featureView}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureOnlineStores.featureViews.streamingFetchFeatureValues()`

Bidirectional streaming RPC to fetch feature values under a FeatureView. Requests may not have a one-to-one mapping to responses and responses may be returned out-of-order to reduce latency.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.featureView` | `string` | Yes | Required. FeatureView resource format `projects/{project}/locations/{location}/featureOnlineStores/{featureOnlineStore}/featureViews/{featureView}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureOnlineStores.featureViews.searchNearestEntities()`

Search the nearest entities under a FeatureView. Search only works for indexable feature view; if a feature view isn't indexable, returns Invalid argument response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.featureView` | `string` | Yes | Required. FeatureView resource format `projects/{project}/locations/{location}/featureOnlineStores/{featureOnlineStore}/featureViews/{featureView}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureOnlineStores.featureViews.directWrite()`

Bidirectional streaming RPC to directly write to feature values in a feature view. Requests may not have a one-to-one mapping to responses and responses may be returned out-of-order to reduce latency.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.featureView` | `string` | Yes | FeatureView resource format `projects/{project}/locations/{location}/featureOnlineStores/{featureOnlineStore}/featureViews/{featureView}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureOnlineStores.featureViews.create()`

Creates a new FeatureView in a given FeatureOnlineStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the FeatureOnlineStore to create FeatureViews. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}` |
| `params.featureViewId` | `string` | No | Required. The ID to use for the FeatureView, which will become the final component of the FeatureView's resource name. This value may be up to 60 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within a FeatureOnlineStore. |
| `params.runSyncImmediately` | `boolean` | No | Immutable. If set to true, one on demand sync will be run immediately, regardless whether the FeatureView.sync_config is configured or not. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureOnlineStores.featureViews.get()`

Gets details of a single FeatureView.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the FeatureView resource. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}/featureViews/{feature_view}` |

#### `projects.locations.featureOnlineStores.featureViews.list()`

Lists FeatureViews in a given FeatureOnlineStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the FeatureOnlineStore to list FeatureViews. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}` |
| `params.filter` | `string` | No | Lists the FeatureViews that match the filter expression. The following filters are supported: * `create_time`: Supports `=`, `!=`, `<`, `>`, `>=`, and `<=` comparisons. Values must be in RFC 3339 format. * `update_time`: Supports `=`, `!=`, `<`, `>`, `>=`, and `<=` comparisons. Values must be in RFC 3339 format. * `labels`: Supports key-value equality as well as key presence. Examples: * `create_time > \"2020-01-31T15:30:00.000000Z\" OR update_time > \"2020-01-31T15:30:00.000000Z\"` --> FeatureViews created or updated after 2020-01-31T15:30:00.000000Z. * `labels.active = yes AND labels.env = prod` --> FeatureViews having both (active: yes) and (env: prod) labels. * `labels.env: *` --> Any FeatureView which has a label with 'env' as the key. |
| `params.pageSize` | `integer` | No | The maximum number of FeatureViews to return. The service may return fewer than this value. If unspecified, at most 1000 FeatureViews will be returned. The maximum value is 1000; any value greater than 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous FeatureOnlineStoreAdminService.ListFeatureViews call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeatureOnlineStoreAdminService.ListFeatureViews must match the call that provided the page token. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `feature_view_id` * `create_time` * `update_time` |

#### `projects.locations.featureOnlineStores.featureViews.patch()`

Updates the parameters of a single FeatureView.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the FeatureView. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}/featureViews/{feature_view}` |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the FeatureView resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. Updatable fields: * `labels` * `service_agent_type` * `big_query_source` * `big_query_source.uri` * `big_query_source.entity_id_columns` * `feature_registry_source` * `feature_registry_source.feature_groups` * `sync_config` * `sync_config.cron` * `optimized_config.automatic_resources` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureOnlineStores.featureViews.delete()`

Deletes a single FeatureView.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the FeatureView to be deleted. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}/featureViews/{feature_view}` |

#### `projects.locations.featureOnlineStores.featureViews.sync()`

Triggers on-demand sync for the FeatureView.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.featureView` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}/featureViews/{feature_view}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.featureOnlineStores.featureViews.operations`

#### `projects.locations.featureOnlineStores.featureViews.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.featureOnlineStores.featureViews.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.featureOnlineStores.featureViews.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.featureOnlineStores.featureViews.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.featureOnlineStores.featureViews.featureViewSyncs`

#### `projects.locations.featureOnlineStores.featureViews.featureViewSyncs.get()`

Gets details of a single FeatureViewSync.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the FeatureViewSync resource. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}/featureViews/{feature_view}/featureViewSyncs/{feature_view_sync}` |

#### `projects.locations.featureOnlineStores.featureViews.featureViewSyncs.list()`

Lists FeatureViewSyncs in a given FeatureView.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the FeatureView to list FeatureViewSyncs. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}/featureViews/{feature_view}` |
| `params.filter` | `string` | No | Lists the FeatureViewSyncs that match the filter expression. The following filters are supported: * `create_time`: Supports `=`, `!=`, `<`, `>`, `>=`, and `<=` comparisons. Values must be in RFC 3339 format. Examples: * `create_time > \"2020-01-31T15:30:00.000000Z\"` --> FeatureViewSyncs created after 2020-01-31T15:30:00.000000Z. |
| `params.pageSize` | `integer` | No | The maximum number of FeatureViewSyncs to return. The service may return fewer than this value. If unspecified, at most 1000 FeatureViewSyncs will be returned. The maximum value is 1000; any value greater than 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous FeatureOnlineStoreAdminService.ListFeatureViewSyncs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeatureOnlineStoreAdminService.ListFeatureViewSyncs must match the call that provided the page token. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `create_time` |

### `projects.locations.featureOnlineStores.operations`

#### `projects.locations.featureOnlineStores.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.featureOnlineStores.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.featureOnlineStores.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.featureOnlineStores.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.featureGroups`

#### `projects.locations.featureGroups.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureGroups.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.featureGroups.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.permissions` | `string` | No | The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). |

#### `projects.locations.featureGroups.create()`

Creates a new FeatureGroup in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create FeatureGroups. Format: `projects/{project}/locations/{location}` |
| `params.featureGroupId` | `string` | No | Required. The ID to use for this FeatureGroup, which will become the final component of the FeatureGroup's resource name. This value may be up to 128 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within the project and location. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureGroups.get()`

Gets details of a single FeatureGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the FeatureGroup resource. |

#### `projects.locations.featureGroups.list()`

Lists FeatureGroups in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list FeatureGroups. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | Lists the FeatureGroups that match the filter expression. The following fields are supported: * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `update_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `labels`: Supports key-value equality and key presence. Examples: * `create_time > "2020-01-01" OR update_time > "2020-01-01"` FeatureGroups created or updated after 2020-01-01. * `labels.env = "prod"` FeatureGroups with label "env" set to "prod". |
| `params.pageSize` | `integer` | No | The maximum number of FeatureGroups to return. The service may return fewer than this value. If unspecified, at most 100 FeatureGroups will be returned. The maximum value is 100; any value greater than 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous FeatureRegistryService.ListFeatureGroups call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeatureRegistryService.ListFeatureGroups must match the call that provided the page token. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported Fields: * `create_time` * `update_time` |

#### `projects.locations.featureGroups.patch()`

Updates the parameters of a single FeatureGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the FeatureGroup. Format: `projects/{project}/locations/{location}/featureGroups/{featureGroup}` |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the FeatureGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. Updatable fields: * `labels` * `description` * `big_query` * `big_query.entity_id_columns` * `service_agent_type` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureGroups.delete()`

Deletes a single FeatureGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the FeatureGroup to be deleted. Format: `projects/{project}/locations/{location}/featureGroups/{feature_group}` |
| `params.force` | `boolean` | No | If set to true, any Features under this FeatureGroup will also be deleted. (Otherwise, the request will only work if the FeatureGroup has no Features.) |

### `projects.locations.featureGroups.operations`

#### `projects.locations.featureGroups.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.featureGroups.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.featureGroups.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.featureGroups.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.featureGroups.features`

#### `projects.locations.featureGroups.features.create()`

Creates a new Feature in a given FeatureGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the EntityType or FeatureGroup to create a Feature. Format for entity_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}` |
| `params.featureId` | `string` | No | Required. The ID to use for the Feature, which will become the final component of the Feature's resource name. This value may be up to 128 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within an EntityType/FeatureGroup. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureGroups.features.batchCreate()`

Creates a batch of Features in a given FeatureGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the EntityType/FeatureGroup to create the batch of Features under. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` `projects/{project}/locations/{location}/featureGroups/{feature_group}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureGroups.features.get()`

Gets details of a single Feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Feature resource. Format for entity_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}` |
| `params.featureStatsAndAnomalySpec.latestStatsCount` | `integer` | No | Optional. If set, returns the most recent count of stats. Valid value is [0, 100]. If stats_time_range is set, return most recent count of stats within the stats_time_range. |
| `params.featureStatsAndAnomalySpec.statsTimeRange.startTime` | `string` | No | Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. |
| `params.featureStatsAndAnomalySpec.statsTimeRange.endTime` | `string` | No | Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. |

#### `projects.locations.featureGroups.features.list()`

Lists Features in a given FeatureGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list Features. Format for entity_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}` |
| `params.filter` | `string` | No | Lists the Features that match the filter expression. The following filters are supported: * `value_type`: Supports = and != comparisons. * `create_time`: Supports =, !=, <, >, >=, and <= comparisons. Values must be in RFC 3339 format. * `update_time`: Supports =, !=, <, >, >=, and <= comparisons. Values must be in RFC 3339 format. * `labels`: Supports key-value equality as well as key presence. Examples: * `value_type = DOUBLE` --> Features whose type is DOUBLE. * `create_time > \"2020-01-31T15:30:00.000000Z\" OR update_time > \"2020-01-31T15:30:00.000000Z\"` --> EntityTypes created or updated after 2020-01-31T15:30:00.000000Z. * `labels.active = yes AND labels.env = prod` --> Features having both (active: yes) and (env: prod) labels. * `labels.env: *` --> Any Feature which has a label with 'env' as the key. |
| `params.pageSize` | `integer` | No | The maximum number of Features to return. The service may return fewer than this value. If unspecified, at most 1000 Features will be returned. The maximum value is 1000; any value greater than 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous FeaturestoreService.ListFeatures call or FeatureRegistryService.ListFeatures call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeaturestoreService.ListFeatures or FeatureRegistryService.ListFeatures must match the call that provided the page token. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `feature_id` * `value_type` (Not supported for FeatureRegistry Feature) * `create_time` * `update_time` |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |
| `params.latestStatsCount` | `integer` | No | Only applicable for Vertex AI Feature Store (Legacy). If set, return the most recent ListFeaturesRequest.latest_stats_count of stats for each Feature in response. Valid value is [0, 10]. If number of stats exists < ListFeaturesRequest.latest_stats_count, return all existing stats. |

#### `projects.locations.featureGroups.features.patch()`

Updates the parameters of a single Feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Name of the Feature. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}/features/{feature}` `projects/{project}/locations/{location}/featureGroups/{feature_group}/features/{feature}` The last part feature is assigned by the client. The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the Features resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. Updatable fields: * `description` * `labels` * `disable_monitoring` (Not supported for FeatureRegistryService Feature) * `point_of_contact` (Not supported for FeaturestoreService FeatureStore) |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureGroups.features.delete()`

Deletes a single Feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Features to be deleted. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}/features/{feature}` `projects/{project}/locations/{location}/featureGroups/{feature_group}/features/{feature}` |

### `projects.locations.featureGroups.features.operations`

#### `projects.locations.featureGroups.features.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.featureGroups.features.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.featureGroups.features.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.featureGroups.features.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.featureGroups.featureMonitors`

#### `projects.locations.featureGroups.featureMonitors.create()`

Creates a new FeatureMonitor in a given project, location and FeatureGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of FeatureGroup to create FeatureMonitor. Format: `projects/{project}/locations/{location}/featureGroups/{featuregroup}` |
| `params.featureMonitorId` | `string` | No | Required. The ID to use for this FeatureMonitor, which will become the final component of the FeatureGroup's resource name. This value may be up to 60 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within the FeatureGroup. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureGroups.featureMonitors.get()`

Gets details of a single FeatureMonitor.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the FeatureMonitor resource. |

#### `projects.locations.featureGroups.featureMonitors.list()`

Lists FeatureGroups in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the FeatureGroup to list FeatureMonitors. Format: `projects/{project}/locations/{location}/featureGroups/{featureGroup}` |
| `params.filter` | `string` | No | Optional. Lists the FeatureMonitors that match the filter expression. The following fields are supported: * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `update_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `labels`: Supports key-value equality and key presence. Examples: * `create_time > "2020-01-01" OR update_time > "2020-01-01"` FeatureMonitors created or updated after 2020-01-01. * `labels.env = "prod"` FeatureGroups with label "env" set to "prod". |
| `params.pageSize` | `integer` | No | Optional. The maximum number of FeatureGroups to return. The service may return fewer than this value. If unspecified, at most 100 FeatureMonitors will be returned. The maximum value is 100; any value greater than 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous FeatureRegistryService.ListFeatureMonitors call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeatureRegistryService.ListFeatureMonitors must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported Fields: * `create_time` * `update_time` |

#### `projects.locations.featureGroups.featureMonitors.patch()`

Updates the parameters of a single FeatureMonitor.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the FeatureMonitor. Format: `projects/{project}/locations/{location}/featureGroups/{featureGroup}/featureMonitors/{featureMonitor}` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the FeatureMonitor resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. Updatable fields: * `labels` * `description` * `schedule_config` * `feature_selection_config` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureGroups.featureMonitors.delete()`

Deletes a single FeatureMonitor.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the FeatureMonitor to be deleted. Format: `projects/{project}/locations/{location}/featureGroups/{feature_group}/featureMonitors/{feature_monitor}` |

### `projects.locations.featureGroups.featureMonitors.operations`

#### `projects.locations.featureGroups.featureMonitors.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.featureGroups.featureMonitors.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.featureGroups.featureMonitors.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.featureGroups.featureMonitors.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.featureGroups.featureMonitors.featureMonitorJobs`

#### `projects.locations.featureGroups.featureMonitors.featureMonitorJobs.create()`

Creates a new feature monitor job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of FeatureMonitor to create FeatureMonitorJob. Format: `projects/{project}/locations/{location}/featureGroups/{feature_group}/featureMonitors/{feature_monitor}` |
| `params.featureMonitorJobId` | `string` | No | Optional. Output only. System-generated ID for feature monitor job. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.featureGroups.featureMonitors.featureMonitorJobs.get()`

Get a feature monitor job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the FeatureMonitorJob resource. Format: `projects/{project}/locations/{location}/featureGroups/{feature_group}/featureMonitors/{feature_monitor}/featureMonitorJobs/{feature_monitor_job}` |

#### `projects.locations.featureGroups.featureMonitors.featureMonitorJobs.list()`

List feature monitor jobs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the FeatureMonitor to list FeatureMonitorJobs. Format: `projects/{project}/locations/{location}/featureGroups/{feature_group}/featureMonitors/{feature_monitor}` |
| `params.filter` | `string` | No | Optional. Lists the FeatureMonitorJobs that match the filter expression. The following fields are supported: * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be Examples: * `create_time > "2020-01-01"` FeatureMonitorJobs created after 2020-01-01. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of FeatureMonitorJobs to return. The service may return fewer than this value. If unspecified, at most 100 FeatureMonitorJobs will be returned. The maximum value is 100; any value greater than 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous FeatureRegistryService.ListFeatureMonitorJobs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to FeatureRegistryService.ListFeatureMonitorJobs must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported Fields: * `create_time` |

### `projects.locations.publishers`

### `projects.locations.publishers.models`

#### `projects.locations.publishers.models.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.publishers.models.setPublisherModelConfig()`

Sets (creates or updates) configs of publisher models. For example, sets the request/response logging config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the publisher model, in the format of `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.publishers.models.fetchPublisherModelConfig()`

Fetches the configs of publisher models.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the publisher model, in the format of `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`. |

#### `projects.locations.publishers.models.predict()`

Perform an online prediction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.publishers.models.rawPredict()`

Perform an online prediction with an arbitrary HTTP payload. The response includes the following HTTP headers:

* `X-Vertex-AI-Endpoint-Id`: ID of the Endpoint that served this prediction.

* `X-Vertex-AI-Deployed-Model-Id`: ID of the Endpoint's DeployedModel that served this prediction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.publishers.models.streamRawPredict()`

Perform a streaming online prediction with an arbitrary HTTP payload.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.publishers.models.serverStreamingPredict()`

Perform a server-side streaming online prediction request for Vertex LLM streaming.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.publishers.models.predictLongRunning()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.publishers.models.fetchPredictOperation()`

Fetch an asynchronous online prediction operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.publishers.models.countTokens()`

Perform a token counting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to perform token counting. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.publishers.models.generateContent()`

Generate content with multimodal inputs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.model` | `string` | Yes | Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.publishers.models.streamGenerateContent()`

Generate content with multimodal inputs with streaming support.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.model` | `string` | Yes | Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.publishers.models.computeTokens()`

Return a list of tokens based on the input text.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to get lists of tokens and token ids. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.publishers.models.export()`

Exports a publisher model to a user provided Google Cloud Storage bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Location to export the model weights from Format: `projects/{project}/locations/{location}` |
| `params.name` | `string` | Yes | Required. The name of the PublisherModel resource. Format: `publishers/{publisher}/models/{publisher_model}@{version_id}`, or `publishers/hf-{hugging-face-author}/models/{hugging-face-model-name}@001` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.agents`

### `projects.locations.agents.operations`

#### `projects.locations.agents.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.agents.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.agents.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.agents.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.agents.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.apps`

### `projects.locations.apps.operations`

#### `projects.locations.apps.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.apps.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.apps.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.apps.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.apps.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.edgeDevices`

### `projects.locations.edgeDevices.operations`

#### `projects.locations.edgeDevices.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.edgeDevices.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.edgeDevices.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.edgeDevices.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.edgeDevices.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.evaluationItems`

### `projects.locations.evaluationItems.operations`

#### `projects.locations.evaluationItems.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.evaluationItems.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.evaluationItems.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.evaluationItems.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.evaluationSets`

### `projects.locations.evaluationSets.operations`

#### `projects.locations.evaluationSets.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.evaluationSets.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.evaluationSets.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.evaluationSets.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.evaluationRuns`

### `projects.locations.evaluationRuns.operations`

#### `projects.locations.evaluationRuns.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.evaluationRuns.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.evaluationRuns.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.evaluationRuns.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.evaluationTasks`

### `projects.locations.evaluationTasks.operations`

#### `projects.locations.evaluationTasks.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.evaluationTasks.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.evaluationTasks.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.evaluationTasks.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.extensionControllers`

### `projects.locations.extensionControllers.operations`

#### `projects.locations.extensionControllers.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.extensionControllers.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.extensionControllers.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.extensionControllers.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.extensionControllers.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.ragEngineConfig`

### `projects.locations.ragEngineConfig.operations`

#### `projects.locations.ragEngineConfig.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.ragEngineConfig.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.ragEngineConfig.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.ragEngineConfig.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.ragEngineConfig.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.solvers`

### `projects.locations.solvers.operations`

#### `projects.locations.solvers.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.solvers.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.solvers.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

### `projects.locations.cachedContents`

#### `projects.locations.cachedContents.create()`

Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where the cached content will be created |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.cachedContents.get()`

Gets cached content configurations

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name referring to the cached content |

#### `projects.locations.cachedContents.patch()`

Updates cached content configurations

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. The server-generated resource name of the cached content Format: projects/{project}/locations/{location}/cachedContents/{cached_content} |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.cachedContents.delete()`

Deletes cached content

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name referring to the cached content |

#### `projects.locations.cachedContents.list()`

Lists cached contents in a project

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of cached contents. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of cached contents to return. The service may return fewer than this value. If unspecified, some default (under maximum) number of items will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListCachedContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCachedContents` must match the call that provided the page token. |

### `projects.locations.datasets`

#### `projects.locations.datasets.create()`

Creates a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the Dataset in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.get()`

Gets a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Dataset resource. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.datasets.patch()`

Updates a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Identifier. The resource name of the Dataset. Format: `projects/{project}/locations/{location}/datasets/{dataset}` |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. For the `FieldMask` definition, see google.protobuf.FieldMask. Updatable fields: * `display_name` * `description` * `labels` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.list()`

Lists Datasets in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the Dataset's parent resource. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `display_name`: supports = and != * `metadata_schema_uri`: supports = and != * `labels` supports general map functions that is: * `labels.key=value` - key:value equality * `labels.key:* or labels:key - key existence * A key including a space must be quoted. `labels."a key"`. Some examples: * `displayName="myDisplayName"` * `labels.myKey="myValue"` |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `display_name` * `create_time` * `update_time` |

#### `projects.locations.datasets.delete()`

Deletes a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Dataset to delete. Format: `projects/{project}/locations/{location}/datasets/{dataset}` |

#### `projects.locations.datasets.import()`

Imports data into a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Dataset resource. Format: `projects/{project}/locations/{location}/datasets/{dataset}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.export()`

Exports data from a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Dataset resource. Format: `projects/{project}/locations/{location}/datasets/{dataset}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.searchDataItems()`

Searches DataItems in a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.dataset` | `string` | Yes | Required. The resource name of the Dataset from which to search DataItems. Format: `projects/{project}/locations/{location}/datasets/{dataset}` |
| `params.orderByDataItem` | `string` | No | A comma-separated list of data item fields to order by, sorted in ascending order. Use "desc" after a field name for descending. |
| `params.orderByAnnotation.savedQuery` | `string` | No | Required. Saved query of the Annotation. Only Annotations belong to this saved query will be considered for ordering. |
| `params.orderByAnnotation.orderBy` | `string` | No | A comma-separated list of annotation fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Must also specify saved_query. |
| `params.savedQuery` | `string` | No | The resource name of a SavedQuery(annotation set in UI). Format: `projects/{project}/locations/{location}/datasets/{dataset}/savedQueries/{saved_query}` All of the search will be done in the context of this SavedQuery. |
| `params.dataLabelingJob` | `string` | No | The resource name of a DataLabelingJob. Format: `projects/{project}/locations/{location}/dataLabelingJobs/{data_labeling_job}` If this field is set, all of the search will be done in the context of this DataLabelingJob. |
| `params.dataItemFilter` | `string` | No | An expression for filtering the DataItem that will be returned. * `data_item_id` - for = or !=. * `labeled` - for = or !=. * `has_annotation(ANNOTATION_SPEC_ID)` - true only for DataItem that have at least one annotation with annotation_spec_id = `ANNOTATION_SPEC_ID` in the context of SavedQuery or DataLabelingJob. For example: * `data_item=1` * `has_annotation(5)` |
| `params.annotationsFilter` | `string` | No | An expression for filtering the Annotations that will be returned per DataItem. * `annotation_spec_id` - for = or !=. |
| `params.annotationFilters` | `string` | No | An expression that specifies what Annotations will be returned per DataItem. Annotations satisfied either of the conditions will be returned. * `annotation_spec_id` - for = or !=. Must specify `saved_query_id=` - saved query id that annotations should belong to. |
| `params.fieldMask` | `string` | No | Mask specifying which fields of DataItemView to read. |
| `params.annotationsLimit` | `integer` | No | If set, only up to this many of Annotations will be returned per DataItemView. The maximum value is 1000. If not set, the maximum value will be used. |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer results than requested. Default and maximum page size is 100. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. |
| `params.pageToken` | `string` | No | A token identifying a page of results for the server to return Typically obtained via SearchDataItemsResponse.next_page_token of the previous DatasetService.SearchDataItems call. |

#### `projects.locations.datasets.assess()`

Assesses the state or validity of the dataset with respect to a given use case.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Dataset resource. Used only for MULTIMODAL datasets. Format: `projects/{project}/locations/{location}/datasets/{dataset}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.assemble()`

Assembles each row of a multimodal dataset and writes the result into a BigQuery table.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Dataset resource (used only for MULTIMODAL datasets). Format: `projects/{project}/locations/{location}/datasets/{dataset}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.datasets.operations`

#### `projects.locations.datasets.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.datasets.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.datasets.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.datasets.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.datasets.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.datasets.datasetVersions`

#### `projects.locations.datasets.datasetVersions.create()`

Create a version from a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the Dataset resource. Format: `projects/{project}/locations/{location}/datasets/{dataset}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.datasetVersions.patch()`

Updates a DatasetVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Identifier. The resource name of the DatasetVersion. Format: `projects/{project}/locations/{location}/datasets/{dataset}/datasetVersions/{dataset_version}` |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. For the `FieldMask` definition, see google.protobuf.FieldMask. Updatable fields: * `display_name` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.datasetVersions.delete()`

Deletes a Dataset version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Dataset version to delete. Format: `projects/{project}/locations/{location}/datasets/{dataset}/datasetVersions/{dataset_version}` |

#### `projects.locations.datasets.datasetVersions.get()`

Gets a Dataset version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Dataset version to delete. Format: `projects/{project}/locations/{location}/datasets/{dataset}/datasetVersions/{dataset_version}` |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.datasets.datasetVersions.list()`

Lists DatasetVersions in a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Dataset to list DatasetVersions from. Format: `projects/{project}/locations/{location}/datasets/{dataset}` |
| `params.filter` | `string` | No | Optional. The standard list filter. |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. |
| `params.readMask` | `string` | No | Optional. Mask specifying which fields to read. |
| `params.orderBy` | `string` | No | Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. |

#### `projects.locations.datasets.datasetVersions.restore()`

Restores a dataset version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the DatasetVersion resource. Format: `projects/{project}/locations/{location}/datasets/{dataset}/datasetVersions/{dataset_version}` |

### `projects.locations.datasets.dataItems`

#### `projects.locations.datasets.dataItems.list()`

Lists DataItems in a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Dataset to list DataItems from. Format: `projects/{project}/locations/{location}/datasets/{dataset}` |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. |

### `projects.locations.datasets.dataItems.operations`

#### `projects.locations.datasets.dataItems.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.datasets.dataItems.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.datasets.dataItems.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.datasets.dataItems.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.datasets.dataItems.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.datasets.dataItems.annotations`

#### `projects.locations.datasets.dataItems.annotations.list()`

Lists Annotations belongs to a dataitem.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the DataItem to list Annotations from. Format: `projects/{project}/locations/{location}/datasets/{dataset}/dataItems/{data_item}` |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. |

### `projects.locations.datasets.dataItems.annotations.operations`

#### `projects.locations.datasets.dataItems.annotations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.datasets.dataItems.annotations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.datasets.dataItems.annotations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.datasets.dataItems.annotations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.datasets.dataItems.annotations.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.datasets.savedQueries`

#### `projects.locations.datasets.savedQueries.list()`

Lists SavedQueries in a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Dataset to list SavedQueries from. Format: `projects/{project}/locations/{location}/datasets/{dataset}` |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. |

#### `projects.locations.datasets.savedQueries.delete()`

Deletes a SavedQuery.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the SavedQuery to delete. Format: `projects/{project}/locations/{location}/datasets/{dataset}/savedQueries/{saved_query}` |

### `projects.locations.datasets.savedQueries.operations`

#### `projects.locations.datasets.savedQueries.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.datasets.savedQueries.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.datasets.savedQueries.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.datasets.savedQueries.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.datasets.savedQueries.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.datasets.annotationSpecs`

#### `projects.locations.datasets.annotationSpecs.get()`

Gets an AnnotationSpec.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the AnnotationSpec resource. Format: `projects/{project}/locations/{location}/datasets/{dataset}/annotationSpecs/{annotation_spec}` |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

### `projects.locations.datasets.annotationSpecs.operations`

#### `projects.locations.datasets.annotationSpecs.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.datasets.annotationSpecs.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.datasets.annotationSpecs.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.datasets.annotationSpecs.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.datasets.annotationSpecs.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.deploymentResourcePools`

#### `projects.locations.deploymentResourcePools.create()`

Create a DeploymentResourcePool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent location resource where this DeploymentResourcePool will be created. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.deploymentResourcePools.get()`

Get a DeploymentResourcePool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the DeploymentResourcePool to retrieve. Format: `projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}` |

#### `projects.locations.deploymentResourcePools.list()`

List DeploymentResourcePools in a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent Location which owns this collection of DeploymentResourcePools. Format: `projects/{project}/locations/{location}` |
| `params.pageSize` | `integer` | No | The maximum number of DeploymentResourcePools to return. The service may return fewer than this value. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListDeploymentResourcePools` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDeploymentResourcePools` must match the call that provided the page token. |

#### `projects.locations.deploymentResourcePools.patch()`

Update a DeploymentResourcePool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of the DeploymentResourcePool. Format: `projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}` |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.deploymentResourcePools.delete()`

Delete a DeploymentResourcePool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the DeploymentResourcePool to delete. Format: `projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}` |

#### `projects.locations.deploymentResourcePools.queryDeployedModels()`

List DeployedModels that have been deployed on this DeploymentResourcePool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.deploymentResourcePool` | `string` | Yes | Required. The name of the target DeploymentResourcePool to query. Format: `projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}` |
| `params.pageSize` | `integer` | No | The maximum number of DeployedModels to return. The service may return fewer than this value. |
| `params.pageToken` | `string` | No | A page token, received from a previous `QueryDeployedModels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryDeployedModels` must match the call that provided the page token. |

### `projects.locations.deploymentResourcePools.operations`

#### `projects.locations.deploymentResourcePools.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.deploymentResourcePools.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.deploymentResourcePools.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.deploymentResourcePools.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.deploymentResourcePools.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.exampleStores`

#### `projects.locations.exampleStores.create()`

Create an ExampleStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the ExampleStore in. Format: `projects/{project}/locations/{location}` |
| `params.exampleStore.name` | `string` | No | Identifier. The resource name of the ExampleStore. This is a unique identifier. Format: projects/{project}/locations/{location}/exampleStores/{example_store} |
| `params.exampleStore.displayName` | `string` | No | Required. Display name of the ExampleStore. |
| `params.exampleStore.description` | `string` | No | Optional. Description of the ExampleStore. |
| `params.exampleStore.createTime` | `string` | No | Output only. Timestamp when this ExampleStore was created. |
| `params.exampleStore.updateTime` | `string` | No | Output only. Timestamp when this ExampleStore was most recently updated. |
| `params.exampleStore.exampleStoreConfig.vertexEmbeddingModel` | `string` | No | Required. The embedding model to be used for vector embedding. Immutable. Supported models: * "text-embedding-005" * "text-multilingual-embedding-002" |

#### `projects.locations.exampleStores.get()`

Get an ExampleStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the ExampleStore. Format: `projects/{project}/locations/{location}/exampleStores/{example_store}` |

#### `projects.locations.exampleStores.patch()`

Update an ExampleStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the ExampleStore. This is a unique identifier. Format: projects/{project}/locations/{location}/exampleStores/{example_store} |
| `params.updateMask` | `string` | No | Optional. Mask specifying which fields to update. Supported fields: * `display_name` * `description` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.exampleStores.delete()`

Delete an ExampleStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the ExampleStore to be deleted. Format: `projects/{project}/locations/{location}/exampleStores/{example_store}` |

#### `projects.locations.exampleStores.list()`

List ExampleStores in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list the ExampleStores from. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | Optional. The standard list filter. More detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. |

#### `projects.locations.exampleStores.upsertExamples()`

Create or update Examples in the Example Store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.exampleStore` | `string` | Yes | Required. The name of the ExampleStore resource that examples are added to or updated in. Format: `projects/{project}/locations/{location}/exampleStores/{example_store}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.exampleStores.removeExamples()`

Remove Examples from the Example Store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.exampleStore` | `string` | Yes | Required. The name of the ExampleStore resource that the examples should be removed from. Format: `projects/{project}/locations/{location}/exampleStores/{example_store}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.exampleStores.searchExamples()`

Search for similar Examples for given selection criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.exampleStore` | `string` | Yes | Required. The name of the ExampleStore resource that examples are retrieved from. Format: `projects/{project}/locations/{location}/exampleStores/{example_store}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.exampleStores.fetchExamples()`

Get Examples from the Example Store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.exampleStore` | `string` | Yes | Required. The name of the ExampleStore resource that the examples should be fetched from. Format: `projects/{project}/locations/{location}/exampleStores/{example_store}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.exampleStores.operations`

#### `projects.locations.exampleStores.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.exampleStores.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.exampleStores.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.exampleStores.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.exampleStores.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.extensions`

#### `projects.locations.extensions.import()`

Imports an Extension.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to import the Extension in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.extensions.get()`

Gets an Extension.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Extension resource. Format: `projects/{project}/locations/{location}/extensions/{extension}` |

#### `projects.locations.extensions.list()`

Lists Extensions in a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list the Extensions from. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | Optional. The standard list filter. Supported fields: * `display_name` * `create_time` * `update_time` More detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. |
| `params.orderBy` | `string` | No | Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `display_name` * `create_time` * `update_time` Example: `display_name, create_time desc`. |

#### `projects.locations.extensions.patch()`

Updates an Extension.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the Extension. |
| `params.updateMask` | `string` | No | Required. Mask specifying which fields to update. Supported fields: * `display_name` * `description` * `runtime_config` * `tool_use_examples` * `manifest.description` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.extensions.delete()`

Deletes an Extension.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Extension resource to be deleted. Format: `projects/{project}/locations/{location}/extensions/{extension}` |

#### `projects.locations.extensions.execute()`

Executes the request against a given extension.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name (identifier) of the extension; Format: `projects/{project}/locations/{location}/extensions/{extension}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.extensions.query()`

Queries an extension with a default controller.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name (identifier) of the extension; Format: `projects/{project}/locations/{location}/extensions/{extension}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.extensions.operations`

#### `projects.locations.extensions.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.extensions.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.extensions.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.extensions.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.extensions.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.tuningJobs`

#### `projects.locations.tuningJobs.create()`

Creates a TuningJob. A created TuningJob right away will be attempted to be run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the TuningJob in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tuningJobs.get()`

Gets a TuningJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TuningJob resource. Format: `projects/{project}/locations/{location}/tuningJobs/{tuning_job}` |

#### `projects.locations.tuningJobs.list()`

Lists TuningJobs in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list the TuningJobs from. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | Optional. The standard list filter. |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. Typically obtained via ListTuningJobsResponse.next_page_token of the previous GenAiTuningService.ListTuningJob][] call. |

#### `projects.locations.tuningJobs.cancel()`

Cancels a TuningJob. Starts asynchronous cancellation on the TuningJob. The server makes a best effort to cancel the job, but success is not guaranteed. Clients can use GenAiTuningService.GetTuningJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On successful cancellation, the TuningJob is not deleted; instead it becomes a job with a TuningJob.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and TuningJob.state is set to `CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TuningJob to cancel. Format: `projects/{project}/locations/{location}/tuningJobs/{tuning_job}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tuningJobs.rebaseTunedModel()`

Rebase a TunedModel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location into which to rebase the Model. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.tuningJobs.operations`

#### `projects.locations.tuningJobs.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

### `projects.locations.indexes`

#### `projects.locations.indexes.create()`

Creates an Index.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the Index in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.indexes.get()`

Gets an Index.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Index resource. Format: `projects/{project}/locations/{location}/indexes/{index}` |

#### `projects.locations.indexes.import()`

Imports an Index from an external source (e.g., BigQuery).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Index resource to import data to. Format: `projects/{project}/locations/{location}/indexes/{index}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.indexes.list()`

Lists Indexes in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location from which to list the Indexes. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. Typically obtained via ListIndexesResponse.next_page_token of the previous IndexService.ListIndexes call. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.indexes.patch()`

Updates an Index.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the Index. |
| `params.updateMask` | `string` | No | The update mask applies to the resource. For the `FieldMask` definition, see google.protobuf.FieldMask. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.indexes.delete()`

Deletes an Index. An Index can only be deleted when all its DeployedIndexes had been undeployed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Index resource to be deleted. Format: `projects/{project}/locations/{location}/indexes/{index}` |

#### `projects.locations.indexes.upsertDatapoints()`

Add/update Datapoints into an Index.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.index` | `string` | Yes | Required. The name of the Index resource to be updated. Format: `projects/{project}/locations/{location}/indexes/{index}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.indexes.removeDatapoints()`

Remove Datapoints from an Index.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.index` | `string` | Yes | Required. The name of the Index resource to be updated. Format: `projects/{project}/locations/{location}/indexes/{index}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.indexes.operations`

#### `projects.locations.indexes.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.indexes.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.indexes.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.indexes.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.indexes.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.indexEndpoints`

#### `projects.locations.indexEndpoints.create()`

Creates an IndexEndpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the IndexEndpoint in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.indexEndpoints.get()`

Gets an IndexEndpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the IndexEndpoint resource. Format: `projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}` |

#### `projects.locations.indexEndpoints.list()`

Lists IndexEndpoints in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location from which to list the IndexEndpoints. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `index_endpoint` supports = and !=. `index_endpoint` represents the IndexEndpoint ID, ie. the last segment of the IndexEndpoint's resourcename. * `display_name` supports =, != and regex() (uses [re2](https://github.com/google/re2/wiki/Syntax) syntax) * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* or labels:key - key existence A key including a space must be quoted. `labels."a key"`. Some examples: * `index_endpoint="1"` * `display_name="myDisplayName"` * `regex(display_name, "^A") -> The display name starts with an A. * `labels.myKey="myValue"` |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. Typically obtained via ListIndexEndpointsResponse.next_page_token of the previous IndexEndpointService.ListIndexEndpoints call. |
| `params.readMask` | `string` | No | Optional. Mask specifying which fields to read. |

#### `projects.locations.indexEndpoints.patch()`

Updates an IndexEndpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the IndexEndpoint. |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. See google.protobuf.FieldMask. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.indexEndpoints.delete()`

Deletes an IndexEndpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the IndexEndpoint resource to be deleted. Format: `projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}` |

#### `projects.locations.indexEndpoints.deployIndex()`

Deploys an Index into this IndexEndpoint, creating a DeployedIndex within it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.indexEndpoint` | `string` | Yes | Required. The name of the IndexEndpoint resource into which to deploy an Index. Format: `projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.indexEndpoints.undeployIndex()`

Undeploys an Index from an IndexEndpoint, removing a DeployedIndex from it, and freeing all resources it's using.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.indexEndpoint` | `string` | Yes | Required. The name of the IndexEndpoint resource from which to undeploy an Index. Format: `projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.indexEndpoints.mutateDeployedIndex()`

Update an existing DeployedIndex under an IndexEndpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.indexEndpoint` | `string` | Yes | Required. The name of the IndexEndpoint resource into which to deploy an Index. Format: `projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.indexEndpoints.findNeighbors()`

Finds the nearest neighbors of each vector within the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.indexEndpoint` | `string` | Yes | Required. The name of the index endpoint. Format: `projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.indexEndpoints.readIndexDatapoints()`

Reads the datapoints/vectors of the given IDs. A maximum of 1000 datapoints can be retrieved in a batch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.indexEndpoint` | `string` | Yes | Required. The name of the index endpoint. Format: `projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.indexEndpoints.operations`

#### `projects.locations.indexEndpoints.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.indexEndpoints.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.indexEndpoints.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.indexEndpoints.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.indexEndpoints.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.customJobs`

#### `projects.locations.customJobs.create()`

Creates a CustomJob. A created CustomJob right away will be attempted to be run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the CustomJob in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.customJobs.get()`

Gets a CustomJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CustomJob resource. Format: `projects/{project}/locations/{location}/customJobs/{custom_job}` |

#### `projects.locations.customJobs.list()`

Lists CustomJobs in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list the CustomJobs from. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | The standard list filter. Supported fields: * `display_name` supports `=`, `!=` comparisons, and `:` wildcard. * `state` supports `=`, `!=` comparisons. * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: * `state="JOB_STATE_SUCCEEDED" AND display_name:"my_job_*"` * `state!="JOB_STATE_FAILED" OR display_name="my_job"` * `NOT display_name="my_job"` * `create_time>"2021-05-18T00:00:00Z"` * `labels.keyA=valueA` * `labels.keyB:*` |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. Typically obtained via ListCustomJobsResponse.next_page_token of the previous JobService.ListCustomJobs call. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.customJobs.delete()`

Deletes a CustomJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CustomJob resource to be deleted. Format: `projects/{project}/locations/{location}/customJobs/{custom_job}` |

#### `projects.locations.customJobs.cancel()`

Cancels a CustomJob. Starts asynchronous cancellation on the CustomJob. The server makes a best effort to cancel the job, but success is not guaranteed. Clients can use JobService.GetCustomJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On successful cancellation, the CustomJob is not deleted; instead it becomes a job with a CustomJob.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and CustomJob.state is set to `CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CustomJob to cancel. Format: `projects/{project}/locations/{location}/customJobs/{custom_job}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.customJobs.operations`

#### `projects.locations.customJobs.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.customJobs.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.customJobs.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.customJobs.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.customJobs.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.dataLabelingJobs`

#### `projects.locations.dataLabelingJobs.create()`

Creates a DataLabelingJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the DataLabelingJob. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataLabelingJobs.get()`

Gets a DataLabelingJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the DataLabelingJob. Format: `projects/{project}/locations/{location}/dataLabelingJobs/{data_labeling_job}` |

#### `projects.locations.dataLabelingJobs.list()`

Lists DataLabelingJobs in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the DataLabelingJob. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | The standard list filter. Supported fields: * `display_name` supports `=`, `!=` comparisons, and `:` wildcard. * `state` supports `=`, `!=` comparisons. * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: * `state="JOB_STATE_SUCCEEDED" AND display_name:"my_job_*"` * `state!="JOB_STATE_FAILED" OR display_name="my_job"` * `NOT display_name="my_job"` * `create_time>"2021-05-18T00:00:00Z"` * `labels.keyA=valueA` * `labels.keyB:*` |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. FieldMask represents a set of symbolic field paths. For example, the mask can be `paths: "name"`. The "name" here is a field in DataLabelingJob. If this field is not set, all fields of the DataLabelingJob are returned. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order by default. Use `desc` after a field name for descending. |

#### `projects.locations.dataLabelingJobs.delete()`

Deletes a DataLabelingJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the DataLabelingJob to be deleted. Format: `projects/{project}/locations/{location}/dataLabelingJobs/{data_labeling_job}` |

#### `projects.locations.dataLabelingJobs.cancel()`

Cancels a DataLabelingJob. Success of cancellation is not guaranteed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the DataLabelingJob. Format: `projects/{project}/locations/{location}/dataLabelingJobs/{data_labeling_job}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.dataLabelingJobs.operations`

#### `projects.locations.dataLabelingJobs.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.dataLabelingJobs.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.dataLabelingJobs.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.dataLabelingJobs.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.dataLabelingJobs.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.hyperparameterTuningJobs`

#### `projects.locations.hyperparameterTuningJobs.create()`

Creates a HyperparameterTuningJob

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the HyperparameterTuningJob in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.hyperparameterTuningJobs.get()`

Gets a HyperparameterTuningJob

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the HyperparameterTuningJob resource. Format: `projects/{project}/locations/{location}/hyperparameterTuningJobs/{hyperparameter_tuning_job}` |

#### `projects.locations.hyperparameterTuningJobs.list()`

Lists HyperparameterTuningJobs in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list the HyperparameterTuningJobs from. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | The standard list filter. Supported fields: * `display_name` supports `=`, `!=` comparisons, and `:` wildcard. * `state` supports `=`, `!=` comparisons. * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: * `state="JOB_STATE_SUCCEEDED" AND display_name:"my_job_*"` * `state!="JOB_STATE_FAILED" OR display_name="my_job"` * `NOT display_name="my_job"` * `create_time>"2021-05-18T00:00:00Z"` * `labels.keyA=valueA` * `labels.keyB:*` |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. Typically obtained via ListHyperparameterTuningJobsResponse.next_page_token of the previous JobService.ListHyperparameterTuningJobs call. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.hyperparameterTuningJobs.delete()`

Deletes a HyperparameterTuningJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the HyperparameterTuningJob resource to be deleted. Format: `projects/{project}/locations/{location}/hyperparameterTuningJobs/{hyperparameter_tuning_job}` |

#### `projects.locations.hyperparameterTuningJobs.cancel()`

Cancels a HyperparameterTuningJob. Starts asynchronous cancellation on the HyperparameterTuningJob. The server makes a best effort to cancel the job, but success is not guaranteed. Clients can use JobService.GetHyperparameterTuningJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On successful cancellation, the HyperparameterTuningJob is not deleted; instead it becomes a job with a HyperparameterTuningJob.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and HyperparameterTuningJob.state is set to `CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the HyperparameterTuningJob to cancel. Format: `projects/{project}/locations/{location}/hyperparameterTuningJobs/{hyperparameter_tuning_job}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.hyperparameterTuningJobs.operations`

#### `projects.locations.hyperparameterTuningJobs.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.hyperparameterTuningJobs.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.hyperparameterTuningJobs.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.hyperparameterTuningJobs.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.hyperparameterTuningJobs.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.nasJobs`

#### `projects.locations.nasJobs.create()`

Creates a NasJob

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the NasJob in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.nasJobs.get()`

Gets a NasJob

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the NasJob resource. Format: `projects/{project}/locations/{location}/nasJobs/{nas_job}` |

#### `projects.locations.nasJobs.list()`

Lists NasJobs in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list the NasJobs from. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | The standard list filter. Supported fields: * `display_name` supports `=`, `!=` comparisons, and `:` wildcard. * `state` supports `=`, `!=` comparisons. * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: * `state="JOB_STATE_SUCCEEDED" AND display_name:"my_job_*"` * `state!="JOB_STATE_FAILED" OR display_name="my_job"` * `NOT display_name="my_job"` * `create_time>"2021-05-18T00:00:00Z"` * `labels.keyA=valueA` * `labels.keyB:*` |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. Typically obtained via ListNasJobsResponse.next_page_token of the previous JobService.ListNasJobs call. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.nasJobs.delete()`

Deletes a NasJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the NasJob resource to be deleted. Format: `projects/{project}/locations/{location}/nasJobs/{nas_job}` |

#### `projects.locations.nasJobs.cancel()`

Cancels a NasJob. Starts asynchronous cancellation on the NasJob. The server makes a best effort to cancel the job, but success is not guaranteed. Clients can use JobService.GetNasJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On successful cancellation, the NasJob is not deleted; instead it becomes a job with a NasJob.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and NasJob.state is set to `CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the NasJob to cancel. Format: `projects/{project}/locations/{location}/nasJobs/{nas_job}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.nasJobs.nasTrialDetails`

#### `projects.locations.nasJobs.nasTrialDetails.get()`

Gets a NasTrialDetail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the NasTrialDetail resource. Format: `projects/{project}/locations/{location}/nasJobs/{nas_job}/nasTrialDetails/{nas_trial_detail}` |

#### `projects.locations.nasJobs.nasTrialDetails.list()`

List top NasTrialDetails of a NasJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the NasJob resource. Format: `projects/{project}/locations/{location}/nasJobs/{nas_job}` |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. Typically obtained via ListNasTrialDetailsResponse.next_page_token of the previous JobService.ListNasTrialDetails call. |

### `projects.locations.batchPredictionJobs`

#### `projects.locations.batchPredictionJobs.create()`

Creates a BatchPredictionJob. A BatchPredictionJob once created will right away be attempted to start.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the BatchPredictionJob in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.batchPredictionJobs.get()`

Gets a BatchPredictionJob

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the BatchPredictionJob resource. Format: `projects/{project}/locations/{location}/batchPredictionJobs/{batch_prediction_job}` |

#### `projects.locations.batchPredictionJobs.list()`

Lists BatchPredictionJobs in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list the BatchPredictionJobs from. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | The standard list filter. Supported fields: * `display_name` supports `=`, `!=` comparisons, and `:` wildcard. * `model_display_name` supports `=`, `!=` comparisons. * `state` supports `=`, `!=` comparisons. * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: * `state="JOB_STATE_SUCCEEDED" AND display_name:"my_job_*"` * `state!="JOB_STATE_FAILED" OR display_name="my_job"` * `NOT display_name="my_job"` * `create_time>"2021-05-18T00:00:00Z"` * `labels.keyA=valueA` * `labels.keyB:*` |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. Typically obtained via ListBatchPredictionJobsResponse.next_page_token of the previous JobService.ListBatchPredictionJobs call. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.batchPredictionJobs.delete()`

Deletes a BatchPredictionJob. Can only be called on jobs that already finished.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the BatchPredictionJob resource to be deleted. Format: `projects/{project}/locations/{location}/batchPredictionJobs/{batch_prediction_job}` |

#### `projects.locations.batchPredictionJobs.cancel()`

Cancels a BatchPredictionJob. Starts asynchronous cancellation on the BatchPredictionJob. The server makes the best effort to cancel the job, but success is not guaranteed. Clients can use JobService.GetBatchPredictionJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On a successful cancellation, the BatchPredictionJob is not deleted;instead its BatchPredictionJob.state is set to `CANCELLED`. Any files already outputted by the job are not deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the BatchPredictionJob to cancel. Format: `projects/{project}/locations/{location}/batchPredictionJobs/{batch_prediction_job}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.modelDeploymentMonitoringJobs`

#### `projects.locations.modelDeploymentMonitoringJobs.create()`

Creates a ModelDeploymentMonitoringJob. It will run periodically on a configured interval.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the ModelDeploymentMonitoringJob. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.modelDeploymentMonitoringJobs.searchModelDeploymentMonitoringStatsAnomalies()`

Searches Model Monitoring Statistics generated within a given time window.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.modelDeploymentMonitoringJob` | `string` | Yes | Required. ModelDeploymentMonitoring Job resource name. Format: `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.modelDeploymentMonitoringJobs.get()`

Gets a ModelDeploymentMonitoringJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the ModelDeploymentMonitoringJob. Format: `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}` |

#### `projects.locations.modelDeploymentMonitoringJobs.list()`

Lists ModelDeploymentMonitoringJobs in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the ModelDeploymentMonitoringJob. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | The standard list filter. Supported fields: * `display_name` supports `=`, `!=` comparisons, and `:` wildcard. * `state` supports `=`, `!=` comparisons. * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: * `state="JOB_STATE_SUCCEEDED" AND display_name:"my_job_*"` * `state!="JOB_STATE_FAILED" OR display_name="my_job"` * `NOT display_name="my_job"` * `create_time>"2021-05-18T00:00:00Z"` * `labels.keyA=valueA` * `labels.keyB:*` |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.readMask` | `string` | No | Mask specifying which fields to read |

#### `projects.locations.modelDeploymentMonitoringJobs.patch()`

Updates a ModelDeploymentMonitoringJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of a ModelDeploymentMonitoringJob. |
| `params.updateMask` | `string` | No | Required. The update mask is used to specify the fields to be overwritten in the ModelDeploymentMonitoringJob resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update_mask to `*` to override all fields. For the objective config, the user can either provide the update mask for model_deployment_monitoring_objective_configs or any combination of its nested fields, such as: model_deployment_monitoring_objective_configs.objective_config.training_dataset. Updatable fields: * `display_name` * `model_deployment_monitoring_schedule_config` * `model_monitoring_alert_config` * `logging_sampling_strategy` * `labels` * `log_ttl` * `enable_monitoring_pipeline_logs` . and * `model_deployment_monitoring_objective_configs` . or * `model_deployment_monitoring_objective_configs.objective_config.training_dataset` * `model_deployment_monitoring_objective_configs.objective_config.training_prediction_skew_detection_config` * `model_deployment_monitoring_objective_configs.objective_config.prediction_drift_detection_config` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.modelDeploymentMonitoringJobs.delete()`

Deletes a ModelDeploymentMonitoringJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the model monitoring job to delete. Format: `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}` |

#### `projects.locations.modelDeploymentMonitoringJobs.pause()`

Pauses a ModelDeploymentMonitoringJob. If the job is running, the server makes a best effort to cancel the job. Will mark ModelDeploymentMonitoringJob.state to 'PAUSED'.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the ModelDeploymentMonitoringJob to pause. Format: `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.modelDeploymentMonitoringJobs.resume()`

Resumes a paused ModelDeploymentMonitoringJob. It will start to run from next scheduled time. A deleted ModelDeploymentMonitoringJob can't be resumed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the ModelDeploymentMonitoringJob to resume. Format: `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.modelDeploymentMonitoringJobs.operations`

#### `projects.locations.modelDeploymentMonitoringJobs.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.modelDeploymentMonitoringJobs.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.modelDeploymentMonitoringJobs.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.modelDeploymentMonitoringJobs.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.modelDeploymentMonitoringJobs.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.metadataStores`

#### `projects.locations.metadataStores.create()`

Initializes a MetadataStore, including allocation of resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location where the MetadataStore should be created. Format: `projects/{project}/locations/{location}/` |
| `params.metadataStoreId` | `string` | No | The {metadatastore} portion of the resource name with the format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}` If not provided, the MetadataStore's ID will be a UUID generated by the service. Must be 4-128 characters in length. Valid characters are `/a-z-/`. Must be unique across all MetadataStores in the parent Location. (Otherwise the request will fail with ALREADY_EXISTS, or PERMISSION_DENIED if the caller can't view the preexisting MetadataStore.) |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.metadataStores.get()`

Retrieves a specific MetadataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the MetadataStore to retrieve. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}` |

#### `projects.locations.metadataStores.list()`

Lists MetadataStores for a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Location whose MetadataStores should be listed. Format: `projects/{project}/locations/{location}` |
| `params.pageSize` | `integer` | No | The maximum number of Metadata Stores to return. The service may return fewer. Must be in range 1-1000, inclusive. Defaults to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous MetadataService.ListMetadataStores call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters must match the call that provided the page token. (Otherwise the request will fail with INVALID_ARGUMENT error.) |

#### `projects.locations.metadataStores.delete()`

Deletes a single MetadataStore and all its child resources (Artifacts, Executions, and Contexts).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the MetadataStore to delete. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}` |
| `params.force` | `boolean` | No | Deprecated: Field is no longer supported. |

### `projects.locations.metadataStores.operations`

#### `projects.locations.metadataStores.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.metadataStores.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.metadataStores.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.metadataStores.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.metadataStores.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.metadataStores.artifacts`

#### `projects.locations.metadataStores.artifacts.create()`

Creates an Artifact associated with a MetadataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the MetadataStore where the Artifact should be created. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}` |
| `params.artifactId` | `string` | No | The {artifact} portion of the resource name with the format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/artifacts/{artifact}` If not provided, the Artifact's ID will be a UUID generated by the service. Must be 4-128 characters in length. Valid characters are `/a-z-/`. Must be unique across all Artifacts in the parent MetadataStore. (Otherwise the request will fail with ALREADY_EXISTS, or PERMISSION_DENIED if the caller can't view the preexisting Artifact.) |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.metadataStores.artifacts.get()`

Retrieves a specific Artifact.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Artifact to retrieve. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/artifacts/{artifact}` |

#### `projects.locations.metadataStores.artifacts.list()`

Lists Artifacts in the MetadataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The MetadataStore whose Artifacts should be listed. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}` |
| `params.pageSize` | `integer` | No | The maximum number of Artifacts to return. The service may return fewer. Must be in range 1-1000, inclusive. Defaults to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous MetadataService.ListArtifacts call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters must match the call that provided the page token. (Otherwise the request will fail with INVALID_ARGUMENT error.) |
| `params.filter` | `string` | No | Filter specifying the boolean condition for the Artifacts to satisfy in order to be part of the result set. The syntax to define filter query is based on https://google.aip.dev/160. The supported set of filters include the following: * **Attribute filtering**: For example: `display_name = "test"`. Supported fields include: `name`, `display_name`, `uri`, `state`, `schema_title`, `create_time`, and `update_time`. Time fields, such as `create_time` and `update_time`, require values specified in RFC-3339 format. For example: `create_time = "2020-11-19T11:30:00-04:00"` * **Metadata field**: To filter on metadata fields use traversal operation as follows: `metadata..`. For example: `metadata.field_1.number_value = 10.0` In case the field name contains special characters (such as colon), one can embed it inside double quote. For example: `metadata."field:1".number_value = 10.0` * **Context based filtering**: To filter Artifacts based on the contexts to which they belong, use the function operator with the full resource name `in_context()`. For example: `in_context("projects//locations//metadataStores//contexts/")` Each of the above supported filter types can be combined together using logical operators (`AND` & `OR`). Maximum nested expression depth allowed is 5. For example: `display_name = "test" AND metadata.field1.bool_value = true`. |
| `params.orderBy` | `string` | No | How the list of messages is ordered. Specify the values to order by and an ordering operation. The default sorting order is ascending. To specify descending order for a field, users append a " desc" suffix; for example: "foo desc, bar". Subfields are specified with a `.` character, such as foo.bar. see https://google.aip.dev/132#ordering for more details. |

#### `projects.locations.metadataStores.artifacts.patch()`

Updates a stored Artifact.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the Artifact. |
| `params.updateMask` | `string` | No | Optional. A FieldMask indicating which fields should be updated. |
| `params.allowMissing` | `boolean` | No | If set to true, and the Artifact is not found, a new Artifact is created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.metadataStores.artifacts.delete()`

Deletes an Artifact.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Artifact to delete. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/artifacts/{artifact}` |
| `params.etag` | `string` | No | Optional. The etag of the Artifact to delete. If this is provided, it must match the server's etag. Otherwise, the request will fail with a FAILED_PRECONDITION. |

#### `projects.locations.metadataStores.artifacts.purge()`

Purges Artifacts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The metadata store to purge Artifacts from. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.metadataStores.artifacts.queryArtifactLineageSubgraph()`

Retrieves lineage of an Artifact represented through Artifacts and Executions connected by Event edges and returned as a LineageSubgraph.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.artifact` | `string` | Yes | Required. The resource name of the Artifact whose Lineage needs to be retrieved as a LineageSubgraph. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/artifacts/{artifact}` The request may error with FAILED_PRECONDITION if the number of Artifacts, the number of Executions, or the number of Events that would be returned for the Context exceeds 1000. |
| `params.maxHops` | `integer` | No | Specifies the size of the lineage graph in terms of number of hops from the specified artifact. Negative Value: INVALID_ARGUMENT error is returned 0: Only input artifact is returned. No value: Transitive closure is performed to return the complete graph. |
| `params.filter` | `string` | No | Filter specifying the boolean condition for the Artifacts to satisfy in order to be part of the Lineage Subgraph. The syntax to define filter query is based on https://google.aip.dev/160. The supported set of filters include the following: * **Attribute filtering**: For example: `display_name = "test"` Supported fields include: `name`, `display_name`, `uri`, `state`, `schema_title`, `create_time`, and `update_time`. Time fields, such as `create_time` and `update_time`, require values specified in RFC-3339 format. For example: `create_time = "2020-11-19T11:30:00-04:00"` * **Metadata field**: To filter on metadata fields use traversal operation as follows: `metadata..`. For example: `metadata.field_1.number_value = 10.0` In case the field name contains special characters (such as colon), one can embed it inside double quote. For example: `metadata."field:1".number_value = 10.0` Each of the above supported filter types can be combined together using logical operators (`AND` & `OR`). Maximum nested expression depth allowed is 5. For example: `display_name = "test" AND metadata.field1.bool_value = true`. |

### `projects.locations.metadataStores.artifacts.operations`

#### `projects.locations.metadataStores.artifacts.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.metadataStores.artifacts.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.metadataStores.artifacts.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.metadataStores.artifacts.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.metadataStores.artifacts.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.metadataStores.contexts`

#### `projects.locations.metadataStores.contexts.create()`

Creates a Context associated with a MetadataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the MetadataStore where the Context should be created. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}` |
| `params.contextId` | `string` | No | The {context} portion of the resource name with the format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/contexts/{context}`. If not provided, the Context's ID will be a UUID generated by the service. Must be 4-128 characters in length. Valid characters are `/a-z-/`. Must be unique across all Contexts in the parent MetadataStore. (Otherwise the request will fail with ALREADY_EXISTS, or PERMISSION_DENIED if the caller can't view the preexisting Context.) |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.metadataStores.contexts.get()`

Retrieves a specific Context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Context to retrieve. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/contexts/{context}` |

#### `projects.locations.metadataStores.contexts.list()`

Lists Contexts on the MetadataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The MetadataStore whose Contexts should be listed. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}` |
| `params.pageSize` | `integer` | No | The maximum number of Contexts to return. The service may return fewer. Must be in range 1-1000, inclusive. Defaults to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous MetadataService.ListContexts call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters must match the call that provided the page token. (Otherwise the request will fail with INVALID_ARGUMENT error.) |
| `params.filter` | `string` | No | Filter specifying the boolean condition for the Contexts to satisfy in order to be part of the result set. The syntax to define filter query is based on https://google.aip.dev/160. Following are the supported set of filters: * **Attribute filtering**: For example: `display_name = "test"`. Supported fields include: `name`, `display_name`, `schema_title`, `create_time`, and `update_time`. Time fields, such as `create_time` and `update_time`, require values specified in RFC-3339 format. For example: `create_time = "2020-11-19T11:30:00-04:00"`. * **Metadata field**: To filter on metadata fields use traversal operation as follows: `metadata..`. For example: `metadata.field_1.number_value = 10.0`. In case the field name contains special characters (such as colon), one can embed it inside double quote. For example: `metadata."field:1".number_value = 10.0` * **Parent Child filtering**: To filter Contexts based on parent-child relationship use the HAS operator as follows: ``` parent_contexts: "projects//locations//metadataStores//contexts/" child_contexts: "projects//locations//metadataStores//contexts/" ``` Each of the above supported filters can be combined together using logical operators (`AND` & `OR`). Maximum nested expression depth allowed is 5. For example: `display_name = "test" AND metadata.field1.bool_value = true`. |
| `params.orderBy` | `string` | No | How the list of messages is ordered. Specify the values to order by and an ordering operation. The default sorting order is ascending. To specify descending order for a field, users append a " desc" suffix; for example: "foo desc, bar". Subfields are specified with a `.` character, such as foo.bar. see https://google.aip.dev/132#ordering for more details. |

#### `projects.locations.metadataStores.contexts.patch()`

Updates a stored Context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of the Context. |
| `params.updateMask` | `string` | No | Optional. A FieldMask indicating which fields should be updated. |
| `params.allowMissing` | `boolean` | No | If set to true, and the Context is not found, a new Context is created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.metadataStores.contexts.delete()`

Deletes a stored Context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Context to delete. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/contexts/{context}` |
| `params.force` | `boolean` | No | The force deletion semantics is still undefined. Users should not use this field. |
| `params.etag` | `string` | No | Optional. The etag of the Context to delete. If this is provided, it must match the server's etag. Otherwise, the request will fail with a FAILED_PRECONDITION. |

#### `projects.locations.metadataStores.contexts.purge()`

Purges Contexts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The metadata store to purge Contexts from. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.metadataStores.contexts.addContextArtifactsAndExecutions()`

Adds a set of Artifacts and Executions to a Context. If any of the Artifacts or Executions have already been added to a Context, they are simply skipped.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.context` | `string` | Yes | Required. The resource name of the Context that the Artifacts and Executions belong to. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/contexts/{context}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.metadataStores.contexts.addContextChildren()`

Adds a set of Contexts as children to a parent Context. If any of the child Contexts have already been added to the parent Context, they are simply skipped. If this call would create a cycle or cause any Context to have more than 10 parents, the request will fail with an INVALID_ARGUMENT error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.context` | `string` | Yes | Required. The resource name of the parent Context. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/contexts/{context}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.metadataStores.contexts.removeContextChildren()`

Remove a set of children contexts from a parent Context. If any of the child Contexts were NOT added to the parent Context, they are simply skipped.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.context` | `string` | Yes | Required. The resource name of the parent Context. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/contexts/{context}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.metadataStores.contexts.queryContextLineageSubgraph()`

Retrieves Artifacts and Executions within the specified Context, connected by Event edges and returned as a LineageSubgraph.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.context` | `string` | Yes | Required. The resource name of the Context whose Artifacts and Executions should be retrieved as a LineageSubgraph. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/contexts/{context}` The request may error with FAILED_PRECONDITION if the number of Artifacts, the number of Executions, or the number of Events that would be returned for the Context exceeds 1000. |

### `projects.locations.metadataStores.contexts.operations`

#### `projects.locations.metadataStores.contexts.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.metadataStores.contexts.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.metadataStores.contexts.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.metadataStores.contexts.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.metadataStores.contexts.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.metadataStores.executions`

#### `projects.locations.metadataStores.executions.create()`

Creates an Execution associated with a MetadataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the MetadataStore where the Execution should be created. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}` |
| `params.executionId` | `string` | No | The {execution} portion of the resource name with the format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/executions/{execution}` If not provided, the Execution's ID will be a UUID generated by the service. Must be 4-128 characters in length. Valid characters are `/a-z-/`. Must be unique across all Executions in the parent MetadataStore. (Otherwise the request will fail with ALREADY_EXISTS, or PERMISSION_DENIED if the caller can't view the preexisting Execution.) |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.metadataStores.executions.get()`

Retrieves a specific Execution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Execution to retrieve. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/executions/{execution}` |

#### `projects.locations.metadataStores.executions.list()`

Lists Executions in the MetadataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The MetadataStore whose Executions should be listed. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}` |
| `params.pageSize` | `integer` | No | The maximum number of Executions to return. The service may return fewer. Must be in range 1-1000, inclusive. Defaults to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous MetadataService.ListExecutions call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters must match the call that provided the page token. (Otherwise the request will fail with an INVALID_ARGUMENT error.) |
| `params.filter` | `string` | No | Filter specifying the boolean condition for the Executions to satisfy in order to be part of the result set. The syntax to define filter query is based on https://google.aip.dev/160. Following are the supported set of filters: * **Attribute filtering**: For example: `display_name = "test"`. Supported fields include: `name`, `display_name`, `state`, `schema_title`, `create_time`, and `update_time`. Time fields, such as `create_time` and `update_time`, require values specified in RFC-3339 format. For example: `create_time = "2020-11-19T11:30:00-04:00"`. * **Metadata field**: To filter on metadata fields use traversal operation as follows: `metadata..` For example: `metadata.field_1.number_value = 10.0` In case the field name contains special characters (such as colon), one can embed it inside double quote. For example: `metadata."field:1".number_value = 10.0` * **Context based filtering**: To filter Executions based on the contexts to which they belong use the function operator with the full resource name: `in_context()`. For example: `in_context("projects//locations//metadataStores//contexts/")` Each of the above supported filters can be combined together using logical operators (`AND` & `OR`). Maximum nested expression depth allowed is 5. For example: `display_name = "test" AND metadata.field1.bool_value = true`. |
| `params.orderBy` | `string` | No | How the list of messages is ordered. Specify the values to order by and an ordering operation. The default sorting order is ascending. To specify descending order for a field, users append a " desc" suffix; for example: "foo desc, bar". Subfields are specified with a `.` character, such as foo.bar. see https://google.aip.dev/132#ordering for more details. |

#### `projects.locations.metadataStores.executions.patch()`

Updates a stored Execution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the Execution. |
| `params.updateMask` | `string` | No | Optional. A FieldMask indicating which fields should be updated. |
| `params.allowMissing` | `boolean` | No | If set to true, and the Execution is not found, a new Execution is created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.metadataStores.executions.delete()`

Deletes an Execution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Execution to delete. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/executions/{execution}` |
| `params.etag` | `string` | No | Optional. The etag of the Execution to delete. If this is provided, it must match the server's etag. Otherwise, the request will fail with a FAILED_PRECONDITION. |

#### `projects.locations.metadataStores.executions.purge()`

Purges Executions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The metadata store to purge Executions from. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.metadataStores.executions.addExecutionEvents()`

Adds Events to the specified Execution. An Event indicates whether an Artifact was used as an input or output for an Execution. If an Event already exists between the Execution and the Artifact, the Event is skipped.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.execution` | `string` | Yes | Required. The resource name of the Execution that the Events connect Artifacts with. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/executions/{execution}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.metadataStores.executions.queryExecutionInputsAndOutputs()`

Obtains the set of input and output Artifacts for this Execution, in the form of LineageSubgraph that also contains the Execution and connecting Events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.execution` | `string` | Yes | Required. The resource name of the Execution whose input and output Artifacts should be retrieved as a LineageSubgraph. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/executions/{execution}` |

### `projects.locations.metadataStores.executions.operations`

#### `projects.locations.metadataStores.executions.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.metadataStores.executions.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.metadataStores.executions.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.metadataStores.executions.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.metadataStores.executions.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.metadataStores.metadataSchemas`

#### `projects.locations.metadataStores.metadataSchemas.create()`

Creates a MetadataSchema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the MetadataStore where the MetadataSchema should be created. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}` |
| `params.metadataSchemaId` | `string` | No | The {metadata_schema} portion of the resource name with the format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/metadataSchemas/{metadataschema}` If not provided, the MetadataStore's ID will be a UUID generated by the service. Must be 4-128 characters in length. Valid characters are `/a-z-/`. Must be unique across all MetadataSchemas in the parent Location. (Otherwise the request will fail with ALREADY_EXISTS, or PERMISSION_DENIED if the caller can't view the preexisting MetadataSchema.) |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.metadataStores.metadataSchemas.get()`

Retrieves a specific MetadataSchema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the MetadataSchema to retrieve. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/metadataSchemas/{metadataschema}` |

#### `projects.locations.metadataStores.metadataSchemas.list()`

Lists MetadataSchemas.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The MetadataStore whose MetadataSchemas should be listed. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}` |
| `params.pageSize` | `integer` | No | The maximum number of MetadataSchemas to return. The service may return fewer. Must be in range 1-1000, inclusive. Defaults to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous MetadataService.ListMetadataSchemas call. Provide this to retrieve the next page. When paginating, all other provided parameters must match the call that provided the page token. (Otherwise the request will fail with INVALID_ARGUMENT error.) |
| `params.filter` | `string` | No | A query to filter available MetadataSchemas for matching results. |

### `projects.locations.migratableResources`

#### `projects.locations.migratableResources.search()`

Searches all of the resources in automl.googleapis.com, datalabeling.googleapis.com and ml.googleapis.com that can be migrated to Vertex AI's given location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location that the migratable resources should be searched from. It's the Vertex AI location that the resources can be migrated to, not the resources' original location. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.migratableResources.batchMigrate()`

Batch migrates resources from ml.googleapis.com, automl.googleapis.com, and datalabeling.googleapis.com to Vertex AI.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location of the migrated resource will live in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.migratableResources.operations`

#### `projects.locations.migratableResources.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.migratableResources.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.migratableResources.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.migratableResources.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.migratableResources.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.modelMonitors`

#### `projects.locations.modelMonitors.create()`

Creates a ModelMonitor.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the ModelMonitor in. Format: `projects/{project}/locations/{location}` |
| `params.modelMonitorId` | `string` | No | Optional. The ID to use for the Model Monitor, which will become the final component of the model monitor resource name. The maximum length is 63 characters, and valid characters are `/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.modelMonitors.patch()`

Updates a ModelMonitor.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Resource name of the ModelMonitor. Format: `projects/{project}/locations/{location}/modelMonitors/{model_monitor}`. |
| `params.updateMask` | `string` | No | Required. Mask specifying which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.modelMonitors.get()`

Gets a ModelMonitor.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ModelMonitor resource. Format: `projects/{project}/locations/{location}/modelMonitors/{model_monitor}` |

#### `projects.locations.modelMonitors.list()`

Lists ModelMonitors in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list the ModelMonitors from. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | The standard list filter. More detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.modelMonitors.delete()`

Deletes a ModelMonitor.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ModelMonitor resource to be deleted. Format: `projects/{project}/locations/{location}/modelMonitords/{model_monitor}` |
| `params.force` | `boolean` | No | Optional. Force delete the model monitor with schedules. |

#### `projects.locations.modelMonitors.searchModelMonitoringStats()`

Searches Model Monitoring Stats generated within a given time window.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.modelMonitor` | `string` | Yes | Required. ModelMonitor resource name. Format: `projects/{project}/locations/{location}/modelMonitors/{model_monitor}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.modelMonitors.searchModelMonitoringAlerts()`

Returns the Model Monitoring alerts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.modelMonitor` | `string` | Yes | Required. ModelMonitor resource name. Format: `projects/{project}/locations/{location}/modelMonitors/{model_monitor}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.modelMonitors.operations`

#### `projects.locations.modelMonitors.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.modelMonitors.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.modelMonitors.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.modelMonitors.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.modelMonitors.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.modelMonitors.modelMonitoringJobs`

#### `projects.locations.modelMonitors.modelMonitoringJobs.create()`

Creates a ModelMonitoringJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the ModelMonitoringJob. Format: `projects/{project}/locations/{location}/modelMoniitors/{model_monitor}` |
| `params.modelMonitoringJobId` | `string` | No | Optional. The ID to use for the Model Monitoring Job, which will become the final component of the model monitoring job resource name. The maximum length is 63 characters, and valid characters are `/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.modelMonitors.modelMonitoringJobs.get()`

Gets a ModelMonitoringJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the ModelMonitoringJob. Format: `projects/{project}/locations/{location}/modelMonitors/{model_monitor}/modelMonitoringJobs/{model_monitoring_job}` |

#### `projects.locations.modelMonitors.modelMonitoringJobs.list()`

Lists ModelMonitoringJobs. Callers may choose to read across multiple Monitors as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of modelMonitor id in the parent. Format `projects/{project_id}/locations/{location}/moodelMonitors/-/modelMonitoringJobs`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the ModelMonitoringJob. Format: `projects/{project}/locations/{location}/modelMonitors/{model_monitor}` |
| `params.filter` | `string` | No | The standard list filter. More detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.readMask` | `string` | No | Mask specifying which fields to read |

#### `projects.locations.modelMonitors.modelMonitoringJobs.delete()`

Deletes a ModelMonitoringJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the model monitoring job to delete. Format: `projects/{project}/locations/{location}/modelMonitors/{model_monitor}/modelMonitoringJobs/{model_monitoring_job}` |

### `projects.locations.notebookRuntimes`

#### `projects.locations.notebookRuntimes.reportEvent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the NotebookRuntime resource. Format: `projects/{project}/locations/{location}/notebookRuntimes/{notebook_runtime}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.notebookRuntimes.generateAccessToken()`

Internal only: Called from Compute Engine instance to obtain EUC for owner Anonymous access: authenticates caller using VM identity JWT. Design doc: go/colab-on-vertex-euc-dd

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource requesting the OAuth2 token. Format: `projects/{project}/locations/{location}/notebookRuntimes/{notebook_runtime}` `projects/{project}/locations/{location}/notebookExecutionJobs/{notebook_execution_job}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.notebookRuntimes.assign()`

Assigns a NotebookRuntime to a user for a particular Notebook file. This method will either returns an existing assignment or generates a new one.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to get the NotebookRuntime assignment. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.notebookRuntimes.get()`

Gets a NotebookRuntime.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the NotebookRuntime resource. Instead of checking whether the name is in valid NotebookRuntime resource name format, directly throw NotFound exception if there is no such NotebookRuntime in spanner. |

#### `projects.locations.notebookRuntimes.list()`

Lists NotebookRuntimes in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location from which to list the NotebookRuntimes. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `notebookRuntime` supports = and !=. `notebookRuntime` represents the NotebookRuntime ID, i.e. the last segment of the NotebookRuntime's resource name. * `displayName` supports = and != and regex. * `notebookRuntimeTemplate` supports = and !=. `notebookRuntimeTemplate` represents the NotebookRuntimeTemplate ID, i.e. the last segment of the NotebookRuntimeTemplate's resource name. * `healthState` supports = and !=. healthState enum: [HEALTHY, UNHEALTHY, HEALTH_STATE_UNSPECIFIED]. * `runtimeState` supports = and !=. runtimeState enum: [RUNTIME_STATE_UNSPECIFIED, RUNNING, BEING_STARTED, BEING_STOPPED, STOPPED, BEING_UPGRADED, ERROR, INVALID]. * `runtimeUser` supports = and !=. * API version is UI only: `uiState` supports = and !=. uiState enum: [UI_RESOURCE_STATE_UNSPECIFIED, UI_RESOURCE_STATE_BEING_CREATED, UI_RESOURCE_STATE_ACTIVE, UI_RESOURCE_STATE_BEING_DELETED, UI_RESOURCE_STATE_CREATION_FAILED]. * `notebookRuntimeType` supports = and !=. notebookRuntimeType enum: [USER_DEFINED, ONE_CLICK]. * `machineType` supports = and !=. * `acceleratorType` supports = and !=. Some examples: * `notebookRuntime="notebookRuntime123"` * `displayName="myDisplayName"` and `displayName=~"myDisplayNameRegex"` * `notebookRuntimeTemplate="notebookRuntimeTemplate321"` * `healthState=HEALTHY` * `runtimeState=RUNNING` * `runtimeUser="test@google.com"` * `uiState=UI_RESOURCE_STATE_BEING_DELETED` * `notebookRuntimeType=USER_DEFINED` * `machineType=e2-standard-4` * `acceleratorType=NVIDIA_TESLA_T4` |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. Typically obtained via ListNotebookRuntimesResponse.next_page_token of the previous NotebookService.ListNotebookRuntimes call. |
| `params.readMask` | `string` | No | Optional. Mask specifying which fields to read. |
| `params.orderBy` | `string` | No | Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `display_name` * `create_time` * `update_time` Example: `display_name, create_time desc`. |

#### `projects.locations.notebookRuntimes.delete()`

Deletes a NotebookRuntime.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the NotebookRuntime resource to be deleted. Instead of checking whether the name is in valid NotebookRuntime resource name format, directly throw NotFound exception if there is no such NotebookRuntime in spanner. |

#### `projects.locations.notebookRuntimes.upgrade()`

Upgrades a NotebookRuntime.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the NotebookRuntime resource to be upgrade. Instead of checking whether the name is in valid NotebookRuntime resource name format, directly throw NotFound exception if there is no such NotebookRuntime in spanner. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.notebookRuntimes.start()`

Starts a NotebookRuntime.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the NotebookRuntime resource to be started. Instead of checking whether the name is in valid NotebookRuntime resource name format, directly throw NotFound exception if there is no such NotebookRuntime in spanner. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.notebookRuntimes.stop()`

Stops a NotebookRuntime.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the NotebookRuntime resource to be stopped. Instead of checking whether the name is in valid NotebookRuntime resource name format, directly throw NotFound exception if there is no such NotebookRuntime in spanner. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.notebookRuntimes.operations`

#### `projects.locations.notebookRuntimes.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.notebookRuntimes.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.notebookRuntimes.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.notebookRuntimes.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.notebookRuntimes.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.notebookExecutionJobs`

#### `projects.locations.notebookExecutionJobs.reportEvent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the NotebookExecutionJob resource. Format: `projects/{project}/locations/{location}/notebookExecutionJobs/{notebook_execution_jobs}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.notebookExecutionJobs.generateAccessToken()`

Internal only: Called from Compute Engine instance to obtain EUC for owner Anonymous access: authenticates caller using VM identity JWT. Design doc: go/colab-on-vertex-euc-dd

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource requesting the OAuth2 token. Format: `projects/{project}/locations/{location}/notebookRuntimes/{notebook_runtime}` `projects/{project}/locations/{location}/notebookExecutionJobs/{notebook_execution_job}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.notebookExecutionJobs.create()`

Creates a NotebookExecutionJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the NotebookExecutionJob. Format: `projects/{project}/locations/{location}` |
| `params.notebookExecutionJobId` | `string` | No | Optional. User specified ID for the NotebookExecutionJob. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.notebookExecutionJobs.get()`

Gets a NotebookExecutionJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the NotebookExecutionJob resource. |
| `params.view` | `string` | No | Optional. The NotebookExecutionJob view. Defaults to BASIC. |

#### `projects.locations.notebookExecutionJobs.list()`

Lists NotebookExecutionJobs in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location from which to list the NotebookExecutionJobs. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `notebookExecutionJob` supports = and !=. `notebookExecutionJob` represents the NotebookExecutionJob ID. * `displayName` supports = and != and regex. * `schedule` supports = and != and regex. Some examples: * `notebookExecutionJob="123"` * `notebookExecutionJob="my-execution-job"` * `displayName="myDisplayName"` and `displayName=~"myDisplayNameRegex"` |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. Typically obtained via ListNotebookExecutionJobsResponse.next_page_token of the previous NotebookService.ListNotebookExecutionJobs call. |
| `params.orderBy` | `string` | No | Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `display_name` * `create_time` * `update_time` Example: `display_name, create_time desc`. |
| `params.view` | `string` | No | Optional. The NotebookExecutionJob view. Defaults to BASIC. |

#### `projects.locations.notebookExecutionJobs.delete()`

Deletes a NotebookExecutionJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the NotebookExecutionJob resource to be deleted. |

### `projects.locations.notebookExecutionJobs.operations`

#### `projects.locations.notebookExecutionJobs.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.notebookExecutionJobs.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.notebookExecutionJobs.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.notebookExecutionJobs.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.notebookExecutionJobs.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.persistentResources`

#### `projects.locations.persistentResources.create()`

Creates a PersistentResource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the PersistentResource in. Format: `projects/{project}/locations/{location}` |
| `params.persistentResourceId` | `string` | No | Required. The ID to use for the PersistentResource, which become the final component of the PersistentResource's resource name. The maximum length is 63 characters, and valid characters are `/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.persistentResources.get()`

Gets a PersistentResource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the PersistentResource resource. Format: `projects/{project_id_or_number}/locations/{location_id}/persistentResources/{persistent_resource_id}` |

#### `projects.locations.persistentResources.list()`

Lists PersistentResources in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list the PersistentResources from. Format: `projects/{project}/locations/{location}` |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. Typically obtained via ListPersistentResourcesResponse.next_page_token of the previous PersistentResourceService.ListPersistentResource call. |

#### `projects.locations.persistentResources.delete()`

Deletes a PersistentResource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the PersistentResource to be deleted. Format: `projects/{project}/locations/{location}/persistentResources/{persistent_resource}` |

#### `projects.locations.persistentResources.patch()`

Updates a PersistentResource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Resource name of a PersistentResource. |
| `params.updateMask` | `string` | No | Required. Specify the fields to be overwritten in the PersistentResource by the update method. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.persistentResources.reboot()`

Reboots a PersistentResource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the PersistentResource resource. Format: `projects/{project_id_or_number}/locations/{location_id}/persistentResources/{persistent_resource_id}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.persistentResources.operations`

#### `projects.locations.persistentResources.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.persistentResources.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.persistentResources.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.persistentResources.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.persistentResources.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.trainingPipelines`

#### `projects.locations.trainingPipelines.create()`

Creates a TrainingPipeline. A created TrainingPipeline right away will be attempted to be run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the TrainingPipeline in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.trainingPipelines.get()`

Gets a TrainingPipeline.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TrainingPipeline resource. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}` |

#### `projects.locations.trainingPipelines.list()`

Lists TrainingPipelines in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list the TrainingPipelines from. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | The standard list filter. Supported fields: * `display_name` supports `=`, `!=` comparisons, and `:` wildcard. * `state` supports `=`, `!=` comparisons. * `training_task_definition` `=`, `!=` comparisons, and `:` wildcard. * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: * `state="PIPELINE_STATE_SUCCEEDED" AND display_name:"my_pipeline_*"` * `state!="PIPELINE_STATE_FAILED" OR display_name="my_pipeline"` * `NOT display_name="my_pipeline"` * `create_time>"2021-05-18T00:00:00Z"` * `training_task_definition:"*automl_text_classification*"` |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. Typically obtained via ListTrainingPipelinesResponse.next_page_token of the previous PipelineService.ListTrainingPipelines call. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.trainingPipelines.delete()`

Deletes a TrainingPipeline.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TrainingPipeline resource to be deleted. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}` |

#### `projects.locations.trainingPipelines.cancel()`

Cancels a TrainingPipeline. Starts asynchronous cancellation on the TrainingPipeline. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use PipelineService.GetTrainingPipeline or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the TrainingPipeline is not deleted; instead it becomes a pipeline with a TrainingPipeline.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and TrainingPipeline.state is set to `CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TrainingPipeline to cancel. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.trainingPipelines.operations`

#### `projects.locations.trainingPipelines.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.trainingPipelines.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.trainingPipelines.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.trainingPipelines.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.trainingPipelines.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.pipelineJobs`

#### `projects.locations.pipelineJobs.create()`

Creates a PipelineJob. A PipelineJob will run immediately when created.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the PipelineJob in. Format: `projects/{project}/locations/{location}` |
| `params.pipelineJobId` | `string` | No | The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. If not provided, an ID will be automatically generated. This value should be less than 128 characters, and valid characters are `/a-z-/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.pipelineJobs.get()`

Gets a PipelineJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the PipelineJob resource. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}` |

#### `projects.locations.pipelineJobs.list()`

Lists PipelineJobs in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list the PipelineJobs from. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | Lists the PipelineJobs that match the filter expression. The following fields are supported: * `pipeline_name`: Supports `=` and `!=` comparisons. * `display_name`: Supports `=`, `!=` comparisons, and `:` wildcard. * `pipeline_job_user_id`: Supports `=`, `!=` comparisons, and `:` wildcard. for example, can check if pipeline's display_name contains *step* by doing display_name:\"*step*\" * `state`: Supports `=` and `!=` comparisons. * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `update_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `end_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `labels`: Supports key-value equality and key presence. * `template_uri`: Supports `=`, `!=` comparisons, and `:` wildcard. * `template_metadata.version`: Supports `=`, `!=` comparisons, and `:` wildcard. Filter expressions can be combined together using logical operators (`AND` & `OR`). For example: `pipeline_name="test" AND create_time>"2020-05-18T13:30:00Z"`. The syntax to define filter expression is based on https://google.aip.dev/160. Examples: * `create_time>"2021-05-18T00:00:00Z" OR update_time>"2020-05-18T00:00:00Z"` PipelineJobs created or updated after 2020-05-18 00:00:00 UTC. * `labels.env = "prod"` PipelineJobs with label "env" set to "prod". |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. Typically obtained via ListPipelineJobsResponse.next_page_token of the previous PipelineService.ListPipelineJobs call. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by. The default sort order is in ascending order. Use "desc" after a field name for descending. You can have multiple order_by fields provided e.g. "create_time desc, end_time", "end_time, start_time, update_time" For example, using "create_time desc, end_time" will order results by create time in descending order, and if there are multiple jobs having the same create time, order them by the end time in ascending order. if order_by is not specified, it will order by default order is create time in descending order. Supported fields: * `create_time` * `update_time` * `end_time` * `start_time` |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.pipelineJobs.delete()`

Deletes a PipelineJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the PipelineJob resource to be deleted. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}` |

#### `projects.locations.pipelineJobs.batchDelete()`

Batch deletes PipelineJobs The Operation is atomic. If it fails, none of the PipelineJobs are deleted. If it succeeds, all of the PipelineJobs are deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the PipelineJobs' parent resource. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.pipelineJobs.cancel()`

Cancels a PipelineJob. Starts asynchronous cancellation on the PipelineJob. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use PipelineService.GetPipelineJob or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the PipelineJob is not deleted; instead it becomes a pipeline with a PipelineJob.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and PipelineJob.state is set to `CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the PipelineJob to cancel. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.pipelineJobs.batchCancel()`

Batch cancel PipelineJobs. Firstly the server will check if all the jobs are in non-terminal states, and skip the jobs that are already terminated. If the operation failed, none of the pipeline jobs are cancelled. The server will poll the states of all the pipeline jobs periodically to check the cancellation status. This operation will return an LRO.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the PipelineJobs' parent resource. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.pipelineJobs.operations`

#### `projects.locations.pipelineJobs.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.pipelineJobs.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.pipelineJobs.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.pipelineJobs.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.pipelineJobs.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.reasoningEngines`

#### `projects.locations.reasoningEngines.query()`

Queries using a reasoning engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ReasoningEngine resource to use. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reasoningEngines.streamQuery()`

Streams queries using a reasoning engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ReasoningEngine resource to use. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reasoningEngines.create()`

Creates a reasoning engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the ReasoningEngine in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reasoningEngines.get()`

Gets a reasoning engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ReasoningEngine resource. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |

#### `projects.locations.reasoningEngines.list()`

Lists reasoning engines in a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list the ReasoningEngines from. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | Optional. The standard list filter. More detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. |

#### `projects.locations.reasoningEngines.patch()`

Updates a reasoning engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the ReasoningEngine. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.updateMask` | `string` | No | Optional. Mask specifying which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reasoningEngines.delete()`

Deletes a reasoning engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ReasoningEngine resource to be deleted. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.force` | `boolean` | No | Optional. If set to true, child resources of this reasoning engine will also be deleted. Otherwise, the request will fail with FAILED_PRECONDITION error when the reasoning engine has undeleted child resources. |

### `projects.locations.reasoningEngines.operations`

#### `projects.locations.reasoningEngines.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.reasoningEngines.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.reasoningEngines.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.reasoningEngines.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.reasoningEngines.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.reasoningEngines.sandboxEnvironments`

### `projects.locations.reasoningEngines.sandboxEnvironments.operations`

#### `projects.locations.reasoningEngines.sandboxEnvironments.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.reasoningEngines.sandboxEnvironments.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.reasoningEngines.sandboxEnvironments.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.reasoningEngines.sandboxEnvironments.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.reasoningEngines.sandboxEnvironments.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.reasoningEngines.examples`

### `projects.locations.reasoningEngines.examples.operations`

#### `projects.locations.reasoningEngines.examples.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.reasoningEngines.examples.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.reasoningEngines.examples.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.reasoningEngines.examples.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.reasoningEngines.memories`

#### `projects.locations.reasoningEngines.memories.create()`

Create a Memory.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the ReasoningEngine to create the Memory under. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reasoningEngines.memories.get()`

Get a Memory.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Memory. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/memories/{memory}` |

#### `projects.locations.reasoningEngines.memories.patch()`

Update a Memory.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the Memory. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/memories/{memory}` |
| `params.updateMask` | `string` | No | Optional. Mask specifying which fields to update. Supported fields: * `display_name` * `description` * `fact` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reasoningEngines.memories.list()`

List Memories.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the ReasoningEngine to list the Memories under. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.filter` | `string` | No | Optional. The standard list filter. More detail in [AIP-160](https://google.aip.dev/160). Supported fields (equality match only): * `scope` (as a JSON string) |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. |

#### `projects.locations.reasoningEngines.memories.delete()`

Delete a Memory.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Memory to delete. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/memories/{memory}` |

#### `projects.locations.reasoningEngines.memories.generate()`

Generate memories.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the ReasoningEngine to generate memories for. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reasoningEngines.memories.retrieve()`

Retrieve memories.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the ReasoningEngine to retrieve memories from. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.reasoningEngines.memories.operations`

#### `projects.locations.reasoningEngines.memories.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.reasoningEngines.memories.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.reasoningEngines.memories.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.reasoningEngines.memories.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.reasoningEngines.memories.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.reasoningEngines.sessions`

#### `projects.locations.reasoningEngines.sessions.create()`

Creates a new Session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the location to create the session in. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reasoningEngines.sessions.get()`

Gets details of the specific Session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the session. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}` |

#### `projects.locations.reasoningEngines.sessions.list()`

Lists Sessions in a given reasoning engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the location to list sessions from. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of sessions to return. The service may return fewer than this value. If unspecified, at most 100 sessions will be returned. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list SessionService.ListSessions call. |
| `params.filter` | `string` | No | Optional. The standard list filter. Supported fields: * `display_name` Example: `display_name=abc`. |
| `params.orderBy` | `string` | No | Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `create_time` * `update_time` Example: `create_time desc`. |

#### `projects.locations.reasoningEngines.sessions.patch()`

Updates the specific Session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the session. Format: 'projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}'. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reasoningEngines.sessions.delete()`

Deletes details of the specific Session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the session. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}` |

#### `projects.locations.reasoningEngines.sessions.appendEvent()`

Appends an event to a given session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the session to append event to. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.reasoningEngines.sessions.operations`

#### `projects.locations.reasoningEngines.sessions.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.reasoningEngines.sessions.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.reasoningEngines.sessions.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.reasoningEngines.sessions.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.reasoningEngines.sessions.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.reasoningEngines.sessions.events`

#### `projects.locations.reasoningEngines.sessions.events.list()`

Lists Events in a given session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the session to list events from. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of events to return. The service may return fewer than this value. If unspecified, at most 100 events will be returned. These events are ordered by timestamp in ascending order. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list SessionService.ListEvents call. |
| `params.filter` | `string` | No | Optional. The standard list filter. Supported fields: * `timestamp` range (i.e. `timestamp>="2025-01-31T11:30:00-04:00"` where the timestamp is in RFC 3339 format) More detail in [AIP-160](https://google.aip.dev/160). |

### `projects.locations.schedules`

#### `projects.locations.schedules.create()`

Creates a Schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the Schedule in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.schedules.delete()`

Deletes a Schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Schedule resource to be deleted. Format: `projects/{project}/locations/{location}/schedules/{schedule}` |

#### `projects.locations.schedules.get()`

Gets a Schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Schedule resource. Format: `projects/{project}/locations/{location}/schedules/{schedule}` |

#### `projects.locations.schedules.list()`

Lists Schedules in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list the Schedules from. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | Lists the Schedules that match the filter expression. The following fields are supported: * `display_name`: Supports `=`, `!=` comparisons, and `:` wildcard. * `state`: Supports `=` and `!=` comparisons. * `request`: Supports existence of the check. (e.g. `create_pipeline_job_request:*` --> Schedule has create_pipeline_job_request). * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `start_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. * `end_time`: Supports `=`, `!=`, `<`, `>`, `<=`, `>=` comparisons and `:*` existence check. Values must be in RFC 3339 format. * `next_run_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons. Values must be in RFC 3339 format. Filter expressions can be combined together using logical operators (`NOT`, `AND` & `OR`). The syntax to define filter expression is based on https://google.aip.dev/160. Examples: * `state="ACTIVE" AND display_name:"my_schedule_*"` * `NOT display_name="my_schedule"` * `create_time>"2021-05-18T00:00:00Z"` * `end_time>"2021-05-18T00:00:00Z" OR NOT end_time:*` * `create_pipeline_job_request:*` |
| `params.pageSize` | `integer` | No | The standard list page size. Default to 100 if not specified. |
| `params.pageToken` | `string` | No | The standard list page token. Typically obtained via ListSchedulesResponse.next_page_token of the previous ScheduleService.ListSchedules call. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by. The default sort order is in ascending order. Use "desc" after a field name for descending. You can have multiple order_by fields provided. For example, using "create_time desc, end_time" will order results by create time in descending order, and if there are multiple schedules having the same create time, order them by the end time in ascending order. If order_by is not specified, it will order by default with create_time in descending order. Supported fields: * `create_time` * `start_time` * `end_time` * `next_run_time` |

#### `projects.locations.schedules.pause()`

Pauses a Schedule. Will mark Schedule.state to 'PAUSED'. If the schedule is paused, no new runs will be created. Already created runs will NOT be paused or canceled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Schedule resource to be paused. Format: `projects/{project}/locations/{location}/schedules/{schedule}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.schedules.resume()`

Resumes a paused Schedule to start scheduling new runs. Will mark Schedule.state to 'ACTIVE'. Only paused Schedule can be resumed. When the Schedule is resumed, new runs will be scheduled starting from the next execution time after the current time based on the time_specification in the Schedule. If Schedule.catch_up is set up true, all missed runs will be scheduled for backfill first.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Schedule resource to be resumed. Format: `projects/{project}/locations/{location}/schedules/{schedule}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.schedules.patch()`

Updates an active or paused Schedule. When the Schedule is updated, new runs will be scheduled starting from the updated next execution time after the update time based on the time_specification in the updated Schedule. All unstarted runs before the update time will be skipped while already created runs will NOT be paused or canceled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of the Schedule. |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. See google.protobuf.FieldMask. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.schedules.operations`

#### `projects.locations.schedules.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.schedules.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.schedules.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.schedules.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.schedules.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.specialistPools`

#### `projects.locations.specialistPools.create()`

Creates a SpecialistPool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent Project name for the new SpecialistPool. The form is `projects/{project}/locations/{location}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.specialistPools.get()`

Gets a SpecialistPool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SpecialistPool resource. The form is `projects/{project}/locations/{location}/specialistPools/{specialist_pool}`. |

#### `projects.locations.specialistPools.list()`

Lists SpecialistPools in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the SpecialistPool's parent resource. Format: `projects/{project}/locations/{location}` |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. Typically obtained by ListSpecialistPoolsResponse.next_page_token of the previous SpecialistPoolService.ListSpecialistPools call. Return first page if empty. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. FieldMask represents a set of |

#### `projects.locations.specialistPools.delete()`

Deletes a SpecialistPool as well as all Specialists in the pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the SpecialistPool to delete. Format: `projects/{project}/locations/{location}/specialistPools/{specialist_pool}` |
| `params.force` | `boolean` | No | If set to true, any specialist managers in this SpecialistPool will also be deleted. (Otherwise, the request will only work if the SpecialistPool has no specialist managers.) |

#### `projects.locations.specialistPools.patch()`

Updates a SpecialistPool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the SpecialistPool. |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.specialistPools.operations`

#### `projects.locations.specialistPools.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.specialistPools.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.specialistPools.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.specialistPools.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.specialistPools.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.tensorboards`

#### `projects.locations.tensorboards.create()`

Creates a Tensorboard.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the Tensorboard in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tensorboards.get()`

Gets a Tensorboard.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Tensorboard resource. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}` |

#### `projects.locations.tensorboards.patch()`

Updates a Tensorboard.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Name of the Tensorboard. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}` |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the Tensorboard resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten if it's in the mask. If the user does not provide a mask then all fields are overwritten if new values are specified. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tensorboards.list()`

Lists Tensorboards in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list Tensorboards. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | Lists the Tensorboards that match the filter expression. |
| `params.pageSize` | `integer` | No | The maximum number of Tensorboards to return. The service may return fewer than this value. If unspecified, at most 100 Tensorboards are returned. The maximum value is 100; values above 100 are coerced to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous TensorboardService.ListTensorboards call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to TensorboardService.ListTensorboards must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Field to use to sort the list. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.tensorboards.delete()`

Deletes a Tensorboard.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Tensorboard to be deleted. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}` |

#### `projects.locations.tensorboards.readUsage()`

Returns a list of monthly active users for a given TensorBoard instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tensorboard` | `string` | Yes | Required. The name of the Tensorboard resource. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}` |

#### `projects.locations.tensorboards.readSize()`

Returns the storage size for a given TensorBoard instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tensorboard` | `string` | Yes | Required. The name of the Tensorboard resource. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}` |

#### `projects.locations.tensorboards.batchRead()`

Reads multiple TensorboardTimeSeries' data. The data point number limit is 1000 for scalars, 100 for tensors and blob references. If the number of data points stored is less than the limit, all data is returned. Otherwise, the number limit of data points is randomly selected from this time series and returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tensorboard` | `string` | Yes | Required. The resource name of the Tensorboard containing TensorboardTimeSeries to read data from. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}`. The TensorboardTimeSeries referenced by time_series must be sub resources of this Tensorboard. |
| `params.timeSeries` | `string` | No | Required. The resource names of the TensorboardTimeSeries to read data from. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}/timeSeries/{time_series}` |

### `projects.locations.tensorboards.operations`

#### `projects.locations.tensorboards.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.tensorboards.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.tensorboards.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.tensorboards.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.tensorboards.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.tensorboards.experiments`

#### `projects.locations.tensorboards.experiments.create()`

Creates a TensorboardExperiment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Tensorboard to create the TensorboardExperiment in. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}` |
| `params.tensorboardExperimentId` | `string` | No | Required. The ID to use for the Tensorboard experiment, which becomes the final component of the Tensorboard experiment's resource name. This value should be 1-128 characters, and valid characters are `/a-z-/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tensorboards.experiments.get()`

Gets a TensorboardExperiment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TensorboardExperiment resource. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}` |

#### `projects.locations.tensorboards.experiments.patch()`

Updates a TensorboardExperiment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Name of the TensorboardExperiment. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}` |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the TensorboardExperiment resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten if it's in the mask. If the user does not provide a mask then all fields are overwritten if new values are specified. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tensorboards.experiments.list()`

Lists TensorboardExperiments in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Tensorboard to list TensorboardExperiments. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}` |
| `params.filter` | `string` | No | Lists the TensorboardExperiments that match the filter expression. |
| `params.pageSize` | `integer` | No | The maximum number of TensorboardExperiments to return. The service may return fewer than this value. If unspecified, at most 50 TensorboardExperiments are returned. The maximum value is 1000; values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous TensorboardService.ListTensorboardExperiments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to TensorboardService.ListTensorboardExperiments must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Field to use to sort the list. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.tensorboards.experiments.delete()`

Deletes a TensorboardExperiment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TensorboardExperiment to be deleted. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}` |

#### `projects.locations.tensorboards.experiments.batchCreate()`

Batch create TensorboardTimeSeries that belong to a TensorboardExperiment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the TensorboardExperiment to create the TensorboardTimeSeries in. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}` The TensorboardRuns referenced by the parent fields in the CreateTensorboardTimeSeriesRequest messages must be sub resources of this TensorboardExperiment. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tensorboards.experiments.write()`

Write time series data points of multiple TensorboardTimeSeries in multiple TensorboardRun's. If any data fail to be ingested, an error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tensorboardExperiment` | `string` | Yes | Required. The resource name of the TensorboardExperiment to write data to. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.tensorboards.experiments.operations`

#### `projects.locations.tensorboards.experiments.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.tensorboards.experiments.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.tensorboards.experiments.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.tensorboards.experiments.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.tensorboards.experiments.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.tensorboards.experiments.runs`

#### `projects.locations.tensorboards.experiments.runs.create()`

Creates a TensorboardRun.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the TensorboardExperiment to create the TensorboardRun in. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}` |
| `params.tensorboardRunId` | `string` | No | Required. The ID to use for the Tensorboard run, which becomes the final component of the Tensorboard run's resource name. This value should be 1-128 characters, and valid characters are `/a-z-/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tensorboards.experiments.runs.batchCreate()`

Batch create TensorboardRuns.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the TensorboardExperiment to create the TensorboardRuns in. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}` The parent field in the CreateTensorboardRunRequest messages must match this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tensorboards.experiments.runs.get()`

Gets a TensorboardRun.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TensorboardRun resource. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}` |

#### `projects.locations.tensorboards.experiments.runs.patch()`

Updates a TensorboardRun.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Name of the TensorboardRun. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}` |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the TensorboardRun resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten if it's in the mask. If the user does not provide a mask then all fields are overwritten if new values are specified. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tensorboards.experiments.runs.list()`

Lists TensorboardRuns in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the TensorboardExperiment to list TensorboardRuns. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}` |
| `params.filter` | `string` | No | Lists the TensorboardRuns that match the filter expression. |
| `params.pageSize` | `integer` | No | The maximum number of TensorboardRuns to return. The service may return fewer than this value. If unspecified, at most 50 TensorboardRuns are returned. The maximum value is 1000; values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous TensorboardService.ListTensorboardRuns call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to TensorboardService.ListTensorboardRuns must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Field to use to sort the list. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.tensorboards.experiments.runs.delete()`

Deletes a TensorboardRun.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TensorboardRun to be deleted. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}` |

#### `projects.locations.tensorboards.experiments.runs.write()`

Write time series data points into multiple TensorboardTimeSeries under a TensorboardRun. If any data fail to be ingested, an error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tensorboardRun` | `string` | Yes | Required. The resource name of the TensorboardRun to write data to. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.tensorboards.experiments.runs.operations`

#### `projects.locations.tensorboards.experiments.runs.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.tensorboards.experiments.runs.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.tensorboards.experiments.runs.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.tensorboards.experiments.runs.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.tensorboards.experiments.runs.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.tensorboards.experiments.runs.timeSeries`

#### `projects.locations.tensorboards.experiments.runs.timeSeries.create()`

Creates a TensorboardTimeSeries.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the TensorboardRun to create the TensorboardTimeSeries in. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}` |
| `params.tensorboardTimeSeriesId` | `string` | No | Optional. The user specified unique ID to use for the TensorboardTimeSeries, which becomes the final component of the TensorboardTimeSeries's resource name. This value should match "a-z0-9{0, 127}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tensorboards.experiments.runs.timeSeries.get()`

Gets a TensorboardTimeSeries.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TensorboardTimeSeries resource. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}/timeSeries/{time_series}` |

#### `projects.locations.tensorboards.experiments.runs.timeSeries.patch()`

Updates a TensorboardTimeSeries.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Name of the TensorboardTimeSeries. |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the TensorboardTimeSeries resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten if it's in the mask. If the user does not provide a mask then all fields are overwritten if new values are specified. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tensorboards.experiments.runs.timeSeries.list()`

Lists TensorboardTimeSeries in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the TensorboardRun to list TensorboardTimeSeries. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}` |
| `params.filter` | `string` | No | Lists the TensorboardTimeSeries that match the filter expression. |
| `params.pageSize` | `integer` | No | The maximum number of TensorboardTimeSeries to return. The service may return fewer than this value. If unspecified, at most 50 TensorboardTimeSeries are returned. The maximum value is 1000; values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous TensorboardService.ListTensorboardTimeSeries call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to TensorboardService.ListTensorboardTimeSeries must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Field to use to sort the list. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `projects.locations.tensorboards.experiments.runs.timeSeries.delete()`

Deletes a TensorboardTimeSeries.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TensorboardTimeSeries to be deleted. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}/timeSeries/{time_series}` |

#### `projects.locations.tensorboards.experiments.runs.timeSeries.read()`

Reads a TensorboardTimeSeries' data. By default, if the number of data points stored is less than 1000, all data is returned. Otherwise, 1000 data points is randomly selected from this time series and returned. This value can be changed by changing max_data_points, which can't be greater than 10k.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tensorboardTimeSeries` | `string` | Yes | Required. The resource name of the TensorboardTimeSeries to read data from. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}/timeSeries/{time_series}` |
| `params.maxDataPoints` | `integer` | No | The maximum number of TensorboardTimeSeries' data to return. This value should be a positive integer. This value can be set to -1 to return all data. |
| `params.filter` | `string` | No | Reads the TensorboardTimeSeries' data that match the filter expression. |

#### `projects.locations.tensorboards.experiments.runs.timeSeries.readBlobData()`

Gets bytes of TensorboardBlobs. This is to allow reading blob data stored in consumer project's Cloud Storage bucket without users having to obtain Cloud Storage access permission.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.timeSeries` | `string` | Yes | Required. The resource name of the TensorboardTimeSeries to list Blobs. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}/timeSeries/{time_series}` |
| `params.blobIds` | `string` | No | IDs of the blobs to read. |

#### `projects.locations.tensorboards.experiments.runs.timeSeries.exportTensorboardTimeSeries()`

Exports a TensorboardTimeSeries' data. Data is returned in paginated responses.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tensorboardTimeSeries` | `string` | Yes | Required. The resource name of the TensorboardTimeSeries to export data from. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}/timeSeries/{time_series}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.tensorboards.experiments.runs.timeSeries.operations`

#### `projects.locations.tensorboards.experiments.runs.timeSeries.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.tensorboards.experiments.runs.timeSeries.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.tensorboards.experiments.runs.timeSeries.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.tensorboards.experiments.runs.timeSeries.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.tensorboards.experiments.runs.timeSeries.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.studies`

#### `projects.locations.studies.create()`

Creates a Study. A resource name will be generated after creation of the Study.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the CustomJob in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.studies.get()`

Gets a Study by name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Study resource. Format: `projects/{project}/locations/{location}/studies/{study}` |

#### `projects.locations.studies.list()`

Lists all the studies in a region for an associated project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to list the Study from. Format: `projects/{project}/locations/{location}` |
| `params.pageToken` | `string` | No | Optional. A page token to request the next page of results. If unspecified, there are no subsequent pages. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of studies to return per "page" of results. If unspecified, service will pick an appropriate default. |

#### `projects.locations.studies.delete()`

Deletes a Study.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Study resource to be deleted. Format: `projects/{project}/locations/{location}/studies/{study}` |

#### `projects.locations.studies.lookup()`

Looks a study up using the user-defined display_name field instead of the fully qualified resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to get the Study from. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.studies.operations`

#### `projects.locations.studies.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.studies.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.studies.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.studies.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.studies.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.studies.trials`

#### `projects.locations.studies.trials.suggest()`

Adds one or more Trials to a Study, with parameter values suggested by Vertex AI Vizier. Returns a long-running operation associated with the generation of Trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location that the Study belongs to. Format: `projects/{project}/locations/{location}/studies/{study}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.studies.trials.create()`

Adds a user provided Trial to a Study.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Study to create the Trial in. Format: `projects/{project}/locations/{location}/studies/{study}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.studies.trials.get()`

Gets a Trial.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Trial resource. Format: `projects/{project}/locations/{location}/studies/{study}/trials/{trial}` |

#### `projects.locations.studies.trials.list()`

Lists the Trials associated with a Study.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Study to list the Trial from. Format: `projects/{project}/locations/{location}/studies/{study}` |
| `params.pageToken` | `string` | No | Optional. A page token to request the next page of results. If unspecified, there are no subsequent pages. |
| `params.pageSize` | `integer` | No | Optional. The number of Trials to retrieve per "page" of results. If unspecified, the service will pick an appropriate default. |

#### `projects.locations.studies.trials.addTrialMeasurement()`

Adds a measurement of the objective metrics to a Trial. This measurement is assumed to have been taken before the Trial is complete.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.trialName` | `string` | Yes | Required. The name of the trial to add measurement. Format: `projects/{project}/locations/{location}/studies/{study}/trials/{trial}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.studies.trials.complete()`

Marks a Trial as complete.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Trial's name. Format: `projects/{project}/locations/{location}/studies/{study}/trials/{trial}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.studies.trials.delete()`

Deletes a Trial.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Trial's name. Format: `projects/{project}/locations/{location}/studies/{study}/trials/{trial}` |

#### `projects.locations.studies.trials.checkTrialEarlyStoppingState()`

Checks whether a Trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.trialName` | `string` | Yes | Required. The Trial's name. Format: `projects/{project}/locations/{location}/studies/{study}/trials/{trial}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.studies.trials.stop()`

Stops a Trial.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Trial's name. Format: `projects/{project}/locations/{location}/studies/{study}/trials/{trial}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.studies.trials.listOptimalTrials()`

Lists the pareto-optimal Trials for multi-objective Study or the optimal Trials for single-objective Study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the Study that the optimal Trial belongs to. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.studies.trials.operations`

#### `projects.locations.studies.trials.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.studies.trials.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.studies.trials.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.studies.trials.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.studies.trials.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.ragCorpora`

#### `projects.locations.ragCorpora.create()`

Creates a RagCorpus.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location to create the RagCorpus in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.ragCorpora.patch()`

Updates a RagCorpus.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the RagCorpus. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.ragCorpora.get()`

Gets a RagCorpus.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RagCorpus resource. Format: `projects/{project}/locations/{location}/ragCorpora/{rag_corpus}` |

#### `projects.locations.ragCorpora.list()`

Lists RagCorpora in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location from which to list the RagCorpora. Format: `projects/{project}/locations/{location}` |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. Typically obtained via ListRagCorporaResponse.next_page_token of the previous VertexRagDataService.ListRagCorpora call. |

#### `projects.locations.ragCorpora.delete()`

Deletes a RagCorpus.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RagCorpus resource to be deleted. Format: `projects/{project}/locations/{location}/ragCorpora/{rag_corpus}` |
| `params.force` | `boolean` | No | Optional. If set to true, any RagFiles in this RagCorpus will also be deleted. Otherwise, the request will only work if the RagCorpus has no RagFiles. |

### `projects.locations.ragCorpora.operations`

#### `projects.locations.ragCorpora.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.ragCorpora.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.ragCorpora.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.ragCorpora.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.ragCorpora.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.locations.ragCorpora.ragFiles`

#### `projects.locations.ragCorpora.ragFiles.import()`

Import files from Google Cloud Storage or Google Drive into a RagCorpus.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the RagCorpus resource into which to import files. Format: `projects/{project}/locations/{location}/ragCorpora/{rag_corpus}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.ragCorpora.ragFiles.get()`

Gets a RagFile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RagFile resource. Format: `projects/{project}/locations/{location}/ragCorpora/{rag_corpus}/ragFiles/{rag_file}` |

#### `projects.locations.ragCorpora.ragFiles.list()`

Lists RagFiles in a RagCorpus.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the RagCorpus from which to list the RagFiles. Format: `projects/{project}/locations/{location}/ragCorpora/{rag_corpus}` |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. Typically obtained via ListRagFilesResponse.next_page_token of the previous VertexRagDataService.ListRagFiles call. |

#### `projects.locations.ragCorpora.ragFiles.delete()`

Deletes a RagFile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RagFile resource to be deleted. Format: `projects/{project}/locations/{location}/ragCorpora/{rag_corpus}/ragFiles/{rag_file}` |

### `projects.locations.ragCorpora.ragFiles.operations`

#### `projects.locations.ragCorpora.ragFiles.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.ragCorpora.ragFiles.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.ragCorpora.ragFiles.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.ragCorpora.ragFiles.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.ragCorpora.ragFiles.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

### `projects.modelGardenEula`

#### `projects.modelGardenEula.check()`

Checks the EULA acceptance status of a publisher model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project requesting access for named model. The format is `projects/{project}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.modelGardenEula.accept()`

Accepts the EULA acceptance status of a publisher model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project requesting access for named model. The format is `projects/{project}`. |
| `params.resource` | `object` | Yes | The request body. |

### `datasets`

#### `datasets.create()`

Creates a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | No | Required. The resource name of the Location to create the Dataset in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `datasets.get()`

Gets a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Dataset resource. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `datasets.patch()`

Updates a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Identifier. The resource name of the Dataset. Format: `projects/{project}/locations/{location}/datasets/{dataset}` |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. For the `FieldMask` definition, see google.protobuf.FieldMask. Updatable fields: * `display_name` * `description` * `labels` |
| `params.resource` | `object` | Yes | The request body. |

#### `datasets.list()`

Lists Datasets in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | No | Required. The name of the Dataset's parent resource. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | An expression for filtering the results of the request. For field names both snake_case and camelCase are supported. * `display_name`: supports = and != * `metadata_schema_uri`: supports = and != * `labels` supports general map functions that is: * `labels.key=value` - key:value equality * `labels.key:* or labels:key - key existence * A key including a space must be quoted. `labels."a key"`. Some examples: * `displayName="myDisplayName"` * `labels.myKey="myValue"` |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `display_name` * `create_time` * `update_time` |

#### `datasets.delete()`

Deletes a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Dataset to delete. Format: `projects/{project}/locations/{location}/datasets/{dataset}` |

### `datasets.datasetVersions`

#### `datasets.datasetVersions.create()`

Create a version from a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the Dataset resource. Format: `projects/{project}/locations/{location}/datasets/{dataset}` |
| `params.resource` | `object` | Yes | The request body. |

#### `datasets.datasetVersions.patch()`

Updates a DatasetVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Identifier. The resource name of the DatasetVersion. Format: `projects/{project}/locations/{location}/datasets/{dataset}/datasetVersions/{dataset_version}` |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. For the `FieldMask` definition, see google.protobuf.FieldMask. Updatable fields: * `display_name` |
| `params.resource` | `object` | Yes | The request body. |

#### `datasets.datasetVersions.delete()`

Deletes a Dataset version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Dataset version to delete. Format: `projects/{project}/locations/{location}/datasets/{dataset}/datasetVersions/{dataset_version}` |

#### `datasets.datasetVersions.get()`

Gets a Dataset version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Dataset version to delete. Format: `projects/{project}/locations/{location}/datasets/{dataset}/datasetVersions/{dataset_version}` |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

#### `datasets.datasetVersions.list()`

Lists DatasetVersions in a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Dataset to list DatasetVersions from. Format: `projects/{project}/locations/{location}/datasets/{dataset}` |
| `params.filter` | `string` | No | Optional. The standard list filter. |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. |
| `params.readMask` | `string` | No | Optional. Mask specifying which fields to read. |
| `params.orderBy` | `string` | No | Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. |

#### `datasets.datasetVersions.restore()`

Restores a dataset version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the DatasetVersion resource. Format: `projects/{project}/locations/{location}/datasets/{dataset}/datasetVersions/{dataset_version}` |

### `batchPredictionJobs`

#### `batchPredictionJobs.create()`

Creates a BatchPredictionJob. A BatchPredictionJob once created will right away be attempted to start.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | No | Required. The resource name of the Location to create the BatchPredictionJob in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `batchPredictionJobs.get()`

Gets a BatchPredictionJob

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the BatchPredictionJob resource. Format: `projects/{project}/locations/{location}/batchPredictionJobs/{batch_prediction_job}` |

#### `batchPredictionJobs.list()`

Lists BatchPredictionJobs in a Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | No | Required. The resource name of the Location to list the BatchPredictionJobs from. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | The standard list filter. Supported fields: * `display_name` supports `=`, `!=` comparisons, and `:` wildcard. * `model_display_name` supports `=`, `!=` comparisons. * `state` supports `=`, `!=` comparisons. * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. * `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: * `state="JOB_STATE_SUCCEEDED" AND display_name:"my_job_*"` * `state!="JOB_STATE_FAILED" OR display_name="my_job"` * `NOT display_name="my_job"` * `create_time>"2021-05-18T00:00:00Z"` * `labels.keyA=valueA` * `labels.keyB:*` |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. Typically obtained via ListBatchPredictionJobsResponse.next_page_token of the previous JobService.ListBatchPredictionJobs call. |
| `params.readMask` | `string` | No | Mask specifying which fields to read. |

### `endpoints`

#### `endpoints.predict()`

Perform an online prediction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `endpoints.predictLongRunning()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}` |
| `params.resource` | `object` | Yes | The request body. |

#### `endpoints.fetchPredictOperation()`

Fetch an asynchronous online prediction operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}` |
| `params.resource` | `object` | Yes | The request body. |

#### `endpoints.countTokens()`

Perform a token counting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to perform token counting. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `endpoints.generateContent()`

Generate content with multimodal inputs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.model` | `string` | Yes | Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `endpoints.streamGenerateContent()`

Generate content with multimodal inputs with streaming support.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.model` | `string` | Yes | Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `endpoints.computeTokens()`

Return a list of tokens based on the input text.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to get lists of tokens and token ids. |
| `params.resource` | `object` | Yes | The request body. |

### `endpoints.chat`

#### `endpoints.chat.completions()`

Exposes an OpenAI-compatible endpoint for chat completions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

### `publishers`

### `publishers.models`

#### `publishers.models.predict()`

Perform an online prediction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `publishers.models.predictLongRunning()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}` |
| `params.resource` | `object` | Yes | The request body. |

#### `publishers.models.fetchPredictOperation()`

Fetch an asynchronous online prediction operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to serve the prediction. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}` |
| `params.resource` | `object` | Yes | The request body. |

#### `publishers.models.countTokens()`

Perform a token counting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to perform token counting. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `publishers.models.generateContent()`

Generate content with multimodal inputs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.model` | `string` | Yes | Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `publishers.models.streamGenerateContent()`

Generate content with multimodal inputs with streaming support.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.model` | `string` | Yes | Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `publishers.models.computeTokens()`

Return a list of tokens based on the input text.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to get lists of tokens and token ids. |
| `params.resource` | `object` | Yes | The request body. |

#### `publishers.models.get()`

Gets a Model Garden publisher model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the PublisherModel resource. Format: `publishers/{publisher}/models/{publisher_model}` |
| `params.languageCode` | `string` | No | Optional. The IETF BCP-47 language code representing the language in which the publisher model's text information should be written in. |
| `params.view` | `string` | No | Optional. PublisherModel view specifying which fields to read. |
| `params.isHuggingFaceModel` | `boolean` | No | Optional. Boolean indicates whether the requested model is a Hugging Face model. |
| `params.huggingFaceToken` | `string` | No | Optional. Token used to access Hugging Face gated models. |
| `params.includeEquivalentModelGardenModelDeploymentConfigs` | `boolean` | No | Optional. Whether to cnclude the deployment configs from the equivalent Model Garden model if the requested model is a Hugging Face model. |

#### `publishers.models.list()`

Lists publisher models in Model Garden.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the Publisher from which to list the PublisherModels. Format: `publishers/{publisher}` |
| `params.filter` | `string` | No | Optional. The standard list filter. |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. Typically obtained via ListPublisherModelsResponse.next_page_token of the previous ModelGardenService.ListPublisherModels call. |
| `params.view` | `string` | No | Optional. PublisherModel view specifying which fields to read. |
| `params.orderBy` | `string` | No | Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. |
| `params.languageCode` | `string` | No | Optional. The IETF BCP-47 language code representing the language in which the publisher models' text information should be written in. If not set, by default English (en). |
| `params.listAllVersions` | `boolean` | No | Optional. List all publisher model versions if the flag is set to true. |

### `reasoningEngines`

#### `reasoningEngines.query()`

Queries using a reasoning engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ReasoningEngine resource to use. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.resource` | `object` | Yes | The request body. |

#### `reasoningEngines.streamQuery()`

Streams queries using a reasoning engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ReasoningEngine resource to use. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.resource` | `object` | Yes | The request body. |

#### `reasoningEngines.create()`

Creates a reasoning engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | No | Required. The resource name of the Location to create the ReasoningEngine in. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `reasoningEngines.get()`

Gets a reasoning engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ReasoningEngine resource. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |

#### `reasoningEngines.list()`

Lists reasoning engines in a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | No | Required. The resource name of the Location to list the ReasoningEngines from. Format: `projects/{project}/locations/{location}` |
| `params.filter` | `string` | No | Optional. The standard list filter. More detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. |

#### `reasoningEngines.patch()`

Updates a reasoning engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the ReasoningEngine. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.updateMask` | `string` | No | Optional. Mask specifying which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `reasoningEngines.delete()`

Deletes a reasoning engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ReasoningEngine resource to be deleted. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.force` | `boolean` | No | Optional. If set to true, child resources of this reasoning engine will also be deleted. Otherwise, the request will fail with FAILED_PRECONDITION error when the reasoning engine has undeleted child resources. |

### `reasoningEngines.memories`

#### `reasoningEngines.memories.create()`

Create a Memory.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the ReasoningEngine to create the Memory under. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.resource` | `object` | Yes | The request body. |

#### `reasoningEngines.memories.get()`

Get a Memory.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Memory. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/memories/{memory}` |

#### `reasoningEngines.memories.patch()`

Update a Memory.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the Memory. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/memories/{memory}` |
| `params.updateMask` | `string` | No | Optional. Mask specifying which fields to update. Supported fields: * `display_name` * `description` * `fact` |
| `params.resource` | `object` | Yes | The request body. |

#### `reasoningEngines.memories.list()`

List Memories.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the ReasoningEngine to list the Memories under. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.filter` | `string` | No | Optional. The standard list filter. More detail in [AIP-160](https://google.aip.dev/160). Supported fields (equality match only): * `scope` (as a JSON string) |
| `params.pageSize` | `integer` | No | Optional. The standard list page size. |
| `params.pageToken` | `string` | No | Optional. The standard list page token. |

#### `reasoningEngines.memories.delete()`

Delete a Memory.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Memory to delete. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/memories/{memory}` |

#### `reasoningEngines.memories.generate()`

Generate memories.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the ReasoningEngine to generate memories for. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.resource` | `object` | Yes | The request body. |

#### `reasoningEngines.memories.retrieve()`

Retrieve memories.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the ReasoningEngine to retrieve memories from. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.resource` | `object` | Yes | The request body. |

### `reasoningEngines.sessions`

#### `reasoningEngines.sessions.create()`

Creates a new Session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the location to create the session in. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.resource` | `object` | Yes | The request body. |

#### `reasoningEngines.sessions.get()`

Gets details of the specific Session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the session. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}` |

#### `reasoningEngines.sessions.list()`

Lists Sessions in a given reasoning engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the location to list sessions from. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of sessions to return. The service may return fewer than this value. If unspecified, at most 100 sessions will be returned. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list SessionService.ListSessions call. |
| `params.filter` | `string` | No | Optional. The standard list filter. Supported fields: * `display_name` Example: `display_name=abc`. |
| `params.orderBy` | `string` | No | Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `create_time` * `update_time` Example: `create_time desc`. |

#### `reasoningEngines.sessions.patch()`

Updates the specific Session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the session. Format: 'projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}'. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `reasoningEngines.sessions.delete()`

Deletes details of the specific Session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the session. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}` |

#### `reasoningEngines.sessions.appendEvent()`

Appends an event to a given session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the session to append event to. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}` |
| `params.resource` | `object` | Yes | The request body. |

### `reasoningEngines.sessions.events`

#### `reasoningEngines.sessions.events.list()`

Lists Events in a given session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the session to list events from. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of events to return. The service may return fewer than this value. If unspecified, at most 100 events will be returned. These events are ordered by timestamp in ascending order. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list SessionService.ListEvents call. |
| `params.filter` | `string` | No | Optional. The standard list filter. Supported fields: * `timestamp` range (i.e. `timestamp>="2025-01-31T11:30:00-04:00"` where the timestamp is in RFC 3339 format) More detail in [AIP-160](https://google.aip.dev/160). |

### `media`

#### `media.upload()`

Upload a file into a RagCorpus.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the RagCorpus resource into which to upload the file. Format: `projects/{project}/locations/{location}/ragCorpora/{rag_corpus}` |
| `params.resource` | `object` | Yes | The request body. |