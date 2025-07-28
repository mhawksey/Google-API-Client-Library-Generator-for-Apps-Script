
/**
 * Google Apps Script client library for the Identity and Access Management (IAM) API
 * Documentation URL: https://cloud.google.com/iam/
 * @class
 */
class Iam {
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
    this._rootUrl = 'https://iam.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.oauthClients = {};

    /**
     * Lists all non-deleted OauthClients in a project. If `show_deleted` is set to `true`, then deleted OauthClients are also listed.
     * @param {integer} params.pageSize - Optional. The maximum number of OauthClients to return. If unspecified, at most 50 OauthClients will be returned. The maximum value is 100; values above 100 are truncated to 100.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListOauthClients` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent to list OauthClients for.
     * @param {boolean} params.showDeleted - Optional. Whether to return soft-deleted OauthClients.
     * @return {object} The API response object.
     */
    this.projects.locations.oauthClients.list = (params) => this._makeRequest('v1/{+parent}/oauthClients', 'GET', params);

    /**
     * Gets an individual OauthClient.
     * @param {string} params.name - (Required) Required. The name of the OauthClient to retrieve. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}`.
     * @return {object} The API response object.
     */
    this.projects.locations.oauthClients.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new OauthClient. You cannot reuse the name of a deleted OauthClient until 30 days after deletion.
     * @param {string} params.oauthClientId - Required. The ID to use for the OauthClient, which becomes the final component of the resource name. This value should be a string of 6 to 63 lowercase letters, digits, or hyphens. It must start with a letter, and cannot have a trailing hyphen. The prefix `gcp-` is reserved for use by Google, and may not be specified.
     * @param {string} params.parent - (Required) Required. The parent resource to create the OauthClient in. The only supported location is `global`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.oauthClients.create = (params) => this._makeRequest('v1/{+parent}/oauthClients', 'POST', params);

    /**
     * Updates an existing OauthClient.
     * @param {string} params.name - (Required) Immutable. Identifier. The resource name of the OauthClient. Format:`projects/{project}/locations/{location}/oauthClients/{oauth_client}`.
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.oauthClients.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an OauthClient. You cannot use a deleted OauthClient. However, deletion does not revoke access tokens that have already been issued. They continue to grant access. Deletion does revoke refresh tokens that have already been issued. They cannot be used to renew an access token. If the OauthClient is undeleted, and the refresh tokens are not expired, they are valid for token exchange again. You can undelete an OauthClient for 30 days. After 30 days, deletion is permanent. You cannot update deleted OauthClients. However, you can view and list them.
     * @param {string} params.name - (Required) Required. The name of the OauthClient to delete. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}`.
     * @return {object} The API response object.
     */
    this.projects.locations.oauthClients.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Undeletes an OauthClient, as long as it was deleted fewer than 30 days ago.
     * @param {string} params.name - (Required) Required. The name of the OauthClient to undelete. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.oauthClients.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.projects.locations.oauthClients.credentials = {};

    /**
     * Lists all OauthClientCredentials in an OauthClient.
     * @param {string} params.parent - (Required) Required. The parent to list OauthClientCredentials for.
     * @return {object} The API response object.
     */
    this.projects.locations.oauthClients.credentials.list = (params) => this._makeRequest('v1/{+parent}/credentials', 'GET', params);

    /**
     * Gets an individual OauthClientCredential.
     * @param {string} params.name - (Required) Required. The name of the OauthClientCredential to retrieve. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}/credentials/{credential}`.
     * @return {object} The API response object.
     */
    this.projects.locations.oauthClients.credentials.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new OauthClientCredential.
     * @param {string} params.oauthClientCredentialId - Required. The ID to use for the OauthClientCredential, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified.
     * @param {string} params.parent - (Required) Required. The parent resource to create the OauthClientCredential in.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.oauthClients.credentials.create = (params) => this._makeRequest('v1/{+parent}/credentials', 'POST', params);

    /**
     * Updates an existing OauthClientCredential.
     * @param {string} params.name - (Required) Immutable. Identifier. The resource name of the OauthClientCredential. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}/credentials/{credential}`
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.oauthClients.credentials.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an OauthClientCredential. Before deleting an OauthClientCredential, it should first be disabled.
     * @param {string} params.name - (Required) Required. The name of the OauthClientCredential to delete. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}/credentials/{credential}`.
     * @return {object} The API response object.
     */
    this.projects.locations.oauthClients.credentials.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.workloadIdentityPools = {};

    /**
     * Lists all non-deleted WorkloadIdentityPools in a project. If `show_deleted` is set to `true`, then deleted pools are also listed.
     * @param {integer} params.pageSize - The maximum number of pools to return. If unspecified, at most 50 pools are returned. The maximum value is 1000; values above are 1000 truncated to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListWorkloadIdentityPools` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent resource to list pools for.
     * @param {boolean} params.showDeleted - Whether to return soft-deleted pools.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.list = (params) => this._makeRequest('v1/{+parent}/workloadIdentityPools', 'GET', params);

    /**
     * Gets an individual WorkloadIdentityPool.
     * @param {string} params.name - (Required) Required. The name of the pool to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new WorkloadIdentityPool. You cannot reuse the name of a deleted pool until 30 days after deletion.
     * @param {string} params.parent - (Required) Required. The parent resource to create the pool in. The only supported location is `global`.
     * @param {string} params.workloadIdentityPoolId - Required. The ID to use for the pool, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.create = (params) => this._makeRequest('v1/{+parent}/workloadIdentityPools', 'POST', params);

    /**
     * Updates an existing WorkloadIdentityPool.
     * @param {string} params.name - (Required) Output only. The resource name of the pool.
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a WorkloadIdentityPool. You cannot use a deleted pool to exchange external credentials for Google Cloud credentials. However, deletion does not revoke credentials that have already been issued. Credentials issued for a deleted pool do not grant access to resources. If the pool is undeleted, and the credentials are not expired, they grant access again. You can undelete a pool for 30 days. After 30 days, deletion is permanent. You cannot update deleted pools. However, you can view and list them.
     * @param {string} params.name - (Required) Required. The name of the pool to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Undeletes a WorkloadIdentityPool, as long as it was deleted fewer than 30 days ago.
     * @param {string} params.name - (Required) Required. The name of the pool to undelete.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    /**
     * Sets the IAM policies on a WorkloadIdentityPool
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the IAM policy of a WorkloadIdentityPool.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns the caller's permissions on a WorkloadIdentityPool
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.workloadIdentityPools.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.workloadIdentityPools.namespaces = {};

    /**
     * Lists all non-deleted WorkloadIdentityPoolNamespaces in a workload identity pool. If `show_deleted` is set to `true`, then deleted namespaces are also listed.
     * @param {integer} params.pageSize - The maximum number of namespaces to return. If unspecified, at most 50 namespaces are returned. The maximum value is 1000; values above are 1000 truncated to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListWorkloadIdentityPoolNamespaces` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent resource to list namespaces for.
     * @param {boolean} params.showDeleted - Whether to return soft-deleted namespaces.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.list = (params) => this._makeRequest('v1/{+parent}/namespaces', 'GET', params);

    /**
     * Gets an individual WorkloadIdentityPoolNamespace.
     * @param {string} params.name - (Required) Required. The name of the namespace to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new WorkloadIdentityPoolNamespace in a WorkloadIdentityPool.
     * @param {string} params.parent - (Required) Required. The parent resource to create the namespace in. The only supported location is `global`.
     * @param {string} params.workloadIdentityPoolNamespaceId - Required. The ID to use for the namespace. This value must: * contain at most 63 characters * contain only lowercase alphanumeric characters or `-` * start with an alphanumeric character * end with an alphanumeric character The prefix "gcp-" will be reserved for future uses.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.create = (params) => this._makeRequest('v1/{+parent}/namespaces', 'POST', params);

    /**
     * Updates an existing WorkloadIdentityPoolNamespace in a WorkloadIdentityPool.
     * @param {string} params.name - (Required) Output only. The resource name of the namespace.
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a WorkloadIdentityPoolNamespace. You can undelete a namespace for 30 days. After 30 days, deletion is permanent.
     * @param {string} params.name - (Required) Required. The name of the namespace to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Undeletes a WorkloadIdentityPoolNamespace, as long as it was deleted fewer than 30 days ago.
     * @param {string} params.name - (Required) Required. The name of the namespace to undelete.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.projects.locations.workloadIdentityPools.namespaces.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities = {};

    /**
     * Lists all non-deleted WorkloadIdentityPoolManagedIdentitys in a namespace. If `show_deleted` is set to `true`, then deleted managed identities are also listed.
     * @param {integer} params.pageSize - The maximum number of managed identities to return. If unspecified, at most 50 managed identities are returned. The maximum value is 1000; values above are 1000 truncated to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListWorkloadIdentityPoolManagedIdentities` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent resource to list managed identities for.
     * @param {boolean} params.showDeleted - Whether to return soft-deleted managed identities.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.list = (params) => this._makeRequest('v1/{+parent}/managedIdentities', 'GET', params);

    /**
     * Gets an individual WorkloadIdentityPoolManagedIdentity.
     * @param {string} params.name - (Required) Required. The name of the managed identity to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new WorkloadIdentityPoolManagedIdentity in a WorkloadIdentityPoolNamespace.
     * @param {string} params.parent - (Required) Required. The parent resource to create the manage identity in. The only supported location is `global`.
     * @param {string} params.workloadIdentityPoolManagedIdentityId - Required. The ID to use for the managed identity. This value must: * contain at most 63 characters * contain only lowercase alphanumeric characters or `-` * start with an alphanumeric character * end with an alphanumeric character The prefix "gcp-" will be reserved for future uses.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.create = (params) => this._makeRequest('v1/{+parent}/managedIdentities', 'POST', params);

    /**
     * Updates an existing WorkloadIdentityPoolManagedIdentity in a WorkloadIdentityPoolNamespace.
     * @param {string} params.name - (Required) Output only. The resource name of the managed identity.
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a WorkloadIdentityPoolManagedIdentity. You can undelete a managed identity for 30 days. After 30 days, deletion is permanent.
     * @param {string} params.name - (Required) Required. The name of the managed identity to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Undeletes a WorkloadIdentityPoolManagedIdentity, as long as it was deleted fewer than 30 days ago.
     * @param {string} params.name - (Required) Required. The name of the managed identity to undelete.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    /**
     * Add an AttestationRule on a WorkloadIdentityPoolManagedIdentity. The total attestation rules after addition must not exceed 50.
     * @param {string} params.resource - (Required) Required. The resource name of the managed identity or namespace resource to add an attestation rule to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.addAttestationRule = (params) => this._makeRequest('v1/{+resource}:addAttestationRule', 'POST', params);

    /**
     * Remove an AttestationRule on a WorkloadIdentityPoolManagedIdentity.
     * @param {string} params.resource - (Required) Required. The resource name of the managed identity or namespace resource to remove an attestation rule from.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.removeAttestationRule = (params) => this._makeRequest('v1/{+resource}:removeAttestationRule', 'POST', params);

    /**
     * Set all AttestationRule on a WorkloadIdentityPoolManagedIdentity. A maximum of 50 AttestationRules can be set.
     * @param {string} params.resource - (Required) Required. The resource name of the managed identity or namespace resource to add an attestation rule to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.setAttestationRules = (params) => this._makeRequest('v1/{+resource}:setAttestationRules', 'POST', params);

    /**
     * List all AttestationRule on a WorkloadIdentityPoolManagedIdentity.
     * @param {string} params.filter - Optional. A query filter. Supports the following function: * `container_ids()`: Returns only the AttestationRules under the specific container ids. The function expects a comma-delimited list with only project numbers and must use the format `projects/`. For example: `container_ids(projects/, projects/,...)`.
     * @param {integer} params.pageSize - Optional. The maximum number of AttestationRules to return. If unspecified, at most 50 AttestationRules are returned. The maximum value is 100; values above 100 are truncated to 100.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListWorkloadIdentityPoolProviderKeys` call. Provide this to retrieve the subsequent page.
     * @param {string} params.resource - (Required) Required. The resource name of the managed identity or namespace resource to list attestation rules of.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.listAttestationRules = (params) => this._makeRequest('v1/{+resource}:listAttestationRules', 'GET', params);

    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.workloadSources = {};

    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.workloadSources.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.workloadSources.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.workloadIdentityPools.providers = {};

    /**
     * Lists all non-deleted WorkloadIdentityPoolProviders in a WorkloadIdentityPool. If `show_deleted` is set to `true`, then deleted providers are also listed.
     * @param {integer} params.pageSize - The maximum number of providers to return. If unspecified, at most 50 providers are returned. The maximum value is 100; values above 100 are truncated to 100.
     * @param {string} params.pageToken - A page token, received from a previous `ListWorkloadIdentityPoolProviders` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The pool to list providers for.
     * @param {boolean} params.showDeleted - Whether to return soft-deleted providers.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.providers.list = (params) => this._makeRequest('v1/{+parent}/providers', 'GET', params);

    /**
     * Gets an individual WorkloadIdentityPoolProvider.
     * @param {string} params.name - (Required) Required. The name of the provider to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.providers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new WorkloadIdentityPoolProvider in a WorkloadIdentityPool. You cannot reuse the name of a deleted provider until 30 days after deletion.
     * @param {string} params.parent - (Required) Required. The pool to create this provider in.
     * @param {string} params.workloadIdentityPoolProviderId - Required. The ID for the provider, which becomes the final component of the resource name. This value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.providers.create = (params) => this._makeRequest('v1/{+parent}/providers', 'POST', params);

    /**
     * Updates an existing WorkloadIdentityPoolProvider.
     * @param {string} params.name - (Required) Output only. The resource name of the provider.
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.providers.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a WorkloadIdentityPoolProvider. Deleting a provider does not revoke credentials that have already been issued; they continue to grant access. You can undelete a provider for 30 days. After 30 days, deletion is permanent. You cannot update deleted providers. However, you can view and list them.
     * @param {string} params.name - (Required) Required. The name of the provider to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.providers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Undeletes a WorkloadIdentityPoolProvider, as long as it was deleted fewer than 30 days ago.
     * @param {string} params.name - (Required) Required. The name of the provider to undelete.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.providers.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.projects.locations.workloadIdentityPools.providers.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.providers.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.workloadIdentityPools.providers.keys = {};

    /**
     * Lists all non-deleted WorkloadIdentityPoolProviderKeys in a project. If show_deleted is set to `true`, then deleted pools are also listed.
     * @param {integer} params.pageSize - The maximum number of keys to return. If unspecified, all keys are returned. The maximum value is 10; values above 10 are truncated to 10.
     * @param {string} params.pageToken - A page token, received from a previous `ListWorkloadIdentityPoolProviderKeys` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent provider resource to list encryption keys for.
     * @param {boolean} params.showDeleted - Whether to return soft deleted resources as well.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.providers.keys.list = (params) => this._makeRequest('v1/{+parent}/keys', 'GET', params);

    /**
     * Gets an individual WorkloadIdentityPoolProviderKey.
     * @param {string} params.name - (Required) Required. The name of the key to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.providers.keys.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Create a new WorkloadIdentityPoolProviderKey in a WorkloadIdentityPoolProvider.
     * @param {string} params.parent - (Required) Required. The parent provider resource to create the key in.
     * @param {string} params.workloadIdentityPoolProviderKeyId - Required. The ID to use for the key, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-].
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.providers.keys.create = (params) => this._makeRequest('v1/{+parent}/keys', 'POST', params);

    /**
     * Deletes an WorkloadIdentityPoolProviderKey. You can undelete a key for 30 days. After 30 days, deletion is permanent.
     * @param {string} params.name - (Required) Required. The name of the encryption key to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.providers.keys.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Undeletes an WorkloadIdentityPoolProviderKey, as long as it was deleted fewer than 30 days ago.
     * @param {string} params.name - (Required) Required. The name of the encryption key to undelete.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.providers.keys.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.projects.locations.workloadIdentityPools.providers.keys.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.providers.keys.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.serviceAccounts = {};

    /**
     * Lists every ServiceAccount that belongs to a specific project.
     * @param {string} params.name - (Required) Required. The resource name of the project associated with the service accounts, such as `projects/my-project-123`.
     * @param {integer} params.pageSize - Optional limit on the number of service accounts to include in the response. Further accounts can subsequently be obtained by including the ListServiceAccountsResponse.next_page_token in a subsequent request. The default is 20, and the maximum is 100.
     * @param {string} params.pageToken - Optional pagination token returned in an earlier ListServiceAccountsResponse.next_page_token.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.list = (params) => this._makeRequest('v1/{+name}/serviceAccounts', 'GET', params);

    /**
     * Gets a ServiceAccount.
     * @param {string} params.name - (Required) Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a ServiceAccount.
     * @param {string} params.name - (Required) Required. The resource name of the project associated with the service accounts, such as `projects/my-project-123`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.create = (params) => this._makeRequest('v1/{+name}/serviceAccounts', 'POST', params);

    /**
     * **Note:** We are in the process of deprecating this method. Use PatchServiceAccount instead. Updates a ServiceAccount. You can update only the `display_name` field.
     * @param {string} params.name - (Required) The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Patches a ServiceAccount.
     * @param {string} params.name - (Required) The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a ServiceAccount. **Warning:** After you delete a service account, you might not be able to undelete it. If you know that you need to re-enable the service account in the future, use DisableServiceAccount instead. If you delete a service account, IAM permanently removes the service account 30 days later. Google Cloud cannot recover the service account after it is permanently removed, even if you file a support request. To help avoid unplanned outages, we recommend that you disable the service account before you delete it. Use DisableServiceAccount to disable the service account, then wait at least 24 hours and watch for unintended consequences. If there are no unintended consequences, you can delete the service account.
     * @param {string} params.name - (Required) Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Restores a deleted ServiceAccount. **Important:** It is not always possible to restore a deleted service account. Use this method only as a last resort. After you delete a service account, IAM permanently removes the service account 30 days later. There is no way to restore a deleted service account that has been permanently removed.
     * @param {string} params.name - (Required) The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    /**
     * Enables a ServiceAccount that was disabled by DisableServiceAccount. If the service account is already enabled, then this method has no effect. If the service account was disabled by other means—for example, if Google disabled the service account because it was compromised—you cannot use this method to enable the service account.
     * @param {string} params.name - (Required) The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.enable = (params) => this._makeRequest('v1/{+name}:enable', 'POST', params);

    /**
     * Disables a ServiceAccount immediately. If an application uses the service account to authenticate, that application can no longer call Google APIs or access Google Cloud resources. Existing access tokens for the service account are rejected, and requests for new access tokens will fail. To re-enable the service account, use EnableServiceAccount. After you re-enable the service account, its existing access tokens will be accepted, and you can request new access tokens. To help avoid unplanned outages, we recommend that you disable the service account before you delete it. Use this method to disable the service account, then wait at least 24 hours and watch for unintended consequences. If there are no unintended consequences, you can delete the service account with DeleteServiceAccount.
     * @param {string} params.name - (Required) The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.disable = (params) => this._makeRequest('v1/{+name}:disable', 'POST', params);

    /**
     * Signs a blob using the system-managed private key for a ServiceAccount.
     * @param {string} params.name - (Required) Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.signBlob = (params) => this._makeRequest('v1/{+name}:signBlob', 'POST', params);

    /**
     * Signs a JSON Web Token (JWT) using the system-managed private key for a ServiceAccount.
     * @param {string} params.name - (Required) Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.signJwt = (params) => this._makeRequest('v1/{+name}:signJwt', 'POST', params);

    /**
     * Gets the IAM policy that is attached to a ServiceAccount. This IAM policy specifies which principals have access to the service account. This method does not tell you whether the service account has been granted any roles on other resources. To check whether a service account has role grants on a resource, use the `getIamPolicy` method for that resource. For example, to view the role grants for a project, call the Resource Manager API's [projects.getIamPolicy](https://cloud.google.com/resource-manager/reference/rest/v1/projects/getIamPolicy) method.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the IAM policy that is attached to a ServiceAccount. Use this method to grant or revoke access to the service account. For example, you could grant a principal the ability to impersonate the service account. This method does not enable the service account to access other resources. To grant roles to a service account on a resource, follow these steps: 1. Call the resource's `getIamPolicy` method to get its current IAM policy. 2. Edit the policy so that it binds the service account to an IAM role for the resource. 3. Call the resource's `setIamPolicy` method to update its IAM policy. For detailed instructions, see [Manage access to project, folders, and organizations](https://cloud.google.com/iam/help/service-accounts/granting-access-to-service-accounts) or [Manage access to other resources](https://cloud.google.com/iam/help/access/manage-other-resources).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Tests whether the caller has the specified permissions on a ServiceAccount.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.serviceAccounts.keys = {};

    /**
     * Lists every ServiceAccountKey for a service account.
     * @param {string} params.keyTypes - Filters the types of keys the user wants to include in the list response. Duplicate key types are not allowed. If no key type is provided, all keys are returned.
     * @param {string} params.name - (Required) Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.keys.list = (params) => this._makeRequest('v1/{+name}/keys', 'GET', params);

    /**
     * Gets a ServiceAccountKey.
     * @param {string} params.name - (Required) Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/-/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {string} params.publicKeyType - Optional. The output format of the public key. The default is `TYPE_NONE`, which means that the public key is not returned.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.keys.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a ServiceAccountKey.
     * @param {string} params.name - (Required) Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.keys.create = (params) => this._makeRequest('v1/{+name}/keys', 'POST', params);

    /**
     * Uploads the public key portion of a key pair that you manage, and associates the public key with a ServiceAccount. After you upload the public key, you can use the private key from the key pair as a service account key.
     * @param {string} params.name - (Required) The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.keys.upload = (params) => this._makeRequest('v1/{+name}/keys:upload', 'POST', params);

    /**
     * Deletes a ServiceAccountKey. Deleting a service account key does not revoke short-lived credentials that have been issued based on the service account key.
     * @param {string} params.name - (Required) Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/-/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.keys.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Disable a ServiceAccountKey. A disabled service account key can be re-enabled with EnableServiceAccountKey.
     * @param {string} params.name - (Required) Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/-/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.keys.disable = (params) => this._makeRequest('v1/{+name}:disable', 'POST', params);

    /**
     * Enable a ServiceAccountKey.
     * @param {string} params.name - (Required) Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/-/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.keys.enable = (params) => this._makeRequest('v1/{+name}:enable', 'POST', params);

    this.projects.roles = {};

    /**
     * Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
     * @param {integer} params.pageSize - Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000.
     * @param {string} params.pageToken - Optional pagination token returned in an earlier ListRolesResponse.
     * @param {string} params.parent - (Required) The `parent` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [projects.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [organizations.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {boolean} params.showDeleted - Include Roles that have been deleted.
     * @param {string} params.view - Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field.
     * @return {object} The API response object.
     */
    this.projects.roles.list = (params) => this._makeRequest('v1/{+parent}/roles', 'GET', params);

    /**
     * Gets the definition of a Role.
     * @param {string} params.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/roles/get): `roles/{ROLE_NAME}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME}` * [projects.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @return {object} The API response object.
     */
    this.projects.roles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new custom Role.
     * @param {string} params.parent - (Required) The `parent` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [projects.roles.create](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/create): `projects/{PROJECT_ID}`. This method creates project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [organizations.roles.create](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/create): `organizations/{ORGANIZATION_ID}`. This method creates organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.roles.create = (params) => this._makeRequest('v1/{+parent}/roles', 'POST', params);

    /**
     * Updates the definition of a custom Role.
     * @param {string} params.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.patch](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/patch): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.patch](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/patch): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {string} params.updateMask - A mask describing which fields in the Role have changed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.roles.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a custom Role. When you delete a custom role, the following changes occur immediately: * You cannot bind a principal to the custom role in an IAM Policy. * Existing bindings to the custom role are not changed, but they have no effect. * By default, the response from ListRoles does not include the custom role. A deleted custom role still counts toward the [custom role limit](https://cloud.google.com/iam/help/limits) until it is permanently deleted. You have 7 days to undelete the custom role. After 7 days, the following changes occur: * The custom role is permanently deleted and cannot be recovered. * If an IAM policy contains a binding to the custom role, the binding is permanently removed. * The custom role no longer counts toward your custom role limit.
     * @param {string} params.etag - Used to perform a consistent read-modify-write.
     * @param {string} params.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.delete](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/delete): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.delete](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/delete): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @return {object} The API response object.
     */
    this.projects.roles.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Undeletes a custom Role.
     * @param {string} params.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.undelete](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/undelete): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.undelete](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/undelete): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.roles.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.locations = {};

    this.locations.workforcePools = {};

    /**
     * Lists all non-deleted WorkforcePools under the specified parent. If `show_deleted` is set to `true`, then deleted pools are also listed.
     * @param {string} params.location - (Required) The location of the pool. Format: `locations/{location}`.
     * @param {integer} params.pageSize - The maximum number of pools to return. If unspecified, at most 50 pools will be returned. The maximum value is 1000; values above 1000 are truncated to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListWorkforcePools` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - Required. The parent resource to list pools for. Format: `organizations/{org-id}`.
     * @param {boolean} params.showDeleted - Whether to return soft-deleted pools.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.list = (params) => this._makeRequest('v1/{+location}/workforcePools', 'GET', params);

    /**
     * Gets an individual WorkforcePool.
     * @param {string} params.name - (Required) Required. The name of the pool to retrieve. Format: `locations/{location}/workforcePools/{workforce_pool_id}`
     * @return {object} The API response object.
     */
    this.locations.workforcePools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new WorkforcePool. You cannot reuse the name of a deleted pool until 30 days after deletion.
     * @param {string} params.location - (Required) Optional. The location of the pool to create. Format: `locations/{location}`.
     * @param {string} params.workforcePoolId - Optional. The ID to use for the pool, which becomes the final component of the resource name. The IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens. It must start with a letter, and cannot have a trailing hyphen. The prefix `gcp-` is reserved for use by Google, and may not be specified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.create = (params) => this._makeRequest('v1/{+location}/workforcePools', 'POST', params);

    /**
     * Updates an existing WorkforcePool.
     * @param {string} params.name - (Required) Identifier. The resource name of the pool. Format: `locations/{location}/workforcePools/{workforce_pool_id}`
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a WorkforcePool. You cannot use a deleted WorkforcePool to exchange external credentials for Google Cloud credentials. However, deletion does not revoke credentials that have already been issued. Credentials issued for a deleted pool do not grant access to resources. If the pool is undeleted, and the credentials are not expired, they grant access again. You can undelete a pool for 30 days. After 30 days, deletion is permanent. You cannot update deleted pools. However, you can view and list them.
     * @param {string} params.name - (Required) Required. The name of the pool to delete. Format: `locations/{location}/workforcePools/{workforce_pool_id}`
     * @return {object} The API response object.
     */
    this.locations.workforcePools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Undeletes a WorkforcePool, as long as it was deleted fewer than 30 days ago.
     * @param {string} params.name - (Required) Required. The name of the pool to undelete. Format: `locations/{location}/workforcePools/{workforce_pool_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    /**
     * Gets IAM policies on a WorkforcePool.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets IAM policies on a WorkforcePool.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns the caller's permissions on the WorkforcePool. If the pool doesn't exist, this call returns an empty set of permissions. It doesn't return a `NOT_FOUND` error.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.locations.workforcePools.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.locations.workforcePools.providers = {};

    /**
     * Lists all non-deleted WorkforcePoolProviders in a WorkforcePool. If `show_deleted` is set to `true`, then deleted providers are also listed.
     * @param {integer} params.pageSize - The maximum number of providers to return. If unspecified, at most 50 providers are returned. The maximum value is 100; values above 100 are truncated to 100.
     * @param {string} params.pageToken - A page token, received from a previous `ListWorkforcePoolProviders` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The pool to list providers for. Format: `locations/{location}/workforcePools/{workforce_pool_id}`
     * @param {boolean} params.showDeleted - Whether to return soft-deleted providers.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.list = (params) => this._makeRequest('v1/{+parent}/providers', 'GET', params);

    /**
     * Gets an individual WorkforcePoolProvider.
     * @param {string} params.name - (Required) Required. The name of the provider to retrieve. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}`
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new WorkforcePoolProvider in a WorkforcePool. You cannot reuse the name of a deleted provider until 30 days after deletion.
     * @param {string} params.parent - (Required) Required. The pool to create this provider in. Format: `locations/{location}/workforcePools/{workforce_pool_id}`
     * @param {string} params.workforcePoolProviderId - Required. The ID for the provider, which becomes the final component of the resource name. This value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.create = (params) => this._makeRequest('v1/{+parent}/providers', 'POST', params);

    /**
     * Updates an existing WorkforcePoolProvider.
     * @param {string} params.name - (Required) Identifier. The resource name of the provider. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}`
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a WorkforcePoolProvider. Deleting a provider does not revoke credentials that have already been issued; they continue to grant access. You can undelete a provider for 30 days. After 30 days, deletion is permanent. You cannot update deleted providers. However, you can view and list them.
     * @param {string} params.name - (Required) Required. The name of the provider to delete. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}`
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Undeletes a WorkforcePoolProvider, as long as it was deleted fewer than 30 days ago.
     * @param {string} params.name - (Required) Required. The name of the provider to undelete. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.locations.workforcePools.providers.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.locations.workforcePools.providers.keys = {};

    /**
     * Lists all non-deleted WorkforcePoolProviderKeys in a WorkforcePoolProvider. If `show_deleted` is set to `true`, then deleted keys are also listed.
     * @param {integer} params.pageSize - The maximum number of keys to return. If unspecified, all keys are returned. The maximum value is 10; values above 10 are truncated to 10.
     * @param {string} params.pageToken - A page token, received from a previous `ListWorkforcePoolProviderKeys` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The provider resource to list encryption keys for. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}`
     * @param {boolean} params.showDeleted - Whether to return soft-deleted keys.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.keys.list = (params) => this._makeRequest('v1/{+parent}/keys', 'GET', params);

    /**
     * Gets a WorkforcePoolProviderKey.
     * @param {string} params.name - (Required) Required. The name of the key to retrieve.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.keys.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new WorkforcePoolProviderKey in a WorkforcePoolProvider.
     * @param {string} params.parent - (Required) Required. The provider to create this key in.
     * @param {string} params.workforcePoolProviderKeyId - Required. The ID to use for the key, which becomes the final component of the resource name. This value must be 4-32 characters, and may contain the characters [a-z0-9-].
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.keys.create = (params) => this._makeRequest('v1/{+parent}/keys', 'POST', params);

    /**
     * Deletes a WorkforcePoolProviderKey. You can undelete a key for 30 days. After 30 days, deletion is permanent.
     * @param {string} params.name - (Required) Required. The name of the key to delete.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.keys.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Undeletes a WorkforcePoolProviderKey, as long as it was deleted fewer than 30 days ago.
     * @param {string} params.name - (Required) Required. The name of the key to undelete.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.keys.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.locations.workforcePools.providers.keys.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.keys.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.locations.workforcePools.providers.scimTenants = {};

    /**
     * Lists all non-deleted WorkforcePoolProviderScimTenants in a WorkforcePoolProvider. If `show_deleted` is set to `true`, then deleted scim tenants are also listed.
     * @param {integer} params.pageSize - Optional. The maximum number of scim tenants to return. If unspecified, at most 1 scim tenant will be returned.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListScimTenants` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent to list scim tenants. Format: 'locations/{location}/workforcePools/{workforce_pool}/providers/{provider}'
     * @param {boolean} params.showDeleted - Optional. Whether to return soft-deleted scim tenants.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.scimTenants.list = (params) => this._makeRequest('v1/{+parent}/scimTenants', 'GET', params);

    /**
     * Gets an individual WorkforcePoolProviderScimTenant.
     * @param {string} params.name - (Required) Required. The name of the scim tenant to retrieve. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}`
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.scimTenants.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new WorkforcePoolProviderScimTenant in a WorkforcePoolProvider. You cannot reuse the name of a deleted scim tenant until 30 days after deletion.
     * @param {string} params.parent - (Required) Required. The parent to create scim tenant. Format: 'locations/{location}/workforcePools/{workforce_pool}/providers/{provider}'
     * @param {string} params.workforcePoolProviderScimTenantId - Required. The ID to use for the scim tenant, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-].
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.scimTenants.create = (params) => this._makeRequest('v1/{+parent}/scimTenants', 'POST', params);

    /**
     * Updates an existing WorkforcePoolProviderScimTenant.
     * @param {string} params.name - (Required) Identifier. The resource name of the SCIM Tenant. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/ {workforce_pool_provider}/scimTenants/{scim_tenant}`
     * @param {string} params.updateMask - Optional. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.scimTenants.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a WorkforcePoolProviderScimTenant. You can undelete a scim tenant for 30 days. After 30 days, deletion is permanent. You cannot update deleted scim tenants. However, you can view and list them.
     * @param {string} params.name - (Required) Required. The name of the scim tenant to delete. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}`
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.scimTenants.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Undeletes a WorkforcePoolProviderScimTenant, as long as it was deleted fewer than 30 days ago.
     * @param {string} params.name - (Required) Required. The name of the scim tenant to undelete. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.scimTenants.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.locations.workforcePools.providers.scimTenants.tokens = {};

    /**
     * Lists all non-deleted WorkforcePoolProviderScimTokenss in a WorkforcePoolProviderScimTenant. If `show_deleted` is set to `true`, then deleted SCIM tokens are also listed.
     * @param {integer} params.pageSize - Optional. The maximum number of scim tokens to return. If unspecified, at most 2 scim tokens will be returned.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListWorkforcePoolProviderScimTokens` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent to list scim tokens. Format: 'locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}'
     * @param {boolean} params.showDeleted - Optional. Whether to return soft-deleted scim tokens.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.scimTenants.tokens.list = (params) => this._makeRequest('v1/{+parent}/tokens', 'GET', params);

    /**
     * Gets an individual WorkforcePoolProviderScimToken.
     * @param {string} params.name - (Required) Required. The name of the scim token to retrieve. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}/tokens/{token}`
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.scimTenants.tokens.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new WorkforcePoolProviderScimToken in a WorkforcePoolProviderScimTenant. You cannot reuse the name of a deleted SCIM token until 30 days after deletion.
     * @param {string} params.parent - (Required) Required. The parent tenant to create scim token. Format: 'locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}'
     * @param {string} params.workforcePoolProviderScimTokenId - Required. The ID to use for the scim token, which becomes the final component of the resource name. This value should be 4-32 characters and follow this pattern: "([a-z]([a-z0-9\\-]{2,30}[a-z0-9]))"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.scimTenants.tokens.create = (params) => this._makeRequest('v1/{+parent}/tokens', 'POST', params);

    /**
     * Updates an existing WorkforcePoolProviderScimToken.
     * @param {string} params.name - (Required) Identifier. The resource name of the SCIM Token. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/ {workforce_pool_provider}/scimTenants/{scim_tenant}/tokens/{token}`
     * @param {string} params.updateMask - Optional. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.scimTenants.tokens.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a WorkforcePoolProviderScimToken. You can undelete a scim token for 30 days. After 30 days, deletion is permanent. You cannot update deleted scim tokens. However, you can view and list them.
     * @param {string} params.name - (Required) Required. The name of the scim token to delete. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}/tokens/{token}`
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.scimTenants.tokens.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Undeletes a WorkforcePoolProviderScimToken, as long as it was deleted fewer than 30 days ago.
     * @param {string} params.name - (Required) Required. The name of the scim token to undelete. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}/tokens/{token}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.providers.scimTenants.tokens.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.locations.workforcePools.subjects = {};

    /**
     * Deletes a WorkforcePoolSubject. Subject must not already be in a deleted state. A WorkforcePoolSubject is automatically created the first time an external credential is exchanged for a Google Cloud credential using a mapped `google.subject` attribute. There is no endpoint to manually create a WorkforcePoolSubject. For 30 days after a WorkforcePoolSubject is deleted, using the same `google.subject` attribute in token exchanges with Google Cloud STS fails. Call UndeleteWorkforcePoolSubject to undelete a WorkforcePoolSubject that has been deleted, within within 30 days of deleting it. After 30 days, the WorkforcePoolSubject is permanently deleted. At this point, a token exchange with Google Cloud STS that uses the same mapped `google.subject` attribute automatically creates a new WorkforcePoolSubject that is unrelated to the previously deleted WorkforcePoolSubject but has the same `google.subject` value.
     * @param {string} params.name - (Required) Required. The resource name of the WorkforcePoolSubject. Special characters, like `/` and `:`, must be escaped, because all URLs need to conform to the "When to Escape and Unescape" section of [RFC3986](https://www.ietf.org/rfc/rfc2396.txt). Format: `locations/{location}/workforcePools/{workforce_pool_id}/subjects/{subject_id}`
     * @return {object} The API response object.
     */
    this.locations.workforcePools.subjects.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Undeletes a WorkforcePoolSubject, as long as it was deleted fewer than 30 days ago.
     * @param {string} params.name - (Required) Required. The resource name of the WorkforcePoolSubject. Special characters, like `/` and `:`, must be escaped, because all URLs need to conform to the "When to Escape and Unescape" section of [RFC3986](https://www.ietf.org/rfc/rfc2396.txt). Format: `locations/{location}/workforcePools/{workforce_pool_id}/subjects/{subject_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.subjects.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.locations.workforcePools.subjects.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.subjects.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.roles = {};

    /**
     * Lists roles that can be granted on a Google Cloud resource. A role is grantable if the IAM policy for the resource can contain bindings to the role.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.roles.queryGrantableRoles = (params) => this._makeRequest('v1/roles:queryGrantableRoles', 'POST', params);

    /**
     * Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
     * @param {integer} params.pageSize - Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000.
     * @param {string} params.pageToken - Optional pagination token returned in an earlier ListRolesResponse.
     * @param {string} params.parent - The `parent` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [projects.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [organizations.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {boolean} params.showDeleted - Include Roles that have been deleted.
     * @param {string} params.view - Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field.
     * @return {object} The API response object.
     */
    this.roles.list = (params) => this._makeRequest('v1/roles', 'GET', params);

    /**
     * Gets the definition of a Role.
     * @param {string} params.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/roles/get): `roles/{ROLE_NAME}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME}` * [projects.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @return {object} The API response object.
     */
    this.roles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations = {};

    this.organizations.roles = {};

    /**
     * Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
     * @param {integer} params.pageSize - Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000.
     * @param {string} params.pageToken - Optional pagination token returned in an earlier ListRolesResponse.
     * @param {string} params.parent - (Required) The `parent` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [projects.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [organizations.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {boolean} params.showDeleted - Include Roles that have been deleted.
     * @param {string} params.view - Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field.
     * @return {object} The API response object.
     */
    this.organizations.roles.list = (params) => this._makeRequest('v1/{+parent}/roles', 'GET', params);

    /**
     * Gets the definition of a Role.
     * @param {string} params.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/roles/get): `roles/{ROLE_NAME}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME}` * [projects.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @return {object} The API response object.
     */
    this.organizations.roles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new custom Role.
     * @param {string} params.parent - (Required) The `parent` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [projects.roles.create](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/create): `projects/{PROJECT_ID}`. This method creates project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [organizations.roles.create](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/create): `organizations/{ORGANIZATION_ID}`. This method creates organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.roles.create = (params) => this._makeRequest('v1/{+parent}/roles', 'POST', params);

    /**
     * Updates the definition of a custom Role.
     * @param {string} params.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.patch](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/patch): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.patch](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/patch): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {string} params.updateMask - A mask describing which fields in the Role have changed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.roles.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a custom Role. When you delete a custom role, the following changes occur immediately: * You cannot bind a principal to the custom role in an IAM Policy. * Existing bindings to the custom role are not changed, but they have no effect. * By default, the response from ListRoles does not include the custom role. A deleted custom role still counts toward the [custom role limit](https://cloud.google.com/iam/help/limits) until it is permanently deleted. You have 7 days to undelete the custom role. After 7 days, the following changes occur: * The custom role is permanently deleted and cannot be recovered. * If an IAM policy contains a binding to the custom role, the binding is permanently removed. * The custom role no longer counts toward your custom role limit.
     * @param {string} params.etag - Used to perform a consistent read-modify-write.
     * @param {string} params.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.delete](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/delete): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.delete](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/delete): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @return {object} The API response object.
     */
    this.organizations.roles.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Undeletes a custom Role.
     * @param {string} params.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.undelete](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/undelete): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.undelete](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/undelete): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.roles.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.permissions = {};

    /**
     * Lists every permission that you can test on a resource. A permission is testable if you can check whether a principal has that permission on the resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.permissions.queryTestablePermissions = (params) => this._makeRequest('v1/permissions:queryTestablePermissions', 'POST', params);

    this.iamPolicies = {};

    /**
     * Returns a list of services that allow you to opt into audit logs that are not generated by default. To learn more about audit logs, see the [Logging documentation](https://cloud.google.com/logging/docs/audit).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.iamPolicies.queryAuditableServices = (params) => this._makeRequest('v1/iamPolicies:queryAuditableServices', 'POST', params);

    /**
     * Lints, or validates, an IAM policy. Currently checks the google.iam.v1.Binding.condition field, which contains a condition expression for a role binding. Successful calls to this method always return an HTTP `200 OK` status code, even if the linter detects an issue in the IAM policy.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.iamPolicies.lintPolicy = (params) => this._makeRequest('v1/iamPolicies:lintPolicy', 'POST', params);
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
