
/**
 * Google Apps Script client library for the Audit Manager API
 * Documentation URL: https://cloud.google.com/assured-workloads/docs/audit-manager
 * Generator: https://github.com/mhawksey/Google-API-Client-Library-Generator-for-Apps-Script/
 * @class
 */
class Auditmanager {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://auditmanager.googleapis.com/';
    this._servicePath = '';


    this.organizations = {};

    this.organizations.locations = {};

    /**
     * Adds your project, folder, or organization to Audit Manager. This method creates the Audit Manager service agent in your workload and grants required permissions to the service agent. If you make this request on a workload that's already enrolled, then this method overrides the existing set of destinations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.scope - (Required) Required. Organization, folder, or project to enroll in Audit Manager, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.enrollResource = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+scope}:enrollResource', 'POST', apiParams, clientConfig);

    this.organizations.locations.auditSchedules = {};

    /**
     * Lists audit schedules in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous call, to retrieve the next page of results.
     * @param {string} apiParams.parent - (Required) Required. Parent for the audit schedule, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.auditSchedules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/auditSchedules', 'GET', apiParams, clientConfig);

    /**
     * Gets details of a single audit schedule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the audit schedule to retrieve, in one of the following formats: * `projects/{project}/locations/{location}/auditSchedules/{audit_schedule}` * `folders/{folder}/locations/{location}/auditSchedules/{audit_schedule}` * `organizations/{organization}/locations/{location}/auditSchedules/{audit_schedule}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.auditSchedules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing audit schedule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Unique identifier for the audit schedule. Format: projects/{project}/locations/{location}/auditSchedules/{audit_schedule} folders/{folder}/locations/{location}/auditSchedules/{audit_schedule} organizations/{organization}/locations/{location}/auditSchedules/{audit_schedule}
     * @param {string} apiParams.updateMask - Optional. List of fields to update.
     * @param {boolean} apiParams.validateOnly - Optional. If `true`, only validates the request and does not update the audit schedule. This executes standard request validation (such as schema, framework existence, scope, and IAM checks) and skips the apply phase. Use this field for the following purposes: * **Infrastructure as Code (IaC)**: Allow tools like Terraform to run dry-run mutations (e.g., `terraform plan`) without creating real resources or incurring costs. * **User Interface Validation**: Enable real-time form and permission validation in custom UIs before submitting requests. * **CI/CD & Automation**: Test your scripts, permissions, and parameters safely without consuming resource quotas.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.auditSchedules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Creates a new audit schedule in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.auditScheduleId - Required. ID to use for the audit schedule, which becomes the final component of the audit schedule's resource name.
     * @param {string} apiParams.parent - (Required) Required. Project or folder that this audit schedule is for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}`
     * @param {boolean} apiParams.validateOnly - Optional. If `true`, only validates the request and does not create the audit schedule. This executes standard request validation (such as schema, framework existence, scope, and IAM checks) and skips the apply phase. Use this field for the following purposes: * **Infrastructure as Code (IaC)**: Allow tools like Terraform to run dry-run mutations (e.g., `terraform plan`) without creating real resources or incurring costs. * **User Interface Validation**: Enable real-time form and permission validation in custom UIs before submitting requests. * **CI/CD & Automation**: Test your scripts, permissions, and parameters safely without consuming resource quotas.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.auditSchedules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/auditSchedules', 'POST', apiParams, clientConfig);

    this.organizations.locations.standards = {};

    this.organizations.locations.standards.controls = {};

    /**
     * Lists the controls that you must implement to become compliant to a regulatory standard.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous call, to retrieve the next page of results.
     * @param {string} apiParams.parent - (Required) Required. Standard to list controls for, in one of the following formats: * `projects/{project}/locations/{location}/standards/{standard}` * `folders/{folder}/locations/{location}/standards/{standard}` * `organizations/{organization}/locations/{location}/standards/{standard}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.standards.controls.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/controls', 'GET', apiParams, clientConfig);

    this.organizations.locations.auditScopeReports = {};

    /**
     * Generates an audit scope report for the given standard. The report includes the following: * The technical attributes and constraints that Audit Manager uses to verify your compliance with a framework. * A list of Google Cloud services and resources that are within the scope of the framework.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.scope - (Required) Required. Project or folder that the audit scope report is generated for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.auditScopeReports.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+scope}/auditScopeReports:generate', 'POST', apiParams, clientConfig);

    this.organizations.locations.auditReports = {};

    /**
     * Lists the audit reports for the organization, folder, or project that you specify as the parent scope.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous call, to retrieve the next page of results.
     * @param {string} apiParams.parent - (Required) Required. Parent organization, folder, or project to list reports for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.auditReports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/auditReports', 'GET', apiParams, clientConfig);

    /**
     * Registers audit report generation requests. This method returns the operation identifier that you can use to track the report generation progress.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.scope - (Required) Required. Organization, folder, or project that the audit applies to, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.auditReports.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+scope}/auditReports:generate', 'POST', apiParams, clientConfig);

    /**
     * Gets the full metadata and findings for an audit report.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the audit report, in one of the following formats: * `projects/{project}/locations/{location}/auditReports/{audit_report}` * `folders/{folder}/locations/{location}/auditReports/{audit_report}` * `organizations/{organization}/locations/{location}/auditReports/{audit_report}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.auditReports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.locations.operations = {};

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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - (Required) The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {boolean} apiParams.returnPartialSuccess - When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);

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

    this.organizations.locations.resourceEnrollmentStatuses = {};

    /**
     * Gets a resource and its enrollment status.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource enrollment status, in one of the following formats: * `folders/{folder}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}` * `projects/{project}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}` * `organizations/{organization}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.resourceEnrollmentStatuses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all the folders and projects in an organization or folder, along with their enrollments.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous call, to retrieve the next page of results.
     * @param {string} apiParams.parent - (Required) Required. Parent organization or folder to list enrollment statuses for, in one of the following formats: * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.resourceEnrollmentStatuses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourceEnrollmentStatuses', 'GET', apiParams, clientConfig);

    this.organizations.locations.operationDetails = {};

    /**
     * Gets details about the long-running operation to generate audit reports.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.operationDetails.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.locations.operationIds = {};

    /**
     * Gets details about the long-running operation to generate audit reports.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.operationIds.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects = {};

    this.projects.locations = {};

    /**
     * Gets information about a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name for the location.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Adds your project, folder, or organization to Audit Manager. This method creates the Audit Manager service agent in your workload and grants required permissions to the service agent. If you make this request on a workload that's already enrolled, then this method overrides the existing set of destinations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.scope - (Required) Required. Organization, folder, or project to enroll in Audit Manager, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.enrollResource = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+scope}:enrollResource', 'POST', apiParams, clientConfig);

    /**
     * Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.extraLocationTypes - Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} apiParams.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} apiParams.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} apiParams.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/locations', 'GET', apiParams, clientConfig);

    this.projects.locations.resourceEnrollmentStatuses = {};

    /**
     * Gets a resource and its enrollment status.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource enrollment status, in one of the following formats: * `folders/{folder}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}` * `projects/{project}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}` * `organizations/{organization}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.resourceEnrollmentStatuses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.standards = {};

    this.projects.locations.standards.controls = {};

    /**
     * Lists the controls that you must implement to become compliant to a regulatory standard.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous call, to retrieve the next page of results.
     * @param {string} apiParams.parent - (Required) Required. Standard to list controls for, in one of the following formats: * `projects/{project}/locations/{location}/standards/{standard}` * `folders/{folder}/locations/{location}/standards/{standard}` * `organizations/{organization}/locations/{location}/standards/{standard}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.standards.controls.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/controls', 'GET', apiParams, clientConfig);

    this.projects.locations.auditScopeReports = {};

    /**
     * Generates an audit scope report for the given standard. The report includes the following: * The technical attributes and constraints that Audit Manager uses to verify your compliance with a framework. * A list of Google Cloud services and resources that are within the scope of the framework.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.scope - (Required) Required. Project or folder that the audit scope report is generated for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.auditScopeReports.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+scope}/auditScopeReports:generate', 'POST', apiParams, clientConfig);

    this.projects.locations.operationIds = {};

    /**
     * Gets details about the long-running operation to generate audit reports.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operationIds.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.operationDetails = {};

    /**
     * Gets details about the long-running operation to generate audit reports.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operationDetails.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.auditSchedules = {};

    /**
     * Gets details of a single audit schedule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the audit schedule to retrieve, in one of the following formats: * `projects/{project}/locations/{location}/auditSchedules/{audit_schedule}` * `folders/{folder}/locations/{location}/auditSchedules/{audit_schedule}` * `organizations/{organization}/locations/{location}/auditSchedules/{audit_schedule}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.auditSchedules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing audit schedule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Unique identifier for the audit schedule. Format: projects/{project}/locations/{location}/auditSchedules/{audit_schedule} folders/{folder}/locations/{location}/auditSchedules/{audit_schedule} organizations/{organization}/locations/{location}/auditSchedules/{audit_schedule}
     * @param {string} apiParams.updateMask - Optional. List of fields to update.
     * @param {boolean} apiParams.validateOnly - Optional. If `true`, only validates the request and does not update the audit schedule. This executes standard request validation (such as schema, framework existence, scope, and IAM checks) and skips the apply phase. Use this field for the following purposes: * **Infrastructure as Code (IaC)**: Allow tools like Terraform to run dry-run mutations (e.g., `terraform plan`) without creating real resources or incurring costs. * **User Interface Validation**: Enable real-time form and permission validation in custom UIs before submitting requests. * **CI/CD & Automation**: Test your scripts, permissions, and parameters safely without consuming resource quotas.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.auditSchedules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Creates a new audit schedule in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.auditScheduleId - Required. ID to use for the audit schedule, which becomes the final component of the audit schedule's resource name.
     * @param {string} apiParams.parent - (Required) Required. Project or folder that this audit schedule is for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}`
     * @param {boolean} apiParams.validateOnly - Optional. If `true`, only validates the request and does not create the audit schedule. This executes standard request validation (such as schema, framework existence, scope, and IAM checks) and skips the apply phase. Use this field for the following purposes: * **Infrastructure as Code (IaC)**: Allow tools like Terraform to run dry-run mutations (e.g., `terraform plan`) without creating real resources or incurring costs. * **User Interface Validation**: Enable real-time form and permission validation in custom UIs before submitting requests. * **CI/CD & Automation**: Test your scripts, permissions, and parameters safely without consuming resource quotas.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.auditSchedules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/auditSchedules', 'POST', apiParams, clientConfig);

    /**
     * Lists audit schedules in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous call, to retrieve the next page of results.
     * @param {string} apiParams.parent - (Required) Required. Parent for the audit schedule, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.auditSchedules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/auditSchedules', 'GET', apiParams, clientConfig);

    this.projects.locations.auditReports = {};

    /**
     * Lists the audit reports for the organization, folder, or project that you specify as the parent scope.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous call, to retrieve the next page of results.
     * @param {string} apiParams.parent - (Required) Required. Parent organization, folder, or project to list reports for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.auditReports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/auditReports', 'GET', apiParams, clientConfig);

    /**
     * Gets the full metadata and findings for an audit report.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the audit report, in one of the following formats: * `projects/{project}/locations/{location}/auditReports/{audit_report}` * `folders/{folder}/locations/{location}/auditReports/{audit_report}` * `organizations/{organization}/locations/{location}/auditReports/{audit_report}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.auditReports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Registers audit report generation requests. This method returns the operation identifier that you can use to track the report generation progress.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.scope - (Required) Required. Organization, folder, or project that the audit applies to, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.auditReports.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+scope}/auditReports:generate', 'POST', apiParams, clientConfig);

    this.projects.locations.operations = {};

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - (Required) The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {boolean} apiParams.returnPartialSuccess - When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.folders = {};

    this.folders.locations = {};

    /**
     * Adds your project, folder, or organization to Audit Manager. This method creates the Audit Manager service agent in your workload and grants required permissions to the service agent. If you make this request on a workload that's already enrolled, then this method overrides the existing set of destinations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.scope - (Required) Required. Organization, folder, or project to enroll in Audit Manager, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.enrollResource = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+scope}:enrollResource', 'POST', apiParams, clientConfig);

    this.folders.locations.auditReports = {};

    /**
     * Registers audit report generation requests. This method returns the operation identifier that you can use to track the report generation progress.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.scope - (Required) Required. Organization, folder, or project that the audit applies to, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.auditReports.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+scope}/auditReports:generate', 'POST', apiParams, clientConfig);

    /**
     * Lists the audit reports for the organization, folder, or project that you specify as the parent scope.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous call, to retrieve the next page of results.
     * @param {string} apiParams.parent - (Required) Required. Parent organization, folder, or project to list reports for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.auditReports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/auditReports', 'GET', apiParams, clientConfig);

    /**
     * Gets the full metadata and findings for an audit report.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the audit report, in one of the following formats: * `projects/{project}/locations/{location}/auditReports/{audit_report}` * `folders/{folder}/locations/{location}/auditReports/{audit_report}` * `organizations/{organization}/locations/{location}/auditReports/{audit_report}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.auditReports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.folders.locations.auditScopeReports = {};

    /**
     * Generates an audit scope report for the given standard. The report includes the following: * The technical attributes and constraints that Audit Manager uses to verify your compliance with a framework. * A list of Google Cloud services and resources that are within the scope of the framework.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.scope - (Required) Required. Project or folder that the audit scope report is generated for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.auditScopeReports.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+scope}/auditScopeReports:generate', 'POST', apiParams, clientConfig);

    this.folders.locations.auditSchedules = {};

    /**
     * Creates a new audit schedule in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.auditScheduleId - Required. ID to use for the audit schedule, which becomes the final component of the audit schedule's resource name.
     * @param {string} apiParams.parent - (Required) Required. Project or folder that this audit schedule is for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}`
     * @param {boolean} apiParams.validateOnly - Optional. If `true`, only validates the request and does not create the audit schedule. This executes standard request validation (such as schema, framework existence, scope, and IAM checks) and skips the apply phase. Use this field for the following purposes: * **Infrastructure as Code (IaC)**: Allow tools like Terraform to run dry-run mutations (e.g., `terraform plan`) without creating real resources or incurring costs. * **User Interface Validation**: Enable real-time form and permission validation in custom UIs before submitting requests. * **CI/CD & Automation**: Test your scripts, permissions, and parameters safely without consuming resource quotas.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.auditSchedules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/auditSchedules', 'POST', apiParams, clientConfig);

    /**
     * Gets details of a single audit schedule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the audit schedule to retrieve, in one of the following formats: * `projects/{project}/locations/{location}/auditSchedules/{audit_schedule}` * `folders/{folder}/locations/{location}/auditSchedules/{audit_schedule}` * `organizations/{organization}/locations/{location}/auditSchedules/{audit_schedule}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.auditSchedules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists audit schedules in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous call, to retrieve the next page of results.
     * @param {string} apiParams.parent - (Required) Required. Parent for the audit schedule, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.auditSchedules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/auditSchedules', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing audit schedule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Unique identifier for the audit schedule. Format: projects/{project}/locations/{location}/auditSchedules/{audit_schedule} folders/{folder}/locations/{location}/auditSchedules/{audit_schedule} organizations/{organization}/locations/{location}/auditSchedules/{audit_schedule}
     * @param {string} apiParams.updateMask - Optional. List of fields to update.
     * @param {boolean} apiParams.validateOnly - Optional. If `true`, only validates the request and does not update the audit schedule. This executes standard request validation (such as schema, framework existence, scope, and IAM checks) and skips the apply phase. Use this field for the following purposes: * **Infrastructure as Code (IaC)**: Allow tools like Terraform to run dry-run mutations (e.g., `terraform plan`) without creating real resources or incurring costs. * **User Interface Validation**: Enable real-time form and permission validation in custom UIs before submitting requests. * **CI/CD & Automation**: Test your scripts, permissions, and parameters safely without consuming resource quotas.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.auditSchedules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.locations.operationDetails = {};

    /**
     * Gets details about the long-running operation to generate audit reports.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.operationDetails.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.folders.locations.standards = {};

    this.folders.locations.standards.controls = {};

    /**
     * Lists the controls that you must implement to become compliant to a regulatory standard.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous call, to retrieve the next page of results.
     * @param {string} apiParams.parent - (Required) Required. Standard to list controls for, in one of the following formats: * `projects/{project}/locations/{location}/standards/{standard}` * `folders/{folder}/locations/{location}/standards/{standard}` * `organizations/{organization}/locations/{location}/standards/{standard}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.standards.controls.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/controls', 'GET', apiParams, clientConfig);

    this.folders.locations.operationIds = {};

    /**
     * Gets details about the long-running operation to generate audit reports.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.operationIds.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.folders.locations.resourceEnrollmentStatuses = {};

    /**
     * Gets a resource and its enrollment status.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource enrollment status, in one of the following formats: * `folders/{folder}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}` * `projects/{project}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}` * `organizations/{organization}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.resourceEnrollmentStatuses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all the folders and projects in an organization or folder, along with their enrollments.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous call, to retrieve the next page of results.
     * @param {string} apiParams.parent - (Required) Required. Parent organization or folder to list enrollment statuses for, in one of the following formats: * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.resourceEnrollmentStatuses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourceEnrollmentStatuses', 'GET', apiParams, clientConfig);
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
