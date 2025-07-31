# BigQuery API - Apps Script Client Library

Auto-generated client library for using the **BigQuery API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:23:08 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:22:09 GMT
- **Created:** Sun, 20 Jul 2025 16:14:02 GMT



---

## API Reference

### `datasets`

#### `datasets.delete()`

Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of dataset being deleted |
| `params.deleteContents` | `boolean` | No | If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False |
| `params.projectId` | `string` | Yes | Required. Project ID of the dataset being deleted |

#### `datasets.get()`

Returns the dataset specified by datasetID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accessPolicyVersion` | `integer` | No | Optional. The version of the access policy schema to fetch. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for conditional access policy binding in datasets must specify version 3. Dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. This field will be mapped to [IAM Policy version] (https://cloud.google.com/iam/docs/policies#versions) and will be used to fetch policy from IAM. If unset or if 0 or 1 value is used for dataset with conditional bindings, access entry with condition will have role string appended by 'withcond' string followed by a hash value. For example : { "access": [ { "role": "roles/bigquery.dataViewer_with_conditionalbinding_7a34awqsda", "userByEmail": "user@example.com", } ] } Please refer https://cloud.google.com/iam/docs/troubleshooting-withcond for more details. |
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the requested dataset |
| `params.datasetView` | `string` | No | Optional. Specifies the view that determines which dataset information is returned. By default, metadata and ACL information are returned. |
| `params.projectId` | `string` | Yes | Required. Project ID of the requested dataset |

#### `datasets.insert()`

Creates a new empty dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accessPolicyVersion` | `integer` | No | Optional. The version of the provided access policy schema. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. This version refers to the schema version of the access policy and not the version of access policy. This field's value can be equal or more than the access policy schema provided in the request. For example, * Requests with conditional access policy binding in datasets must specify version 3. * But dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. If unset or if 0 or 1 value is used for dataset with conditional bindings, request will be rejected. This field will be mapped to IAM Policy version (https://cloud.google.com/iam/docs/policies#versions) and will be used to set policy in IAM. |
| `params.projectId` | `string` | Yes | Required. Project ID of the new dataset |
| `params.resource` | `object` | Yes | The request body. |

#### `datasets.list()`

Lists all datasets in the specified project to which the user has been granted the READER dataset role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.all` | `boolean` | No | Whether to list all datasets, including hidden ones |
| `params.filter` | `string` | No | An expression for filtering the results of the request by label. The syntax is `labels.[:]`. Multiple filters can be AND-ed together by connecting with a space. Example: `labels.department:receiving labels.active`. See [Filtering datasets using labels](https://cloud.google.com/bigquery/docs/filtering-labels#filtering_datasets_using_labels) for details. |
| `params.maxResults` | `integer` | No | The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call, to request the next page of results |
| `params.projectId` | `string` | Yes | Required. Project ID of the datasets to be listed |

#### `datasets.patch()`

Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports RFC5789 patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accessPolicyVersion` | `integer` | No | Optional. The version of the provided access policy schema. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. This version refers to the schema version of the access policy and not the version of access policy. This field's value can be equal or more than the access policy schema provided in the request. For example, * Operations updating conditional access policy binding in datasets must specify version 3. Some of the operations are : - Adding a new access policy entry with condition. - Removing an access policy entry with condition. - Updating an access policy entry with condition. * But dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. If unset or if 0 or 1 value is used for dataset with conditional bindings, request will be rejected. This field will be mapped to IAM Policy version (https://cloud.google.com/iam/docs/policies#versions) and will be used to set policy in IAM. |
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the dataset being updated |
| `params.projectId` | `string` | Yes | Required. Project ID of the dataset being updated |
| `params.updateMode` | `string` | No | Optional. Specifies the fields of dataset that update/patch operation is targeting By default, both metadata and ACL fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `datasets.undelete()`

Undeletes a dataset which is within time travel window based on datasetId. If a time is specified, the dataset version deleted at that time is undeleted, else the last live version is undeleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of dataset being deleted |
| `params.projectId` | `string` | Yes | Required. Project ID of the dataset to be undeleted |
| `params.resource` | `object` | Yes | The request body. |

#### `datasets.update()`

Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accessPolicyVersion` | `integer` | No | Optional. The version of the provided access policy schema. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. This version refers to the schema version of the access policy and not the version of access policy. This field's value can be equal or more than the access policy schema provided in the request. For example, * Operations updating conditional access policy binding in datasets must specify version 3. Some of the operations are : - Adding a new access policy entry with condition. - Removing an access policy entry with condition. - Updating an access policy entry with condition. * But dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. If unset or if 0 or 1 value is used for dataset with conditional bindings, request will be rejected. This field will be mapped to IAM Policy version (https://cloud.google.com/iam/docs/policies#versions) and will be used to set policy in IAM. |
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the dataset being updated |
| `params.projectId` | `string` | Yes | Required. Project ID of the dataset being updated |
| `params.updateMode` | `string` | No | Optional. Specifies the fields of dataset that update/patch operation is targeting By default, both metadata and ACL fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

### `jobs`

#### `jobs.cancel()`

Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.jobId` | `string` | Yes | Required. Job ID of the job to cancel |
| `params.location` | `string` | No | The geographic location of the job. You must [specify the location](https://cloud.google.com/bigquery/docs/locations#specify_locations) to run the job for the following scenarios: * If the location to run a job is not in the `us` or the `eu` multi-regional location * If the job's location is in a single region (for example, `us-central1`) |
| `params.projectId` | `string` | Yes | Required. Project ID of the job to cancel |

#### `jobs.delete()`

Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.jobId` | `string` | Yes | Required. Job ID of the job for which metadata is to be deleted. If this is a parent job which has child jobs, the metadata from all child jobs will be deleted as well. Direct deletion of the metadata of child jobs is not allowed. |
| `params.location` | `string` | No | The geographic location of the job. Required. For more information, see how to [specify locations](https://cloud.google.com/bigquery/docs/locations#specify_locations). |
| `params.projectId` | `string` | Yes | Required. Project ID of the job for which metadata is to be deleted. |

#### `jobs.get()`

Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.jobId` | `string` | Yes | Required. Job ID of the requested job. |
| `params.location` | `string` | No | The geographic location of the job. You must specify the location to run the job for the following scenarios: * If the location to run a job is not in the `us` or the `eu` multi-regional location * If the job's location is in a single region (for example, `us-central1`) For more information, see how to [specify locations](https://cloud.google.com/bigquery/docs/locations#specify_locations). |
| `params.projectId` | `string` | Yes | Required. Project ID of the requested job. |

#### `jobs.getQueryResults()`

RPC to get the results of a query job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.formatOptions.timestampOutputFormat` | `string` | No | Optional. The API output format for a timestamp. This offers more explicit control over the timestamp output format as compared to the existing `use_int64_timestamp` option. |
| `params.formatOptions.useInt64Timestamp` | `boolean` | No | Optional. Output timestamp as usec int64. Default is false. |
| `params.jobId` | `string` | Yes | Required. Job ID of the query job. |
| `params.location` | `string` | No | The geographic location of the job. You must specify the location to run the job for the following scenarios: * If the location to run a job is not in the `us` or the `eu` multi-regional location * If the job's location is in a single region (for example, `us-central1`) For more information, see how to [specify locations](https://cloud.google.com/bigquery/docs/locations#specify_locations). |
| `params.maxResults` | `integer` | No | Maximum number of results to read. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call, to request the next page of results. |
| `params.projectId` | `string` | Yes | Required. Project ID of the query job. |
| `params.startIndex` | `string` | No | Zero-based index of the starting row. |
| `params.timeoutMs` | `integer` | No | Optional: Specifies the maximum amount of time, in milliseconds, that the client is willing to wait for the query to complete. By default, this limit is 10 seconds (10,000 milliseconds). If the query is complete, the jobComplete field in the response is true. If the query has not yet completed, jobComplete is false. You can request a longer timeout period in the timeoutMs field. However, the call is not guaranteed to wait for the specified timeout; it typically returns after around 200 seconds (200,000 milliseconds), even if the query is not complete. If jobComplete is false, you can continue to wait for the query to complete by calling the getQueryResults method until the jobComplete field in the getQueryResults response is true. |

#### `jobs.insert()`

Starts a new asynchronous job. This API has two different kinds of endpoint URIs, as this method supports a variety of use cases.

* The *Metadata* URI is used for most interactions, as it accepts the job configuration directly.

* The *Upload* URI is ONLY for the case when you're sending both a load job configuration and a data stream together. In this case, the Upload URI accepts the job configuration and the data as two distinct multipart MIME parts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Project ID of project that will be billed for the job. |
| `params.resource` | `object` | Yes | The request body. |

#### `jobs.list()`

Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.allUsers` | `boolean` | No | Whether to display jobs owned by all users in the project. Default False. |
| `params.maxCreationTime` | `string` | No | Max value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created before or at this timestamp are returned. |
| `params.maxResults` | `integer` | No | The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection. |
| `params.minCreationTime` | `string` | No | Min value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created after or at this timestamp are returned. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call, to request the next page of results. |
| `params.parentJobId` | `string` | No | If set, show only child jobs of the specified parent. Otherwise, show all top-level jobs. |
| `params.projectId` | `string` | Yes | Project ID of the jobs to list. |
| `params.projection` | `string` | No | Restrict information returned to a set of selected fields |
| `params.stateFilter` | `string` | No | Filter for job state |

#### `jobs.query()`

Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. Project ID of the query request. |
| `params.resource` | `object` | Yes | The request body. |

### `models`

#### `models.delete()`

Deletes the model specified by modelId from the dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the model to delete. |
| `params.modelId` | `string` | Yes | Required. Model ID of the model to delete. |
| `params.projectId` | `string` | Yes | Required. Project ID of the model to delete. |

#### `models.get()`

Gets the specified model resource by model ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the requested model. |
| `params.modelId` | `string` | Yes | Required. Model ID of the requested model. |
| `params.projectId` | `string` | Yes | Required. Project ID of the requested model. |

#### `models.list()`

Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the models to list. |
| `params.maxResults` | `integer` | No | The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call to request the next page of results |
| `params.projectId` | `string` | Yes | Required. Project ID of the models to list. |

#### `models.patch()`

Patch specific fields in the specified model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the model to patch. |
| `params.modelId` | `string` | Yes | Required. Model ID of the model to patch. |
| `params.projectId` | `string` | Yes | Required. Project ID of the model to patch. |
| `params.resource` | `object` | Yes | The request body. |

### `projects`

#### `projects.getServiceAccount()`

RPC to get the service account for a project used for interactions with Google Cloud KMS

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. ID of the project. |

#### `projects.list()`

RPC to list projects to which the user has been granted any project role. Users of this method are encouraged to consider the [Resource Manager](https://cloud.google.com/resource-manager/docs/) API, which provides the underlying data for this method and has more capabilities.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | `maxResults` unset returns all results, up to 50 per page. Additionally, the number of projects in a page may be fewer than `maxResults` because projects are retrieved and then filtered to only projects with the BigQuery API enabled. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call, to request the next page of results. If not present, no further pages are present. |

### `routines`

#### `routines.delete()`

Deletes the routine specified by routineId from the dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the routine to delete |
| `params.projectId` | `string` | Yes | Required. Project ID of the routine to delete |
| `params.routineId` | `string` | Yes | Required. Routine ID of the routine to delete |

#### `routines.get()`

Gets the specified routine resource by routine ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the requested routine |
| `params.projectId` | `string` | Yes | Required. Project ID of the requested routine |
| `params.readMask` | `string` | No | If set, only the Routine fields in the field mask are returned in the response. If unset, all Routine fields are returned. |
| `params.routineId` | `string` | Yes | Required. Routine ID of the requested routine |

#### `routines.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `routines.insert()`

Creates a new routine in the dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the new routine |
| `params.projectId` | `string` | Yes | Required. Project ID of the new routine |
| `params.resource` | `object` | Yes | The request body. |

#### `routines.list()`

Lists all routines in the specified dataset. Requires the READER dataset role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the routines to list |
| `params.filter` | `string` | No | If set, then only the Routines matching this filter are returned. The supported format is `routineType:{RoutineType}`, where `{RoutineType}` is a RoutineType enum. For example: `routineType:SCALAR_FUNCTION`. |
| `params.maxResults` | `integer` | No | The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call, to request the next page of results |
| `params.projectId` | `string` | Yes | Required. Project ID of the routines to list |
| `params.readMask` | `string` | No | If set, then only the Routine fields in the field mask, as well as project_id, dataset_id and routine_id, are returned in the response. If unset, then the following Routine fields are returned: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, and language. |

#### `routines.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `routines.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `routines.update()`

Updates information in an existing routine. The update method replaces the entire Routine resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the routine to update |
| `params.projectId` | `string` | Yes | Required. Project ID of the routine to update |
| `params.routineId` | `string` | Yes | Required. Routine ID of the routine to update |
| `params.resource` | `object` | Yes | The request body. |

### `rowAccessPolicies`

#### `rowAccessPolicies.batchDelete()`

Deletes provided row access policies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the table to delete the row access policies. |
| `params.projectId` | `string` | Yes | Required. Project ID of the table to delete the row access policies. |
| `params.tableId` | `string` | Yes | Required. Table ID of the table to delete the row access policies. |
| `params.resource` | `object` | Yes | The request body. |

#### `rowAccessPolicies.delete()`

Deletes a row access policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the table to delete the row access policy. |
| `params.force` | `boolean` | No | If set to true, it deletes the row access policy even if it's the last row access policy on the table and the deletion will widen the access rather narrowing it. |
| `params.policyId` | `string` | Yes | Required. Policy ID of the row access policy. |
| `params.projectId` | `string` | Yes | Required. Project ID of the table to delete the row access policy. |
| `params.tableId` | `string` | Yes | Required. Table ID of the table to delete the row access policy. |

#### `rowAccessPolicies.get()`

Gets the specified row access policy by policy ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the table to get the row access policy. |
| `params.policyId` | `string` | Yes | Required. Policy ID of the row access policy. |
| `params.projectId` | `string` | Yes | Required. Project ID of the table to get the row access policy. |
| `params.tableId` | `string` | Yes | Required. Table ID of the table to get the row access policy. |

#### `rowAccessPolicies.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `rowAccessPolicies.insert()`

Creates a row access policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the table to get the row access policy. |
| `params.projectId` | `string` | Yes | Required. Project ID of the table to get the row access policy. |
| `params.tableId` | `string` | Yes | Required. Table ID of the table to get the row access policy. |
| `params.resource` | `object` | Yes | The request body. |

#### `rowAccessPolicies.list()`

Lists all row access policies on the specified table.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of row access policies to list. |
| `params.pageSize` | `integer` | No | The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call, to request the next page of results. |
| `params.projectId` | `string` | Yes | Required. Project ID of the row access policies to list. |
| `params.tableId` | `string` | Yes | Required. Table ID of the table to list row access policies. |

#### `rowAccessPolicies.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `rowAccessPolicies.update()`

Updates a row access policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the table to get the row access policy. |
| `params.policyId` | `string` | Yes | Required. Policy ID of the row access policy. |
| `params.projectId` | `string` | Yes | Required. Project ID of the table to get the row access policy. |
| `params.tableId` | `string` | Yes | Required. Table ID of the table to get the row access policy. |
| `params.resource` | `object` | Yes | The request body. |

### `tabledata`

#### `tabledata.insertAll()`

Streams data into BigQuery one record at a time without needing to run a load job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the destination. |
| `params.projectId` | `string` | Yes | Required. Project ID of the destination. |
| `params.tableId` | `string` | Yes | Required. Table ID of the destination. |
| `params.resource` | `object` | Yes | The request body. |

#### `tabledata.list()`

List the content of a table in rows.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset id of the table to list. |
| `params.formatOptions.timestampOutputFormat` | `string` | No | Optional. The API output format for a timestamp. This offers more explicit control over the timestamp output format as compared to the existing `use_int64_timestamp` option. |
| `params.formatOptions.useInt64Timestamp` | `boolean` | No | Optional. Output timestamp as usec int64. Default is false. |
| `params.maxResults` | `integer` | No | Row limit of the table. |
| `params.pageToken` | `string` | No | To retrieve the next page of table data, set this field to the string provided in the pageToken field of the response body from your previous call to tabledata.list. |
| `params.projectId` | `string` | Yes | Required. Project id of the table to list. |
| `params.selectedFields` | `string` | No | Subset of fields to return, supports select into sub fields. Example: selected_fields = "a,e.d.f"; |
| `params.startIndex` | `string` | No | Start row index of the table. |
| `params.tableId` | `string` | Yes | Required. Table id of the table to list. |

### `tables`

#### `tables.delete()`

Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the table to delete |
| `params.projectId` | `string` | Yes | Required. Project ID of the table to delete |
| `params.tableId` | `string` | Yes | Required. Table ID of the table to delete |

#### `tables.get()`

Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the requested table |
| `params.projectId` | `string` | Yes | Required. Project ID of the requested table |
| `params.selectedFields` | `string` | No | List of table schema fields to return (comma-separated). If unspecified, all fields are returned. A fieldMask cannot be used here because the fields will automatically be converted from camelCase to snake_case and the conversion will fail if there are underscores. Since these are fields in BigQuery table schemas, underscores are allowed. |
| `params.tableId` | `string` | Yes | Required. Table ID of the requested table |
| `params.view` | `string` | No | Optional. Specifies the view that determines which table information is returned. By default, basic table information and storage statistics (STORAGE_STATS) are returned. |

#### `tables.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `tables.insert()`

Creates a new, empty table in the dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the new table |
| `params.projectId` | `string` | Yes | Required. Project ID of the new table |
| `params.resource` | `object` | Yes | The request body. |

#### `tables.list()`

Lists all tables in the specified dataset. Requires the READER dataset role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the tables to list |
| `params.maxResults` | `integer` | No | The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call, to request the next page of results |
| `params.projectId` | `string` | Yes | Required. Project ID of the tables to list |

#### `tables.patch()`

Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports RFC5789 patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.autodetect_schema` | `boolean` | No | Optional.  When true will autodetect schema, else will keep original schema |
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the table to update |
| `params.projectId` | `string` | Yes | Required. Project ID of the table to update |
| `params.tableId` | `string` | Yes | Required. Table ID of the table to update |
| `params.resource` | `object` | Yes | The request body. |

#### `tables.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `tables.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `tables.update()`

Updates information in an existing table. The update method replaces the entire Table resource, whereas the patch method only replaces fields that are provided in the submitted Table resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.autodetect_schema` | `boolean` | No | Optional.  When true will autodetect schema, else will keep original schema |
| `params.datasetId` | `string` | Yes | Required. Dataset ID of the table to update |
| `params.projectId` | `string` | Yes | Required. Project ID of the table to update |
| `params.tableId` | `string` | Yes | Required. Table ID of the table to update |
| `params.resource` | `object` | Yes | The request body. |