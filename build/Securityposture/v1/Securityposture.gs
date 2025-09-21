
/**
 * Google Apps Script client library for the Security Posture API
 * Documentation URL: https://cloud.google.com/security-command-center
 * @class
 */
class Securityposture {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://securityposture.googleapis.com/';
    this._servicePath = '';


    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - (Required) The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.organizations.locations.postures = {};

    /**
     * Lists the most recent revisions of all Posture resources in a specified organization and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter to apply to the list of postures, in the format defined in [AIP-160: Filtering](https://google.aip.dev/160).
     * @param {integer} apiParams.pageSize - The maximum number of postures to return. The default value is `500`. If you exceed the maximum value of `1000`, then the service uses the maximum value.
     * @param {string} apiParams.pageToken - A pagination token returned from a previous request to list postures. Provide this token to retrieve the next page of results.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name, in the format `organizations/{organization}/locations/global`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.postures.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/postures', 'GET', apiParams, clientConfig);

    /**
     * Lists all revisions of a single Posture.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Posture, in the format `organizations/{organization}/locations/global/postures/{posture_id}`.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of posture revisions to return. The default value is `500`. If you exceed the maximum value of `1000`, then the service uses the maximum value.
     * @param {string} apiParams.pageToken - Optional. A pagination token from a previous request to list posture revisions. Provide this token to retrieve the next page of results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.postures.listRevisions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:listRevisions', 'GET', apiParams, clientConfig);

    /**
     * Gets a single revision of a Posture.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Posture, in the format `organizations/{organization}/locations/global/postures/{posture_id}`.
     * @param {string} apiParams.revisionId - Optional. The posture revision to retrieve. If not specified, the most recently updated revision is retrieved.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.postures.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new Posture.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name, in the format `organizations/{organization}/locations/global`.
     * @param {string} apiParams.postureId - Required. An identifier for the posture.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.postures.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/postures', 'POST', apiParams, clientConfig);

    /**
     * Updates a revision of an existing Posture. If the posture revision that you update is currently deployed, then a new revision of the posture is created. To prevent concurrent updates from overwriting each other, always follow the read-modify-write pattern when you update a posture: 1. Call GetPosture to get the current version of the posture. 2. Update the fields in the posture as needed. 3. Call UpdatePosture to update the posture. Ensure that your request includes the `etag` value from the GetPosture response. **Important:** If you omit the `etag` when you call UpdatePosture, then the updated posture unconditionally overwrites the existing posture.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Identifier. The name of the posture, in the format `organizations/{organization}/locations/global/postures/{posture_id}`.
     * @param {string} apiParams.revisionId - Required. The revision ID of the posture to update. If the posture revision that you update is currently deployed, then a new revision of the posture is created.
     * @param {string} apiParams.updateMask - Required. The fields in the Posture to update. You can update only the following fields: * Posture.description * Posture.policy_sets * Posture.state
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.postures.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes all revisions of a Posture. You can only delete a posture if none of its revisions are deployed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.etag - Optional. An opaque identifier for the current version of the posture. If you provide this value, then it must match the existing value. If the values don't match, then the request fails with an ABORTED error. If you omit this value, then the posture is deleted regardless of its current `etag` value.
     * @param {string} apiParams.name - (Required) Required. The name of the Posture, in the format `organizations/{organization}/locations/global/postures/{posture_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.postures.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Extracts existing policies from an organization, folder, or project, and applies them to another organization, folder, or project as a Posture. If the other organization, folder, or project already has a posture, then the result of the long-running operation is an ALREADY_EXISTS error.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name, in the format `organizations/{organization}/locations/global`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.postures.extract = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/postures:extract', 'POST', apiParams, clientConfig);

    this.organizations.locations.postureDeployments = {};

    /**
     * Lists every PostureDeployment in a project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter to apply to the list of postures, in the format defined in [AIP-160: Filtering](https://google.aip.dev/160).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of posture deployments to return. The default value is `500`. If you exceed the maximum value of `1000`, then the service uses the maximum value.
     * @param {string} apiParams.pageToken - Optional. A pagination token returned from a previous request to list posture deployments. Provide this token to retrieve the next page of results.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name, in the format `organizations/{organization}/locations/global`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.postureDeployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/postureDeployments', 'GET', apiParams, clientConfig);

    /**
     * Gets details for a PostureDeployment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the PostureDeployment, in the format `organizations/{organization}/locations/global/postureDeployments/{posture_deployment_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.postureDeployments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new PostureDeployment in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name, in the format `organizations/{organization}/locations/global`.
     * @param {string} apiParams.postureDeploymentId - Required. An identifier for the posture deployment.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.postureDeployments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/postureDeployments', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing PostureDeployment. To prevent concurrent updates from overwriting each other, always follow the read-modify-write pattern when you update a posture deployment: 1. Call GetPostureDeployment to get the current version of the deployment. 2. Update the fields in the deployment as needed. 3. Call UpdatePostureDeployment to update the deployment. Ensure that your request includes the `etag` value from the GetPostureDeployment response. **Important:** If you omit the `etag` when you call UpdatePostureDeployment, then the updated deployment unconditionally overwrites the existing deployment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Identifier. The name of the posture deployment, in the format `organizations/{organization}/locations/global/postureDeployments/{deployment_id}`.
     * @param {string} apiParams.updateMask - Required. The fields in the PostureDeployment to update. You can update only the following fields: * PostureDeployment.posture_id * PostureDeployment.posture_revision_id
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.postureDeployments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a PostureDeployment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.etag - Optional. An opaque identifier for the current version of the posture deployment. If you provide this value, then it must match the existing value. If the values don't match, then the request fails with an ABORTED error. If you omit this value, then the posture deployment is deleted regardless of its current `etag` value.
     * @param {string} apiParams.name - (Required) Required. The name of the posture deployment, in the format `organizations/{organization}/locations/global/postureDeployments/{posture_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.postureDeployments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.locations.postureTemplates = {};

    /**
     * Lists every PostureTemplate in a given organization and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter to apply to the list of postures, in the format defined in [AIP-160: Filtering](https://google.aip.dev/160).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of posture templates to return. The default value is `500`. If you exceed the maximum value of `1000`, then the service uses the maximum value.
     * @param {string} apiParams.pageToken - Optional. A pagination token returned from a previous request to list posture templates. Provide this token to retrieve the next page of results.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name, in the format `organizations/{organization}/locations/global`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.postureTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/postureTemplates', 'GET', apiParams, clientConfig);

    /**
     * Gets a single revision of a PostureTemplate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the PostureTemplate, in the format `organizations/{organization}/locations/global/postureTemplates/{posture_template}`.
     * @param {string} apiParams.revisionId - Optional. The posture template revision to retrieve. If not specified, the most recently updated revision is retrieved.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.postureTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.locations.reports = {};

    /**
     * Lists every Report in a given organization and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter to apply to the list of reports, in the format defined in [AIP-160: Filtering](https://google.aip.dev/160).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of reports to return. The default value is `500`. If you exceed the maximum value of `1000`, then the service uses the maximum value.
     * @param {string} apiParams.pageToken - Optional. A pagination token returned from a previous request to list reports. Provide this token to retrieve the next page of results.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name, in the format `organizations/{organization}/locations/global`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.reports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/reports', 'GET', apiParams, clientConfig);

    /**
     * Gets details for a Report.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the report, in the format `organizations/{organization}/locations/global/reports/{report_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.reports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Validates a specified infrastructure-as-code (IaC) configuration, and creates a Report with the validation results. Only Terraform configurations are supported. Only modified assets are validated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name, in the format `organizations/{organization}/locations/global`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.reports.createIaCValidationReport = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/reports:createIaCValidationReport', 'POST', apiParams, clientConfig);

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.extraLocationTypes - Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} apiParams.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} apiParams.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} apiParams.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/locations', 'GET', apiParams, clientConfig);

    /**
     * Gets information about a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name for the location.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
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
