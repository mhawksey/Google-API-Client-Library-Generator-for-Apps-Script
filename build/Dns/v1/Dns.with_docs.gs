
/**
 * Google Apps Script client library for the Cloud DNS API
 * Documentation URL: https://cloud.google.com/dns/docs
 * @class
 */
class Dns {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://dns.googleapis.com/';
    this._servicePath = '';


    this.resourceRecordSets = {};

    /**
     * Enumerates ResourceRecordSets that you have created but not yet deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {integer} apiParams.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     * @param {string} apiParams.name - Restricts the list to return only records with this fully qualified domain name. Mutually exclusive with the {@code filter} field.
     * @param {string} apiParams.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {string} apiParams.type - Restricts the list to return only records of this type. If present, the "name" parameter must also be present. Mutually exclusive with the {@code filter} field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resourceRecordSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/rrsets', 'GET', apiParams, clientConfig);

    /**
     * Creates a new ResourceRecordSet.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resourceRecordSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/rrsets', 'POST', apiParams, clientConfig);

    /**
     * Fetches the representation of an existing ResourceRecordSet.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} apiParams.name - (Required) Fully qualified domain name.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {string} apiParams.type - (Required) RRSet type.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resourceRecordSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a previously created ResourceRecordSet.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} apiParams.name - (Required) Fully qualified domain name.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {string} apiParams.type - (Required) RRSet type.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resourceRecordSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}', 'DELETE', apiParams, clientConfig);

    /**
     * Applies a partial update to an existing ResourceRecordSet.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} apiParams.name - (Required) Fully qualified domain name.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {string} apiParams.type - (Required) RRSet type.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resourceRecordSets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}', 'PATCH', apiParams, clientConfig);

    this.changes = {};

    /**
     * Atomically updates the ResourceRecordSet collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.changes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/changes', 'POST', apiParams, clientConfig);

    /**
     * Fetches the representation of an existing Change.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.changeId - (Required) The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.changes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/changes/{changeId}', 'GET', apiParams, clientConfig);

    /**
     * Enumerates Changes to a ResourceRecordSet collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {integer} apiParams.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     * @param {string} apiParams.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {string} apiParams.sortBy - Sorting criterion. The only supported value is change sequence.
     * @param {string} apiParams.sortOrder - Sorting order direction: 'ascending' or 'descending'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.changes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/changes', 'GET', apiParams, clientConfig);

    this.dnsKeys = {};

    /**
     * Fetches the representation of an existing DnsKey.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.digestType - An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed.
     * @param {string} apiParams.dnsKeyId - (Required) The identifier of the requested DnsKey.
     * @param {string} apiParams.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.dnsKeys.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/dnsKeys/{dnsKeyId}', 'GET', apiParams, clientConfig);

    /**
     * Enumerates DnsKeys to a ResourceRecordSet collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.digestType - An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed.
     * @param {string} apiParams.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {integer} apiParams.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     * @param {string} apiParams.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.dnsKeys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/dnsKeys', 'GET', apiParams, clientConfig);

    this.projects = {};

    /**
     * Fetches the representation of an existing Project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}', 'GET', apiParams, clientConfig);

    this.managedZoneOperations = {};

    /**
     * Fetches the representation of an existing Operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.managedZone - (Required) Identifies the managed zone addressed by this request.
     * @param {string} apiParams.operation - (Required) Identifies the operation addressed by this request (ID of the operation).
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedZoneOperations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/operations/{operation}', 'GET', apiParams, clientConfig);

    /**
     * Enumerates Operations for the given ManagedZone.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.managedZone - (Required) Identifies the managed zone addressed by this request.
     * @param {integer} apiParams.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     * @param {string} apiParams.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {string} apiParams.sortBy - Sorting criterion. The only supported values are START_TIME and ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedZoneOperations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/operations', 'GET', apiParams, clientConfig);

    this.managedZones = {};

    /**
     * Creates a new ManagedZone.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedZones.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones', 'POST', apiParams, clientConfig);

    /**
     * Fetches the representation of an existing ManagedZone.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedZones.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}', 'GET', apiParams, clientConfig);

    /**
     * Enumerates ManagedZones that have been created but not yet deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dnsName - Restricts the list to return only zones with this domain name.
     * @param {integer} apiParams.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     * @param {string} apiParams.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedZones.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones', 'GET', apiParams, clientConfig);

    /**
     * Deletes a previously created ManagedZone.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedZones.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}', 'DELETE', apiParams, clientConfig);

    /**
     * Applies a partial update to an existing ManagedZone.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedZones.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an existing ManagedZone.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedZones.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}', 'PUT', apiParams, clientConfig);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedZones.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedZones.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedZones.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.policies = {};

    /**
     * Creates a new policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.policies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/policies', 'POST', apiParams, clientConfig);

    /**
     * Fetches the representation of an existing policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.policy - (Required) User given friendly name of the policy addressed by this request.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.policies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/policies/{policy}', 'GET', apiParams, clientConfig);

    /**
     * Enumerates all policies associated with a project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     * @param {string} apiParams.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.policies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/policies', 'GET', apiParams, clientConfig);

    /**
     * Deletes a previously created policy. Fails if the policy is still being referenced by a network.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.policy - (Required) User given friendly name of the policy addressed by this request.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.policies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/policies/{policy}', 'DELETE', apiParams, clientConfig);

    /**
     * Applies a partial update to an existing policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.policy - (Required) User given friendly name of the policy addressed by this request.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.policies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/policies/{policy}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an existing policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.policy - (Required) User given friendly name of the policy addressed by this request.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.policies.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/policies/{policy}', 'PUT', apiParams, clientConfig);

    this.responsePolicies = {};

    /**
     * Creates a new Response Policy
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.responsePolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies', 'POST', apiParams, clientConfig);

    /**
     * Fetches the representation of an existing Response Policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {string} apiParams.responsePolicy - (Required) User assigned name of the Response Policy addressed by this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.responsePolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}', 'GET', apiParams, clientConfig);

    /**
     * Enumerates all Response Policies associated with a project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     * @param {string} apiParams.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.responsePolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies', 'GET', apiParams, clientConfig);

    /**
     * Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {string} apiParams.responsePolicy - (Required) User assigned name of the Response Policy addressed by this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.responsePolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}', 'DELETE', apiParams, clientConfig);

    /**
     * Applies a partial update to an existing Response Policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {string} apiParams.responsePolicy - (Required) User assigned name of the response policy addressed by this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.responsePolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an existing Response Policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {string} apiParams.responsePolicy - (Required) User assigned name of the Response Policy addressed by this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.responsePolicies.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}', 'PUT', apiParams, clientConfig);

    this.responsePolicyRules = {};

    /**
     * Creates a new Response Policy Rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {string} apiParams.responsePolicy - (Required) User assigned name of the Response Policy containing the Response Policy Rule.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.responsePolicyRules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules', 'POST', apiParams, clientConfig);

    /**
     * Fetches the representation of an existing Response Policy Rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {string} apiParams.responsePolicy - (Required) User assigned name of the Response Policy containing the Response Policy Rule.
     * @param {string} apiParams.responsePolicyRule - (Required) User assigned name of the Response Policy Rule addressed by this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.responsePolicyRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a previously created Response Policy Rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {string} apiParams.responsePolicy - (Required) User assigned name of the Response Policy containing the Response Policy Rule.
     * @param {string} apiParams.responsePolicyRule - (Required) User assigned name of the Response Policy Rule addressed by this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.responsePolicyRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}', 'DELETE', apiParams, clientConfig);

    /**
     * Enumerates all Response Policy Rules associated with a project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     * @param {string} apiParams.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {string} apiParams.responsePolicy - (Required) User assigned name of the Response Policy to list.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.responsePolicyRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules', 'GET', apiParams, clientConfig);

    /**
     * Applies a partial update to an existing Response Policy Rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {string} apiParams.responsePolicy - (Required) User assigned name of the Response Policy containing the Response Policy Rule.
     * @param {string} apiParams.responsePolicyRule - (Required) User assigned name of the Response Policy Rule addressed by this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.responsePolicyRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an existing Response Policy Rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} apiParams.project - (Required) Identifies the project addressed by this request.
     * @param {string} apiParams.responsePolicy - (Required) User assigned name of the Response Policy containing the Response Policy Rule.
     * @param {string} apiParams.responsePolicyRule - (Required) User assigned name of the Response Policy Rule addressed by this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.responsePolicyRules.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}', 'PUT', apiParams, clientConfig);
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
