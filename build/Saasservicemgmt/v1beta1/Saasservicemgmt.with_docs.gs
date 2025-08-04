
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://saasservicemgmt.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.saas = {};

    /**
     * Retrieve a collection of saas.
     * @param {string} params.filter - Filter the list as specified in https://google.aip.dev/160.
     * @param {string} params.orderBy - Order results as specified in https://google.aip.dev/132.
     * @param {integer} params.pageSize - The maximum number of saas to send per page.
     * @param {string} params.pageToken - The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent of the saas.
     * @return {object} The API response object.
     */
    this.projects.locations.saas.list = (params) => this._makeRequest('v1beta1/{+parent}/saas', 'GET', params);

    /**
     * Retrieve a single saas.
     * @param {string} params.name - (Required) Required. The resource name of the resource within a service.
     * @return {object} The API response object.
     */
    this.projects.locations.saas.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Create a new saas.
     * @param {string} params.parent - (Required) Required. The parent of the saas.
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.saasId - Required. The ID value for the new saas.
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.saas.create = (params) => this._makeRequest('v1beta1/{+parent}/saas', 'POST', params);

    /**
     * Update a single saas.
     * @param {string} params.name - (Required) Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/saas/{saas}"
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the Saas resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Saas will be overwritten.
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.saas.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Delete a single saas.
     * @param {string} params.etag - The etag known to the client for the expected state of the saas. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the saas. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     * @param {string} params.name - (Required) Required. The resource name of the resource within a service.
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @return {object} The API response object.
     */
    this.projects.locations.saas.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.tenants = {};

    /**
     * Retrieve a collection of tenants.
     * @param {string} params.filter - Filter the list as specified in https://google.aip.dev/160.
     * @param {string} params.orderBy - Order results as specified in https://google.aip.dev/132.
     * @param {integer} params.pageSize - The maximum number of tenants to send per page.
     * @param {string} params.pageToken - The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent of the tenant.
     * @return {object} The API response object.
     */
    this.projects.locations.tenants.list = (params) => this._makeRequest('v1beta1/{+parent}/tenants', 'GET', params);

    /**
     * Retrieve a single tenant.
     * @param {string} params.name - (Required) Required. The resource name of the resource within a service.
     * @return {object} The API response object.
     */
    this.projects.locations.tenants.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Create a new tenant.
     * @param {string} params.parent - (Required) Required. The parent of the tenant.
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.tenantId - Required. The ID value for the new tenant.
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tenants.create = (params) => this._makeRequest('v1beta1/{+parent}/tenants', 'POST', params);

    /**
     * Update a single tenant.
     * @param {string} params.name - (Required) Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/tenants/{tenant}"
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the Tenant resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Tenant will be overwritten.
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tenants.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Delete a single tenant.
     * @param {string} params.etag - The etag known to the client for the expected state of the tenant. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the tenant. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     * @param {string} params.name - (Required) Required. The resource name of the resource within a service.
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @return {object} The API response object.
     */
    this.projects.locations.tenants.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.unitKinds = {};

    /**
     * Retrieve a collection of unit kinds.
     * @param {string} params.filter - Filter the list as specified in https://google.aip.dev/160.
     * @param {string} params.orderBy - Order results as specified in https://google.aip.dev/132.
     * @param {integer} params.pageSize - The maximum number of unit kinds to send per page.
     * @param {string} params.pageToken - The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent of the unit kind.
     * @return {object} The API response object.
     */
    this.projects.locations.unitKinds.list = (params) => this._makeRequest('v1beta1/{+parent}/unitKinds', 'GET', params);

    /**
     * Retrieve a single unit kind.
     * @param {string} params.name - (Required) Required. The resource name of the resource within a service.
     * @return {object} The API response object.
     */
    this.projects.locations.unitKinds.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Create a new unit kind.
     * @param {string} params.parent - (Required) Required. The parent of the unit kind.
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.unitKindId - Required. The ID value for the new unit kind.
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.unitKinds.create = (params) => this._makeRequest('v1beta1/{+parent}/unitKinds', 'POST', params);

    /**
     * Update a single unit kind.
     * @param {string} params.name - (Required) Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitKinds/{unitKind}"
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the UnitKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitKind will be overwritten.
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.unitKinds.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Delete a single unit kind.
     * @param {string} params.etag - The etag known to the client for the expected state of the unit kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     * @param {string} params.name - (Required) Required. The resource name of the resource within a service.
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @return {object} The API response object.
     */
    this.projects.locations.unitKinds.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.units = {};

    /**
     * Retrieve a collection of units.
     * @param {string} params.filter - Filter the list as specified in https://google.aip.dev/160.
     * @param {string} params.orderBy - Order results as specified in https://google.aip.dev/132.
     * @param {integer} params.pageSize - The maximum number of units to send per page.
     * @param {string} params.pageToken - The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent of the unit.
     * @return {object} The API response object.
     */
    this.projects.locations.units.list = (params) => this._makeRequest('v1beta1/{+parent}/units', 'GET', params);

    /**
     * Retrieve a single unit.
     * @param {string} params.name - (Required) Required. The resource name of the resource within a service.
     * @return {object} The API response object.
     */
    this.projects.locations.units.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Create a new unit.
     * @param {string} params.parent - (Required) Required. The parent of the unit.
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.unitId - Required. The ID value for the new unit.
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.units.create = (params) => this._makeRequest('v1beta1/{+parent}/units', 'POST', params);

    /**
     * Update a single unit.
     * @param {string} params.name - (Required) Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/units/{unit}"
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the Unit resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Unit will be overwritten.
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.units.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Delete a single unit.
     * @param {string} params.etag - The etag known to the client for the expected state of the unit. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     * @param {string} params.name - (Required) Required. The resource name of the resource within a service.
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @return {object} The API response object.
     */
    this.projects.locations.units.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.unitOperations = {};

    /**
     * Retrieve a collection of unit operations.
     * @param {string} params.filter - Filter the list as specified in https://google.aip.dev/160.
     * @param {string} params.orderBy - Order results as specified in https://google.aip.dev/132.
     * @param {integer} params.pageSize - The maximum number of unit operations to send per page.
     * @param {string} params.pageToken - The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent of the unit operation.
     * @return {object} The API response object.
     */
    this.projects.locations.unitOperations.list = (params) => this._makeRequest('v1beta1/{+parent}/unitOperations', 'GET', params);

    /**
     * Retrieve a single unit operation.
     * @param {string} params.name - (Required) Required. The resource name of the resource within a service.
     * @return {object} The API response object.
     */
    this.projects.locations.unitOperations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Create a new unit operation.
     * @param {string} params.parent - (Required) Required. The parent of the unit operation.
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.unitOperationId - Required. The ID value for the new unit operation.
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.unitOperations.create = (params) => this._makeRequest('v1beta1/{+parent}/unitOperations', 'POST', params);

    /**
     * Update a single unit operation.
     * @param {string} params.name - (Required) Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitOperations/{unitOperation}"
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the UnitOperation resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitOperation will be overwritten.
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.unitOperations.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Delete a single unit operation.
     * @param {string} params.etag - The etag known to the client for the expected state of the unit operation. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit operation. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     * @param {string} params.name - (Required) Required. The resource name of the resource within a service.
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @return {object} The API response object.
     */
    this.projects.locations.unitOperations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.releases = {};

    /**
     * Retrieve a collection of releases.
     * @param {string} params.filter - Filter the list as specified in https://google.aip.dev/160.
     * @param {string} params.orderBy - Order results as specified in https://google.aip.dev/132.
     * @param {integer} params.pageSize - The maximum number of releases to send per page.
     * @param {string} params.pageToken - The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent of the release.
     * @return {object} The API response object.
     */
    this.projects.locations.releases.list = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', params);

    /**
     * Retrieve a single release.
     * @param {string} params.name - (Required) Required. The resource name of the resource within a service.
     * @return {object} The API response object.
     */
    this.projects.locations.releases.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Create a new release.
     * @param {string} params.parent - (Required) Required. The parent of the release.
     * @param {string} params.releaseId - Required. The ID value for the new release.
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.releases.create = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', params);

    /**
     * Update a single release.
     * @param {string} params.name - (Required) Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/releases/{release}"
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the Release resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Release will be overwritten.
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.releases.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Delete a single release.
     * @param {string} params.etag - The etag known to the client for the expected state of the release. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the release. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     * @param {string} params.name - (Required) Required. The resource name of the resource within a service.
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @return {object} The API response object.
     */
    this.projects.locations.releases.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.rollouts = {};

    /**
     * Retrieve a collection of rollouts.
     * @param {string} params.filter - Filter the list as specified in https://google.aip.dev/160.
     * @param {string} params.orderBy - Order results as specified in https://google.aip.dev/132.
     * @param {integer} params.pageSize - The maximum number of rollouts to send per page.
     * @param {string} params.pageToken - The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent of the rollout.
     * @return {object} The API response object.
     */
    this.projects.locations.rollouts.list = (params) => this._makeRequest('v1beta1/{+parent}/rollouts', 'GET', params);

    /**
     * Retrieve a single rollout.
     * @param {string} params.name - (Required) Required. The resource name of the resource within a service.
     * @return {object} The API response object.
     */
    this.projects.locations.rollouts.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Create a new rollout.
     * @param {string} params.parent - (Required) Required. The parent of the rollout.
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.rolloutId - Required. The ID value for the new rollout.
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.rollouts.create = (params) => this._makeRequest('v1beta1/{+parent}/rollouts', 'POST', params);

    /**
     * Update a single rollout.
     * @param {string} params.name - (Required) Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollout/{rollout_id}"
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the Rollout resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Rollout will be overwritten.
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.rollouts.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Delete a single rollout.
     * @param {string} params.etag - The etag known to the client for the expected state of the rollout. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     * @param {string} params.name - (Required) Required. The resource name of the resource within a service.
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @return {object} The API response object.
     */
    this.projects.locations.rollouts.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.rolloutKinds = {};

    /**
     * Retrieve a collection of rollout kinds.
     * @param {string} params.filter - Filter the list as specified in https://google.aip.dev/160.
     * @param {string} params.orderBy - Order results as specified in https://google.aip.dev/132.
     * @param {integer} params.pageSize - The maximum number of rollout kinds to send per page.
     * @param {string} params.pageToken - The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent of the rollout kind.
     * @return {object} The API response object.
     */
    this.projects.locations.rolloutKinds.list = (params) => this._makeRequest('v1beta1/{+parent}/rolloutKinds', 'GET', params);

    /**
     * Retrieve a single rollout kind.
     * @param {string} params.name - (Required) Required. The resource name of the resource within a service.
     * @return {object} The API response object.
     */
    this.projects.locations.rolloutKinds.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Create a new rollout kind.
     * @param {string} params.parent - (Required) Required. The parent of the rollout kind.
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.rolloutKindId - Required. The ID value for the new rollout kind.
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.rolloutKinds.create = (params) => this._makeRequest('v1beta1/{+parent}/rolloutKinds', 'POST', params);

    /**
     * Update a single rollout kind.
     * @param {string} params.name - (Required) Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rolloutKinds/{rollout_kind_id}"
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the RolloutKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the RolloutKind will be overwritten.
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.rolloutKinds.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Delete a single rollout kind.
     * @param {string} params.etag - The etag known to the client for the expected state of the rollout kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     * @param {string} params.name - (Required) Required. The resource name of the resource within a service.
     * @param {string} params.requestId - An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     * @return {object} The API response object.
     */
    this.projects.locations.rolloutKinds.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
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
