
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://container.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Returns configuration info about the Google Kubernetes Engine service.
     * @param {string} params.name - (Required) The name (project and location) of the server config to get, specified in the format `projects/*\/locations/*`.
     * @param {string} params.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
     * @return {object} The API response object.
     */
    this.projects.locations.getServerConfig = (params) => this._makeRequest('v1beta1/{+name}/serverConfig', 'GET', params);

    /**
     * Fetches locations that offer Google Kubernetes Engine.
     * @param {string} params.parent - (Required) Required. Contains the name of the resource requested. Specified in the format `projects/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+parent}/locations', 'GET', params);

    this.projects.locations.clusters = {};

    /**
     * Lists all clusters owned by a project in either the specified zone or all zones.
     * @param {string} params.parent - (Required) The parent (project and location) where the clusters will be listed. Specified in the format `projects/*\/locations/*`. Location "-" matches all zones and all regions.
     * @param {string} params.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     * @param {string} params.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.list = (params) => this._makeRequest('v1beta1/{+parent}/clusters', 'GET', params);

    /**
     * Gets the details for a specific cluster.
     * @param {string} params.clusterId - Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field.
     * @param {string} params.name - (Required) The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {string} params.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://{$universe.dns_names.final_documentation_domain}/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
     * @param {string} params.parent - (Required) The parent (project and location) where the cluster will be created. Specified in the format `projects/*\/locations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.create = (params) => this._makeRequest('v1beta1/{+parent}/clusters', 'POST', params);

    /**
     * Updates the settings for a specific cluster.
     * @param {string} params.name - (Required) The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);

    /**
     * Sets the logging service for a specific cluster.
     * @param {string} params.name - (Required) The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.setLogging = (params) => this._makeRequest('v1beta1/{+name}:setLogging', 'POST', params);

    /**
     * Sets the monitoring service for a specific cluster.
     * @param {string} params.name - (Required) The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.setMonitoring = (params) => this._makeRequest('v1beta1/{+name}:setMonitoring', 'POST', params);

    /**
     * Sets the addons for a specific cluster.
     * @param {string} params.name - (Required) The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.setAddons = (params) => this._makeRequest('v1beta1/{+name}:setAddons', 'POST', params);

    /**
     * Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://{$universe.dns_names.final_documentation_domain}/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
     * @param {string} params.name - (Required) The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.setLocations = (params) => this._makeRequest('v1beta1/{+name}:setLocations', 'POST', params);

    /**
     * Updates the master for a specific cluster.
     * @param {string} params.name - (Required) The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.updateMaster = (params) => this._makeRequest('v1beta1/{+name}:updateMaster', 'POST', params);

    /**
     * Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
     * @param {string} params.name - (Required) The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.setMasterAuth = (params) => this._makeRequest('v1beta1/{+name}:setMasterAuth', 'POST', params);

    /**
     * Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
     * @param {string} params.clusterId - Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field.
     * @param {string} params.name - (Required) The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {string} params.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Gets the public component of the cluster signing keys in JSON Web Key format.
     * @param {string} params.parent - (Required) The cluster (project, location, cluster name) to get keys for. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.getJwks = (params) => this._makeRequest('v1beta1/{+parent}/jwks', 'GET', params);

    /**
     * Sets labels on a cluster.
     * @param {string} params.name - (Required) The name (project, location, cluster name) of the cluster to set labels. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.setResourceLabels = (params) => this._makeRequest('v1beta1/{+name}:setResourceLabels', 'POST', params);

    /**
     * Enables or disables the ABAC authorization mechanism on a cluster.
     * @param {string} params.name - (Required) The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.setLegacyAbac = (params) => this._makeRequest('v1beta1/{+name}:setLegacyAbac', 'POST', params);

    /**
     * Starts master IP rotation.
     * @param {string} params.name - (Required) The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.startIpRotation = (params) => this._makeRequest('v1beta1/{+name}:startIpRotation', 'POST', params);

    /**
     * Completes master IP rotation.
     * @param {string} params.name - (Required) The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.completeIpRotation = (params) => this._makeRequest('v1beta1/{+name}:completeIpRotation', 'POST', params);

    /**
     * Enables or disables Network Policy for a cluster.
     * @param {string} params.name - (Required) The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.setNetworkPolicy = (params) => this._makeRequest('v1beta1/{+name}:setNetworkPolicy', 'POST', params);

    /**
     * Sets the maintenance policy for a cluster.
     * @param {string} params.name - (Required) The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.setMaintenancePolicy = (params) => this._makeRequest('v1beta1/{+name}:setMaintenancePolicy', 'POST', params);

    /**
     * Checks the cluster compatibility with Autopilot mode, and returns a list of compatibility issues.
     * @param {string} params.name - (Required) The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.checkAutopilotCompatibility = (params) => this._makeRequest('v1beta1/{+name}:checkAutopilotCompatibility', 'GET', params);

    /**
     * Fetch upgrade information of a specific cluster.
     * @param {string} params.name - (Required) Required. The name (project, location, cluster) of the cluster to get. Specified in the format `projects/*\/locations/*\/clusters/*` or `projects/*\/zones/*\/clusters/*`.
     * @param {string} params.version - API request version that initiates this operation.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.fetchClusterUpgradeInfo = (params) => this._makeRequest('v1beta1/{+name}:fetchClusterUpgradeInfo', 'GET', params);

    this.projects.locations.clusters.nodePools = {};

    /**
     * Updates the version and/or image type of a specific node pool.
     * @param {string} params.name - (Required) The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.nodePools.update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);

    /**
     * Sets the autoscaling settings of a specific node pool.
     * @param {string} params.name - (Required) The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.nodePools.setAutoscaling = (params) => this._makeRequest('v1beta1/{+name}:setAutoscaling', 'POST', params);

    /**
     * Lists the node pools for a cluster.
     * @param {string} params.clusterId - Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     * @param {string} params.parent - (Required) The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {string} params.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     * @param {string} params.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.nodePools.list = (params) => this._makeRequest('v1beta1/{+parent}/nodePools', 'GET', params);

    /**
     * Retrieves the requested node pool.
     * @param {string} params.clusterId - Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} params.name - (Required) The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {string} params.nodePoolId - Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.nodePools.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a node pool for a cluster.
     * @param {string} params.parent - (Required) The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.nodePools.create = (params) => this._makeRequest('v1beta1/{+parent}/nodePools', 'POST', params);

    /**
     * Deletes a node pool from a cluster.
     * @param {string} params.clusterId - Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} params.name - (Required) The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {string} params.nodePoolId - Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.nodePools.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.
     * @param {string} params.name - (Required) The name (project, location, cluster, node pool id) of the node pool to complete upgrade. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.nodePools.completeUpgrade = (params) => this._makeRequest('v1beta1/{+name}:completeUpgrade', 'POST', params);

    /**
     * Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
     * @param {string} params.name - (Required) The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.nodePools.rollback = (params) => this._makeRequest('v1beta1/{+name}:rollback', 'POST', params);

    /**
     * Sets the NodeManagement options for a node pool.
     * @param {string} params.name - (Required) The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.nodePools.setManagement = (params) => this._makeRequest('v1beta1/{+name}:setManagement', 'POST', params);

    /**
     * SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
     * @param {string} params.name - (Required) The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.nodePools.setSize = (params) => this._makeRequest('v1beta1/{+name}:setSize', 'POST', params);

    /**
     * Fetch upgrade information of a specific nodepool.
     * @param {string} params.name - (Required) Required. The name (project, location, cluster, nodepool) of the nodepool to get. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*` or `projects/*\/zones/*\/clusters/*\/nodePools/*`.
     * @param {string} params.version - API request version that initiates this operation.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.nodePools.fetchNodePoolUpgradeInfo = (params) => this._makeRequest('v1beta1/{+name}:fetchNodePoolUpgradeInfo', 'GET', params);

    this.projects.locations.clusters.well-known = {};

    /**
     * Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details.
     * @param {string} params.parent - (Required) The cluster (project, location, cluster name) to get the discovery document for. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.well-known.getOpenid-configuration = (params) => this._makeRequest('v1beta1/{+parent}/.well-known/openid-configuration', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists all operations in a project in the specified zone or all zones.
     * @param {string} params.parent - (Required) The parent (project and location) where the operations will be listed. Specified in the format `projects/*\/locations/*`. Location "-" matches all zones and all regions.
     * @param {string} params.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     * @param {string} params.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1beta1/{+parent}/operations', 'GET', params);

    /**
     * Gets the specified operation.
     * @param {string} params.name - (Required) The name (project, location, operation id) of the operation to get. Specified in the format `projects/*\/locations/*\/operations/*`.
     * @param {string} params.operationId - Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Cancels the specified operation.
     * @param {string} params.name - (Required) The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/*\/locations/*\/operations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.zones = {};

    /**
     * Returns configuration info about the Google Kubernetes Engine service.
     * @param {string} params.name - The name (project and location) of the server config to get, specified in the format `projects/*\/locations/*`.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
     * @return {object} The API response object.
     */
    this.projects.zones.getServerconfig = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/serverconfig', 'GET', params);

    this.projects.zones.clusters = {};

    /**
     * Lists all clusters owned by a project in either the specified zone or all zones.
     * @param {string} params.parent - The parent (project and location) where the clusters will be listed. Specified in the format `projects/*\/locations/*`. Location "-" matches all zones and all regions.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.list = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters', 'GET', params);

    /**
     * Gets the details for a specific cluster.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field.
     * @param {string} params.name - The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.get = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}', 'GET', params);

    /**
     * Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://{$universe.dns_names.final_documentation_domain}/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.create = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters', 'POST', params);

    /**
     * Updates the settings for a specific cluster.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.update = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}', 'PUT', params);

    /**
     * Sets the logging service for a specific cluster.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.logging = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging', 'POST', params);

    /**
     * Sets the monitoring service for a specific cluster.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.monitoring = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring', 'POST', params);

    /**
     * Sets the addons for a specific cluster.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.addons = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons', 'POST', params);

    /**
     * Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://{$universe.dns_names.final_documentation_domain}/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.locations = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations', 'POST', params);

    /**
     * Updates the master for a specific cluster.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.master = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master', 'POST', params);

    /**
     * Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.setMasterAuth = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth', 'POST', params);

    /**
     * Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field.
     * @param {string} params.name - The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.delete = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}', 'DELETE', params);

    /**
     * Sets labels on a cluster.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.resourceLabels = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels', 'POST', params);

    /**
     * Enables or disables the ABAC authorization mechanism on a cluster.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.legacyAbac = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac', 'POST', params);

    /**
     * Starts master IP rotation.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.startIpRotation = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation', 'POST', params);

    /**
     * Completes master IP rotation.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.completeIpRotation = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation', 'POST', params);

    /**
     * Enables or disables Network Policy for a cluster.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.setNetworkPolicy = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy', 'POST', params);

    /**
     * Sets the maintenance policy for a cluster.
     * @param {string} params.clusterId - (Required) Required. The name of the cluster to update.
     * @param {string} params.projectId - (Required) Required. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects).
     * @param {string} params.zone - (Required) Required. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.setMaintenancePolicy = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy', 'POST', params);

    /**
     * Fetch upgrade information of a specific cluster.
     * @param {string} params.name - (Required) Required. The name (project, location, cluster) of the cluster to get. Specified in the format `projects/*\/locations/*\/clusters/*` or `projects/*\/zones/*\/clusters/*`.
     * @param {string} params.version - API request version that initiates this operation.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.fetchClusterUpgradeInfo = (params) => this._makeRequest('v1beta1/{+name}:fetchClusterUpgradeInfo', 'GET', params);

    this.projects.zones.clusters.nodePools = {};

    /**
     * Updates the version and/or image type of a specific node pool.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.nodePoolId - (Required) Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.nodePools.update = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update', 'POST', params);

    /**
     * Sets the autoscaling settings of a specific node pool.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.nodePoolId - (Required) Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.nodePools.autoscaling = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling', 'POST', params);

    /**
     * Lists the node pools for a cluster.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     * @param {string} params.parent - The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/*\/locations/*\/clusters/*`.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.nodePools.list = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools', 'GET', params);

    /**
     * Retrieves the requested node pool.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} params.name - The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {string} params.nodePoolId - (Required) Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.nodePools.get = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}', 'GET', params);

    /**
     * Creates a node pool for a cluster.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.nodePools.create = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools', 'POST', params);

    /**
     * Deletes a node pool from a cluster.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} params.name - The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*`.
     * @param {string} params.nodePoolId - (Required) Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.nodePools.delete = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}', 'DELETE', params);

    /**
     * Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.
     * @param {string} params.nodePoolId - (Required) Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.nodePools.rollback = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback', 'POST', params);

    /**
     * Sets the NodeManagement options for a node pool.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     * @param {string} params.nodePoolId - (Required) Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.nodePools.setManagement = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement', 'POST', params);

    /**
     * SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
     * @param {string} params.clusterId - (Required) Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     * @param {string} params.nodePoolId - (Required) Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.nodePools.setSize = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setSize', 'POST', params);

    /**
     * Fetch upgrade information of a specific nodepool.
     * @param {string} params.name - (Required) Required. The name (project, location, cluster, nodepool) of the nodepool to get. Specified in the format `projects/*\/locations/*\/clusters/*\/nodePools/*` or `projects/*\/zones/*\/clusters/*\/nodePools/*`.
     * @param {string} params.version - API request version that initiates this operation.
     * @return {object} The API response object.
     */
    this.projects.zones.clusters.nodePools.fetchNodePoolUpgradeInfo = (params) => this._makeRequest('v1beta1/{+name}:fetchNodePoolUpgradeInfo', 'GET', params);

    this.projects.zones.operations = {};

    /**
     * Lists all operations in a project in the specified zone or all zones.
     * @param {string} params.parent - The parent (project and location) where the operations will be listed. Specified in the format `projects/*\/locations/*`. Location "-" matches all zones and all regions.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.
     * @return {object} The API response object.
     */
    this.projects.zones.operations.list = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/operations', 'GET', params);

    /**
     * Gets the specified operation.
     * @param {string} params.name - The name (project, location, operation id) of the operation to get. Specified in the format `projects/*\/locations/*\/operations/*`.
     * @param {string} params.operationId - (Required) Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @return {object} The API response object.
     */
    this.projects.zones.operations.get = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}', 'GET', params);

    /**
     * Cancels the specified operation.
     * @param {string} params.operationId - (Required) Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId - (Required) Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone - (Required) Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.operations.cancel = (params) => this._makeRequest('v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel', 'POST', params);

    this.projects.aggregated = {};

    this.projects.aggregated.usableSubnetworks = {};

    /**
     * Lists subnetworks that can be used for creating clusters in a project.
     * @param {string} params.filter - Filtering currently only supports equality on the networkProjectId and must be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId` is the project which owns the listed subnetworks. This defaults to the parent project ID.
     * @param {integer} params.pageSize - The max number of results per page that should be returned. If the number of available results is larger than `page_size`, a `next_page_token` is returned which can be used to get the next page of results in subsequent requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     * @param {string} params.pageToken - Specifies a page token to use. Set this to the nextPageToken returned by previous list requests to get the next page of results.
     * @param {string} params.parent - (Required) Required. The parent project where subnetworks are usable. Specified in the format `projects/*`.
     * @return {object} The API response object.
     */
    this.projects.aggregated.usableSubnetworks.list = (params) => this._makeRequest('v1beta1/{+parent}/aggregated/usableSubnetworks', 'GET', params);
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
