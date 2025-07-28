
/**
 * Google Apps Script client library for the Security Command Center API
 * Documentation URL: https://cloud.google.com/security-command-center
 * @class
 */
class Securitycenter {
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
    this._rootUrl = 'https://securitycenter.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.organizations = {};

    /**
     * Gets the settings for an organization.
     * @param {string} params.name - (Required) Required. Name of the organization to get organization settings for. Its format is "organizations/[organization_id]/organizationSettings".
     * @return {object} The API response object.
     */
    this.organizations.getOrganizationSettings = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates an organization's settings.
     * @param {string} params.name - (Required) The relative resource name of the settings. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/organizationSettings".
     * @param {string} params.updateMask - The FieldMask to use when updating the settings resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.updateOrganizationSettings = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.organizations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.organizations.operations.list = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.organizations.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.organizations.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.organizations.sources = {};

    /**
     * Creates a source.
     * @param {string} params.parent - (Required) Required. Resource name of the new source's parent. Its format should be "organizations/[organization_id]".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.create = (params) => this._makeRequest('v1beta1/{+parent}/sources', 'POST', params);

    /**
     * Gets the access control policy on the specified Source.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Gets a source.
     * @param {string} params.name - (Required) Required. Relative resource name of the source. Its format is "organizations/[organization_id]/source/[source_id]".
     * @return {object} The API response object.
     */
    this.organizations.sources.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists all sources belonging to an organization.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Resource name of the parent of sources to list. Its format should be "organizations/[organization_id]".
     * @return {object} The API response object.
     */
    this.organizations.sources.list = (params) => this._makeRequest('v1beta1/{+parent}/sources', 'GET', params);

    /**
     * Sets the access control policy on the specified Source.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns the permissions that a caller has on the specified source.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Updates a source.
     * @param {string} params.name - (Required) The relative resource name of this source. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}"
     * @param {string} params.updateMask - The FieldMask to use when updating the source resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.organizations.sources.findings = {};

    /**
     * Creates a finding. The corresponding source must exist for finding creation to succeed.
     * @param {string} params.findingId - Required. Unique identifier provided by the client within the parent scope. It must be alphanumeric and less than or equal to 32 characters and greater than 0 characters in length.
     * @param {string} params.parent - (Required) Required. Resource name of the new finding's parent. Its format should be "organizations/[organization_id]/sources/[source_id]".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.findings.create = (params) => this._makeRequest('v1beta1/{+parent}/findings', 'POST', params);

    /**
     * Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
     * @param {string} params.parent - (Required) Required. Name of the source to groupBy. Its format is "organizations/[organization_id]/sources/[source_id]". To groupBy across all sources provide a source_id of `-`. For example: organizations/{organization_id}/sources/-
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.findings.group = (params) => this._makeRequest('v1beta1/{+parent}/findings:group', 'POST', params);

    /**
     * Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
     * @param {string} params.fieldMask - Optional. A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields.
     * @param {string} params.filter - Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are not supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. For example, `source_properties.size = 100` is a valid filter string.
     * @param {string} params.orderBy - Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name desc , source_properties.a_property " are equivalent.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Name of the source the findings belong to. Its format is "organizations/[organization_id]/sources/[source_id]". To list across all sources provide a source_id of `-`. For example: organizations/{organization_id}/sources/-
     * @param {string} params.readTime - Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     * @return {object} The API response object.
     */
    this.organizations.sources.findings.list = (params) => this._makeRequest('v1beta1/{+parent}/findings', 'GET', params);

    /**
     * Updates the state of a finding.
     * @param {string} params.name - (Required) Required. The relative resource name of the finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/finding/{finding_id}".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.findings.setState = (params) => this._makeRequest('v1beta1/{+name}:setState', 'POST', params);

    /**
     * Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.
     * @param {string} params.name - (Required) The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}"
     * @param {string} params.updateMask - The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.findings.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Updates security marks.
     * @param {string} params.name - (Required) The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
     * @param {string} params.startTime - The time at which the updated SecurityMarks take effect.
     * @param {string} params.updateMask - The FieldMask to use when updating the security marks resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.findings.updateSecurityMarks = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.organizations.assets = {};

    /**
     * Filters an organization's assets and groups them by their specified properties.
     * @param {string} params.parent - (Required) Required. Name of the organization to groupBy. Its format is "organizations/[organization_id]".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.assets.group = (params) => this._makeRequest('v1beta1/{+parent}/assets:group', 'POST', params);

    /**
     * Lists an organization's assets.
     * @param {string} params.compareDuration - When compare_duration is set, the ListAssetResult's "state" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state" values when compare_duration is specified: * "ADDED": indicates that the asset was not present before compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state is "UNUSED", which indicates that the asset is present at read_time.
     * @param {string} params.fieldMask - Optional. A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields.
     * @param {string} params.filter - Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are not supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. For example, `resource_properties.size = 100` is a valid filter string.
     * @param {string} params.orderBy - Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name desc , resource_properties.a_property " are equivalent.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Name of the organization assets should belong to. Its format is "organizations/[organization_id]".
     * @param {string} params.readTime - Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     * @return {object} The API response object.
     */
    this.organizations.assets.list = (params) => this._makeRequest('v1beta1/{+parent}/assets', 'GET', params);

    /**
     * Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
     * @param {string} params.parent - (Required) Required. Name of the organization to run asset discovery for. Its format is "organizations/[organization_id]".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.assets.runDiscovery = (params) => this._makeRequest('v1beta1/{+parent}/assets:runDiscovery', 'POST', params);

    /**
     * Updates security marks.
     * @param {string} params.name - (Required) The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
     * @param {string} params.startTime - The time at which the updated SecurityMarks take effect.
     * @param {string} params.updateMask - The FieldMask to use when updating the security marks resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.assets.updateSecurityMarks = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
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
