
/**
 * Google Apps Script client library for the Cloud Functions API
 * Documentation URL: https://cloud.google.com/functions
 * @class
 */
class Cloudfunctions {
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
    this._rootUrl = 'https://cloudfunctions.googleapis.com/';
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
    this.projects.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.functions = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.functions.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.functions.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.functions.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Returns a function with the given name from the requested project.
     * @param {string} params.name - (Required) Required. The name of the function which details should be obtained.
     * @param {string} params.revision - Optional. The optional version of the 1st gen function whose details should be obtained. The version of a 1st gen function is an integer that starts from 1 and gets incremented on redeployments. GCF may keep historical configs for old versions of 1st gen function. This field can be specified to fetch the historical configs. This field is valid only for GCF 1st gen function.
     * @return {object} The API response object.
     */
    this.projects.locations.functions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Returns a list of functions that belong to the requested project.
     * @param {string} params.filter - The filter for Functions that match the filter expression, following the syntax outlined in https://google.aip.dev/160.
     * @param {string} params.orderBy - The sorting order of the resources returned. Value should be a comma separated list of fields. The default sorting order is ascending. See https://google.aip.dev/132#ordering.
     * @param {integer} params.pageSize - Maximum number of functions to return per call. The largest allowed page_size is 1,000, if the page_size is omitted or specified as greater than 1,000 then it will be replaced as 1,000. The size of the list response can be less than specified when used with filters.
     * @param {string} params.pageToken - The value returned by the last `ListFunctionsResponse`; indicates that this is a continuation of a prior `ListFunctions` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the function should be listed, specified in the format `projects/*\/locations/*` If you want to list functions in all locations, use "-" in place of a location. When listing functions in all locations, if one or more location(s) are unreachable, the response will contain functions from all reachable locations along with the names of any unreachable locations.
     * @return {object} The API response object.
     */
    this.projects.locations.functions.list = (params) => this._makeRequest('v2/{+parent}/functions', 'GET', params);

    /**
     * Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
     * @param {string} params.functionId - The ID to use for the function, which will become the final component of the function's resource name. This value should be 4-63 characters, and valid characters are /a-z-/.
     * @param {string} params.parent - (Required) Required. The project and location in which the function should be created, specified in the format `projects/*\/locations/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.functions.create = (params) => this._makeRequest('v2/{+parent}/functions', 'POST', params);

    /**
     * Updates existing function.
     * @param {string} params.name - (Required) A user-defined name of the function. Function names must be unique globally and match pattern `projects/*\/locations/*\/functions/*`
     * @param {string} params.updateMask - The list of fields to be updated. If no field mask is provided, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.functions.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name. This is the first step of the multi step process to upgrade 1st Gen functions to 2nd Gen. Only 2nd Gen configuration is setup as part of this request and traffic continues to be served by 1st Gen.
     * @param {string} params.name - (Required) Required. The name of the function which should have configuration copied for upgrade.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.functions.setupFunctionUpgradeConfig = (params) => this._makeRequest('v2/{+name}:setupFunctionUpgradeConfig', 'POST', params);

    /**
     * Aborts generation upgrade process for a function with the given name from the specified project. Deletes all 2nd Gen copy related configuration and resources which were created during the upgrade process.
     * @param {string} params.name - (Required) Required. The name of the function for which upgrade should be aborted.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.functions.abortFunctionUpgrade = (params) => this._makeRequest('v2/{+name}:abortFunctionUpgrade', 'POST', params);

    /**
     * Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy. This is the second step of the multi step process to upgrade 1st Gen functions to 2nd Gen. After this operation, all new traffic will be served by 2nd Gen copy.
     * @param {string} params.name - (Required) Required. The name of the function for which traffic target should be changed to 2nd Gen from 1st Gen.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.functions.redirectFunctionUpgradeTraffic = (params) => this._makeRequest('v2/{+name}:redirectFunctionUpgradeTraffic', 'POST', params);

    /**
     * Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function. After this operation, all new traffic would be served by the 1st Gen.
     * @param {string} params.name - (Required) Required. The name of the function for which traffic target should be changed back to 1st Gen from 2nd Gen.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.functions.rollbackFunctionUpgradeTraffic = (params) => this._makeRequest('v2/{+name}:rollbackFunctionUpgradeTraffic', 'POST', params);

    /**
     * Finalizes the upgrade after which function upgrade can not be rolled back. This is the last step of the multi step process to upgrade 1st Gen functions to 2nd Gen. Deletes all original 1st Gen related configuration and resources.
     * @param {string} params.name - (Required) Required. The name of the function for which upgrade should be finalized.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.functions.commitFunctionUpgrade = (params) => this._makeRequest('v2/{+name}:commitFunctionUpgrade', 'POST', params);

    /**
     * Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
     * @param {string} params.name - (Required) Required. The name of the function which should be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.functions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, specify this header: * `content-type: application/zip` Do not specify this header: * `Authorization: Bearer YOUR_TOKEN`
     * @param {string} params.parent - (Required) Required. The project and location in which the Google Cloud Storage signed URL should be generated, specified in the format `projects/*\/locations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.functions.generateUploadUrl = (params) => this._makeRequest('v2/{+parent}/functions:generateUploadUrl', 'POST', params);

    /**
     * Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
     * @param {string} params.name - (Required) Required. The name of function for which source code Google Cloud Storage signed URL should be generated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.functions.generateDownloadUrl = (params) => this._makeRequest('v2/{+name}:generateDownloadUrl', 'POST', params);

    /**
     * Detaches 2nd Gen function to Cloud Run function.
     * @param {string} params.name - (Required) Required. The name of the function for which should be detached.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.functions.detachFunction = (params) => this._makeRequest('v2/{+name}:detachFunction', 'POST', params);

    this.projects.locations.runtimes = {};

    /**
     * Returns a list of runtimes that are supported for the requested project.
     * @param {string} params.filter - The filter for Runtimes that match the filter expression, following the syntax outlined in https://google.aip.dev/160.
     * @param {string} params.parent - (Required) Required. The project and location from which the runtimes should be listed, specified in the format `projects/*\/locations/*`
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.list = (params) => this._makeRequest('v2/{+parent}/runtimes', 'GET', params);
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
