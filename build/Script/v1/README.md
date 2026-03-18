# Apps Script API - Apps Script Client Library

Auto-generated client library for using the **Apps Script API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Wed, 18 Mar 2026 22:02:16 GMT
- **Last Modified:** Wed, 18 Mar 2026 22:02:16 GMT
- **Created:** Sun, 20 Jul 2025 16:53:23 GMT



---

## API Reference

### `projects`

#### `projects.getMetrics()`

Get metrics data for scripts, such as number of executions and active users.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.metricsFilter.deploymentId` | `string` | No | Optional field indicating a specific deployment to retrieve metrics from. |
| `params.scriptId` | `string` | Yes | Required field indicating the script to get metrics for. |
| `params.metricsGranularity` | `string` | No | Required field indicating what granularity of metrics are returned. |

#### `projects.create()`

Creates a new, empty script project with no script files and a base manifest file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.getContent()`

Gets the content of the script project, including the code source and metadata for each script file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.versionNumber` | `integer` | No | The version number of the project to retrieve. If not provided, the project's HEAD version is returned. |
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |

#### `projects.get()`

Gets a script project's metadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |

#### `projects.updateContent()`

Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.versions`

#### `projects.versions.list()`

List the versions of a script project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response. |
| `params.pageSize` | `integer` | No | The maximum number of versions on each returned page. Defaults to 50. |
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |

#### `projects.versions.create()`

Creates a new immutable version using the current code, with a unique version number.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.versions.get()`

Gets a version of a script project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.versionNumber` | `integer` | Yes | The version number. |
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |

### `projects.deployments`

#### `projects.deployments.update()`

Updates a deployment of an Apps Script project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.deploymentId` | `string` | Yes | The deployment ID for this deployment. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.deployments.delete()`

Deletes a deployment of an Apps Script project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.deploymentId` | `string` | Yes | The deployment ID to be undeployed. |

#### `projects.deployments.list()`

Lists the deployments of an Apps Script project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response. |
| `params.pageSize` | `integer` | No | The maximum number of deployments on each returned page. Defaults to 50. |

#### `projects.deployments.create()`

Creates a deployment of an Apps Script project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.deployments.get()`

Gets a deployment of an Apps Script project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.deploymentId` | `string` | Yes | The deployment ID. |

### `scripts`

#### `scripts.run()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script ID of the script to be executed. Find the script ID on the **Project settings** page under "IDs." As multiple executable APIs can be deployed in new IDE for same script, this field should be populated with DeploymentID generated while deploying in new IDE instead of script ID. |
| `params.requestBody` | `object` | Yes | The request body. |

### `processes`

#### `processes.list()`

List information about processes made by or on behalf of a user, such as process type and current status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userProcessFilter.types` | `string` | No | Optional field used to limit returned processes to those having one of the specified process types. |
| `params.userProcessFilter.scriptId` | `string` | No | Optional field used to limit returned processes to those originating from projects with a specific script ID. |
| `params.pageSize` | `integer` | No | The maximum number of returned processes per page of results. Defaults to 50. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response. |
| `params.userProcessFilter.projectName` | `string` | No | Optional field used to limit returned processes to those originating from projects with project names containing a specific string. |
| `params.userProcessFilter.statuses` | `string` | No | Optional field used to limit returned processes to those having one of the specified process statuses. |
| `params.userProcessFilter.deploymentId` | `string` | No | Optional field used to limit returned processes to those originating from projects with a specific deployment ID. |
| `params.userProcessFilter.userAccessLevels` | `string` | No | Optional field used to limit returned processes to those having one of the specified user access levels. |
| `params.userProcessFilter.functionName` | `string` | No | Optional field used to limit returned processes to those originating from a script function with the given function name. |
| `params.userProcessFilter.startTime` | `string` | No | Optional field used to limit returned processes to those that were started on or after the given timestamp. |
| `params.userProcessFilter.endTime` | `string` | No | Optional field used to limit returned processes to those that completed on or before the given timestamp. |

#### `processes.listScriptProcesses()`

List information about a script's executed processes, such as process type and current status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptProcessFilter.userAccessLevels` | `string` | No | Optional field used to limit returned processes to those having one of the specified user access levels. |
| `params.scriptProcessFilter.functionName` | `string` | No | Optional field used to limit returned processes to those originating from a script function with the given function name. |
| `params.scriptProcessFilter.deploymentId` | `string` | No | Optional field used to limit returned processes to those originating from projects with a specific deployment ID. |
| `params.scriptProcessFilter.types` | `string` | No | Optional field used to limit returned processes to those having one of the specified process types. |
| `params.pageSize` | `integer` | No | The maximum number of returned processes per page of results. Defaults to 50. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response. |
| `params.scriptProcessFilter.startTime` | `string` | No | Optional field used to limit returned processes to those that were started on or after the given timestamp. |
| `params.scriptProcessFilter.endTime` | `string` | No | Optional field used to limit returned processes to those that completed on or before the given timestamp. |
| `params.scriptProcessFilter.statuses` | `string` | No | Optional field used to limit returned processes to those having one of the specified process statuses. |
| `params.scriptId` | `string` | No | The script ID of the project whose processes are listed. |