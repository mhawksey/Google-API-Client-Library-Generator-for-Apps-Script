
/**
 * Google Apps Script client library for the Oracle Database@Google Cloud API
 * Documentation URL: https://cloud.google.com/oracle/database/docs
 * @class
 */
class Oracledatabase {
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
    this._rootUrl = 'https://oracledatabase.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.cloudExadataInfrastructures = {};

    /**
     * Lists Exadata Infrastructures in a given project and location.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If unspecified, at most 50 Exadata infrastructures will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent value for CloudExadataInfrastructure in the following format: projects/{project}/locations/{location}.
     * @return {object} The API response object.
     */
    this.projects.locations.cloudExadataInfrastructures.list = (params) => this._makeRequest('v1/{+parent}/cloudExadataInfrastructures', 'GET', params);

    /**
     * Gets details of a single Exadata Infrastructure.
     * @param {string} params.name - (Required) Required. The name of the Cloud Exadata Infrastructure in the following format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloud_exadata_infrastructure}.
     * @return {object} The API response object.
     */
    this.projects.locations.cloudExadataInfrastructures.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Exadata Infrastructure in a given project and location.
     * @param {string} params.cloudExadataInfrastructureId - Required. The ID of the Exadata Infrastructure to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     * @param {string} params.parent - (Required) Required. The parent value for CloudExadataInfrastructure in the following format: projects/{project}/locations/{location}.
     * @param {string} params.requestId - Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.cloudExadataInfrastructures.create = (params) => this._makeRequest('v1/{+parent}/cloudExadataInfrastructures', 'POST', params);

    /**
     * Deletes a single Exadata Infrastructure.
     * @param {boolean} params.force - Optional. If set to true, all VM clusters for this Exadata Infrastructure will be deleted. An Exadata Infrastructure can only be deleted once all its VM clusters have been deleted.
     * @param {string} params.name - (Required) Required. The name of the Cloud Exadata Infrastructure in the following format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloud_exadata_infrastructure}.
     * @param {string} params.requestId - Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.cloudExadataInfrastructures.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.cloudExadataInfrastructures.dbServers = {};

    /**
     * Lists the database servers of an Exadata Infrastructure instance.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If unspecified, a maximum of 50 db servers will be returned. The maximum value is 1000; values above 1000 will be reset to 1000.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent value for database server in the following format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloudExadataInfrastructure}.
     * @return {object} The API response object.
     */
    this.projects.locations.cloudExadataInfrastructures.dbServers.list = (params) => this._makeRequest('v1/{+parent}/dbServers', 'GET', params);

    this.projects.locations.cloudVmClusters = {};

    /**
     * Lists the VM Clusters in a given project and location.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request.
     * @param {integer} params.pageSize - Optional. The number of VM clusters to return. If unspecified, at most 50 VM clusters will be returned. The maximum value is 1,000.
     * @param {string} params.pageToken - Optional. A token identifying the page of results the server returns.
     * @param {string} params.parent - (Required) Required. The name of the parent in the following format: projects/{project}/locations/{location}.
     * @return {object} The API response object.
     */
    this.projects.locations.cloudVmClusters.list = (params) => this._makeRequest('v1/{+parent}/cloudVmClusters', 'GET', params);

    /**
     * Gets details of a single VM Cluster.
     * @param {string} params.name - (Required) Required. The name of the Cloud VM Cluster in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloud_vm_cluster}.
     * @return {object} The API response object.
     */
    this.projects.locations.cloudVmClusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new VM Cluster in a given project and location.
     * @param {string} params.cloudVmClusterId - Required. The ID of the VM Cluster to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     * @param {string} params.parent - (Required) Required. The name of the parent in the following format: projects/{project}/locations/{location}.
     * @param {string} params.requestId - Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.cloudVmClusters.create = (params) => this._makeRequest('v1/{+parent}/cloudVmClusters', 'POST', params);

    /**
     * Deletes a single VM Cluster.
     * @param {boolean} params.force - Optional. If set to true, all child resources for the VM Cluster will be deleted. A VM Cluster can only be deleted once all its child resources have been deleted.
     * @param {string} params.name - (Required) Required. The name of the Cloud VM Cluster in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloud_vm_cluster}.
     * @param {string} params.requestId - Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.cloudVmClusters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.cloudVmClusters.dbNodes = {};

    /**
     * Lists the database nodes of a VM Cluster.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If unspecified, at most 50 db nodes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the node should return.
     * @param {string} params.parent - (Required) Required. The parent value for database node in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloudVmCluster}. .
     * @return {object} The API response object.
     */
    this.projects.locations.cloudVmClusters.dbNodes.list = (params) => this._makeRequest('v1/{+parent}/dbNodes', 'GET', params);

    this.projects.locations.entitlements = {};

    /**
     * Lists the entitlements in a given project.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If unspecified, a maximum of 50 entitlements will be returned. The maximum value is 1000.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent value for the entitlement in the following format: projects/{project}/locations/{location}.
     * @return {object} The API response object.
     */
    this.projects.locations.entitlements.list = (params) => this._makeRequest('v1/{+parent}/entitlements', 'GET', params);

    this.projects.locations.giVersions = {};

    /**
     * Lists all the valid Oracle Grid Infrastructure (GI) versions for the given project and location.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request. Only the shape and gi_version fields are supported in this format: `shape="{shape}"`.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If unspecified, a maximum of 50 Oracle Grid Infrastructure (GI) versions will be returned. The maximum value is 1000; values above 1000 will be reset to 1000.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent value for Grid Infrastructure Version in the following format: Format: projects/{project}/locations/{location}.
     * @return {object} The API response object.
     */
    this.projects.locations.giVersions.list = (params) => this._makeRequest('v1/{+parent}/giVersions', 'GET', params);

    this.projects.locations.dbSystemShapes = {};

    /**
     * Lists the database system shapes available for the project and location.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If unspecified, at most 50 database system shapes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent value for Database System Shapes in the following format: projects/{project}/locations/{location}.
     * @return {object} The API response object.
     */
    this.projects.locations.dbSystemShapes.list = (params) => this._makeRequest('v1/{+parent}/dbSystemShapes', 'GET', params);

    this.projects.locations.autonomousDatabases = {};

    /**
     * Lists the Autonomous Databases in a given project and location.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request.
     * @param {string} params.orderBy - Optional. An expression for ordering the results of the request.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous Database will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent value for the Autonomous Database in the following format: projects/{project}/locations/{location}.
     * @return {object} The API response object.
     */
    this.projects.locations.autonomousDatabases.list = (params) => this._makeRequest('v1/{+parent}/autonomousDatabases', 'GET', params);

    /**
     * Gets the details of a single Autonomous Database.
     * @param {string} params.name - (Required) Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}.
     * @return {object} The API response object.
     */
    this.projects.locations.autonomousDatabases.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Autonomous Database in a given project and location.
     * @param {string} params.autonomousDatabaseId - Required. The ID of the Autonomous Database to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     * @param {string} params.parent - (Required) Required. The name of the parent in the following format: projects/{project}/locations/{location}.
     * @param {string} params.requestId - Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.autonomousDatabases.create = (params) => this._makeRequest('v1/{+parent}/autonomousDatabases', 'POST', params);

    /**
     * Deletes a single Autonomous Database.
     * @param {string} params.name - (Required) Required. The name of the resource in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}.
     * @param {string} params.requestId - Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.autonomousDatabases.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Restores a single Autonomous Database.
     * @param {string} params.name - (Required) Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.autonomousDatabases.restore = (params) => this._makeRequest('v1/{+name}:restore', 'POST', params);

    /**
     * Generates a wallet for an Autonomous Database.
     * @param {string} params.name - (Required) Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.autonomousDatabases.generateWallet = (params) => this._makeRequest('v1/{+name}:generateWallet', 'POST', params);

    /**
     * Stops an Autonomous Database.
     * @param {string} params.name - (Required) Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.autonomousDatabases.stop = (params) => this._makeRequest('v1/{+name}:stop', 'POST', params);

    /**
     * Starts an Autonomous Database.
     * @param {string} params.name - (Required) Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.autonomousDatabases.start = (params) => this._makeRequest('v1/{+name}:start', 'POST', params);

    /**
     * Restarts an Autonomous Database.
     * @param {string} params.name - (Required) Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.autonomousDatabases.restart = (params) => this._makeRequest('v1/{+name}:restart', 'POST', params);

    /**
     * Initiates a switchover of specified autonomous database to the associated peer database.
     * @param {string} params.name - (Required) Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.autonomousDatabases.switchover = (params) => this._makeRequest('v1/{+name}:switchover', 'POST', params);

    this.projects.locations.autonomousDbVersions = {};

    /**
     * Lists all the available Autonomous Database versions for a project and location.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent value for the Autonomous Database in the following format: projects/{project}/locations/{location}.
     * @return {object} The API response object.
     */
    this.projects.locations.autonomousDbVersions.list = (params) => this._makeRequest('v1/{+parent}/autonomousDbVersions', 'GET', params);

    this.projects.locations.autonomousDatabaseCharacterSets = {};

    /**
     * Lists Autonomous Database Character Sets in a given project and location.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request. Only the **character_set_type** field is supported in the following format: `character_set_type="{characterSetType}"`. Accepted values include `DATABASE` and `NATIONAL`.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Character Sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent value for the Autonomous Database in the following format: projects/{project}/locations/{location}.
     * @return {object} The API response object.
     */
    this.projects.locations.autonomousDatabaseCharacterSets.list = (params) => this._makeRequest('v1/{+parent}/autonomousDatabaseCharacterSets', 'GET', params);

    this.projects.locations.autonomousDatabaseBackups = {};

    /**
     * Lists the long-term and automatic backups of an Autonomous Database.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request. Only the **autonomous_database_id** field is supported in the following format: `autonomous_database_id="{autonomous_database_id}"`. The accepted values must be a valid Autonomous Database ID, limited to the naming restrictions of the ID: ^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). The ID must start with a letter, end with a letter or a number, and be a maximum of 63 characters.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Backups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent value for ListAutonomousDatabaseBackups in the following format: projects/{project}/locations/{location}.
     * @return {object} The API response object.
     */
    this.projects.locations.autonomousDatabaseBackups.list = (params) => this._makeRequest('v1/{+parent}/autonomousDatabaseBackups', 'GET', params);

    this.projects.locations.odbNetworks = {};

    /**
     * Lists the ODB Networks in a given project and location.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request.
     * @param {string} params.orderBy - Optional. An expression for ordering the results of the request.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If unspecified, at most 50 ODB Networks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent value for the ODB Network in the following format: projects/{project}/locations/{location}.
     * @return {object} The API response object.
     */
    this.projects.locations.odbNetworks.list = (params) => this._makeRequest('v1/{+parent}/odbNetworks', 'GET', params);

    /**
     * Gets details of a single ODB Network.
     * @param {string} params.name - (Required) Required. The name of the OdbNetwork in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}.
     * @return {object} The API response object.
     */
    this.projects.locations.odbNetworks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new ODB Network in a given project and location.
     * @param {string} params.odbNetworkId - Required. The ID of the OdbNetwork to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     * @param {string} params.parent - (Required) Required. The parent value for the OdbNetwork in the following format: projects/{project}/locations/{location}.
     * @param {string} params.requestId - Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.odbNetworks.create = (params) => this._makeRequest('v1/{+parent}/odbNetworks', 'POST', params);

    /**
     * Deletes a single ODB Network.
     * @param {string} params.name - (Required) Required. The name of the resource in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}.
     * @param {string} params.requestId - Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.odbNetworks.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.odbNetworks.odbSubnets = {};

    /**
     * Lists all the ODB Subnets in a given ODB Network.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request.
     * @param {string} params.orderBy - Optional. An expression for ordering the results of the request.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If unspecified, at most 50 ODB Networks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent value for the OdbSubnet in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}.
     * @return {object} The API response object.
     */
    this.projects.locations.odbNetworks.odbSubnets.list = (params) => this._makeRequest('v1/{+parent}/odbSubnets', 'GET', params);

    /**
     * Gets details of a single ODB Subnet.
     * @param {string} params.name - (Required) Required. The name of the OdbSubnet in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.
     * @return {object} The API response object.
     */
    this.projects.locations.odbNetworks.odbSubnets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new ODB Subnet in a given ODB Network.
     * @param {string} params.odbSubnetId - Required. The ID of the OdbSubnet to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     * @param {string} params.parent - (Required) Required. The parent value for the OdbSubnet in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}.
     * @param {string} params.requestId - Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.odbNetworks.odbSubnets.create = (params) => this._makeRequest('v1/{+parent}/odbSubnets', 'POST', params);

    /**
     * Deletes a single ODB Subnet.
     * @param {string} params.name - (Required) Required. The name of the resource in the following format: projects/{project}/locations/{region}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.
     * @param {string} params.requestId - Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.odbNetworks.odbSubnets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
