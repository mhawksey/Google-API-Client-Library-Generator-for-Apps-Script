# Cloud Composer API - Apps Script Client Library

Auto-generated client library for using the **Cloud Composer API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:56:33 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:24:23 GMT
- **Created:** Sun, 20 Jul 2025 16:23:16 GMT



---

## API Reference

### `projects`

### `projects.locations`

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

### `projects.locations.environments`

#### `projects.locations.environments.create()`

Create a new environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent must be of the form "projects/{projectId}/locations/{locationId}". |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.environments.get()`

Get an existing environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the environment to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" |

#### `projects.locations.environments.list()`

List environments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" |
| `params.pageSize` | `integer` | No | The maximum number of environments to return. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

#### `projects.locations.environments.patch()`

Update an environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The relative resource name of the environment to update, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" |
| `params.updateMask` | `string` | No | Required. A comma-separated list of paths, relative to `Environment`, of fields to update. For example, to set the version of scikit-learn to install in the environment to 0.19.0 and to remove an existing installation of argparse, the `updateMask` parameter would include the following two `paths` values: "config.softwareConfig.pypiPackages.scikit-learn" and "config.softwareConfig.pypiPackages.argparse". The included patch environment would specify the scikit-learn version as follows: { "config":{ "softwareConfig":{ "pypiPackages":{ "scikit-learn":"==0.19.0" } } } } Note that in the above example, any existing PyPI packages other than scikit-learn and argparse will be unaffected. Only one update type may be included in a single request's `updateMask`. For example, one cannot update both the PyPI packages and labels in the same request. However, it is possible to update multiple members of a map field simultaneously in the same request. For example, to set the labels "label1" and "label2" while clearing "label3" (assuming it already exists), one can provide the paths "labels.label1", "labels.label2", and "labels.label3" and populate the patch environment as follows: { "labels":{ "label1":"new-label1-value" "label2":"new-label2-value" } } Note that in the above example, any existing labels that are not included in the `updateMask` will be unaffected. It is also possible to replace an entire map field by providing the map field's path in the `updateMask`. The new value of the field will be that which is provided in the patch environment. For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the `updateMask` would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following: { "config":{ "softwareConfig":{ "pypiPackages":{ "botocore":"==1.7.14" } } } } **Note:** Only the following fields can be updated: * `config.softwareConfig.pypiPackages` * Replace all custom custom PyPI packages. If a replacement package map is not included in `environment`, all custom PyPI packages are cleared. It is an error to provide both this mask and a mask specifying an individual package. * `config.softwareConfig.pypiPackages.`packagename * Update the custom PyPI package *packagename*, preserving other packages. To delete the package, include it in `updateMask`, and omit the mapping for it in `environment.config.softwareConfig.pypiPackages`. It is an error to provide both a mask of this form and the `config.softwareConfig.pypiPackages` mask. * `labels` * Replace all environment labels. If a replacement labels map is not included in `environment`, all labels are cleared. It is an error to provide both this mask and a mask specifying one or more individual labels. * `labels.`labelName * Set the label named *labelName*, while preserving other labels. To delete the label, include it in `updateMask` and omit its mapping in `environment.labels`. It is an error to provide both a mask of this form and the `labels` mask. * `config.nodeCount` * Horizontally scale the number of nodes in the environment. An integer greater than or equal to 3 must be provided in the `config.nodeCount` field. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.webServerNetworkAccessControl` * Replace the environment's current WebServerNetworkAccessControl. * `config.softwareConfig.airflowConfigOverrides` * Replace all Apache Airflow config overrides. If a replacement config overrides map is not included in `environment`, all config overrides are cleared. It is an error to provide both this mask and a mask specifying one or more individual config overrides. * `config.softwareConfig.airflowConfigOverrides.`section-name * Override the Apache Airflow config property *name* in the section named *section*, preserving other properties. To delete the property override, include it in `updateMask` and omit its mapping in `environment.config.softwareConfig.airflowConfigOverrides`. It is an error to provide both a mask of this form and the `config.softwareConfig.airflowConfigOverrides` mask. * `config.softwareConfig.envVariables` * Replace all environment variables. If a replacement environment variable map is not included in `environment`, all custom environment variables are cleared. * `config.softwareConfig.imageVersion` * Upgrade the version of the environment in-place. Refer to `SoftwareConfig.image_version` for information on how to format the new image version. Additionally, the new image version cannot effect a version downgrade, and must match the current image version's Composer and Airflow major versions. Consult the [Cloud Composer version list](/composer/docs/concepts/versioning/composer-versions) for valid values. * `config.softwareConfig.schedulerCount` * Horizontally scale the number of schedulers in Airflow. A positive integer not greater than the number of nodes must be provided in the `config.softwareConfig.schedulerCount` field. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*. * `config.softwareConfig.cloudDataLineageIntegration` * Configuration for Cloud Data Lineage integration. * `config.databaseConfig.machineType` * Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.webServerConfig.machineType` * Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.maintenanceWindow` * Maintenance window during which Cloud Composer components may be under maintenance. * `config.workloadsConfig` * The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. * `config.environmentSize` * The size of the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.environments.delete()`

Delete an environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The environment to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" |

#### `projects.locations.environments.restartWebServer()`

Restart Airflow web server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the environment to restart the web server for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.environments.checkUpgrade()`

Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environment` | `string` | Yes | The resource name of the environment to check upgrade for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.environments.executeAirflowCommand()`

Executes Airflow CLI command.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environment` | `string` | Yes | The resource name of the environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}". |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.environments.stopAirflowCommand()`

Stops Airflow CLI command execution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environment` | `string` | Yes | The resource name of the environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}". |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.environments.pollAirflowCommand()`

Polls Airflow CLI command execution and fetches logs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environment` | `string` | Yes | The resource name of the environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.environments.saveSnapshot()`

Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environment` | `string` | Yes | The resource name of the source environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.environments.loadSnapshot()`

Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environment` | `string` | Yes | The resource name of the target environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.environments.databaseFailover()`

Triggers database failover (only for highly resilient environments).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environment` | `string` | Yes | Target environment: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.environments.fetchDatabaseProperties()`

Fetches database properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environment` | `string` | Yes | Required. The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" |

### `projects.locations.environments.workloads`

#### `projects.locations.environments.workloads.list()`

Lists workloads in a Cloud Composer environment. Workload is a unit that runs a single Composer component. This method is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The environment name to get workloads for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" |
| `params.pageSize` | `integer` | No | Optional. The maximum number of environments to return. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous List request, if any. |
| `params.filter` | `string` | No | Optional. The list filter. Currently only supports equality on the type field. The value of a field specified in the filter expression must be one ComposerWorkloadType enum option. It's possible to get multiple types using "OR" operator, e.g.: "type=SCHEDULER OR type=CELERY_WORKER". If not specified, all items are returned. |

### `projects.locations.environments.userWorkloadsSecrets`

#### `projects.locations.environments.userWorkloadsSecrets.create()`

Creates a user workloads Secret. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The environment name to create a Secret for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.environments.userWorkloadsSecrets.get()`

Gets an existing user workloads Secret. Values of the "data" field in the response are cleared. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Secret to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}" |

#### `projects.locations.environments.userWorkloadsSecrets.list()`

Lists user workloads Secrets. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. List Secrets in the given environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" |
| `params.pageSize` | `integer` | No | Optional. The maximum number of Secrets to return. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous List request, if any. |

#### `projects.locations.environments.userWorkloadsSecrets.update()`

Updates a user workloads Secret. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the Secret, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.environments.userWorkloadsSecrets.delete()`

Deletes a user workloads Secret. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Secret to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}" |

### `projects.locations.environments.userWorkloadsConfigMaps`

#### `projects.locations.environments.userWorkloadsConfigMaps.create()`

Creates a user workloads ConfigMap. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The environment name to create a ConfigMap for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.environments.userWorkloadsConfigMaps.get()`

Gets an existing user workloads ConfigMap. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the ConfigMap to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" |

#### `projects.locations.environments.userWorkloadsConfigMaps.list()`

Lists user workloads ConfigMaps. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. List ConfigMaps in the given environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" |
| `params.pageSize` | `integer` | No | Optional. The maximum number of ConfigMaps to return. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous List request, if any. |

#### `projects.locations.environments.userWorkloadsConfigMaps.update()`

Updates a user workloads ConfigMap. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the ConfigMap, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.environments.userWorkloadsConfigMaps.delete()`

Deletes a user workloads ConfigMap. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The ConfigMap to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" |

### `projects.locations.imageVersions`

#### `projects.locations.imageVersions.list()`

List ImageVersions for provided location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | List ImageVersions in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" |
| `params.pageSize` | `integer` | No | The maximum number of image_versions to return. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |
| `params.includePastReleases` | `boolean` | No | Whether or not image versions from old releases should be included. |