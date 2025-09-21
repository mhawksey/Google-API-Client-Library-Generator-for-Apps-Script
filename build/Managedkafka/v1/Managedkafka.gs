
/**
 * Google Apps Script client library for the Managed Service for Apache Kafka API
 * Documentation URL: https://cloud.google.com/managed-service-for-apache-kafka/docs
 * @class
 */
class Managedkafka {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://managedkafka.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
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
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/locations', 'GET', apiParams, clientConfig);

    /**
     * Gets information about a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name for the location.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - (Required) The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.clusters = {};

    /**
     * Lists the clusters in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter expression for the result.
     * @param {string} apiParams.orderBy - Optional. Order by fields for the result.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of clusters to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClusters` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent location whose clusters are to be listed. Structured like `projects/{project}/locations/{location}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clusters', 'GET', apiParams, clientConfig);

    /**
     * Returns the properties of a single cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the cluster whose configuration to return.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new cluster in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - Required. The ID to use for the cluster, which will become the final component of the cluster's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-cluster-id`.
     * @param {string} apiParams.parent - (Required) Required. The parent region in which to create the cluster. Structured like `projects/{project}/locations/{location}`.
     * @param {string} apiParams.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clusters', 'POST', apiParams, clientConfig);

    /**
     * Updates the properties of a single cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the cluster. Structured like: projects/{project_number}/locations/{location}/clusters/{cluster_id}
     * @param {string} apiParams.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.updateMask - Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a single cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the cluster to delete.
     * @param {string} apiParams.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.clusters.topics = {};

    /**
     * Lists the topics in a given cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the parent is returned.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopics` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent cluster whose topics are to be listed. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.topics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/topics', 'GET', apiParams, clientConfig);

    /**
     * Returns the properties of a single topic.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the topic whose configuration to return. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic}.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.topics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new topic in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent cluster in which to create the topic. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`.
     * @param {string} apiParams.topicId - Required. The ID to use for the topic, which will become the final component of the topic's name. This value is structured like: `my-topic-name`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.topics.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/topics', 'POST', apiParams, clientConfig);

    /**
     * Updates the properties of a single topic.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the topic. The `topic` segment is used when connecting directly to the cluster. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic}
     * @param {string} apiParams.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Topic resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.topics.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a single topic.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the topic to delete. `projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.topics.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.clusters.consumerGroups = {};

    /**
     * Lists the consumer groups in a given cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of consumer groups to return. The service may return fewer than this value. If unset or zero, all consumer groups for the parent is returned.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListConsumerGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConsumerGroups` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent cluster whose consumer groups are to be listed. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.consumerGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/consumerGroups', 'GET', apiParams, clientConfig);

    /**
     * Returns the properties of a single consumer group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the consumer group whose configuration to return. `projects/{project}/locations/{location}/clusters/{cluster}/consumerGroups/{consumerGroup}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.consumerGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the properties of a single consumer group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the consumer group. The `consumer_group` segment is used when connecting directly to the cluster. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/consumerGroups/{consumer_group}
     * @param {string} apiParams.updateMask - Required. Field mask is used to specify the fields to be overwritten in the ConsumerGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.consumerGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a single consumer group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the consumer group to delete. `projects/{project}/locations/{location}/clusters/{cluster}/consumerGroups/{consumerGroup}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.consumerGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.clusters.acls = {};

    /**
     * Lists the acls in a given cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of acls to return. The service may return fewer than this value. If unset or zero, all acls for the parent is returned.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListAcls` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAcls` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent cluster whose acls are to be listed. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.acls.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/acls', 'GET', apiParams, clientConfig);

    /**
     * Returns the properties of a single acl.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the acl to return. Structured like: `projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.acls.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new acl in the given project, location, and cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.aclId - Required. The ID to use for the acl, which will become the final component of the acl's name. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. `acl_id` is structured like one of the following: For acls on the cluster: `cluster` For acls on a single resource within the cluster: `topic/{resource_name}` `consumerGroup/{resource_name}` `transactionalId/{resource_name}` For acls on all resources that match a prefix: `topicPrefixed/{resource_name}` `consumerGroupPrefixed/{resource_name}` `transactionalIdPrefixed/{resource_name}` For acls on all resources of a given type (i.e. the wildcard literal "*"): `allTopics` (represents `topic/*`) `allConsumerGroups` (represents `consumerGroup/*`) `allTransactionalIds` (represents `transactionalId/*`)
     * @param {string} apiParams.parent - (Required) Required. The parent cluster in which to create the acl. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.acls.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/acls', 'POST', apiParams, clientConfig);

    /**
     * Updates the properties of a single acl.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name for the acl. Represents a single Resource Pattern. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id} The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. `acl_id` is structured like one of the following: For acls on the cluster: `cluster` For acls on a single resource within the cluster: `topic/{resource_name}` `consumerGroup/{resource_name}` `transactionalId/{resource_name}` For acls on all resources that match a prefix: `topicPrefixed/{resource_name}` `consumerGroupPrefixed/{resource_name}` `transactionalIdPrefixed/{resource_name}` For acls on all resources of a given type (i.e. the wildcard literal "*"): `allTopics` (represents `topic/*`) `allConsumerGroups` (represents `consumerGroup/*`) `allTransactionalIds` (represents `transactionalId/*`)
     * @param {string} apiParams.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the Acl resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.acls.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an acl.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the acl to delete. Structured like: `projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.acls.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Incremental update: Adds an acl entry to an acl. Creates the acl if it does not exist yet.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.acl - (Required) Required. The name of the acl to add the acl entry to. Structured like: `projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.acls.addAclEntry = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+acl}:addAclEntry', 'POST', apiParams, clientConfig);

    /**
     * Incremental update: Removes an acl entry from an acl. Deletes the acl if its acl entries become empty (i.e. if the removed entry was the last one in the acl).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.acl - (Required) Required. The name of the acl to remove the acl entry from. Structured like: `projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.acls.removeAclEntry = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+acl}:removeAclEntry', 'POST', apiParams, clientConfig);

    this.projects.locations.connectClusters = {};

    /**
     * Lists the Kafka Connect clusters in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter expression for the result.
     * @param {string} apiParams.orderBy - Optional. Order by fields for the result.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of Connect clusters to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListConnectClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectClusters` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent project/location whose Connect clusters are to be listed. Structured like `projects/{project}/locations/{location}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connectClusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connectClusters', 'GET', apiParams, clientConfig);

    /**
     * Returns the properties of a single Kafka Connect cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Kafka Connect cluster whose configuration to return. Structured like `projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connectClusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new Kafka Connect cluster in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.connectClusterId - Required. The ID to use for the Connect cluster, which will become the final component of the cluster's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-cluster-id`.
     * @param {string} apiParams.parent - (Required) Required. The parent project/location in which to create the Kafka Connect cluster. Structured like `projects/{project}/locations/{location}/`.
     * @param {string} apiParams.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connectClusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connectClusters', 'POST', apiParams, clientConfig);

    /**
     * Updates the properties of a single Kafka Connect cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the Kafka Connect cluster. Structured like: projects/{project_number}/locations/{location}/connectClusters/{connect_cluster_id}
     * @param {string} apiParams.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.updateMask - Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connectClusters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a single Connect cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Kafka Connect cluster to delete. Structured like `projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}`.
     * @param {string} apiParams.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connectClusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.connectClusters.connectors = {};

    /**
     * Lists the connectors in a given Connect cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of connectors to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectors` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent Connect cluster whose connectors are to be listed. Structured like `projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connectClusters.connectors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connectors', 'GET', apiParams, clientConfig);

    /**
     * Returns the properties of a single connector.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the connector whose configuration to return. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connectClusters.connectors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new connector in a given Connect cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.connectorId - Required. The ID to use for the connector, which will become the final component of the connector's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-connector-id`.
     * @param {string} apiParams.parent - (Required) Required. The parent Connect cluster in which to create the connector. Structured like `projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connectClusters.connectors.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connectors', 'POST', apiParams, clientConfig);

    /**
     * Updates the properties of a connector.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the connector. Structured like: projects/{project}/locations/{location}/connectClusters/{connect_cluster}/connectors/{connector}
     * @param {string} apiParams.updateMask - Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connectClusters.connectors.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a connector.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the connector to delete. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connectClusters.connectors.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Pauses the connector and its tasks.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the connector to pause. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connectClusters.connectors.pause = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:pause', 'POST', apiParams, clientConfig);

    /**
     * Resumes the connector and its tasks.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the connector to pause. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connectClusters.connectors.resume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:resume', 'POST', apiParams, clientConfig);

    /**
     * Restarts the connector.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the connector to restart. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connectClusters.connectors.restart = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:restart', 'POST', apiParams, clientConfig);

    /**
     * Stops the connector.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the connector to stop. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connectClusters.connectors.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:stop', 'POST', apiParams, clientConfig);

    this.projects.locations.schemaRegistries = {};

    /**
     * Get the schema registry instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the schema registry instance to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List schema registries.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent whose schema registry instances are to be listed. Structured like: `projects/{project}/locations/{location}`
     * @param {string} apiParams.view - Optional. Specifies the view to return for the schema registry instances. If not specified, the default view is SCHEMA_REGISTRY_VIEW_BASIC.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/schemaRegistries', 'GET', apiParams, clientConfig);

    /**
     * Create a schema registry instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent whose schema registry instance is to be created. Structured like: `projects/{project}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/schemaRegistries', 'POST', apiParams, clientConfig);

    /**
     * Delete a schema registry instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the schema registry instance to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts = {};

    /**
     * Get the context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the context to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List contexts for a schema registry.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent of the contexts. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/contexts', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.schemas = {};

    /**
     * Get the schema for the given schema id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the schema to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}`
     * @param {string} apiParams.subject - Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.schemas.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Get the schema string for the given schema id. The response will be the schema string.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the schema to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}`
     * @param {string} apiParams.subject - Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.schemas.getSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/schema', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.schemas.versions = {};

    /**
     * List the schema versions for the given schema id. The response will be an array of subject-version pairs as: [{"subject":"subject1", "version":1}, {"subject":"subject2", "version":2}].
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.deleted - Optional. If true, the response will include soft-deleted versions of the schema, even if the subject is soft-deleted. The default is false.
     * @param {string} apiParams.parent - (Required) Required. The schema whose schema versions are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}`
     * @param {string} apiParams.subject - Optional. The subject to filter the subjects by.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.schemas.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.schemas.types = {};

    /**
     * List the supported schema types. The response will be an array of schema types.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent schema registry whose schema types are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.schemas.types.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/schemas/types', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.schemas.subjects = {};

    /**
     * List subjects which reference a particular schema id. The response will be an array of subject names.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.deleted - Optional. If true, the response will include soft-deleted subjects. The default is false.
     * @param {string} apiParams.parent - (Required) Required. The schema resource whose associated subjects are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}`
     * @param {string} apiParams.subject - Optional. The subject to filter the subjects by.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.schemas.subjects.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/subjects', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.subjects = {};

    /**
     * List subjects in the schema registry. The response will be an array of subject names.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.deleted - Optional. If true, the response will include soft-deleted subjects. The default is false.
     * @param {string} apiParams.parent - (Required) Required. The parent schema registry/context whose subjects are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}`
     * @param {string} apiParams.subjectPrefix - Optional. The context to filter the subjects by, in the format of `:.{context}:`. If unset, all subjects in the registry are returned. Set to empty string or add as '?subjectPrefix=' at the end of this request to list subjects in the default context.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/subjects', 'GET', apiParams, clientConfig);

    /**
     * Delete a subject. The response will be an array of versions of the deleted subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the subject to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}`
     * @param {boolean} apiParams.permanent - Optional. If true, the subject and all associated metadata including the schema ID will be deleted permanently. Otherwise, only the subject is soft-deleted. The default is false. Soft-deleted subjects can still be searched in ListSubjects API call with deleted=true query parameter. A soft-delete of a subject must be performed before a hard-delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lookup a schema under the specified subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The subject to lookup the schema in. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.lookupVersion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}', 'POST', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.subjects.versions = {};

    /**
     * Get a versioned schema (schema with subject/version) of a subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.deleted - Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false.
     * @param {string} apiParams.name - (Required) Required. The name of the subject to return versions. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Get the schema string only for a version of a subject. The response will be the schema string.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.deleted - Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false.
     * @param {string} apiParams.name - (Required) Required. The name of the subject to return versions. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.versions.getSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/schema', 'GET', apiParams, clientConfig);

    /**
     * Get all versions of a subject. The response will be an array of versions of the subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.deleted - Optional. If true, the response will include soft-deleted versions of an active or soft-deleted subject. The default is false.
     * @param {string} apiParams.parent - (Required) Required. The subject whose versions are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);

    /**
     * Register a new version under a given subject with the given schema.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The subject to create the version for. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'POST', apiParams, clientConfig);

    /**
     * Delete a version of a subject. The response will be the deleted version id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the subject version to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}`
     * @param {boolean} apiParams.permanent - Optional. If true, both the version and the referenced schema ID will be permanently deleted. The default is false. If false, the version will be deleted but the schema ID will be retained. Soft-deleted versions can still be searched in ListVersions API call with deleted=true query parameter. A soft-delete of a version must be performed before a hard-delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.subjects.versions.referencedby = {};

    /**
     * Get a list of IDs of schemas that reference the schema with the given subject and version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The version to list referenced by. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.versions.referencedby.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/referencedby', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.compatibility = {};

    /**
     * Check compatibility of a schema with all versions or a specific version of a subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the resource to check compatibility for. The format is either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/compatibility/subjects/*\/versions: Check compatibility with one or more versions of the specified subject. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/compatibility/subjects/{subject}/versions/{version}: Check compatibility with a specific version of the subject.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.compatibility.checkCompatibility = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.config = {};

    /**
     * Get schema config at global level or for a subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.defaultToGlobal - Optional. If true, the config will fall back to the config at the global level if no subject level config is found.
     * @param {string} apiParams.name - (Required) Required. The resource name to get the config for. It can be either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config: Get config at global level. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}: Get config for a specific subject.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.config.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update config at global level or for a subject. Creates a SchemaSubject-level SchemaConfig if it does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name to update the config for. It can be either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config: Update config at global level. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}: Update config for a specific subject.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.config.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Delete schema config for a subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of subject to delete the config for. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.config.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.mode = {};

    /**
     * Get mode at global level or for a subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the mode. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject}: mode for a schema registry, or * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}: mode for a specific subject in a specific context
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.mode.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update mode at global level or for a subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the mode. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject}: mode for a schema registry, or * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}: mode for a specific subject in a specific context
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.mode.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Delete schema mode for a subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of subject to delete the mode for. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject} * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.contexts.mode.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.schemas = {};

    /**
     * Get the schema for the given schema id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the schema to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}`
     * @param {string} apiParams.subject - Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.schemas.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Get the schema string for the given schema id. The response will be the schema string.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the schema to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}`
     * @param {string} apiParams.subject - Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.schemas.getSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/schema', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.schemas.versions = {};

    /**
     * List the schema versions for the given schema id. The response will be an array of subject-version pairs as: [{"subject":"subject1", "version":1}, {"subject":"subject2", "version":2}].
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.deleted - Optional. If true, the response will include soft-deleted versions of the schema, even if the subject is soft-deleted. The default is false.
     * @param {string} apiParams.parent - (Required) Required. The schema whose schema versions are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}`
     * @param {string} apiParams.subject - Optional. The subject to filter the subjects by.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.schemas.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.schemas.types = {};

    /**
     * List the supported schema types. The response will be an array of schema types.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent schema registry whose schema types are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.schemas.types.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/schemas/types', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.schemas.subjects = {};

    /**
     * List subjects which reference a particular schema id. The response will be an array of subject names.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.deleted - Optional. If true, the response will include soft-deleted subjects. The default is false.
     * @param {string} apiParams.parent - (Required) Required. The schema resource whose associated subjects are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}`
     * @param {string} apiParams.subject - Optional. The subject to filter the subjects by.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.schemas.subjects.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/subjects', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.subjects = {};

    /**
     * List subjects in the schema registry. The response will be an array of subject names.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.deleted - Optional. If true, the response will include soft-deleted subjects. The default is false.
     * @param {string} apiParams.parent - (Required) Required. The parent schema registry/context whose subjects are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}`
     * @param {string} apiParams.subjectPrefix - Optional. The context to filter the subjects by, in the format of `:.{context}:`. If unset, all subjects in the registry are returned. Set to empty string or add as '?subjectPrefix=' at the end of this request to list subjects in the default context.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.subjects.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/subjects', 'GET', apiParams, clientConfig);

    /**
     * Delete a subject. The response will be an array of versions of the deleted subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the subject to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}`
     * @param {boolean} apiParams.permanent - Optional. If true, the subject and all associated metadata including the schema ID will be deleted permanently. Otherwise, only the subject is soft-deleted. The default is false. Soft-deleted subjects can still be searched in ListSubjects API call with deleted=true query parameter. A soft-delete of a subject must be performed before a hard-delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.subjects.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lookup a schema under the specified subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The subject to lookup the schema in. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.subjects.lookupVersion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}', 'POST', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.subjects.versions = {};

    /**
     * Get a versioned schema (schema with subject/version) of a subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.deleted - Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false.
     * @param {string} apiParams.name - (Required) Required. The name of the subject to return versions. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.subjects.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Get the schema string only for a version of a subject. The response will be the schema string.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.deleted - Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false.
     * @param {string} apiParams.name - (Required) Required. The name of the subject to return versions. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.subjects.versions.getSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/schema', 'GET', apiParams, clientConfig);

    /**
     * Get all versions of a subject. The response will be an array of versions of the subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.deleted - Optional. If true, the response will include soft-deleted versions of an active or soft-deleted subject. The default is false.
     * @param {string} apiParams.parent - (Required) Required. The subject whose versions are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.subjects.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);

    /**
     * Register a new version under a given subject with the given schema.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The subject to create the version for. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.subjects.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'POST', apiParams, clientConfig);

    /**
     * Delete a version of a subject. The response will be the deleted version id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the subject version to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}`
     * @param {boolean} apiParams.permanent - Optional. If true, both the version and the referenced schema ID will be permanently deleted. The default is false. If false, the version will be deleted but the schema ID will be retained. Soft-deleted versions can still be searched in ListVersions API call with deleted=true query parameter. A soft-delete of a version must be performed before a hard-delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.subjects.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.subjects.versions.referencedby = {};

    /**
     * Get a list of IDs of schemas that reference the schema with the given subject and version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The version to list referenced by. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.subjects.versions.referencedby.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/referencedby', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.compatibility = {};

    /**
     * Check compatibility of a schema with all versions or a specific version of a subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the resource to check compatibility for. The format is either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/compatibility/subjects/*\/versions: Check compatibility with one or more versions of the specified subject. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/compatibility/subjects/{subject}/versions/{version}: Check compatibility with a specific version of the subject.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.compatibility.checkCompatibility = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.config = {};

    /**
     * Get schema config at global level or for a subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.defaultToGlobal - Optional. If true, the config will fall back to the config at the global level if no subject level config is found.
     * @param {string} apiParams.name - (Required) Required. The resource name to get the config for. It can be either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config: Get config at global level. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}: Get config for a specific subject.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.config.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update config at global level or for a subject. Creates a SchemaSubject-level SchemaConfig if it does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name to update the config for. It can be either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config: Update config at global level. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}: Update config for a specific subject.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.config.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Delete schema config for a subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of subject to delete the config for. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.config.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.mode = {};

    /**
     * Get mode at global level or for a subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the mode. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject}: mode for a schema registry, or * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}: mode for a specific subject in a specific context
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.mode.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update mode at global level or for a subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the mode. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject}: mode for a schema registry, or * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}: mode for a specific subject in a specific context
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.mode.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Delete schema mode for a subject.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of subject to delete the mode for. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject} * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.schemaRegistries.mode.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
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
