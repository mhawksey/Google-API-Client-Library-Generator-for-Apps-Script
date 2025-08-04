
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://managedkafka.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

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
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.clusters = {};

    /**
     * Lists the clusters in a given project and location.
     * @param {string} params.filter - Optional. Filter expression for the result.
     * @param {string} params.orderBy - Optional. Order by fields for the result.
     * @param {integer} params.pageSize - Optional. The maximum number of clusters to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClusters` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent location whose clusters are to be listed. Structured like `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.list = (params) => this._makeRequest('v1/{+parent}/clusters', 'GET', params);

    /**
     * Returns the properties of a single cluster.
     * @param {string} params.name - (Required) Required. The name of the cluster whose configuration to return.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new cluster in a given project and location.
     * @param {string} params.clusterId - Required. The ID to use for the cluster, which will become the final component of the cluster's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-cluster-id`.
     * @param {string} params.parent - (Required) Required. The parent region in which to create the cluster. Structured like `projects/{project}/locations/{location}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.create = (params) => this._makeRequest('v1/{+parent}/clusters', 'POST', params);

    /**
     * Updates the properties of a single cluster.
     * @param {string} params.name - (Required) Identifier. The name of the cluster. Structured like: projects/{project_number}/locations/{location}/clusters/{cluster_id}
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single cluster.
     * @param {string} params.name - (Required) Required. The name of the cluster to delete.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.clusters.topics = {};

    /**
     * Lists the topics in a given cluster.
     * @param {integer} params.pageSize - Optional. The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the parent is returned.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopics` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent cluster whose topics are to be listed. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.topics.list = (params) => this._makeRequest('v1/{+parent}/topics', 'GET', params);

    /**
     * Returns the properties of a single topic.
     * @param {string} params.name - (Required) Required. The name of the topic whose configuration to return. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic}.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.topics.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new topic in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent cluster in which to create the topic. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`.
     * @param {string} params.topicId - Required. The ID to use for the topic, which will become the final component of the topic's name. This value is structured like: `my-topic-name`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.topics.create = (params) => this._makeRequest('v1/{+parent}/topics', 'POST', params);

    /**
     * Updates the properties of a single topic.
     * @param {string} params.name - (Required) Identifier. The name of the topic. The `topic` segment is used when connecting directly to the cluster. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic}
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Topic resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.topics.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single topic.
     * @param {string} params.name - (Required) Required. The name of the topic to delete. `projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic}`.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.topics.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.clusters.consumerGroups = {};

    /**
     * Lists the consumer groups in a given cluster.
     * @param {integer} params.pageSize - Optional. The maximum number of consumer groups to return. The service may return fewer than this value. If unset or zero, all consumer groups for the parent is returned.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListConsumerGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConsumerGroups` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent cluster whose consumer groups are to be listed. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.consumerGroups.list = (params) => this._makeRequest('v1/{+parent}/consumerGroups', 'GET', params);

    /**
     * Returns the properties of a single consumer group.
     * @param {string} params.name - (Required) Required. The name of the consumer group whose configuration to return. `projects/{project}/locations/{location}/clusters/{cluster}/consumerGroups/{consumerGroup}`.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.consumerGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the properties of a single consumer group.
     * @param {string} params.name - (Required) Identifier. The name of the consumer group. The `consumer_group` segment is used when connecting directly to the cluster. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/consumerGroups/{consumer_group}
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the ConsumerGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.consumerGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single consumer group.
     * @param {string} params.name - (Required) Required. The name of the consumer group to delete. `projects/{project}/locations/{location}/clusters/{cluster}/consumerGroups/{consumerGroup}`.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.consumerGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.clusters.acls = {};

    /**
     * Lists the acls in a given cluster.
     * @param {integer} params.pageSize - Optional. The maximum number of acls to return. The service may return fewer than this value. If unset or zero, all acls for the parent is returned.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListAcls` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAcls` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent cluster whose acls are to be listed. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.acls.list = (params) => this._makeRequest('v1/{+parent}/acls', 'GET', params);

    /**
     * Returns the properties of a single acl.
     * @param {string} params.name - (Required) Required. The name of the acl to return. Structured like: `projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.acls.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new acl in the given project, location, and cluster.
     * @param {string} params.aclId - Required. The ID to use for the acl, which will become the final component of the acl's name. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. `acl_id` is structured like one of the following: For acls on the cluster: `cluster` For acls on a single resource within the cluster: `topic/{resource_name}` `consumerGroup/{resource_name}` `transactionalId/{resource_name}` For acls on all resources that match a prefix: `topicPrefixed/{resource_name}` `consumerGroupPrefixed/{resource_name}` `transactionalIdPrefixed/{resource_name}` For acls on all resources of a given type (i.e. the wildcard literal "*"): `allTopics` (represents `topic/*`) `allConsumerGroups` (represents `consumerGroup/*`) `allTransactionalIds` (represents `transactionalId/*`)
     * @param {string} params.parent - (Required) Required. The parent cluster in which to create the acl. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.acls.create = (params) => this._makeRequest('v1/{+parent}/acls', 'POST', params);

    /**
     * Updates the properties of a single acl.
     * @param {string} params.name - (Required) Identifier. The name for the acl. Represents a single Resource Pattern. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id} The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. `acl_id` is structured like one of the following: For acls on the cluster: `cluster` For acls on a single resource within the cluster: `topic/{resource_name}` `consumerGroup/{resource_name}` `transactionalId/{resource_name}` For acls on all resources that match a prefix: `topicPrefixed/{resource_name}` `consumerGroupPrefixed/{resource_name}` `transactionalIdPrefixed/{resource_name}` For acls on all resources of a given type (i.e. the wildcard literal "*"): `allTopics` (represents `topic/*`) `allConsumerGroups` (represents `consumerGroup/*`) `allTransactionalIds` (represents `transactionalId/*`)
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the Acl resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.acls.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an acl.
     * @param {string} params.name - (Required) Required. The name of the acl to delete. Structured like: `projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.acls.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Incremental update: Adds an acl entry to an acl. Creates the acl if it does not exist yet.
     * @param {string} params.acl - (Required) Required. The name of the acl to add the acl entry to. Structured like: `projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.acls.addAclEntry = (params) => this._makeRequest('v1/{+acl}:addAclEntry', 'POST', params);

    /**
     * Incremental update: Removes an acl entry from an acl. Deletes the acl if its acl entries become empty (i.e. if the removed entry was the last one in the acl).
     * @param {string} params.acl - (Required) Required. The name of the acl to remove the acl entry from. Structured like: `projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.acls.removeAclEntry = (params) => this._makeRequest('v1/{+acl}:removeAclEntry', 'POST', params);

    this.projects.locations.connectClusters = {};

    /**
     * Lists the Kafka Connect clusters in a given project and location.
     * @param {string} params.filter - Optional. Filter expression for the result.
     * @param {string} params.orderBy - Optional. Order by fields for the result.
     * @param {integer} params.pageSize - Optional. The maximum number of Connect clusters to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListConnectClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectClusters` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent project/location whose Connect clusters are to be listed. Structured like `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.connectClusters.list = (params) => this._makeRequest('v1/{+parent}/connectClusters', 'GET', params);

    /**
     * Returns the properties of a single Kafka Connect cluster.
     * @param {string} params.name - (Required) Required. The name of the Kafka Connect cluster whose configuration to return. Structured like `projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.connectClusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Kafka Connect cluster in a given project and location.
     * @param {string} params.connectClusterId - Required. The ID to use for the Connect cluster, which will become the final component of the cluster's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-cluster-id`.
     * @param {string} params.parent - (Required) Required. The parent project/location in which to create the Kafka Connect cluster. Structured like `projects/{project}/locations/{location}/`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectClusters.create = (params) => this._makeRequest('v1/{+parent}/connectClusters', 'POST', params);

    /**
     * Updates the properties of a single Kafka Connect cluster.
     * @param {string} params.name - (Required) Identifier. The name of the Kafka Connect cluster. Structured like: projects/{project_number}/locations/{location}/connectClusters/{connect_cluster_id}
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectClusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Connect cluster.
     * @param {string} params.name - (Required) Required. The name of the Kafka Connect cluster to delete. Structured like `projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.connectClusters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.connectClusters.connectors = {};

    /**
     * Lists the connectors in a given Connect cluster.
     * @param {integer} params.pageSize - Optional. The maximum number of connectors to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectors` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent Connect cluster whose connectors are to be listed. Structured like `projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.connectClusters.connectors.list = (params) => this._makeRequest('v1/{+parent}/connectors', 'GET', params);

    /**
     * Returns the properties of a single connector.
     * @param {string} params.name - (Required) Required. The name of the connector whose configuration to return. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector}
     * @return {object} The API response object.
     */
    this.projects.locations.connectClusters.connectors.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new connector in a given Connect cluster.
     * @param {string} params.connectorId - Required. The ID to use for the connector, which will become the final component of the connector's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-connector-id`.
     * @param {string} params.parent - (Required) Required. The parent Connect cluster in which to create the connector. Structured like `projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectClusters.connectors.create = (params) => this._makeRequest('v1/{+parent}/connectors', 'POST', params);

    /**
     * Updates the properties of a connector.
     * @param {string} params.name - (Required) Identifier. The name of the connector. Structured like: projects/{project}/locations/{location}/connectClusters/{connect_cluster}/connectors/{connector}
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectClusters.connectors.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a connector.
     * @param {string} params.name - (Required) Required. The name of the connector to delete. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector}
     * @return {object} The API response object.
     */
    this.projects.locations.connectClusters.connectors.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Pauses the connector and its tasks.
     * @param {string} params.name - (Required) Required. The name of the connector to pause. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectClusters.connectors.pause = (params) => this._makeRequest('v1/{+name}:pause', 'POST', params);

    /**
     * Resumes the connector and its tasks.
     * @param {string} params.name - (Required) Required. The name of the connector to pause. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectClusters.connectors.resume = (params) => this._makeRequest('v1/{+name}:resume', 'POST', params);

    /**
     * Restarts the connector.
     * @param {string} params.name - (Required) Required. The name of the connector to restart. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectClusters.connectors.restart = (params) => this._makeRequest('v1/{+name}:restart', 'POST', params);

    /**
     * Stops the connector.
     * @param {string} params.name - (Required) Required. The name of the connector to stop. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectClusters.connectors.stop = (params) => this._makeRequest('v1/{+name}:stop', 'POST', params);

    this.projects.locations.schemaRegistries = {};

    /**
     * Get the schema registry instance.
     * @param {string} params.name - (Required) Required. The name of the schema registry instance to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}`
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List schema registries.
     * @param {string} params.parent - (Required) Required. The parent whose schema registry instances are to be listed. Structured like: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.list = (params) => this._makeRequest('v1/{+parent}/schemaRegistries', 'GET', params);

    /**
     * Create a schema registry instance.
     * @param {string} params.parent - (Required) Required. The parent whose schema registry instance is to be created. Structured like: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.create = (params) => this._makeRequest('v1/{+parent}/schemaRegistries', 'POST', params);

    /**
     * Delete a schema registry instance.
     * @param {string} params.name - (Required) Required. The name of the schema registry instance to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}`
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.schemaRegistries.contexts = {};

    /**
     * Get the context.
     * @param {string} params.name - (Required) Required. The name of the context to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}`
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List contexts for a schema registry.
     * @param {string} params.parent - (Required) Required. The parent of the contexts. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}`
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.list = (params) => this._makeRequest('v1/{+parent}/contexts', 'GET', params);

    this.projects.locations.schemaRegistries.contexts.schemas = {};

    /**
     * Get the schema for the given schema id.
     * @param {string} params.name - (Required) Required. The name of the schema to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}`
     * @param {string} params.subject - Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.schemas.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Get the schema string for the given schema id. The response will be the schema string.
     * @param {string} params.name - (Required) Required. The name of the schema to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}`
     * @param {string} params.subject - Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.schemas.getSchema = (params) => this._makeRequest('v1/{+name}/schema', 'GET', params);

    this.projects.locations.schemaRegistries.contexts.schemas.versions = {};

    /**
     * List the schema versions for the given schema id. The response will be an array of subject-version pairs as: [{"subject":"subject1", "version":1}, {"subject":"subject2", "version":2}].
     * @param {boolean} params.deleted - Optional. If true, the response will include soft-deleted versions of the schema, even if the subject is soft-deleted. The default is false.
     * @param {string} params.parent - (Required) Required. The schema whose schema versions are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}`
     * @param {string} params.subject - Optional. The subject to filter the subjects by.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.schemas.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);

    this.projects.locations.schemaRegistries.contexts.schemas.types = {};

    /**
     * List the supported schema types. The response will be an array of schema types.
     * @param {string} params.parent - (Required) Required. The parent schema registry whose schema types are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}`
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.schemas.types.list = (params) => this._makeRequest('v1/{+parent}/schemas/types', 'GET', params);

    this.projects.locations.schemaRegistries.contexts.schemas.subjects = {};

    /**
     * List subjects which reference a particular schema id. The response will be an array of subject names.
     * @param {boolean} params.deleted - Optional. If true, the response will include soft-deleted subjects. The default is false.
     * @param {string} params.parent - (Required) Required. The schema resource whose associated subjects are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}`
     * @param {string} params.subject - Optional. The subject to filter the subjects by.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.schemas.subjects.list = (params) => this._makeRequest('v1/{+parent}/subjects', 'GET', params);

    this.projects.locations.schemaRegistries.contexts.subjects = {};

    /**
     * List subjects in the schema registry. The response will be an array of subject names.
     * @param {boolean} params.deleted - Optional. If true, the response will include soft-deleted subjects. The default is false.
     * @param {string} params.parent - (Required) Required. The parent schema registry/context whose subjects are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}`
     * @param {string} params.subjectPrefix - Optional. The context to filter the subjects by, in the format of `:.{context}:`. If unset, all subjects in the registry are returned. Set to empty string or add as '?subjectPrefix=' at the end of this request to list subjects in the default context.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.list = (params) => this._makeRequest('v1/{+parent}/subjects', 'GET', params);

    /**
     * Delete a subject. The response will be an array of versions of the deleted subject.
     * @param {string} params.name - (Required) Required. The name of the subject to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}`
     * @param {boolean} params.permanent - Optional. If true, the subject and all associated metadata including the schema ID will be deleted permanently. Otherwise, only the subject is soft-deleted. The default is false. Soft-deleted subjects can still be searched in ListSubjects API call with deleted=true query parameter. A soft-delete of a subject must be performed before a hard-delete.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lookup a schema under the specified subject.
     * @param {string} params.parent - (Required) Required. The subject to lookup the schema in. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.lookupVersion = (params) => this._makeRequest('v1/{+parent}', 'POST', params);

    this.projects.locations.schemaRegistries.contexts.subjects.versions = {};

    /**
     * Get a versioned schema (schema with subject/version) of a subject.
     * @param {boolean} params.deleted - Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false.
     * @param {string} params.name - (Required) Required. The name of the subject to return versions. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}`
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Get the schema string only for a version of a subject. The response will be the schema string.
     * @param {boolean} params.deleted - Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false.
     * @param {string} params.name - (Required) Required. The name of the subject to return versions. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}`
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.versions.getSchema = (params) => this._makeRequest('v1/{+name}/schema', 'GET', params);

    /**
     * Get all versions of a subject. The response will be an array of versions of the subject.
     * @param {boolean} params.deleted - Optional. If true, the response will include soft-deleted versions of an active or soft-deleted subject. The default is false.
     * @param {string} params.parent - (Required) Required. The subject whose versions are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}`
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);

    /**
     * Register a new version under a given subject with the given schema.
     * @param {string} params.parent - (Required) Required. The subject to create the version for. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.versions.create = (params) => this._makeRequest('v1/{+parent}/versions', 'POST', params);

    /**
     * Delete a version of a subject. The response will be the deleted version id.
     * @param {string} params.name - (Required) Required. The name of the subject version to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}`
     * @param {boolean} params.permanent - Optional. If true, both the version and the referenced schema ID will be permanently deleted. The default is false. If false, the version will be deleted but the schema ID will be retained. Soft-deleted versions can still be searched in ListVersions API call with deleted=true query parameter. A soft-delete of a version must be performed before a hard-delete.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.schemaRegistries.contexts.subjects.versions.referencedby = {};

    /**
     * Get a list of IDs of schemas that reference the schema with the given subject and version.
     * @param {string} params.parent - (Required) Required. The version to list referenced by. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}`
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.subjects.versions.referencedby.list = (params) => this._makeRequest('v1/{+parent}/referencedby', 'GET', params);

    this.projects.locations.schemaRegistries.contexts.compatibility = {};

    /**
     * Check compatibility of a schema with all versions or a specific version of a subject.
     * @param {string} params.name - (Required) Required. The name of the resource to check compatibility for. The format is either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/compatibility/subjects/*\/versions: Check compatibility with one or more versions of the specified subject. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/compatibility/subjects/{subject}/versions/{version}: Check compatibility with a specific version of the subject.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.compatibility.checkCompatibility = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    this.projects.locations.schemaRegistries.contexts.config = {};

    /**
     * Get schema config at global level or for a subject.
     * @param {boolean} params.defaultToGlobal - Optional. If true, the config will fall back to the config at the global level if no subject level config is found.
     * @param {string} params.name - (Required) Required. The resource name to get the config for. It can be either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config: Get config at global level. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}: Get config for a specific subject.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.config.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update config at global level or for a subject. Creates a SchemaSubject-level SchemaConfig if it does not exist.
     * @param {string} params.name - (Required) Required. The resource name to update the config for. It can be either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config: Update config at global level. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}: Update config for a specific subject.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.config.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Delete schema config for a subject.
     * @param {string} params.name - (Required) Required. The resource name of subject to delete the config for. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.config.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.schemaRegistries.contexts.mode = {};

    /**
     * Get mode at global level or for a subject.
     * @param {string} params.name - (Required) Required. The resource name of the mode. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject}: mode for a schema registry, or * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}: mode for a specific subject in a specific context
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.mode.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update mode at global level or for a subject.
     * @param {string} params.name - (Required) Required. The resource name of the mode. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject}: mode for a schema registry, or * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}: mode for a specific subject in a specific context
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.mode.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Delete schema mode for a subject.
     * @param {string} params.name - (Required) Required. The resource name of subject to delete the mode for. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject} * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.contexts.mode.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.schemaRegistries.schemas = {};

    /**
     * Get the schema for the given schema id.
     * @param {string} params.name - (Required) Required. The name of the schema to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}`
     * @param {string} params.subject - Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.schemas.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Get the schema string for the given schema id. The response will be the schema string.
     * @param {string} params.name - (Required) Required. The name of the schema to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}`
     * @param {string} params.subject - Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.schemas.getSchema = (params) => this._makeRequest('v1/{+name}/schema', 'GET', params);

    this.projects.locations.schemaRegistries.schemas.versions = {};

    /**
     * List the schema versions for the given schema id. The response will be an array of subject-version pairs as: [{"subject":"subject1", "version":1}, {"subject":"subject2", "version":2}].
     * @param {boolean} params.deleted - Optional. If true, the response will include soft-deleted versions of the schema, even if the subject is soft-deleted. The default is false.
     * @param {string} params.parent - (Required) Required. The schema whose schema versions are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}`
     * @param {string} params.subject - Optional. The subject to filter the subjects by.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.schemas.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);

    this.projects.locations.schemaRegistries.schemas.types = {};

    /**
     * List the supported schema types. The response will be an array of schema types.
     * @param {string} params.parent - (Required) Required. The parent schema registry whose schema types are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}`
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.schemas.types.list = (params) => this._makeRequest('v1/{+parent}/schemas/types', 'GET', params);

    this.projects.locations.schemaRegistries.schemas.subjects = {};

    /**
     * List subjects which reference a particular schema id. The response will be an array of subject names.
     * @param {boolean} params.deleted - Optional. If true, the response will include soft-deleted subjects. The default is false.
     * @param {string} params.parent - (Required) Required. The schema resource whose associated subjects are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}`
     * @param {string} params.subject - Optional. The subject to filter the subjects by.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.schemas.subjects.list = (params) => this._makeRequest('v1/{+parent}/subjects', 'GET', params);

    this.projects.locations.schemaRegistries.subjects = {};

    /**
     * List subjects in the schema registry. The response will be an array of subject names.
     * @param {boolean} params.deleted - Optional. If true, the response will include soft-deleted subjects. The default is false.
     * @param {string} params.parent - (Required) Required. The parent schema registry/context whose subjects are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}`
     * @param {string} params.subjectPrefix - Optional. The context to filter the subjects by, in the format of `:.{context}:`. If unset, all subjects in the registry are returned. Set to empty string or add as '?subjectPrefix=' at the end of this request to list subjects in the default context.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.subjects.list = (params) => this._makeRequest('v1/{+parent}/subjects', 'GET', params);

    /**
     * Delete a subject. The response will be an array of versions of the deleted subject.
     * @param {string} params.name - (Required) Required. The name of the subject to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}`
     * @param {boolean} params.permanent - Optional. If true, the subject and all associated metadata including the schema ID will be deleted permanently. Otherwise, only the subject is soft-deleted. The default is false. Soft-deleted subjects can still be searched in ListSubjects API call with deleted=true query parameter. A soft-delete of a subject must be performed before a hard-delete.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.subjects.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lookup a schema under the specified subject.
     * @param {string} params.parent - (Required) Required. The subject to lookup the schema in. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.subjects.lookupVersion = (params) => this._makeRequest('v1/{+parent}', 'POST', params);

    this.projects.locations.schemaRegistries.subjects.versions = {};

    /**
     * Get a versioned schema (schema with subject/version) of a subject.
     * @param {boolean} params.deleted - Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false.
     * @param {string} params.name - (Required) Required. The name of the subject to return versions. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}`
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.subjects.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Get the schema string only for a version of a subject. The response will be the schema string.
     * @param {boolean} params.deleted - Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false.
     * @param {string} params.name - (Required) Required. The name of the subject to return versions. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}`
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.subjects.versions.getSchema = (params) => this._makeRequest('v1/{+name}/schema', 'GET', params);

    /**
     * Get all versions of a subject. The response will be an array of versions of the subject.
     * @param {boolean} params.deleted - Optional. If true, the response will include soft-deleted versions of an active or soft-deleted subject. The default is false.
     * @param {string} params.parent - (Required) Required. The subject whose versions are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}`
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.subjects.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);

    /**
     * Register a new version under a given subject with the given schema.
     * @param {string} params.parent - (Required) Required. The subject to create the version for. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.subjects.versions.create = (params) => this._makeRequest('v1/{+parent}/versions', 'POST', params);

    /**
     * Delete a version of a subject. The response will be the deleted version id.
     * @param {string} params.name - (Required) Required. The name of the subject version to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}`
     * @param {boolean} params.permanent - Optional. If true, both the version and the referenced schema ID will be permanently deleted. The default is false. If false, the version will be deleted but the schema ID will be retained. Soft-deleted versions can still be searched in ListVersions API call with deleted=true query parameter. A soft-delete of a version must be performed before a hard-delete.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.subjects.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.schemaRegistries.subjects.versions.referencedby = {};

    /**
     * Get a list of IDs of schemas that reference the schema with the given subject and version.
     * @param {string} params.parent - (Required) Required. The version to list referenced by. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}`
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.subjects.versions.referencedby.list = (params) => this._makeRequest('v1/{+parent}/referencedby', 'GET', params);

    this.projects.locations.schemaRegistries.compatibility = {};

    /**
     * Check compatibility of a schema with all versions or a specific version of a subject.
     * @param {string} params.name - (Required) Required. The name of the resource to check compatibility for. The format is either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/compatibility/subjects/*\/versions: Check compatibility with one or more versions of the specified subject. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/compatibility/subjects/{subject}/versions/{version}: Check compatibility with a specific version of the subject.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.compatibility.checkCompatibility = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    this.projects.locations.schemaRegistries.config = {};

    /**
     * Get schema config at global level or for a subject.
     * @param {boolean} params.defaultToGlobal - Optional. If true, the config will fall back to the config at the global level if no subject level config is found.
     * @param {string} params.name - (Required) Required. The resource name to get the config for. It can be either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config: Get config at global level. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}: Get config for a specific subject.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.config.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update config at global level or for a subject. Creates a SchemaSubject-level SchemaConfig if it does not exist.
     * @param {string} params.name - (Required) Required. The resource name to update the config for. It can be either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config: Update config at global level. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}: Update config for a specific subject.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.config.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Delete schema config for a subject.
     * @param {string} params.name - (Required) Required. The resource name of subject to delete the config for. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.config.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.schemaRegistries.mode = {};

    /**
     * Get mode at global level or for a subject.
     * @param {string} params.name - (Required) Required. The resource name of the mode. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject}: mode for a schema registry, or * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}: mode for a specific subject in a specific context
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.mode.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update mode at global level or for a subject.
     * @param {string} params.name - (Required) Required. The resource name of the mode. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject}: mode for a schema registry, or * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}: mode for a specific subject in a specific context
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.mode.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Delete schema mode for a subject.
     * @param {string} params.name - (Required) Required. The resource name of subject to delete the mode for. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject} * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}
     * @return {object} The API response object.
     */
    this.projects.locations.schemaRegistries.mode.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
