
/**
 * Google Apps Script client library for the Kubernetes Engine API
 * Documentation URL: https://cloud.google.com/kubernetes-engine/docs/
 * @class
 */
class Container {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://container.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    /**
     * Returns configuration info about the Google Kubernetes Engine service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project and location) of the server config to get, specified in the format `projects/*\/locations/*`.
     * @param {string} apiParams.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.getServerConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/serverConfig', 'GET', apiParams, clientConfig);

    this.projects.locations.clusters = {};

    /**
     * Lists all clusters owned by a project in either the specified zone or all zones.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The parent (project and location) where the clusters will be listed. Specified in the format `projects/*\/locations/*`. Location "-" matches all zones and all regions.
     * @param {string} apiParams.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     * @param {string} apiParams.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clusters', 'GET', apiParams, clientConfig);

    /**
     * Gets the details of a specific cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {string} apiParams.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://{$universe.dns_names.final_documentation_domain}/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The parent (project and location) where the cluster will be created. Specified in the format `projects/*\/locations/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clusters', 'POST', apiParams, clientConfig);

    /**
     * Updates the settings of a specific cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Sets the logging service for a specific cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.setLogging = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setLogging', 'POST', apiParams, clientConfig);

    /**
     * Sets the monitoring service for a specific cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.setMonitoring = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setMonitoring', 'POST', apiParams, clientConfig);

    /**
     * Sets the addons for a specific cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.setAddons = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setAddons', 'POST', apiParams, clientConfig);

    /**
     * Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://{$universe.dns_names.final_documentation_domain}/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.setLocations = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setLocations', 'POST', apiParams, clientConfig);

    /**
     * Updates the master for a specific cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.updateMaster = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:updateMaster', 'POST', apiParams, clientConfig);

    /**
     * Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.setMasterAuth = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setMasterAuth', 'POST', apiParams, clientConfig);

    /**
     * Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {string} apiParams.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets the public component of the cluster signing keys in JSON Web Key format.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The cluster (project, location, cluster name) to get keys for. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.getJwks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/jwks', 'GET', apiParams, clientConfig);

    /**
     * Sets labels on a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster name) of the cluster to set labels. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.setResourceLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setResourceLabels', 'POST', apiParams, clientConfig);

    /**
     * Enables or disables the ABAC authorization mechanism on a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.setLegacyAbac = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setLegacyAbac', 'POST', apiParams, clientConfig);

    /**
     * Starts master IP rotation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.startIpRotation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:startIpRotation', 'POST', apiParams, clientConfig);

    /**
     * Completes master IP rotation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.completeIpRotation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:completeIpRotation', 'POST', apiParams, clientConfig);

    /**
     * Enables or disables Network Policy for a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.setNetworkPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setNetworkPolicy', 'POST', apiParams, clientConfig);

    /**
     * Sets the maintenance policy for a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.setMaintenancePolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setMaintenancePolicy', 'POST', apiParams, clientConfig);

    /**
     * Checks the cluster compatibility with Autopilot mode, and returns a list of compatibility issues.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.checkAutopilotCompatibility = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:checkAutopilotCompatibility', 'GET', apiParams, clientConfig);

    /**
     * Fetch upgrade information of a specific cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name (project, location, cluster) of the cluster to get. Specified in the format `projects/*\/locations/*\/clusters/*` or `projects/*\/zones/*\/clusters/*`.
     * @param {string} apiParams.version - API request version that initiates this operation.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.fetchClusterUpgradeInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:fetchClusterUpgradeInfo', 'GET', apiParams, clientConfig);

    this.projects.locations.clusters.nodePools = {};

    /**
     * Updates the version and/or image type for the specified node pool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.nodePools.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Sets the autoscaling settings for the specified node pool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.nodePools.setAutoscaling = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setAutoscaling', 'POST', apiParams, clientConfig);

    /**
     * Lists the node pools for a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     * @param {string} apiParams.parent - (Required) The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {string} apiParams.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     * @param {string} apiParams.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.nodePools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/nodePools', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the requested node pool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {string} apiParams.nodePoolId - Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.nodePools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a node pool for a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.nodePools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/nodePools', 'POST', apiParams, clientConfig);

    /**
     * Deletes a node pool from a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {string} apiParams.nodePoolId - Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.nodePools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster, node pool id) of the node pool to complete upgrade. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.nodePools.completeUpgrade = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:completeUpgrade', 'POST', apiParams, clientConfig);

    /**
     * Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.nodePools.rollback = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:rollback', 'POST', apiParams, clientConfig);

    /**
     * Sets the NodeManagement options for a node pool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.nodePools.setManagement = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setManagement', 'POST', apiParams, clientConfig);

    /**
     * Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.nodePools.setSize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setSize', 'POST', apiParams, clientConfig);

    /**
     * Fetch upgrade information of a specific nodepool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name (project, location, cluster, nodepool) of the nodepool to get. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*` or `projects/*\/zones/*\/clusters/*\/nodePools/*`.
     * @param {string} apiParams.version - API request version that initiates this operation.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.nodePools.fetchNodePoolUpgradeInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:fetchNodePoolUpgradeInfo', 'GET', apiParams, clientConfig);

    this.projects.locations.clusters.well-known = {};

    /**
     * Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The cluster (project, location, cluster name) to get the discovery document for. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.well-known.getOpenid-configuration = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/.well-known/openid-configuration', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};

    /**
     * Lists all operations in a project in a specific zone or all zones.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The parent (project and location) where the operations will be listed. Specified in the format `projects/*\/locations/*`. Location "-" matches all zones and all regions.
     * @param {string} apiParams.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     * @param {string} apiParams.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the specified operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, operation id) of the operation to get. Specified in the format `projects/*\/locations/*\/operations/*`.
     * @param {string} apiParams.operationId - Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Cancels the specified operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/*\/locations/*\/operations/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.zones = {};

    /**
     * Returns configuration info about the Google Kubernetes Engine service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - The name (project and location) of the server config to get, specified in the format `projects/*\/locations/*`.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.getServerconfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/serverconfig', 'GET', apiParams, clientConfig);

    this.projects.zones.clusters = {};

    /**
     * Lists all clusters owned by a project in either the specified zone or all zones.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - The parent (project and location) where the clusters will be listed. Specified in the format `projects/*\/locations/*`. Location "-" matches all zones and all regions.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters', 'GET', apiParams, clientConfig);

    /**
     * Gets the details of a specific cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.name - The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}', 'GET', apiParams, clientConfig);

    /**
     * Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://{$universe.dns_names.final_documentation_domain}/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters', 'POST', apiParams, clientConfig);

    /**
     * Updates the settings of a specific cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}', 'PUT', apiParams, clientConfig);

    /**
     * Sets the logging service for a specific cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.logging = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging', 'POST', apiParams, clientConfig);

    /**
     * Sets the monitoring service for a specific cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.monitoring = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring', 'POST', apiParams, clientConfig);

    /**
     * Sets the addons for a specific cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.addons = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons', 'POST', apiParams, clientConfig);

    /**
     * Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://{$universe.dns_names.final_documentation_domain}/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.locations = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations', 'POST', apiParams, clientConfig);

    /**
     * Updates the master for a specific cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.master = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master', 'POST', apiParams, clientConfig);

    /**
     * Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.setMasterAuth = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth', 'POST', apiParams, clientConfig);

    /**
     * Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.name - The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}', 'DELETE', apiParams, clientConfig);

    /**
     * Sets labels on a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.resourceLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels', 'POST', apiParams, clientConfig);

    /**
     * Enables or disables the ABAC authorization mechanism on a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.legacyAbac = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac', 'POST', apiParams, clientConfig);

    /**
     * Starts master IP rotation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.startIpRotation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation', 'POST', apiParams, clientConfig);

    /**
     * Completes master IP rotation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.completeIpRotation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation', 'POST', apiParams, clientConfig);

    /**
     * Enables or disables Network Policy for a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.setNetworkPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy', 'POST', apiParams, clientConfig);

    /**
     * Sets the maintenance policy for a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Required. The name of the cluster to update.
     * @param {string} apiParams.projectId - (Required) Required. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects).
     * @param {string} apiParams.zone - (Required) Required. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.setMaintenancePolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy', 'POST', apiParams, clientConfig);

    /**
     * Fetch upgrade information of a specific cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name (project, location, cluster) of the cluster to get. Specified in the format `projects/*\/locations/*\/clusters/*` or `projects/*\/zones/*\/clusters/*`.
     * @param {string} apiParams.version - API request version that initiates this operation.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.fetchClusterUpgradeInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:fetchClusterUpgradeInfo', 'GET', apiParams, clientConfig);

    this.projects.zones.clusters.nodePools = {};

    /**
     * Updates the version and/or image type for the specified node pool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.nodePoolId - (Required) Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.nodePools.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update', 'POST', apiParams, clientConfig);

    /**
     * Sets the autoscaling settings for the specified node pool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.nodePoolId - (Required) Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.nodePools.autoscaling = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling', 'POST', apiParams, clientConfig);

    /**
     * Lists the node pools for a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     * @param {string} apiParams.parent - The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.nodePools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the requested node pool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.name - The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {string} apiParams.nodePoolId - (Required) Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.nodePools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}', 'GET', apiParams, clientConfig);

    /**
     * Creates a node pool for a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.nodePools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools', 'POST', apiParams, clientConfig);

    /**
     * Deletes a node pool from a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.name - The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {string} apiParams.nodePoolId - (Required) Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.nodePools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}', 'DELETE', apiParams, clientConfig);

    /**
     * Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.nodePoolId - (Required) Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.nodePools.rollback = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback', 'POST', apiParams, clientConfig);

    /**
     * Sets the NodeManagement options for a node pool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.nodePoolId - (Required) Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.nodePools.setManagement = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement', 'POST', apiParams, clientConfig);

    /**
     * Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.nodePoolId - (Required) Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.nodePools.setSize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setSize', 'POST', apiParams, clientConfig);

    /**
     * Fetch upgrade information of a specific nodepool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name (project, location, cluster, nodepool) of the nodepool to get. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*` or `projects/*\/zones/*\/clusters/*\/nodePools/*`.
     * @param {string} apiParams.version - API request version that initiates this operation.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.clusters.nodePools.fetchNodePoolUpgradeInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:fetchNodePoolUpgradeInfo', 'GET', apiParams, clientConfig);

    this.projects.zones.operations = {};

    /**
     * Lists all operations in a project in a specific zone or all zones.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - The parent (project and location) where the operations will be listed. Specified in the format `projects/*\/locations/*`. Location "-" matches all zones and all regions.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the specified operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - The name (project, location, operation id) of the operation to get. Specified in the format `projects/*\/locations/*\/operations/*`.
     * @param {string} apiParams.operationId - (Required) Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/operations/{operationId}', 'GET', apiParams, clientConfig);

    /**
     * Cancels the specified operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.operationId - (Required) Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} apiParams.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.zones.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel', 'POST', apiParams, clientConfig);

    this.projects.aggregated = {};

    this.projects.aggregated.usableSubnetworks = {};

    /**
     * Lists subnetworks that are usable for creating clusters in a project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filtering currently only supports equality on the networkProjectId and must be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId` is the project which owns the listed subnetworks. This defaults to the parent project ID.
     * @param {integer} apiParams.pageSize - The max number of results per page that should be returned. If the number of available results is larger than `page_size`, a `next_page_token` is returned which can be used to get the next page of results in subsequent requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     * @param {string} apiParams.pageToken - Specifies a page token to use. Set this to the nextPageToken returned by previous list requests to get the next page of results.
     * @param {string} apiParams.parent - (Required) The parent project where subnetworks are usable. Specified in the format `projects/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.aggregated.usableSubnetworks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/aggregated/usableSubnetworks', 'GET', apiParams, clientConfig);
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
