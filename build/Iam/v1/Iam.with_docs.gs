
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://iam.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.oauthClients = {};

    /**
     * Lists all non-deleted OauthClients in a project. If `show_deleted` is set to `true`, then deleted OauthClients are also listed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of OauthClients to return. If unspecified, at most 50 OauthClients will be returned. The maximum value is 100; values above 100 are truncated to 100.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListOauthClients` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent to list OauthClients for.
     * @param {boolean} apiParams.showDeleted - Optional. Whether to return soft-deleted OauthClients.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.oauthClients.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/oauthClients', 'GET', apiParams, clientConfig);

    /**
     * Gets an individual OauthClient.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the OauthClient to retrieve. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.oauthClients.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new OauthClient. You cannot reuse the name of a deleted OauthClient until 30 days after deletion.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.oauthClientId - Required. The ID to use for the OauthClient, which becomes the final component of the resource name. This value should be a string of 6 to 63 lowercase letters, digits, or hyphens. It must start with a letter, and cannot have a trailing hyphen. The prefix `gcp-` is reserved for use by Google, and may not be specified.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to create the OauthClient in. The only supported location is `global`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.oauthClients.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/oauthClients', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing OauthClient.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. Identifier. The resource name of the OauthClient. Format:`projects/{project}/locations/{location}/oauthClients/{oauth_client}`.
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.oauthClients.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an OauthClient. You cannot use a deleted OauthClient. However, deletion does not revoke access tokens that have already been issued. They continue to grant access. Deletion does revoke refresh tokens that have already been issued. They cannot be used to renew an access token. If the OauthClient is undeleted, and the refresh tokens are not expired, they are valid for token exchange again. You can undelete an OauthClient for 30 days. After 30 days, deletion is permanent. You cannot update deleted OauthClients. However, you can view and list them.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the OauthClient to delete. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.oauthClients.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Undeletes an OauthClient, as long as it was deleted fewer than 30 days ago.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the OauthClient to undelete. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.oauthClients.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.projects.locations.oauthClients.credentials = {};

    /**
     * Lists all OauthClientCredentials in an OauthClient.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent to list OauthClientCredentials for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.oauthClients.credentials.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/credentials', 'GET', apiParams, clientConfig);

    /**
     * Gets an individual OauthClientCredential.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the OauthClientCredential to retrieve. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}/credentials/{credential}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.oauthClients.credentials.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new OauthClientCredential.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.oauthClientCredentialId - Required. The ID to use for the OauthClientCredential, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to create the OauthClientCredential in.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.oauthClients.credentials.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/credentials', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing OauthClientCredential.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. Identifier. The resource name of the OauthClientCredential. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}/credentials/{credential}`
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.oauthClients.credentials.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an OauthClientCredential. Before deleting an OauthClientCredential, it should first be disabled.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the OauthClientCredential to delete. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}/credentials/{credential}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.oauthClients.credentials.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools = {};

    /**
     * Lists all non-deleted WorkloadIdentityPools in a project. If `show_deleted` is set to `true`, then deleted pools are also listed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of pools to return. If unspecified, at most 50 pools are returned. The maximum value is 1000; values above are 1000 truncated to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListWorkloadIdentityPools` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to list pools for.
     * @param {boolean} apiParams.showDeleted - Whether to return soft-deleted pools.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/workloadIdentityPools', 'GET', apiParams, clientConfig);

    /**
     * Gets an individual WorkloadIdentityPool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the pool to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new WorkloadIdentityPool. You cannot reuse the name of a deleted pool until 30 days after deletion.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to create the pool in. The only supported location is `global`.
     * @param {string} apiParams.workloadIdentityPoolId - Required. The ID to use for the pool, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/workloadIdentityPools', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing WorkloadIdentityPool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name of the pool.
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a WorkloadIdentityPool. You cannot use a deleted pool to exchange external credentials for Google Cloud credentials. However, deletion does not revoke credentials that have already been issued. Credentials issued for a deleted pool do not grant access to resources. If the pool is undeleted, and the credentials are not expired, they grant access again. You can undelete a pool for 30 days. After 30 days, deletion is permanent. You cannot update deleted pools. However, you can view and list them.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the pool to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Undeletes a WorkloadIdentityPool, as long as it was deleted fewer than 30 days ago.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the pool to undelete.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    /**
     * Sets the IAM policies on a WorkloadIdentityPool
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Gets the IAM policy of a WorkloadIdentityPool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Returns the caller's permissions on a WorkloadIdentityPool
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.namespaces = {};

    /**
     * Lists all non-deleted WorkloadIdentityPoolNamespaces in a workload identity pool. If `show_deleted` is set to `true`, then deleted namespaces are also listed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of namespaces to return. If unspecified, at most 50 namespaces are returned. The maximum value is 1000; values above are 1000 truncated to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListWorkloadIdentityPoolNamespaces` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to list namespaces for.
     * @param {boolean} apiParams.showDeleted - Whether to return soft-deleted namespaces.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/namespaces', 'GET', apiParams, clientConfig);

    /**
     * Gets an individual WorkloadIdentityPoolNamespace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the namespace to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new WorkloadIdentityPoolNamespace in a WorkloadIdentityPool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to create the namespace in. The only supported location is `global`.
     * @param {string} apiParams.workloadIdentityPoolNamespaceId - Required. The ID to use for the namespace. This value must: * contain at most 63 characters * contain only lowercase alphanumeric characters or `-` * start with an alphanumeric character * end with an alphanumeric character The prefix "gcp-" will be reserved for future uses.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/namespaces', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing WorkloadIdentityPoolNamespace in a WorkloadIdentityPool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name of the namespace.
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a WorkloadIdentityPoolNamespace. You can undelete a namespace for 30 days. After 30 days, deletion is permanent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the namespace to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Undeletes a WorkloadIdentityPoolNamespace, as long as it was deleted fewer than 30 days ago.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the namespace to undelete.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.namespaces.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities = {};

    /**
     * Lists all non-deleted WorkloadIdentityPoolManagedIdentitys in a namespace. If `show_deleted` is set to `true`, then deleted managed identities are also listed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of managed identities to return. If unspecified, at most 50 managed identities are returned. The maximum value is 1000; values above are 1000 truncated to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListWorkloadIdentityPoolManagedIdentities` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to list managed identities for.
     * @param {boolean} apiParams.showDeleted - Whether to return soft-deleted managed identities.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/managedIdentities', 'GET', apiParams, clientConfig);

    /**
     * Gets an individual WorkloadIdentityPoolManagedIdentity.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the managed identity to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new WorkloadIdentityPoolManagedIdentity in a WorkloadIdentityPoolNamespace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to create the manage identity in. The only supported location is `global`.
     * @param {string} apiParams.workloadIdentityPoolManagedIdentityId - Required. The ID to use for the managed identity. This value must: * contain at most 63 characters * contain only lowercase alphanumeric characters or `-` * start with an alphanumeric character * end with an alphanumeric character The prefix "gcp-" will be reserved for future uses.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/managedIdentities', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing WorkloadIdentityPoolManagedIdentity in a WorkloadIdentityPoolNamespace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the managed identity.
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a WorkloadIdentityPoolManagedIdentity. You can undelete a managed identity for 30 days. After 30 days, deletion is permanent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the managed identity to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Undeletes a WorkloadIdentityPoolManagedIdentity, as long as it was deleted fewer than 30 days ago.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the managed identity to undelete.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    /**
     * Add an AttestationRule on a WorkloadIdentityPoolManagedIdentity. The total attestation rules after addition must not exceed 50.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) Required. The resource name of the managed identity or namespace resource to add an attestation rule to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.addAttestationRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:addAttestationRule', 'POST', apiParams, clientConfig);

    /**
     * Remove an AttestationRule on a WorkloadIdentityPoolManagedIdentity.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) Required. The resource name of the managed identity or namespace resource to remove an attestation rule from.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.removeAttestationRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:removeAttestationRule', 'POST', apiParams, clientConfig);

    /**
     * Set all AttestationRule on a WorkloadIdentityPoolManagedIdentity. A maximum of 50 AttestationRules can be set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) Required. The resource name of the managed identity or namespace resource to add an attestation rule to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.setAttestationRules = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setAttestationRules', 'POST', apiParams, clientConfig);

    /**
     * List all AttestationRule on a WorkloadIdentityPoolManagedIdentity.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A query filter. Supports the following function: * `container_ids()`: Returns only the AttestationRules under the specific container ids. The function expects a comma-delimited list with only project numbers and must use the format `projects/`. For example: `container_ids(projects/, projects/,...)`.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of AttestationRules to return. If unspecified, at most 50 AttestationRules are returned. The maximum value is 100; values above 100 are truncated to 100.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListWorkloadIdentityPoolProviderKeys` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.resource - (Required) Required. The resource name of the managed identity or namespace resource to list attestation rules of.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.listAttestationRules = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:listAttestationRules', 'GET', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.workloadSources = {};

    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.workloadSources.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.workloadSources.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.providers = {};

    /**
     * Lists all non-deleted WorkloadIdentityPoolProviders in a WorkloadIdentityPool. If `show_deleted` is set to `true`, then deleted providers are also listed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of providers to return. If unspecified, at most 50 providers are returned. The maximum value is 100; values above 100 are truncated to 100.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListWorkloadIdentityPoolProviders` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The pool to list providers for.
     * @param {boolean} apiParams.showDeleted - Whether to return soft-deleted providers.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.providers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/providers', 'GET', apiParams, clientConfig);

    /**
     * Gets an individual WorkloadIdentityPoolProvider.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the provider to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.providers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new WorkloadIdentityPoolProvider in a WorkloadIdentityPool. You cannot reuse the name of a deleted provider until 30 days after deletion.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The pool to create this provider in.
     * @param {string} apiParams.workloadIdentityPoolProviderId - Required. The ID for the provider, which becomes the final component of the resource name. This value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.providers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/providers', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing WorkloadIdentityPoolProvider.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the provider.
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.providers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a WorkloadIdentityPoolProvider. Deleting a provider does not revoke credentials that have already been issued; they continue to grant access. You can undelete a provider for 30 days. After 30 days, deletion is permanent. You cannot update deleted providers. However, you can view and list them.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the provider to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.providers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Undeletes a WorkloadIdentityPoolProvider, as long as it was deleted fewer than 30 days ago.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the provider to undelete.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.providers.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.providers.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.providers.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.providers.keys = {};

    /**
     * Lists all non-deleted WorkloadIdentityPoolProviderKeys in a project. If show_deleted is set to `true`, then deleted pools are also listed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of keys to return. If unspecified, all keys are returned. The maximum value is 10; values above 10 are truncated to 10.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListWorkloadIdentityPoolProviderKeys` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent provider resource to list encryption keys for.
     * @param {boolean} apiParams.showDeleted - Whether to return soft deleted resources as well.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.providers.keys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keys', 'GET', apiParams, clientConfig);

    /**
     * Gets an individual WorkloadIdentityPoolProviderKey.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the key to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.providers.keys.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Create a new WorkloadIdentityPoolProviderKey in a WorkloadIdentityPoolProvider.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent provider resource to create the key in.
     * @param {string} apiParams.workloadIdentityPoolProviderKeyId - Required. The ID to use for the key, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-].
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.providers.keys.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keys', 'POST', apiParams, clientConfig);

    /**
     * Deletes an WorkloadIdentityPoolProviderKey. You can undelete a key for 30 days. After 30 days, deletion is permanent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the encryption key to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.providers.keys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Undeletes an WorkloadIdentityPoolProviderKey, as long as it was deleted fewer than 30 days ago.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the encryption key to undelete.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.providers.keys.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.providers.keys.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workloadIdentityPools.providers.keys.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.serviceAccounts = {};

    /**
     * Lists every ServiceAccount that belongs to a specific project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the project associated with the service accounts, such as `projects/my-project-123`.
     * @param {integer} apiParams.pageSize - Optional limit on the number of service accounts to include in the response. Further accounts can subsequently be obtained by including the ListServiceAccountsResponse.next_page_token in a subsequent request. The default is 20, and the maximum is 100.
     * @param {string} apiParams.pageToken - Optional pagination token returned in an earlier ListServiceAccountsResponse.next_page_token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/serviceAccounts', 'GET', apiParams, clientConfig);

    /**
     * Gets a ServiceAccount.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a ServiceAccount.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the project associated with the service accounts, such as `projects/my-project-123`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/serviceAccounts', 'POST', apiParams, clientConfig);

    /**
     * **Note:** We are in the process of deprecating this method. Use PatchServiceAccount instead. Updates a ServiceAccount. You can update only the `display_name` field.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Patches a ServiceAccount.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a ServiceAccount. **Warning:** After you delete a service account, you might not be able to undelete it. If you know that you need to re-enable the service account in the future, use DisableServiceAccount instead. If you delete a service account, IAM permanently removes the service account 30 days later. Google Cloud cannot recover the service account after it is permanently removed, even if you file a support request. To help avoid unplanned outages, we recommend that you disable the service account before you delete it. Use DisableServiceAccount to disable the service account, then wait at least 24 hours and watch for unintended consequences. If there are no unintended consequences, you can delete the service account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Restores a deleted ServiceAccount. **Important:** It is not always possible to restore a deleted service account. Use this method only as a last resort. After you delete a service account, IAM permanently removes the service account 30 days later. There is no way to restore a deleted service account that has been permanently removed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    /**
     * Enables a ServiceAccount that was disabled by DisableServiceAccount. If the service account is already enabled, then this method has no effect. If the service account was disabled by other means—for example, if Google disabled the service account because it was compromised—you cannot use this method to enable the service account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.enable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:enable', 'POST', apiParams, clientConfig);

    /**
     * Disables a ServiceAccount immediately. If an application uses the service account to authenticate, that application can no longer call Google APIs or access Google Cloud resources. Existing access tokens for the service account are rejected, and requests for new access tokens will fail. To re-enable the service account, use EnableServiceAccount. After you re-enable the service account, its existing access tokens will be accepted, and you can request new access tokens. To help avoid unplanned outages, we recommend that you disable the service account before you delete it. Use this method to disable the service account, then wait at least 24 hours and watch for unintended consequences. If there are no unintended consequences, you can delete the service account with DeleteServiceAccount.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.disable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:disable', 'POST', apiParams, clientConfig);

    /**
     * Signs a blob using the system-managed private key for a ServiceAccount.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.signBlob = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:signBlob', 'POST', apiParams, clientConfig);

    /**
     * Signs a JSON Web Token (JWT) using the system-managed private key for a ServiceAccount.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.signJwt = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:signJwt', 'POST', apiParams, clientConfig);

    /**
     * Gets the IAM policy that is attached to a ServiceAccount. This IAM policy specifies which principals have access to the service account. This method does not tell you whether the service account has been granted any roles on other resources. To check whether a service account has role grants on a resource, use the `getIamPolicy` method for that resource. For example, to view the role grants for a project, call the Resource Manager API's [projects.getIamPolicy](https://cloud.google.com/resource-manager/reference/rest/v1/projects/getIamPolicy) method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Sets the IAM policy that is attached to a ServiceAccount. Use this method to grant or revoke access to the service account. For example, you could grant a principal the ability to impersonate the service account. This method does not enable the service account to access other resources. To grant roles to a service account on a resource, follow these steps: 1. Call the resource's `getIamPolicy` method to get its current IAM policy. 2. Edit the policy so that it binds the service account to an IAM role for the resource. 3. Call the resource's `setIamPolicy` method to update its IAM policy. For detailed instructions, see [Manage access to project, folders, and organizations](https://cloud.google.com/iam/help/service-accounts/granting-access-to-service-accounts) or [Manage access to other resources](https://cloud.google.com/iam/help/access/manage-other-resources).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Tests whether the caller has the specified permissions on a ServiceAccount.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.serviceAccounts.keys = {};

    /**
     * Lists every ServiceAccountKey for a service account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.keyTypes - Filters the types of keys the user wants to include in the list response. Duplicate key types are not allowed. If no key type is provided, all keys are returned.
     * @param {string} apiParams.name - (Required) Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.keys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/keys', 'GET', apiParams, clientConfig);

    /**
     * Gets a ServiceAccountKey.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/-/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {string} apiParams.publicKeyType - Optional. The output format of the public key. The default is `TYPE_NONE`, which means that the public key is not returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.keys.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a ServiceAccountKey.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.keys.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/keys', 'POST', apiParams, clientConfig);

    /**
     * Uploads the public key portion of a key pair that you manage, and associates the public key with a ServiceAccount. After you upload the public key, you can use the private key from the key pair as a service account key.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.keys.upload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/keys:upload', 'POST', apiParams, clientConfig);

    /**
     * Deletes a ServiceAccountKey. Deleting a service account key does not revoke short-lived credentials that have been issued based on the service account key.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/-/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.keys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Disable a ServiceAccountKey. A disabled service account key can be re-enabled with EnableServiceAccountKey.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/-/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.keys.disable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:disable', 'POST', apiParams, clientConfig);

    /**
     * Enable a ServiceAccountKey.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/-/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccounts.keys.enable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:enable', 'POST', apiParams, clientConfig);

    this.projects.roles = {};

    /**
     * Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000.
     * @param {string} apiParams.pageToken - Optional pagination token returned in an earlier ListRolesResponse.
     * @param {string} apiParams.parent - (Required) The `parent` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [projects.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [organizations.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {boolean} apiParams.showDeleted - Include Roles that have been deleted.
     * @param {string} apiParams.view - Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.roles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/roles', 'GET', apiParams, clientConfig);

    /**
     * Gets the definition of a Role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/roles/get): `roles/{ROLE_NAME}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME}` * [projects.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.roles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new custom Role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The `parent` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [projects.roles.create](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/create): `projects/{PROJECT_ID}`. This method creates project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [organizations.roles.create](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/create): `organizations/{ORGANIZATION_ID}`. This method creates organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.roles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/roles', 'POST', apiParams, clientConfig);

    /**
     * Updates the definition of a custom Role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.patch](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/patch): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.patch](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/patch): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {string} apiParams.updateMask - A mask describing which fields in the Role have changed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.roles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a custom Role. When you delete a custom role, the following changes occur immediately: * You cannot bind a principal to the custom role in an IAM Policy. * Existing bindings to the custom role are not changed, but they have no effect. * By default, the response from ListRoles does not include the custom role. A deleted custom role still counts toward the [custom role limit](https://cloud.google.com/iam/help/limits) until it is permanently deleted. You have 7 days to undelete the custom role. After 7 days, the following changes occur: * The custom role is permanently deleted and cannot be recovered. * If an IAM policy contains a binding to the custom role, the binding is permanently removed. * The custom role no longer counts toward your custom role limit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.etag - Used to perform a consistent read-modify-write.
     * @param {string} apiParams.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.delete](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/delete): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.delete](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/delete): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.roles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Undeletes a custom Role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.undelete](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/undelete): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.undelete](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/undelete): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.roles.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.locations = {};

    this.locations.workforcePools = {};

    /**
     * Lists all non-deleted WorkforcePools under the specified parent. If `show_deleted` is set to `true`, then deleted pools are also listed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) The location of the pool. Format: `locations/{location}`.
     * @param {integer} apiParams.pageSize - The maximum number of pools to return. The default value is 50. The maximum value is 100.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListWorkforcePools` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - Required. The parent resource to list pools for. Format: `organizations/{org-id}`.
     * @param {boolean} apiParams.showDeleted - Whether to return soft-deleted pools.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}/workforcePools', 'GET', apiParams, clientConfig);

    /**
     * Gets an individual WorkforcePool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the pool to retrieve. Format: `locations/{location}/workforcePools/{workforce_pool_id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new WorkforcePool. You cannot reuse the name of a deleted pool until 30 days after deletion.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) Optional. The location of the pool to create. Format: `locations/{location}`.
     * @param {string} apiParams.workforcePoolId - Optional. The ID to use for the pool, which becomes the final component of the resource name. The IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens. It must start with a letter, and cannot have a trailing hyphen. The prefix `gcp-` is reserved for use by Google, and may not be specified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}/workforcePools', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing WorkforcePool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the pool. Format: `locations/{location}/workforcePools/{workforce_pool_id}`
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a WorkforcePool. You cannot use a deleted WorkforcePool to exchange external credentials for Google Cloud credentials. However, deletion does not revoke credentials that have already been issued. Credentials issued for a deleted pool do not grant access to resources. If the pool is undeleted, and the credentials are not expired, they grant access again. You can undelete a pool for 30 days. After 30 days, deletion is permanent. You cannot update deleted pools. However, you can view and list them.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the pool to delete. Format: `locations/{location}/workforcePools/{workforce_pool_id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Undeletes a WorkforcePool, as long as it was deleted fewer than 30 days ago.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the pool to undelete. Format: `locations/{location}/workforcePools/{workforce_pool_id}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    /**
     * Gets IAM policies on a WorkforcePool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Sets IAM policies on a WorkforcePool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Returns the caller's permissions on the WorkforcePool. If the pool doesn't exist, this call returns an empty set of permissions. It doesn't return a `NOT_FOUND` error.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.locations.workforcePools.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.locations.workforcePools.providers = {};

    /**
     * Lists all non-deleted WorkforcePoolProviders in a WorkforcePool. If `show_deleted` is set to `true`, then deleted providers are also listed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of providers to return. If unspecified, at most 50 providers are returned. The maximum value is 100; values above 100 are truncated to 100.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListWorkforcePoolProviders` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The pool to list providers for. Format: `locations/{location}/workforcePools/{workforce_pool_id}`
     * @param {boolean} apiParams.showDeleted - Whether to return soft-deleted providers.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/providers', 'GET', apiParams, clientConfig);

    /**
     * Gets an individual WorkforcePoolProvider.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the provider to retrieve. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new WorkforcePoolProvider in a WorkforcePool. You cannot reuse the name of a deleted provider until 30 days after deletion.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The pool to create this provider in. Format: `locations/{location}/workforcePools/{workforce_pool_id}`
     * @param {string} apiParams.workforcePoolProviderId - Required. The ID for the provider, which becomes the final component of the resource name. This value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/providers', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing WorkforcePoolProvider.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the provider. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}`
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a WorkforcePoolProvider. Deleting a provider does not revoke credentials that have already been issued; they continue to grant access. You can undelete a provider for 30 days. After 30 days, deletion is permanent. You cannot update deleted providers. However, you can view and list them.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the provider to delete. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Undeletes a WorkforcePoolProvider, as long as it was deleted fewer than 30 days ago.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the provider to undelete. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.locations.workforcePools.providers.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.locations.workforcePools.providers.keys = {};

    /**
     * Lists all non-deleted WorkforcePoolProviderKeys in a WorkforcePoolProvider. If `show_deleted` is set to `true`, then deleted keys are also listed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of keys to return. If unspecified, all keys are returned. The maximum value is 10; values above 10 are truncated to 10.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListWorkforcePoolProviderKeys` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The provider resource to list encryption keys for. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}`
     * @param {boolean} apiParams.showDeleted - Whether to return soft-deleted keys.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.keys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keys', 'GET', apiParams, clientConfig);

    /**
     * Gets a WorkforcePoolProviderKey.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the key to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.keys.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new WorkforcePoolProviderKey in a WorkforcePoolProvider.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The provider to create this key in.
     * @param {string} apiParams.workforcePoolProviderKeyId - Required. The ID to use for the key, which becomes the final component of the resource name. This value must be 4-32 characters, and may contain the characters [a-z0-9-].
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.keys.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keys', 'POST', apiParams, clientConfig);

    /**
     * Deletes a WorkforcePoolProviderKey. You can undelete a key for 30 days. After 30 days, deletion is permanent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the key to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.keys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Undeletes a WorkforcePoolProviderKey, as long as it was deleted fewer than 30 days ago.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the key to undelete.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.keys.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.locations.workforcePools.providers.keys.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.keys.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.locations.workforcePools.providers.scimTenants = {};

    /**
     * Lists all non-deleted WorkforcePoolProviderScimTenants in a WorkforcePoolProvider. If `show_deleted` is set to `true`, then deleted scim tenants are also listed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of scim tenants to return. If unspecified, at most 1 scim tenant will be returned.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListScimTenants` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent to list scim tenants. Format: 'locations/{location}/workforcePools/{workforce_pool}/providers/{provider}'
     * @param {boolean} apiParams.showDeleted - Optional. Whether to return soft-deleted scim tenants.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.scimTenants.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/scimTenants', 'GET', apiParams, clientConfig);

    /**
     * Gets an individual WorkforcePoolProviderScimTenant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the scim tenant to retrieve. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.scimTenants.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new WorkforcePoolProviderScimTenant in a WorkforcePoolProvider. You cannot reuse the name of a deleted scim tenant until 30 days after deletion.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent to create scim tenant. Format: 'locations/{location}/workforcePools/{workforce_pool}/providers/{provider}'
     * @param {string} apiParams.workforcePoolProviderScimTenantId - Required. The ID to use for the scim tenant, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-].
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.scimTenants.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/scimTenants', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing WorkforcePoolProviderScimTenant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the SCIM Tenant. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/ {workforce_pool_provider}/scimTenants/{scim_tenant}`
     * @param {string} apiParams.updateMask - Optional. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.scimTenants.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a WorkforcePoolProviderScimTenant. You can undelete a scim tenant for 30 days. After 30 days, deletion is permanent. You cannot update deleted scim tenants. However, you can view and list them.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the scim tenant to delete. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.scimTenants.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Undeletes a WorkforcePoolProviderScimTenant, as long as it was deleted fewer than 30 days ago.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the scim tenant to undelete. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.scimTenants.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.locations.workforcePools.providers.scimTenants.tokens = {};

    /**
     * Lists all non-deleted WorkforcePoolProviderScimTokenss in a WorkforcePoolProviderScimTenant. If `show_deleted` is set to `true`, then deleted SCIM tokens are also listed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of scim tokens to return. If unspecified, at most 2 scim tokens will be returned.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListWorkforcePoolProviderScimTokens` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent to list scim tokens. Format: 'locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}'
     * @param {boolean} apiParams.showDeleted - Optional. Whether to return soft-deleted scim tokens.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.scimTenants.tokens.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/tokens', 'GET', apiParams, clientConfig);

    /**
     * Gets an individual WorkforcePoolProviderScimToken.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the scim token to retrieve. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}/tokens/{token}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.scimTenants.tokens.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new WorkforcePoolProviderScimToken in a WorkforcePoolProviderScimTenant. You cannot reuse the name of a deleted SCIM token until 30 days after deletion.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent tenant to create scim token. Format: 'locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}'
     * @param {string} apiParams.workforcePoolProviderScimTokenId - Required. The ID to use for the scim token, which becomes the final component of the resource name. This value should be 4-32 characters and follow this pattern: "([a-z]([a-z0-9\\-]{2,30}[a-z0-9]))"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.scimTenants.tokens.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/tokens', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing WorkforcePoolProviderScimToken.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the SCIM Token. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/ {workforce_pool_provider}/scimTenants/{scim_tenant}/tokens/{token}`
     * @param {string} apiParams.updateMask - Optional. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.scimTenants.tokens.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a WorkforcePoolProviderScimToken. You can undelete a scim token for 30 days. After 30 days, deletion is permanent. You cannot update deleted scim tokens. However, you can view and list them.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the scim token to delete. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}/tokens/{token}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.scimTenants.tokens.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Undeletes a WorkforcePoolProviderScimToken, as long as it was deleted fewer than 30 days ago.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the scim token to undelete. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}/tokens/{token}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.providers.scimTenants.tokens.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.locations.workforcePools.subjects = {};

    /**
     * Deletes a WorkforcePoolSubject. Subject must not already be in a deleted state. A WorkforcePoolSubject is automatically created the first time an external credential is exchanged for a Google Cloud credential using a mapped `google.subject` attribute. There is no endpoint to manually create a WorkforcePoolSubject. For 30 days after a WorkforcePoolSubject is deleted, using the same `google.subject` attribute in token exchanges with Google Cloud STS fails. Call UndeleteWorkforcePoolSubject to undelete a WorkforcePoolSubject that has been deleted, within within 30 days of deleting it. After 30 days, the WorkforcePoolSubject is permanently deleted. At this point, a token exchange with Google Cloud STS that uses the same mapped `google.subject` attribute automatically creates a new WorkforcePoolSubject that is unrelated to the previously deleted WorkforcePoolSubject but has the same `google.subject` value.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the WorkforcePoolSubject. Special characters, like `/` and `:`, must be escaped, because all URLs need to conform to the "When to Escape and Unescape" section of [RFC3986](https://www.ietf.org/rfc/rfc2396.txt). Format: `locations/{location}/workforcePools/{workforce_pool_id}/subjects/{subject_id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.subjects.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Undeletes a WorkforcePoolSubject, as long as it was deleted fewer than 30 days ago.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the WorkforcePoolSubject. Special characters, like `/` and `:`, must be escaped, because all URLs need to conform to the "When to Escape and Unescape" section of [RFC3986](https://www.ietf.org/rfc/rfc2396.txt). Format: `locations/{location}/workforcePools/{workforce_pool_id}/subjects/{subject_id}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.subjects.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.locations.workforcePools.subjects.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.workforcePools.subjects.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.roles = {};

    /**
     * Lists roles that can be granted on a Google Cloud resource. A role is grantable if the IAM policy for the resource can contain bindings to the role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.roles.queryGrantableRoles = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/roles:queryGrantableRoles', 'POST', apiParams, clientConfig);

    /**
     * Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000.
     * @param {string} apiParams.pageToken - Optional pagination token returned in an earlier ListRolesResponse.
     * @param {string} apiParams.parent - The `parent` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [projects.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [organizations.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {boolean} apiParams.showDeleted - Include Roles that have been deleted.
     * @param {string} apiParams.view - Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.roles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/roles', 'GET', apiParams, clientConfig);

    /**
     * Gets the definition of a Role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/roles/get): `roles/{ROLE_NAME}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME}` * [projects.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.roles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations = {};

    this.organizations.roles = {};

    /**
     * Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000.
     * @param {string} apiParams.pageToken - Optional pagination token returned in an earlier ListRolesResponse.
     * @param {string} apiParams.parent - (Required) The `parent` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [projects.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [organizations.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {boolean} apiParams.showDeleted - Include Roles that have been deleted.
     * @param {string} apiParams.view - Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.roles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/roles', 'GET', apiParams, clientConfig);

    /**
     * Gets the definition of a Role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/roles/get): `roles/{ROLE_NAME}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME}` * [projects.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.roles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new custom Role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The `parent` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [projects.roles.create](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/create): `projects/{PROJECT_ID}`. This method creates project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [organizations.roles.create](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/create): `organizations/{ORGANIZATION_ID}`. This method creates organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.roles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/roles', 'POST', apiParams, clientConfig);

    /**
     * Updates the definition of a custom Role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.patch](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/patch): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.patch](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/patch): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {string} apiParams.updateMask - A mask describing which fields in the Role have changed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.roles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a custom Role. When you delete a custom role, the following changes occur immediately: * You cannot bind a principal to the custom role in an IAM Policy. * Existing bindings to the custom role are not changed, but they have no effect. * By default, the response from ListRoles does not include the custom role. A deleted custom role still counts toward the [custom role limit](https://cloud.google.com/iam/help/limits) until it is permanently deleted. You have 7 days to undelete the custom role. After 7 days, the following changes occur: * The custom role is permanently deleted and cannot be recovered. * If an IAM policy contains a binding to the custom role, the binding is permanently removed. * The custom role no longer counts toward your custom role limit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.etag - Used to perform a consistent read-modify-write.
     * @param {string} apiParams.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.delete](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/delete): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.delete](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/delete): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.roles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Undeletes a custom Role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.undelete](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/undelete): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.undelete](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/undelete): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.roles.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.permissions = {};

    /**
     * Lists every permission that you can test on a resource. A permission is testable if you can check whether a principal has that permission on the resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.permissions.queryTestablePermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/permissions:queryTestablePermissions', 'POST', apiParams, clientConfig);

    this.iamPolicies = {};

    /**
     * Returns a list of services that allow you to opt into audit logs that are not generated by default. To learn more about audit logs, see the [Logging documentation](https://cloud.google.com/logging/docs/audit).
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.iamPolicies.queryAuditableServices = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/iamPolicies:queryAuditableServices', 'POST', apiParams, clientConfig);

    /**
     * Lints, or validates, an IAM policy. Currently checks the google.iam.v1.Binding.condition field, which contains a condition expression for a role binding. Successful calls to this method always return an HTTP `200 OK` status code, even if the linter detects an issue in the IAM policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.iamPolicies.lintPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/iamPolicies:lintPolicy', 'POST', apiParams, clientConfig);
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
