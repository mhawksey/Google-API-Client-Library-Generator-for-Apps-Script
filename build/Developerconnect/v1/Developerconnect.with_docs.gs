
/**
 * Google Apps Script client library for the Developer Connect API
 * Documentation URL: http://cloud.google.com/developer-connect/docs/overview
 * @class
 */
class Developerconnect {
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
    this._rootUrl = 'https://developerconnect.googleapis.com/';
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

    this.projects.locations.connections = {};

    /**
     * Lists Connections in a given project and location.
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Optional. Hint for how to order the results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListConnectionsRequest
     * @return {object} The API response object.
     */
    this.projects.locations.connections.list = (params) => this._makeRequest('v1/{+parent}/connections', 'GET', params);

    /**
     * Gets details of a single Connection.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @return {object} The API response object.
     */
    this.projects.locations.connections.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Connection in a given project and location.
     * @param {string} params.connectionId - Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validate the request, but do not actually post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.create = (params) => this._makeRequest('v1/{+parent}/connections', 'POST', params);

    /**
     * Updates the parameters of a single Connection.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties).
     * @param {string} params.name - (Required) Identifier. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Connection resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request, but do not actually post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Connection.
     * @param {string} params.etag - Optional. The current etag of the Connection. If an etag is provided and does not match the current etag of the Connection, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validate the request, but do not actually post it.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * FetchLinkableGitRepositories returns a list of git repositories from an SCM that are available to be added to a Connection.
     * @param {string} params.connection - (Required) Required. The name of the Connection. Format: `projects/*\/locations/*\/connections/*`.
     * @param {integer} params.pageSize - Optional. Number of results to return in the list. Defaults to 20.
     * @param {string} params.pageToken - Optional. Page start.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.fetchLinkableGitRepositories = (params) => this._makeRequest('v1/{+connection}:fetchLinkableGitRepositories', 'GET', params);

    /**
     * FetchGitHubInstallations returns the list of GitHub Installations that are available to be added to a Connection. For github.com, only installations accessible to the authorizer token are returned. For GitHub Enterprise, all installations are returned.
     * @param {string} params.connection - (Required) Required. The resource name of the connection in the format `projects/*\/locations/*\/connections/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.fetchGitHubInstallations = (params) => this._makeRequest('v1/{+connection}:fetchGitHubInstallations', 'GET', params);

    /**
     * ProcessGitHubEnterpriseWebhook is called by the external GitHub Enterprise instances for notifying events.
     * @param {string} params.parent - (Required) Required. Project and location where the webhook will be received. Format: `projects/*\/locations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.processGitHubEnterpriseWebhook = (params) => this._makeRequest('v1/{+parent}/connections:processGitHubEnterpriseWebhook', 'POST', params);

    this.projects.locations.connections.gitRepositoryLinks = {};

    /**
     * Creates a GitRepositoryLink. Upon linking a Git Repository, Developer Connect will configure the Git Repository to send webhook events to Developer Connect. Connections that use Firebase GitHub Application will have events forwarded to the Firebase service. All other Connections will have events forwarded to Cloud Build.
     * @param {string} params.gitRepositoryLinkId - Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validate the request, but do not actually post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.gitRepositoryLinks.create = (params) => this._makeRequest('v1/{+parent}/gitRepositoryLinks', 'POST', params);

    /**
     * Deletes a single GitRepositoryLink.
     * @param {string} params.etag - Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validate the request, but do not actually post it.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.gitRepositoryLinks.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists GitRepositoryLinks in a given project, location, and connection.
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Optional. Hint for how to order the results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListGitRepositoryLinksRequest
     * @return {object} The API response object.
     */
    this.projects.locations.connections.gitRepositoryLinks.list = (params) => this._makeRequest('v1/{+parent}/gitRepositoryLinks', 'GET', params);

    /**
     * Gets details of a single GitRepositoryLink.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @return {object} The API response object.
     */
    this.projects.locations.connections.gitRepositoryLinks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Fetches read/write token of a given gitRepositoryLink.
     * @param {string} params.gitRepositoryLink - (Required) Required. The resource name of the gitRepositoryLink in the format `projects/*\/locations/*\/connections/*\/gitRepositoryLinks/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.gitRepositoryLinks.fetchReadWriteToken = (params) => this._makeRequest('v1/{+gitRepositoryLink}:fetchReadWriteToken', 'POST', params);

    /**
     * Fetches read token of a given gitRepositoryLink.
     * @param {string} params.gitRepositoryLink - (Required) Required. The resource name of the gitRepositoryLink in the format `projects/*\/locations/*\/connections/*\/gitRepositoryLinks/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.gitRepositoryLinks.fetchReadToken = (params) => this._makeRequest('v1/{+gitRepositoryLink}:fetchReadToken', 'POST', params);

    /**
     * Fetch the list of branches or tags for a given repository.
     * @param {string} params.gitRepositoryLink - (Required) Required. The resource name of GitRepositoryLink in the format `projects/*\/locations/*\/connections/*\/gitRepositoryLinks/*`.
     * @param {integer} params.pageSize - Optional. Number of results to return in the list. Default to 20.
     * @param {string} params.pageToken - Optional. Page start.
     * @param {string} params.refType - Required. Type of refs to fetch.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.gitRepositoryLinks.fetchGitRefs = (params) => this._makeRequest('v1/{+gitRepositoryLink}:fetchGitRefs', 'GET', params);

    /**
     * ProcessGitLabEnterpriseWebhook is called by the external GitLab Enterprise instances for notifying events.
     * @param {string} params.name - (Required) Required. The GitRepositoryLink resource where the webhook will be received. Format: `projects/*\/locations/*\/connections/*\/gitRepositoryLinks/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.gitRepositoryLinks.processGitLabEnterpriseWebhook = (params) => this._makeRequest('v1/{+name}:processGitLabEnterpriseWebhook', 'POST', params);

    /**
     * ProcessGitLabWebhook is called by the GitLab.com for notifying events.
     * @param {string} params.name - (Required) Required. The GitRepositoryLink resource where the webhook will be received. Format: `projects/*\/locations/*\/connections/*\/gitRepositoryLinks/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.gitRepositoryLinks.processGitLabWebhook = (params) => this._makeRequest('v1/{+name}:processGitLabWebhook', 'POST', params);

    /**
     * ProcessBitbucketDataCenterWebhook is called by the external Bitbucket Data Center instances for notifying events.
     * @param {string} params.name - (Required) Required. The GitRepositoryLink where the webhook will be received. Format: `projects/*\/locations/*\/connections/*\/gitRepositoryLinks/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.gitRepositoryLinks.processBitbucketDataCenterWebhook = (params) => this._makeRequest('v1/{+name}:processBitbucketDataCenterWebhook', 'POST', params);

    /**
     * ProcessBitbucketCloudWebhook is called by the external Bitbucket Cloud instances for notifying events.
     * @param {string} params.name - (Required) Required. The GitRepositoryLink where the webhook will be received. Format: `projects/*\/locations/*\/connections/*\/gitRepositoryLinks/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.gitRepositoryLinks.processBitbucketCloudWebhook = (params) => this._makeRequest('v1/{+name}:processBitbucketCloudWebhook', 'POST', params);

    this.projects.locations.accountConnectors = {};

    /**
     * Lists AccountConnectors in a given project and location.
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Optional. Hint for how to order the results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListAccountConnectorsRequest
     * @return {object} The API response object.
     */
    this.projects.locations.accountConnectors.list = (params) => this._makeRequest('v1/{+parent}/accountConnectors', 'GET', params);

    /**
     * Gets details of a single AccountConnector.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @return {object} The API response object.
     */
    this.projects.locations.accountConnectors.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new AccountConnector in a given project and location.
     * @param {string} params.accountConnectorId - Required. The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name. Its format should adhere to https://google.aip.dev/122#resource-id-segments Names must be unique per-project per-location.
     * @param {string} params.parent - (Required) Required. Location resource name as the account_connector’s parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validate the request, but do not actually post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.accountConnectors.create = (params) => this._makeRequest('v1/{+parent}/accountConnectors', 'POST', params);

    /**
     * Updates the parameters of a single AccountConnector.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the accountConnector is not found a new accountConnector will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input accountConnector has all the necessary
     * @param {string} params.name - (Required) Identifier. The resource name of the accountConnector, in the format `projects/{project}/locations/{location}/accountConnectors/{account_connector_id}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. The list of fields to be updated.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request, but do not actually post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.accountConnectors.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single AccountConnector.
     * @param {string} params.etag - Optional. The current etag of the AccountConnectorn. If an etag is provided and does not match the current etag of the AccountConnector, deletion will be blocked and an ABORTED error will be returned.
     * @param {boolean} params.force - Optional. If set to true, any Users from this AccountConnector will also be deleted. (Otherwise, the request will only work if the AccountConnector has no Users.)
     * @param {string} params.name - (Required) Required. Name of the resource
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validate the request, but do not actually post it.
     * @return {object} The API response object.
     */
    this.projects.locations.accountConnectors.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.accountConnectors.users = {};

    /**
     * Fetches OAuth access token based on end user credentials.
     * @param {string} params.accountConnector - (Required) Required. The resource name of the AccountConnector in the format `projects/*\/locations/*\/accountConnectors/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.accountConnectors.users.fetchAccessToken = (params) => this._makeRequest('v1/{+accountConnector}/users:fetchAccessToken', 'POST', params);

    /**
     * Lists Users in a given project, location, and account_connector.
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Optional. Hint for how to order the results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListUsersRequest
     * @return {object} The API response object.
     */
    this.projects.locations.accountConnectors.users.list = (params) => this._makeRequest('v1/{+parent}/users', 'GET', params);

    /**
     * Deletes a single User.
     * @param {string} params.etag - Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validate the request, but do not actually post it.
     * @return {object} The API response object.
     */
    this.projects.locations.accountConnectors.users.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Fetch the User based on the user credentials.
     * @param {string} params.name - (Required) Required. Name of the AccountConnector resource
     * @return {object} The API response object.
     */
    this.projects.locations.accountConnectors.users.fetchSelf = (params) => this._makeRequest('v1/{+name}/users:fetchSelf', 'GET', params);

    /**
     * Delete the User based on the user credentials.
     * @param {string} params.name - (Required) Required. Name of the AccountConnector resource
     * @return {object} The API response object.
     */
    this.projects.locations.accountConnectors.users.deleteSelf = (params) => this._makeRequest('v1/{+name}/users:deleteSelf', 'DELETE', params);

    this.projects.locations.insightsConfigs = {};

    /**
     * Lists InsightsConfigs in a given project and location.
     * @param {string} params.filter - Optional. Filtering results. See https://google.aip.dev/160 for more details. Filter string, adhering to the rules in https://google.aip.dev/160. List only InsightsConfigs matching the filter. If filter is empty, all InsightsConfigs are listed.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListInsightsConfigsRequest.
     * @return {object} The API response object.
     */
    this.projects.locations.insightsConfigs.list = (params) => this._makeRequest('v1/{+parent}/insightsConfigs', 'GET', params);

    /**
     * Creates a new InsightsConfig in a given project and location.
     * @param {string} params.insightsConfigId - Required. ID of the requesting InsightsConfig.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request, but do not actually post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.insightsConfigs.create = (params) => this._makeRequest('v1/{+parent}/insightsConfigs', 'POST', params);

    /**
     * Gets details of a single Insight.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @return {object} The API response object.
     */
    this.projects.locations.insightsConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the parameters of a single InsightsConfig.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the insightsConfig is not found a new insightsConfig will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input insightsConfig has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties).
     * @param {string} params.name - (Required) Identifier. The name of the InsightsConfig. Format: projects/{project}/locations/{location}/insightsConfigs/{insightsConfig}
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validate the request, but do not actually post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.insightsConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a single Insight.
     * @param {string} params.etag - Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     * @param {string} params.name - (Required) Required. Value for parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validate the request, but do not actually post it.
     * @return {object} The API response object.
     */
    this.projects.locations.insightsConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
