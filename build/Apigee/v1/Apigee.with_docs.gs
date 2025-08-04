
/**
 * Google Apps Script client library for the Apigee API
 * Documentation URL: https://cloud.google.com/apigee-api-management/
 * @class
 */
class Apigee {
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
    this._rootUrl = 'https://apigee.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.hybrid = {};

    this.hybrid.issuers = {};

    /**
     * Lists hybrid services and its trusted issuers service account ids. This api is authenticated and unauthorized(allow all the users) and used by runtime authn-authz service to query control plane's issuer service account ids.
     * @param {string} params.name - (Required) Required. Must be of the form `hybrid/issuers`.
     * @return {object} The API response object.
     */
    this.hybrid.issuers.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations = {};

    /**
     * Lists the Apigee organizations and associated Google Cloud projects that you have permission to access. See [Understanding organizations](https://cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure).
     * @param {string} params.parent - (Required) Required. Use the following structure in your request: `organizations`
     * @return {object} The API response object.
     */
    this.organizations.list = (params) => this._makeRequest('v1/{+parent}', 'GET', params);

    /**
     * Gets the profile for an Apigee organization. See [Understanding organizations](https://cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure).
     * @param {string} params.name - (Required) Required. Apigee organization name in the following format: `organizations/{org}`
     * @return {object} The API response object.
     */
    this.organizations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates an Apigee organization. See [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
     * @param {string} params.parent - Required. Name of the Google Cloud project in which to associate the Apigee organization. Pass the information as a query parameter using the following structure in your request: `projects/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.create = (params) => this._makeRequest('v1/organizations', 'POST', params);

    /**
     * Updates the properties for an Apigee organization. No other fields in the organization profile will be updated.
     * @param {string} params.name - (Required) Required. Apigee organization name in the following format: `organizations/{org}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Delete an Apigee organization. For organizations with BillingType EVALUATION, an immediate deletion is performed. For paid organizations (Subscription or Pay-as-you-go), a soft-deletion is performed. The organization can be restored within the soft-deletion period, which is specified using the `retention` field in the request or by filing a support ticket with Apigee. During the data retention period specified in the request, the Apigee organization cannot be recreated in the same Google Cloud project. **IMPORTANT: The default data retention setting for this operation is 7 days. To permanently delete the organization in 24 hours, set the retention parameter to `MINIMUM`.**
     * @param {string} params.name - (Required) Required. Name of the organization. Use the following structure in your request: `organizations/{org}`
     * @param {string} params.retention - Optional. This setting is applicable only for organizations that are soft-deleted (i.e., BillingType is not EVALUATION). It controls how long Organization data will be retained after the initial delete operation completes. During this period, the Organization may be restored to its last known state. After this period, the Organization will no longer be able to be restored. **Note: During the data retention period specified using this field, the Apigee organization cannot be recreated in the same Google Cloud project.**
     * @return {object} The API response object.
     */
    this.organizations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists the service accounts with the permissions required to allow the Synchronizer to download environment data from the control plane. An ETag is returned in the response to `getSyncAuthorization`. Pass that ETag when calling [setSyncAuthorization](setSyncAuthorization) to ensure that you are updating the correct version. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.
     * @param {string} params.name - (Required) Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.getSyncAuthorization = (params) => this._makeRequest('v1/{+name}:getSyncAuthorization', 'POST', params);

    /**
     * Sets the permissions required to allow the Synchronizer to download environment data from the control plane. You must call this API to enable proper functioning of hybrid. Pass the ETag when calling `setSyncAuthorization` to ensure that you are updating the correct version. To get an ETag, call [getSyncAuthorization](getSyncAuthorization). If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.
     * @param {string} params.name - (Required) Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.setSyncAuthorization = (params) => this._makeRequest('v1/{+name}:setSyncAuthorization', 'POST', params);

    /**
     * Lists the service accounts allowed to access Apigee control plane directly for limited functionality. **Note**: Available to Apigee hybrid only.
     * @param {string} params.name - (Required) Required. Resource name of the Control Plane Access. Use the following structure in your request: `organizations/{org}/controlPlaneAccess`
     * @return {object} The API response object.
     */
    this.organizations.getControlPlaneAccess = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the permissions required to allow Apigee runtime-plane components access to the control plane. Currently, the permissions required are to: 1. Allow runtime components to publish analytics data to the control plane. **Note**: Available to Apigee hybrid only.
     * @param {string} params.name - (Required) Identifier. The resource name of the ControlPlaneAccess. Format: "organizations/{org}/controlPlaneAccess"
     * @param {string} params.updateMask - List of fields to be updated. Fields that can be updated: synchronizer_identities, publisher_identities.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.updateControlPlaneAccess = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Configures the add-ons for the Apigee organization. The existing add-on configuration will be fully replaced.
     * @param {string} params.org - (Required) Required. Name of the organization. Use the following structure in your request: `organizations/{org}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.setAddons = (params) => this._makeRequest('v1/{+org}:setAddons', 'POST', params);

    /**
     * Gets the project ID and region for an Apigee organization.
     * @param {string} params.name - (Required) Required. Apigee organization name in the following format: `organizations/{org}`
     * @return {object} The API response object.
     */
    this.organizations.getProjectMapping = (params) => this._makeRequest('v1/{+name}:getProjectMapping', 'GET', params);

    /**
     * Gets the deployed ingress configuration for an organization.
     * @param {string} params.name - (Required) Required. Name of the deployed configuration for the organization in the following format: 'organizations/{org}/deployedIngressConfig'.
     * @param {string} params.view - When set to FULL, additional details about the specific deployments receiving traffic will be included in the IngressConfig response's RoutingRules.
     * @return {object} The API response object.
     */
    this.organizations.getDeployedIngressConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Get runtime config for an organization.
     * @param {string} params.name - (Required) Required. Name of the runtime config for the organization in the following format: 'organizations/{org}/runtimeConfig'.
     * @return {object} The API response object.
     */
    this.organizations.getRuntimeConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * GetSecuritySettings gets the security settings for API Security.
     * @param {string} params.name - (Required) Required. The name of the SecuritySettings to retrieve. This will always be: 'organizations/{org}/securitySettings'.
     * @return {object} The API response object.
     */
    this.organizations.getSecuritySettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * UpdateSecuritySettings updates the current security settings for API Security.
     * @param {string} params.name - (Required) Identifier. Full resource name is always `organizations/{org}/securitySettings`.
     * @param {string} params.updateMask - Optional. The list of fields to update. Allowed fields are: - ml_retraining_feedback_enabled
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.updateSecuritySettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.apis = {};

    /**
     * Lists the names of all API proxies in an organization. The names returned correspond to the names defined in the configuration files for each API proxy. If the resource has the `space` attribute set, the response may not return all resources. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {boolean} params.includeMetaData - Flag that specifies whether to include API proxy metadata in the response.
     * @param {boolean} params.includeRevisions - Flag that specifies whether to include a list of revisions in the response.
     * @param {string} params.parent - (Required) Required. Name of the organization in the following format: `organizations/{org}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {string} params.space - Optional. The space ID to filter the list of proxies (optional). If unspecified, all proxies in the organization will be listed.
     * @return {object} The API response object.
     */
    this.organizations.apis.list = (params) => this._makeRequest('v1/{+parent}/apis', 'GET', params);

    /**
     * Updates an existing API proxy.
     * @param {string} params.name - (Required) Required. API proxy to update in the following format: `organizations/{org}/apis/{api}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.apis.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Moves an API proxy to a different space.
     * @param {string} params.name - (Required) Required. API proxy to move in the following format: `organizations/{org}/apis/{api}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.apis.move = (params) => this._makeRequest('v1/{+name}:move', 'POST', params);

    /**
     * Gets an API proxy including a list of existing revisions.
     * @param {string} params.name - (Required) Required. Name of the API proxy in the following format: `organizations/{org}/apis/{api}` If the API Proxy resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apis.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes an API proxy and all associated endpoints, policies, resources, and revisions. The API proxy must be undeployed before you can delete it.
     * @param {string} params.name - (Required) Required. Name of the API proxy in the following format: `organizations/{org}/apis/{api}` If the API Proxy resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apis.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Creates an API proxy. The API proxy created will not be accessible at runtime until it is deployed to an environment. Create a new API proxy by setting the `name` query parameter to the name of the API proxy. Import an API proxy configuration bundle stored in zip format on your local machine to your organization by doing the following: * Set the `name` query parameter to the name of the API proxy. * Set the `action` query parameter to `import`. * Set the `Content-Type` header to `multipart/form-data`. * Pass as a file the name of API proxy configuration bundle stored in zip format on your local machine using the `file` form field. **Note**: To validate the API proxy configuration bundle only without importing it, set the `action` query parameter to `validate`. When importing an API proxy configuration bundle, if the API proxy does not exist, it will be created. If the API proxy exists, then a new revision is created. Invalid API proxy configurations are rejected, and a list of validation errors is returned to the client.
     * @param {string} params.action - Action to perform when importing an API proxy configuration bundle. Set this parameter to one of the following values: * `import` to import the API proxy configuration bundle. * `validate` to validate the API proxy configuration bundle without importing it.
     * @param {string} params.name - Name of the API proxy. Restrict the characters used to: A-Za-z0-9._-
     * @param {string} params.parent - (Required) Required. Name of the organization in the following format: `organizations/{org}` If the API Proxy resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {string} params.space - Optional. The ID of the space associated with this proxy. Any IAM policies applied to the space will affect access to this proxy. Note that this field is only respected when creating a new proxy. It has no effect when creating a new revision for an existing proxy.
     * @param {boolean} params.validate - Ignored. All uploads are validated regardless of the value of this field. Maintained for compatibility with Apigee Edge API.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.apis.create = (params) => this._makeRequest('v1/{+parent}/apis', 'POST', params);

    this.organizations.apis.revisions = {};

    /**
     * Updates an existing API proxy revision by uploading the API proxy configuration bundle as a zip file from your local machine. You can update only API proxy revisions that have never been deployed. After deployment, an API proxy revision becomes immutable, even if it is undeployed. Set the `Content-Type` header to either `multipart/form-data` or `application/octet-stream`.
     * @param {string} params.name - (Required) Required. API proxy revision to update in the following format: `organizations/{org}/apis/{api}/revisions/{rev}` If the API Proxy resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {boolean} params.validate - Ignored. All uploads are validated regardless of the value of this field. Maintained for compatibility with Apigee Edge API.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.apis.revisions.updateApiProxyRevision = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    /**
     * Gets an API proxy revision. To download the API proxy configuration bundle for the specified revision as a zip file, set the `format` query parameter to `bundle`. If you are using curl, specify `-o filename.zip` to save the output to a file; otherwise, it displays to `stdout`. Then, develop the API proxy configuration locally and upload the updated API proxy configuration revision, as described in [updateApiProxyRevision](updateApiProxyRevision).
     * @param {string} params.format - Format used when downloading the API proxy configuration revision. Set to `bundle` to download the API proxy configuration revision as a zip file.
     * @param {string} params.name - (Required) Required. API proxy revision in the following format: `organizations/{org}/apis/{api}/revisions/{rev}` If the API Proxy resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apis.revisions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes an API proxy revision and all policies, resources, endpoints, and revisions associated with it. The API proxy revision must be undeployed before you can delete it.
     * @param {string} params.name - (Required) Required. API proxy revision in the following format: `organizations/{org}/apis/{api}/revisions/{rev}` If the API Proxy resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apis.revisions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.apis.revisions.deployments = {};

    /**
     * Lists all deployments of an API proxy revision.
     * @param {string} params.parent - (Required) Required. Name of the API proxy revision for which to return deployment information in the following format: `organizations/{org}/apis/{api}/revisions/{rev}`. If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apis.revisions.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    this.organizations.apis.deployments = {};

    /**
     * Lists all deployments of an API proxy.
     * @param {string} params.parent - (Required) Required. Name of the API proxy for which to return deployment information in the following format: `organizations/{org}/apis/{api}` If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apis.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    this.organizations.apis.keyvaluemaps = {};

    /**
     * Creates a key value map in an API proxy.
     * @param {string} params.parent - (Required) Required. Name of the environment in which to create the key value map. Use the following structure in your request: `organizations/{org}/apis/{api}` If the API Proxy resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.apis.keyvaluemaps.create = (params) => this._makeRequest('v1/{+parent}/keyvaluemaps', 'POST', params);

    /**
     * Deletes a key value map from an API proxy.
     * @param {string} params.name - (Required) Required. Name of the key value map. Use the following structure in your request: `organizations/{org}/apis/{api}/keyvaluemaps/{keyvaluemap}` If the API Proxy resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apis.keyvaluemaps.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.apis.keyvaluemaps.entries = {};

    /**
     * Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
     * @param {string} params.name - (Required) Required. Scope as indicated by the URI in which to fetch the key value map entry/value. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}/entries/{entry}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apis.keyvaluemaps.entries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. **Notes:** * After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior. * Supported for Apigee hybrid 1.8.x and higher.
     * @param {string} params.name - (Required) Required. Scope as indicated by the URI in which to delete the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}/entries/{entry}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apis.keyvaluemaps.entries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
     * @param {string} params.parent - (Required) Required. Scope as indicated by the URI in which to create the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.apis.keyvaluemaps.entries.create = (params) => this._makeRequest('v1/{+parent}/entries', 'POST', params);

    /**
     * Update key value entry scoped to an organization, environment, or API proxy for an existing key.
     * @param {string} params.name - (Required) Required. Scope as indicated by the URI in which to create the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.apis.keyvaluemaps.entries.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
     * @param {integer} params.pageSize - Optional. Maximum number of key value entries to return. If unspecified, at most 100 entries will be returned.
     * @param {string} params.pageToken - Optional. Page token. If provides, must be a valid key value entry returned from a previous call that can be used to retrieve the next page.
     * @param {string} params.parent - (Required) Required. Scope as indicated by the URI in which to list key value maps. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apis.keyvaluemaps.entries.list = (params) => this._makeRequest('v1/{+parent}/entries', 'GET', params);

    this.organizations.apis.debugsessions = {};

    /**
     * Lists debug sessions that are currently active in the given API Proxy.
     * @param {integer} params.pageSize - Optional. Maximum number of debug sessions to return. The page size defaults to 25.
     * @param {string} params.pageToken - Optional. Page token, returned from a previous ListApiDebugSessions call, that you can use to retrieve the next page.
     * @param {string} params.parent - (Required) Required. The name of the API Proxy for which to list debug sessions. Must be of the form: `organizations/{organization}/apis/{api}`.
     * @return {object} The API response object.
     */
    this.organizations.apis.debugsessions.list = (params) => this._makeRequest('v1/{+parent}/debugsessions', 'GET', params);

    this.organizations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.organizations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.organizations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.datacollectors = {};

    /**
     * Creates a new data collector.
     * @param {string} params.dataCollectorId - ID of the data collector. Overrides any ID in the data collector resource. Must be a string beginning with `dc_` that contains only letters, numbers, and underscores.
     * @param {string} params.parent - (Required) Required. Name of the organization in which to create the data collector in the following format: `organizations/{org}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.datacollectors.create = (params) => this._makeRequest('v1/{+parent}/datacollectors', 'POST', params);

    /**
     * Lists all data collectors.
     * @param {integer} params.pageSize - Maximum number of data collectors to return. The page size defaults to 25.
     * @param {string} params.pageToken - Page token, returned from a previous ListDataCollectors call, that you can use to retrieve the next page.
     * @param {string} params.parent - (Required) Required. Name of the organization for which to list data collectors in the following format: `organizations/{org}`.
     * @return {object} The API response object.
     */
    this.organizations.datacollectors.list = (params) => this._makeRequest('v1/{+parent}/datacollectors', 'GET', params);

    /**
     * Gets a data collector.
     * @param {string} params.name - (Required) Required. Name of the data collector in the following format: `organizations/{org}/datacollectors/{data_collector_id}`.
     * @return {object} The API response object.
     */
    this.organizations.datacollectors.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a data collector.
     * @param {string} params.name - (Required) Required. Name of the data collector in the following format: `organizations/{org}/datacollectors/{data_collector_id}`.
     * @param {string} params.updateMask - List of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.datacollectors.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a data collector.
     * @param {string} params.name - (Required) Required. Name of the data collector in the following format: `organizations/{org}/datacollectors/{data_collector_id}`.
     * @return {object} The API response object.
     */
    this.organizations.datacollectors.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.environments = {};

    /**
     * Gets the debug mask singleton resource for an environment.
     * @param {string} params.name - (Required) Required. Name of the debug mask. Use the following structure in your request: `organizations/{org}/environments/{env}/debugmask`.
     * @return {object} The API response object.
     */
    this.organizations.environments.getDebugmask = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the debug mask singleton resource for an environment.
     * @param {string} params.name - (Required) Name of the debug mask.
     * @param {boolean} params.replaceRepeatedFields - Boolean flag that specifies whether to replace existing values in the debug mask when doing an update. Set to true to replace existing values. The default behavior is to append the values (false).
     * @param {string} params.updateMask - Field debug mask to support partial updates.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.updateDebugmask = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Get distributed trace configuration in an environment.
     * @param {string} params.name - (Required) Required. Name of the trace configuration. Use the following structure in your request: "organizations/*\/environments/*\/traceConfig".
     * @return {object} The API response object.
     */
    this.organizations.environments.getTraceConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the trace configurations in an environment. Note that the repeated fields have replace semantics when included in the field mask and that they will be overwritten by the value of the fields in the request body.
     * @param {string} params.name - (Required) Required. Name of the trace configuration. Use the following structure in your request: "organizations/*\/environments/*\/traceConfig".
     * @param {string} params.updateMask - List of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.updateTraceConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Creates an environment in an organization.
     * @param {string} params.name - Optional. Name of the environment.
     * @param {string} params.parent - (Required) Required. Name of the organization in which the environment will be created. Use the following structure in your request: `organizations/{org}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.create = (params) => this._makeRequest('v1/{+parent}/environments', 'POST', params);

    /**
     * Deletes an environment from an organization. **Warning: You must delete all key value maps and key value entries before you delete an environment.** Otherwise, if you re-create the environment the key value map entry operations will encounter encryption/decryption discrepancies.
     * @param {string} params.name - (Required) Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}`
     * @return {object} The API response object.
     */
    this.organizations.environments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets environment details.
     * @param {string} params.name - (Required) Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}`
     * @return {object} The API response object.
     */
    this.organizations.environments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates an existing environment. When updating properties, you must pass all existing properties to the API, even if they are not being changed. If you omit properties from the payload, the properties are removed. To get the current list of properties for the environment, use the [Get Environment API](get). **Note**: Both `PUT` and `POST` methods are supported for updating an existing environment.
     * @param {string} params.name - (Required) Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.updateEnvironment = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    /**
     * Updates an existing environment. When updating properties, you must pass all existing properties to the API, even if they are not being changed. If you omit properties from the payload, the properties are removed. To get the current list of properties for the environment, use the [Get Environment API](get). **Note**: Both `PUT` and `POST` methods are supported for updating an existing environment.
     * @param {string} params.name - (Required) Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Gets the deployed configuration for an environment.
     * @param {string} params.name - (Required) Required. Name of the environment deployed configuration resource. Use the following structure in your request: `organizations/{org}/environments/{env}/deployedConfig`
     * @return {object} The API response object.
     */
    this.organizations.environments.getDeployedConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the API Security runtime configuration for an environment. This named ApiSecurityRuntimeConfig to prevent conflicts with ApiSecurityConfig from addon config.
     * @param {string} params.name - (Required) Required. Name of the environment API Security Runtime configuration resource. Use the following structure in your request: `organizations/{org}/environments/{env}/apiSecurityRuntimeConfig`
     * @return {object} The API response object.
     */
    this.organizations.environments.getApiSecurityRuntimeConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Sets the IAM policy on an environment, if the policy already exists it will be replaced. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.setIamPolicy` permission to call this API.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the IAM policy on an environment. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.getIamPolicy` permission to call this API.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.organizations.environments.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Tests the permissions of a user on an environment, and returns a subset of permissions that the user has on the environment. If the environment does not exist, an empty permission set is returned (a NOT_FOUND error is not returned).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates a subscription for the environment's Pub/Sub topic. The server will assign a random name for this subscription. The "name" and "push_config" must *not* be specified.
     * @param {string} params.parent - (Required) Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}`
     * @return {object} The API response object.
     */
    this.organizations.environments.subscribe = (params) => this._makeRequest('v1/{+parent}:subscribe', 'POST', params);

    /**
     * Deletes a subscription for the environment's Pub/Sub topic.
     * @param {string} params.parent - (Required) Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.unsubscribe = (params) => this._makeRequest('v1/{+parent}:unsubscribe', 'POST', params);

    /**
     * Updates properties for an Apigee environment with patch semantics using a field mask. **Note:** Not supported for Apigee hybrid.
     * @param {string} params.name - (Required) Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{environment}`.
     * @param {string} params.updateMask - List of fields to be updated. Fields that can be updated: node_config.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.modifyEnvironment = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets the add-ons config of an environment.
     * @param {string} params.name - (Required) Required. Name of the add-ons config. Must be in the format of `/organizations/{org}/environments/{env}/addonsConfig`
     * @return {object} The API response object.
     */
    this.organizations.environments.getAddonsConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * GetSecurityActionConfig returns the current SecurityActions configuration.
     * @param {string} params.name - (Required) Required. The name of the SecurityActionsConfig to retrieve. This will always be: `organizations/{org}/environments/{env}/security_actions_config`
     * @return {object} The API response object.
     */
    this.organizations.environments.getSecurityActionsConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * UpdateSecurityActionConfig updates the current SecurityActions configuration. This method is used to enable/disable the feature at the environment level.
     * @param {string} params.name - (Required) This is a singleton resource, the name will always be set by SecurityActions and any user input will be ignored. The name is always: `organizations/{org}/environments/{env}/security_actions_config`
     * @param {string} params.updateMask - The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.updateSecurityActionsConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.environments.resourcefiles = {};

    /**
     * Creates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
     * @param {string} params.name - Required. Name of the resource file. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255}
     * @param {string} params.parent - (Required) Required. Name of the environment in which to create the resource file in the following format: `organizations/{org}/environments/{env}`.
     * @param {string} params.type - Required. Resource file type. {{ resource_file_type }}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.resourcefiles.create = (params) => this._makeRequest('v1/{+parent}/resourcefiles', 'POST', params);

    /**
     * Updates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
     * @param {string} params.name - (Required) Required. ID of the resource file to update. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255}
     * @param {string} params.parent - (Required) Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`.
     * @param {string} params.type - (Required) Required. Resource file type. {{ resource_file_type }}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.resourcefiles.update = (params) => this._makeRequest('v1/{+parent}/resourcefiles/{type}/{name}', 'PUT', params);

    /**
     * Gets the contents of a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
     * @param {string} params.name - (Required) Required. ID of the resource file. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255}
     * @param {string} params.parent - (Required) Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`.
     * @param {string} params.type - (Required) Required. Resource file type. {{ resource_file_type }}
     * @return {object} The API response object.
     */
    this.organizations.environments.resourcefiles.get = (params) => this._makeRequest('v1/{+parent}/resourcefiles/{type}/{name}', 'GET', params);

    /**
     * Deletes a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
     * @param {string} params.name - (Required) Required. ID of the resource file to delete. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255}
     * @param {string} params.parent - (Required) Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`.
     * @param {string} params.type - (Required) Required. Resource file type. {{ resource_file_type }}
     * @return {object} The API response object.
     */
    this.organizations.environments.resourcefiles.delete = (params) => this._makeRequest('v1/{+parent}/resourcefiles/{type}/{name}', 'DELETE', params);

    /**
     * Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
     * @param {string} params.parent - (Required) Required. Name of the environment in which to list resource files in the following format: `organizations/{org}/environments/{env}`.
     * @param {string} params.type - Optional. Type of resource files to list. {{ resource_file_type }}
     * @return {object} The API response object.
     */
    this.organizations.environments.resourcefiles.list = (params) => this._makeRequest('v1/{+parent}/resourcefiles', 'GET', params);

    /**
     * Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
     * @param {string} params.parent - (Required) Required. Name of the environment in which to list resource files in the following format: `organizations/{org}/environments/{env}`.
     * @param {string} params.type - (Required) Optional. Type of resource files to list. {{ resource_file_type }}
     * @return {object} The API response object.
     */
    this.organizations.environments.resourcefiles.listEnvironmentResources = (params) => this._makeRequest('v1/{+parent}/resourcefiles/{type}', 'GET', params);

    this.organizations.environments.archiveDeployments = {};

    /**
     * Gets the specified ArchiveDeployment.
     * @param {string} params.name - (Required) Required. Name of the Archive Deployment in the following format: `organizations/{org}/environments/{env}/archiveDeployments/{id}`.
     * @return {object} The API response object.
     */
    this.organizations.environments.archiveDeployments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists the ArchiveDeployments in the specified Environment.
     * @param {string} params.filter - Optional. An optional query used to return a subset of Archive Deployments using the semantics defined in https://google.aip.dev/160.
     * @param {integer} params.pageSize - Optional. Maximum number of Archive Deployments to return. If unspecified, at most 25 deployments will be returned.
     * @param {string} params.pageToken - Optional. Page token, returned from a previous ListArchiveDeployments call, that you can use to retrieve the next page.
     * @param {string} params.parent - (Required) Required. Name of the Environment for which to list Archive Deployments in the format: `organizations/{org}/environments/{env}`.
     * @return {object} The API response object.
     */
    this.organizations.environments.archiveDeployments.list = (params) => this._makeRequest('v1/{+parent}/archiveDeployments', 'GET', params);

    /**
     * Generates a signed URL for uploading an Archive zip file to Google Cloud Storage. Once the upload is complete, the signed URL should be passed to CreateArchiveDeployment. When uploading to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * Source file size should not exceed 1GB limit. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` * `x-goog-content-length-range: 0,1073741824` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
     * @param {string} params.parent - (Required) Required. The organization and environment to upload to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.archiveDeployments.generateUploadUrl = (params) => this._makeRequest('v1/{+parent}/archiveDeployments:generateUploadUrl', 'POST', params);

    /**
     * Generates a signed URL for downloading the original zip file used to create an Archive Deployment. The URL is only valid for a limited period and should be used within minutes after generation. Each call returns a new upload URL.
     * @param {string} params.name - (Required) Required. The name of the Archive Deployment you want to download.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.archiveDeployments.generateDownloadUrl = (params) => this._makeRequest('v1/{+name}:generateDownloadUrl', 'POST', params);

    /**
     * Creates a new ArchiveDeployment.
     * @param {string} params.parent - (Required) Required. The Environment this Archive Deployment will be created in.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.archiveDeployments.create = (params) => this._makeRequest('v1/{+parent}/archiveDeployments', 'POST', params);

    /**
     * Updates an existing ArchiveDeployment. Labels can modified but most of the other fields are not modifiable.
     * @param {string} params.name - (Required) Name of the Archive Deployment in the following format: `organizations/{org}/environments/{env}/archiveDeployments/{id}`.
     * @param {string} params.updateMask - Required. The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.archiveDeployments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an archive deployment.
     * @param {string} params.name - (Required) Required. Name of the Archive Deployment in the following format: `organizations/{org}/environments/{env}/archiveDeployments/{id}`.
     * @return {object} The API response object.
     */
    this.organizations.environments.archiveDeployments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.environments.apis = {};

    this.organizations.environments.apis.revisions = {};

    /**
     * Deploys a revision of an API proxy. If another revision of the same API proxy revision is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot invoke an API proxy until it has been deployed to an environment. After you deploy an API proxy revision, you cannot edit it. To edit the API proxy, you must create and deploy a new revision. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.deploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}` All successful API proxy deployments to Apigee are [zero-downtime deployments](https://cloud.google.com/apigee/docs/api-platform/deploy/ui-deploy-overview#zero-downtime-deployment). Apigee hybrid validates the dependencies between shared flows and API proxies at deployment time. For example, if the Flow Callout policy in an API proxy references a shared flow that either doesn't exist or isn't deployed, the API proxy deployment fails.
     * @param {string} params.name - (Required) Required. Name of the API proxy revision deployment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}` If the API proxy resource being deployed has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {boolean} params.override - Flag that specifies whether the new deployment replaces other deployed revisions of the API proxy in the environment. Set `override` to `true` to replace other deployed revisions. By default, `override` is `false` and the deployment is rejected if other revisions of the API proxy are deployed in the environment.
     * @param {boolean} params.sequencedRollout - Flag that specifies whether to enable sequenced rollout. If set to `true`, the routing rules for this deployment and the environment changes to add the deployment will be rolled out in a safe order. This reduces the risk of downtime that could be caused by changing the environment group's routing before the new destination for the affected traffic is ready to receive it. This should only be necessary if the new deployment will be capturing traffic from another environment under a shared environment group or if traffic will be rerouted to a different environment due to a base path removal. The generateDeployChangeReport API may be used to examine routing changes before issuing the deployment request, and its response will indicate if a sequenced rollout is recommended for the deployment.
     * @param {string} params.serviceAccount - Google Cloud IAM service account. The service account represents the identity of the deployed proxy, and determines what permissions it has. The format must be `{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com`.
     * @return {object} The API response object.
     */
    this.organizations.environments.apis.revisions.deploy = (params) => this._makeRequest('v1/{+name}/deployments', 'POST', params);

    /**
     * Undeploys an API proxy revision from an environment. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.undeploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`
     * @param {string} params.name - (Required) Required. Name of the API proxy revision deployment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}` If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {boolean} params.sequencedRollout - Flag that specifies whether to enable sequenced rollout. If set to `true`, the environment group routing rules corresponding to this deployment will be removed before removing the deployment from the runtime. This is likely to be a rare use case; it is only needed when the intended effect of undeploying this proxy is to cause the traffic it currently handles to be rerouted to some other existing proxy in the environment group. The GenerateUndeployChangeReport API may be used to examine routing changes before issuing the undeployment request, and its response will indicate if a sequenced rollout is recommended for the undeployment.
     * @return {object} The API response object.
     */
    this.organizations.environments.apis.revisions.undeploy = (params) => this._makeRequest('v1/{+name}/deployments', 'DELETE', params);

    /**
     * Gets the deployment of an API proxy revision and actual state reported by runtime pods.
     * @param {string} params.name - (Required) Required. Name representing an API proxy revision in an environment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}` If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.environments.apis.revisions.getDeployments = (params) => this._makeRequest('v1/{+name}/deployments', 'GET', params);

    this.organizations.environments.apis.revisions.deployments = {};

    /**
     * Generates a report for a dry run analysis of a DeployApiProxy request without committing the deployment. In addition to the standard validations performed when adding deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being created. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run DeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateDeployChangeReport`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.deploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`
     * @param {string} params.name - (Required) Name of the API proxy revision deployment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}` If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {boolean} params.override - Flag that specifies whether to force the deployment of the new revision over the currently deployed revision by overriding conflict checks.
     * @return {object} The API response object.
     */
    this.organizations.environments.apis.revisions.deployments.generateDeployChangeReport = (params) => this._makeRequest('v1/{+name}/deployments:generateDeployChangeReport', 'POST', params);

    /**
     * Generates a report for a dry run analysis of an UndeployApiProxy request without committing the undeploy. In addition to the standard validations performed when removing deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being removed. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run UndeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateUndeployChangeReport`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.undeploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`
     * @param {string} params.name - (Required) Name of the API proxy revision deployment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}`
     * @return {object} The API response object.
     */
    this.organizations.environments.apis.revisions.deployments.generateUndeployChangeReport = (params) => this._makeRequest('v1/{+name}/deployments:generateUndeployChangeReport', 'POST', params);

    this.organizations.environments.apis.revisions.debugsessions = {};

    /**
     * Creates a debug session for a deployed API Proxy revision.
     * @param {string} params.parent - (Required) Required. The resource name of the API Proxy revision deployment for which to create the DebugSession. Must be of the form `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}`. If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {string} params.timeout - Optional. The time in seconds after which this DebugSession should end. A timeout specified in DebugSession will overwrite this value.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.apis.revisions.debugsessions.create = (params) => this._makeRequest('v1/{+parent}/debugsessions', 'POST', params);

    /**
     * Retrieves a debug session.
     * @param {string} params.name - (Required) Required. The name of the debug session to retrieve. Must be of the form: `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}/debugsessions/{debug_session}`. If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.environments.apis.revisions.debugsessions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists debug sessions that are currently active in the given API Proxy revision.
     * @param {integer} params.pageSize - Optional. Maximum number of debug sessions to return. The page size defaults to 25.
     * @param {string} params.pageToken - Optional. Page token, returned from a previous ListDebugSessions call, that you can use to retrieve the next page.
     * @param {string} params.parent - (Required) Required. The name of the API Proxy revision deployment for which to list debug sessions. Must be of the form: `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}`. If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.environments.apis.revisions.debugsessions.list = (params) => this._makeRequest('v1/{+parent}/debugsessions', 'GET', params);

    /**
     * Deletes the data from a debug session. This does not cancel the debug session or prevent further data from being collected if the session is still active in runtime pods.
     * @param {string} params.name - (Required) Required. The name of the debug session to delete. Must be of the form: `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}/debugsessions/{debugsession}`. If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.environments.apis.revisions.debugsessions.deleteData = (params) => this._makeRequest('v1/{+name}/data', 'DELETE', params);

    this.organizations.environments.apis.revisions.debugsessions.data = {};

    /**
     * Gets the debug data from a transaction.
     * @param {string} params.name - (Required) Required. The name of the debug session transaction. Must be of the form: `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}/debugsessions/{debug_session}/data/{transaction}`. If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.environments.apis.revisions.debugsessions.data.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.environments.apis.deployments = {};

    /**
     * Lists all deployments of an API proxy in an environment.
     * @param {string} params.parent - (Required) Required. Name representing an API proxy in an environment in the following format: `organizations/{org}/environments/{env}/apis/{api}` If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.environments.apis.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    this.organizations.environments.sharedflows = {};

    this.organizations.environments.sharedflows.revisions = {};

    /**
     * Deploys a revision of a shared flow. If another revision of the same shared flow is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot use a shared flow until it has been deployed to an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.deploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`
     * @param {string} params.name - (Required) Required. Name of the shared flow revision to deploy in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}` If the shared flow resource being deployed has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {boolean} params.override - Flag that specifies whether the new deployment replaces other deployed revisions of the shared flow in the environment. Set `override` to `true` to replace other deployed revisions. By default, `override` is `false` and the deployment is rejected if other revisions of the shared flow are deployed in the environment.
     * @param {string} params.serviceAccount - Google Cloud IAM service account. The service account represents the identity of the deployed proxy, and determines what permissions it has. The format must be `{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com`.
     * @return {object} The API response object.
     */
    this.organizations.environments.sharedflows.revisions.deploy = (params) => this._makeRequest('v1/{+name}/deployments', 'POST', params);

    /**
     * Undeploys a shared flow revision from an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.undeploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`
     * @param {string} params.name - (Required) Required. Name of the shared flow revision to undeploy in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}` If the shared flow resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.environments.sharedflows.revisions.undeploy = (params) => this._makeRequest('v1/{+name}/deployments', 'DELETE', params);

    /**
     * Gets the deployment of a shared flow revision and actual state reported by runtime pods.
     * @param {string} params.name - (Required) Required. Name representing a shared flow in an environment in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}` If the shared flow resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.environments.sharedflows.revisions.getDeployments = (params) => this._makeRequest('v1/{+name}/deployments', 'GET', params);

    this.organizations.environments.sharedflows.deployments = {};

    /**
     * Lists all deployments of a shared flow in an environment.
     * @param {string} params.parent - (Required) Required. Name representing a shared flow in an environment in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}` If the shared flow resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.environments.sharedflows.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    this.organizations.environments.deployments = {};

    /**
     * Lists all deployments of API proxies or shared flows in an environment.
     * @param {string} params.parent - (Required) Required. Name of the environment for which to return deployment information in the following format: `organizations/{org}/environments/{env}`
     * @param {boolean} params.sharedFlows - Optional. Flag that specifies whether to return shared flow or API proxy deployments. Set to `true` to return shared flow deployments; set to `false` to return API proxy deployments. Defaults to `false`.
     * @return {object} The API response object.
     */
    this.organizations.environments.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    /**
     * Gets a particular deployment of Api proxy or a shared flow in an environment
     * @param {string} params.name - (Required) Required. Name of the api proxy or the shared flow deployment. Use the following structure in your request: `organizations/{org}/environments/{env}/deployments/{deployment}`
     * @return {object} The API response object.
     */
    this.organizations.environments.deployments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Sets the IAM policy on a deployment, if the policy already exists it will be replaced. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.deployments.setIamPolicy` permission to call this API.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.deployments.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the IAM policy on a deployment. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.deployments.getIamPolicy` permission to call this API.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.organizations.environments.deployments.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Tests the permissions of a user on a deployment, and returns a subset of permissions that the user has on the deployment. If the deployment does not exist, an empty permission set is returned (a NOT_FOUND error is not returned).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.deployments.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.organizations.environments.flowhooks = {};

    /**
     * Returns the name of the shared flow attached to the specified flow hook. If there's no shared flow attached to the flow hook, the API does not return an error; it simply does not return a name in the response.
     * @param {string} params.name - (Required) Required. Name of the flow hook in the following format: `organizations/{org}/environments/{env}/flowhooks/{flowhook}`
     * @return {object} The API response object.
     */
    this.organizations.environments.flowhooks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Attaches a shared flow to a flow hook.
     * @param {string} params.name - (Required) Required. Name of the flow hook to which the shared flow should be attached in the following format: `organizations/{org}/environments/{env}/flowhooks/{flowhook}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.flowhooks.attachSharedFlowToFlowHook = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Detaches a shared flow from a flow hook.
     * @param {string} params.name - (Required) Required. Name of the flow hook to detach in the following format: `organizations/{org}/environments/{env}/flowhooks/{flowhook}`
     * @return {object} The API response object.
     */
    this.organizations.environments.flowhooks.detachSharedFlowFromFlowHook = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.environments.keystores = {};

    /**
     * Creates a keystore or truststore. - Keystore: Contains certificates and their associated keys. - Truststore: Contains trusted certificates used to validate a server's certificate. These certificates are typically self-signed certificates or certificates that are not signed by a trusted CA.
     * @param {string} params.name - Optional. Name of the keystore. Overrides the value in Keystore.
     * @param {string} params.parent - (Required) Required. Name of the environment in which to create the keystore. Use the following format in your request: `organizations/{org}/environments/{env}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.keystores.create = (params) => this._makeRequest('v1/{+parent}/keystores', 'POST', params);

    /**
     * Deletes a keystore or truststore.
     * @param {string} params.name - (Required) Required. Name of the keystore. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}`
     * @return {object} The API response object.
     */
    this.organizations.environments.keystores.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a keystore or truststore.
     * @param {string} params.name - (Required) Required. Name of the keystore. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}`.
     * @return {object} The API response object.
     */
    this.organizations.environments.keystores.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.environments.keystores.aliases = {};

    /**
     * Creates an alias from a key/certificate pair. The structure of the request is controlled by the `format` query parameter: - `keycertfile` - Separate PEM-encoded key and certificate files are uploaded. Set `Content-Type: multipart/form-data` and include the `keyFile`, `certFile`, and `password` (if keys are encrypted) fields in the request body. If uploading to a truststore, omit `keyFile`. - `pkcs12` - A PKCS12 file is uploaded. Set `Content-Type: multipart/form-data`, provide the file in the `file` field, and include the `password` field if the file is encrypted in the request body. - `selfsignedcert` - A new private key and certificate are generated. Set `Content-Type: application/json` and include CertificateGenerationSpec in the request body.
     * @param {string} params._password - DEPRECATED: For improved security, specify the password in the request body instead of using the query parameter. To specify the password in the request body, set `Content-type: multipart/form-data` part with name `password`. Password for the private key file, if required.
     * @param {string} params.alias - Alias for the key/certificate pair. Values must match the regular expression `[\w\s-.]{1,255}`. This must be provided for all formats except `selfsignedcert`; self-signed certs may specify the alias in either this parameter or the JSON body.
     * @param {string} params.format - Required. Format of the data. Valid values include: `selfsignedcert`, `keycertfile`, or `pkcs12`
     * @param {boolean} params.ignoreExpiryValidation - Flag that specifies whether to ignore expiry validation. If set to `true`, no expiry validation will be performed.
     * @param {boolean} params.ignoreNewlineValidation - Flag that specifies whether to ignore newline validation. If set to `true`, no error is thrown when the file contains a certificate chain with no newline between each certificate. Defaults to `false`.
     * @param {string} params.parent - (Required) Required. Name of the keystore. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.keystores.aliases.create = (params) => this._makeRequest('v1/{+parent}/aliases', 'POST', params);

    /**
     * Gets an alias.
     * @param {string} params.name - (Required) Required. Name of the alias. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`.
     * @return {object} The API response object.
     */
    this.organizations.environments.keystores.aliases.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes an alias.
     * @param {string} params.name - (Required) Required. Name of the alias. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`.
     * @return {object} The API response object.
     */
    this.organizations.environments.keystores.aliases.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates the certificate in an alias. The updated certificate must be in PEM- or DER-encoded X.509 format.
     * @param {boolean} params.ignoreExpiryValidation - Required. Flag that specifies whether to ignore expiry validation. If set to `true`, no expiry validation will be performed.
     * @param {boolean} params.ignoreNewlineValidation - Flag that specifies whether to ignore newline validation. If set to `true`, no error is thrown when the file contains a certificate chain with no newline between each certificate. Defaults to `false`.
     * @param {string} params.name - (Required) Required. Name of the alias. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.keystores.aliases.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Generates a PKCS #10 Certificate Signing Request for the private key in an alias.
     * @param {string} params.name - (Required) Required. Name of the alias. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`.
     * @return {object} The API response object.
     */
    this.organizations.environments.keystores.aliases.csr = (params) => this._makeRequest('v1/{+name}/csr', 'GET', params);

    /**
     * Gets the certificate from an alias in PEM-encoded form.
     * @param {string} params.name - (Required) Required. Name of the alias. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`.
     * @return {object} The API response object.
     */
    this.organizations.environments.keystores.aliases.getCertificate = (params) => this._makeRequest('v1/{+name}/certificate', 'GET', params);

    this.organizations.environments.targetservers = {};

    /**
     * Creates a TargetServer in the specified environment.
     * @param {string} params.name - Optional. The ID to give the TargetServer. This will overwrite the value in TargetServer.
     * @param {string} params.parent - (Required) Required. The parent environment name under which the TargetServer will be created. Must be of the form `organizations/{org}/environments/{env}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.targetservers.create = (params) => this._makeRequest('v1/{+parent}/targetservers', 'POST', params);

    /**
     * Deletes a TargetServer from an environment. Returns the deleted TargetServer resource.
     * @param {string} params.name - (Required) Required. The name of the TargetServer to delete. Must be of the form `organizations/{org}/environments/{env}/targetservers/{target_server_id}`.
     * @return {object} The API response object.
     */
    this.organizations.environments.targetservers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a TargetServer resource.
     * @param {string} params.name - (Required) Required. The name of the TargetServer to get. Must be of the form `organizations/{org}/environments/{env}/targetservers/{target_server_id}`.
     * @return {object} The API response object.
     */
    this.organizations.environments.targetservers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates an existing TargetServer. Note that this operation has PUT semantics; it will replace the entirety of the existing TargetServer with the resource in the request body.
     * @param {string} params.name - (Required) Required. The name of the TargetServer to replace. Must be of the form `organizations/{org}/environments/{env}/targetservers/{target_server_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.targetservers.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    this.organizations.environments.addonsConfig = {};

    /**
     * Updates an add-on enablement status of an environment.
     * @param {string} params.name - (Required) Required. Name of the add-ons config. Must be in the format of `/organizations/{org}/environments/{env}/addonsConfig`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.addonsConfig.setAddonEnablement = (params) => this._makeRequest('v1/{+name}:setAddonEnablement', 'POST', params);

    this.organizations.environments.references = {};

    /**
     * Creates a Reference in the specified environment.
     * @param {string} params.parent - (Required) Required. The parent environment name under which the Reference will be created. Must be of the form `organizations/{org}/environments/{env}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.references.create = (params) => this._makeRequest('v1/{+parent}/references', 'POST', params);

    /**
     * Deletes a Reference from an environment. Returns the deleted Reference resource.
     * @param {string} params.name - (Required) Required. The name of the Reference to delete. Must be of the form `organizations/{org}/environments/{env}/references/{ref}`.
     * @return {object} The API response object.
     */
    this.organizations.environments.references.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a Reference resource.
     * @param {string} params.name - (Required) Required. The name of the Reference to get. Must be of the form `organizations/{org}/environments/{env}/references/{ref}`.
     * @return {object} The API response object.
     */
    this.organizations.environments.references.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates an existing Reference. Note that this operation has PUT semantics; it will replace the entirety of the existing Reference with the resource in the request body.
     * @param {string} params.name - (Required) Required. The name of the Reference to update. Must be of the form `organizations/{org}/environments/{env}/references/{ref}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.references.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    this.organizations.environments.traceConfig = {};

    this.organizations.environments.traceConfig.overrides = {};

    /**
     * Creates a trace configuration override. The response contains a system-generated UUID, that can be used to view, update, or delete the configuration override. Use the List API to view the existing trace configuration overrides.
     * @param {string} params.parent - (Required) Required. Parent resource of the trace configuration override. Use the following structure in your request. "organizations/*\/environments/*\/traceConfig".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.traceConfig.overrides.create = (params) => this._makeRequest('v1/{+parent}/overrides', 'POST', params);

    /**
     * Lists all of the distributed trace configuration overrides in an environment.
     * @param {integer} params.pageSize - Maximum number of trace configuration overrides to return. If not specified, the maximum number returned is 25. The maximum number cannot exceed 100.
     * @param {string} params.pageToken - A page token, returned from a previous `ListTraceConfigOverrides` call. Token value that can be used to retrieve the subsequent page. When paginating, all other parameters provided to `ListTraceConfigOverrides` must match those specified in the call to obtain the page token.
     * @param {string} params.parent - (Required) Required. Parent resource of the trace configuration override. Use the following structure in your request: "organizations/*\/environments/*\/traceConfig".
     * @return {object} The API response object.
     */
    this.organizations.environments.traceConfig.overrides.list = (params) => this._makeRequest('v1/{+parent}/overrides', 'GET', params);

    /**
     * Gets a trace configuration override.
     * @param {string} params.name - (Required) Required. Name of the trace configuration override. Use the following structure in your request: "organizations/*\/environments/*\/traceConfig/overrides/*".
     * @return {object} The API response object.
     */
    this.organizations.environments.traceConfig.overrides.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a distributed trace configuration override. Note that the repeated fields have replace semantics when included in the field mask and that they will be overwritten by the value of the fields in the request body.
     * @param {string} params.name - (Required) Required. Name of the trace configuration override. Use the following structure in your request: "organizations/*\/environments/*\/traceConfig/overrides/*".
     * @param {string} params.updateMask - List of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.traceConfig.overrides.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a distributed trace configuration override.
     * @param {string} params.name - (Required) Required. Name of the trace configuration override. Use the following structure in your request: "organizations/*\/environments/*\/traceConfig/overrides/*".
     * @return {object} The API response object.
     */
    this.organizations.environments.traceConfig.overrides.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.environments.stats = {};

    /**
     * Retrieve metrics grouped by dimensions. The types of metrics you can retrieve include traffic, message counts, API call latency, response size, and cache hits and counts. Dimensions let you view metrics in meaningful groups. You can optionally pass dimensions as path parameters to the `stats` API. If dimensions are not specified, the metrics are computed on the entire set of data for the given time range.
     * @param {string} params.accuracy - No longer used by Apigee. Supported for backwards compatibility.
     * @param {string} params.aggTable - Table name used to query custom aggregate tables. If this parameter is skipped, then Apigee will try to retrieve the data from fact tables which will be expensive.
     * @param {string} params.filter - Filter that enables you to drill down on specific dimension values.
     * @param {string} params.limit - Maximum number of result items to return.
     * @param {string} params.name - (Required) Required. Resource name for which the interactive query will be executed. Use the following format in your request: `organizations/{org}/environments/{env}/stats/{dimensions}` Dimensions let you view metrics in meaningful groupings, such as `apiproxy` or `target_host`. The value of dimensions should be a comma-separated list, as shown below: `organizations/{org}/environments/{env}/stats/apiproxy,request_verb`
     * @param {string} params.offset - Offset value. Use `offset` with `limit` to enable pagination of results. For example, to display results 11-20, set limit to `10` and offset to `10`.
     * @param {boolean} params.realtime - No longer used by Apigee. Supported for backwards compatibility.
     * @param {string} params.select - Comma-separated list of metrics. For example: `sum(message_count),sum(error_count)`
     * @param {boolean} params.sonar - Routes the query to API Monitoring for the last hour.
     * @param {string} params.sort - Flag that specifies whether the sort order should be ascending or descending. Valid values include: `DESC` and `ASC`.
     * @param {string} params.sortby - Comma-separated list of metrics to sort the final result.
     * @param {string} params.timeRange - Time interval for the interactive query. Time range is specified in GMT as `start~end`. For example: `04/15/2017 00:00~05/15/2017 23:59`
     * @param {string} params.timeUnit - Granularity of metrics returned. Valid values include: `second`, `minute`, `hour`, `day`, `week`, or` month`.
     * @param {string} params.topk - Top number of results to return. For example, to return the top 5 results, set `topk=5`.
     * @param {boolean} params.tsAscending - Flag that specifies whether to list timestamps in ascending (`true`) or descending (`false`) order. Apigee recommends that you set this value to `true` if you are using `sortby` with `sort=DESC`.
     * @param {string} params.tzo - Timezone offset value.
     * @return {object} The API response object.
     */
    this.organizations.environments.stats.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.environments.optimizedStats = {};

    /**
     * Similar to GetStats except that the response is less verbose.
     * @param {string} params.accuracy - No longer used by Apigee. Supported for backwards compatibility.
     * @param {string} params.aggTable - Table name used to query custom aggregate tables. If this parameter is skipped, then Apigee will try to retrieve the data from fact tables which will be expensive.
     * @param {string} params.filter - Filter that enables you to drill-down on specific dimension values.
     * @param {string} params.limit - Maximum number of result items to return.
     * @param {string} params.name - (Required) Required. Resource name for which the interactive query will be executed. Use the following format in your request: `organizations/{org}/environments/{env}/optimizedStats/{dimensions}` Dimensions let you view metrics in meaningful groupings, such as `apiproxy`, `target_host`. The value of `dimensions` should be a comma-separated list as shown below: `organizations/{org}/environments/{env}/optimizedStats/apiproxy,request_verb`
     * @param {string} params.offset - Offset value. Use `offset` with `limit` to enable pagination of results. For example, to display results 11-20, set limit to `10` and offset to `10`.
     * @param {boolean} params.realtime - No longer used by Apigee. Supported for backwards compatibility.
     * @param {string} params.select - Required. Comma-separated list of metrics. For example: `sum(message_count),sum(error_count)`
     * @param {boolean} params.sonar - Routes the query to API Monitoring for the last hour.
     * @param {string} params.sort - Flag that specifies whether the sort order should be ascending or descending. Valid values include `DESC` and `ASC`.
     * @param {string} params.sortby - Comma-separated list of metrics to sort the final result.
     * @param {string} params.timeRange - Required. Time interval for the interactive query. Time range is specified in GMT as `start~end`. For example: `04/15/2017 00:00~05/15/2017 23:59`
     * @param {string} params.timeUnit - Granularity of metrics returned. Valid values include: `second`, `minute`, `hour`, `day`, `week`, or `month`.
     * @param {string} params.topk - Top number of results to return. For example, to return the top 5 results, set `topk=5`.
     * @param {boolean} params.tsAscending - Flag that specifies whether to list timestamps in ascending (`true`) or descending (`false`) order. Apigee recommends setting this value to `true` if you are using `sortby` with `sort=DESC`.
     * @param {string} params.tzo - Timezone offset value.
     * @return {object} The API response object.
     */
    this.organizations.environments.optimizedStats.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.environments.analytics = {};

    this.organizations.environments.analytics.admin = {};

    /**
     * Gets a list of metrics and dimensions that can be used to create analytics queries and reports. Each schema element contains the name of the field, its associated type, and a flag indicating whether it is a standard or custom field.
     * @param {boolean} params.disableCache - Flag that specifies whether the schema is be read from the database or cache. Set to `true` to read the schema from the database. Defaults to cache.
     * @param {string} params.name - (Required) Required. Path to the schema. Use the following structure in your request: `organizations/{org}/environments/{env}/analytics/admin/schemav2`.
     * @param {string} params.type - Required. Name of the dataset for which you want to retrieve the schema. For example: `fact` or `agg_cus1`
     * @return {object} The API response object.
     */
    this.organizations.environments.analytics.admin.getSchemav2 = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.environments.analytics.exports = {};

    /**
     * Submit a data export job to be processed in the background. If the request is successful, the API returns a 201 status, a URI that can be used to retrieve the status of the export job, and the `state` value of "enqueued".
     * @param {string} params.parent - (Required) Required. Names of the parent organization and environment. Must be of the form `organizations/{org}/environments/{env}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.analytics.exports.create = (params) => this._makeRequest('v1/{+parent}/analytics/exports', 'POST', params);

    /**
     * Gets the details and status of an analytics export job. If the export job is still in progress, its `state` is set to "running". After the export job has completed successfully, its `state` is set to "completed". If the export job fails, its `state` is set to `failed`.
     * @param {string} params.name - (Required) Required. Resource name of the export to get.
     * @return {object} The API response object.
     */
    this.organizations.environments.analytics.exports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists the details and status of all analytics export jobs belonging to the parent organization and environment.
     * @param {string} params.parent - (Required) Required. Names of the parent organization and environment. Must be of the form `organizations/{org}/environments/{env}`.
     * @return {object} The API response object.
     */
    this.organizations.environments.analytics.exports.list = (params) => this._makeRequest('v1/{+parent}/analytics/exports', 'GET', params);

    this.organizations.environments.queries = {};

    /**
     * Submit a query to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.
     * @param {string} params.parent - (Required) Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.queries.create = (params) => this._makeRequest('v1/{+parent}/queries', 'POST', params);

    /**
     * Get query status If the query is still in progress, the `state` is set to "running" After the query has completed successfully, `state` is set to "completed"
     * @param {string} params.name - (Required) Required. Name of the asynchronous query to get. Must be of the form `organizations/{org}/environments/{env}/queries/{queryId}`.
     * @return {object} The API response object.
     */
    this.organizations.environments.queries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * After the query is completed, use this API to retrieve the results. If the request succeeds, and there is a non-zero result set, the result is downloaded to the client as a zipped JSON file. The name of the downloaded file will be: OfflineQueryResult-.zip Example: `OfflineQueryResult-9cfc0d85-0f30-46d6-ae6f-318d0cb961bd.zip`
     * @param {string} params.name - (Required) Required. Name of the asynchronous query result to get. Must be of the form `organizations/{org}/environments/{env}/queries/{queryId}/result`.
     * @return {object} The API response object.
     */
    this.organizations.environments.queries.getResult = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * After the query is completed, use this API to retrieve the results. If the request succeeds, and there is a non-zero result set, the result is sent to the client as a list of urls to JSON files.
     * @param {string} params.name - (Required) Required. Name of the asynchronous query result to get. Must be of the form `organizations/{org}/environments/{env}/queries/{queryId}/resulturl`.
     * @return {object} The API response object.
     */
    this.organizations.environments.queries.getResulturl = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Return a list of Asynchronous Queries
     * @param {string} params.dataset - Filter response list by dataset. Example: `api`, `mint`
     * @param {string} params.from - Filter response list by returning asynchronous queries that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.
     * @param {string} params.inclQueriesWithoutReport - Flag to include asynchronous queries that don't have a report denifition.
     * @param {string} params.parent - (Required) Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.
     * @param {string} params.status - Filter response list by asynchronous query status.
     * @param {string} params.submittedBy - Filter response list by user who submitted queries.
     * @param {string} params.to - Filter response list by returning asynchronous queries that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.
     * @return {object} The API response object.
     */
    this.organizations.environments.queries.list = (params) => this._makeRequest('v1/{+parent}/queries', 'GET', params);

    this.organizations.environments.caches = {};

    /**
     * Deletes a cache.
     * @param {string} params.name - (Required) Required. Cache resource name of the form: `organizations/{organization_id}/environments/{environment_id}/caches/{cache_id}`
     * @return {object} The API response object.
     */
    this.organizations.environments.caches.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.environments.securityReports = {};

    /**
     * Submit a report request to be processed in the background. If the submission succeeds, the API returns a 200 status and an ID that refer to the report request. In addition to the HTTP status 200, the `state` of "enqueued" means that the request succeeded.
     * @param {string} params.parent - (Required) Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.securityReports.create = (params) => this._makeRequest('v1/{+parent}/securityReports', 'POST', params);

    /**
     * Get security report status If the query is still in progress, the `state` is set to "running" After the query has completed successfully, `state` is set to "completed"
     * @param {string} params.name - (Required) Required. Name of the security report to get. Must be of the form `organizations/{org}/environments/{env}/securityReports/{reportId}`.
     * @return {object} The API response object.
     */
    this.organizations.environments.securityReports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * After the query is completed, use this API to retrieve the results as file. If the request succeeds, and there is a non-zero result set, the result is downloaded to the client as a zipped JSON file. The name of the downloaded file will be: OfflineQueryResult-.zip Example: `OfflineQueryResult-9cfc0d85-0f30-46d6-ae6f-318d0cb961bd.zip`
     * @param {string} params.name - (Required) Required. Name of the security report result to get. Must be of the form `organizations/{org}/environments/{env}/securityReports/{reportId}/result`.
     * @return {object} The API response object.
     */
    this.organizations.environments.securityReports.getResult = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * After the query is completed, use this API to view the query result when result size is small.
     * @param {string} params.name - (Required) Required. Name of the security report result view to get. Must be of the form `organizations/{org}/environments/{env}/securityReports/{reportId}/resultView`.
     * @return {object} The API response object.
     */
    this.organizations.environments.securityReports.getResultView = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Return a list of Security Reports
     * @param {string} params.dataset - Filter response list by dataset. Example: `api`, `mint`
     * @param {string} params.from - Filter response list by returning security reports that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.
     * @param {integer} params.pageSize - The maximum number of security report to return in the list response.
     * @param {string} params.pageToken - Token returned from the previous list response to fetch the next page.
     * @param {string} params.parent - (Required) Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.
     * @param {string} params.status - Filter response list by security reports status.
     * @param {string} params.submittedBy - Filter response list by user who submitted queries.
     * @param {string} params.to - Filter response list by returning security reports that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.
     * @return {object} The API response object.
     */
    this.organizations.environments.securityReports.list = (params) => this._makeRequest('v1/{+parent}/securityReports', 'GET', params);

    this.organizations.environments.securityStats = {};

    /**
     * Retrieve security statistics as tabular rows.
     * @param {string} params.orgenv - (Required) Required. Should be of the form organizations//environments/.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.securityStats.queryTabularStats = (params) => this._makeRequest('v1/{+orgenv}/securityStats:queryTabularStats', 'POST', params);

    /**
     * Retrieve security statistics as a collection of time series.
     * @param {string} params.orgenv - (Required) Required. Should be of the form organizations//environments/.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.securityStats.queryTimeSeriesStats = (params) => this._makeRequest('v1/{+orgenv}/securityStats:queryTimeSeriesStats', 'POST', params);

    this.organizations.environments.securityIncidents = {};

    /**
     * GetSecurityIncident gets the specified security incident. Returns NOT_FOUND if security incident is not present for the specified organization and environment.
     * @param {string} params.name - (Required) Required. Security incident in the following format: `organizations/{org}/environments/{environment}/securityIncidents/{incident}'. Example: organizations/testOrg/environments/testEnv/securityIncidents/1234-4567-890-111
     * @return {object} The API response object.
     */
    this.organizations.environments.securityIncidents.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * ListSecurityIncidents lists all the security incident associated with the environment.
     * @param {string} params.filter - The filter expression to be used to get the list of security incidents, where filtering can be done on API Proxies. Example: filter = "api_proxy = /", "first_detected_time >", "last_detected_time <"
     * @param {integer} params.pageSize - Optional. The maximum number of incidents to return. The service may return fewer than this value. If unspecified, at most 50 incidents will be returned.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListSecurityIncident` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. For a specific organization, list of all the security incidents. Format: `organizations/{org}/environments/{environment}`
     * @return {object} The API response object.
     */
    this.organizations.environments.securityIncidents.list = (params) => this._makeRequest('v1/{+parent}/securityIncidents', 'GET', params);

    /**
     * UpdateSecurityIncidents updates an existing security incident.
     * @param {string} params.name - (Required) Immutable. Name of the security incident resource. Format: organizations/{org}/environments/{environment}/securityIncidents/{incident} Example: organizations/apigee-org/environments/dev/securityIncidents/1234-5678-9101-1111
     * @param {string} params.updateMask - Required. The list of fields to update. Allowed fields are: LINT.IfChange(allowed_update_fields_comment) - observability LINT.ThenChange()
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.securityIncidents.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * BatchUpdateSecurityIncident updates multiple existing security incidents.
     * @param {string} params.parent - (Required) Optional. The parent resource shared by all security incidents being updated. If this is set, the parent field in the UpdateSecurityIncidentRequest messages must either be empty or match this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.securityIncidents.batchUpdate = (params) => this._makeRequest('v1/{+parent}/securityIncidents:batchUpdate', 'POST', params);

    this.organizations.environments.securityActions = {};

    /**
     * CreateSecurityAction creates a SecurityAction.
     * @param {string} params.parent - (Required) Required. The organization and environment that this SecurityAction applies to. Format: organizations/{org}/environments/{env}
     * @param {string} params.securityActionId - Required. The ID to use for the SecurityAction, which will become the final component of the action's resource name. This value should be 0-61 characters, and valid format is (^[a-z]([a-z0-9-]{​0,61}[a-z0-9])?$).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.securityActions.create = (params) => this._makeRequest('v1/{+parent}/securityActions', 'POST', params);

    /**
     * Get a SecurityAction by name.
     * @param {string} params.name - (Required) Required. The fully qualified name of the SecurityAction to retrieve. Format: organizations/{org}/environments/{env}/securityActions/{security_action}
     * @return {object} The API response object.
     */
    this.organizations.environments.securityActions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns a list of SecurityActions. This returns both enabled and disabled actions.
     * @param {string} params.filter - The filter expression to filter List results. https://google.aip.dev/160. Allows for filtering over: state and api_proxies. E.g.: state = ACTIVE AND apiProxies:foo. Filtering by action is not supported https://github.com/aip-dev/google.aip.dev/issues/624
     * @param {integer} params.pageSize - The maximum number of SecurityActions to return. If unspecified, at most 50 SecurityActions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListSecurityActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSecurityActions` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of SecurityActions. Format: organizations/{org}/environments/{env}
     * @return {object} The API response object.
     */
    this.organizations.environments.securityActions.list = (params) => this._makeRequest('v1/{+parent}/securityActions', 'GET', params);

    /**
     * Update a SecurityAction.
     * @param {string} params.name - (Required) Immutable. This field is ignored during creation as per AIP-133. Please set the `security_action_id` field in the CreateSecurityActionRequest when creating a new SecurityAction. Format: organizations/{org}/environments/{env}/securityActions/{security_action}
     * @param {string} params.updateMask - Optional. The list of fields to update. Valid fields to update are `description`, `state`, `allow`, `deny`, and `flag`, `expire_time`, and `ttl`, `api_proxies`, and `condition_config`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.securityActions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a SecurityAction.
     * @param {string} params.name - (Required) Required. The name of the security monitoring condition to delete. Format: `organizations/{org}/environment/{env}/securityActions/{security_action}`
     * @return {object} The API response object.
     */
    this.organizations.environments.securityActions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Enable a SecurityAction. The `state` of the SecurityAction after enabling is `ENABLED`. `EnableSecurityAction` can be called on SecurityActions in the state `DISABLED`; SecurityActions in a different state (including `ENABLED) return an error.
     * @param {string} params.name - (Required) Required. The name of the SecurityAction to enable. Format: organizations/{org}/environments/{env}/securityActions/{security_action}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.securityActions.enable = (params) => this._makeRequest('v1/{+name}:enable', 'POST', params);

    /**
     * Disable a SecurityAction. The `state` of the SecurityAction after disabling is `DISABLED`. `DisableSecurityAction` can be called on SecurityActions in the state `ENABLED`; SecurityActions in a different state (including `DISABLED`) return an error.
     * @param {string} params.name - (Required) Required. The name of the SecurityAction to disable. Format: organizations/{org}/environments/{env}/securityActions/{security_action}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.securityActions.disable = (params) => this._makeRequest('v1/{+name}:disable', 'POST', params);

    this.organizations.environments.keyvaluemaps = {};

    /**
     * Creates a key value map in an environment.
     * @param {string} params.parent - (Required) Required. Name of the environment in which to create the key value map. Use the following structure in your request: `organizations/{org}/environments/{env}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.keyvaluemaps.create = (params) => this._makeRequest('v1/{+parent}/keyvaluemaps', 'POST', params);

    /**
     * Deletes a key value map from an environment.
     * @param {string} params.name - (Required) Required. Name of the key value map. Use the following structure in your request: `organizations/{org}/environments/{env}/keyvaluemaps/{keyvaluemap}`
     * @return {object} The API response object.
     */
    this.organizations.environments.keyvaluemaps.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.environments.keyvaluemaps.entries = {};

    /**
     * Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
     * @param {string} params.name - (Required) Required. Scope as indicated by the URI in which to fetch the key value map entry/value. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}/entries/{entry}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.environments.keyvaluemaps.entries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. **Notes:** * After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior. * Supported for Apigee hybrid 1.8.x and higher.
     * @param {string} params.name - (Required) Required. Scope as indicated by the URI in which to delete the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}/entries/{entry}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.environments.keyvaluemaps.entries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
     * @param {string} params.parent - (Required) Required. Scope as indicated by the URI in which to create the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.keyvaluemaps.entries.create = (params) => this._makeRequest('v1/{+parent}/entries', 'POST', params);

    /**
     * Update key value entry scoped to an organization, environment, or API proxy for an existing key.
     * @param {string} params.name - (Required) Required. Scope as indicated by the URI in which to create the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.environments.keyvaluemaps.entries.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
     * @param {integer} params.pageSize - Optional. Maximum number of key value entries to return. If unspecified, at most 100 entries will be returned.
     * @param {string} params.pageToken - Optional. Page token. If provides, must be a valid key value entry returned from a previous call that can be used to retrieve the next page.
     * @param {string} params.parent - (Required) Required. Scope as indicated by the URI in which to list key value maps. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.environments.keyvaluemaps.entries.list = (params) => this._makeRequest('v1/{+parent}/entries', 'GET', params);

    this.organizations.deployments = {};

    /**
     * Lists all deployments of API proxies or shared flows.
     * @param {string} params.parent - (Required) Required. Name of the organization for which to return deployment information in the following format: `organizations/{org}`
     * @param {boolean} params.sharedFlows - Optional. Flag that specifies whether to return shared flow or API proxy deployments. Set to `true` to return shared flow deployments; set to `false` to return API proxy deployments. Defaults to `false`.
     * @return {object} The API response object.
     */
    this.organizations.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    this.organizations.envgroups = {};

    /**
     * Creates a new environment group.
     * @param {string} params.name - Optional. ID of the environment group. Overrides any ID in the environment_group resource.
     * @param {string} params.parent - (Required) Required. Name of the organization in which to create the environment group in the following format: `organizations/{org}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.envgroups.create = (params) => this._makeRequest('v1/{+parent}/envgroups', 'POST', params);

    /**
     * Lists all environment groups.
     * @param {integer} params.pageSize - Maximum number of environment groups to return. The page size defaults to 25.
     * @param {string} params.pageToken - Page token, returned from a previous ListEnvironmentGroups call, that you can use to retrieve the next page.
     * @param {string} params.parent - (Required) Required. Name of the organization for which to list environment groups in the following format: `organizations/{org}`.
     * @return {object} The API response object.
     */
    this.organizations.envgroups.list = (params) => this._makeRequest('v1/{+parent}/envgroups', 'GET', params);

    /**
     * Gets an environment group.
     * @param {string} params.name - (Required) Required. Name of the environment group in the following format: `organizations/{org}/envgroups/{envgroup}`.
     * @return {object} The API response object.
     */
    this.organizations.envgroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates an environment group.
     * @param {string} params.name - (Required) Required. Name of the environment group to update in the format: `organizations/{org}/envgroups/{envgroup}.
     * @param {string} params.updateMask - Optional. List of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.envgroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an environment group.
     * @param {string} params.name - (Required) Required. Name of the environment group in the following format: `organizations/{org}/envgroups/{envgroup}`.
     * @return {object} The API response object.
     */
    this.organizations.envgroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets the deployed ingress configuration for an environment group.
     * @param {string} params.name - (Required) Required. Name of the deployed configuration for the environment group in the following format: 'organizations/{org}/envgroups/{envgroup}/deployedIngressConfig'.
     * @param {string} params.view - When set to FULL, additional details about the specific deployments receiving traffic will be included in the IngressConfig response's RoutingRules.
     * @return {object} The API response object.
     */
    this.organizations.envgroups.getDeployedIngressConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.envgroups.attachments = {};

    /**
     * Creates a new attachment of an environment to an environment group.
     * @param {string} params.parent - (Required) Required. EnvironmentGroup under which to create the attachment in the following format: `organizations/{org}/envgroups/{envgroup}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.envgroups.attachments.create = (params) => this._makeRequest('v1/{+parent}/attachments', 'POST', params);

    /**
     * Lists all attachments of an environment group.
     * @param {integer} params.pageSize - Maximum number of environment group attachments to return. The page size defaults to 25.
     * @param {string} params.pageToken - Page token, returned by a previous ListEnvironmentGroupAttachments call, that you can use to retrieve the next page.
     * @param {string} params.parent - (Required) Required. Name of the environment group in the following format: `organizations/{org}/envgroups/{envgroup}`.
     * @return {object} The API response object.
     */
    this.organizations.envgroups.attachments.list = (params) => this._makeRequest('v1/{+parent}/attachments', 'GET', params);

    /**
     * Gets an environment group attachment.
     * @param {string} params.name - (Required) Required. Name of the environment group attachment in the following format: `organizations/{org}/envgroups/{envgroup}/attachments/{attachment}`
     * @return {object} The API response object.
     */
    this.organizations.envgroups.attachments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes an environment group attachment.
     * @param {string} params.name - (Required) Required. Name of the environment group attachment to delete in the following format: `organizations/{org}/envgroups/{envgroup}/attachments/{attachment}`.
     * @return {object} The API response object.
     */
    this.organizations.envgroups.attachments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.instances = {};

    /**
     * Creates an Apigee runtime instance. The instance is accessible from the authorized network configured on the organization. **Note:** Not supported for Apigee hybrid.
     * @param {string} params.parent - (Required) Required. Name of the organization. Use the following structure in your request: `organizations/{org}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.instances.create = (params) => this._makeRequest('v1/{+parent}/instances', 'POST', params);

    /**
     * Deletes an Apigee runtime instance. The instance stops serving requests and the runtime data is deleted. **Note:** Not supported for Apigee hybrid.
     * @param {string} params.name - (Required) Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`.
     * @return {object} The API response object.
     */
    this.organizations.instances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets the details for an Apigee runtime instance. **Note:** Not supported for Apigee hybrid.
     * @param {string} params.name - (Required) Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`.
     * @return {object} The API response object.
     */
    this.organizations.instances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all Apigee runtime instances for the organization. **Note:** Not supported for Apigee hybrid.
     * @param {integer} params.pageSize - Maximum number of instances to return. Defaults to 25.
     * @param {string} params.pageToken - Page token, returned from a previous ListInstances call, that you can use to retrieve the next page of content.
     * @param {string} params.parent - (Required) Required. Name of the organization. Use the following structure in your request: `organizations/{org}`.
     * @return {object} The API response object.
     */
    this.organizations.instances.list = (params) => this._makeRequest('v1/{+parent}/instances', 'GET', params);

    /**
     * Updates an Apigee runtime instance. You can update the fields described in NodeConfig. No other fields will be updated. **Note:** Not supported for Apigee hybrid.
     * @param {string} params.name - (Required) Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`.
     * @param {string} params.updateMask - List of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.instances.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Reports the latest status for a runtime instance.
     * @param {string} params.instance - (Required) The name of the instance reporting this status. For SaaS the request will be rejected if no instance exists under this name. Format is organizations/{org}/instances/{instance}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.instances.reportStatus = (params) => this._makeRequest('v1/{+instance}:reportStatus', 'POST', params);

    this.organizations.instances.canaryevaluations = {};

    /**
     * Creates a new canary evaluation for an organization.
     * @param {string} params.parent - (Required) Required. Name of the organization. Use the following structure in your request: `organizations/{org}/instances/{instance}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.instances.canaryevaluations.create = (params) => this._makeRequest('v1/{+parent}/canaryevaluations', 'POST', params);

    /**
     * Gets a CanaryEvaluation for an organization.
     * @param {string} params.name - (Required) Required. Name of the CanaryEvaluation. Use the following structure in your request: `organizations/{org}/instances/*\/canaryevaluations/{evaluation}`
     * @return {object} The API response object.
     */
    this.organizations.instances.canaryevaluations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.instances.attachments = {};

    /**
     * Creates a new attachment of an environment to an instance. **Note:** Not supported for Apigee hybrid.
     * @param {string} params.parent - (Required) Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.instances.attachments.create = (params) => this._makeRequest('v1/{+parent}/attachments', 'POST', params);

    /**
     * Lists all attachments to an instance. **Note:** Not supported for Apigee hybrid.
     * @param {integer} params.pageSize - Maximum number of instance attachments to return. Defaults to 25.
     * @param {string} params.pageToken - Page token, returned by a previous ListInstanceAttachments call, that you can use to retrieve the next page of content.
     * @param {string} params.parent - (Required) Required. Name of the organization. Use the following structure in your request: `organizations/{org}/instances/{instance}`
     * @return {object} The API response object.
     */
    this.organizations.instances.attachments.list = (params) => this._makeRequest('v1/{+parent}/attachments', 'GET', params);

    /**
     * Gets an attachment. **Note:** Not supported for Apigee hybrid.
     * @param {string} params.name - (Required) Required. Name of the attachment. Use the following structure in your request: `organizations/{org}/instances/{instance}/attachments/{attachment}`
     * @return {object} The API response object.
     */
    this.organizations.instances.attachments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes an attachment. **Note:** Not supported for Apigee hybrid.
     * @param {string} params.name - (Required) Required. Name of the attachment. Use the following structure in your request: `organizations/{org}/instances/{instance}/attachments/{attachment}`.
     * @return {object} The API response object.
     */
    this.organizations.instances.attachments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.instances.natAddresses = {};

    /**
     * Lists the NAT addresses for an Apigee instance. **Note:** Not supported for Apigee hybrid.
     * @param {integer} params.pageSize - Maximum number of natAddresses to return. Defaults to 25.
     * @param {string} params.pageToken - Page token, returned from a previous ListNatAddresses call, that you can use to retrieve the next page of content.
     * @param {string} params.parent - (Required) Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`
     * @return {object} The API response object.
     */
    this.organizations.instances.natAddresses.list = (params) => this._makeRequest('v1/{+parent}/natAddresses', 'GET', params);

    /**
     * Gets the details of a NAT address. **Note:** Not supported for Apigee hybrid.
     * @param {string} params.name - (Required) Required. Name of the nat address. Use the following structure in your request: `organizations/{org}/instances/{instances}/natAddresses/{nataddress}`
     * @return {object} The API response object.
     */
    this.organizations.instances.natAddresses.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a NAT address. The address is created in the RESERVED state and a static external IP address will be provisioned. At this time, the instance will not use this IP address for Internet egress traffic. The address can be activated for use once any required firewall IP whitelisting has been completed. **Note:** Not supported for Apigee hybrid.
     * @param {string} params.parent - (Required) Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.instances.natAddresses.create = (params) => this._makeRequest('v1/{+parent}/natAddresses', 'POST', params);

    /**
     * Activates the NAT address. The Apigee instance can now use this for Internet egress traffic. **Note:** Not supported for Apigee hybrid.
     * @param {string} params.name - (Required) Required. Name of the nat address. Use the following structure in your request: `organizations/{org}/instances/{instances}/natAddresses/{nataddress}``
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.instances.natAddresses.activate = (params) => this._makeRequest('v1/{+name}:activate', 'POST', params);

    /**
     * Deletes the NAT address. Connections that are actively using the address are drained before it is removed. **Note:** Not supported for Apigee hybrid.
     * @param {string} params.name - (Required) Required. Name of the nat address. Use the following structure in your request: `organizations/{org}/instances/{instances}/natAddresses/{nataddress}``
     * @return {object} The API response object.
     */
    this.organizations.instances.natAddresses.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.sharedflows = {};

    /**
     * Lists all shared flows in the organization. If the resource has the `space` attribute set, the response may not return all resources. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {boolean} params.includeMetaData - Indicates whether to include shared flow metadata in the response.
     * @param {boolean} params.includeRevisions - Indicates whether to include a list of revisions in the response.
     * @param {string} params.parent - (Required) Required. The name of the parent organization under which to get shared flows. Must be of the form: `organizations/{organization_id}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {string} params.space - Optional. The space ID used to filter the list of shared flows (optional). If unspecified, all shared flows in the organization will be listed. To learn how Spaces can be used to manage resources, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.sharedflows.list = (params) => this._makeRequest('v1/{+parent}/sharedflows', 'GET', params);

    /**
     * Gets a shared flow by name, including a list of its revisions.
     * @param {string} params.name - (Required) Required. The name of the shared flow to get. Must be of the form: `organizations/{organization_id}/sharedflows/{shared_flow_id}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.sharedflows.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a shared flow and all it's revisions. The shared flow must be undeployed before you can delete it.
     * @param {string} params.name - (Required) Required. shared flow name of the form: `organizations/{organization_id}/sharedflows/{shared_flow_id}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.sharedflows.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Uploads a ZIP-formatted shared flow configuration bundle to an organization. If the shared flow already exists, this creates a new revision of it. If the shared flow does not exist, this creates it. Once imported, the shared flow revision must be deployed before it can be accessed at runtime. The size limit of a shared flow bundle is 15 MB.
     * @param {string} params.action - Required. Must be set to either `import` or `validate`.
     * @param {string} params.name - Required. The name to give the shared flow
     * @param {string} params.parent - (Required) Required. The name of the parent organization under which to create the shared flow. Must be of the form: `organizations/{organization_id}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {string} params.space - Optional. The ID of the space to associated with this shared flow. Any IAM policies applied to the space will affect access to this shared flow. Note that this field is only respected when creating a new shared flow. It has no effect when creating a new revision for an existing shared flow.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sharedflows.create = (params) => this._makeRequest('v1/{+parent}/sharedflows', 'POST', params);

    /**
     * Moves an shared flow to a different space.
     * @param {string} params.name - (Required) Required. Shared Flow to move in the following format: `organizations/{org}/sharedflows/{shared_flow}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sharedflows.move = (params) => this._makeRequest('v1/{+name}:move', 'POST', params);

    this.organizations.sharedflows.deployments = {};

    /**
     * Lists all deployments of a shared flow.
     * @param {string} params.parent - (Required) Required. Name of the shared flow for which to return deployment information in the following format: `organizations/{org}/sharedflows/{sharedflow}` If the shared flow resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.sharedflows.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    this.organizations.sharedflows.revisions = {};

    /**
     * Updates a shared flow revision. This operation is only allowed on revisions which have never been deployed. After deployment a revision becomes immutable, even if it becomes undeployed. The payload is a ZIP-formatted shared flow. Content type must be either multipart/form-data or application/octet-stream.
     * @param {string} params.name - (Required) Required. The name of the shared flow revision to update. Must be of the form: `organizations/{organization_id}/sharedflows/{shared_flow_id}/revisions/{revision_id}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {boolean} params.validate - Ignored. All uploads are validated regardless of the value of this field. It is kept for compatibility with existing APIs. Must be `true` or `false` if provided.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sharedflows.revisions.updateSharedFlowRevision = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    /**
     * Gets a revision of a shared flow. To download the shared flow configuration bundle for the specified revision as a zip file, set the `format` query parameter to `bundle`. If you are using curl, specify `-o filename.zip` to save the output to a file; otherwise, it displays to `stdout`. Then, develop the shared flow configuration locally and upload the updated sharedFlow configuration revision, as described in [updateSharedFlowRevision](updateSharedFlowRevision).
     * @param {string} params.format - Specify `bundle` to export the contents of the shared flow bundle. Otherwise, the bundle metadata is returned.
     * @param {string} params.name - (Required) Required. The name of the shared flow revision to get. Must be of the form: `organizations/{organization_id}/sharedflows/{shared_flow_id}/revisions/{revision_id}` If the Shared Flow resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.sharedflows.revisions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a shared flow and all associated policies, resources, and revisions. You must undeploy the shared flow before deleting it.
     * @param {string} params.name - (Required) Required. The name of the shared flow revision to delete. Must be of the form: `organizations/{organization_id}/sharedflows/{shared_flow_id}/revisions/{revision_id}` If the Shared Flow resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.sharedflows.revisions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.sharedflows.revisions.deployments = {};

    /**
     * Lists all deployments of a shared flow revision.
     * @param {string} params.parent - (Required) Required. Name of the API proxy revision for which to return deployment information in the following format: `organizations/{org}/sharedflows/{sharedflow}/revisions/{rev}`. If the shared flow resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.sharedflows.revisions.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    this.organizations.spaces = {};

    /**
     * Create a space under an organization.
     * @param {string} params.parent - (Required) Required. Name of the Google Cloud project in which to associate the Apigee space. Pass the information as a query parameter using the following structure in your request: `organizations/`
     * @param {string} params.spaceId - Required. Resource ID of the space.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.spaces.create = (params) => this._makeRequest('v1/{+parent}/spaces', 'POST', params);

    /**
     * Get a space under an Organization.
     * @param {string} params.name - (Required) Required. Apigee organization space name in the following format: `organizations/{org}/spaces/{space}`
     * @return {object} The API response object.
     */
    this.organizations.spaces.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a space.
     * @param {string} params.name - (Required) Required. Name of the space in the following format: `organizations/{org}/spaces/{space_id}`.
     * @param {string} params.updateMask - Required. List of fields to be updated. Fields that can be updated: display_name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.spaces.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an organization space.
     * @param {string} params.name - (Required) Required. Apigee organization space name in the following format: `organizations/{org}/spaces/{space}`
     * @return {object} The API response object.
     */
    this.organizations.spaces.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists spaces under an organization.
     * @param {integer} params.pageSize - Optional. The maximum number of spaces to return. The service may return fewer than this value. If unspecified, at most 50 spaces will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListSpaces` call. Provide this to retrieve the subsequent page. When paginating, all parameters must match the original call.
     * @param {string} params.parent - (Required) Required. Use the following structure in your request: `organizations`
     * @return {object} The API response object.
     */
    this.organizations.spaces.list = (params) => this._makeRequest('v1/{+parent}/spaces', 'GET', params);

    /**
     * IAM META APIs Callers must have apigee.spaces.setIamPolicy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.spaces.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Callers must have apigee.spaces.getIamPolicy.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.organizations.spaces.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Callers don't need any permissions.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.spaces.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.organizations.hostStats = {};

    /**
     * Retrieve metrics grouped by dimensions in host level. The types of metrics you can retrieve include traffic, message counts, API call latency, response size, and cache hits and counts. Dimensions let you view metrics in meaningful groups. You can optionally pass dimensions as path parameters to the `stats` API. If dimensions are not specified, the metrics are computed on the entire set of data for the given time range.
     * @param {string} params.accuracy - No longer used by Apigee. Supported for backwards compatibility.
     * @param {string} params.envgroupHostname - Required. Hostname for which the interactive query will be executed.
     * @param {string} params.filter - Flag that enables drill-down on specific dimension values.
     * @param {string} params.limit - Maximum number of result items to return.
     * @param {string} params.name - (Required) Required. Resource name for which the interactive query will be executed. Use the following format in your request: `organizations/{org}/hostStats/{dimensions}` Dimensions let you view metrics in meaningful groupings, such as `apiproxy`, `target_host`. The value of dimensions should be a comma-separated list as shown below `organizations/{org}/hostStats/apiproxy,request_verb`
     * @param {string} params.offset - Offset value. Use `offset` with `limit` to enable pagination of results. For example, to display results 11-20, set limit to `10` and offset to `10`.
     * @param {boolean} params.realtime - No longer used by Apigee. Supported for backwards compatibility.
     * @param {string} params.select - Comma-separated list of metrics. For example: `sum(message_count),sum(error_count)`
     * @param {string} params.sort - Flag that specifies if the sort order should be ascending or descending. Valid values are `DESC` and `ASC`.
     * @param {string} params.sortby - Comma-separated list of metrics to sort the final result.
     * @param {string} params.timeRange - Time interval for the interactive query. Time range is specified in GMT as `start~end`. For example: `04/15/2017 00:00~05/15/2017 23:59`
     * @param {string} params.timeUnit - Granularity of metrics returned. Valid values include: `second`, `minute`, `hour`, `day`, `week`, or `month`.
     * @param {string} params.topk - Top number of results to return. For example, to return the top 5 results, set `topk=5`.
     * @param {boolean} params.tsAscending - Flag that specifies whether to list timestamps in ascending (`true`) or descending (`false`) order. Apigee recommends that you set this value to `true` if you are using `sortby` with `sort=DESC`.
     * @param {string} params.tzo - Timezone offset value.
     * @return {object} The API response object.
     */
    this.organizations.hostStats.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.optimizedHostStats = {};

    /**
     * Similar to GetHostStats except that the response is less verbose.
     * @param {string} params.accuracy - No longer used by Apigee. Supported for backwards compatibility.
     * @param {string} params.envgroupHostname - Required. Hostname for which the interactive query will be executed.
     * @param {string} params.filter - Filter that enables you to drill-down on specific dimension values.
     * @param {string} params.limit - Maximum number of result items to return.
     * @param {string} params.name - (Required) Required. Resource name for which the interactive query will be executed. Use the following format in your request: `organizations/{organization_id}/optimizedHostStats/{dimensions}` Dimensions let you view metrics in meaningful groupings, such as `apiproxy`, `target_host`. The value of dimensions should be a comma-separated list as shown below: `organizations/{org}/optimizedHostStats/apiproxy,request_verb`
     * @param {string} params.offset - Offset value. Use `offset` with `limit` to enable pagination of results. For example, to display results 11-20, set limit to `10` and offset to `10`.
     * @param {boolean} params.realtime - No longer used by Apigee. Supported for backwards compatibility.
     * @param {string} params.select - Required. Comma-separated list of metrics. For example: `sum(message_count),sum(error_count)`
     * @param {string} params.sort - Flag that specifies whether the sort order should be ascending or descending. Valid values include `DESC` and `ASC`.
     * @param {string} params.sortby - Comma-separated list of metrics used to sort the final result.
     * @param {string} params.timeRange - Required. Time interval for the interactive query. Time range is specified in GMT as `start~end`. For example: `04/15/2017 00:00~05/15/2017 23:59`.
     * @param {string} params.timeUnit - Granularity of metrics returned. Valid values include: `second`, `minute`, `hour`, `day`, `week`, or `month`.
     * @param {string} params.topk - Top number of results to return. For example, to return the top 5 results, set `topk=5`.
     * @param {boolean} params.tsAscending - Flag that specifies whether to list timestamps in ascending (`true`) or descending (`false`) order. Apigee recommends that you set this value to `true` if you are using `sortby` with `sort=DESC`.
     * @param {string} params.tzo - Timezone offset value.
     * @return {object} The API response object.
     */
    this.organizations.optimizedHostStats.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.apiproducts = {};

    /**
     * Creates an API product in an organization. You create API products after you have proxied backend services using API proxies. An API product is a collection of API resources combined with quota settings and metadata that you can use to deliver customized and productized API bundles to your developer community. This metadata can include: - Scope - Environments - API proxies - Extensible profile API products enable you repackage APIs on the fly, without having to do any additional coding or configuration. Apigee recommends that you start with a simple API product including only required elements. You then provision credentials to apps to enable them to start testing your APIs. After you have authentication and authorization working against a simple API product, you can iterate to create finer-grained API products, defining different sets of API resources for each API product. **WARNING:** - If you don't specify an API proxy in the request body, *any* app associated with the product can make calls to *any* API in your entire organization. - If you don't specify an environment in the request body, the product allows access to all environments. For more information, see What is an API product?
     * @param {string} params.parent - (Required) Required. Name of the organization in which the API product will be created. Use the following structure in your request: `organizations/{org}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.apiproducts.create = (params) => this._makeRequest('v1/{+parent}/apiproducts', 'POST', params);

    /**
     * Deletes an API product from an organization. Deleting an API product causes app requests to the resource URIs defined in the API product to fail. Ensure that you create a new API product to serve existing apps, unless your intention is to disable access to the resources defined in the API product. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via the UI or the API. View the list of API products to verify the internal name.
     * @param {string} params.name - (Required) Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apiproducts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets configuration details for an API product. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via the UI or the API. View the list of API products to verify the internal name.
     * @param {string} params.name - (Required) Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apiproducts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Moves an API product to a different space.
     * @param {string} params.name - (Required) Required. API product to move in the following format: `organizations/{org}/apiproducts/{apiproduct}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.apiproducts.move = (params) => this._makeRequest('v1/{+name}:move', 'POST', params);

    /**
     * Lists all API product names for an organization. Filter the list by passing an `attributename` and `attibutevalue`. The maximum number of API products returned is 1000. You can paginate the list of API products returned using the `startKey` and `count` query parameters. If the resource has the `space` attribute set, the response may not return all resources. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {string} params.attributename - Name of the attribute used to filter the search.
     * @param {string} params.attributevalue - Value of the attribute used to filter the search.
     * @param {string} params.count - Enter the number of API products you want returned in the API call. The limit is 1000.
     * @param {boolean} params.expand - Flag that specifies whether to expand the results. Set to `true` to get expanded details about each API.
     * @param {string} params.parent - (Required) Required. Name of the organization. Use the following structure in your request: `organizations/{org}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {string} params.space - Optional. The Space to list API products for. When none provided, all the spaces the user has list access, will be used implicitly, and the same following rules will apply. Can be used in conjunction with start_key, expand and count for paginated response. Composite queries with attributename and attributevalue are not supported yet.
     * @param {string} params.startKey - Gets a list of API products starting with a specific API product in the list. For example, if you're returning 50 API products at a time (using the `count` query parameter), you can view products 50-99 by entering the name of the 50th API product in the first API (without using `startKey`). Product name is case sensitive.
     * @return {object} The API response object.
     */
    this.organizations.apiproducts.list = (params) => this._makeRequest('v1/{+parent}/apiproducts', 'GET', params);

    /**
     * Updates an existing API product. You must include all required values, whether or not you are updating them, as well as any optional values that you are updating. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via UI or API. View the list of API products to identify their internal names.
     * @param {string} params.name - (Required) Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path.To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.apiproducts.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Updates or creates API product attributes. This API **replaces** the current list of attributes with the attributes specified in the request body. In this way, you can update existing attributes, add new attributes, or delete existing attributes by omitting them from the request body. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with entities also get cached for at least 180 seconds after entity is accessed during runtime. In this case, the `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.
     * @param {string} params.name - (Required) Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.apiproducts.attributes = (params) => this._makeRequest('v1/{+name}/attributes', 'POST', params);

    this.organizations.apiproducts.attributes = {};

    /**
     * Gets the value of an API product attribute.
     * @param {string} params.name - (Required) Required. Name of the API product attribute. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}/attributes/{attribute}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apiproducts.attributes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the value of an API product attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with entities also get cached for at least 180 seconds after entity is accessed during runtime. In this case, the `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.
     * @param {string} params.name - (Required) Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.apiproducts.attributes.updateApiProductAttribute = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    /**
     * Deletes an API product attribute.
     * @param {string} params.name - (Required) Required. Name of the API product attribute. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}/attributes/{attribute}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apiproducts.attributes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists all API product attributes.
     * @param {string} params.parent - (Required) Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apiproducts.attributes.list = (params) => this._makeRequest('v1/{+parent}/attributes', 'GET', params);

    this.organizations.apiproducts.rateplans = {};

    /**
     * Create a rate plan that is associated with an API product in an organization. Using rate plans, API product owners can monetize their API products by configuring one or more of the following: - Billing frequency - Initial setup fees for using an API product - Payment funding model (postpaid only) - Fixed recurring or consumption-based charges for using an API product - Revenue sharing with developer partners An API product can have multiple rate plans associated with it but *only one* rate plan can be active at any point of time. **Note: From the developer's perspective, they purchase API products not rate plans.
     * @param {string} params.parent - (Required) Required. Name of the API product that is associated with the rate plan. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.apiproducts.rateplans.create = (params) => this._makeRequest('v1/{+parent}/rateplans', 'POST', params);

    /**
     * Gets the details of a rate plan.
     * @param {string} params.name - (Required) Required. Name of the rate plan. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}/rateplans/{rateplan}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apiproducts.rateplans.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all the rate plans for an API product.
     * @param {integer} params.count - Number of rate plans to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The maximum limit is 1000. Defaults to 100.
     * @param {boolean} params.expand - Flag that specifies whether to expand the results. Set to `true` to get expanded details about each API. Defaults to `false`.
     * @param {string} params.orderBy - Name of the attribute used for sorting. Valid values include: * `name`: Name of the rate plan. * `state`: State of the rate plan (`DRAFT`, `PUBLISHED`). * `startTime`: Time when the rate plan becomes active. * `endTime`: Time when the rate plan expires. **Note**: Not supported by Apigee at this time.
     * @param {string} params.parent - (Required) Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` Use `organizations/{org}/apiproducts/-` to return rate plans for all API products within the organization. If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {string} params.startKey - Name of the rate plan from which to start displaying the list of rate plans. If omitted, the list starts from the first item. For example, to view the rate plans from 51-150, set the value of `startKey` to the name of the 51st rate plan and set the value of `count` to 100.
     * @param {string} params.state - State of the rate plans (`DRAFT`, `PUBLISHED`) that you want to display.
     * @return {object} The API response object.
     */
    this.organizations.apiproducts.rateplans.list = (params) => this._makeRequest('v1/{+parent}/rateplans', 'GET', params);

    /**
     * Updates an existing rate plan.
     * @param {string} params.name - (Required) Required. Name of the rate plan. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}/rateplans/{rateplan}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.apiproducts.rateplans.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Deletes a rate plan.
     * @param {string} params.name - (Required) Required. ID of the rate plan. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}/rateplans/{rateplan}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.apiproducts.rateplans.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.apps = {};

    /**
     * Gets the app profile for the specified app ID.
     * @param {string} params.name - (Required) Required. App ID in the following format: `organizations/{org}/apps/{app}`
     * @return {object} The API response object.
     */
    this.organizations.apps.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists IDs of apps within an organization that have the specified app status (approved or revoked) or are of the specified app type (developer or company).
     * @param {string} params.apiProduct - API product.
     * @param {string} params.apptype - Optional. 'apptype' is no longer available. Use a 'filter' instead.
     * @param {boolean} params.expand - Optional. Flag that specifies whether to return an expanded list of apps for the organization. Defaults to `false`.
     * @param {string} params.filter - Optional. The filter expression to be used to get the list of apps, where filtering can be done on developerEmail, apiProduct, consumerKey, status, appId, appName, appType and appGroup. Examples: "developerEmail=foo@bar.com", "appType=AppGroup", or "appType=Developer" "filter" is supported from ver 1.10.0 and above.
     * @param {string} params.ids - Optional. Comma-separated list of app IDs on which to filter.
     * @param {boolean} params.includeCred - Optional. Flag that specifies whether to include credentials in the response.
     * @param {string} params.keyStatus - Optional. Key status of the app. Valid values include `approved` or `revoked`. Defaults to `approved`.
     * @param {integer} params.pageSize - Optional. Count of apps a single page can have in the response. If unspecified, at most 100 apps will be returned. The maximum value is 100; values above 100 will be coerced to 100. "page_size" is supported from ver 1.10.0 and above.
     * @param {string} params.pageToken - Optional. The starting index record for listing the developers. "page_token" is supported from ver 1.10.0 and above.
     * @param {string} params.parent - (Required) Required. Resource path of the parent in the following format: `organizations/{org}`
     * @param {string} params.rows - Optional. Maximum number of app IDs to return. Defaults to 1000.
     * @param {string} params.startKey - Returns the list of apps starting from the specified app ID.
     * @param {string} params.status - Optional. Filter by the status of the app. Valid values are `approved` or `revoked`. Defaults to `approved`.
     * @return {object} The API response object.
     */
    this.organizations.apps.list = (params) => this._makeRequest('v1/{+parent}/apps', 'GET', params);

    this.organizations.hostQueries = {};

    /**
     * Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.
     * @param {string} params.parent - (Required) Required. The parent resource name. Must be of the form `organizations/{org}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.hostQueries.create = (params) => this._makeRequest('v1/{+parent}/hostQueries', 'POST', params);

    /**
     * Get status of a query submitted at host level. If the query is still in progress, the `state` is set to "running" After the query has completed successfully, `state` is set to "completed"
     * @param {string} params.name - (Required) Required. Name of the asynchronous query to get. Must be of the form `organizations/{org}/queries/{queryId}`.
     * @return {object} The API response object.
     */
    this.organizations.hostQueries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * After the query is completed, use this API to retrieve the results. If the request succeeds, and there is a non-zero result set, the result is downloaded to the client as a zipped JSON file. The name of the downloaded file will be: OfflineQueryResult-.zip Example: `OfflineQueryResult-9cfc0d85-0f30-46d6-ae6f-318d0cb961bd.zip`
     * @param {string} params.name - (Required) Required. Name of the asynchronous query result to get. Must be of the form `organizations/{org}/queries/{queryId}/result`.
     * @return {object} The API response object.
     */
    this.organizations.hostQueries.getResult = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * @param {string} params.name - (Required) Required. Name of the asynchronous query result view to get. Must be of the form `organizations/{org}/queries/{queryId}/resultView`.
     * @return {object} The API response object.
     */
    this.organizations.hostQueries.getResultView = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Return a list of Asynchronous Queries at host level.
     * @param {string} params.dataset - Filter response list by dataset. Example: `api`, `mint`
     * @param {string} params.envgroupHostname - Required. Filter response list by hostname.
     * @param {string} params.from - Filter response list by returning asynchronous queries that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.
     * @param {string} params.inclQueriesWithoutReport - Flag to include asynchronous queries that don't have a report denifition.
     * @param {string} params.parent - (Required) Required. The parent resource name. Must be of the form `organizations/{org}`.
     * @param {string} params.status - Filter response list by asynchronous query status.
     * @param {string} params.submittedBy - Filter response list by user who submitted queries.
     * @param {string} params.to - Filter response list by returning asynchronous queries that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.
     * @return {object} The API response object.
     */
    this.organizations.hostQueries.list = (params) => this._makeRequest('v1/{+parent}/hostQueries', 'GET', params);

    this.organizations.reports = {};

    /**
     * Creates a Custom Report for an Organization. A Custom Report provides Apigee Customers to create custom dashboards in addition to the standard dashboards which are provided. The Custom Report in its simplest form contains specifications about metrics, dimensions and filters. It is important to note that the custom report by itself does not provide an executable entity. The Edge UI converts the custom report definition into an analytics query and displays the result in a chart.
     * @param {string} params.parent - (Required) Required. The parent organization name under which the Custom Report will be created. Must be of the form: `organizations/{organization_id}/reports`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.reports.create = (params) => this._makeRequest('v1/{+parent}/reports', 'POST', params);

    /**
     * Retrieve a custom report definition.
     * @param {string} params.name - (Required) Required. Custom Report name of the form: `organizations/{organization_id}/reports/{report_name}`
     * @return {object} The API response object.
     */
    this.organizations.reports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Return a list of Custom Reports
     * @param {boolean} params.expand - Set to 'true' to get expanded details about each custom report.
     * @param {string} params.parent - (Required) Required. The parent organization name under which the API product will be listed `organizations/{organization_id}/reports`
     * @return {object} The API response object.
     */
    this.organizations.reports.list = (params) => this._makeRequest('v1/{+parent}/reports', 'GET', params);

    /**
     * Update an existing custom report definition
     * @param {string} params.name - (Required) Required. Custom Report name of the form: `organizations/{organization_id}/reports/{report_name}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.reports.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Deletes an existing custom report definition
     * @param {string} params.name - (Required) Required. Custom Report name of the form: `organizations/{organization_id}/reports/{report_name}`
     * @return {object} The API response object.
     */
    this.organizations.reports.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.analytics = {};

    this.organizations.analytics.datastores = {};

    /**
     * Create a Datastore for an org
     * @param {string} params.parent - (Required) Required. The parent organization name. Must be of the form `organizations/{org}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.analytics.datastores.create = (params) => this._makeRequest('v1/{+parent}/analytics/datastores', 'POST', params);

    /**
     * Test if Datastore configuration is correct. This includes checking if credentials provided by customer have required permissions in target destination storage
     * @param {string} params.parent - (Required) Required. The parent organization name Must be of the form `organizations/{org}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.analytics.datastores.test = (params) => this._makeRequest('v1/{+parent}/analytics/datastores:test', 'POST', params);

    /**
     * Delete a Datastore from an org.
     * @param {string} params.name - (Required) Required. Resource name of the Datastore to be deleted. Must be of the form `organizations/{org}/analytics/datastores/{datastoreId}`
     * @return {object} The API response object.
     */
    this.organizations.analytics.datastores.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Get a Datastore
     * @param {string} params.name - (Required) Required. Resource name of the Datastore to be get. Must be of the form `organizations/{org}/analytics/datastores/{datastoreId}`
     * @return {object} The API response object.
     */
    this.organizations.analytics.datastores.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List Datastores
     * @param {string} params.parent - (Required) Required. The parent organization name. Must be of the form `organizations/{org}`.
     * @param {string} params.targetType - Optional. TargetType is used to fetch all Datastores that match the type
     * @return {object} The API response object.
     */
    this.organizations.analytics.datastores.list = (params) => this._makeRequest('v1/{+parent}/analytics/datastores', 'GET', params);

    /**
     * Update a Datastore
     * @param {string} params.name - (Required) Required. The resource name of datastore to be updated. Must be of the form `organizations/{org}/analytics/datastores/{datastoreId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.analytics.datastores.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    this.organizations.developers = {};

    /**
     * Creates a developer. Once created, the developer can register an app and obtain an API key. At creation time, a developer is set as `active`. To change the developer status, use the SetDeveloperStatus API.
     * @param {string} params.parent - (Required) Required. Name of the Apigee organization in which the developer is created. Use the following structure in your request: `organizations/{org}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.create = (params) => this._makeRequest('v1/{+parent}/developers', 'POST', params);

    /**
     * Updates a developer. This API replaces the existing developer details with those specified in the request. Include or exclude any existing details that you want to retain or delete, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.
     * @param {string} params.name - (Required) Required. Email address of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Returns the developer details, including the developer's name, email address, apps, and other information. **Note**: The response includes only the first 100 developer apps.
     * @param {string} params.action - Status of the developer. Valid values are `active` or `inactive`.
     * @param {string} params.name - (Required) Required. Email address of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
     * @return {object} The API response object.
     */
    this.organizations.developers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a developer. All apps and API keys associated with the developer are also removed. **Warning**: This API will permanently delete the developer and related artifacts. To avoid permanently deleting developers and their artifacts, set the developer status to `inactive` using the SetDeveloperStatus API. **Note**: The delete operation is asynchronous. The developer is deleted immediately, but its associated resources, such as apps and API keys, may take anywhere from a few seconds to a few minutes to be deleted.
     * @param {string} params.name - (Required) Required. Email address of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
     * @return {object} The API response object.
     */
    this.organizations.developers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists all developers in an organization by email address. By default, the response does not include company developers. Set the `includeCompany` query parameter to `true` to include company developers. **Note**: A maximum of 1000 developers are returned in the response. You paginate the list of developers returned using the `startKey` and `count` query parameters.
     * @param {string} params.app - Optional. List only Developers that are associated with the app. Note that start_key, count are not applicable for this filter criteria.
     * @param {string} params.count - Optional. Number of developers to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The limit is 1000.
     * @param {boolean} params.expand - Specifies whether to expand the results. Set to `true` to expand the results. This query parameter is not valid if you use the `count` or `startKey` query parameters.
     * @param {string} params.ids - Optional. List of IDs to include, separated by commas.
     * @param {boolean} params.includeCompany - Flag that specifies whether to include company details in the response.
     * @param {string} params.parent - (Required) Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`.
     * @param {string} params.startKey - **Note**: Must be used in conjunction with the `count` parameter. Email address of the developer from which to start displaying the list of developers. For example, if the an unfiltered list returns: ``` westley@example.com fezzik@example.com buttercup@example.com ``` and your `startKey` is `fezzik@example.com`, the list returned will be ``` fezzik@example.com buttercup@example.com ```
     * @return {object} The API response object.
     */
    this.organizations.developers.list = (params) => this._makeRequest('v1/{+parent}/developers', 'GET', params);

    /**
     * Sets the status of a developer. A developer is `active` by default. If you set a developer's status to `inactive`, the API keys assigned to the developer apps are no longer valid even though the API keys are set to `approved`. Inactive developers can still sign in to the developer portal and create apps; however, any new API keys generated during app creation won't work. To set the status of a developer, set the `action` query parameter to `active` or `inactive`, and the `Content-Type` header to `application/octet-stream`. If successful, the API call returns the following HTTP status code: `204 No Content`
     * @param {string} params.action - Status of the developer. Valid values are `active` and `inactive`.
     * @param {string} params.name - (Required) Required. Name of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_id}`
     * @return {object} The API response object.
     */
    this.organizations.developers.setDeveloperStatus = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    /**
     * Updates developer attributes. This API replaces the existing attributes with those specified in the request. Add new attributes, and include or exclude any existing attributes that you want to retain or remove, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.
     * @param {string} params.parent - (Required) Required. Email address of the developer for which attributes are being updated. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.attributes = (params) => this._makeRequest('v1/{+parent}/attributes', 'POST', params);

    /**
     * Gets the monetization configuration for the developer.
     * @param {string} params.name - (Required) Required. Monetization configuration for the developer. Use the following structure in your request: `organizations/{org}/developers/{developer}/monetizationConfig`
     * @return {object} The API response object.
     */
    this.organizations.developers.getMonetizationConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the monetization configuration for the developer.
     * @param {string} params.name - (Required) Required. Monetization configuration for the developer. Use the following structure in your request: `organizations/{org}/developers/{developer}/monetizationConfig`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.updateMonetizationConfig = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Gets the account balance for the developer.
     * @param {string} params.name - (Required) Required. Account balance for the developer. Use the following structure in your request: `organizations/{org}/developers/{developer}/balance`
     * @return {object} The API response object.
     */
    this.organizations.developers.getBalance = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.developers.apps = {};

    /**
     * Manages access to a developer app by enabling you to: * Approve or revoke a developer app * Generate a new consumer key and secret for a developer app To approve or revoke a developer app, set the `action` query parameter to `approve` or `revoke`, respectively, and the `Content-Type` header to `application/octet-stream`. If a developer app is revoked, none of its API keys are valid for API calls even though the keys are still approved. If successful, the API call returns the following HTTP status code: `204 No Content` To generate a new consumer key and secret for a developer app, pass the new key/secret details. Rather than replace an existing key, this API generates a new key. In this case, multiple key pairs may be associated with a single developer app. Each key pair has an independent status (`approve` or `revoke`) and expiration time. Any approved, non-expired key can be used in an API call. For example, if you're using API key rotation, you can generate new keys with expiration times that overlap keys that are going to expire. You might also generate a new consumer key/secret if the security of the original key/secret is compromised. The `keyExpiresIn` property defines the expiration time for the API key in milliseconds. If you don't set this property or set it to `-1`, the API key never expires. **Notes**: * When generating a new key/secret, this API replaces the existing attributes, notes, and callback URLs with those specified in the request. Include or exclude any existing information that you want to retain or delete, respectively. * To migrate existing consumer keys and secrets to hybrid from another system, see the CreateDeveloperAppKey API.
     * @param {string} params.action - Action. Valid values are `approve` or `revoke`.
     * @param {string} params.name - (Required) Required. Name of the developer app. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.generateKeyPairOrUpdateDeveloperAppStatus = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    /**
     * Creates an app associated with a developer. This API associates the developer app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls. The `DisplayName` (set as an attribute) appears in the UI. If you don't set the `DisplayName` attribute, the `name` appears in the UI.
     * @param {string} params.parent - (Required) Required. Name of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.create = (params) => this._makeRequest('v1/{+parent}/apps', 'POST', params);

    /**
     * Deletes a developer app. **Note**: The delete operation is asynchronous. The developer app is deleted immediately, but its associated resources, such as app keys or access tokens, may take anywhere from a few seconds to a few minutes to be deleted.
     * @param {string} params.name - (Required) Required. Name of the developer app. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}`
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Returns the details for a developer app.
     * @param {string} params.entity - **Note**: Must be used in conjunction with the `query` parameter. Set to `apiresources` to return the number of API resources that have been approved for access by a developer app in the specified Apigee organization.
     * @param {string} params.name - (Required) Required. Name of the developer app. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}`
     * @param {string} params.query - **Note**: Must be used in conjunction with the `entity` parameter. Set to `count` to return the number of API resources that have been approved for access by a developer app in the specified Apigee organization.
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all apps created by a developer in an Apigee organization. Optionally, you can request an expanded view of the developer apps. A maximum of 100 developer apps are returned per API call. You can paginate the list of deveoper apps returned using the `startKey` and `count` query parameters.
     * @param {string} params.count - Number of developer apps to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The limit is 1000.
     * @param {boolean} params.expand - Optional. Specifies whether to expand the results. Set to `true` to expand the results. This query parameter is not valid if you use the `count` or `startKey` query parameters.
     * @param {string} params.parent - (Required) Required. Name of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
     * @param {boolean} params.shallowExpand - Optional. Specifies whether to expand the results in shallow mode. Set to `true` to expand the results in shallow mode.
     * @param {string} params.startKey - **Note**: Must be used in conjunction with the `count` parameter. Name of the developer app from which to start displaying the list of developer apps. For example, if you're returning 50 developer apps at a time (using the `count` query parameter), you can view developer apps 50-99 by entering the name of the 50th developer app. The developer app name is case sensitive.
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.list = (params) => this._makeRequest('v1/{+parent}/apps', 'GET', params);

    /**
     * Updates the details for a developer app. In addition, you can add an API product to a developer app and automatically generate an API key for the app to use when calling APIs in the API product. If you want to use an existing API key for the API product, add the API product to the API key using the UpdateDeveloperAppKey API. Using this API, you cannot update the following: * App name as it is the primary key used to identify the app and cannot be changed. * Scopes associated with the app. Instead, use the ReplaceDeveloperAppKey API. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively.
     * @param {string} params.name - (Required) Required. Name of the developer app. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Updates attributes for a developer app. This API replaces the current attributes with those specified in the request.
     * @param {string} params.name - (Required) Required. Name of the developer app. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.attributes = (params) => this._makeRequest('v1/{+name}/attributes', 'POST', params);

    this.organizations.developers.apps.keys = {};

    /**
     * Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API. **Note**: All keys start out with status=approved, even if status=revoked is passed when the key is created. To revoke a key, use the UpdateDeveloperAppKey API.
     * @param {string} params.parent - (Required) Parent of the developer app key. Use the following structure in your request: 'organizations/{org}/developers/{developerEmail}/apps/{appName}'
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.keys.create = (params) => this._makeRequest('v1/{+parent}/keys', 'POST', params);

    /**
     * Adds an API product to a developer app key, enabling the app that holds the key to access the API resources bundled in the API product. In addition, you can add attributes and scopes associated with the API product to the developer app key. The status of the key can be updated via "action" Query Parameter. None of the other fields can be updated via this API. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively. None of the other fields can be updated. You can use the same key to access all API products associated with the app.
     * @param {string} params.action - Approve or revoke the consumer key by setting this value to `approve` or `revoke`, respectively. The `Content-Type` header must be set to `application/octet-stream`.
     * @param {string} params.name - (Required) Name of the developer app key. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}/keys/{key}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.keys.updateDeveloperAppKey = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    /**
     * Updates the scope of an app. This API replaces the existing scopes with those specified in the request. Include or exclude any existing scopes that you want to retain or delete, respectively. The specified scopes must already be defined for the API products associated with the app. This API sets the `scopes` element under the `apiProducts` element in the attributes of the app.
     * @param {string} params.name - (Required) Name of the developer app key. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}/keys/{key}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.keys.replaceDeveloperAppKey = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Deletes an app's consumer key and removes all API products associated with the app. After the consumer key is deleted, it cannot be used to access any APIs. **Note**: After you delete a consumer key, you may want to: 1. Create a new consumer key and secret for the developer app using the CreateDeveloperAppKey API, and subsequently add an API product to the key using the UpdateDeveloperAppKey API. 2. Delete the developer app, if it is no longer required.
     * @param {string} params.name - (Required) Name of the developer app key. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}/keys/{key}`
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.keys.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets details for a consumer key for a developer app, including the key and secret value, associated API products, and other information.
     * @param {string} params.name - (Required) Name of the developer app key. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}/keys/{key}`
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.keys.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.developers.apps.keys.create = {};

    /**
     * Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API. **Note**: All keys start out with status=approved, even if status=revoked is passed when the key is created. To revoke a key, use the UpdateDeveloperAppKey API.
     * @param {string} params.parent - (Required) Parent of the developer app key. Use the following structure in your request: 'organizations/{org}/developers/{developerEmail}/apps/{appName}'
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.keys.create.create = (params) => this._makeRequest('v1/{+parent}/keys/create', 'POST', params);

    this.organizations.developers.apps.keys.apiproducts = {};

    /**
     * Removes an API product from an app's consumer key. After the API product is removed, the app cannot access the API resources defined in that API product. **Note**: The consumer key is not removed, only its association with the API product.
     * @param {string} params.name - (Required) Name of the API product in the developer app key in the following format: `organizations/{org}/developers/{developer_email}/apps/{app}/keys/{key}/apiproducts/{apiproduct}`
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.keys.apiproducts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Approves or revokes the consumer key for an API product. After a consumer key is approved, the app can use it to access APIs. A consumer key that is revoked or pending cannot be used to access an API. Any access tokens associated with a revoked consumer key will remain active. However, Apigee checks the status of the consumer key and if set to `revoked` will not allow access to the API.
     * @param {string} params.action - Approve or revoke the consumer key by setting this value to `approve` or `revoke`, respectively.
     * @param {string} params.name - (Required) Name of the API product in the developer app key in the following format: `organizations/{org}/developers/{developer_email}/apps/{app}/keys/{key}/apiproducts/{apiproduct}`
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.keys.apiproducts.updateDeveloperAppKeyApiProduct = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    this.organizations.developers.apps.attributes = {};

    /**
     * Returns a developer app attribute.
     * @param {string} params.name - (Required) Required. Name of the developer app attribute. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}/attributes/{attribute}`
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.attributes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a developer app attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.
     * @param {string} params.name - (Required) Required. Name of the developer app attribute. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}/attributes/{attribute}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.attributes.updateDeveloperAppAttribute = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    /**
     * Deletes a developer app attribute.
     * @param {string} params.name - (Required) Required. Name of the developer app attribute. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}/attributes/{attribute}`
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.attributes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Returns a list of all developer app attributes.
     * @param {string} params.parent - (Required) Required. Name of the developer app. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}`
     * @return {object} The API response object.
     */
    this.organizations.developers.apps.attributes.list = (params) => this._makeRequest('v1/{+parent}/attributes', 'GET', params);

    this.organizations.developers.attributes = {};

    /**
     * Returns the value of the specified developer attribute.
     * @param {string} params.name - (Required) Required. Name of the developer attribute. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/attributes/{attribute}`
     * @return {object} The API response object.
     */
    this.organizations.developers.attributes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a developer attribute.
     * @param {string} params.name - (Required) Required. Name of the developer attribute. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/attributes/{attribute}`
     * @return {object} The API response object.
     */
    this.organizations.developers.attributes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates a developer attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.
     * @param {string} params.name - (Required) Required. Name of the developer attribute. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/attributes/{attribute}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.attributes.updateDeveloperAttribute = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    /**
     * Returns a list of all developer attributes.
     * @param {string} params.parent - (Required) Required. Email address of the developer for which attributes are being listed. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
     * @return {object} The API response object.
     */
    this.organizations.developers.attributes.list = (params) => this._makeRequest('v1/{+parent}/attributes', 'GET', params);

    this.organizations.developers.balance = {};

    /**
     * Credits the account balance for the developer.
     * @param {string} params.name - (Required) Required. Account balance for the developer. Use the following structure in your request: `organizations/{org}/developers/{developer}/balance`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.balance.credit = (params) => this._makeRequest('v1/{+name}:credit', 'POST', params);

    /**
     * Adjust the prepaid balance for the developer. This API will be used in scenarios where the developer has been under-charged or over-charged.
     * @param {string} params.name - (Required) Required. Account balance for the developer. Use the following structure in your request: `organizations/{org}/developers/{developer}/balance`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.balance.adjust = (params) => this._makeRequest('v1/{+name}:adjust', 'POST', params);

    this.organizations.developers.subscriptions = {};

    /**
     * Creates a subscription to an API product.
     * @param {string} params.parent - (Required) Required. Email address of the developer that is purchasing a subscription to the API product. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.subscriptions.create = (params) => this._makeRequest('v1/{+parent}/subscriptions', 'POST', params);

    /**
     * Gets details for an API product subscription.
     * @param {string} params.name - (Required) Required. Name of the API product subscription. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/subscriptions/{subscription}`
     * @return {object} The API response object.
     */
    this.organizations.developers.subscriptions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all API product subscriptions for a developer.
     * @param {integer} params.count - Number of API product subscriptions to return in the API call. Use with `startKey` to provide more targeted filtering. Defaults to 100. The maximum limit is 1000.
     * @param {string} params.parent - (Required) Required. Email address of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
     * @param {string} params.startKey - Name of the API product subscription from which to start displaying the list of subscriptions. If omitted, the list starts from the first item. For example, to view the API product subscriptions from 51-150, set the value of `startKey` to the name of the 51st subscription and set the value of `count` to 100.
     * @return {object} The API response object.
     */
    this.organizations.developers.subscriptions.list = (params) => this._makeRequest('v1/{+parent}/subscriptions', 'GET', params);

    /**
     * Expires an API product subscription immediately.
     * @param {string} params.name - (Required) Required. Name of the API product subscription. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/subscriptions/{subscription}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.developers.subscriptions.expire = (params) => this._makeRequest('v1/{+name}:expire', 'POST', params);

    this.organizations.appgroups = {};

    /**
     * Creates an AppGroup. Once created, user can register apps under the AppGroup to obtain secret key and password. At creation time, the AppGroup's state is set as `active`.
     * @param {string} params.parent - (Required) Required. Name of the Apigee organization in which the AppGroup is created. Use the following structure in your request: `organizations/{org}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.appgroups.create = (params) => this._makeRequest('v1/{+parent}/appgroups', 'POST', params);

    /**
     * Returns the AppGroup details for the provided AppGroup name in the request URI.
     * @param {string} params.name - (Required) Required. Name of the AppGroup. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}`
     * @return {object} The API response object.
     */
    this.organizations.appgroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes an AppGroup. All app and API keys associations with the AppGroup are also removed. **Warning**: This API will permanently delete the AppGroup and related artifacts. **Note**: The delete operation is asynchronous. The AppGroup is deleted immediately, but its associated resources, such as apps and API keys, may take anywhere from a few seconds to a few minutes to be deleted.
     * @param {string} params.name - (Required) Required. Name of the AppGroup. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}`
     * @return {object} The API response object.
     */
    this.organizations.appgroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists all AppGroups in an organization. A maximum of 1000 AppGroups are returned in the response if PageSize is not specified, or if the PageSize is greater than 1000.
     * @param {string} params.filter - The filter expression to be used to get the list of AppGroups, where filtering can be done on status, channelId or channelUri of the app group. Examples: filter=status=active", filter=channelId=, filter=channelUri=
     * @param {integer} params.pageSize - Count of AppGroups a single page can have in the response. If unspecified, at most 1000 AppGroups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - The starting index record for listing the AppGroups.
     * @param {string} params.parent - (Required) Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`.
     * @return {object} The API response object.
     */
    this.organizations.appgroups.list = (params) => this._makeRequest('v1/{+parent}/appgroups', 'GET', params);

    /**
     * Updates an AppGroup. This API replaces the existing AppGroup details with those specified in the request. Include or exclude any existing details that you want to retain or delete, respectively. Note that the state of the AppGroup should be updated using `action`, and not via AppGroup.
     * @param {string} params.action - Activate or de-activate the AppGroup by setting the action as `active` or `inactive`. The `Content-Type` header must be set to `application/octet-stream`, with empty body.
     * @param {string} params.name - (Required) Required. Name of the AppGroup. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.appgroups.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    this.organizations.appgroups.apps = {};

    /**
     * Creates an app and associates it with an AppGroup. This API associates the AppGroup app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls.
     * @param {string} params.parent - (Required) Required. Name of the AppGroup. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.appgroups.apps.create = (params) => this._makeRequest('v1/{+parent}/apps', 'POST', params);

    /**
     * Deletes an AppGroup app. **Note**: The delete operation is asynchronous. The AppGroup app is deleted immediately, but its associated resources, such as app keys or access tokens, may take anywhere from a few seconds to a few minutes to be deleted.
     * @param {string} params.name - (Required) Required. Name of the AppGroup app. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}/apps/{app}`
     * @return {object} The API response object.
     */
    this.organizations.appgroups.apps.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Returns the details for an AppGroup app.
     * @param {string} params.name - (Required) Required. Name of the AppGroup app. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}/apps/{app}`
     * @return {object} The API response object.
     */
    this.organizations.appgroups.apps.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all apps created by an AppGroup in an Apigee organization. Optionally, you can request an expanded view of the AppGroup apps. Lists all AppGroupApps in an AppGroup. A maximum of 1000 AppGroup apps are returned in the response if PageSize is not specified, or if the PageSize is greater than 1000.
     * @param {integer} params.pageSize - Optional. Maximum number entries to return. If unspecified, at most 1000 entries will be returned.
     * @param {string} params.pageToken - Optional. Page token. If provides, must be a valid AppGroup app returned from a previous call that can be used to retrieve the next page.
     * @param {string} params.parent - (Required) Required. Name of the AppGroup. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}`
     * @return {object} The API response object.
     */
    this.organizations.appgroups.apps.list = (params) => this._makeRequest('v1/{+parent}/apps', 'GET', params);

    /**
     * Updates the details for an AppGroup app. In addition, you can add an API product to an AppGroup app and automatically generate an API key for the app to use when calling APIs in the API product. If you want to use an existing API key for the API product, add the API product to the API key using the UpdateAppGroupAppKey API. Using this API, you cannot update the app name, as it is the primary key used to identify the app and cannot be changed. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively.
     * @param {string} params.action - Approve or revoke the consumer key by setting this value to `approve` or `revoke`. The `Content-Type` header must be set to `application/octet-stream`, with empty body.
     * @param {string} params.name - (Required) Required. Name of the AppGroup app. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}/apps/{app}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.appgroups.apps.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    this.organizations.appgroups.apps.keys = {};

    /**
     * Creates a custom consumer key and secret for a AppGroup app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateAppGroupAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteAppGroupAppKey API.
     * @param {string} params.parent - (Required) Required. Parent of the AppGroup app key. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}/apps/{app}/keys`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.appgroups.apps.keys.create = (params) => this._makeRequest('v1/{+parent}/keys', 'POST', params);

    /**
     * Deletes an app's consumer key and removes all API products associated with the app. After the consumer key is deleted, it cannot be used to access any APIs.
     * @param {string} params.name - (Required) Required. Name of the AppGroup app key. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}/apps/{app}/keys/{key}`
     * @return {object} The API response object.
     */
    this.organizations.appgroups.apps.keys.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets details for a consumer key for a AppGroup app, including the key and secret value, associated API products, and other information.
     * @param {string} params.name - (Required) Required. Name of the AppGroup app key. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}/apps/{app}/keys/{key}`
     * @return {object} The API response object.
     */
    this.organizations.appgroups.apps.keys.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Adds an API product to an AppGroupAppKey, enabling the app that holds the key to access the API resources bundled in the API product. In addition, you can add attributes and scopes to the AppGroupAppKey. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively. You can use the same key to access all API products associated with the app.
     * @param {string} params.name - (Required) Required. Name of the AppGroup app key. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}/apps/{app}/keys/{key}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.appgroups.apps.keys.updateAppGroupAppKey = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    this.organizations.appgroups.apps.keys.apiproducts = {};

    /**
     * Approves or revokes the consumer key for an API product. After a consumer key is approved, the app can use it to access APIs. A consumer key that is revoked or pending cannot be used to access an API. Any access tokens associated with a revoked consumer key will remain active. However, Apigee checks the status of the consumer key and if set to `revoked` will not allow access to the API.
     * @param {string} params.action - Approve or revoke the consumer key by setting this value to `approve` or `revoke` respectively. The `Content-Type` header, if set, must be set to `application/octet-stream`, with empty body.
     * @param {string} params.name - (Required) Required. Name of the API product in the developer app key in the following format: `organizations/{org}/appgroups/{app_group_name}/apps/{app}/keys/{key}/apiproducts/{apiproduct}`
     * @return {object} The API response object.
     */
    this.organizations.appgroups.apps.keys.apiproducts.updateAppGroupAppKeyApiProduct = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    /**
     * Removes an API product from an app's consumer key. After the API product is removed, the app cannot access the API resources defined in that API product. **Note**: The consumer key is not removed, only its association with the API product.
     * @param {string} params.name - (Required) Required. Parent of the AppGroup app key. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}/apps/{app}/keys/{key}/apiproducts/{apiproduct}`
     * @return {object} The API response object.
     */
    this.organizations.appgroups.apps.keys.apiproducts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.hostSecurityReports = {};

    /**
     * Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.
     * @param {string} params.parent - (Required) Required. The parent resource name. Must be of the form `organizations/{org}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.hostSecurityReports.create = (params) => this._makeRequest('v1/{+parent}/hostSecurityReports', 'POST', params);

    /**
     * Get status of a query submitted at host level. If the query is still in progress, the `state` is set to "running" After the query has completed successfully, `state` is set to "completed"
     * @param {string} params.name - (Required) Required. Name of the security report to get. Must be of the form `organizations/{org}/securityReports/{reportId}`.
     * @return {object} The API response object.
     */
    this.organizations.hostSecurityReports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * After the query is completed, use this API to retrieve the results. If the request succeeds, and there is a non-zero result set, the result is downloaded to the client as a zipped JSON file. The name of the downloaded file will be: OfflineQueryResult-.zip Example: `OfflineQueryResult-9cfc0d85-0f30-46d6-ae6f-318d0cb961bd.zip`
     * @param {string} params.name - (Required) Required. Name of the security report result to get. Must be of the form `organizations/{org}/securityReports/{reportId}/result`.
     * @return {object} The API response object.
     */
    this.organizations.hostSecurityReports.getResult = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * After the query is completed, use this API to view the query result when result size is small.
     * @param {string} params.name - (Required) Required. Name of the security report result view to get. Must be of the form `organizations/{org}/securityReports/{reportId}/resultView`.
     * @return {object} The API response object.
     */
    this.organizations.hostSecurityReports.getResultView = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Return a list of Security Reports at host level.
     * @param {string} params.dataset - Filter response list by dataset. Example: `api`, `mint`
     * @param {string} params.envgroupHostname - Required. Filter response list by hostname.
     * @param {string} params.from - Filter response list by returning security reports that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.
     * @param {integer} params.pageSize - The maximum number of security report to return in the list response.
     * @param {string} params.pageToken - Token returned from the previous list response to fetch the next page.
     * @param {string} params.parent - (Required) Required. The parent resource name. Must be of the form `organizations/{org}`.
     * @param {string} params.status - Filter response list by security report status.
     * @param {string} params.submittedBy - Filter response list by user who submitted queries.
     * @param {string} params.to - Filter response list by returning security reports that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.
     * @return {object} The API response object.
     */
    this.organizations.hostSecurityReports.list = (params) => this._makeRequest('v1/{+parent}/hostSecurityReports', 'GET', params);

    this.organizations.securityProfiles = {};

    /**
     * CreateSecurityProfile create a new custom security profile.
     * @param {string} params.parent - (Required) Required. Name of organization. Format: organizations/{org}
     * @param {string} params.securityProfileId - Required. The ID to use for the SecurityProfile, which will become the final component of the action's resource name. This value should be 1-63 characters and validated by "(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$)".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.securityProfiles.create = (params) => this._makeRequest('v1/{+parent}/securityProfiles', 'POST', params);

    /**
     * UpdateSecurityProfile update the metadata of security profile.
     * @param {string} params.name - (Required) Immutable. Name of the security profile resource. Format: organizations/{org}/securityProfiles/{profile}
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.securityProfiles.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * DeleteSecurityProfile delete a profile with all its revisions.
     * @param {string} params.name - (Required) Required. Name of profile. Format: organizations/{org}/securityProfiles/{profile}
     * @return {object} The API response object.
     */
    this.organizations.securityProfiles.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * GetSecurityProfile gets the specified security profile. Returns NOT_FOUND if security profile is not present for the specified organization.
     * @param {string} params.name - (Required) Required. Security profile in the following format: `organizations/{org}/securityProfiles/{profile}'. Profile may optionally contain revision ID. If revision ID is not provided, the response will contain latest revision by default. Example: organizations/testOrg/securityProfiles/testProfile@5
     * @return {object} The API response object.
     */
    this.organizations.securityProfiles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * ListSecurityProfiles lists all the security profiles associated with the org including attached and unattached profiles.
     * @param {integer} params.pageSize - The maximum number of profiles to return. The service may return fewer than this value. If unspecified, at most 50 profiles will be returned.
     * @param {string} params.pageToken - A page token, received from a previous `ListSecurityProfiles` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. For a specific organization, list of all the security profiles. Format: `organizations/{org}`
     * @return {object} The API response object.
     */
    this.organizations.securityProfiles.list = (params) => this._makeRequest('v1/{+parent}/securityProfiles', 'GET', params);

    /**
     * ListSecurityProfileRevisions lists all the revisions of the security profile.
     * @param {string} params.name - (Required) Required. For a specific profile, list all the revisions. Format: `organizations/{org}/securityProfiles/{profile}`
     * @param {integer} params.pageSize - The maximum number of profile revisions to return. The service may return fewer than this value. If unspecified, at most 50 revisions will be returned.
     * @param {string} params.pageToken - A page token, received from a previous `ListSecurityProfileRevisions` call. Provide this to retrieve the subsequent page.
     * @return {object} The API response object.
     */
    this.organizations.securityProfiles.listRevisions = (params) => this._makeRequest('v1/{+name}:listRevisions', 'GET', params);

    this.organizations.securityProfiles.environments = {};

    /**
     * CreateSecurityProfileEnvironmentAssociation creates profile environment association i.e. attaches environment to security profile.
     * @param {string} params.parent - (Required) Required. Name of organization and security profile ID. Format: organizations/{org}/securityProfiles/{profile}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.securityProfiles.environments.create = (params) => this._makeRequest('v1/{+parent}/environments', 'POST', params);

    /**
     * DeleteSecurityProfileEnvironmentAssociation removes profile environment association i.e. detaches environment from security profile.
     * @param {string} params.name - (Required) Required. The name of the environment attachment to delete. Format: organizations/{org}/securityProfiles/{profile}/environments/{env}
     * @return {object} The API response object.
     */
    this.organizations.securityProfiles.environments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * ComputeEnvironmentScores calculates scores for requested time range for the specified security profile and environment.
     * @param {string} params.profileEnvironment - (Required) Required. Name of organization and environment and profile id for which score needs to be computed. Format: organizations/{org}/securityProfiles/{profile}/environments/{env}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.securityProfiles.environments.computeEnvironmentScores = (params) => this._makeRequest('v1/{+profileEnvironment}:computeEnvironmentScores', 'POST', params);

    this.organizations.securityAssessmentResults = {};

    /**
     * Compute RAV2 security scores for a set of resources.
     * @param {string} params.name - (Required) Required. Name of the organization for which the score needs to be computed in the following format: `organizations/{org}/securityAssessmentResults`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.securityAssessmentResults.batchCompute = (params) => this._makeRequest('v1/{+name}:batchCompute', 'POST', params);

    this.organizations.securityProfilesV2 = {};

    /**
     * Create a security profile v2.
     * @param {string} params.parent - (Required) Required. The parent resource name. Format: `organizations/{org}`
     * @param {string} params.securityProfileV2Id - Required. The security profile id.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.securityProfilesV2.create = (params) => this._makeRequest('v1/{+parent}/securityProfilesV2', 'POST', params);

    /**
     * Get a security profile v2.
     * @param {string} params.name - (Required) Required. The name of the security profile v2 to get. Format: `organizations/{org}/securityProfilesV2/{profile}`
     * @return {object} The API response object.
     */
    this.organizations.securityProfilesV2.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List security profiles v2.
     * @param {integer} params.pageSize - Optional. The maximum number of profiles to return
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListSecurityProfilesV2` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. For a specific organization, list of all the security profiles. Format: `organizations/{org}`
     * @return {object} The API response object.
     */
    this.organizations.securityProfilesV2.list = (params) => this._makeRequest('v1/{+parent}/securityProfilesV2', 'GET', params);

    /**
     * Update a security profile V2.
     * @param {string} params.name - (Required) Identifier. Name of the security profile v2 resource. Format: organizations/{org}/securityProfilesV2/{profile}
     * @param {string} params.updateMask - Optional. The list of fields to update. Valid fields to update are `description` and `profileAssessmentConfigs`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.securityProfilesV2.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a security profile v2.
     * @param {string} params.name - (Required) Required. The name of the security profile v2 to delete. Format: `organizations/{org}/securityProfilesV2/{profile}`
     * @return {object} The API response object.
     */
    this.organizations.securityProfilesV2.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.securityMonitoringConditions = {};

    /**
     * Create a security monitoring condition.
     * @param {string} params.parent - (Required) Required. The parent resource name. Format: `organizations/{org}`
     * @param {string} params.securityMonitoringConditionId - Optional. Optional: The security monitoring condition id. If not specified, a monitoring condition uuid will be generated by the backend. This value should be 4-63 characters, and valid characters are /a-z-/.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.securityMonitoringConditions.create = (params) => this._makeRequest('v1/{+parent}/securityMonitoringConditions', 'POST', params);

    /**
     * Get a security monitoring condition.
     * @param {string} params.name - (Required) Required. The name of the security monitoring condition to get. Format: `organizations/{org}/securityMonitoringConditions/{security_monitoring_condition}`
     * @return {object} The API response object.
     */
    this.organizations.securityMonitoringConditions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List security monitoring conditions.
     * @param {string} params.filter - Optional. Filter for the monitoring conditions. For example: `profile=profile1 AND scope=env1`
     * @param {integer} params.pageSize - Optional. The maximum number of monitoring conditions to return.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListSecurityMonitoringConditions` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. For a specific organization, list all the security monitoring conditions. Format: `organizations/{org}`
     * @return {object} The API response object.
     */
    this.organizations.securityMonitoringConditions.list = (params) => this._makeRequest('v1/{+parent}/securityMonitoringConditions', 'GET', params);

    /**
     * Update a security monitoring condition.
     * @param {string} params.name - (Required) Identifier. Name of the security monitoring condition resource. Format: organizations/{org}/securityMonitoringConditions/{security_monitoring_condition}
     * @param {string} params.updateMask - Optional. The list of fields to update. Valid fields to update are `include_all_resources` and `include`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.securityMonitoringConditions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a security monitoring condition.
     * @param {string} params.name - (Required) Required. The name of the security monitoring condition to delete. Format: `organizations/{org}/securityMonitoringConditions/{security_monitoring_condition}`
     * @return {object} The API response object.
     */
    this.organizations.securityMonitoringConditions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.keyvaluemaps = {};

    /**
     * Creates a key value map in an organization.
     * @param {string} params.parent - (Required) Required. Name of the organization in which to create the key value map file. Use the following structure in your request: `organizations/{org}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.keyvaluemaps.create = (params) => this._makeRequest('v1/{+parent}/keyvaluemaps', 'POST', params);

    /**
     * Deletes a key value map from an organization.
     * @param {string} params.name - (Required) Required. Name of the key value map. Use the following structure in your request: `organizations/{org}/keyvaluemaps/{keyvaluemap}`
     * @return {object} The API response object.
     */
    this.organizations.keyvaluemaps.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.keyvaluemaps.entries = {};

    /**
     * Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
     * @param {string} params.name - (Required) Required. Scope as indicated by the URI in which to fetch the key value map entry/value. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}/entries/{entry}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.keyvaluemaps.entries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. **Notes:** * After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior. * Supported for Apigee hybrid 1.8.x and higher.
     * @param {string} params.name - (Required) Required. Scope as indicated by the URI in which to delete the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}/entries/{entry}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.keyvaluemaps.entries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
     * @param {string} params.parent - (Required) Required. Scope as indicated by the URI in which to create the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.keyvaluemaps.entries.create = (params) => this._makeRequest('v1/{+parent}/entries', 'POST', params);

    /**
     * Update key value entry scoped to an organization, environment, or API proxy for an existing key.
     * @param {string} params.name - (Required) Required. Scope as indicated by the URI in which to create the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.keyvaluemaps.entries.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
     * @param {integer} params.pageSize - Optional. Maximum number of key value entries to return. If unspecified, at most 100 entries will be returned.
     * @param {string} params.pageToken - Optional. Page token. If provides, must be a valid key value entry returned from a previous call that can be used to retrieve the next page.
     * @param {string} params.parent - (Required) Required. Scope as indicated by the URI in which to list key value maps. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
     * @return {object} The API response object.
     */
    this.organizations.keyvaluemaps.entries.list = (params) => this._makeRequest('v1/{+parent}/entries', 'GET', params);

    this.organizations.sites = {};

    this.organizations.sites.apicategories = {};

    /**
     * Creates a new API category.
     * @param {string} params.parent - (Required) Required. Name of the portal. Use the following structure in your request: `organizations/{org}/sites/{site}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sites.apicategories.create = (params) => this._makeRequest('v1/{+parent}/apicategories', 'POST', params);

    /**
     * Deletes an API category.
     * @param {string} params.name - (Required) Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}`
     * @return {object} The API response object.
     */
    this.organizations.sites.apicategories.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates an API category.
     * @param {string} params.name - (Required) Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sites.apicategories.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets an API category.
     * @param {string} params.name - (Required) Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}`
     * @return {object} The API response object.
     */
    this.organizations.sites.apicategories.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns the API categories associated with a portal.
     * @param {string} params.parent - (Required) Required. Name of the portal. Use the following structure in your request: `organizations/{org}/sites/{site}`
     * @return {object} The API response object.
     */
    this.organizations.sites.apicategories.list = (params) => this._makeRequest('v1/{+parent}/apicategories', 'GET', params);

    this.organizations.sites.apidocs = {};

    /**
     * Gets a catalog item.
     * @param {string} params.name - (Required) Required. Name of the catalog item. Use the following structure in your request: `organizations/{org}/sites/{site}/apidocs/{apidoc}`
     * @return {object} The API response object.
     */
    this.organizations.sites.apidocs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new catalog item.
     * @param {string} params.parent - (Required) Required. Name of the portal. Use the following structure in your request: `organizations/{org}/sites/{site}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sites.apidocs.create = (params) => this._makeRequest('v1/{+parent}/apidocs', 'POST', params);

    /**
     * Updates a catalog item.
     * @param {string} params.name - (Required) Required. Name of the catalog item. Use the following structure in your request: `organizations/{org}/sites/{site}/apidocs/{apidoc}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sites.apidocs.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Returns the catalog items associated with a portal.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. The service may return fewer than this value. If unspecified, at most 25 books will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListApiDocs` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. Name of the portal. Use the following structure in your request: `organizations/{org}/sites/{site}`
     * @return {object} The API response object.
     */
    this.organizations.sites.apidocs.list = (params) => this._makeRequest('v1/{+parent}/apidocs', 'GET', params);

    /**
     * Deletes a catalog item.
     * @param {string} params.name - (Required) Required. Name of the catalog item. Use the following structure in your request: `organizations/{org}/sites/{site}/apidocs/{apidoc}`
     * @return {object} The API response object.
     */
    this.organizations.sites.apidocs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates the documentation for the specified catalog item. Note that the documentation file contents will not be populated in the return message.
     * @param {string} params.name - (Required) Required. Resource name of the catalog item documentation. Use the following structure in your request: `organizations/{org}/sites/{site}/apidocs/{apidoc}/documentation`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sites.apidocs.updateDocumentation = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets the documentation for the specified catalog item.
     * @param {string} params.name - (Required) Required. Resource name of the catalog item documentation. Use the following structure in your request: `organizations/{org}/sites/{site}/apidocs/{apidoc}/documentation`
     * @return {object} The API response object.
     */
    this.organizations.sites.apidocs.getDocumentation = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.endpointAttachments = {};

    /**
     * Creates an endpoint attachment. **Note:** Not supported for Apigee hybrid.
     * @param {string} params.endpointAttachmentId - ID to use for the endpoint attachment. ID must start with a lowercase letter followed by up to 31 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. The minimum length is 2.
     * @param {string} params.parent - (Required) Required. Organization the endpoint attachment will be created in.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.endpointAttachments.create = (params) => this._makeRequest('v1/{+parent}/endpointAttachments', 'POST', params);

    /**
     * Gets the endpoint attachment.
     * @param {string} params.name - (Required) Required. Name of the endpoint attachment. Use the following structure in your request: `organizations/{org}/endpointAttachments/{endpoint_attachment}`
     * @return {object} The API response object.
     */
    this.organizations.endpointAttachments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists the endpoint attachments in an organization.
     * @param {integer} params.pageSize - Optional. Maximum number of endpoint attachments to return. If unspecified, at most 25 attachments will be returned.
     * @param {string} params.pageToken - Optional. Page token, returned from a previous `ListEndpointAttachments` call, that you can use to retrieve the next page.
     * @param {string} params.parent - (Required) Required. Name of the organization for which to list endpoint attachments. Use the following structure in your request: `organizations/{org}`
     * @return {object} The API response object.
     */
    this.organizations.endpointAttachments.list = (params) => this._makeRequest('v1/{+parent}/endpointAttachments', 'GET', params);

    /**
     * Deletes an endpoint attachment.
     * @param {string} params.name - (Required) Required. Name of the endpoint attachment. Use the following structure in your request: `organizations/{org}/endpointAttachments/{endpoint_attachment}`
     * @return {object} The API response object.
     */
    this.organizations.endpointAttachments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.dnsZones = {};

    /**
     * Creates a new DNS zone.
     * @param {string} params.dnsZoneId - Required. User assigned ID for this resource. Must be unique within the organization. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.
     * @param {string} params.parent - (Required) Required. Organization where the DNS zone will be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.dnsZones.create = (params) => this._makeRequest('v1/{+parent}/dnsZones', 'POST', params);

    /**
     * Fetches the representation of an existing DNS zone.
     * @param {string} params.name - (Required) Required. Name of the DNS zone to fetch. Use the following structure in your request: `organizations/{org}/dnsZones/{dns_zone}`.
     * @return {object} The API response object.
     */
    this.organizations.dnsZones.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Enumerates DNS zones that have been created but not yet deleted.
     * @param {integer} params.pageSize - Optional. Maximum number of DNS zones to return. If unspecified, at most 25 DNS zones will be returned.
     * @param {string} params.pageToken - Optional. Page token, returned from a previous `ListDnsZones` call, that you can use to retrieve the next page.
     * @param {string} params.parent - (Required) Required. Name of the organization for which to list the DNS zones. Use the following structure in your request: `organizations/{org}`
     * @return {object} The API response object.
     */
    this.organizations.dnsZones.list = (params) => this._makeRequest('v1/{+parent}/dnsZones', 'GET', params);

    /**
     * Deletes a previously created DNS zone.
     * @param {string} params.name - (Required) Required. Name of the DNS zone to delete. Use the following structure in your request: `organizations/{org}/dnsZones/{dns_zone}`.
     * @return {object} The API response object.
     */
    this.organizations.dnsZones.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects = {};

    /**
     * Provisions a new Apigee organization with a functioning runtime. This is the standard way to create trial organizations for a free Apigee trial.
     * @param {string} params.project - (Required) Required. Name of the GCP project with which to associate the Apigee organization.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.provisionOrganization = (params) => this._makeRequest('v1/{+project}:provisionOrganization', 'POST', params);
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
