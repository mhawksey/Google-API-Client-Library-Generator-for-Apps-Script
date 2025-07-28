
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://dns.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.resourceRecordSets = {};

    /**
     * Enumerates ResourceRecordSets that you have created but not yet deleted.
     * @param {string} params.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {integer} params.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     * @param {string} params.name - Restricts the list to return only records with this fully qualified domain name.
     * @param {string} params.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {string} params.type - Restricts the list to return only records of this type. If present, the "name" parameter must also be present.
     * @return {object} The API response object.
     */
    this.resourceRecordSets.list = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones/{managedZone}/rrsets', 'GET', params);

    /**
     * Creates a new ResourceRecordSet.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.resourceRecordSets.create = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones/{managedZone}/rrsets', 'POST', params);

    /**
     * Fetches the representation of an existing ResourceRecordSet.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} params.name - (Required) Fully qualified domain name.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {string} params.type - (Required) RRSet type.
     * @return {object} The API response object.
     */
    this.resourceRecordSets.get = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}', 'GET', params);

    /**
     * Deletes a previously created ResourceRecordSet.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} params.name - (Required) Fully qualified domain name.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {string} params.type - (Required) RRSet type.
     * @return {object} The API response object.
     */
    this.resourceRecordSets.delete = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}', 'DELETE', params);

    /**
     * Applies a partial update to an existing ResourceRecordSet.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} params.name - (Required) Fully qualified domain name.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {string} params.type - (Required) RRSet type.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.resourceRecordSets.patch = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}', 'PATCH', params);

    this.changes = {};

    /**
     * Atomically updates the ResourceRecordSet collection.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.changes.create = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones/{managedZone}/changes', 'POST', params);

    /**
     * Fetches the representation of an existing Change.
     * @param {string} params.changeId - (Required) The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @return {object} The API response object.
     */
    this.changes.get = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones/{managedZone}/changes/{changeId}', 'GET', params);

    /**
     * Enumerates Changes to a ResourceRecordSet collection.
     * @param {string} params.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {integer} params.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     * @param {string} params.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {string} params.sortBy - Sorting criterion. The only supported value is change sequence.
     * @param {string} params.sortOrder - Sorting order direction: 'ascending' or 'descending'.
     * @return {object} The API response object.
     */
    this.changes.list = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones/{managedZone}/changes', 'GET', params);

    this.dnsKeys = {};

    /**
     * Fetches the representation of an existing DnsKey.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.digestType - An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed.
     * @param {string} params.dnsKeyId - (Required) The identifier of the requested DnsKey.
     * @param {string} params.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @return {object} The API response object.
     */
    this.dnsKeys.get = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones/{managedZone}/dnsKeys/{dnsKeyId}', 'GET', params);

    /**
     * Enumerates DnsKeys to a ResourceRecordSet collection.
     * @param {string} params.digestType - An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed.
     * @param {string} params.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {integer} params.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     * @param {string} params.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @return {object} The API response object.
     */
    this.dnsKeys.list = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones/{managedZone}/dnsKeys', 'GET', params);

    this.projects = {};

    /**
     * Fetches the representation of an existing Project.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @return {object} The API response object.
     */
    this.projects.get = (params) => this._makeRequest('dns/v1beta2/projects/{project}', 'GET', params);

    this.managedZoneOperations = {};

    /**
     * Fetches the representation of an existing Operation.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone - (Required) Identifies the managed zone addressed by this request.
     * @param {string} params.operation - (Required) Identifies the operation addressed by this request (ID of the operation).
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @return {object} The API response object.
     */
    this.managedZoneOperations.get = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones/{managedZone}/operations/{operation}', 'GET', params);

    /**
     * Enumerates Operations for the given ManagedZone.
     * @param {string} params.managedZone - (Required) Identifies the managed zone addressed by this request.
     * @param {integer} params.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     * @param {string} params.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {string} params.sortBy - Sorting criterion. The only supported values are START_TIME and ID.
     * @return {object} The API response object.
     */
    this.managedZoneOperations.list = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones/{managedZone}/operations', 'GET', params);

    this.managedZones = {};

    /**
     * Creates a new ManagedZone.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.managedZones.create = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones', 'POST', params);

    /**
     * Fetches the representation of an existing ManagedZone.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @return {object} The API response object.
     */
    this.managedZones.get = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones/{managedZone}', 'GET', params);

    /**
     * Enumerates ManagedZones that have been created but not yet deleted.
     * @param {string} params.dnsName - Restricts the list to return only zones with this domain name.
     * @param {integer} params.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     * @param {string} params.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @return {object} The API response object.
     */
    this.managedZones.list = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones', 'GET', params);

    /**
     * Deletes a previously created ManagedZone.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @return {object} The API response object.
     */
    this.managedZones.delete = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones/{managedZone}', 'DELETE', params);

    /**
     * Applies a partial update to an existing ManagedZone.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.managedZones.patch = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones/{managedZone}', 'PATCH', params);

    /**
     * Updates an existing ManagedZone.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone - (Required) Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.managedZones.update = (params) => this._makeRequest('dns/v1beta2/projects/{project}/managedZones/{managedZone}', 'PUT', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.managedZones.setIamPolicy = (params) => this._makeRequest('dns/v1beta2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.managedZones.getIamPolicy = (params) => this._makeRequest('dns/v1beta2/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.managedZones.testIamPermissions = (params) => this._makeRequest('dns/v1beta2/{+resource}:testIamPermissions', 'POST', params);

    this.policies = {};

    /**
     * Creates a new Policy.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.policies.create = (params) => this._makeRequest('dns/v1beta2/projects/{project}/policies', 'POST', params);

    /**
     * Fetches the representation of an existing Policy.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.policy - (Required) User given friendly name of the policy addressed by this request.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @return {object} The API response object.
     */
    this.policies.get = (params) => this._makeRequest('dns/v1beta2/projects/{project}/policies/{policy}', 'GET', params);

    /**
     * Enumerates all Policies associated with a project.
     * @param {integer} params.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     * @param {string} params.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @return {object} The API response object.
     */
    this.policies.list = (params) => this._makeRequest('dns/v1beta2/projects/{project}/policies', 'GET', params);

    /**
     * Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.policy - (Required) User given friendly name of the policy addressed by this request.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @return {object} The API response object.
     */
    this.policies.delete = (params) => this._makeRequest('dns/v1beta2/projects/{project}/policies/{policy}', 'DELETE', params);

    /**
     * Applies a partial update to an existing Policy.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.policy - (Required) User given friendly name of the policy addressed by this request.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.policies.patch = (params) => this._makeRequest('dns/v1beta2/projects/{project}/policies/{policy}', 'PATCH', params);

    /**
     * Updates an existing Policy.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.policy - (Required) User given friendly name of the policy addressed by this request.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.policies.update = (params) => this._makeRequest('dns/v1beta2/projects/{project}/policies/{policy}', 'PUT', params);

    this.responsePolicies = {};

    /**
     * Creates a new Response Policy
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.responsePolicies.create = (params) => this._makeRequest('dns/v1beta2/projects/{project}/responsePolicies', 'POST', params);

    /**
     * Fetches the representation of an existing Response Policy.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {string} params.responsePolicy - (Required) User assigned name of the Response Policy addressed by this request.
     * @return {object} The API response object.
     */
    this.responsePolicies.get = (params) => this._makeRequest('dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}', 'GET', params);

    /**
     * Enumerates all Response Policies associated with a project.
     * @param {integer} params.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     * @param {string} params.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @return {object} The API response object.
     */
    this.responsePolicies.list = (params) => this._makeRequest('dns/v1beta2/projects/{project}/responsePolicies', 'GET', params);

    /**
     * Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {string} params.responsePolicy - (Required) User assigned name of the Response Policy addressed by this request.
     * @return {object} The API response object.
     */
    this.responsePolicies.delete = (params) => this._makeRequest('dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}', 'DELETE', params);

    /**
     * Applies a partial update to an existing Response Policy.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {string} params.responsePolicy - (Required) User assigned name of the response policy addressed by this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.responsePolicies.patch = (params) => this._makeRequest('dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}', 'PATCH', params);

    /**
     * Updates an existing Response Policy.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {string} params.responsePolicy - (Required) User assigned name of the Response Policy addressed by this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.responsePolicies.update = (params) => this._makeRequest('dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}', 'PUT', params);

    this.responsePolicyRules = {};

    /**
     * Creates a new Response Policy Rule.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {string} params.responsePolicy - (Required) User assigned name of the Response Policy containing the Response Policy Rule.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.responsePolicyRules.create = (params) => this._makeRequest('dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules', 'POST', params);

    /**
     * Fetches the representation of an existing Response Policy Rule.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {string} params.responsePolicy - (Required) User assigned name of the Response Policy containing the Response Policy Rule.
     * @param {string} params.responsePolicyRule - (Required) User assigned name of the Response Policy Rule addressed by this request.
     * @return {object} The API response object.
     */
    this.responsePolicyRules.get = (params) => this._makeRequest('dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}', 'GET', params);

    /**
     * Deletes a previously created Response Policy Rule.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {string} params.responsePolicy - (Required) User assigned name of the Response Policy containing the Response Policy Rule.
     * @param {string} params.responsePolicyRule - (Required) User assigned name of the Response Policy Rule addressed by this request.
     * @return {object} The API response object.
     */
    this.responsePolicyRules.delete = (params) => this._makeRequest('dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}', 'DELETE', params);

    /**
     * Enumerates all Response Policy Rules associated with a project.
     * @param {integer} params.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     * @param {string} params.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {string} params.responsePolicy - (Required) User assigned name of the Response Policy to list.
     * @return {object} The API response object.
     */
    this.responsePolicyRules.list = (params) => this._makeRequest('dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules', 'GET', params);

    /**
     * Applies a partial update to an existing Response Policy Rule.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {string} params.responsePolicy - (Required) User assigned name of the Response Policy containing the Response Policy Rule.
     * @param {string} params.responsePolicyRule - (Required) User assigned name of the Response Policy Rule addressed by this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.responsePolicyRules.patch = (params) => this._makeRequest('dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}', 'PATCH', params);

    /**
     * Updates an existing Response Policy Rule.
     * @param {string} params.clientOperationId - For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.project - (Required) Identifies the project addressed by this request.
     * @param {string} params.responsePolicy - (Required) User assigned name of the Response Policy containing the Response Policy Rule.
     * @param {string} params.responsePolicyRule - (Required) User assigned name of the Response Policy Rule addressed by this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.responsePolicyRules.update = (params) => this._makeRequest('dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}', 'PUT', params);
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
