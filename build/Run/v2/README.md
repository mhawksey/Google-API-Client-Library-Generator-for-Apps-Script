# Cloud Run Admin API - Apps Script Client Library

Auto-generated client library for using the **Cloud Run Admin API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:19:17 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:45:59 GMT
- **Created:** Sun, 20 Jul 2025 16:52:56 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.exportProjectMetadata()`

Export generated customer metadata for a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the project of which metadata should be exported. Format: `projects/{project_id_or_number}/locations/{location}` for Project in a given location. |

#### `projects.locations.exportMetadata()`

Export generated customer metadata for a given resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource of which metadata should be exported. Format: `projects/{project_id_or_number}/locations/{location}/services/{service}` for Service `projects/{project_id_or_number}/locations/{location}/services/{service}/revisions/{revision}` for Revision `projects/{project_id_or_number}/locations/{location}/jobs/{job}/executions/{execution}` for Execution {project_id_or_number} may contains domain-scoped project IDs |

#### `projects.locations.exportImageMetadata()`

Export image metadata for a given resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource of which image metadata should be exported. Format: `projects/{project_id_or_number}/locations/{location}/services/{service}/revisions/{revision}` for Revision `projects/{project_id_or_number}/locations/{location}/jobs/{job}/executions/{execution}` for Execution |

#### `projects.locations.exportImage()`

Export image for a given resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource of which image metadata should be exported. Format: `projects/{project_id_or_number}/locations/{location}/services/{service}/revisions/{revision}` for Revision `projects/{project_id_or_number}/locations/{location}/jobs/{job}/executions/{execution}` for Execution |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. To query for all of the operations for a project. |
| `params.filter` | `string` | No | Optional. A filter for matching the completed or in-progress operations. The supported formats of *filter* are: To query for only completed operations: done:true To query for only ongoing operations: done:false Must be empty to query for all of the latest operations for the given parent project. |
| `params.pageSize` | `integer` | No | The maximum number of records that should be returned. Requested page size cannot exceed 100. If not set or set to less than or equal to 0, the default page size is 100. . |
| `params.pageToken` | `string` | No | Token identifying which result to start with, which is returned by a previous list call. |

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

#### `projects.locations.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.builds`

#### `projects.locations.builds.submit()`

Submits a build in a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location to build in. Location must be a region, e.g., 'us-central1' or 'global' if the global builder is to be used. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.jobs`

#### `projects.locations.jobs.create()`

Creates a Job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location and project in which this Job should be created. Format: projects/{project}/locations/{location}, where {project} can be project id or number. |
| `params.jobId` | `string` | No | Required. The unique identifier for the Job. The name of the job becomes {parent}/jobs/{job_id}. |
| `params.validateOnly` | `boolean` | No | Indicates that the request should be validated and default values populated, without persisting the request or creating any resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.jobs.get()`

Gets information about a Job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full name of the Job. Format: projects/{project}/locations/{location}/jobs/{job}, where {project} can be project id or number. |

#### `projects.locations.jobs.list()`

Lists Jobs. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location and project to list resources on. Format: projects/{project}/locations/{location}, where {project} can be project id or number. |
| `params.pageSize` | `integer` | No | Maximum number of Jobs to return in this call. |
| `params.pageToken` | `string` | No | A page token received from a previous call to ListJobs. All other parameters must match. |
| `params.showDeleted` | `boolean` | No | If true, returns deleted (but unexpired) resources along with active ones. |

#### `projects.locations.jobs.patch()`

Updates a Job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The fully qualified name of this Job. Format: projects/{project}/locations/{location}/jobs/{job} |
| `params.validateOnly` | `boolean` | No | Indicates that the request should be validated and default values populated, without persisting the request or updating any resources. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and if the Job does not exist, it will create a new one. Caller must have both create and update permissions for this call if this is set to true. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.jobs.delete()`

Deletes a Job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full name of the Job. Format: projects/{project}/locations/{location}/jobs/{job}, where {project} can be project id or number. |
| `params.validateOnly` | `boolean` | No | Indicates that the request should be validated without actually deleting any resources. |
| `params.etag` | `string` | No | A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. |

#### `projects.locations.jobs.run()`

Triggers creation of a new Execution of this Job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full name of the Job. Format: projects/{project}/locations/{location}/jobs/{job}, where {project} can be project id or number. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.jobs.getIamPolicy()`

Gets the IAM Access Control policy currently in effect for the given Job. This result does not include any inherited policies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.jobs.setIamPolicy()`

Sets the IAM Access control policy for the specified Job. Overwrites any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.jobs.testIamPermissions()`

Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.jobs.executions`

#### `projects.locations.jobs.executions.exportStatus()`

Read the status of an image export operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource of which image export operation status has to be fetched. Format: `projects/{project_id_or_number}/locations/{location}/services/{service}/revisions/{revision}` for Revision `projects/{project_id_or_number}/locations/{location}/jobs/{job}/executions/{execution}` for Execution |
| `params.operationId` | `string` | Yes | Required. The operation id returned from ExportImage. |

#### `projects.locations.jobs.executions.get()`

Gets information about an Execution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full name of the Execution. Format: `projects/{project}/locations/{location}/jobs/{job}/executions/{execution}`, where `{project}` can be project id or number. |

#### `projects.locations.jobs.executions.list()`

Lists Executions from a Job. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Execution from which the Executions should be listed. To list all Executions across Jobs, use "-" instead of Job name. Format: `projects/{project}/locations/{location}/jobs/{job}`, where `{project}` can be project id or number. |
| `params.pageSize` | `integer` | No | Maximum number of Executions to return in this call. |
| `params.pageToken` | `string` | No | A page token received from a previous call to ListExecutions. All other parameters must match. |
| `params.showDeleted` | `boolean` | No | If true, returns deleted (but unexpired) resources along with active ones. |

#### `projects.locations.jobs.executions.delete()`

Deletes an Execution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Execution to delete. Format: `projects/{project}/locations/{location}/jobs/{job}/executions/{execution}`, where `{project}` can be project id or number. |
| `params.validateOnly` | `boolean` | No | Indicates that the request should be validated without actually deleting any resources. |
| `params.etag` | `string` | No | A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates. |

#### `projects.locations.jobs.executions.cancel()`

Cancels an Execution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Execution to cancel. Format: `projects/{project}/locations/{location}/jobs/{job}/executions/{execution}`, where `{project}` can be project id or number. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.jobs.executions.tasks`

#### `projects.locations.jobs.executions.tasks.get()`

Gets information about a Task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full name of the Task. Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution}/tasks/{task} |

#### `projects.locations.jobs.executions.tasks.list()`

Lists Tasks from an Execution of a Job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Execution from which the Tasks should be listed. To list all Tasks across Executions of a Job, use "-" instead of Execution name. To list all Tasks across Jobs, use "-" instead of Job name. Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution} |
| `params.pageSize` | `integer` | No | Maximum number of Tasks to return in this call. |
| `params.pageToken` | `string` | No | A page token received from a previous call to ListTasks. All other parameters must match. |
| `params.showDeleted` | `boolean` | No | If true, returns deleted (but unexpired) resources along with active ones. |

### `projects.locations.services`

#### `projects.locations.services.create()`

Creates a new Service in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location and project in which this service should be created. Format: projects/{project}/locations/{location}, where {project} can be project id or number. Only lowercase characters, digits, and hyphens. |
| `params.serviceId` | `string` | No | Required. The unique identifier for the Service. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the service becomes {parent}/services/{service_id}. |
| `params.validateOnly` | `boolean` | No | Indicates that the request should be validated and default values populated, without persisting the request or creating any resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.services.get()`

Gets information about a Service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number. |

#### `projects.locations.services.list()`

Lists Services. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: projects/{project}/locations/{location}, where {project} can be project id or number. |
| `params.pageSize` | `integer` | No | Maximum number of Services to return in this call. |
| `params.pageToken` | `string` | No | A page token received from a previous call to ListServices. All other parameters must match. |
| `params.showDeleted` | `boolean` | No | If true, returns deleted (but unexpired) resources along with active ones. |

#### `projects.locations.services.patch()`

Updates a Service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/{project}/locations/{location}/services/{service_id} |
| `params.updateMask` | `string` | No | Optional. The list of fields to be updated. |
| `params.validateOnly` | `boolean` | No | Indicates that the request should be validated and default values populated, without persisting the request or updating any resources. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and if the Service does not exist, it will create a new one. The caller must have 'run.services.create' permissions if this is set to true and the Service does not exist. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.services.delete()`

Deletes a Service. This will cause the Service to stop serving traffic and will delete all revisions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number. |
| `params.validateOnly` | `boolean` | No | Indicates that the request should be validated without actually deleting any resources. |
| `params.etag` | `string` | No | A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. |

#### `projects.locations.services.getIamPolicy()`

Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.services.setIamPolicy()`

Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.services.testIamPermissions()`

Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.services.revisions`

#### `projects.locations.services.revisions.exportStatus()`

Read the status of an image export operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource of which image export operation status has to be fetched. Format: `projects/{project_id_or_number}/locations/{location}/services/{service}/revisions/{revision}` for Revision `projects/{project_id_or_number}/locations/{location}/jobs/{job}/executions/{execution}` for Execution |
| `params.operationId` | `string` | Yes | Required. The operation id returned from ExportImage. |

#### `projects.locations.services.revisions.get()`

Gets information about a Revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full name of the Revision. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision} |

#### `projects.locations.services.revisions.list()`

Lists Revisions from a given Service, or from a given location. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Service from which the Revisions should be listed. To list all Revisions across Services, use "-" instead of Service name. Format: projects/{project}/locations/{location}/services/{service} |
| `params.pageSize` | `integer` | No | Maximum number of revisions to return in this call. |
| `params.pageToken` | `string` | No | A page token received from a previous call to ListRevisions. All other parameters must match. |
| `params.showDeleted` | `boolean` | No | If true, returns deleted (but unexpired) resources along with active ones. |

#### `projects.locations.services.revisions.delete()`

Deletes a Revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Revision to delete. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision} |
| `params.validateOnly` | `boolean` | No | Indicates that the request should be validated without actually deleting any resources. |
| `params.etag` | `string` | No | A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates. |

### `projects.locations.workerPools`

#### `projects.locations.workerPools.create()`

Creates a new WorkerPool in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location and project in which this worker pool should be created. Format: `projects/{project}/locations/{location}`, where `{project}` can be project id or number. Only lowercase characters, digits, and hyphens. |
| `params.workerPoolId` | `string` | No | Required. The unique identifier for the WorkerPool. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the worker pool becomes `{parent}/workerPools/{worker_pool_id}`. |
| `params.validateOnly` | `boolean` | No | Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workerPools.get()`

Gets information about a WorkerPool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full name of the WorkerPool. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`, where `{project}` can be project id or number. |

#### `projects.locations.workerPools.list()`

Lists WorkerPools. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: `projects/{project}/locations/{location}`, where `{project}` can be project id or number. |
| `params.pageSize` | `integer` | No | Maximum number of WorkerPools to return in this call. |
| `params.pageToken` | `string` | No | A page token received from a previous call to ListWorkerPools. All other parameters must match. |
| `params.showDeleted` | `boolean` | No | If true, returns deleted (but unexpired) resources along with active ones. |

#### `projects.locations.workerPools.patch()`

Updates a WorkerPool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The fully qualified name of this WorkerPool. In CreateWorkerPoolRequest, this field is ignored, and instead composed from CreateWorkerPoolRequest.parent and CreateWorkerPoolRequest.worker_id. Format: `projects/{project}/locations/{location}/workerPools/{worker_id}` |
| `params.updateMask` | `string` | No | Optional. The list of fields to be updated. |
| `params.validateOnly` | `boolean` | No | Optional. Indicates that the request should be validated and default values populated, without persisting the request or updating any resources. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and if the WorkerPool does not exist, it will create a new one. The caller must have 'run.workerpools.create' permissions if this is set to true and the WorkerPool does not exist. |
| `params.forceNewRevision` | `boolean` | No | Optional. If set to true, a new revision will be created from the template even if the system doesn't detect any changes from the previously deployed revision. This may be useful for cases where the underlying resources need to be recreated or reinitialized. For example if the image is specified by label, but the underlying image digest has changed) or if the container performs deployment initialization work that needs to be performed again. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workerPools.delete()`

Deletes a WorkerPool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full name of the WorkerPool. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`, where `{project}` can be project id or number. |
| `params.validateOnly` | `boolean` | No | Optional. Indicates that the request should be validated without actually deleting any resources. |
| `params.etag` | `string` | No | A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. |

#### `projects.locations.workerPools.getIamPolicy()`

Gets the IAM Access Control policy currently in effect for the given Cloud Run WorkerPool. This result does not include any inherited policies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.workerPools.setIamPolicy()`

Sets the IAM Access control policy for the specified WorkerPool. Overwrites any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workerPools.testIamPermissions()`

Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.workerPools.revisions`

#### `projects.locations.workerPools.revisions.get()`

Gets information about a Revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full name of the Revision. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision} |

#### `projects.locations.workerPools.revisions.list()`

Lists Revisions from a given Service, or from a given location. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Service from which the Revisions should be listed. To list all Revisions across Services, use "-" instead of Service name. Format: projects/{project}/locations/{location}/services/{service} |
| `params.pageSize` | `integer` | No | Maximum number of revisions to return in this call. |
| `params.pageToken` | `string` | No | A page token received from a previous call to ListRevisions. All other parameters must match. |
| `params.showDeleted` | `boolean` | No | If true, returns deleted (but unexpired) resources along with active ones. |

#### `projects.locations.workerPools.revisions.delete()`

Deletes a Revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Revision to delete. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision} |
| `params.validateOnly` | `boolean` | No | Indicates that the request should be validated without actually deleting any resources. |
| `params.etag` | `string` | No | A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates. |