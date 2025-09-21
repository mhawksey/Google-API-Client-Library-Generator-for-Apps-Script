
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://deploymentmanager.googleapis.com/';
    this._servicePath = '';


    this.compositeTypes = {};

    /**
     * Creates a composite type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.compositeTypes.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/compositeTypes', 'POST', apiParams, clientConfig);

    /**
     * Updates a composite type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.compositeType - (Required) The name of the composite type for this request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.compositeTypes.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}', 'PUT', apiParams, clientConfig);

    /**
     * Patches a composite type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.compositeType - (Required) The name of the composite type for this request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.compositeTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a composite type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.compositeType - (Required) The name of the type for this request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.compositeTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets information about a specific composite type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.compositeType - (Required) The name of the composite type for this request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.compositeTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}', 'GET', apiParams, clientConfig);

    /**
     * Lists all composite types for Deployment Manager.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
     * @param {integer} apiParams.maxResults - The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
     * @param {string} apiParams.orderBy - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
     * @param {string} apiParams.pageToken - Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.compositeTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/compositeTypes', 'GET', apiParams, clientConfig);

    this.deployments = {};

    /**
     * Creates a deployment and all of the resources described by the deployment manifest.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.createPolicy - Sets the policy to use for creating new resources.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {boolean} apiParams.preview - If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the `update()` method or you can use the `cancelPreview()` method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.deployments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/deployments', 'POST', apiParams, clientConfig);

    /**
     * Updates a deployment and all of the resources described by the deployment manifest.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.createPolicy - Sets the policy to use for creating new resources.
     * @param {string} apiParams.deletePolicy - Sets the policy to use for deleting resources.
     * @param {string} apiParams.deployment - (Required) The name of the deployment for this request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {boolean} apiParams.preview - If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a `target.config` with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the `update()` or you can `cancelPreview()` to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.deployments.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}', 'PUT', apiParams, clientConfig);

    /**
     * Patches a deployment and all of the resources described by the deployment manifest.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.createPolicy - Sets the policy to use for creating new resources.
     * @param {string} apiParams.deletePolicy - Sets the policy to use for deleting resources.
     * @param {string} apiParams.deployment - (Required) The name of the deployment for this request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {boolean} apiParams.preview - If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a `target.config` with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the `update()` or you can `cancelPreview()` to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.deployments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a deployment and all of the resources in the deployment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deletePolicy - Sets the policy to use for deleting resources.
     * @param {string} apiParams.deployment - (Required) The name of the deployment for this request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.deployments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets information about a specific deployment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deployment - (Required) The name of the deployment for this request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.deployments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}', 'GET', apiParams, clientConfig);

    /**
     * Lists all deployments for a given project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
     * @param {integer} apiParams.maxResults - The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
     * @param {string} apiParams.orderBy - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
     * @param {string} apiParams.pageToken - Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/deployments', 'GET', apiParams, clientConfig);

    /**
     * Cancels and removes the preview currently associated with the deployment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deployment - (Required) The name of the deployment for this request.
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.deployments.cancelPreview = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/cancelPreview', 'POST', apiParams, clientConfig);

    /**
     * Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deployment - (Required) The name of the deployment for this request.
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.deployments.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/stop', 'POST', apiParams, clientConfig);

    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {integer} apiParams.optionsRequestedPolicyVersion - Requested IAM Policy version.
     * @param {string} apiParams.project - (Required) Project ID for this request.
     * @param {string} apiParams.resource - (Required) Name or id of the resource for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.deployments.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.project - (Required) Project ID for this request.
     * @param {string} apiParams.resource - (Required) Name or id of the resource for this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.deployments.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Returns permissions that a caller has on the specified resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.project - (Required) Project ID for this request.
     * @param {string} apiParams.resource - (Required) Name or id of the resource for this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.deployments.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);

    this.manifests = {};

    /**
     * Gets information about a specific manifest.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deployment - (Required) The name of the deployment for this request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.manifest - (Required) The name of the manifest for this request.
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.manifests.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/manifests/{manifest}', 'GET', apiParams, clientConfig);

    /**
     * Lists all manifests for a given deployment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deployment - (Required) The name of the deployment for this request.
     * @param {string} apiParams.filter - A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
     * @param {integer} apiParams.maxResults - The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
     * @param {string} apiParams.orderBy - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
     * @param {string} apiParams.pageToken - Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.manifests.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/manifests', 'GET', apiParams, clientConfig);

    this.operations = {};

    /**
     * Gets information about a specific operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.operation - (Required) The name of the operation for this request.
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/operations/{operation}', 'GET', apiParams, clientConfig);

    /**
     * Lists all operations for a project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
     * @param {integer} apiParams.maxResults - The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
     * @param {string} apiParams.orderBy - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
     * @param {string} apiParams.pageToken - Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/operations', 'GET', apiParams, clientConfig);

    this.resources = {};

    /**
     * Gets information about a single resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deployment - (Required) The name of the deployment for this request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {string} apiParams.resource - (Required) The name of the resource for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/resources/{resource}', 'GET', apiParams, clientConfig);

    /**
     * Lists all resources in a given deployment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deployment - (Required) The name of the deployment for this request.
     * @param {string} apiParams.filter - A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
     * @param {integer} apiParams.maxResults - The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
     * @param {string} apiParams.orderBy - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
     * @param {string} apiParams.pageToken - Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/resources', 'GET', apiParams, clientConfig);

    this.typeProviders = {};

    /**
     * Creates a type provider.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.typeProviders.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/typeProviders', 'POST', apiParams, clientConfig);

    /**
     * Updates a type provider.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {string} apiParams.typeProvider - (Required) The name of the type provider for this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.typeProviders.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}', 'PUT', apiParams, clientConfig);

    /**
     * Patches a type provider.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {string} apiParams.typeProvider - (Required) The name of the type provider for this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.typeProviders.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a type provider.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {string} apiParams.typeProvider - (Required) The name of the type provider for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.typeProviders.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets information about a specific type provider.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {string} apiParams.typeProvider - (Required) The name of the type provider for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.typeProviders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}', 'GET', apiParams, clientConfig);

    /**
     * Lists all resource type providers for Deployment Manager.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
     * @param {integer} apiParams.maxResults - The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
     * @param {string} apiParams.orderBy - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
     * @param {string} apiParams.pageToken - Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.typeProviders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/typeProviders', 'GET', apiParams, clientConfig);

    /**
     * Lists all the type info for a TypeProvider.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
     * @param {integer} apiParams.maxResults - The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
     * @param {string} apiParams.orderBy - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
     * @param {string} apiParams.pageToken - Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {string} apiParams.typeProvider - (Required) The name of the type provider for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.typeProviders.listTypes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}/types', 'GET', apiParams, clientConfig);

    /**
     * Gets a type info for a type provided by a TypeProvider.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.header.bypassBillingFilter - 
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {string} apiParams.type - (Required) The name of the type provider type for this request.
     * @param {string} apiParams.typeProvider - (Required) The name of the type provider for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.typeProviders.getType = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}/types/{type}', 'GET', apiParams, clientConfig);

    this.types = {};

    /**
     * Lists all resource types for Deployment Manager.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
     * @param {integer} apiParams.maxResults - The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
     * @param {string} apiParams.orderBy - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
     * @param {string} apiParams.pageToken - Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} apiParams.project - (Required) The project ID for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.types.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/v2beta/projects/{project}/global/types', 'GET', apiParams, clientConfig);
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
