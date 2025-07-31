# Managed Service for Apache Kafka API - Apps Script Client Library

Auto-generated client library for using the **Managed Service for Apache Kafka API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:43:24 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:35:06 GMT
- **Created:** Sun, 20 Jul 2025 16:42:10 GMT



---

## API Reference

### `projects`

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
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.clusters`

#### `projects.locations.clusters.list()`

Lists the clusters in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent location whose clusters are to be listed. Structured like `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of clusters to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClusters` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter expression for the result. |
| `params.orderBy` | `string` | No | Optional. Order by fields for the result. |

#### `projects.locations.clusters.get()`

Returns the properties of a single cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the cluster whose configuration to return. |

#### `projects.locations.clusters.create()`

Creates a new cluster in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent region in which to create the cluster. Structured like `projects/{project}/locations/{location}`. |
| `params.clusterId` | `string` | No | Required. The ID to use for the cluster, which will become the final component of the cluster's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-cluster-id`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.patch()`

Updates the properties of a single cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The name of the cluster. Structured like: projects/{project_number}/locations/{location}/clusters/{cluster_id} |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.delete()`

Deletes a single cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the cluster to delete. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

### `projects.locations.clusters.topics`

#### `projects.locations.clusters.topics.list()`

Lists the topics in a given cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent cluster whose topics are to be listed. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the parent is returned. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopics` must match the call that provided the page token. |

#### `projects.locations.clusters.topics.get()`

Returns the properties of a single topic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the topic whose configuration to return. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic}. |

#### `projects.locations.clusters.topics.create()`

Creates a new topic in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent cluster in which to create the topic. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`. |
| `params.topicId` | `string` | No | Required. The ID to use for the topic, which will become the final component of the topic's name. This value is structured like: `my-topic-name`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.topics.patch()`

Updates the properties of a single topic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The name of the topic. The `topic` segment is used when connecting directly to the cluster. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic} |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the Topic resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.topics.delete()`

Deletes a single topic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the topic to delete. `projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic}`. |

### `projects.locations.clusters.consumerGroups`

#### `projects.locations.clusters.consumerGroups.list()`

Lists the consumer groups in a given cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent cluster whose consumer groups are to be listed. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of consumer groups to return. The service may return fewer than this value. If unset or zero, all consumer groups for the parent is returned. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListConsumerGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConsumerGroups` must match the call that provided the page token. |

#### `projects.locations.clusters.consumerGroups.get()`

Returns the properties of a single consumer group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the consumer group whose configuration to return. `projects/{project}/locations/{location}/clusters/{cluster}/consumerGroups/{consumerGroup}`. |

#### `projects.locations.clusters.consumerGroups.patch()`

Updates the properties of a single consumer group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The name of the consumer group. The `consumer_group` segment is used when connecting directly to the cluster. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/consumerGroups/{consumer_group} |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the ConsumerGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.consumerGroups.delete()`

Deletes a single consumer group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the consumer group to delete. `projects/{project}/locations/{location}/clusters/{cluster}/consumerGroups/{consumerGroup}`. |

### `projects.locations.clusters.acls`

#### `projects.locations.clusters.acls.list()`

Lists the acls in a given cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent cluster whose acls are to be listed. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of acls to return. The service may return fewer than this value. If unset or zero, all acls for the parent is returned. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListAcls` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAcls` must match the call that provided the page token. |

#### `projects.locations.clusters.acls.get()`

Returns the properties of a single acl.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the acl to return. Structured like: `projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details. |

#### `projects.locations.clusters.acls.create()`

Creates a new acl in the given project, location, and cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent cluster in which to create the acl. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`. |
| `params.aclId` | `string` | No | Required. The ID to use for the acl, which will become the final component of the acl's name. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. `acl_id` is structured like one of the following: For acls on the cluster: `cluster` For acls on a single resource within the cluster: `topic/{resource_name}` `consumerGroup/{resource_name}` `transactionalId/{resource_name}` For acls on all resources that match a prefix: `topicPrefixed/{resource_name}` `consumerGroupPrefixed/{resource_name}` `transactionalIdPrefixed/{resource_name}` For acls on all resources of a given type (i.e. the wildcard literal "*"): `allTopics` (represents `topic/*`) `allConsumerGroups` (represents `consumerGroup/*`) `allTransactionalIds` (represents `transactionalId/*`) |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.acls.patch()`

Updates the properties of a single acl.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The name for the acl. Represents a single Resource Pattern. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id} The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. `acl_id` is structured like one of the following: For acls on the cluster: `cluster` For acls on a single resource within the cluster: `topic/{resource_name}` `consumerGroup/{resource_name}` `transactionalId/{resource_name}` For acls on all resources that match a prefix: `topicPrefixed/{resource_name}` `consumerGroupPrefixed/{resource_name}` `transactionalIdPrefixed/{resource_name}` For acls on all resources of a given type (i.e. the wildcard literal "*"): `allTopics` (represents `topic/*`) `allConsumerGroups` (represents `consumerGroup/*`) `allTransactionalIds` (represents `transactionalId/*`) |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Acl resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.acls.delete()`

Deletes an acl.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the acl to delete. Structured like: `projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details. |

#### `projects.locations.clusters.acls.addAclEntry()`

Incremental update: Adds an acl entry to an acl. Creates the acl if it does not exist yet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.acl` | `string` | Yes | Required. The name of the acl to add the acl entry to. Structured like: `projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.acls.removeAclEntry()`

Incremental update: Removes an acl entry from an acl. Deletes the acl if its acl entries become empty (i.e. if the removed entry was the last one in the acl).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.acl` | `string` | Yes | Required. The name of the acl to remove the acl entry from. Structured like: `projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.connectClusters`

#### `projects.locations.connectClusters.list()`

Lists the Kafka Connect clusters in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project/location whose Connect clusters are to be listed. Structured like `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of Connect clusters to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListConnectClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectClusters` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter expression for the result. |
| `params.orderBy` | `string` | No | Optional. Order by fields for the result. |

#### `projects.locations.connectClusters.get()`

Returns the properties of a single Kafka Connect cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Kafka Connect cluster whose configuration to return. Structured like `projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}`. |

#### `projects.locations.connectClusters.create()`

Creates a new Kafka Connect cluster in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project/location in which to create the Kafka Connect cluster. Structured like `projects/{project}/locations/{location}/`. |
| `params.connectClusterId` | `string` | No | Required. The ID to use for the Connect cluster, which will become the final component of the cluster's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-cluster-id`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connectClusters.patch()`

Updates the properties of a single Kafka Connect cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The name of the Kafka Connect cluster. Structured like: projects/{project_number}/locations/{location}/connectClusters/{connect_cluster_id} |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connectClusters.delete()`

Deletes a single Connect cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Kafka Connect cluster to delete. Structured like `projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

### `projects.locations.connectClusters.connectors`

#### `projects.locations.connectClusters.connectors.list()`

Lists the connectors in a given Connect cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent Connect cluster whose connectors are to be listed. Structured like `projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of connectors to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectors` must match the call that provided the page token. |

#### `projects.locations.connectClusters.connectors.get()`

Returns the properties of a single connector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the connector whose configuration to return. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} |

#### `projects.locations.connectClusters.connectors.create()`

Creates a new connector in a given Connect cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent Connect cluster in which to create the connector. Structured like `projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}`. |
| `params.connectorId` | `string` | No | Required. The ID to use for the connector, which will become the final component of the connector's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-connector-id`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connectClusters.connectors.patch()`

Updates the properties of a connector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The name of the connector. Structured like: projects/{project}/locations/{location}/connectClusters/{connect_cluster}/connectors/{connector} |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connectClusters.connectors.delete()`

Deletes a connector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the connector to delete. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} |

#### `projects.locations.connectClusters.connectors.pause()`

Pauses the connector and its tasks.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the connector to pause. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connectClusters.connectors.resume()`

Resumes the connector and its tasks.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the connector to pause. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connectClusters.connectors.restart()`

Restarts the connector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the connector to restart. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connectClusters.connectors.stop()`

Stops the connector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the connector to stop. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.schemaRegistries`

#### `projects.locations.schemaRegistries.get()`

Get the schema registry instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the schema registry instance to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` |

#### `projects.locations.schemaRegistries.list()`

List schema registries.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent whose schema registry instances are to be listed. Structured like: `projects/{project}/locations/{location}` |

#### `projects.locations.schemaRegistries.create()`

Create a schema registry instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent whose schema registry instance is to be created. Structured like: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.schemaRegistries.delete()`

Delete a schema registry instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the schema registry instance to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` |

### `projects.locations.schemaRegistries.contexts`

#### `projects.locations.schemaRegistries.contexts.get()`

Get the context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the context to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}` |

#### `projects.locations.schemaRegistries.contexts.list()`

List contexts for a schema registry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the contexts. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` |

### `projects.locations.schemaRegistries.contexts.schemas`

#### `projects.locations.schemaRegistries.contexts.schemas.get()`

Get the schema for the given schema id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the schema to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` |
| `params.subject` | `string` | No | Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context. |

#### `projects.locations.schemaRegistries.contexts.schemas.getSchema()`

Get the schema string for the given schema id. The response will be the schema string.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the schema to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` |
| `params.subject` | `string` | No | Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context. |

### `projects.locations.schemaRegistries.contexts.schemas.versions`

#### `projects.locations.schemaRegistries.contexts.schemas.versions.list()`

List the schema versions for the given schema id. The response will be an array of subject-version pairs as: [{"subject":"subject1", "version":1}, {"subject":"subject2", "version":2}].

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The schema whose schema versions are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}` |
| `params.subject` | `string` | No | Optional. The subject to filter the subjects by. |
| `params.deleted` | `boolean` | No | Optional. If true, the response will include soft-deleted versions of the schema, even if the subject is soft-deleted. The default is false. |

### `projects.locations.schemaRegistries.contexts.schemas.types`

#### `projects.locations.schemaRegistries.contexts.schemas.types.list()`

List the supported schema types. The response will be an array of schema types.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent schema registry whose schema types are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` |

### `projects.locations.schemaRegistries.contexts.schemas.subjects`

#### `projects.locations.schemaRegistries.contexts.schemas.subjects.list()`

List subjects which reference a particular schema id. The response will be an array of subject names.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The schema resource whose associated subjects are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}` |
| `params.subject` | `string` | No | Optional. The subject to filter the subjects by. |
| `params.deleted` | `boolean` | No | Optional. If true, the response will include soft-deleted subjects. The default is false. |

### `projects.locations.schemaRegistries.contexts.subjects`

#### `projects.locations.schemaRegistries.contexts.subjects.list()`

List subjects in the schema registry. The response will be an array of subject names.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent schema registry/context whose subjects are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}` |
| `params.subjectPrefix` | `string` | No | Optional. The context to filter the subjects by, in the format of `:.{context}:`. If unset, all subjects in the registry are returned. Set to empty string or add as '?subjectPrefix=' at the end of this request to list subjects in the default context. |
| `params.deleted` | `boolean` | No | Optional. If true, the response will include soft-deleted subjects. The default is false. |

#### `projects.locations.schemaRegistries.contexts.subjects.delete()`

Delete a subject. The response will be an array of versions of the deleted subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subject to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}` |
| `params.permanent` | `boolean` | No | Optional. If true, the subject and all associated metadata including the schema ID will be deleted permanently. Otherwise, only the subject is soft-deleted. The default is false. Soft-deleted subjects can still be searched in ListSubjects API call with deleted=true query parameter. A soft-delete of a subject must be performed before a hard-delete. |

#### `projects.locations.schemaRegistries.contexts.subjects.lookupVersion()`

Lookup a schema under the specified subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The subject to lookup the schema in. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.schemaRegistries.contexts.subjects.versions`

#### `projects.locations.schemaRegistries.contexts.subjects.versions.get()`

Get a versioned schema (schema with subject/version) of a subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subject to return versions. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}` |
| `params.deleted` | `boolean` | No | Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false. |

#### `projects.locations.schemaRegistries.contexts.subjects.versions.getSchema()`

Get the schema string only for a version of a subject. The response will be the schema string.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subject to return versions. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}` |
| `params.deleted` | `boolean` | No | Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false. |

#### `projects.locations.schemaRegistries.contexts.subjects.versions.list()`

Get all versions of a subject. The response will be an array of versions of the subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The subject whose versions are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}` |
| `params.deleted` | `boolean` | No | Optional. If true, the response will include soft-deleted versions of an active or soft-deleted subject. The default is false. |

#### `projects.locations.schemaRegistries.contexts.subjects.versions.create()`

Register a new version under a given subject with the given schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The subject to create the version for. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.schemaRegistries.contexts.subjects.versions.delete()`

Delete a version of a subject. The response will be the deleted version id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subject version to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}` |
| `params.permanent` | `boolean` | No | Optional. If true, both the version and the referenced schema ID will be permanently deleted. The default is false. If false, the version will be deleted but the schema ID will be retained. Soft-deleted versions can still be searched in ListVersions API call with deleted=true query parameter. A soft-delete of a version must be performed before a hard-delete. |

### `projects.locations.schemaRegistries.contexts.subjects.versions.referencedby`

#### `projects.locations.schemaRegistries.contexts.subjects.versions.referencedby.list()`

Get a list of IDs of schemas that reference the schema with the given subject and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The version to list referenced by. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}` |

### `projects.locations.schemaRegistries.contexts.compatibility`

#### `projects.locations.schemaRegistries.contexts.compatibility.checkCompatibility()`

Check compatibility of a schema with all versions or a specific version of a subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource to check compatibility for. The format is either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/compatibility/subjects/*/versions: Check compatibility with one or more versions of the specified subject. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/compatibility/subjects/{subject}/versions/{version}: Check compatibility with a specific version of the subject. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.schemaRegistries.contexts.config`

#### `projects.locations.schemaRegistries.contexts.config.get()`

Get schema config at global level or for a subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name to get the config for. It can be either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config: Get config at global level. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}: Get config for a specific subject. |
| `params.defaultToGlobal` | `boolean` | No | Optional. If true, the config will fall back to the config at the global level if no subject level config is found. |

#### `projects.locations.schemaRegistries.contexts.config.update()`

Update config at global level or for a subject. Creates a SchemaSubject-level SchemaConfig if it does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name to update the config for. It can be either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config: Update config at global level. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}: Update config for a specific subject. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.schemaRegistries.contexts.config.delete()`

Delete schema config for a subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of subject to delete the config for. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject} |

### `projects.locations.schemaRegistries.contexts.mode`

#### `projects.locations.schemaRegistries.contexts.mode.get()`

Get mode at global level or for a subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the mode. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject}: mode for a schema registry, or * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}: mode for a specific subject in a specific context |

#### `projects.locations.schemaRegistries.contexts.mode.update()`

Update mode at global level or for a subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the mode. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject}: mode for a schema registry, or * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}: mode for a specific subject in a specific context |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.schemaRegistries.contexts.mode.delete()`

Delete schema mode for a subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of subject to delete the mode for. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject} * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject} |

### `projects.locations.schemaRegistries.schemas`

#### `projects.locations.schemaRegistries.schemas.get()`

Get the schema for the given schema id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the schema to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` |
| `params.subject` | `string` | No | Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context. |

#### `projects.locations.schemaRegistries.schemas.getSchema()`

Get the schema string for the given schema id. The response will be the schema string.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the schema to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` |
| `params.subject` | `string` | No | Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context. |

### `projects.locations.schemaRegistries.schemas.versions`

#### `projects.locations.schemaRegistries.schemas.versions.list()`

List the schema versions for the given schema id. The response will be an array of subject-version pairs as: [{"subject":"subject1", "version":1}, {"subject":"subject2", "version":2}].

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The schema whose schema versions are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}` |
| `params.subject` | `string` | No | Optional. The subject to filter the subjects by. |
| `params.deleted` | `boolean` | No | Optional. If true, the response will include soft-deleted versions of the schema, even if the subject is soft-deleted. The default is false. |

### `projects.locations.schemaRegistries.schemas.types`

#### `projects.locations.schemaRegistries.schemas.types.list()`

List the supported schema types. The response will be an array of schema types.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent schema registry whose schema types are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` |

### `projects.locations.schemaRegistries.schemas.subjects`

#### `projects.locations.schemaRegistries.schemas.subjects.list()`

List subjects which reference a particular schema id. The response will be an array of subject names.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The schema resource whose associated subjects are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}` |
| `params.subject` | `string` | No | Optional. The subject to filter the subjects by. |
| `params.deleted` | `boolean` | No | Optional. If true, the response will include soft-deleted subjects. The default is false. |

### `projects.locations.schemaRegistries.subjects`

#### `projects.locations.schemaRegistries.subjects.list()`

List subjects in the schema registry. The response will be an array of subject names.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent schema registry/context whose subjects are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}` |
| `params.subjectPrefix` | `string` | No | Optional. The context to filter the subjects by, in the format of `:.{context}:`. If unset, all subjects in the registry are returned. Set to empty string or add as '?subjectPrefix=' at the end of this request to list subjects in the default context. |
| `params.deleted` | `boolean` | No | Optional. If true, the response will include soft-deleted subjects. The default is false. |

#### `projects.locations.schemaRegistries.subjects.delete()`

Delete a subject. The response will be an array of versions of the deleted subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subject to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}` |
| `params.permanent` | `boolean` | No | Optional. If true, the subject and all associated metadata including the schema ID will be deleted permanently. Otherwise, only the subject is soft-deleted. The default is false. Soft-deleted subjects can still be searched in ListSubjects API call with deleted=true query parameter. A soft-delete of a subject must be performed before a hard-delete. |

#### `projects.locations.schemaRegistries.subjects.lookupVersion()`

Lookup a schema under the specified subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The subject to lookup the schema in. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.schemaRegistries.subjects.versions`

#### `projects.locations.schemaRegistries.subjects.versions.get()`

Get a versioned schema (schema with subject/version) of a subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subject to return versions. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}` |
| `params.deleted` | `boolean` | No | Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false. |

#### `projects.locations.schemaRegistries.subjects.versions.getSchema()`

Get the schema string only for a version of a subject. The response will be the schema string.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subject to return versions. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}` |
| `params.deleted` | `boolean` | No | Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false. |

#### `projects.locations.schemaRegistries.subjects.versions.list()`

Get all versions of a subject. The response will be an array of versions of the subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The subject whose versions are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}` |
| `params.deleted` | `boolean` | No | Optional. If true, the response will include soft-deleted versions of an active or soft-deleted subject. The default is false. |

#### `projects.locations.schemaRegistries.subjects.versions.create()`

Register a new version under a given subject with the given schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The subject to create the version for. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.schemaRegistries.subjects.versions.delete()`

Delete a version of a subject. The response will be the deleted version id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subject version to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}` |
| `params.permanent` | `boolean` | No | Optional. If true, both the version and the referenced schema ID will be permanently deleted. The default is false. If false, the version will be deleted but the schema ID will be retained. Soft-deleted versions can still be searched in ListVersions API call with deleted=true query parameter. A soft-delete of a version must be performed before a hard-delete. |

### `projects.locations.schemaRegistries.subjects.versions.referencedby`

#### `projects.locations.schemaRegistries.subjects.versions.referencedby.list()`

Get a list of IDs of schemas that reference the schema with the given subject and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The version to list referenced by. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}` |

### `projects.locations.schemaRegistries.compatibility`

#### `projects.locations.schemaRegistries.compatibility.checkCompatibility()`

Check compatibility of a schema with all versions or a specific version of a subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource to check compatibility for. The format is either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/compatibility/subjects/*/versions: Check compatibility with one or more versions of the specified subject. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/compatibility/subjects/{subject}/versions/{version}: Check compatibility with a specific version of the subject. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.schemaRegistries.config`

#### `projects.locations.schemaRegistries.config.get()`

Get schema config at global level or for a subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name to get the config for. It can be either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config: Get config at global level. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}: Get config for a specific subject. |
| `params.defaultToGlobal` | `boolean` | No | Optional. If true, the config will fall back to the config at the global level if no subject level config is found. |

#### `projects.locations.schemaRegistries.config.update()`

Update config at global level or for a subject. Creates a SchemaSubject-level SchemaConfig if it does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name to update the config for. It can be either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config: Update config at global level. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}: Update config for a specific subject. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.schemaRegistries.config.delete()`

Delete schema config for a subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of subject to delete the config for. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject} |

### `projects.locations.schemaRegistries.mode`

#### `projects.locations.schemaRegistries.mode.get()`

Get mode at global level or for a subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the mode. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject}: mode for a schema registry, or * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}: mode for a specific subject in a specific context |

#### `projects.locations.schemaRegistries.mode.update()`

Update mode at global level or for a subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the mode. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject}: mode for a schema registry, or * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}: mode for a specific subject in a specific context |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.schemaRegistries.mode.delete()`

Delete schema mode for a subject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of subject to delete the mode for. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject} * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject} |