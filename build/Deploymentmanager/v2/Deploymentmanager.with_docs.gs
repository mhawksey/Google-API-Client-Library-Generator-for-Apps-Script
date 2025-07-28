
/**
 * Google Apps Script client library for the Cloud Deployment Manager V2 API
 * Documentation URL: https://cloud.google.com/deployment-manager
 * @class
 */
class Deploymentmanager {
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
    this._rootUrl = 'https://deploymentmanager.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.deployments = {};

    /**
     * Creates a deployment and all of the resources described by the deployment manifest.
     * @param {string} params.createPolicy - Sets the policy to use for creating new resources.
     * @param {boolean} params.header.bypassBillingFilter - 
     * @param {boolean} params.preview - If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the `update()` method or you can use the `cancelPreview()` method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
     * @param {string} params.project - (Required) The project ID for this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.deployments.insert = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments', 'POST', params);

    /**
     * Updates a deployment and all of the resources described by the deployment manifest.
     * @param {string} params.createPolicy - Sets the policy to use for creating new resources.
     * @param {string} params.deletePolicy - Sets the policy to use for deleting resources.
     * @param {string} params.deployment - (Required) The name of the deployment for this request.
     * @param {boolean} params.header.bypassBillingFilter - 
     * @param {boolean} params.preview - If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a `target.config` with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the `update()` or you can `cancelPreview()` to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
     * @param {string} params.project - (Required) The project ID for this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.deployments.update = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}', 'PUT', params);

    /**
     * Patches a deployment and all of the resources described by the deployment manifest.
     * @param {string} params.createPolicy - Sets the policy to use for creating new resources.
     * @param {string} params.deletePolicy - Sets the policy to use for deleting resources.
     * @param {string} params.deployment - (Required) The name of the deployment for this request.
     * @param {boolean} params.header.bypassBillingFilter - 
     * @param {boolean} params.preview - If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a `target.config` with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the `update()` or you can `cancelPreview()` to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
     * @param {string} params.project - (Required) The project ID for this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.deployments.patch = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}', 'PATCH', params);

    /**
     * Deletes a deployment and all of the resources in the deployment.
     * @param {string} params.deletePolicy - Sets the policy to use for deleting resources.
     * @param {string} params.deployment - (Required) The name of the deployment for this request.
     * @param {boolean} params.header.bypassBillingFilter - 
     * @param {string} params.project - (Required) The project ID for this request.
     * @return {object} The API response object.
     */
    this.deployments.delete = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}', 'DELETE', params);

    /**
     * Gets information about a specific deployment.
     * @param {string} params.deployment - (Required) The name of the deployment for this request.
     * @param {boolean} params.header.bypassBillingFilter - 
     * @param {string} params.project - (Required) The project ID for this request.
     * @return {object} The API response object.
     */
    this.deployments.get = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}', 'GET', params);

    /**
     * Lists all deployments for a given project.
     * @param {string} params.filter - A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
     * @param {integer} params.maxResults - The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
     * @param {string} params.pageToken - Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} params.project - (Required) The project ID for this request.
     * @return {object} The API response object.
     */
    this.deployments.list = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments', 'GET', params);

    /**
     * Cancels and removes the preview currently associated with the deployment.
     * @param {string} params.deployment - (Required) The name of the deployment for this request.
     * @param {string} params.project - (Required) The project ID for this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.deployments.cancelPreview = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/cancelPreview', 'POST', params);

    /**
     * Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
     * @param {string} params.deployment - (Required) The name of the deployment for this request.
     * @param {string} params.project - (Required) The project ID for this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.deployments.stop = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/stop', 'POST', params);

    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     * @param {boolean} params.header.bypassBillingFilter - 
     * @param {integer} params.optionsRequestedPolicyVersion - Requested IAM Policy version.
     * @param {string} params.project - (Required) Project ID for this request.
     * @param {string} params.resource - (Required) Name or id of the resource for this request.
     * @return {object} The API response object.
     */
    this.deployments.getIamPolicy = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{resource}/getIamPolicy', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     * @param {string} params.project - (Required) Project ID for this request.
     * @param {string} params.resource - (Required) Name or id of the resource for this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.deployments.setIamPolicy = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{resource}/setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource.
     * @param {boolean} params.header.bypassBillingFilter - 
     * @param {string} params.project - (Required) Project ID for this request.
     * @param {string} params.resource - (Required) Name or id of the resource for this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.deployments.testIamPermissions = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{resource}/testIamPermissions', 'POST', params);

    this.manifests = {};

    /**
     * Gets information about a specific manifest.
     * @param {string} params.deployment - (Required) The name of the deployment for this request.
     * @param {boolean} params.header.bypassBillingFilter - 
     * @param {string} params.manifest - (Required) The name of the manifest for this request.
     * @param {string} params.project - (Required) The project ID for this request.
     * @return {object} The API response object.
     */
    this.manifests.get = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/manifests/{manifest}', 'GET', params);

    /**
     * Lists all manifests for a given deployment.
     * @param {string} params.deployment - (Required) The name of the deployment for this request.
     * @param {string} params.filter - A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
     * @param {integer} params.maxResults - The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
     * @param {string} params.pageToken - Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} params.project - (Required) The project ID for this request.
     * @return {object} The API response object.
     */
    this.manifests.list = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/manifests', 'GET', params);

    this.operations = {};

    /**
     * Gets information about a specific operation.
     * @param {boolean} params.header.bypassBillingFilter - 
     * @param {string} params.operation - (Required) The name of the operation for this request.
     * @param {string} params.project - (Required) The project ID for this request.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/operations/{operation}', 'GET', params);

    /**
     * Lists all operations for a project.
     * @param {string} params.filter - A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
     * @param {integer} params.maxResults - The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
     * @param {string} params.pageToken - Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} params.project - (Required) The project ID for this request.
     * @return {object} The API response object.
     */
    this.operations.list = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/operations', 'GET', params);

    this.resources = {};

    /**
     * Gets information about a single resource.
     * @param {string} params.deployment - (Required) The name of the deployment for this request.
     * @param {boolean} params.header.bypassBillingFilter - 
     * @param {string} params.project - (Required) The project ID for this request.
     * @param {string} params.resource - (Required) The name of the resource for this request.
     * @return {object} The API response object.
     */
    this.resources.get = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/resources/{resource}', 'GET', params);

    /**
     * Lists all resources in a given deployment.
     * @param {string} params.deployment - (Required) The name of the deployment for this request.
     * @param {string} params.filter - A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
     * @param {integer} params.maxResults - The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
     * @param {string} params.pageToken - Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} params.project - (Required) The project ID for this request.
     * @return {object} The API response object.
     */
    this.resources.list = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/resources', 'GET', params);

    this.types = {};

    /**
     * Lists all resource types for Deployment Manager.
     * @param {string} params.filter - A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
     * @param {integer} params.maxResults - The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
     * @param {string} params.pageToken - Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} params.project - (Required) The project ID for this request.
     * @return {object} The API response object.
     */
    this.types.list = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/types', 'GET', params);
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
