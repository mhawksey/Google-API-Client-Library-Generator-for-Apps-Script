# Security Posture API - Apps Script Client Library

Auto-generated client library for using the **Security Posture API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:54:29 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:45:57 GMT
- **Created:** Sun, 20 Jul 2025 16:53:56 GMT



---

## API Reference

### `organizations`

### `organizations.locations`

### `organizations.locations.operations`

#### `organizations.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `organizations.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `organizations.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `organizations.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.locations.postures`

#### `organizations.locations.postures.list()`

Lists the most recent revisions of all Posture resources in a specified organization and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, in the format `organizations/{organization}/locations/global`. |
| `params.pageSize` | `integer` | No | The maximum number of postures to return. The default value is `500`. If you exceed the maximum value of `1000`, then the service uses the maximum value. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous request to list postures. Provide this token to retrieve the next page of results. |
| `params.filter` | `string` | No | Optional. A filter to apply to the list of postures, in the format defined in [AIP-160: Filtering](https://google.aip.dev/160). |

#### `organizations.locations.postures.listRevisions()`

Lists all revisions of a single Posture.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Posture, in the format `organizations/{organization}/locations/global/postures/{posture_id}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of posture revisions to return. The default value is `500`. If you exceed the maximum value of `1000`, then the service uses the maximum value. |
| `params.pageToken` | `string` | No | Optional. A pagination token from a previous request to list posture revisions. Provide this token to retrieve the next page of results. |

#### `organizations.locations.postures.get()`

Gets a single revision of a Posture.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Posture, in the format `organizations/{organization}/locations/global/postures/{posture_id}`. |
| `params.revisionId` | `string` | No | Optional. The posture revision to retrieve. If not specified, the most recently updated revision is retrieved. |

#### `organizations.locations.postures.create()`

Creates a new Posture.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, in the format `organizations/{organization}/locations/global`. |
| `params.postureId` | `string` | No | Required. An identifier for the posture. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.postures.patch()`

Updates a revision of an existing Posture. If the posture revision that you update is currently deployed, then a new revision of the posture is created. To prevent concurrent updates from overwriting each other, always follow the read-modify-write pattern when you update a posture: 1. Call GetPosture to get the current version of the posture. 2. Update the fields in the posture as needed. 3. Call UpdatePosture to update the posture. Ensure that your request includes the `etag` value from the GetPosture response. **Important:** If you omit the `etag` when you call UpdatePosture, then the updated posture unconditionally overwrites the existing posture.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. The name of the posture, in the format `organizations/{organization}/locations/global/postures/{posture_id}`. |
| `params.updateMask` | `string` | No | Required. The fields in the Posture to update. You can update only the following fields: * Posture.description * Posture.policy_sets * Posture.state |
| `params.revisionId` | `string` | No | Required. The revision ID of the posture to update. If the posture revision that you update is currently deployed, then a new revision of the posture is created. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.postures.delete()`

Deletes all revisions of a Posture. You can only delete a posture if none of its revisions are deployed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Posture, in the format `organizations/{organization}/locations/global/postures/{posture_id}`. |
| `params.etag` | `string` | No | Optional. An opaque identifier for the current version of the posture. If you provide this value, then it must match the existing value. If the values don't match, then the request fails with an ABORTED error. If you omit this value, then the posture is deleted regardless of its current `etag` value. |

#### `organizations.locations.postures.extract()`

Extracts existing policies from an organization, folder, or project, and applies them to another organization, folder, or project as a Posture. If the other organization, folder, or project already has a posture, then the result of the long-running operation is an ALREADY_EXISTS error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, in the format `organizations/{organization}/locations/global`. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.locations.postureDeployments`

#### `organizations.locations.postureDeployments.list()`

Lists every PostureDeployment in a project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, in the format `organizations/{organization}/locations/global`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of posture deployments to return. The default value is `500`. If you exceed the maximum value of `1000`, then the service uses the maximum value. |
| `params.pageToken` | `string` | No | Optional. A pagination token returned from a previous request to list posture deployments. Provide this token to retrieve the next page of results. |
| `params.filter` | `string` | No | Optional. A filter to apply to the list of postures, in the format defined in [AIP-160: Filtering](https://google.aip.dev/160). |

#### `organizations.locations.postureDeployments.get()`

Gets details for a PostureDeployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the PostureDeployment, in the format `organizations/{organization}/locations/global/postureDeployments/{posture_deployment_id}`. |

#### `organizations.locations.postureDeployments.create()`

Creates a new PostureDeployment in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, in the format `organizations/{organization}/locations/global`. |
| `params.postureDeploymentId` | `string` | No | Required. An identifier for the posture deployment. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.postureDeployments.patch()`

Updates an existing PostureDeployment. To prevent concurrent updates from overwriting each other, always follow the read-modify-write pattern when you update a posture deployment: 1. Call GetPostureDeployment to get the current version of the deployment. 2. Update the fields in the deployment as needed. 3. Call UpdatePostureDeployment to update the deployment. Ensure that your request includes the `etag` value from the GetPostureDeployment response. **Important:** If you omit the `etag` when you call UpdatePostureDeployment, then the updated deployment unconditionally overwrites the existing deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. The name of the posture deployment, in the format `organizations/{organization}/locations/global/postureDeployments/{deployment_id}`. |
| `params.updateMask` | `string` | No | Required. The fields in the PostureDeployment to update. You can update only the following fields: * PostureDeployment.posture_id * PostureDeployment.posture_revision_id |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.postureDeployments.delete()`

Deletes a PostureDeployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the posture deployment, in the format `organizations/{organization}/locations/global/postureDeployments/{posture_id}`. |
| `params.etag` | `string` | No | Optional. An opaque identifier for the current version of the posture deployment. If you provide this value, then it must match the existing value. If the values don't match, then the request fails with an ABORTED error. If you omit this value, then the posture deployment is deleted regardless of its current `etag` value. |

### `organizations.locations.postureTemplates`

#### `organizations.locations.postureTemplates.list()`

Lists every PostureTemplate in a given organization and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, in the format `organizations/{organization}/locations/global`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of posture templates to return. The default value is `500`. If you exceed the maximum value of `1000`, then the service uses the maximum value. |
| `params.pageToken` | `string` | No | Optional. A pagination token returned from a previous request to list posture templates. Provide this token to retrieve the next page of results. |
| `params.filter` | `string` | No | Optional. A filter to apply to the list of postures, in the format defined in [AIP-160: Filtering](https://google.aip.dev/160). |

#### `organizations.locations.postureTemplates.get()`

Gets a single revision of a PostureTemplate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the PostureTemplate, in the format `organizations/{organization}/locations/global/postureTemplates/{posture_template}`. |
| `params.revisionId` | `string` | No | Optional. The posture template revision to retrieve. If not specified, the most recently updated revision is retrieved. |

### `organizations.locations.reports`

#### `organizations.locations.reports.list()`

Lists every Report in a given organization and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, in the format `organizations/{organization}/locations/global`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of reports to return. The default value is `500`. If you exceed the maximum value of `1000`, then the service uses the maximum value. |
| `params.pageToken` | `string` | No | Optional. A pagination token returned from a previous request to list reports. Provide this token to retrieve the next page of results. |
| `params.filter` | `string` | No | Optional. A filter to apply to the list of reports, in the format defined in [AIP-160: Filtering](https://google.aip.dev/160). |

#### `organizations.locations.reports.get()`

Gets details for a Report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the report, in the format `organizations/{organization}/locations/global/reports/{report_id}`. |

#### `organizations.locations.reports.createIaCValidationReport()`

Validates a specified infrastructure-as-code (IaC) configuration, and creates a Report with the validation results. Only Terraform configurations are supported. Only modified assets are validated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, in the format `organizations/{organization}/locations/global`. |
| `params.resource` | `object` | Yes | The request body. |

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
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |