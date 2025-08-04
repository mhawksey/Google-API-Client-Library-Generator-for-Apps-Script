
/**
 * Google Apps Script client library for the Certificate Authority API
 * Documentation URL: https://cloud.google.com/
 * @class
 */
class Privateca {
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
    this._rootUrl = 'https://privateca.googleapis.com/';
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
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.caPools = {};

    /**
     * Create a CaPool.
     * @param {string} params.caPoolId - Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`
     * @param {string} params.parent - (Required) Required. The resource name of the location associated with the CaPool, in the format `projects/*\/locations/*`.
     * @param {string} params.requestId - Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.create = (params) => this._makeRequest('v1/{+parent}/caPools', 'POST', params);

    /**
     * Update a CaPool.
     * @param {string} params.name - (Required) Identifier. The resource name for this CaPool in the format `projects/*\/locations/*\/caPools/*`.
     * @param {string} params.requestId - Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. A list of fields to be updated in this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Returns a CaPool.
     * @param {string} params.name - (Required) Required. The name of the CaPool to get.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists CaPools.
     * @param {string} params.filter - Optional. Only include resources that match the filter in the response.
     * @param {string} params.orderBy - Optional. Specify how the results should be sorted.
     * @param {integer} params.pageSize - Optional. Limit on the number of CaPools to include in the response. Further CaPools can subsequently be obtained by including the ListCaPoolsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Pagination token, returned earlier via ListCaPoolsResponse.next_page_token.
     * @param {string} params.parent - (Required) Required. The resource name of the location associated with the CaPools, in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.list = (params) => this._makeRequest('v1/{+parent}/caPools', 'GET', params);

    /**
     * Delete a CaPool.
     * @param {boolean} params.ignoreDependentResources - Optional. This field allows this pool to be deleted even if it's being depended on by another resource. However, doing so may result in unintended and unrecoverable effects on any dependent resources since the pool will no longer be able to issue certificates.
     * @param {string} params.name - (Required) Required. The resource name for this CaPool in the format `projects/*\/locations/*\/caPools/*`.
     * @param {string} params.requestId - Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all certificate authorities in the ENABLED, DISABLED, or STAGED states.
     * @param {string} params.caPool - (Required) Required. The resource name for the CaPool in the format `projects/*\/locations/*\/caPools/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.fetchCaCerts = (params) => this._makeRequest('v1/{+caPool}:fetchCaCerts', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.caPools.certificates = {};

    /**
     * Create a new Certificate in a given Project, Location from a particular CaPool.
     * @param {string} params.certificateId - Optional. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`. This field is required when using a CertificateAuthority in the Enterprise CertificateAuthority.tier, but is optional and its value is ignored otherwise.
     * @param {string} params.issuingCertificateAuthorityId - Optional. The resource ID of the CertificateAuthority that should issue the certificate. This optional field will ignore the load-balancing scheme of the Pool and directly issue the certificate from the CA with the specified ID, contained in the same CaPool referenced by `parent`. Per-CA quota rules apply. If left empty, a CertificateAuthority will be chosen from the CaPool by the service. For example, to issue a Certificate from a Certificate Authority with resource name "projects/my-project/locations/us-central1/caPools/my-pool/certificateAuthorities/my-ca", you can set the parent to "projects/my-project/locations/us-central1/caPools/my-pool" and the issuing_certificate_authority_id to "my-ca".
     * @param {string} params.parent - (Required) Required. The resource name of the CaPool associated with the Certificate, in the format `projects/*\/locations/*\/caPools/*`.
     * @param {string} params.requestId - Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If this is true, no Certificate resource will be persisted regardless of the CaPool's tier, and the returned Certificate will not contain the pem_certificate field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificates.create = (params) => this._makeRequest('v1/{+parent}/certificates', 'POST', params);

    /**
     * Returns a Certificate.
     * @param {string} params.name - (Required) Required. The name of the Certificate to get.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists Certificates.
     * @param {string} params.filter - Optional. Only include resources that match the filter in the response. For details on supported filters and syntax, see [Certificates Filtering documentation](https://cloud.google.com/certificate-authority-service/docs/sorting-filtering-certificates#filtering_support).
     * @param {string} params.orderBy - Optional. Specify how the results should be sorted. For details on supported fields and syntax, see [Certificates Sorting documentation](https://cloud.google.com/certificate-authority-service/docs/sorting-filtering-certificates#sorting_support).
     * @param {integer} params.pageSize - Optional. Limit on the number of Certificates to include in the response. Further Certificates can subsequently be obtained by including the ListCertificatesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Pagination token, returned earlier via ListCertificatesResponse.next_page_token.
     * @param {string} params.parent - (Required) Required. The resource name of the location associated with the Certificates, in the format `projects/*\/locations/*\/caPools/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificates.list = (params) => this._makeRequest('v1/{+parent}/certificates', 'GET', params);

    /**
     * Revoke a Certificate.
     * @param {string} params.name - (Required) Required. The resource name for this Certificate in the format `projects/*\/locations/*\/caPools/*\/certificates/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificates.revoke = (params) => this._makeRequest('v1/{+name}:revoke', 'POST', params);

    /**
     * Update a Certificate. Currently, the only field you can update is the labels field.
     * @param {string} params.name - (Required) Identifier. The resource name for this Certificate in the format `projects/*\/locations/*\/caPools/*\/certificates/*`.
     * @param {string} params.requestId - Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. A list of fields to be updated in this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.caPools.certificateAuthorities = {};

    /**
     * Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.
     * @param {string} params.name - (Required) Required. The resource name for this CertificateAuthority in the format `projects/*\/locations/*\/caPools/*\/certificateAuthorities/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificateAuthorities.activate = (params) => this._makeRequest('v1/{+name}:activate', 'POST', params);

    /**
     * Create a new CertificateAuthority in a given Project and Location.
     * @param {string} params.certificateAuthorityId - Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`
     * @param {string} params.parent - (Required) Required. The resource name of the CaPool associated with the CertificateAuthorities, in the format `projects/*\/locations/*\/caPools/*`.
     * @param {string} params.requestId - Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificateAuthorities.create = (params) => this._makeRequest('v1/{+parent}/certificateAuthorities', 'POST', params);

    /**
     * Disable a CertificateAuthority.
     * @param {string} params.name - (Required) Required. The resource name for this CertificateAuthority in the format `projects/*\/locations/*\/caPools/*\/certificateAuthorities/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificateAuthorities.disable = (params) => this._makeRequest('v1/{+name}:disable', 'POST', params);

    /**
     * Enable a CertificateAuthority.
     * @param {string} params.name - (Required) Required. The resource name for this CertificateAuthority in the format `projects/*\/locations/*\/caPools/*\/certificateAuthorities/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificateAuthorities.enable = (params) => this._makeRequest('v1/{+name}:enable', 'POST', params);

    /**
     * Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.
     * @param {string} params.name - (Required) Required. The resource name for this CertificateAuthority in the format `projects/*\/locations/*\/caPools/*\/certificateAuthorities/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificateAuthorities.fetch = (params) => this._makeRequest('v1/{+name}:fetch', 'GET', params);

    /**
     * Returns a CertificateAuthority.
     * @param {string} params.name - (Required) Required. The name of the CertificateAuthority to get.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificateAuthorities.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists CertificateAuthorities.
     * @param {string} params.filter - Optional. Only include resources that match the filter in the response.
     * @param {string} params.orderBy - Optional. Specify how the results should be sorted.
     * @param {integer} params.pageSize - Optional. Limit on the number of CertificateAuthorities to include in the response. Further CertificateAuthorities can subsequently be obtained by including the ListCertificateAuthoritiesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Pagination token, returned earlier via ListCertificateAuthoritiesResponse.next_page_token.
     * @param {string} params.parent - (Required) Required. The resource name of the CaPool associated with the CertificateAuthorities, in the format `projects/*\/locations/*\/caPools/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificateAuthorities.list = (params) => this._makeRequest('v1/{+parent}/certificateAuthorities', 'GET', params);

    /**
     * Undelete a CertificateAuthority that has been deleted.
     * @param {string} params.name - (Required) Required. The resource name for this CertificateAuthority in the format `projects/*\/locations/*\/caPools/*\/certificateAuthorities/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificateAuthorities.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    /**
     * Delete a CertificateAuthority.
     * @param {boolean} params.ignoreActiveCertificates - Optional. This field allows the CA to be deleted even if the CA has active certs. Active certs include both unrevoked and unexpired certs.
     * @param {boolean} params.ignoreDependentResources - Optional. This field allows this CA to be deleted even if it's being depended on by another resource. However, doing so may result in unintended and unrecoverable effects on any dependent resources since the CA will no longer be able to issue certificates.
     * @param {string} params.name - (Required) Required. The resource name for this CertificateAuthority in the format `projects/*\/locations/*\/caPools/*\/certificateAuthorities/*`.
     * @param {string} params.requestId - Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.skipGracePeriod - Optional. If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where undeletion would have been allowed. If you proceed, there will be no way to recover this CA.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificateAuthorities.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Update a CertificateAuthority.
     * @param {string} params.name - (Required) Identifier. The resource name for this CertificateAuthority in the format `projects/*\/locations/*\/caPools/*\/certificateAuthorities/*`.
     * @param {string} params.requestId - Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. A list of fields to be updated in this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificateAuthorities.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.caPools.certificateAuthorities.certificateRevocationLists = {};

    /**
     * Returns a CertificateRevocationList.
     * @param {string} params.name - (Required) Required. The name of the CertificateRevocationList to get.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificateAuthorities.certificateRevocationLists.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists CertificateRevocationLists.
     * @param {string} params.filter - Optional. Only include resources that match the filter in the response.
     * @param {string} params.orderBy - Optional. Specify how the results should be sorted.
     * @param {integer} params.pageSize - Optional. Limit on the number of CertificateRevocationLists to include in the response. Further CertificateRevocationLists can subsequently be obtained by including the ListCertificateRevocationListsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Pagination token, returned earlier via ListCertificateRevocationListsResponse.next_page_token.
     * @param {string} params.parent - (Required) Required. The resource name of the location associated with the CertificateRevocationLists, in the format `projects/*\/locations/*\/caPools/*\/certificateAuthorities/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificateAuthorities.certificateRevocationLists.list = (params) => this._makeRequest('v1/{+parent}/certificateRevocationLists', 'GET', params);

    /**
     * Update a CertificateRevocationList.
     * @param {string} params.name - (Required) Identifier. The resource name for this CertificateRevocationList in the format `projects/*\/locations/*\/caPools/*certificateAuthorities/*\/ certificateRevocationLists/*`.
     * @param {string} params.requestId - Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. A list of fields to be updated in this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificateAuthorities.certificateRevocationLists.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificateAuthorities.certificateRevocationLists.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificateAuthorities.certificateRevocationLists.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.caPools.certificateAuthorities.certificateRevocationLists.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.certificateTemplates = {};

    /**
     * Create a new CertificateTemplate in a given Project and Location.
     * @param {string} params.certificateTemplateId - Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`
     * @param {string} params.parent - (Required) Required. The resource name of the location associated with the CertificateTemplate, in the format `projects/*\/locations/*`.
     * @param {string} params.requestId - Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateTemplates.create = (params) => this._makeRequest('v1/{+parent}/certificateTemplates', 'POST', params);

    /**
     * DeleteCertificateTemplate deletes a CertificateTemplate.
     * @param {string} params.name - (Required) Required. The resource name for this CertificateTemplate in the format `projects/*\/locations/*\/certificateTemplates/*`.
     * @param {string} params.requestId - Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.certificateTemplates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Returns a CertificateTemplate.
     * @param {string} params.name - (Required) Required. The name of the CertificateTemplate to get.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateTemplates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists CertificateTemplates.
     * @param {string} params.filter - Optional. Only include resources that match the filter in the response.
     * @param {string} params.orderBy - Optional. Specify how the results should be sorted.
     * @param {integer} params.pageSize - Optional. Limit on the number of CertificateTemplates to include in the response. Further CertificateTemplates can subsequently be obtained by including the ListCertificateTemplatesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Pagination token, returned earlier via ListCertificateTemplatesResponse.next_page_token.
     * @param {string} params.parent - (Required) Required. The resource name of the location associated with the CertificateTemplates, in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateTemplates.list = (params) => this._makeRequest('v1/{+parent}/certificateTemplates', 'GET', params);

    /**
     * Update a CertificateTemplate.
     * @param {string} params.name - (Required) Identifier. The resource name for this CertificateTemplate in the format `projects/*\/locations/*\/certificateTemplates/*`.
     * @param {string} params.requestId - Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. A list of fields to be updated in this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateTemplates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateTemplates.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateTemplates.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateTemplates.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
