# Cloud Dataproc API - Apps Script Client Library

Auto-generated client library for using the **Cloud Dataproc API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:33:14 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:16:23 GMT
- **Created:** Sun, 20 Jul 2025 16:25:29 GMT



---

## API Reference

### `projects`

### `projects.regions`

### `projects.regions.operations`

#### `projects.regions.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.regions.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.regions.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.regions.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.regions.operations.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.operations.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.operations.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.regions.autoscalingPolicies`

#### `projects.regions.autoscalingPolicies.create()`

Creates new autoscaling policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.create, the resource name of the location has the following format: projects/{project_id}/locations/{location} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.autoscalingPolicies.update()`

Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.autoscalingPolicies.get()`

Retrieves autoscaling policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.get, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.get, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} |

#### `projects.regions.autoscalingPolicies.list()`

Lists autoscaling policies in the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.list, the resource name of the location has the following format: projects/{project_id}/locations/{location} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100. |
| `params.pageToken` | `string` | No | Optional. The page token, returned by a previous call, to request the next page of results. |

#### `projects.regions.autoscalingPolicies.delete()`

Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.delete, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.delete, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} |

#### `projects.regions.autoscalingPolicies.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.autoscalingPolicies.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.autoscalingPolicies.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.regions.clusters`

#### `projects.regions.clusters.create()`

Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud Platform project that the cluster belongs to. |
| `params.region` | `string` | Yes | Required. The Dataproc region in which to handle the request. |
| `params.requestId` | `string` | No | Optional. A unique ID used to identify the request. If the server receives two CreateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.actionOnFailedPrimaryWorkers` | `string` | No | Optional. Failure action when primary worker creation fails. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.clusters.patch()`

Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud Platform project the cluster belongs to. |
| `params.region` | `string` | Yes | Required. The Dataproc region in which to handle the request. |
| `params.clusterName` | `string` | Yes | Required. The cluster name. |
| `params.gracefulDecommissionTimeout` | `string` | No | Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on Dataproc image versions 1.2 and higher. |
| `params.updateMask` | `string` | No | Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances, and the PATCH request body would be set as follows: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } *Note:* Currently, only the following fields can be updated: *Mask* *Purpose* *labels* Update labels *config.worker_config.num_instances* Resize primary worker group *config.secondary_worker_config.num_instances* Resize secondary worker group config.autoscaling_config.policy_uri Use, stop using, or change autoscaling policies  |
| `params.requestId` | `string` | No | Optional. A unique ID used to identify the request. If the server receives two UpdateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.UpdateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.clusters.stop()`

Stops a cluster in a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud Platform project the cluster belongs to. |
| `params.region` | `string` | Yes | Required. The Dataproc region in which to handle the request. |
| `params.clusterName` | `string` | Yes | Required. The cluster name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.clusters.start()`

Starts a cluster in a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud Platform project the cluster belongs to. |
| `params.region` | `string` | Yes | Required. The Dataproc region in which to handle the request. |
| `params.clusterName` | `string` | Yes | Required. The cluster name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.clusters.repair()`

Repairs a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud Platform project the cluster belongs to. |
| `params.region` | `string` | Yes | Required. The Dataproc region in which to handle the request. |
| `params.clusterName` | `string` | Yes | Required. The cluster name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.clusters.delete()`

Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud Platform project that the cluster belongs to. |
| `params.region` | `string` | Yes | Required. The Dataproc region in which to handle the request. |
| `params.clusterName` | `string` | Yes | Required. The cluster name. |
| `params.clusterUuid` | `string` | No | Optional. Specifying the cluster_uuid means the RPC should fail (with error NOT_FOUND) if cluster with specified UUID does not exist. |
| `params.requestId` | `string` | No | Optional. A unique ID used to identify the request. If the server receives two DeleteClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.DeleteClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.gracefulTerminationTimeout` | `string` | No | Optional. The graceful termination timeout for the deletion of the cluster. Indicate the time the request will wait to complete the running jobs on the cluster before its forceful deletion. Default value is 0 indicating that the user has not enabled the graceful termination. Value can be between 60 second and 6 Hours, in case the graceful termination is enabled. (There is no separate flag to check the enabling or disabling of graceful termination, it can be checked by the values in the field). |

#### `projects.regions.clusters.get()`

Gets the resource representation for a cluster in a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud Platform project that the cluster belongs to. |
| `params.region` | `string` | Yes | Required. The Dataproc region in which to handle the request. |
| `params.clusterName` | `string` | Yes | Required. The cluster name. |

#### `projects.regions.clusters.list()`

Lists all regions/{region}/clusters in a project alphabetically.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud Platform project that the cluster belongs to. |
| `params.region` | `string` | Yes | Required. The Dataproc region in which to handle the request. |
| `params.filter` | `string` | No | Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is one of status.state, clusterName, or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be one of the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR, DELETING, UPDATING, STOPPING, or STOPPED. ACTIVE contains the CREATING, UPDATING, and RUNNING states. INACTIVE contains the DELETING, ERROR, STOPPING, and STOPPED states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = * |
| `params.pageSize` | `integer` | No | Optional. The standard List page size. |
| `params.pageToken` | `string` | No | Optional. The standard List page token. |

#### `projects.regions.clusters.diagnose()`

Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud Platform project that the cluster belongs to. |
| `params.region` | `string` | Yes | Required. The Dataproc region in which to handle the request. |
| `params.clusterName` | `string` | Yes | Required. The cluster name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.clusters.injectCredentials()`

Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. The ID of the Google Cloud Platform project the cluster belongs to, of the form projects/. |
| `params.region` | `string` | Yes | Required. The region containing the cluster, of the form regions/. |
| `params.cluster` | `string` | Yes | Required. The cluster, in the form clusters/. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.clusters.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.clusters.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.clusters.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.regions.clusters.nodeGroups`

#### `projects.regions.clusters.nodeGroups.create()`

Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this node group will be created. Format: projects/{project}/regions/{region}/clusters/{cluster} |
| `params.nodeGroupId` | `string` | No | Optional. An optional node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters. |
| `params.requestId` | `string` | No | Optional. A unique ID used to identify the request. If the server receives two CreateNodeGroupRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateNodeGroupRequest) with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.parentOperationId` | `string` | No | Optional. operation id of the parent operation sending the create request |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.clusters.nodeGroups.resize()`

Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the node group to resize. Format: projects/{project}/regions/{region}/clusters/{cluster}/nodeGroups/{nodeGroup} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.clusters.nodeGroups.repair()`

Repair nodes in a node group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the node group to resize. Format: projects/{project}/regions/{region}/clusters/{cluster}/nodeGroups/{nodeGroup} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.clusters.nodeGroups.get()`

Gets the resource representation for a node group in a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the node group to retrieve. Format: projects/{project}/regions/{region}/clusters/{cluster}/nodeGroups/{nodeGroup} |

### `projects.regions.jobs`

#### `projects.regions.jobs.submit()`

Submits a job to a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| `params.region` | `string` | Yes | Required. The Dataproc region in which to handle the request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.jobs.submitAsOperation()`

Submits job to a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| `params.region` | `string` | Yes | Required. The Dataproc region in which to handle the request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.jobs.get()`

Gets the resource representation for a job in a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| `params.region` | `string` | Yes | Required. The Dataproc region in which to handle the request. |
| `params.jobId` | `string` | Yes | Required. The job ID. |

#### `projects.regions.jobs.list()`

Lists regions/{region}/jobs in a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| `params.region` | `string` | Yes | Required. The Dataproc region in which to handle the request. |
| `params.pageSize` | `integer` | No | Optional. The number of results to return in each response. |
| `params.pageToken` | `string` | No | Optional. The page token, returned by a previous call, to request the next page of results. |
| `params.clusterName` | `string` | No | Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster. |
| `params.jobStateMatcher` | `string` | No | Optional. Specifies enumerated categories of jobs to list. (default = match ALL jobs).If filter is provided, jobStateMatcher will be ignored. |
| `params.filter` | `string` | No | Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is status.state or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be either ACTIVE or NON_ACTIVE. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = * |

#### `projects.regions.jobs.patch()`

Updates a job in a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| `params.region` | `string` | Yes | Required. The Dataproc region in which to handle the request. |
| `params.jobId` | `string` | Yes | Required. The job ID. |
| `params.updateMask` | `string` | No | Required. Specifies the path, relative to Job, of the field to update. For example, to update the labels of a Job the update_mask parameter would be specified as labels, and the PATCH request body would specify the new value. *Note:* Currently, labels is the only field that can be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.jobs.cancel()`

Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| `params.region` | `string` | Yes | Required. The Dataproc region in which to handle the request. |
| `params.jobId` | `string` | Yes | Required. The job ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.jobs.delete()`

Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| `params.region` | `string` | Yes | Required. The Dataproc region in which to handle the request. |
| `params.jobId` | `string` | Yes | Required. The job ID. |

#### `projects.regions.jobs.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.jobs.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.jobs.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.regions.workflowTemplates`

#### `projects.regions.workflowTemplates.create()`

Creates new workflow template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.create, the resource name of the location has the following format: projects/{project_id}/locations/{location} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.workflowTemplates.get()`

Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} |
| `params.version` | `integer` | No | Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version. |

#### `projects.regions.workflowTemplates.instantiate()`

Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.workflowTemplates.instantiateInline()`

Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,instantiateinline, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.instantiateinline, the resource name of the location has the following format: projects/{project_id}/locations/{location} |
| `params.requestId` | `string` | No | Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.workflowTemplates.update()`

Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.workflowTemplates.list()`

Lists workflows that match the specified filter in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.list, the resource name of the location has the following format: projects/{project_id}/locations/{location} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return in each response. |
| `params.pageToken` | `string` | No | Optional. The page token, returned by a previous call, to request the next page of results. |

#### `projects.regions.workflowTemplates.delete()`

Deletes a workflow template. It does not cancel in-progress workflows.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.delete, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} |
| `params.version` | `integer` | No | Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version. |

#### `projects.regions.workflowTemplates.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.workflowTemplates.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.regions.workflowTemplates.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations`

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

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

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `projects.locations.batches`

#### `projects.locations.batches.analyze()`

Analyze a Batch for possible recommendations and insights.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to analyze in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID" |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.batches.create()`

Creates a batch workload that executes asynchronously.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this batch will be created. |
| `params.batchId` | `string` | No | Optional. The ID to use for the batch, which will become the final component of the batch's resource name.This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/. |
| `params.requestId` | `string` | No | Optional. A unique ID used to identify the request. If the service receives two CreateBatchRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateBatchRequest)s with the same request_id, the second request is ignored and the Operation that corresponds to the first Batch created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.batches.get()`

Gets the batch workload resource representation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID" |

#### `projects.locations.batches.list()`

Lists batch workloads.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of batches. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of batches to return in each response. The service may return fewer than this value. The default page size is 20; the maximum page size is 1000. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous ListBatches call. Provide this token to retrieve the subsequent page. |
| `params.filter` | `string` | No | Optional. A filter for the batches to return in the response.A filter is a logical expression constraining the values of various fields in each batch resource. Filters are case sensitive, and may contain multiple clauses combined with logical operators (AND/OR). Supported fields are batch_id, batch_uuid, state, create_time, and labels.e.g. state = RUNNING and create_time < "2023-01-01T00:00:00Z" filters for batches in state RUNNING that were created before 2023-01-01. state = RUNNING and labels.environment=production filters for batches in state in a RUNNING state that have a production environment label.See https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the filter syntax and a list of supported comparisons. |
| `params.orderBy` | `string` | No | Optional. Field(s) on which to sort the list of batches.Currently the only supported sort orders are unspecified (empty) and create_time desc to sort by most recently created batches first.See https://google.aip.dev/132#ordering for more details. |

#### `projects.locations.batches.delete()`

Deletes the batch workload resource. If the batch is not in a CANCELLED, SUCCEEDED or FAILED State, the delete operation fails and the response returns FAILED_PRECONDITION.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID" |

### `projects.locations.batches.sparkApplications`

#### `projects.locations.batches.sparkApplications.write()`

Write wrapper objects from dataplane to spanner

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the spark application to write data about in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.batches.sparkApplications.search()`

Obtain high level information and list of Spark Applications corresponding to a batch

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID" |
| `params.applicationStatus` | `string` | No | Optional. Search only applications in the chosen state. |
| `params.minTime` | `string` | No | Optional. Earliest start timestamp to list. |
| `params.maxTime` | `string` | No | Optional. Latest start timestamp to list. |
| `params.minEndTime` | `string` | No | Optional. Earliest end timestamp to list. |
| `params.maxEndTime` | `string` | No | Optional. Latest end timestamp to list. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of applications to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous SearchSparkApplications call. Provide this token to retrieve the subsequent page. |

#### `projects.locations.batches.sparkApplications.access()`

Obtain high level information corresponding to a single Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |

#### `projects.locations.batches.sparkApplications.searchJobs()`

Obtain list of spark jobs corresponding to a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |
| `params.jobStatus` | `string` | No | Optional. List only jobs in the specific state. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of jobs to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous SearchSparkApplicationJobs call. Provide this token to retrieve the subsequent page. |

#### `projects.locations.batches.sparkApplications.accessJob()`

Obtain data corresponding to a spark job for a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |
| `params.jobId` | `string` | No | Required. Job ID to fetch data for. |

#### `projects.locations.batches.sparkApplications.searchStages()`

Obtain data corresponding to stages for a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |
| `params.stageStatus` | `string` | No | Optional. List only stages in the given state. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of stages (paging based on stage_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous FetchSparkApplicationStagesList call. Provide this token to retrieve the subsequent page. |
| `params.summaryMetricsMask` | `string` | No | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field |

#### `projects.locations.batches.sparkApplications.searchStageAttempts()`

Obtain data corresponding to a spark stage attempts for a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |
| `params.stageId` | `string` | No | Required. Stage ID for which attempts are to be fetched |
| `params.pageSize` | `integer` | No | Optional. Maximum number of stage attempts (paging based on stage_attempt_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous SearchSparkApplicationStageAttempts call. Provide this token to retrieve the subsequent page. |
| `params.summaryMetricsMask` | `string` | No | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field |

#### `projects.locations.batches.sparkApplications.accessStageAttempt()`

Obtain data corresponding to a spark stage attempt for a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |
| `params.stageId` | `string` | No | Required. Stage ID |
| `params.stageAttemptId` | `integer` | No | Required. Stage Attempt ID |
| `params.summaryMetricsMask` | `string` | No | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field |

#### `projects.locations.batches.sparkApplications.searchStageAttemptTasks()`

Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |
| `params.stageId` | `string` | No | Optional. Stage ID |
| `params.stageAttemptId` | `integer` | No | Optional. Stage Attempt ID |
| `params.sortRuntime` | `boolean` | No | Optional. Sort the tasks by runtime. |
| `params.taskStatus` | `string` | No | Optional. List only tasks in the state. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of tasks to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous ListSparkApplicationStageAttemptTasks call. Provide this token to retrieve the subsequent page. |

#### `projects.locations.batches.sparkApplications.searchExecutors()`

Obtain data corresponding to executors for a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |
| `params.executorStatus` | `string` | No | Optional. Filter to select whether active/ dead or all executors should be selected. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous AccessSparkApplicationExecutorsList call. Provide this token to retrieve the subsequent page. |

#### `projects.locations.batches.sparkApplications.searchExecutorStageSummary()`

Obtain executor summary with respect to a spark stage attempt.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |
| `params.stageId` | `string` | No | Required. Stage ID |
| `params.stageAttemptId` | `integer` | No | Required. Stage Attempt ID |
| `params.pageSize` | `integer` | No | Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous AccessSparkApplicationExecutorsList call. Provide this token to retrieve the subsequent page. |

#### `projects.locations.batches.sparkApplications.searchSqlQueries()`

Obtain data corresponding to SQL Queries for a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |
| `params.details` | `boolean` | No | Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide. |
| `params.planDescription` | `boolean` | No | Optional. Enables/ disables physical plan description on demand |
| `params.pageSize` | `integer` | No | Optional. Maximum number of queries to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous SearchSparkApplicationSqlQueries call. Provide this token to retrieve the subsequent page. |

#### `projects.locations.batches.sparkApplications.accessSqlQuery()`

Obtain data corresponding to a particular SQL Query for a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |
| `params.executionId` | `string` | No | Required. Execution ID |
| `params.details` | `boolean` | No | Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide. |
| `params.planDescription` | `boolean` | No | Optional. Enables/ disables physical plan description on demand |

#### `projects.locations.batches.sparkApplications.accessSqlPlan()`

Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |
| `params.executionId` | `string` | No | Required. Execution ID |

#### `projects.locations.batches.sparkApplications.accessStageRddGraph()`

Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |
| `params.stageId` | `string` | No | Required. Stage ID |

#### `projects.locations.batches.sparkApplications.accessEnvironmentInfo()`

Obtain environment details for a Spark Application

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |

#### `projects.locations.batches.sparkApplications.summarizeJobs()`

Obtain summary of Jobs for a Spark Application

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |

#### `projects.locations.batches.sparkApplications.summarizeStages()`

Obtain summary of Stages for a Spark Application

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |

#### `projects.locations.batches.sparkApplications.summarizeStageAttemptTasks()`

Obtain summary of Tasks for a Spark Application Stage Attempt

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |
| `params.stageId` | `string` | No | Required. Stage ID |
| `params.stageAttemptId` | `integer` | No | Required. Stage Attempt ID |

#### `projects.locations.batches.sparkApplications.summarizeExecutors()`

Obtain summary of Executor Summary for a Spark Application

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Batch) resource reference. |

### `projects.locations.autoscalingPolicies`

#### `projects.locations.autoscalingPolicies.create()`

Creates new autoscaling policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.create, the resource name of the location has the following format: projects/{project_id}/locations/{location} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.autoscalingPolicies.update()`

Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.autoscalingPolicies.get()`

Retrieves autoscaling policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.get, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.get, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} |

#### `projects.locations.autoscalingPolicies.list()`

Lists autoscaling policies in the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.list, the resource name of the location has the following format: projects/{project_id}/locations/{location} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100. |
| `params.pageToken` | `string` | No | Optional. The page token, returned by a previous call, to request the next page of results. |

#### `projects.locations.autoscalingPolicies.delete()`

Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.delete, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.delete, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} |

#### `projects.locations.autoscalingPolicies.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.autoscalingPolicies.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.autoscalingPolicies.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.sessions`

#### `projects.locations.sessions.create()`

Create an interactive session asynchronously.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this session will be created. |
| `params.sessionId` | `string` | No | Required. The ID to use for the session, which becomes the final component of the session's resource name.This value must be 4-63 characters. Valid characters are /a-z-/. |
| `params.requestId` | `string` | No | Optional. A unique ID used to identify the request. If the service receives two CreateSessionRequests (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateSessionRequest)s with the same ID, the second request is ignored, and the first Session is created and stored in the backend.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.sessions.get()`

Gets the resource representation for an interactive session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session to retrieve. |

#### `projects.locations.sessions.list()`

Lists interactive sessions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of sessions. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of sessions to return in each response. The service may return fewer than this value. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous ListSessions call. Provide this token to retrieve the subsequent page. |
| `params.filter` | `string` | No | Optional. A filter for the sessions to return in the response.A filter is a logical expression constraining the values of various fields in each session resource. Filters are case sensitive, and may contain multiple clauses combined with logical operators (AND, OR). Supported fields are session_id, session_uuid, state, create_time, and labels.Example: state = ACTIVE and create_time < "2023-01-01T00:00:00Z" is a filter for sessions in an ACTIVE state that were created before 2023-01-01. state = ACTIVE and labels.environment=production is a filter for sessions in an ACTIVE state that have a production environment label.See https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the filter syntax and a list of supported comparators. |

#### `projects.locations.sessions.terminate()`

Terminates the interactive session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session resource to terminate. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.sessions.delete()`

Deletes the interactive session resource. If the session is not in terminal state, it is terminated, and then deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session resource to delete. |
| `params.requestId` | `string` | No | Optional. A unique ID used to identify the request. If the service receives two DeleteSessionRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.DeleteSessionRequest)s with the same ID, the second request is ignored.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |

### `projects.locations.sessions.sparkApplications`

#### `projects.locations.sessions.sparkApplications.write()`

Write wrapper objects from dataplane to spanner

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the spark application to write data about in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.sessions.sparkApplications.search()`

Obtain high level information and list of Spark Applications corresponding to a batch

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID" |
| `params.applicationStatus` | `string` | No | Optional. Search only applications in the chosen state. |
| `params.minTime` | `string` | No | Optional. Earliest start timestamp to list. |
| `params.maxTime` | `string` | No | Optional. Latest start timestamp to list. |
| `params.minEndTime` | `string` | No | Optional. Earliest end timestamp to list. |
| `params.maxEndTime` | `string` | No | Optional. Latest end timestamp to list. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of applications to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous SearchSessionSparkApplications call. Provide this token to retrieve the subsequent page. |

#### `projects.locations.sessions.sparkApplications.access()`

Obtain high level information corresponding to a single Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |

#### `projects.locations.sessions.sparkApplications.searchJobs()`

Obtain list of spark jobs corresponding to a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |
| `params.jobStatus` | `string` | No | Optional. List only jobs in the specific state. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of jobs to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous SearchSessionSparkApplicationJobs call. Provide this token to retrieve the subsequent page. |
| `params.jobIds` | `string` | No | Optional. List of Job IDs to filter by if provided. |

#### `projects.locations.sessions.sparkApplications.accessJob()`

Obtain data corresponding to a spark job for a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |
| `params.jobId` | `string` | No | Required. Job ID to fetch data for. |

#### `projects.locations.sessions.sparkApplications.searchStages()`

Obtain data corresponding to stages for a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |
| `params.stageStatus` | `string` | No | Optional. List only stages in the given state. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of stages (paging based on stage_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous SearchSessionSparkApplicationStages call. Provide this token to retrieve the subsequent page. |
| `params.summaryMetricsMask` | `string` | No | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field |
| `params.stageIds` | `string` | No | Optional. List of Stage IDs to filter by if provided. |

#### `projects.locations.sessions.sparkApplications.searchStageAttempts()`

Obtain data corresponding to a spark stage attempts for a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |
| `params.stageId` | `string` | No | Required. Stage ID for which attempts are to be fetched |
| `params.pageSize` | `integer` | No | Optional. Maximum number of stage attempts (paging based on stage_attempt_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous SearchSessionSparkApplicationStageAttempts call. Provide this token to retrieve the subsequent page. |
| `params.summaryMetricsMask` | `string` | No | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field |

#### `projects.locations.sessions.sparkApplications.accessStageAttempt()`

Obtain data corresponding to a spark stage attempt for a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |
| `params.stageId` | `string` | No | Required. Stage ID |
| `params.stageAttemptId` | `integer` | No | Required. Stage Attempt ID |
| `params.summaryMetricsMask` | `string` | No | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field |

#### `projects.locations.sessions.sparkApplications.searchStageAttemptTasks()`

Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |
| `params.stageId` | `string` | No | Optional. Stage ID |
| `params.stageAttemptId` | `integer` | No | Optional. Stage Attempt ID |
| `params.sortRuntime` | `boolean` | No | Optional. Sort the tasks by runtime. |
| `params.taskStatus` | `string` | No | Optional. List only tasks in the state. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of tasks to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous SearchSessionSparkApplicationStageAttemptTasks call. Provide this token to retrieve the subsequent page. |

#### `projects.locations.sessions.sparkApplications.searchExecutors()`

Obtain data corresponding to executors for a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |
| `params.executorStatus` | `string` | No | Optional. Filter to select whether active/ dead or all executors should be selected. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous SearchSessionSparkApplicationExecutors call. Provide this token to retrieve the subsequent page. |

#### `projects.locations.sessions.sparkApplications.searchExecutorStageSummary()`

Obtain executor summary with respect to a spark stage attempt.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |
| `params.stageId` | `string` | No | Required. Stage ID |
| `params.stageAttemptId` | `integer` | No | Required. Stage Attempt ID |
| `params.pageSize` | `integer` | No | Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous SearchSessionSparkApplicationExecutorStageSummary call. Provide this token to retrieve the subsequent page. |

#### `projects.locations.sessions.sparkApplications.searchSqlQueries()`

Obtain data corresponding to SQL Queries for a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |
| `params.details` | `boolean` | No | Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide. |
| `params.planDescription` | `boolean` | No | Optional. Enables/ disables physical plan description on demand |
| `params.pageSize` | `integer` | No | Optional. Maximum number of queries to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous SearchSessionSparkApplicationSqlQueries call. Provide this token to retrieve the subsequent page. |
| `params.operationIds` | `string` | No | Optional. List of Spark Connect operation IDs to filter by if provided. |

#### `projects.locations.sessions.sparkApplications.accessSqlQuery()`

Obtain data corresponding to a particular SQL Query for a Spark Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |
| `params.executionId` | `string` | No | Required. Execution ID |
| `params.details` | `boolean` | No | Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide. |
| `params.planDescription` | `boolean` | No | Optional. Enables/ disables physical plan description on demand |

#### `projects.locations.sessions.sparkApplications.accessSqlPlan()`

Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |
| `params.executionId` | `string` | No | Required. Execution ID |

#### `projects.locations.sessions.sparkApplications.accessStageRddGraph()`

Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |
| `params.stageId` | `string` | No | Required. Stage ID |

#### `projects.locations.sessions.sparkApplications.accessEnvironmentInfo()`

Obtain environment details for a Spark Application

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |

#### `projects.locations.sessions.sparkApplications.summarizeJobs()`

Obtain summary of Jobs for a Spark Application

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |
| `params.jobIds` | `string` | No | Optional. List of Job IDs to filter by if provided. |

#### `projects.locations.sessions.sparkApplications.summarizeStages()`

Obtain summary of Stages for a Spark Application

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |
| `params.stageIds` | `string` | No | Optional. List of Stage IDs to filter by if provided. |

#### `projects.locations.sessions.sparkApplications.summarizeStageAttemptTasks()`

Obtain summary of Tasks for a Spark Application Stage Attempt

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |
| `params.stageId` | `string` | No | Required. Stage ID |
| `params.stageAttemptId` | `integer` | No | Required. Stage Attempt ID |

#### `projects.locations.sessions.sparkApplications.summarizeExecutors()`

Obtain summary of Executor Summary for a Spark Application

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" |
| `params.parent` | `string` | No | Required. Parent (Session) resource reference. |

### `projects.locations.sessionTemplates`

#### `projects.locations.sessionTemplates.create()`

Create a session template synchronously.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this session template will be created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.sessionTemplates.patch()`

Updates the session template synchronously.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. The resource name of the session template. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.sessionTemplates.get()`

Gets the resource representation for a session template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session template to retrieve. |

#### `projects.locations.sessionTemplates.list()`

Lists session templates.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent that owns this collection of session templates. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of sessions to return in each response. The service may return fewer than this value. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous ListSessions call. Provide this token to retrieve the subsequent page. |
| `params.filter` | `string` | No | Optional. A filter for the session templates to return in the response. Filters are case sensitive and have the following syntax:field = value AND field = value ... |

#### `projects.locations.sessionTemplates.delete()`

Deletes a session template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session template resource to delete. |

### `projects.locations.workflowTemplates`

#### `projects.locations.workflowTemplates.create()`

Creates new workflow template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.create, the resource name of the location has the following format: projects/{project_id}/locations/{location} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.workflowTemplates.get()`

Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} |
| `params.version` | `integer` | No | Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version. |

#### `projects.locations.workflowTemplates.instantiate()`

Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.workflowTemplates.instantiateInline()`

Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,instantiateinline, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.instantiateinline, the resource name of the location has the following format: projects/{project_id}/locations/{location} |
| `params.requestId` | `string` | No | Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.workflowTemplates.update()`

Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.workflowTemplates.list()`

Lists workflows that match the specified filter in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.list, the resource name of the location has the following format: projects/{project_id}/locations/{location} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return in each response. |
| `params.pageToken` | `string` | No | Optional. The page token, returned by a previous call, to request the next page of results. |

#### `projects.locations.workflowTemplates.delete()`

Deletes a workflow template. It does not cancel in-progress workflows.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.delete, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} |
| `params.version` | `integer` | No | Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version. |

#### `projects.locations.workflowTemplates.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.workflowTemplates.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.workflowTemplates.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |