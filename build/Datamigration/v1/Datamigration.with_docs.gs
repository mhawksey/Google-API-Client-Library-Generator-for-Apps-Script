
/**
 * Google Apps Script client library for the Database Migration API
 * Documentation URL: https://cloud.google.com/database-migration/
 * @class
 */
class Datamigration {
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
    this._rootUrl = 'https://datamigration.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.
     * @param {string} params.name - (Required) Required. The resource name for the location for which static IPs should be returned. Must be in the format `projects/*\/locations/*`.
     * @param {integer} params.pageSize - Maximum number of IPs to return.
     * @param {string} params.pageToken - A page token, received from a previous `FetchStaticIps` call.
     * @return {object} The API response object.
     */
    this.projects.locations.fetchStaticIps = (params) => this._makeRequest('v1/{+name}:fetchStaticIps', 'GET', params);

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
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

    this.projects.locations.migrationJobs = {};

    /**
     * Lists migration jobs in a given project and location.
     * @param {string} params.filter - A filter expression that filters migration jobs listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list migration jobs created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z.** You can also filter nested fields. For example, you could specify **reverseSshConnectivity.vmIp = "1.2.3.4"** to select all migration jobs connecting through the specific SSH tunnel bastion.
     * @param {string} params.orderBy - Sort the results based on the migration job name. Valid values are: "name", "name asc", and "name desc".
     * @param {integer} params.pageSize - The maximum number of migration jobs to return. The service may return fewer than this value. If unspecified, at most 50 migration jobs will be returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     * @param {string} params.pageToken - The nextPageToken value received in the previous call to migrationJobs.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to migrationJobs.list must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent which owns this collection of migrationJobs.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.list = (params) => this._makeRequest('v1/{+parent}/migrationJobs', 'GET', params);

    /**
     * Gets details of a single migration job.
     * @param {string} params.name - (Required) Required. Name of the migration job resource to get.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new migration job in a given project and location.
     * @param {string} params.migrationJobId - Required. The ID of the instance to create.
     * @param {string} params.parent - (Required) Required. The parent which owns this collection of migration jobs.
     * @param {string} params.requestId - Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.create = (params) => this._makeRequest('v1/{+parent}/migrationJobs', 'POST', params);

    /**
     * Updates the parameters of a single migration job.
     * @param {string} params.name - (Required) The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}.
     * @param {string} params.requestId - A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten by the update in the conversion workspace resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single migration job.
     * @param {boolean} params.force - The destination CloudSQL connection profile is always deleted with the migration job. In case of force delete, the destination CloudSQL replica database is also deleted.
     * @param {string} params.name - (Required) Required. Name of the migration job resource to delete.
     * @param {string} params.requestId - A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Start an already created migration job.
     * @param {string} params.name - (Required) Name of the migration job resource to start.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.start = (params) => this._makeRequest('v1/{+name}:start', 'POST', params);

    /**
     * Stops a running migration job.
     * @param {string} params.name - (Required) Name of the migration job resource to stop.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.stop = (params) => this._makeRequest('v1/{+name}:stop', 'POST', params);

    /**
     * Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
     * @param {string} params.name - (Required) Name of the migration job resource to resume.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.resume = (params) => this._makeRequest('v1/{+name}:resume', 'POST', params);

    /**
     * Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
     * @param {string} params.name - (Required) Name of the migration job resource to promote.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.promote = (params) => this._makeRequest('v1/{+name}:promote', 'POST', params);

    /**
     * Demotes the destination database to become a read replica of the source. This is applicable for the following migrations: 1. MySQL to Cloud SQL for MySQL 2. PostgreSQL to Cloud SQL for PostgreSQL 3. PostgreSQL to AlloyDB for PostgreSQL.
     * @param {string} params.name - (Required) Name of the migration job resource to demote its destination.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.demoteDestination = (params) => this._makeRequest('v1/{+name}:demoteDestination', 'POST', params);

    /**
     * Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
     * @param {string} params.name - (Required) Name of the migration job resource to verify.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.verify = (params) => this._makeRequest('v1/{+name}:verify', 'POST', params);

    /**
     * Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
     * @param {string} params.name - (Required) Name of the migration job resource to restart.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.restart = (params) => this._makeRequest('v1/{+name}:restart', 'POST', params);

    /**
     * Generate a SSH configuration script to configure the reverse SSH connectivity.
     * @param {string} params.migrationJob - (Required) Name of the migration job resource to generate the SSH script.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.generateSshScript = (params) => this._makeRequest('v1/{+migrationJob}:generateSshScript', 'POST', params);

    /**
     * Generate a TCP Proxy configuration script to configure a cloud-hosted VM running a TCP Proxy.
     * @param {string} params.migrationJob - (Required) Name of the migration job resource to generate the TCP Proxy script.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.generateTcpProxyScript = (params) => this._makeRequest('v1/{+migrationJob}:generateTcpProxyScript', 'POST', params);

    /**
     * Retrieves objects from the source database that can be selected for data migration. This is applicable for the following migrations: 1. PostgreSQL to Cloud SQL for PostgreSQL 2. PostgreSQL to AlloyDB for PostgreSQL.
     * @param {string} params.name - (Required) Required. The resource name for the migration job for which source objects should be returned.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.fetchSourceObjects = (params) => this._makeRequest('v1/{+name}:fetchSourceObjects', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.migrationJobs.objects = {};

    /**
     * Use this method to get details about a migration job object.
     * @param {string} params.name - (Required) Required. The name of the migration job object resource to get.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.objects.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Use this method to look up a migration job object by its source object identifier.
     * @param {string} params.parent - (Required) Required. The parent migration job that owns the collection of objects.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.objects.lookup = (params) => this._makeRequest('v1/{+parent}/objects:lookup', 'POST', params);

    /**
     * Use this method to list the objects of a specific migration job.
     * @param {integer} params.pageSize - Maximum number of objects to return. Default is 50. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Page token received from a previous `ListMigrationJObObjectsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMigrationJobObjectsRequest` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent migration job that owns the collection of objects.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.objects.list = (params) => this._makeRequest('v1/{+parent}/objects', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.objects.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.objects.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.objects.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.connectionProfiles = {};

    /**
     * Retrieves a list of all connection profiles in a given project and location.
     * @param {string} params.filter - A filter expression that filters connection profiles listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list connection profiles created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z**. You can also filter nested fields. For example, you could specify **mySql.username = %lt;my_username%gt;** to list all connection profiles configured to connect with a specific username.
     * @param {string} params.orderBy - A comma-separated list of fields to order results according to.
     * @param {integer} params.pageSize - The maximum number of connection profiles to return. The service may return fewer than this value. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent which owns this collection of connection profiles.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.list = (params) => this._makeRequest('v1/{+parent}/connectionProfiles', 'GET', params);

    /**
     * Gets details of a single connection profile.
     * @param {string} params.name - (Required) Required. Name of the connection profile resource to get.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new connection profile in a given project and location.
     * @param {string} params.connectionProfileId - Required. The connection profile identifier.
     * @param {string} params.parent - (Required) Required. The parent which owns this collection of connection profiles.
     * @param {string} params.requestId - Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {boolean} params.skipValidation - Optional. Create the connection profile without validating it. The default is false. Only supported for Oracle connection profiles.
     * @param {boolean} params.validateOnly - Optional. Only validate the connection profile, but don't create any resources. The default is false. Only supported for Oracle connection profiles.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.create = (params) => this._makeRequest('v1/{+parent}/connectionProfiles', 'POST', params);

    /**
     * Update the configuration of a single connection profile.
     * @param {string} params.name - (Required) The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}.
     * @param {string} params.requestId - Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {boolean} params.skipValidation - Optional. Update the connection profile without validating it. The default is false. Only supported for Oracle connection profiles.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten by the update in the conversion workspace resource.
     * @param {boolean} params.validateOnly - Optional. Only validate the connection profile, but don't update any resources. The default is false. Only supported for Oracle connection profiles.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Database Migration Service connection profile. A connection profile can only be deleted if it is not in use by any active migration jobs.
     * @param {boolean} params.force - In case of force delete, the CloudSQL replica database is also deleted (only for CloudSQL connection profile).
     * @param {string} params.name - (Required) Required. Name of the connection profile resource to delete.
     * @param {string} params.requestId - A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.privateConnections = {};

    /**
     * Creates a new private connection in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent that owns the collection of PrivateConnections.
     * @param {string} params.privateConnectionId - Required. The private connection identifier.
     * @param {string} params.requestId - Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {boolean} params.skipValidation - Optional. If set to true, will skip validations.
     * @param {boolean} params.validateOnly - Optional. For PSC Interface only - get the tenant project before creating the resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.create = (params) => this._makeRequest('v1/{+parent}/privateConnections', 'POST', params);

    /**
     * Gets details of a single private connection.
     * @param {string} params.name - (Required) Required. The name of the private connection to get.
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Retrieves a list of private connections in a given project and location.
     * @param {string} params.filter - A filter expression that filters private connections listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list private connections created this year by specifying **createTime %gt; 2021-01-01T00:00:00.000000000Z**.
     * @param {string} params.orderBy - Order by fields for the result.
     * @param {integer} params.pageSize - Maximum number of private connections to return. If unspecified, at most 50 private connections that are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     * @param {string} params.pageToken - Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent that owns the collection of private connections.
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.list = (params) => this._makeRequest('v1/{+parent}/privateConnections', 'GET', params);

    /**
     * Deletes a single Database Migration Service private connection.
     * @param {string} params.name - (Required) Required. The name of the private connection to delete.
     * @param {string} params.requestId - Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.conversionWorkspaces = {};

    /**
     * Gets details of a single conversion workspace.
     * @param {string} params.name - (Required) Required. Name of the conversion workspace resource to get.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists conversion workspaces in a given project and location.
     * @param {string} params.filter - A filter expression that filters conversion workspaces listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list conversion workspaces created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z.** You can also filter nested fields. For example, you could specify **source.version = "12.c.1"** to select all conversion workspaces with source database version equal to 12.c.1.
     * @param {integer} params.pageSize - The maximum number of conversion workspaces to return. The service may return fewer than this value. If unspecified, at most 50 sets are returned.
     * @param {string} params.pageToken - The nextPageToken value received in the previous call to conversionWorkspaces.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to conversionWorkspaces.list must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent which owns this collection of conversion workspaces.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.list = (params) => this._makeRequest('v1/{+parent}/conversionWorkspaces', 'GET', params);

    /**
     * Creates a new conversion workspace in a given project and location.
     * @param {string} params.conversionWorkspaceId - Required. The ID of the conversion workspace to create.
     * @param {string} params.parent - (Required) Required. The parent which owns this collection of conversion workspaces.
     * @param {string} params.requestId - A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.create = (params) => this._makeRequest('v1/{+parent}/conversionWorkspaces', 'POST', params);

    /**
     * Updates the parameters of a single conversion workspace.
     * @param {string} params.name - (Required) Full name of the workspace resource, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
     * @param {string} params.requestId - A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten by the update in the conversion workspace resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single conversion workspace.
     * @param {boolean} params.force - Force delete the conversion workspace, even if there's a running migration that is using the workspace.
     * @param {string} params.name - (Required) Required. Name of the conversion workspace resource to delete.
     * @param {string} params.requestId - A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Imports a snapshot of the source database into the conversion workspace.
     * @param {string} params.name - (Required) Name of the conversion workspace resource to seed with new database structure, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.seed = (params) => this._makeRequest('v1/{+name}:seed', 'POST', params);

    /**
     * Creates a draft tree schema for the destination database.
     * @param {string} params.name - (Required) Name of the conversion workspace resource to convert in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.convert = (params) => this._makeRequest('v1/{+name}:convert', 'POST', params);

    /**
     * Marks all the data in the conversion workspace as committed.
     * @param {string} params.name - (Required) Required. Name of the conversion workspace resource to commit.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.commit = (params) => this._makeRequest('v1/{+name}:commit', 'POST', params);

    /**
     * Rolls back a conversion workspace to the last committed snapshot.
     * @param {string} params.name - (Required) Required. Name of the conversion workspace resource to roll back to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.rollback = (params) => this._makeRequest('v1/{+name}:rollback', 'POST', params);

    /**
     * Applies draft tree onto a specific destination database.
     * @param {string} params.name - (Required) Required. The name of the conversion workspace resource for which to apply the draft tree. Must be in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.apply = (params) => this._makeRequest('v1/{+name}:apply', 'POST', params);

    /**
     * Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.
     * @param {string} params.commitId - Optional. Request a specific commit ID. If not specified, the entities from the latest commit are returned.
     * @param {string} params.conversionWorkspace - (Required) Required. Name of the conversion workspace resource whose database entities are described. Must be in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
     * @param {string} params.filter - Optional. Filter the returned entities based on AIP-160 standard.
     * @param {integer} params.pageSize - Optional. The maximum number of entities to return. The service may return fewer entities than the value specifies.
     * @param {string} params.pageToken - Optional. The nextPageToken value received in the previous call to conversionWorkspace.describeDatabaseEntities, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to conversionWorkspace.describeDatabaseEntities must match the call that provided the page token.
     * @param {string} params.tree - Required. The tree to fetch.
     * @param {boolean} params.uncommitted - Optional. Whether to retrieve the latest committed version of the entities or the latest version. This field is ignored if a specific commit_id is specified.
     * @param {string} params.view - Optional. Results view based on AIP-157
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.describeDatabaseEntities = (params) => this._makeRequest('v1/{+conversionWorkspace}:describeDatabaseEntities', 'GET', params);

    /**
     * Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.
     * @param {string} params.completedUntilTime - Optional. If provided, only returns jobs that completed until (not including) the given timestamp.
     * @param {string} params.conversionWorkspace - (Required) Required. Name of the conversion workspace resource whose jobs are listed, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
     * @param {integer} params.maxSize - Optional. The maximum number of jobs to return. The service may return fewer than this value. If unspecified, at most 100 jobs are returned. The maximum value is 100; values above 100 are coerced to 100.
     * @param {boolean} params.returnMostRecentPerJobType - Optional. Whether or not to return just the most recent job per job type,
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.searchBackgroundJobs = (params) => this._makeRequest('v1/{+conversionWorkspace}:searchBackgroundJobs', 'GET', params);

    /**
     * Retrieves a list of committed revisions of a specific conversion workspace.
     * @param {string} params.commitId - Optional. Optional filter to request a specific commit ID.
     * @param {string} params.conversionWorkspace - (Required) Required. Name of the conversion workspace resource whose revisions are listed. Must be in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.describeConversionWorkspaceRevisions = (params) => this._makeRequest('v1/{+conversionWorkspace}:describeConversionWorkspaceRevisions', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.conversionWorkspaces.mappingRules = {};

    /**
     * Creates a new mapping rule for a given conversion workspace.
     * @param {string} params.mappingRuleId - Required. The ID of the rule to create.
     * @param {string} params.parent - (Required) Required. The parent which owns this collection of mapping rules.
     * @param {string} params.requestId - A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.mappingRules.create = (params) => this._makeRequest('v1/{+parent}/mappingRules', 'POST', params);

    /**
     * Deletes a single mapping rule.
     * @param {string} params.name - (Required) Required. Name of the mapping rule resource to delete.
     * @param {string} params.requestId - Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.mappingRules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists the mapping rules for a specific conversion workspace.
     * @param {integer} params.pageSize - The maximum number of rules to return. The service may return fewer than this value.
     * @param {string} params.pageToken - The nextPageToken value received in the previous call to mappingRules.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to mappingRules.list must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Name of the conversion workspace resource whose mapping rules are listed in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.mappingRules.list = (params) => this._makeRequest('v1/{+parent}/mappingRules', 'GET', params);

    /**
     * Gets the details of a mapping rule.
     * @param {string} params.name - (Required) Required. Name of the mapping rule resource to get. Example: conversionWorkspaces/123/mappingRules/rule123 In order to retrieve a previous revision of the mapping rule, also provide the revision ID. Example: conversionWorkspace/123/mappingRules/rule123@c7cfa2a8c7cfa2a8c7cfa2a8c7cfa2a8
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.mappingRules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.
     * @param {string} params.parent - (Required) Required. Name of the conversion workspace resource to import the rules to in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversionWorkspaces.mappingRules.import = (params) => this._makeRequest('v1/{+parent}/mappingRules:import', 'POST', params);
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
        url = url.replace(placeholder, remainingParams[paramName]);
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
