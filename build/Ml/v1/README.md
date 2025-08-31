# AI Platform Training & Prediction API - Apps Script Client Library

Auto-generated client library for using the **AI Platform Training & Prediction API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:44:39 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:33:01 GMT
- **Created:** Sun, 20 Jul 2025 16:43:18 GMT



---

## API Reference

### `projects`

#### `projects.predict()`

Performs online prediction on the data in the request. {% dynamic include "/ai-platform/includes/___predict-request" %} 

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of a model or a version. Authorization: requires the `predict` permission on the specified resource. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.explain()`

Performs explanation on the data in the request. {% dynamic include "/ai-platform/includes/___explain-request" %} 

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of a model or a version. Authorization: requires the `predict` permission on the specified resource. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.getConfig()`

Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The project name. |

### `projects.jobs`

#### `projects.jobs.create()`

Creates a training or a batch prediction job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.jobs.list()`

Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: {}.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project for which to list jobs. |
| `params.filter` | `string` | No | Optional. Specifies the subset of jobs to retrieve. You can filter on the value of one or more attributes of the job object. For example, retrieve jobs with a job identifier that starts with 'census': gcloud ai-platform jobs list --filter='jobId:census*' List all failed jobs with names that start with 'rnn': gcloud ai-platform jobs list --filter='jobId:rnn* AND state:FAILED' For more examples, see the guide to monitoring jobs. |
| `params.pageToken` | `string` | No | Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call. |
| `params.pageSize` | `integer` | No | Optional. The number of jobs to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100. |

#### `projects.jobs.get()`

Describes a job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the job to get the description of. |

#### `projects.jobs.cancel()`

Cancels a running job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the job to cancel. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.jobs.patch()`

Updates a specific job resource. Currently the only supported fields to update are `labels`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The job name. |
| `params.updateMask` | `string` | No | Required. Specifies the path, relative to `Job`, of the field to update. To adopt etag mechanism, include `etag` field in the mask, and include the `etag` value in your job resource. For example, to change the labels of a job, the `update_mask` parameter would be specified as `labels`, `etag`, and the `PATCH` request body would specify the new value, as follows: { "labels": { "owner": "Google", "color": "Blue" } "etag": "33a64df551425fcc55e4d42a148795d9f25f89d4" } If `etag` matches the one on the server, the labels of the job will be replaced with the given ones, and the server end `etag` will be recalculated. Currently the only supported update masks are `labels` and `etag`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.jobs.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.jobs.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.jobs.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations`

#### `projects.locations.get()`

Get the complete list of CMLE capabilities in a location, along with their location-specific properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the location. |

#### `projects.locations.list()`

List all locations that provides at least one type of CMLE capability.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project for which available locations are to be listed (since some locations might be whitelisted for specific projects). |
| `params.pageToken` | `string` | No | Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call. |
| `params.pageSize` | `integer` | No | Optional. The number of locations to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100. |

### `projects.locations.operations`

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `projects.locations.studies`

#### `projects.locations.studies.create()`

Creates a study.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location that the study belongs to. Format: projects/{project}/locations/{location} |
| `params.studyId` | `string` | No | Required. The ID to use for the study, which will become the final component of the study's resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.studies.get()`

Gets a study.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The study name. |

#### `projects.locations.studies.list()`

Lists all the studies in a region for an associated project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location that the study belongs to. Format: projects/{project}/locations/{location} |

#### `projects.locations.studies.delete()`

Deletes a study.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The study name. |

### `projects.locations.studies.trials`

#### `projects.locations.studies.trials.suggest()`

Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the study that the trial belongs to. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.studies.trials.create()`

Adds a user provided trial to a study.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the study that the trial belongs to. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.studies.trials.get()`

Gets a trial.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The trial name. |

#### `projects.locations.studies.trials.list()`

Lists the trials associated with a study.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the study that the trial belongs to. |

#### `projects.locations.studies.trials.addMeasurement()`

Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The trial name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.studies.trials.complete()`

Marks a trial as complete.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The trial name.metat |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.studies.trials.delete()`

Deletes a trial.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The trial name. |

#### `projects.locations.studies.trials.checkEarlyStoppingState()`

Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The trial name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.studies.trials.stop()`

Stops a trial.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The trial name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.studies.trials.listOptimalTrials()`

Lists the pareto-optimal trials for multi-objective study or the optimal trials for single-objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the study that the pareto-optimal trial belongs to. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.operations`

#### `projects.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `projects.models`

#### `projects.models.create()`

Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.models.list()`

Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: {}.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project whose models are to be listed. |
| `params.filter` | `string` | No | Optional. Specifies the subset of models to retrieve. |
| `params.pageToken` | `string` | No | Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call. |
| `params.pageSize` | `integer` | No | Optional. The number of models to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100. |

#### `projects.models.get()`

Gets information about a model, including its name, the description (if set), and the default version (if at least one version of the model has been deployed).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the model. |

#### `projects.models.delete()`

Deletes a model. You can only delete a model if there are no versions in it. You can delete versions by calling projects.models.versions.delete.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the model. |

#### `projects.models.patch()`

Updates a specific model resource. Currently the only supported fields to update are `description` and `default_version.name`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The project name. |
| `params.updateMask` | `string` | No | Required. Specifies the path, relative to `Model`, of the field to update. For example, to change the description of a model to "foo" and set its default version to "version_1", the `update_mask` parameter would be specified as `description`, `default_version.name`, and the `PATCH` request body would specify the new value, as follows: { "description": "foo", "defaultVersion": { "name":"version_1" } } Currently the supported update masks are `description` and `default_version.name`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.models.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.models.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.models.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.models.versions`

#### `projects.models.versions.create()`

Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the model. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.models.versions.patch()`

Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the model. |
| `params.updateMask` | `string` | No | Required. Specifies the path, relative to `Version`, of the field to update. Must be present and non-empty. For example, to change the description of a version to "foo", the `update_mask` parameter would be specified as `description`, and the `PATCH` request body would specify the new value, as follows: ``` { "description": "foo" } ``` Currently the only supported update mask fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`. However, you can only update `manualScaling.nodes` if the version uses a [Compute Engine (N1) machine type](/ml-engine/docs/machine-types-online-prediction). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.models.versions.list()`

Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: {}.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the model for which to list the version. |
| `params.filter` | `string` | No | Optional. Specifies the subset of versions to retrieve. |
| `params.pageToken` | `string` | No | Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call. |
| `params.pageSize` | `integer` | No | Optional. The number of versions to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100. |

#### `projects.models.versions.get()`

Gets information about a model version. Models can have multiple versions. You can call projects.models.versions.list to get the same information that this method returns for all of the versions of a model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the version. |

#### `projects.models.versions.delete()`

Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the version. You can get the names of all the versions of a model by calling projects.models.versions.list. |

#### `projects.models.versions.setDefault()`

Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the version to make the default for the model. You can get the names of all the versions of a model by calling projects.models.versions.list. |
| `params.resource` | `object` | Yes | The request body. |