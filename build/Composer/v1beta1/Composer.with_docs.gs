
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://composer.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.environments = {};

    /**
     * Create a new environment.
     * @param {string} params.parent - (Required) The parent must be of the form "projects/{projectId}/locations/{locationId}".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.environments.create = (params) => this._makeRequest('v1beta1/{+parent}/environments', 'POST', params);

    /**
     * Get an existing environment.
     * @param {string} params.name - (Required) The resource name of the environment to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @return {object} The API response object.
     */
    this.projects.locations.environments.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * List environments.
     * @param {integer} params.pageSize - The maximum number of environments to return.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}"
     * @return {object} The API response object.
     */
    this.projects.locations.environments.list = (params) => this._makeRequest('v1beta1/{+parent}/environments', 'GET', params);

    /**
     * Update an environment.
     * @param {string} params.name - (Required) The relative resource name of the environment to update, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {string} params.updateMask - Required. A comma-separated list of paths, relative to `Environment`, of fields to update. For example, to set the version of scikit-learn to install in the environment to 0.19.0 and to remove an existing installation of argparse, the `updateMask` parameter would include the following two `paths` values: "config.softwareConfig.pypiPackages.scikit-learn" and "config.softwareConfig.pypiPackages.argparse". The included patch environment would specify the scikit-learn version as follows: { "config":{ "softwareConfig":{ "pypiPackages":{ "scikit-learn":"==0.19.0" } } } } Note that in the above example, any existing PyPI packages other than scikit-learn and argparse will be unaffected. Only one update type may be included in a single request's `updateMask`. For example, one cannot update both the PyPI packages and labels in the same request. However, it is possible to update multiple members of a map field simultaneously in the same request. For example, to set the labels "label1" and "label2" while clearing "label3" (assuming it already exists), one can provide the paths "labels.label1", "labels.label2", and "labels.label3" and populate the patch environment as follows: { "labels":{ "label1":"new-label1-value" "label2":"new-label2-value" } } Note that in the above example, any existing labels that are not included in the `updateMask` will be unaffected. It is also possible to replace an entire map field by providing the map field's path in the `updateMask`. The new value of the field will be that which is provided in the patch environment. For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the `updateMask` would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following: { "config":{ "softwareConfig":{ "pypiPackages":{ "botocore":"==1.7.14" } } } } **Note:** Only the following fields can be updated: * `config.softwareConfig.pypiPackages` * Replace all custom custom PyPI packages. If a replacement package map is not included in `environment`, all custom PyPI packages are cleared. It is an error to provide both this mask and a mask specifying an individual package. * `config.softwareConfig.pypiPackages.`packagename * Update the custom PyPI package *packagename*, preserving other packages. To delete the package, include it in `updateMask`, and omit the mapping for it in `environment.config.softwareConfig.pypiPackages`. It is an error to provide both a mask of this form and the `config.softwareConfig.pypiPackages` mask. * `labels` * Replace all environment labels. If a replacement labels map is not included in `environment`, all labels are cleared. It is an error to provide both this mask and a mask specifying one or more individual labels. * `labels.`labelName * Set the label named *labelName*, while preserving other labels. To delete the label, include it in `updateMask` and omit its mapping in `environment.labels`. It is an error to provide both a mask of this form and the `labels` mask. * `config.nodeCount` * Horizontally scale the number of nodes in the environment. An integer greater than or equal to 3 must be provided in the `config.nodeCount` field. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.webServerNetworkAccessControl` * Replace the environment's current WebServerNetworkAccessControl. * `config.softwareConfig.airflowConfigOverrides` * Replace all Apache Airflow config overrides. If a replacement config overrides map is not included in `environment`, all config overrides are cleared. It is an error to provide both this mask and a mask specifying one or more individual config overrides. * `config.softwareConfig.airflowConfigOverrides.`section-name * Override the Apache Airflow config property *name* in the section named *section*, preserving other properties. To delete the property override, include it in `updateMask` and omit its mapping in `environment.config.softwareConfig.airflowConfigOverrides`. It is an error to provide both a mask of this form and the `config.softwareConfig.airflowConfigOverrides` mask. * `config.softwareConfig.envVariables` * Replace all environment variables. If a replacement environment variable map is not included in `environment`, all custom environment variables are cleared. * `config.softwareConfig.imageVersion` * Upgrade the version of the environment in-place. Refer to `SoftwareConfig.image_version` for information on how to format the new image version. Additionally, the new image version cannot effect a version downgrade, and must match the current image version's Composer and Airflow major versions. Consult the [Cloud Composer version list](/composer/docs/concepts/versioning/composer-versions) for valid values. * `config.softwareConfig.schedulerCount` * Horizontally scale the number of schedulers in Airflow. A positive integer not greater than the number of nodes must be provided in the `config.softwareConfig.schedulerCount` field. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*. * `config.softwareConfig.cloudDataLineageIntegration` * Configuration for Cloud Data Lineage integration. * `config.databaseConfig.machineType` * Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.webServerConfig.machineType` * Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.maintenanceWindow` * Maintenance window during which Cloud Composer components may be under maintenance. * `config.workloadsConfig` * The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. * `config.environmentSize` * The size of the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.environments.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Delete an environment.
     * @param {string} params.name - (Required) The environment to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @return {object} The API response object.
     */
    this.projects.locations.environments.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Restart Airflow web server.
     * @param {string} params.name - (Required) Required. The resource name of the environment to restart the web server for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.environments.restartWebServer = (params) => this._makeRequest('v1beta1/{+name}:restartWebServer', 'POST', params);

    /**
     * Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.
     * @param {string} params.environment - (Required) The resource name of the environment to check upgrade for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.environments.checkUpgrade = (params) => this._makeRequest('v1beta1/{+environment}:checkUpgrade', 'POST', params);

    /**
     * Executes Airflow CLI command.
     * @param {string} params.environment - (Required) The resource name of the environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.environments.executeAirflowCommand = (params) => this._makeRequest('v1beta1/{+environment}:executeAirflowCommand', 'POST', params);

    /**
     * Stops Airflow CLI command execution.
     * @param {string} params.environment - (Required) The resource name of the environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.environments.stopAirflowCommand = (params) => this._makeRequest('v1beta1/{+environment}:stopAirflowCommand', 'POST', params);

    /**
     * Polls Airflow CLI command execution and fetches logs.
     * @param {string} params.environment - (Required) The resource name of the environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.environments.pollAirflowCommand = (params) => this._makeRequest('v1beta1/{+environment}:pollAirflowCommand', 'POST', params);

    /**
     * Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
     * @param {string} params.environment - (Required) The resource name of the source environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.environments.saveSnapshot = (params) => this._makeRequest('v1beta1/{+environment}:saveSnapshot', 'POST', params);

    /**
     * Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
     * @param {string} params.environment - (Required) The resource name of the target environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.environments.loadSnapshot = (params) => this._makeRequest('v1beta1/{+environment}:loadSnapshot', 'POST', params);

    /**
     * Triggers database failover (only for highly resilient environments).
     * @param {string} params.environment - (Required) Target environment: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.environments.databaseFailover = (params) => this._makeRequest('v1beta1/{+environment}:databaseFailover', 'POST', params);

    /**
     * Fetches database properties.
     * @param {string} params.environment - (Required) Required. The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @return {object} The API response object.
     */
    this.projects.locations.environments.fetchDatabaseProperties = (params) => this._makeRequest('v1beta1/{+environment}:fetchDatabaseProperties', 'GET', params);

    this.projects.locations.environments.workloads = {};

    /**
     * Lists workloads in a Cloud Composer environment. Workload is a unit that runs a single Composer component. This method is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
     * @param {string} params.filter - Optional. The list filter. Currently only supports equality on the type field. The value of a field specified in the filter expression must be one ComposerWorkloadType enum option. It's possible to get multiple types using "OR" operator, e.g.: "type=SCHEDULER OR type=CELERY_WORKER". If not specified, all items are returned.
     * @param {integer} params.pageSize - Optional. The maximum number of environments to return.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The environment name to get workloads for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @return {object} The API response object.
     */
    this.projects.locations.environments.workloads.list = (params) => this._makeRequest('v1beta1/{+parent}/workloads', 'GET', params);

    this.projects.locations.environments.userWorkloadsSecrets = {};

    /**
     * Creates a user workloads Secret. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {string} params.parent - (Required) Required. The environment name to create a Secret for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.environments.userWorkloadsSecrets.create = (params) => this._makeRequest('v1beta1/{+parent}/userWorkloadsSecrets', 'POST', params);

    /**
     * Gets an existing user workloads Secret. Values of the "data" field in the response are cleared. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {string} params.name - (Required) Required. The resource name of the Secret to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}"
     * @return {object} The API response object.
     */
    this.projects.locations.environments.userWorkloadsSecrets.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists user workloads Secrets. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {integer} params.pageSize - Optional. The maximum number of Secrets to return.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. List Secrets in the given environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @return {object} The API response object.
     */
    this.projects.locations.environments.userWorkloadsSecrets.list = (params) => this._makeRequest('v1beta1/{+parent}/userWorkloadsSecrets', 'GET', params);

    /**
     * Updates a user workloads Secret. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {string} params.name - (Required) Identifier. The resource name of the Secret, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.environments.userWorkloadsSecrets.update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);

    /**
     * Deletes a user workloads Secret. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {string} params.name - (Required) Required. The Secret to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}"
     * @return {object} The API response object.
     */
    this.projects.locations.environments.userWorkloadsSecrets.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.environments.userWorkloadsConfigMaps = {};

    /**
     * Creates a user workloads ConfigMap. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {string} params.parent - (Required) Required. The environment name to create a ConfigMap for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.environments.userWorkloadsConfigMaps.create = (params) => this._makeRequest('v1beta1/{+parent}/userWorkloadsConfigMaps', 'POST', params);

    /**
     * Gets an existing user workloads ConfigMap. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {string} params.name - (Required) Required. The resource name of the ConfigMap to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}"
     * @return {object} The API response object.
     */
    this.projects.locations.environments.userWorkloadsConfigMaps.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists user workloads ConfigMaps. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {integer} params.pageSize - Optional. The maximum number of ConfigMaps to return.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. List ConfigMaps in the given environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
     * @return {object} The API response object.
     */
    this.projects.locations.environments.userWorkloadsConfigMaps.list = (params) => this._makeRequest('v1beta1/{+parent}/userWorkloadsConfigMaps', 'GET', params);

    /**
     * Updates a user workloads ConfigMap. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {string} params.name - (Required) Identifier. The resource name of the ConfigMap, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.environments.userWorkloadsConfigMaps.update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);

    /**
     * Deletes a user workloads ConfigMap. This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
     * @param {string} params.name - (Required) Required. The ConfigMap to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}"
     * @return {object} The API response object.
     */
    this.projects.locations.environments.userWorkloadsConfigMaps.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.imageVersions = {};

    /**
     * List ImageVersions for provided location.
     * @param {boolean} params.includePastReleases - Whether or not image versions from old releases should be included.
     * @param {integer} params.pageSize - The maximum number of image_versions to return.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) List ImageVersions in the given project and location, in the form: "projects/{projectId}/locations/{locationId}"
     * @return {object} The API response object.
     */
    this.projects.locations.imageVersions.list = (params) => this._makeRequest('v1beta1/{+parent}/imageVersions', 'GET', params);
  }

  /**
   * @private Builds the full request URL and options object.
   */
  _buildRequestDetails(path, httpMethod, params) {
    let url = this._rootUrl + this._servicePath + path;
    const remainingParams = { ...params };
    // Fix: Correctly handle {+param} style parameters and other potential special chars.
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
      const isPlus = placeholder.startsWith('{+');
      const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
      if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
        delete remainingParams[paramName];
      }
    });

    const queryParts = [];
    for (const key in remainingParams) {
      if (key !== 'resource') {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
      }
    }
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }

    const options = {
      method: httpMethod,
      headers: { 'Authorization': 'Bearer ' + this._token },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };
    if (params && params.resource) {
      options.payload = JSON.stringify(params.resource);
    }
    
    return { url, options };
  }

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   */
  _makeRequest(path, httpMethod, params) {
    const { url, options } = this._buildRequestDetails(path, httpMethod, params);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseText = response.getContentText(); // Simplified call

      if (responseCode >= 200 && responseCode < 300) {
        return responseText ? JSON.parse(responseText) : {};
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      try {
        // Return parsed error if possible, otherwise a generic error object
        return JSON.parse(responseText);
      } catch (e) {
        return { error: { code: responseCode, message: responseText } };
      }
    }
    
    // This line is technically unreachable if retries >= 0, but good for safety.
    throw new Error('Request failed after multiple retries.');
  }
}
