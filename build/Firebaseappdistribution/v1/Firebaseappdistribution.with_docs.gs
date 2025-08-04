
/**
 * Google Apps Script client library for the Firebase App Distribution API
 * Documentation URL: https://firebase.google.com/products/app-distribution
 * @class
 */
class Firebaseappdistribution {
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
    this._rootUrl = 'https://firebaseappdistribution.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.apps = {};

    /**
     * Gets Android App Bundle (AAB) information for a Firebase app.
     * @param {string} params.name - (Required) Required. The name of the `AabInfo` resource to retrieve. Format: `projects/{project_number}/apps/{app_id}/aabInfo`
     * @return {object} The API response object.
     */
    this.projects.apps.getAabInfo = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.apps.releases = {};

    /**
     * Gets a release.
     * @param {string} params.name - (Required) Required. The name of the release resource to retrieve. Format: projects/{project_number}/apps/{app_id}/releases/{release_id}
     * @return {object} The API response object.
     */
    this.projects.apps.releases.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists releases. By default, sorts by `createTime` in descending order.
     * @param {string} params.filter - The expression to filter releases listed in the response. To learn more about filtering, refer to [Google's AIP-160 standard](http://aip.dev/160). Supported fields: - `releaseNotes.text` supports `=` (can contain a wildcard character (`*`) at the beginning or end of the string) - `createTime` supports `<`, `<=`, `>` and `>=`, and expects an RFC-3339 formatted string Examples: - `createTime <= "2021-09-08T00:00:00+04:00"` - `releaseNotes.text="fixes" AND createTime >= "2021-09-08T00:00:00.0Z"` - `releaseNotes.text="*v1.0.0-rc*"`
     * @param {string} params.orderBy - The fields used to order releases. Supported fields: - `createTime` To specify descending order for a field, append a "desc" suffix, for example, `createTime desc`. If this parameter is not set, releases are ordered by `createTime` in descending order.
     * @param {integer} params.pageSize - The maximum number of releases to return. The service may return fewer than this value. The valid range is [1-100]; If unspecified (0), at most 25 releases are returned. Values above 100 are coerced to 100.
     * @param {string} params.pageToken - A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReleases` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The name of the app resource, which is the parent of the release resources. Format: `projects/{project_number}/apps/{app_id}`
     * @return {object} The API response object.
     */
    this.projects.apps.releases.list = (params) => this._makeRequest('v1/{+parent}/releases', 'GET', params);

    /**
     * Updates a release.
     * @param {string} params.name - (Required) The name of the release resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}`
     * @param {string} params.updateMask - The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.releases.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.
     * @param {string} params.name - (Required) Required. The name of the release resource to distribute. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.releases.distribute = (params) => this._makeRequest('v1/{+name}:distribute', 'POST', params);

    /**
     * Deletes releases. A maximum of 100 releases can be deleted per request.
     * @param {string} params.parent - (Required) Required. The name of the app resource, which is the parent of the release resources. Format: `projects/{project_number}/apps/{app_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.releases.batchDelete = (params) => this._makeRequest('v1/{+parent}/releases:batchDelete', 'POST', params);

    this.projects.apps.releases.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.apps.releases.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.apps.releases.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.apps.releases.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.releases.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.releases.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.apps.releases.feedbackReports = {};

    /**
     * Gets a feedback report.
     * @param {string} params.name - (Required) Required. The name of the feedback report to retrieve. Format: projects/{project_number}/apps/{app}/releases/{release}/feedbackReports/{feedback_report}
     * @return {object} The API response object.
     */
    this.projects.apps.releases.feedbackReports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists feedback reports. By default, sorts by `createTime` in descending order.
     * @param {integer} params.pageSize - The maximum number of feedback reports to return. The service may return fewer than this value. The valid range is [1-100]; If unspecified (0), at most 25 feedback reports are returned. Values above 100 are coerced to 100.
     * @param {string} params.pageToken - A page token, received from a previous `ListFeedbackReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFeedbackReports` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The name of the release resource, which is the parent of the feedback report resources. Format: `projects/{project_number}/apps/{app}/releases/{release}`
     * @return {object} The API response object.
     */
    this.projects.apps.releases.feedbackReports.list = (params) => this._makeRequest('v1/{+parent}/feedbackReports', 'GET', params);

    /**
     * Deletes a feedback report.
     * @param {string} params.name - (Required) Required. The name of the feedback report to delete. Format: projects/{project_number}/apps/{app}/releases/{release}/feedbackReports/{feedback_report}
     * @return {object} The API response object.
     */
    this.projects.apps.releases.feedbackReports.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.testers = {};

    /**
     * Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.
     * @param {string} params.project - (Required) Required. The name of the project resource. Format: `projects/{project_number}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.testers.batchAdd = (params) => this._makeRequest('v1/{+project}/testers:batchAdd', 'POST', params);

    /**
     * Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.
     * @param {string} params.project - (Required) Required. The name of the project resource. Format: `projects/{project_number}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.testers.batchRemove = (params) => this._makeRequest('v1/{+project}/testers:batchRemove', 'POST', params);

    /**
     * Lists testers and their resource ids.
     * @param {string} params.filter - Optional. The expression to filter testers listed in the response. To learn more about filtering, refer to [Google's AIP-160 standard](http://aip.dev/160). Supported fields: - `name` - `displayName` - `groups` Example: - `name = "projects/-/testers/*@example.com"` - `displayName = "Joe Sixpack"` - `groups = "projects/*\/groups/qa-team"`
     * @param {integer} params.pageSize - Optional. The maximum number of testers to return. The service may return fewer than this value. The valid range is [1-1000]; If unspecified (0), at most 10 testers are returned. Values above 1000 are coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListTesters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTesters` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The name of the project resource, which is the parent of the tester resources. Format: `projects/{project_number}`
     * @return {object} The API response object.
     */
    this.projects.testers.list = (params) => this._makeRequest('v1/{+parent}/testers', 'GET', params);

    /**
     * Update a tester. If the testers joins a group they gain access to all releases that the group has access to.
     * @param {string} params.name - (Required) The name of the tester resource. Format: `projects/{project_number}/testers/{email_address}`
     * @param {string} params.updateMask - The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.testers.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.groups = {};

    /**
     * Get a group.
     * @param {string} params.name - (Required) Required. The name of the group resource to retrieve. Format: `projects/{project_number}/groups/{group_alias}`
     * @return {object} The API response object.
     */
    this.projects.groups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List groups.
     * @param {integer} params.pageSize - Optional. The maximum number of groups to return. The service may return fewer than this value. The valid range is [1-1000]; If unspecified (0), at most 25 groups are returned. Values above 1000 are coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGroups` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The name of the project resource, which is the parent of the group resources. Format: `projects/{project_number}`
     * @return {object} The API response object.
     */
    this.projects.groups.list = (params) => this._makeRequest('v1/{+parent}/groups', 'GET', params);

    /**
     * Create a group.
     * @param {string} params.groupId - Optional. The "alias" to use for the group, which will become the final component of the group's resource name. This value must be unique per project. The field is named `groupId` to comply with AIP guidance for user-specified IDs. This value should be 4-63 characters, and valid characters are `/a-z-/`. If not set, it will be generated based on the display name.
     * @param {string} params.parent - (Required) Required. The name of the project resource, which is the parent of the group resource. Format: `projects/{project_number}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.groups.create = (params) => this._makeRequest('v1/{+parent}/groups', 'POST', params);

    /**
     * Update a group.
     * @param {string} params.name - (Required) The name of the group resource. Format: `projects/{project_number}/groups/{group_alias}`
     * @param {string} params.updateMask - The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.groups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a group.
     * @param {string} params.name - (Required) Required. The name of the group resource. Format: `projects/{project_number}/groups/{group_alias}`
     * @return {object} The API response object.
     */
    this.projects.groups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Batch adds members to a group. The testers will gain access to all releases that the groups have access to.
     * @param {string} params.group - (Required) Required. The name of the group resource to which testers are added. Format: `projects/{project_number}/groups/{group_alias}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.groups.batchJoin = (params) => this._makeRequest('v1/{+group}:batchJoin', 'POST', params);

    /**
     * Batch removed members from a group. The testers will lose access to all releases that the groups have access to.
     * @param {string} params.group - (Required) Required. The name of the group resource from which testers are removed. Format: `projects/{project_number}/groups/{group_alias}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.groups.batchLeave = (params) => this._makeRequest('v1/{+group}:batchLeave', 'POST', params);

    this.media = {};

    /**
     * Uploads a binary. Uploading a binary can result in a new release being created, an update to an existing release, or a no-op if a release with the same binary already exists.
     * @param {string} params.app - (Required) The name of the app resource. Format: `projects/{project_number}/apps/{app_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.media.upload = (params) => this._makeRequest('v1/{+app}/releases:upload', 'POST', params);
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
