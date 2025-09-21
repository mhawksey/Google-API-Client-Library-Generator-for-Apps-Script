
/**
 * Google Apps Script client library for the SaaS Runtime API
 * Documentation URL: https://cloud.google.com/saas-runtime/docs
 * @class
 */
class Saasservicemgmt {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://saasservicemgmt.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.extraLocationTypes - Optional. Unless explicitly documented otherwise, don't use this unsupported field which is primarily intended for internal usage.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} apiParams.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} apiParams.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} apiParams.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/locations', 'GET', apiParams, clientConfig);

    /**
     * Gets information about a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name for the location.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.saas = {};

    /**
     * Retrieve a collection of saas.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter the list as specified in https://google.aip.dev/160.
     * @param {string} apiParams.orderBy - Order results as specified in https://google.aip.dev/132.
     * @param {integer} apiParams.pageSize - The maximum number of saas to send per page.
     * @param {string} apiParams.pageToken - The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent of the saas.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.saas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/saas', 'GET', apiParams, clientConfig);

    /**
     * Retrieve a single saas.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the resource within a service.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.saas.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Create a new saas.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent of the saas.
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.saasId - Required. The ID value for the new saas.
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.saas.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/saas', 'POST', apiParams, clientConfig);

    /**
     * Update a single saas.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/saas/{saas}"
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.updateMask - Field mask is used to specify the fields to be overwritten in the Saas resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Saas will be overwritten.
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.saas.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete a single saas.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.etag - The etag known to the client for the expected state of the saas. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the saas. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     * @param {string} apiParams.name - (Required) Required. The resource name of the resource within a service.
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.saas.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.tenants = {};

    /**
     * Retrieve a collection of tenants.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter the list as specified in https://google.aip.dev/160.
     * @param {string} apiParams.orderBy - Order results as specified in https://google.aip.dev/132.
     * @param {integer} apiParams.pageSize - The maximum number of tenants to send per page.
     * @param {string} apiParams.pageToken - The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent of the tenant.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.tenants.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/tenants', 'GET', apiParams, clientConfig);

    /**
     * Retrieve a single tenant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the resource within a service.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.tenants.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Create a new tenant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent of the tenant.
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.tenantId - Required. The ID value for the new tenant.
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.tenants.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/tenants', 'POST', apiParams, clientConfig);

    /**
     * Update a single tenant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/tenants/{tenant}"
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.updateMask - Field mask is used to specify the fields to be overwritten in the Tenant resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Tenant will be overwritten.
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.tenants.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete a single tenant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.etag - The etag known to the client for the expected state of the tenant. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the tenant. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     * @param {string} apiParams.name - (Required) Required. The resource name of the resource within a service.
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.tenants.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.unitKinds = {};

    /**
     * Retrieve a collection of unit kinds.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter the list as specified in https://google.aip.dev/160.
     * @param {string} apiParams.orderBy - Order results as specified in https://google.aip.dev/132.
     * @param {integer} apiParams.pageSize - The maximum number of unit kinds to send per page.
     * @param {string} apiParams.pageToken - The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent of the unit kind.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.unitKinds.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/unitKinds', 'GET', apiParams, clientConfig);

    /**
     * Retrieve a single unit kind.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the resource within a service.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.unitKinds.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Create a new unit kind.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent of the unit kind.
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.unitKindId - Required. The ID value for the new unit kind.
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.unitKinds.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/unitKinds', 'POST', apiParams, clientConfig);

    /**
     * Update a single unit kind.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitKinds/{unitKind}"
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.updateMask - Field mask is used to specify the fields to be overwritten in the UnitKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitKind will be overwritten.
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.unitKinds.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete a single unit kind.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.etag - The etag known to the client for the expected state of the unit kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     * @param {string} apiParams.name - (Required) Required. The resource name of the resource within a service.
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.unitKinds.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.units = {};

    /**
     * Retrieve a collection of units.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter the list as specified in https://google.aip.dev/160.
     * @param {string} apiParams.orderBy - Order results as specified in https://google.aip.dev/132.
     * @param {integer} apiParams.pageSize - The maximum number of units to send per page.
     * @param {string} apiParams.pageToken - The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent of the unit.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.units.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/units', 'GET', apiParams, clientConfig);

    /**
     * Retrieve a single unit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the resource within a service.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.units.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Create a new unit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent of the unit.
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.unitId - Required. The ID value for the new unit.
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.units.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/units', 'POST', apiParams, clientConfig);

    /**
     * Update a single unit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/units/{unit}"
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.updateMask - Field mask is used to specify the fields to be overwritten in the Unit resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Unit will be overwritten.
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.units.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete a single unit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.etag - The etag known to the client for the expected state of the unit. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     * @param {string} apiParams.name - (Required) Required. The resource name of the resource within a service.
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.units.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.unitOperations = {};

    /**
     * Retrieve a collection of unit operations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter the list as specified in https://google.aip.dev/160.
     * @param {string} apiParams.orderBy - Order results as specified in https://google.aip.dev/132.
     * @param {integer} apiParams.pageSize - The maximum number of unit operations to send per page.
     * @param {string} apiParams.pageToken - The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent of the unit operation.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.unitOperations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/unitOperations', 'GET', apiParams, clientConfig);

    /**
     * Retrieve a single unit operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the resource within a service.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.unitOperations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Create a new unit operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent of the unit operation.
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.unitOperationId - Required. The ID value for the new unit operation.
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.unitOperations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/unitOperations', 'POST', apiParams, clientConfig);

    /**
     * Update a single unit operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitOperations/{unitOperation}"
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.updateMask - Field mask is used to specify the fields to be overwritten in the UnitOperation resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitOperation will be overwritten.
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.unitOperations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete a single unit operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.etag - The etag known to the client for the expected state of the unit operation. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit operation. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     * @param {string} apiParams.name - (Required) Required. The resource name of the resource within a service.
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.unitOperations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.releases = {};

    /**
     * Retrieve a collection of releases.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter the list as specified in https://google.aip.dev/160.
     * @param {string} apiParams.orderBy - Order results as specified in https://google.aip.dev/132.
     * @param {integer} apiParams.pageSize - The maximum number of releases to send per page.
     * @param {string} apiParams.pageToken - The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent of the release.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.releases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', apiParams, clientConfig);

    /**
     * Retrieve a single release.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the resource within a service.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.releases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Create a new release.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent of the release.
     * @param {string} apiParams.releaseId - Required. The ID value for the new release.
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.releases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', apiParams, clientConfig);

    /**
     * Update a single release.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/releases/{release}"
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.updateMask - Field mask is used to specify the fields to be overwritten in the Release resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Release will be overwritten.
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.releases.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete a single release.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.etag - The etag known to the client for the expected state of the release. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the release. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     * @param {string} apiParams.name - (Required) Required. The resource name of the resource within a service.
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.releases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.rollouts = {};

    /**
     * Retrieve a collection of rollouts.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter the list as specified in https://google.aip.dev/160.
     * @param {string} apiParams.orderBy - Order results as specified in https://google.aip.dev/132.
     * @param {integer} apiParams.pageSize - The maximum number of rollouts to send per page.
     * @param {string} apiParams.pageToken - The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent of the rollout.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.rollouts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/rollouts', 'GET', apiParams, clientConfig);

    /**
     * Retrieve a single rollout.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the resource within a service.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.rollouts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Create a new rollout.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent of the rollout.
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.rolloutId - Required. The ID value for the new rollout.
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.rollouts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/rollouts', 'POST', apiParams, clientConfig);

    /**
     * Update a single rollout.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollout/{rollout_id}"
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.updateMask - Field mask is used to specify the fields to be overwritten in the Rollout resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Rollout will be overwritten.
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.rollouts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete a single rollout.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.etag - The etag known to the client for the expected state of the rollout. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     * @param {string} apiParams.name - (Required) Required. The resource name of the resource within a service.
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.rollouts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.rolloutKinds = {};

    /**
     * Retrieve a collection of rollout kinds.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter the list as specified in https://google.aip.dev/160.
     * @param {string} apiParams.orderBy - Order results as specified in https://google.aip.dev/132.
     * @param {integer} apiParams.pageSize - The maximum number of rollout kinds to send per page.
     * @param {string} apiParams.pageToken - The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent of the rollout kind.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.rolloutKinds.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/rolloutKinds', 'GET', apiParams, clientConfig);

    /**
     * Retrieve a single rollout kind.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the resource within a service.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.rolloutKinds.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Create a new rollout kind.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent of the rollout kind.
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.rolloutKindId - Required. The ID value for the new rollout kind.
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.rolloutKinds.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/rolloutKinds', 'POST', apiParams, clientConfig);

    /**
     * Update a single rollout kind.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rolloutKinds/{rollout_kind_id}"
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.updateMask - Field mask is used to specify the fields to be overwritten in the RolloutKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the RolloutKind will be overwritten.
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.rolloutKinds.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete a single rollout kind.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.etag - The etag known to the client for the expected state of the rollout kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     * @param {string} apiParams.name - (Required) Required. The resource name of the resource within a service.
     * @param {string} apiParams.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} apiParams.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.rolloutKinds.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
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
