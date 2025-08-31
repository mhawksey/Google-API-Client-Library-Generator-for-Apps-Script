
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
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

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

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.migrationJobs = {};

    /**
     * Lists migration jobs in a given project and location.
     * @param {string} params.filter - A filter expression that filters migration jobs listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list migration jobs created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z.** You can also filter nested fields. For example, you could specify **reverseSshConnectivity.vmIp = "1.2.3.4"** to select all migration jobs connecting through the specific SSH tunnel bastion.
     * @param {string} params.orderBy - Sort the results based on the migration job name. Valid values are: "name", "name asc", and "name desc".
     * @param {integer} params.pageSize - The maximum number of migration jobs to return. The service may return fewer than this value. If unspecified, at most 50 migration jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - The nextPageToken value received in the previous call to migrationJobs.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to migrationJobs.list must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of migrationJobs.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.list = (params) => this._makeRequest('v1beta1/{+parent}/migrationJobs', 'GET', params);

    /**
     * Gets details of a single migration job.
     * @param {string} params.name - (Required) Required. Name of the migration job resource to get.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new migration job in a given project and location.
     * @param {string} params.migrationJobId - Required. The ID of the instance to create.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of migration jobs.
     * @param {string} params.requestId - A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.create = (params) => this._makeRequest('v1beta1/{+parent}/migrationJobs', 'POST', params);

    /**
     * Updates the parameters of a single migration job.
     * @param {string} params.name - (Required) The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}.
     * @param {string} params.requestId - A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the migration job resource by the update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a single migration job.
     * @param {boolean} params.force - The destination CloudSQL connection profile is always deleted with the migration job. In case of force delete, the destination CloudSQL replica database is also deleted.
     * @param {string} params.name - (Required) Required. Name of the migration job resource to delete.
     * @param {string} params.requestId - A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Start an already created migration job.
     * @param {string} params.name - (Required) Name of the migration job resource to start.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.start = (params) => this._makeRequest('v1beta1/{+name}:start', 'POST', params);

    /**
     * Stops a running migration job.
     * @param {string} params.name - (Required) Name of the migration job resource to stop.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.stop = (params) => this._makeRequest('v1beta1/{+name}:stop', 'POST', params);

    /**
     * Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
     * @param {string} params.name - (Required) Name of the migration job resource to resume.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.resume = (params) => this._makeRequest('v1beta1/{+name}:resume', 'POST', params);

    /**
     * Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
     * @param {string} params.name - (Required) Name of the migration job resource to promote.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.promote = (params) => this._makeRequest('v1beta1/{+name}:promote', 'POST', params);

    /**
     * Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
     * @param {string} params.name - (Required) Name of the migration job resource to verify.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.verify = (params) => this._makeRequest('v1beta1/{+name}:verify', 'POST', params);

    /**
     * Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
     * @param {string} params.name - (Required) Name of the migration job resource to restart.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.restart = (params) => this._makeRequest('v1beta1/{+name}:restart', 'POST', params);

    /**
     * Generate a SSH configuration script to configure the reverse SSH connectivity.
     * @param {string} params.migrationJob - (Required) Name of the migration job resource to generate the SSH script.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.generateSshScript = (params) => this._makeRequest('v1beta1/{+migrationJob}:generateSshScript', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.migrationJobs.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.connectionProfiles = {};

    /**
     * Retrieve a list of all connection profiles in a given project and location.
     * @param {string} params.filter - A filter expression that filters connection profiles listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list connection profiles created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z**. You can also filter nested fields. For example, you could specify **mySql.username = %lt;my_username%gt;** to list all connection profiles configured to connect with a specific username.
     * @param {string} params.orderBy - the order by fields for the result.
     * @param {integer} params.pageSize - The maximum number of connection profiles to return. The service may return fewer than this value. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of connection profiles.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.list = (params) => this._makeRequest('v1beta1/{+parent}/connectionProfiles', 'GET', params);

    /**
     * Gets details of a single connection profile.
     * @param {string} params.name - (Required) Required. Name of the connection profile resource to get.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new connection profile in a given project and location.
     * @param {string} params.connectionProfileId - Required. The connection profile identifier.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of connection profiles.
     * @param {string} params.requestId - A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.create = (params) => this._makeRequest('v1beta1/{+parent}/connectionProfiles', 'POST', params);

    /**
     * Update the configuration of a single connection profile.
     * @param {string} params.name - (Required) The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}.
     * @param {string} params.requestId - A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the connection profile resource by the update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Database Migration Service connection profile. A connection profile can only be deleted if it is not in use by any active migration jobs.
     * @param {boolean} params.force - In case of force delete, the CloudSQL replica database is also deleted (only for CloudSQL connection profile).
     * @param {string} params.name - (Required) Required. Name of the connection profile resource to delete.
     * @param {string} params.requestId - A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);
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
