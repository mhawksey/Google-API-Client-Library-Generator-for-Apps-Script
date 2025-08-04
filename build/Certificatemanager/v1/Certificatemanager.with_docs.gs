
/**
 * Google Apps Script client library for the Certificate Manager API
 * Documentation URL: https://cloud.google.com/certificate-manager
 * @class
 */
class Certificatemanager {
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
    this._rootUrl = 'https://certificatemanager.googleapis.com/';
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

    this.projects.locations.certificates = {};

    /**
     * Lists Certificates in a given project and location.
     * @param {string} params.filter - Optional. Filter expression to restrict the Certificates returned.
     * @param {string} params.orderBy - Optional. A list of Certificate field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`.
     * @param {integer} params.pageSize - Optional. Maximum number of certificates to return per call.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListCertificatesResponse`. Indicates that this is a continuation of a prior `ListCertificates` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the certificate should be listed, specified in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.certificates.list = (params) => this._makeRequest('v1/{+parent}/certificates', 'GET', params);

    /**
     * Gets details of a single Certificate.
     * @param {string} params.name - (Required) Required. A name of the certificate to describe. Must be in the format `projects/*\/locations/*\/certificates/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.certificates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Certificate in a given project and location.
     * @param {string} params.certificateId - Required. A user-provided name of the certificate.
     * @param {string} params.parent - (Required) Required. The parent resource of the certificate. Must be in the format `projects/*\/locations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.certificates.create = (params) => this._makeRequest('v1/{+parent}/certificates', 'POST', params);

    /**
     * Updates a Certificate.
     * @param {string} params.name - (Required) Identifier. A user-defined name of the certificate. Certificate names must be unique globally and match pattern `projects/*\/locations/*\/certificates/*`.
     * @param {string} params.updateMask - Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.certificates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Certificate.
     * @param {string} params.name - (Required) Required. A name of the certificate to delete. Must be in the format `projects/*\/locations/*\/certificates/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.certificates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.certificateMaps = {};

    /**
     * Lists CertificateMaps in a given project and location.
     * @param {string} params.filter - Optional. Filter expression to restrict the Certificates Maps returned.
     * @param {string} params.orderBy - Optional. A list of Certificate Map field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`.
     * @param {integer} params.pageSize - Optional. Maximum number of certificate maps to return per call.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListCertificateMapsResponse`. Indicates that this is a continuation of a prior `ListCertificateMaps` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the certificate maps should be listed, specified in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateMaps.list = (params) => this._makeRequest('v1/{+parent}/certificateMaps', 'GET', params);

    /**
     * Gets details of a single CertificateMap.
     * @param {string} params.name - (Required) Required. A name of the certificate map to describe. Must be in the format `projects/*\/locations/*\/certificateMaps/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateMaps.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new CertificateMap in a given project and location.
     * @param {string} params.certificateMapId - Required. A user-provided name of the certificate map.
     * @param {string} params.parent - (Required) Required. The parent resource of the certificate map. Must be in the format `projects/*\/locations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateMaps.create = (params) => this._makeRequest('v1/{+parent}/certificateMaps', 'POST', params);

    /**
     * Updates a CertificateMap.
     * @param {string} params.name - (Required) Identifier. A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match pattern `projects/*\/locations/*\/certificateMaps/*`.
     * @param {string} params.updateMask - Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateMaps.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single CertificateMap. A Certificate Map can't be deleted if it contains Certificate Map Entries. Remove all the entries from the map before calling this method.
     * @param {string} params.name - (Required) Required. A name of the certificate map to delete. Must be in the format `projects/*\/locations/*\/certificateMaps/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateMaps.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.certificateMaps.certificateMapEntries = {};

    /**
     * Lists CertificateMapEntries in a given project and location.
     * @param {string} params.filter - Optional. Filter expression to restrict the returned Certificate Map Entries.
     * @param {string} params.orderBy - Optional. A list of Certificate Map Entry field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`.
     * @param {integer} params.pageSize - Optional. Maximum number of certificate map entries to return. The service may return fewer than this value. If unspecified, at most 50 certificate map entries will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListCertificateMapEntriesResponse`. Indicates that this is a continuation of a prior `ListCertificateMapEntries` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project, location and certificate map from which the certificate map entries should be listed, specified in the format `projects/*\/locations/*\/certificateMaps/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateMaps.certificateMapEntries.list = (params) => this._makeRequest('v1/{+parent}/certificateMapEntries', 'GET', params);

    /**
     * Gets details of a single CertificateMapEntry.
     * @param {string} params.name - (Required) Required. A name of the certificate map entry to describe. Must be in the format `projects/*\/locations/*\/certificateMaps/*\/certificateMapEntries/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateMaps.certificateMapEntries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new CertificateMapEntry in a given project and location.
     * @param {string} params.certificateMapEntryId - Required. A user-provided name of the certificate map entry.
     * @param {string} params.parent - (Required) Required. The parent resource of the certificate map entry. Must be in the format `projects/*\/locations/*\/certificateMaps/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateMaps.certificateMapEntries.create = (params) => this._makeRequest('v1/{+parent}/certificateMapEntries', 'POST', params);

    /**
     * Updates a CertificateMapEntry.
     * @param {string} params.name - (Required) Identifier. A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern `projects/*\/locations/*\/certificateMaps/*\/certificateMapEntries/*`.
     * @param {string} params.updateMask - Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateMaps.certificateMapEntries.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single CertificateMapEntry.
     * @param {string} params.name - (Required) Required. A name of the certificate map entry to delete. Must be in the format `projects/*\/locations/*\/certificateMaps/*\/certificateMapEntries/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateMaps.certificateMapEntries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.dnsAuthorizations = {};

    /**
     * Lists DnsAuthorizations in a given project and location.
     * @param {string} params.filter - Optional. Filter expression to restrict the Dns Authorizations returned.
     * @param {string} params.orderBy - Optional. A list of Dns Authorization field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`.
     * @param {integer} params.pageSize - Optional. Maximum number of dns authorizations to return per call.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListDnsAuthorizationsResponse`. Indicates that this is a continuation of a prior `ListDnsAuthorizations` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the dns authorizations should be listed, specified in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.dnsAuthorizations.list = (params) => this._makeRequest('v1/{+parent}/dnsAuthorizations', 'GET', params);

    /**
     * Gets details of a single DnsAuthorization.
     * @param {string} params.name - (Required) Required. A name of the dns authorization to describe. Must be in the format `projects/*\/locations/*\/dnsAuthorizations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.dnsAuthorizations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new DnsAuthorization in a given project and location.
     * @param {string} params.dnsAuthorizationId - Required. A user-provided name of the dns authorization.
     * @param {string} params.parent - (Required) Required. The parent resource of the dns authorization. Must be in the format `projects/*\/locations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dnsAuthorizations.create = (params) => this._makeRequest('v1/{+parent}/dnsAuthorizations', 'POST', params);

    /**
     * Updates a DnsAuthorization.
     * @param {string} params.name - (Required) Identifier. A user-defined name of the dns authorization. DnsAuthorization names must be unique globally and match pattern `projects/*\/locations/*\/dnsAuthorizations/*`.
     * @param {string} params.updateMask - Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dnsAuthorizations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single DnsAuthorization.
     * @param {string} params.name - (Required) Required. A name of the dns authorization to delete. Must be in the format `projects/*\/locations/*\/dnsAuthorizations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.dnsAuthorizations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.certificateIssuanceConfigs = {};

    /**
     * Lists CertificateIssuanceConfigs in a given project and location.
     * @param {string} params.filter - Optional. Filter expression to restrict the Certificates Configs returned.
     * @param {string} params.orderBy - Optional. A list of Certificate Config field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`.
     * @param {integer} params.pageSize - Optional. Maximum number of certificate configs to return per call.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListCertificateIssuanceConfigsResponse`. Indicates that this is a continuation of a prior `ListCertificateIssuanceConfigs` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the certificate should be listed, specified in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateIssuanceConfigs.list = (params) => this._makeRequest('v1/{+parent}/certificateIssuanceConfigs', 'GET', params);

    /**
     * Gets details of a single CertificateIssuanceConfig.
     * @param {string} params.name - (Required) Required. A name of the certificate issuance config to describe. Must be in the format `projects/*\/locations/*\/certificateIssuanceConfigs/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateIssuanceConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new CertificateIssuanceConfig in a given project and location.
     * @param {string} params.certificateIssuanceConfigId - Required. A user-provided name of the certificate config.
     * @param {string} params.parent - (Required) Required. The parent resource of the certificate issuance config. Must be in the format `projects/*\/locations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateIssuanceConfigs.create = (params) => this._makeRequest('v1/{+parent}/certificateIssuanceConfigs', 'POST', params);

    /**
     * Updates a CertificateIssuanceConfig.
     * @param {string} params.name - (Required) Identifier. A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally and match pattern `projects/*\/locations/*\/certificateIssuanceConfigs/*`.
     * @param {string} params.updateMask - Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateIssuanceConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single CertificateIssuanceConfig.
     * @param {string} params.name - (Required) Required. A name of the certificate issuance config to delete. Must be in the format `projects/*\/locations/*\/certificateIssuanceConfigs/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.certificateIssuanceConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.trustConfigs = {};

    /**
     * Lists TrustConfigs in a given project and location.
     * @param {string} params.filter - Optional. Filter expression to restrict the TrustConfigs returned.
     * @param {string} params.orderBy - Optional. A list of TrustConfig field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`.
     * @param {integer} params.pageSize - Optional. Maximum number of TrustConfigs to return per call.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListTrustConfigsResponse`. Indicates that this is a continuation of a prior `ListTrustConfigs` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the TrustConfigs should be listed, specified in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.trustConfigs.list = (params) => this._makeRequest('v1/{+parent}/trustConfigs', 'GET', params);

    /**
     * Gets details of a single TrustConfig.
     * @param {string} params.name - (Required) Required. A name of the TrustConfig to describe. Must be in the format `projects/*\/locations/*\/trustConfigs/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.trustConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new TrustConfig in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent resource of the TrustConfig. Must be in the format `projects/*\/locations/*`.
     * @param {string} params.trustConfigId - Required. A user-provided name of the TrustConfig. Must match the regexp `[a-z0-9-]{1,63}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.trustConfigs.create = (params) => this._makeRequest('v1/{+parent}/trustConfigs', 'POST', params);

    /**
     * Updates a TrustConfig.
     * @param {string} params.name - (Required) Identifier. A user-defined name of the trust config. TrustConfig names must be unique globally and match pattern `projects/*\/locations/*\/trustConfigs/*`.
     * @param {string} params.updateMask - Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.trustConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single TrustConfig.
     * @param {string} params.etag - Optional. The current etag of the TrustConfig. If an etag is provided and does not match the current etag of the resource, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. A name of the TrustConfig to delete. Must be in the format `projects/*\/locations/*\/trustConfigs/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.trustConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
