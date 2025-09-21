
/**
 * Google Apps Script client library for the Cloud Talent Solution API
 * Documentation URL: https://cloud.google.com/talent-solution/job-search/docs/
 * @class
 */
class Jobs {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://jobs.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+name}', 'GET', apiParams, clientConfig);

    this.projects.tenants = {};

    /**
     * Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.company - If provided, restricts completion to specified company. The format is "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for example, "projects/foo/tenants/bar/companies/baz".
     * @param {string} apiParams.languageCodes - The list of languages of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). The maximum number of allowed characters is 255.
     * @param {integer} apiParams.pageSize - Required. Completion result count. The maximum allowed page size is 10.
     * @param {string} apiParams.query - Required. The query used to generate suggestions. The maximum number of allowed characters is 255.
     * @param {string} apiParams.scope - The scope of the completion. The defaults is CompletionScope.PUBLIC.
     * @param {string} apiParams.tenant - (Required) Required. Resource name of tenant the completion is performed within. The format is "projects/{project_id}/tenants/{tenant_id}", for example, "projects/foo/tenants/bar".
     * @param {string} apiParams.type - The completion topic. The default is CompletionType.COMBINED.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.completeQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+tenant}:completeQuery', 'GET', apiParams, clientConfig);

    /**
     * Creates a new tenant entity.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the project under which the tenant is created. The format is "projects/{project_id}", for example, "projects/foo".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+parent}/tenants', 'POST', apiParams, clientConfig);

    /**
     * Retrieves specified tenant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the tenant to be retrieved. The format is "projects/{project_id}/tenants/{tenant_id}", for example, "projects/foo/tenants/bar".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates specified tenant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required during tenant update. The resource name for a tenant. This is generated by the service when a tenant is created. The format is "projects/{project_id}/tenants/{tenant_id}", for example, "projects/foo/tenants/bar".
     * @param {string} apiParams.updateMask - Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in tenant are updated. Otherwise all the fields are updated. A field mask to specify the tenant fields to be updated. Only top level fields of Tenant are supported.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes specified tenant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the tenant to be deleted. The format is "projects/{project_id}/tenants/{tenant_id}", for example, "projects/foo/tenants/bar".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists all tenants associated with the project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of tenants to be returned, at most 100. Default is 100 if a non-positive number is provided.
     * @param {string} apiParams.pageToken - The starting indicator from which to return results.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the project under which the tenant is created. The format is "projects/{project_id}", for example, "projects/foo".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+parent}/tenants', 'GET', apiParams, clientConfig);

    this.projects.tenants.companies = {};

    /**
     * Creates a new company entity.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the tenant under which the company is created. The format is "projects/{project_id}/tenants/{tenant_id}", for example, "projects/foo/tenants/bar".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.companies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+parent}/companies', 'POST', apiParams, clientConfig);

    /**
     * Retrieves specified company.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the company to be retrieved. The format is "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for example, "projects/api-test-project/tenants/foo/companies/bar".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.companies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates specified company.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required during company update. The resource name for a company. This is generated by the service when a company is created. The format is "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for example, "projects/foo/tenants/bar/companies/baz".
     * @param {string} apiParams.updateMask - Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in company are updated. Otherwise all the fields are updated. A field mask to specify the company fields to be updated. Only top level fields of Company are supported.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.companies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes specified company. Prerequisite: The company has no jobs associated with it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the company to be deleted. The format is "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for example, "projects/foo/tenants/bar/companies/baz".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.companies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists all companies associated with the project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of companies to be returned, at most 100. Default is 100 if a non-positive number is provided.
     * @param {string} apiParams.pageToken - The starting indicator from which to return results.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the tenant under which the company is created. The format is "projects/{project_id}/tenants/{tenant_id}", for example, "projects/foo/tenants/bar".
     * @param {boolean} apiParams.requireOpenJobs - Set to true if the companies requested must have open jobs. Defaults to false. If true, at most page_size of companies are fetched, among which only those with open jobs are returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.companies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+parent}/companies', 'GET', apiParams, clientConfig);

    this.projects.tenants.clientEvents = {};

    /**
     * Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the tenant under which the event is created. The format is "projects/{project_id}/tenants/{tenant_id}", for example, "projects/foo/tenants/bar".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.clientEvents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+parent}/clientEvents', 'POST', apiParams, clientConfig);

    this.projects.tenants.jobs = {};

    /**
     * Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id}/tenants/{tenant_id}". For example, "projects/foo/tenants/bar".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.jobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+parent}/jobs', 'POST', apiParams, clientConfig);

    /**
     * Begins executing a batch create jobs operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id}/tenants/{tenant_id}". For example, "projects/foo/tenants/bar".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.jobs.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+parent}/jobs:batchCreate', 'POST', apiParams, clientConfig);

    /**
     * Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the job to retrieve. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}". For example, "projects/foo/tenants/bar/jobs/baz".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.jobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required during job update. The resource name for the job. This is generated by the service when a job is created. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}". For example, "projects/foo/tenants/bar/jobs/baz". Use of this field in job queries and API calls is preferred over the use of requisition_id since this value is unique.
     * @param {string} apiParams.updateMask - Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in job are updated. Otherwise all the fields are updated. A field mask to restrict the fields that are updated. Only top level fields of Job are supported.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.jobs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Begins executing a batch update jobs operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id}/tenants/{tenant_id}". For example, "projects/foo/tenants/bar".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.jobs.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+parent}/jobs:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the job to be deleted. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}". For example, "projects/foo/tenants/bar/jobs/baz".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.jobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Begins executing a batch delete jobs operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id}/tenants/{tenant_id}". For example, "projects/foo/tenants/bar". The parent of all of the jobs specified in `names` must match this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.jobs.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+parent}/jobs:batchDelete', 'POST', apiParams, clientConfig);

    /**
     * Lists jobs by filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Required. The filter string specifies the jobs to be enumerated. Supported operator: =, AND The fields eligible for filtering are: * `companyName` * `requisitionId` * `status` Available values: OPEN, EXPIRED, ALL. Defaults to OPEN if no value is specified. At least one of `companyName` and `requisitionId` must present or an INVALID_ARGUMENT error is thrown. Sample Query: * companyName = "projects/foo/tenants/bar/companies/baz" * companyName = "projects/foo/tenants/bar/companies/baz" AND requisitionId = "req-1" * companyName = "projects/foo/tenants/bar/companies/baz" AND status = "EXPIRED" * requisitionId = "req-1" * requisitionId = "req-1" AND status = "EXPIRED"
     * @param {string} apiParams.jobView - The desired job attributes returned for jobs in the search response. Defaults to JobView.JOB_VIEW_FULL if no value is specified.
     * @param {integer} apiParams.pageSize - The maximum number of jobs to be returned per page of results. If job_view is set to JobView.JOB_VIEW_ID_ONLY, the maximum allowed page size is 1000. Otherwise, the maximum allowed page size is 100. Default is 100 if empty or a number < 1 is specified.
     * @param {string} apiParams.pageToken - The starting point of a query result.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id}/tenants/{tenant_id}". For example, "projects/foo/tenants/bar".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.jobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+parent}/jobs', 'GET', apiParams, clientConfig);

    /**
     * Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the tenant to search within. The format is "projects/{project_id}/tenants/{tenant_id}". For example, "projects/foo/tenants/bar".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.jobs.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+parent}/jobs:search', 'POST', apiParams, clientConfig);

    /**
     * Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the tenant to search within. The format is "projects/{project_id}/tenants/{tenant_id}". For example, "projects/foo/tenants/bar".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.jobs.searchForAlert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+parent}/jobs:searchForAlert', 'POST', apiParams, clientConfig);
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
