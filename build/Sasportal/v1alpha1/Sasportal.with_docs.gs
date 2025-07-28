
/**
 * Google Apps Script client library for the SAS Portal API
 * Documentation URL: https://developers.google.com/spectrum-access-system/
 * @class
 */
class Sasportal {
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
    this._rootUrl = 'https://sasportal.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.customers = {};

    /**
     * Returns a requested customer.
     * @param {string} params.name - (Required) Required. The name of the customer.
     * @return {object} The API response object.
     */
    this.customers.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Returns a list of requested customers.
     * @param {integer} params.pageSize - The maximum number of customers to return in the response.
     * @param {string} params.pageToken - A pagination token returned from a previous call to ListCustomers that indicates where this listing should continue from.
     * @return {object} The API response object.
     */
    this.customers.list = (params) => this._makeRequest('v1alpha1/customers', 'GET', params);

    /**
     * Updates an existing customer.
     * @param {string} params.name - (Required) Output only. Resource name of the customer.
     * @param {string} params.updateMask - Fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    /**
     * Returns a list of SAS deployments associated with current GCP project. Includes whether SAS analytics has been enabled or not.
     * @return {object} The API response object.
     */
    this.customers.listGcpProjectDeployments = (params) => this._makeRequest('v1alpha1/customers:listGcpProjectDeployments', 'GET', params);

    /**
     * Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.provisionDeployment = (params) => this._makeRequest('v1alpha1/customers:provisionDeployment', 'POST', params);

    /**
     * Returns a list of legacy organizations.
     * @return {object} The API response object.
     */
    this.customers.listLegacyOrganizations = (params) => this._makeRequest('v1alpha1/customers:listLegacyOrganizations', 'GET', params);

    /**
     * Migrates a SAS organization to the cloud. This will create GCP projects for each deployment and associate them. The SAS Organization is linked to the gcp project that called the command. go/sas-legacy-customer-migration
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.migrateOrganization = (params) => this._makeRequest('v1alpha1/customers:migrateOrganization', 'POST', params);

    /**
     * Setups the a GCP Project to receive SAS Analytics messages via GCP Pub/Sub with a subscription to BigQuery. All the Pub/Sub topics and BigQuery tables are created automatically as part of this service.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.setupSasAnalytics = (params) => this._makeRequest('v1alpha1/customers:setupSasAnalytics', 'POST', params);

    this.customers.devices = {};

    /**
     * Creates a device under a node or customer.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.devices.create = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', params);

    /**
     * Creates a signed device under a node or customer.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.devices.createSigned = (params) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', params);

    /**
     * Deletes a device.
     * @param {string} params.name - (Required) Required. The name of the device.
     * @return {object} The API response object.
     */
    this.customers.devices.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Gets details about a device.
     * @param {string} params.name - (Required) Required. The name of the device.
     * @return {object} The API response object.
     */
    this.customers.devices.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Lists devices under a node or customer.
     * @param {string} params.filter - The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     * @param {integer} params.pageSize - The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
     * @param {string} params.pageToken - A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @return {object} The API response object.
     */
    this.customers.devices.list = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', params);

    /**
     * Moves a device under another node or customer.
     * @param {string} params.name - (Required) Required. The name of the device to move.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.devices.move = (params) => this._makeRequest('v1alpha1/{+name}:move', 'POST', params);

    /**
     * Updates a device.
     * @param {string} params.name - (Required) Output only. The resource path name.
     * @param {string} params.updateMask - Fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.devices.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    /**
     * Updates a signed device.
     * @param {string} params.name - (Required) Required. The name of the device to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.devices.updateSigned = (params) => this._makeRequest('v1alpha1/{+name}:updateSigned', 'PATCH', params);

    /**
     * Signs a device.
     * @param {string} params.name - (Required) Output only. The resource path name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.devices.signDevice = (params) => this._makeRequest('v1alpha1/{+name}:signDevice', 'POST', params);

    this.customers.nodes = {};

    /**
     * Creates a new node.
     * @param {string} params.parent - (Required) Required. The parent resource name where the node is to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.nodes.create = (params) => this._makeRequest('v1alpha1/{+parent}/nodes', 'POST', params);

    /**
     * Deletes a node.
     * @param {string} params.name - (Required) Required. The name of the node.
     * @return {object} The API response object.
     */
    this.customers.nodes.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Returns a requested node.
     * @param {string} params.name - (Required) Required. The name of the node.
     * @return {object} The API response object.
     */
    this.customers.nodes.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Lists nodes.
     * @param {string} params.filter - The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered.
     * @param {integer} params.pageSize - The maximum number of nodes to return in the response.
     * @param {string} params.pageToken - A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The parent resource name, for example, "nodes/1".
     * @return {object} The API response object.
     */
    this.customers.nodes.list = (params) => this._makeRequest('v1alpha1/{+parent}/nodes', 'GET', params);

    /**
     * Moves a node under another node or customer.
     * @param {string} params.name - (Required) Required. The name of the node to move.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.nodes.move = (params) => this._makeRequest('v1alpha1/{+name}:move', 'POST', params);

    /**
     * Updates an existing node.
     * @param {string} params.name - (Required) Output only. Resource name.
     * @param {string} params.updateMask - Fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.nodes.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    this.customers.nodes.devices = {};

    /**
     * Creates a device under a node or customer.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.nodes.devices.create = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', params);

    /**
     * Creates a signed device under a node or customer.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.nodes.devices.createSigned = (params) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', params);

    /**
     * Lists devices under a node or customer.
     * @param {string} params.filter - The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     * @param {integer} params.pageSize - The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
     * @param {string} params.pageToken - A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @return {object} The API response object.
     */
    this.customers.nodes.devices.list = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', params);

    this.customers.nodes.nodes = {};

    /**
     * Creates a new node.
     * @param {string} params.parent - (Required) Required. The parent resource name where the node is to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.nodes.nodes.create = (params) => this._makeRequest('v1alpha1/{+parent}/nodes', 'POST', params);

    /**
     * Lists nodes.
     * @param {string} params.filter - The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered.
     * @param {integer} params.pageSize - The maximum number of nodes to return in the response.
     * @param {string} params.pageToken - A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The parent resource name, for example, "nodes/1".
     * @return {object} The API response object.
     */
    this.customers.nodes.nodes.list = (params) => this._makeRequest('v1alpha1/{+parent}/nodes', 'GET', params);

    this.customers.nodes.deployments = {};

    /**
     * Creates a new deployment.
     * @param {string} params.parent - (Required) Required. The parent resource name where the deployment is to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.nodes.deployments.create = (params) => this._makeRequest('v1alpha1/{+parent}/deployments', 'POST', params);

    /**
     * Lists deployments.
     * @param {string} params.filter - The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered.
     * @param {integer} params.pageSize - The maximum number of deployments to return in the response.
     * @param {string} params.pageToken - A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2.
     * @return {object} The API response object.
     */
    this.customers.nodes.deployments.list = (params) => this._makeRequest('v1alpha1/{+parent}/deployments', 'GET', params);

    this.customers.deployments = {};

    /**
     * Creates a new deployment.
     * @param {string} params.parent - (Required) Required. The parent resource name where the deployment is to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.deployments.create = (params) => this._makeRequest('v1alpha1/{+parent}/deployments', 'POST', params);

    /**
     * Deletes a deployment.
     * @param {string} params.name - (Required) Required. The name of the deployment.
     * @return {object} The API response object.
     */
    this.customers.deployments.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Returns a requested deployment.
     * @param {string} params.name - (Required) Required. The name of the deployment.
     * @return {object} The API response object.
     */
    this.customers.deployments.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Lists deployments.
     * @param {string} params.filter - The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered.
     * @param {integer} params.pageSize - The maximum number of deployments to return in the response.
     * @param {string} params.pageToken - A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2.
     * @return {object} The API response object.
     */
    this.customers.deployments.list = (params) => this._makeRequest('v1alpha1/{+parent}/deployments', 'GET', params);

    /**
     * Updates an existing deployment.
     * @param {string} params.name - (Required) Output only. Resource name.
     * @param {string} params.updateMask - Fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.deployments.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    /**
     * Moves a deployment under another node or customer.
     * @param {string} params.name - (Required) Required. The name of the deployment to move.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.deployments.move = (params) => this._makeRequest('v1alpha1/{+name}:move', 'POST', params);

    this.customers.deployments.devices = {};

    /**
     * Creates a device under a node or customer.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.deployments.devices.create = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', params);

    /**
     * Creates a signed device under a node or customer.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.deployments.devices.createSigned = (params) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', params);

    /**
     * Lists devices under a node or customer.
     * @param {string} params.filter - The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     * @param {integer} params.pageSize - The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
     * @param {string} params.pageToken - A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @return {object} The API response object.
     */
    this.customers.deployments.devices.list = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', params);

    this.nodes = {};

    /**
     * Returns a requested node.
     * @param {string} params.name - (Required) Required. The name of the node.
     * @return {object} The API response object.
     */
    this.nodes.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    this.nodes.devices = {};

    /**
     * Creates a device under a node or customer.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.devices.create = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', params);

    /**
     * Creates a signed device under a node or customer.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.devices.createSigned = (params) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', params);

    /**
     * Deletes a device.
     * @param {string} params.name - (Required) Required. The name of the device.
     * @return {object} The API response object.
     */
    this.nodes.devices.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Gets details about a device.
     * @param {string} params.name - (Required) Required. The name of the device.
     * @return {object} The API response object.
     */
    this.nodes.devices.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Lists devices under a node or customer.
     * @param {string} params.filter - The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     * @param {integer} params.pageSize - The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
     * @param {string} params.pageToken - A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @return {object} The API response object.
     */
    this.nodes.devices.list = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', params);

    /**
     * Moves a device under another node or customer.
     * @param {string} params.name - (Required) Required. The name of the device to move.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.devices.move = (params) => this._makeRequest('v1alpha1/{+name}:move', 'POST', params);

    /**
     * Updates a device.
     * @param {string} params.name - (Required) Output only. The resource path name.
     * @param {string} params.updateMask - Fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.devices.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    /**
     * Updates a signed device.
     * @param {string} params.name - (Required) Required. The name of the device to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.devices.updateSigned = (params) => this._makeRequest('v1alpha1/{+name}:updateSigned', 'PATCH', params);

    /**
     * Signs a device.
     * @param {string} params.name - (Required) Output only. The resource path name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.devices.signDevice = (params) => this._makeRequest('v1alpha1/{+name}:signDevice', 'POST', params);

    this.nodes.nodes = {};

    /**
     * Creates a new node.
     * @param {string} params.parent - (Required) Required. The parent resource name where the node is to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.nodes.create = (params) => this._makeRequest('v1alpha1/{+parent}/nodes', 'POST', params);

    /**
     * Deletes a node.
     * @param {string} params.name - (Required) Required. The name of the node.
     * @return {object} The API response object.
     */
    this.nodes.nodes.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Returns a requested node.
     * @param {string} params.name - (Required) Required. The name of the node.
     * @return {object} The API response object.
     */
    this.nodes.nodes.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Lists nodes.
     * @param {string} params.filter - The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered.
     * @param {integer} params.pageSize - The maximum number of nodes to return in the response.
     * @param {string} params.pageToken - A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The parent resource name, for example, "nodes/1".
     * @return {object} The API response object.
     */
    this.nodes.nodes.list = (params) => this._makeRequest('v1alpha1/{+parent}/nodes', 'GET', params);

    /**
     * Moves a node under another node or customer.
     * @param {string} params.name - (Required) Required. The name of the node to move.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.nodes.move = (params) => this._makeRequest('v1alpha1/{+name}:move', 'POST', params);

    /**
     * Updates an existing node.
     * @param {string} params.name - (Required) Output only. Resource name.
     * @param {string} params.updateMask - Fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.nodes.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    this.nodes.nodes.devices = {};

    /**
     * Creates a device under a node or customer.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.nodes.devices.create = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', params);

    /**
     * Creates a signed device under a node or customer.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.nodes.devices.createSigned = (params) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', params);

    /**
     * Lists devices under a node or customer.
     * @param {string} params.filter - The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     * @param {integer} params.pageSize - The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
     * @param {string} params.pageToken - A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @return {object} The API response object.
     */
    this.nodes.nodes.devices.list = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', params);

    this.nodes.nodes.nodes = {};

    /**
     * Creates a new node.
     * @param {string} params.parent - (Required) Required. The parent resource name where the node is to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.nodes.nodes.create = (params) => this._makeRequest('v1alpha1/{+parent}/nodes', 'POST', params);

    /**
     * Lists nodes.
     * @param {string} params.filter - The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered.
     * @param {integer} params.pageSize - The maximum number of nodes to return in the response.
     * @param {string} params.pageToken - A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The parent resource name, for example, "nodes/1".
     * @return {object} The API response object.
     */
    this.nodes.nodes.nodes.list = (params) => this._makeRequest('v1alpha1/{+parent}/nodes', 'GET', params);

    this.nodes.nodes.deployments = {};

    /**
     * Creates a new deployment.
     * @param {string} params.parent - (Required) Required. The parent resource name where the deployment is to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.nodes.deployments.create = (params) => this._makeRequest('v1alpha1/{+parent}/deployments', 'POST', params);

    /**
     * Lists deployments.
     * @param {string} params.filter - The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered.
     * @param {integer} params.pageSize - The maximum number of deployments to return in the response.
     * @param {string} params.pageToken - A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2.
     * @return {object} The API response object.
     */
    this.nodes.nodes.deployments.list = (params) => this._makeRequest('v1alpha1/{+parent}/deployments', 'GET', params);

    this.nodes.deployments = {};

    /**
     * Deletes a deployment.
     * @param {string} params.name - (Required) Required. The name of the deployment.
     * @return {object} The API response object.
     */
    this.nodes.deployments.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Returns a requested deployment.
     * @param {string} params.name - (Required) Required. The name of the deployment.
     * @return {object} The API response object.
     */
    this.nodes.deployments.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Lists deployments.
     * @param {string} params.filter - The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered.
     * @param {integer} params.pageSize - The maximum number of deployments to return in the response.
     * @param {string} params.pageToken - A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2.
     * @return {object} The API response object.
     */
    this.nodes.deployments.list = (params) => this._makeRequest('v1alpha1/{+parent}/deployments', 'GET', params);

    /**
     * Updates an existing deployment.
     * @param {string} params.name - (Required) Output only. Resource name.
     * @param {string} params.updateMask - Fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.deployments.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    /**
     * Moves a deployment under another node or customer.
     * @param {string} params.name - (Required) Required. The name of the deployment to move.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.deployments.move = (params) => this._makeRequest('v1alpha1/{+name}:move', 'POST', params);

    this.nodes.deployments.devices = {};

    /**
     * Creates a device under a node or customer.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.deployments.devices.create = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', params);

    /**
     * Creates a signed device under a node or customer.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.nodes.deployments.devices.createSigned = (params) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', params);

    /**
     * Lists devices under a node or customer.
     * @param {string} params.filter - The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     * @param {integer} params.pageSize - The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
     * @param {string} params.pageToken - A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The name of the parent resource.
     * @return {object} The API response object.
     */
    this.nodes.deployments.devices.list = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', params);

    this.installer = {};

    /**
     * Generates a secret to be used with the ValidateInstaller.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.installer.generateSecret = (params) => this._makeRequest('v1alpha1/installer:generateSecret', 'POST', params);

    /**
     * Validates the identity of a Certified Professional Installer (CPI).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.installer.validate = (params) => this._makeRequest('v1alpha1/installer:validate', 'POST', params);

    this.deployments = {};

    /**
     * Returns a requested deployment.
     * @param {string} params.name - (Required) Required. The name of the deployment.
     * @return {object} The API response object.
     */
    this.deployments.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    this.deployments.devices = {};

    /**
     * Deletes a device.
     * @param {string} params.name - (Required) Required. The name of the device.
     * @return {object} The API response object.
     */
    this.deployments.devices.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Gets details about a device.
     * @param {string} params.name - (Required) Required. The name of the device.
     * @return {object} The API response object.
     */
    this.deployments.devices.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Moves a device under another node or customer.
     * @param {string} params.name - (Required) Required. The name of the device to move.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.deployments.devices.move = (params) => this._makeRequest('v1alpha1/{+name}:move', 'POST', params);

    /**
     * Updates a device.
     * @param {string} params.name - (Required) Output only. The resource path name.
     * @param {string} params.updateMask - Fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.deployments.devices.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    /**
     * Updates a signed device.
     * @param {string} params.name - (Required) Required. The name of the device to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.deployments.devices.updateSigned = (params) => this._makeRequest('v1alpha1/{+name}:updateSigned', 'PATCH', params);

    /**
     * Signs a device.
     * @param {string} params.name - (Required) Output only. The resource path name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.deployments.devices.signDevice = (params) => this._makeRequest('v1alpha1/{+name}:signDevice', 'POST', params);

    this.policies = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.policies.set = (params) => this._makeRequest('v1alpha1/policies:set', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.policies.get = (params) => this._makeRequest('v1alpha1/policies:get', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.policies.test = (params) => this._makeRequest('v1alpha1/policies:test', 'POST', params);
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
