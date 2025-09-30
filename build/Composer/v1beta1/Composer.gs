
/**
 * Google Apps Script client library for the Cloud Composer API
 * Documentation URL: https://cloud.google.com/composer/
 * @class
 */
class Composer {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://composer.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - (Required) The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {boolean} apiParams.returnPartialSuccess - When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the [ListOperationsResponse.unreachable] field. This can only be `true` when reading across collections e.g. when `parent` is set to `"projects/example/locations/-"`. This field is not by default supported and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.environments = {};

    /**
     * Create a new environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The parent must be of the form "projects/{projectId}/locations/{locationId}".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/environments', 'POST', apiParams, clientConfig);

    /**
     * Get an existing environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name of the environment to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List environments.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of environments to return.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} apiParams.parent - (Required) List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/environments', 'GET', apiParams, clientConfig);

    /**
     * Update an environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The relative resource name of the environment to update, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {string} apiParams.updateMask - Required. A comma-separated list of paths, relative to `Environment`, of fields to update. For example, to set the version of scikit-learn to install in the environment to 0.19.0 and to remove an existing installation of argparse, the `updateMask` parameter would include the following two `paths` values: "config.softwareConfig.pypiPackages.scikit-learn" and "config.softwareConfig.pypiPackages.argparse". The included patch environment would specify the scikit-learn version as follows: { "config":{ "softwareConfig":{ "pypiPackages":{ "scikit-learn":"==0.19.0" } } } } Note that in the above example, any existing PyPI packages other than scikit-learn and argparse will be unaffected. Only one update type may be included in a single request's `updateMask`. For example, one cannot update both the PyPI packages and labels in the same request. However, it is possible to update multiple members of a map field simultaneously in the same request. For example, to set the labels "label1" and "label2" while clearing "label3" (assuming it already exists), one can provide the paths "labels.label1", "labels.label2", and "labels.label3" and populate the patch environment as follows: { "labels":{ "label1":"new-label1-value" "label2":"new-label2-value" } } Note that in the above example, any existing labels that are not included in the `updateMask` will be unaffected. It is also possible to replace an entire map field by providing the map field's path in the `updateMask`. The new value of the field will be that which is provided in the patch environment. For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the `updateMask` would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following: { "config":{ "softwareConfig":{ "pypiPackages":{ "botocore":"==1.7.14" } } } } **Note:** Only the following fields can be updated: * `config.softwareConfig.pypiPackages` * Replace all custom custom PyPI packages. If a replacement package map is not included in `environment`, all custom PyPI packages are cleared. It is an error to provide both this mask and a mask specifying an individual package. * `config.softwareConfig.pypiPackages.`packagename * Update the custom PyPI package *packagename*, preserving other packages. To delete the package, include it in `updateMask`, and omit the mapping for it in `environment.config.softwareConfig.pypiPackages`. It is an error to provide both a mask of this form and the `config.softwareConfig.pypiPackages` mask. * `labels` * Replace all environment labels. If a replacement labels map is not included in `environment`, all labels are cleared. It is an error to provide both this mask and a mask specifying one or more individual labels. * `labels.`labelName * Set the label named *labelName*, while preserving other labels. To delete the label, include it in `updateMask` and omit its mapping in `environment.labels`. It is an error to provide both a mask of this form and the `labels` mask. * `config.nodeCount` * Horizontally scale the number of nodes in the environment. An integer greater than or equal to 3 must be provided in the `config.nodeCount` field. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.webServerNetworkAccessControl` * Replace the environment's current WebServerNetworkAccessControl. * `config.softwareConfig.airflowConfigOverrides` * Replace all Apache Airflow config overrides. If a replacement config overrides map is not included in `environment`, all config overrides are cleared. It is an error to provide both this mask and a mask specifying one or more individual config overrides. * `config.softwareConfig.airflowConfigOverrides.`section-name * Override the Apache Airflow config property *name* in the section named *section*, preserving other properties. To delete the property override, include it in `updateMask` and omit its mapping in `environment.config.softwareConfig.airflowConfigOverrides`. It is an error to provide both a mask of this form and the `config.softwareConfig.airflowConfigOverrides` mask. * `config.softwareConfig.envVariables` * Replace all environment variables. If a replacement environment variable map is not included in `environment`, all custom environment variables are cleared. * `config.softwareConfig.imageVersion` * Upgrade the version of the environment in-place. Refer to `SoftwareConfig.image_version` for information on how to format the new image version. Additionally, the new image version cannot effect a version downgrade, and must match the current image version's Composer and Airflow major versions. Consult the [Cloud Composer version list](/composer/docs/concepts/versioning/composer-versions) for valid values. * `config.softwareConfig.schedulerCount` * Horizontally scale the number of schedulers in Airflow. A positive integer not greater than the number of nodes must be provided in the `config.softwareConfig.schedulerCount` field. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*. * `config.softwareConfig.cloudDataLineageIntegration` * Configuration for Cloud Data Lineage integration. * `config.databaseConfig.machineType` * Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.webServerConfig.machineType` * Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.maintenanceWindow` * Maintenance window during which Cloud Composer components may be under maintenance. * `config.workloadsConfig` * The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. * `config.environmentSize` * The size of the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete an environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The environment to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Restart Airflow web server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the environment to restart the web server for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.restartWebServer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:restartWebServer', 'POST', apiParams, clientConfig);

    /**
     * Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.environment - (Required) The resource name of the environment to check upgrade for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.checkUpgrade = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+environment}:checkUpgrade', 'POST', apiParams, clientConfig);

    /**
     * Executes Airflow CLI command.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.environment - (Required) The resource name of the environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.executeAirflowCommand = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+environment}:executeAirflowCommand', 'POST', apiParams, clientConfig);

    /**
     * Stops Airflow CLI command execution.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.environment - (Required) The resource name of the environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.stopAirflowCommand = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+environment}:stopAirflowCommand', 'POST', apiParams, clientConfig);

    /**
     * Polls Airflow CLI command execution and fetches logs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.environment - (Required) The resource name of the environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.pollAirflowCommand = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+environment}:pollAirflowCommand', 'POST', apiParams, clientConfig);

    /**
     * Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.environment - (Required) The resource name of the source environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.saveSnapshot = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+environment}:saveSnapshot', 'POST', apiParams, clientConfig);

    /**
     * Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.environment - (Required) The resource name of the target environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.loadSnapshot = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+environment}:loadSnapshot', 'POST', apiParams, clientConfig);

    /**
     * Triggers database failover (only for highly resilient environments).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.environment - (Required) Target environment: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.databaseFailover = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+environment}:databaseFailover', 'POST', apiParams, clientConfig);

    /**
     * Fetches database properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.environment - (Required) Required. The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.fetchDatabaseProperties = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+environment}:fetchDatabaseProperties', 'GET', apiParams, clientConfig);

    this.projects.locations.environments.workloads = {};

    /**
     * Lists workloads in a Cloud Composer environment. Workload is a unit that runs a single Composer component. This method is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. The list filter. Currently only supports equality on the type field. The value of a field specified in the filter expression must be one ComposerWorkloadType enum option. It's possible to get multiple types using "OR" operator, e.g.: "type=SCHEDULER OR type=CELERY_WORKER". If not specified, all items are returned.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of environments to return.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} apiParams.parent - (Required) Required. The environment name to get workloads for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.workloads.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/workloads', 'GET', apiParams, clientConfig);

    this.projects.locations.environments.userWorkloadsSecrets = {};

    /**
     * Creates a user workloads Secret. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The environment name to create a Secret for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.userWorkloadsSecrets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/userWorkloadsSecrets', 'POST', apiParams, clientConfig);

    /**
     * Gets an existing user workloads Secret. Values of the "data" field in the response are cleared. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the Secret to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.userWorkloadsSecrets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists user workloads Secrets. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of Secrets to return.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} apiParams.parent - (Required) Required. List Secrets in the given environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.userWorkloadsSecrets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/userWorkloadsSecrets', 'GET', apiParams, clientConfig);

    /**
     * Updates a user workloads Secret. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the Secret, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.userWorkloadsSecrets.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a user workloads Secret. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The Secret to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.userWorkloadsSecrets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.environments.userWorkloadsConfigMaps = {};

    /**
     * Creates a user workloads ConfigMap. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The environment name to create a ConfigMap for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.userWorkloadsConfigMaps.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/userWorkloadsConfigMaps', 'POST', apiParams, clientConfig);

    /**
     * Gets an existing user workloads ConfigMap. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the ConfigMap to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.userWorkloadsConfigMaps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists user workloads ConfigMaps. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of ConfigMaps to return.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} apiParams.parent - (Required) Required. List ConfigMaps in the given environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.userWorkloadsConfigMaps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/userWorkloadsConfigMaps', 'GET', apiParams, clientConfig);

    /**
     * Updates a user workloads ConfigMap. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the ConfigMap, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.userWorkloadsConfigMaps.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a user workloads ConfigMap. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The ConfigMap to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.environments.userWorkloadsConfigMaps.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.imageVersions = {};

    /**
     * List ImageVersions for provided location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.includePastReleases - Whether or not image versions from old releases should be included.
     * @param {integer} apiParams.pageSize - The maximum number of image_versions to return.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} apiParams.parent - (Required) List ImageVersions in the given project and location, in the form: "projects/{projectId}/locations/{locationId}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.imageVersions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/imageVersions', 'GET', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
