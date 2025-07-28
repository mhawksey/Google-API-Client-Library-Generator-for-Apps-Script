
/**
 * Google Apps Script client library for the Organization Policy API
 * Documentation URL: https://cloud.google.com/orgpolicy/docs/reference/rest/index.html
 * @class
 */
class Orgpolicy {
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
    this._rootUrl = 'https://orgpolicy.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.constraints = {};

    /**
     * Lists constraints that could be applied on the specified resource.
     * @param {integer} params.pageSize - Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     * @param {string} params.pageToken - Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     * @param {string} params.parent - (Required) Required. The Google Cloud resource that parents the constraint. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
     * @return {object} The API response object.
     */
    this.projects.constraints.list = (params) => this._makeRequest('v2/{+parent}/constraints', 'GET', params);

    this.projects.policies = {};

    /**
     * Retrieves all of the policies that exist on a particular resource.
     * @param {integer} params.pageSize - Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     * @param {string} params.pageToken - Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     * @param {string} params.parent - (Required) Required. The target Google Cloud resource that parents the set of constraints and policies that will be returned from this call. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
     * @return {object} The API response object.
     */
    this.projects.policies.list = (params) => this._makeRequest('v2/{+parent}/policies', 'GET', params);

    /**
     * Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.
     * @param {string} params.name - (Required) Required. Resource name of the policy. See Policy for naming requirements.
     * @return {object} The API response object.
     */
    this.projects.policies.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
     * @param {string} params.name - (Required) Required. The effective policy to compute. See Policy for naming requirements.
     * @return {object} The API response object.
     */
    this.projects.policies.getEffectivePolicy = (params) => this._makeRequest('v2/{+name}:getEffectivePolicy', 'GET', params);

    /**
     * Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.
     * @param {string} params.parent - (Required) Required. The Google Cloud resource that will parent the new policy. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.policies.create = (params) => this._makeRequest('v2/{+parent}/policies', 'POST', params);

    /**
     * Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.
     * @param {string} params.name - (Required) Immutable. The resource name of the policy. Must be one of the following forms, where `constraint_name` is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, `projects/123/policies/compute.disableSerialPortAccess`. Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
     * @param {string} params.updateMask - Field mask used to specify the fields to be overwritten in the policy by the set. The fields specified in the update_mask are relative to the policy, not the full request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.policies.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.
     * @param {string} params.etag - Optional. The current etag of policy. If an etag is provided and does not match the current etag of the policy, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. Name of the policy to delete. See the policy entry for naming rules.
     * @return {object} The API response object.
     */
    this.projects.policies.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.folders = {};

    this.folders.constraints = {};

    /**
     * Lists constraints that could be applied on the specified resource.
     * @param {integer} params.pageSize - Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     * @param {string} params.pageToken - Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     * @param {string} params.parent - (Required) Required. The Google Cloud resource that parents the constraint. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
     * @return {object} The API response object.
     */
    this.folders.constraints.list = (params) => this._makeRequest('v2/{+parent}/constraints', 'GET', params);

    this.folders.policies = {};

    /**
     * Retrieves all of the policies that exist on a particular resource.
     * @param {integer} params.pageSize - Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     * @param {string} params.pageToken - Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     * @param {string} params.parent - (Required) Required. The target Google Cloud resource that parents the set of constraints and policies that will be returned from this call. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
     * @return {object} The API response object.
     */
    this.folders.policies.list = (params) => this._makeRequest('v2/{+parent}/policies', 'GET', params);

    /**
     * Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.
     * @param {string} params.name - (Required) Required. Resource name of the policy. See Policy for naming requirements.
     * @return {object} The API response object.
     */
    this.folders.policies.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
     * @param {string} params.name - (Required) Required. The effective policy to compute. See Policy for naming requirements.
     * @return {object} The API response object.
     */
    this.folders.policies.getEffectivePolicy = (params) => this._makeRequest('v2/{+name}:getEffectivePolicy', 'GET', params);

    /**
     * Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.
     * @param {string} params.parent - (Required) Required. The Google Cloud resource that will parent the new policy. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.policies.create = (params) => this._makeRequest('v2/{+parent}/policies', 'POST', params);

    /**
     * Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.
     * @param {string} params.name - (Required) Immutable. The resource name of the policy. Must be one of the following forms, where `constraint_name` is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, `projects/123/policies/compute.disableSerialPortAccess`. Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
     * @param {string} params.updateMask - Field mask used to specify the fields to be overwritten in the policy by the set. The fields specified in the update_mask are relative to the policy, not the full request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.policies.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.
     * @param {string} params.etag - Optional. The current etag of policy. If an etag is provided and does not match the current etag of the policy, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. Name of the policy to delete. See the policy entry for naming rules.
     * @return {object} The API response object.
     */
    this.folders.policies.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations = {};

    this.organizations.constraints = {};

    /**
     * Lists constraints that could be applied on the specified resource.
     * @param {integer} params.pageSize - Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     * @param {string} params.pageToken - Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     * @param {string} params.parent - (Required) Required. The Google Cloud resource that parents the constraint. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
     * @return {object} The API response object.
     */
    this.organizations.constraints.list = (params) => this._makeRequest('v2/{+parent}/constraints', 'GET', params);

    this.organizations.policies = {};

    /**
     * Retrieves all of the policies that exist on a particular resource.
     * @param {integer} params.pageSize - Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     * @param {string} params.pageToken - Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     * @param {string} params.parent - (Required) Required. The target Google Cloud resource that parents the set of constraints and policies that will be returned from this call. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
     * @return {object} The API response object.
     */
    this.organizations.policies.list = (params) => this._makeRequest('v2/{+parent}/policies', 'GET', params);

    /**
     * Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.
     * @param {string} params.name - (Required) Required. Resource name of the policy. See Policy for naming requirements.
     * @return {object} The API response object.
     */
    this.organizations.policies.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
     * @param {string} params.name - (Required) Required. The effective policy to compute. See Policy for naming requirements.
     * @return {object} The API response object.
     */
    this.organizations.policies.getEffectivePolicy = (params) => this._makeRequest('v2/{+name}:getEffectivePolicy', 'GET', params);

    /**
     * Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.
     * @param {string} params.parent - (Required) Required. The Google Cloud resource that will parent the new policy. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.policies.create = (params) => this._makeRequest('v2/{+parent}/policies', 'POST', params);

    /**
     * Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.
     * @param {string} params.name - (Required) Immutable. The resource name of the policy. Must be one of the following forms, where `constraint_name` is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, `projects/123/policies/compute.disableSerialPortAccess`. Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
     * @param {string} params.updateMask - Field mask used to specify the fields to be overwritten in the policy by the set. The fields specified in the update_mask are relative to the policy, not the full request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.policies.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.
     * @param {string} params.etag - Optional. The current etag of policy. If an etag is provided and does not match the current etag of the policy, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. Name of the policy to delete. See the policy entry for naming rules.
     * @return {object} The API response object.
     */
    this.organizations.policies.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.customConstraints = {};

    /**
     * Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.
     * @param {string} params.parent - (Required) Required. Must be in the following form: * `organizations/{organization_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.customConstraints.create = (params) => this._makeRequest('v2/{+parent}/customConstraints', 'POST', params);

    /**
     * Updates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Note: the supplied policy will perform a full overwrite of all fields.
     * @param {string} params.name - (Required) Immutable. Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` The max length is 70 characters and the minimum length is 1. Note that the prefix `organizations/{organization_id}/customConstraints/` is not counted.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.customConstraints.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets a custom or managed constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the custom or managed constraint does not exist.
     * @param {string} params.name - (Required) Required. Resource name of the custom or managed constraint. See the custom constraint entry for naming requirements.
     * @return {object} The API response object.
     */
    this.organizations.customConstraints.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Retrieves all of the custom constraints that exist on a particular organization resource.
     * @param {integer} params.pageSize - Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     * @param {string} params.pageToken - Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     * @param {string} params.parent - (Required) Required. The target Google Cloud resource that parents the set of custom constraints that will be returned from this call. Must be in one of the following forms: * `organizations/{organization_id}`
     * @return {object} The API response object.
     */
    this.organizations.customConstraints.list = (params) => this._makeRequest('v2/{+parent}/customConstraints', 'GET', params);

    /**
     * Deletes a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist.
     * @param {string} params.name - (Required) Required. Name of the custom constraint to delete. See the custom constraint entry for naming rules.
     * @return {object} The API response object.
     */
    this.organizations.customConstraints.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
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
