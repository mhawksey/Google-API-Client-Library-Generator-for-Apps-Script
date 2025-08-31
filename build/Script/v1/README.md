# Apps Script API - Apps Script Client Library

Auto-generated client library for using the **Apps Script API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:54:03 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:45:21 GMT
- **Created:** Sun, 20 Jul 2025 16:53:23 GMT



---

## API Reference

### `projects`

#### `projects.getMetrics()`

Get metrics data for scripts, such as number of executions and active users.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | Required field indicating the script to get metrics for. |
| `params.metricsGranularity` | `string` | No | Required field indicating what granularity of metrics are returned. |
| `params.metricsFilter.deploymentId` | `string` | No | Optional field indicating a specific deployment to retrieve metrics from. |

#### `projects.create()`

Creates a new, empty script project with no script files and a base manifest file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `projects.get()`

Gets a script project's metadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |

#### `projects.getContent()`

Gets the content of the script project, including the code source and metadata for each script file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.versionNumber` | `integer` | No | The version number of the project to retrieve. If not provided, the project's HEAD version is returned. |

#### `projects.updateContent()`

Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.deployments`

#### `projects.deployments.create()`

Creates a deployment of an Apps Script project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.deployments.update()`

Updates a deployment of an Apps Script project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.deploymentId` | `string` | Yes | The deployment ID for this deployment. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.deployments.delete()`

Deletes a deployment of an Apps Script project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.deploymentId` | `string` | Yes | The deployment ID to be undeployed. |

#### `projects.deployments.get()`

Gets a deployment of an Apps Script project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.deploymentId` | `string` | Yes | The deployment ID. |

#### `projects.deployments.list()`

Lists the deployments of an Apps Script project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response. |
| `params.pageSize` | `integer` | No | The maximum number of deployments on each returned page. Defaults to 50. |

### `projects.versions`

#### `projects.versions.create()`

Creates a new immutable version using the current code, with a unique version number.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.versions.get()`

Gets a version of a script project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.versionNumber` | `integer` | Yes | The version number. |

#### `projects.versions.list()`

List the versions of a script project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script project's Drive ID. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response. |
| `params.pageSize` | `integer` | No | The maximum number of versions on each returned page. Defaults to 50. |

### `processes`

#### `processes.listScriptProcesses()`

List information about a script's executed processes, such as process type and current status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | No | The script ID of the project whose processes are listed. |
| `params.scriptProcessFilter.deploymentId` | `string` | No | Optional field used to limit returned processes to those originating from projects with a specific deployment ID. |
| `params.scriptProcessFilter.functionName` | `string` | No | Optional field used to limit returned processes to those originating from a script function with the given function name. |
| `params.scriptProcessFilter.startTime` | `string` | No | Optional field used to limit returned processes to those that were started on or after the given timestamp. |
| `params.scriptProcessFilter.endTime` | `string` | No | Optional field used to limit returned processes to those that completed on or before the given timestamp. |
| `params.scriptProcessFilter.types` | `string` | No | Optional field used to limit returned processes to those having one of the specified process types. |
| `params.scriptProcessFilter.statuses` | `string` | No | Optional field used to limit returned processes to those having one of the specified process statuses. |
| `params.scriptProcessFilter.userAccessLevels` | `string` | No | Optional field used to limit returned processes to those having one of the specified user access levels. |
| `params.pageSize` | `integer` | No | The maximum number of returned processes per page of results. Defaults to 50. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response. |

#### `processes.list()`

List information about processes made by or on behalf of a user, such as process type and current status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userProcessFilter.scriptId` | `string` | No | Optional field used to limit returned processes to those originating from projects with a specific script ID. |
| `params.userProcessFilter.deploymentId` | `string` | No | Optional field used to limit returned processes to those originating from projects with a specific deployment ID. |
| `params.userProcessFilter.projectName` | `string` | No | Optional field used to limit returned processes to those originating from projects with project names containing a specific string. |
| `params.userProcessFilter.functionName` | `string` | No | Optional field used to limit returned processes to those originating from a script function with the given function name. |
| `params.userProcessFilter.startTime` | `string` | No | Optional field used to limit returned processes to those that were started on or after the given timestamp. |
| `params.userProcessFilter.endTime` | `string` | No | Optional field used to limit returned processes to those that completed on or before the given timestamp. |
| `params.userProcessFilter.types` | `string` | No | Optional field used to limit returned processes to those having one of the specified process types. |
| `params.userProcessFilter.statuses` | `string` | No | Optional field used to limit returned processes to those having one of the specified process statuses. |
| `params.userProcessFilter.userAccessLevels` | `string` | No | Optional field used to limit returned processes to those having one of the specified user access levels. |
| `params.pageSize` | `integer` | No | The maximum number of returned processes per page of results. Defaults to 50. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response. |

### `scripts`

#### `scripts.run()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scriptId` | `string` | Yes | The script ID of the script to be executed. Find the script ID on the **Project settings** page under "IDs." As multiple executable APIs can be deployed in new IDE for same script, this field should be populated with DeploymentID generated while deploying in new IDE instead of script ID. |
| `params.resource` | `object` | Yes | The request body. |