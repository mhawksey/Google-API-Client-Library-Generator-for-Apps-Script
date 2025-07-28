
/**
 * Google Apps Script client library for the Cloud Domains API
 * Documentation URL: https://cloud.google.com/domains/
 * @class
 */
class Domains {
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
    this._rootUrl = 'https://domains.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1alpha2/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1alpha2/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1alpha2/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1alpha2/{+name}', 'GET', params);

    this.projects.locations.registrations = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.setIamPolicy = (params) => this._makeRequest('v1alpha2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.getIamPolicy = (params) => this._makeRequest('v1alpha2/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.testIamPermissions = (params) => this._makeRequest('v1alpha2/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Searches for available domain names similar to the provided query. Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.
     * @param {string} params.location - (Required) Required. The location. Must be in the format `projects/*\/locations/*`.
     * @param {string} params.query - Required. String used to search for available domain names.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.searchDomains = (params) => this._makeRequest('v1alpha2/{+location}/registrations:searchDomains', 'GET', params);

    /**
     * Gets parameters needed to register a new domain name, including price and up-to-date availability. Use the returned values to call `RegisterDomain`.
     * @param {string} params.domainName - Required. The domain name. Unicode domain names must be expressed in Punycode format.
     * @param {string} params.location - (Required) Required. The location. Must be in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.retrieveRegisterParameters = (params) => this._makeRequest('v1alpha2/{+location}/registrations:retrieveRegisterParameters', 'GET', params);

    /**
     * Registers a new domain name and creates a corresponding `Registration` resource. Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method. A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.
     * @param {string} params.parent - (Required) Required. The parent resource of the `Registration`. Must be in the format `projects/*\/locations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.register = (params) => this._makeRequest('v1alpha2/{+parent}/registrations:register', 'POST', params);

    /**
     * Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Gets parameters needed to transfer a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Use the returned values to call `TransferDomain`.
     * @param {string} params.domainName - Required. The domain name. Unicode domain names must be expressed in Punycode format.
     * @param {string} params.location - (Required) Required. The location. Must be in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.retrieveTransferParameters = (params) => this._makeRequest('v1alpha2/{+location}/registrations:retrieveTransferParameters', 'GET', params);

    /**
     * Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Transfers a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method. A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website. A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.
     * @param {string} params.parent - (Required) Required. The parent resource of the `Registration`. Must be in the format `projects/*\/locations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.transfer = (params) => this._makeRequest('v1alpha2/{+parent}/registrations:transfer', 'POST', params);

    /**
     * Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Lists domain names from [Google Domains](https://domains.google/) that can be imported to Cloud Domains using the `ImportDomain` method. Since individual users can own domains in Google Domains, the list of domains returned depends on the individual user making the call. Domains already managed by Cloud Domains are not returned.
     * @param {string} params.location - (Required) Required. The location. Must be in the format `projects/*\/locations/*`.
     * @param {integer} params.pageSize - Maximum number of results to return.
     * @param {string} params.pageToken - When set to the `next_page_token` from a prior response, provides the next page of results.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.retrieveImportableDomains = (params) => this._makeRequest('v1alpha2/{+location}/registrations:retrieveImportableDomains', 'GET', params);

    /**
     * Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Imports a domain name from [Google Domains](https://domains.google/) for use in Cloud Domains. To transfer a domain from another registrar, use the `TransferDomain` method instead. Since individual users can own domains in Google Domains, the calling user must have ownership permission on the domain.
     * @param {string} params.parent - (Required) Required. The parent resource of the Registration. Must be in the format `projects/*\/locations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.import = (params) => this._makeRequest('v1alpha2/{+parent}/registrations:import', 'POST', params);

    /**
     * Lists the `Registration` resources in a project.
     * @param {string} params.filter - Filter expression to restrict the `Registration`s returned. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, a boolean, or an enum value. The comparison operator should be one of =, !=, >, <, >=, <=, or : for prefix or wildcard matches. For example, to filter to a specific domain name, use an expression like `domainName="example.com"`. You can also check for the existence of a field; for example, to find domains using custom DNS settings, use an expression like `dnsSettings.customDns:*`. You can also create compound filters by combining expressions with the `AND` and `OR` operators. For example, to find domains that are suspended or have specific issues flagged, use an expression like `(state=SUSPENDED) OR (issue:*)`.
     * @param {integer} params.pageSize - Maximum number of results to return.
     * @param {string} params.pageToken - When set to the `next_page_token` from a prior response, provides the next page of results.
     * @param {string} params.parent - (Required) Required. The project and location from which to list `Registration`s, specified in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.list = (params) => this._makeRequest('v1alpha2/{+parent}/registrations', 'GET', params);

    /**
     * Gets the details of a `Registration` resource.
     * @param {string} params.name - (Required) Required. The name of the `Registration` to get, in the format `projects/*\/locations/*\/registrations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.get = (params) => this._makeRequest('v1alpha2/{+name}', 'GET', params);

    /**
     * Updates select fields of a `Registration` resource, notably `labels`. To update other fields, use the appropriate custom update method: * To update management settings, see `ConfigureManagementSettings` * To update DNS configuration, see `ConfigureDnsSettings` * To update contact information, see `ConfigureContactSettings`
     * @param {string} params.name - (Required) Output only. Name of the `Registration` resource, in the format `projects/*\/locations/*\/registrations/`.
     * @param {string} params.updateMask - Required. The field mask describing which fields to update as a comma-separated list. For example, if only the labels are being updated, the `update_mask` is `"labels"`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.patch = (params) => this._makeRequest('v1alpha2/{+name}', 'PATCH', params);

    /**
     * Updates a `Registration`'s management settings.
     * @param {string} params.registration - (Required) Required. The name of the `Registration` whose management settings are being updated, in the format `projects/*\/locations/*\/registrations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.configureManagementSettings = (params) => this._makeRequest('v1alpha2/{+registration}:configureManagementSettings', 'POST', params);

    /**
     * Updates a `Registration`'s DNS settings.
     * @param {string} params.registration - (Required) Required. The name of the `Registration` whose DNS settings are being updated, in the format `projects/*\/locations/*\/registrations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.configureDnsSettings = (params) => this._makeRequest('v1alpha2/{+registration}:configureDnsSettings', 'POST', params);

    /**
     * Lists the DNS records from the Google Domains DNS zone for domains that use the deprecated `google_domains_dns` in the `Registration`'s `dns_settings`.
     * @param {integer} params.pageSize - Optional. Maximum number of results to return.
     * @param {string} params.pageToken - Optional. When set to the `next_page_token` from a prior response, provides the next page of results.
     * @param {string} params.registration - (Required) Required. The name of the `Registration` whose Google Domains DNS records details you are retrieving, in the format `projects/*\/locations/*\/registrations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.retrieveGoogleDomainsDnsRecords = (params) => this._makeRequest('v1alpha2/{+registration}:retrieveGoogleDomainsDnsRecords', 'GET', params);

    /**
     * Lists the deprecated domain and email forwarding configurations you set up in the deprecated Google Domains UI. The configuration is present only for domains with the `google_domains_redirects_data_available` set to `true` in the `Registration`'s `dns_settings`. A forwarding configuration might not work correctly if required DNS records are not present in the domain's authoritative DNS Zone.
     * @param {string} params.registration - (Required) Required. The name of the `Registration` whose Google Domains forwarding configuration details are being retrieved, in the format `projects/*\/locations/*\/registrations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.retrieveGoogleDomainsForwardingConfig = (params) => this._makeRequest('v1alpha2/{+registration}:retrieveGoogleDomainsForwardingConfig', 'GET', params);

    /**
     * Updates a `Registration`'s contact settings. Some changes require confirmation by the domain's registrant contact . Caution: Please consider carefully any changes to contact privacy settings when changing from `REDACTED_CONTACT_DATA` to `PUBLIC_CONTACT_DATA.` There may be a delay in reflecting updates you make to registrant contact information such that any changes you make to contact privacy (including from `REDACTED_CONTACT_DATA` to `PUBLIC_CONTACT_DATA`) will be applied without delay but changes to registrant contact information may take a limited time to be publicized. This means that changes to contact privacy from `REDACTED_CONTACT_DATA` to `PUBLIC_CONTACT_DATA` may make the previous registrant contact data public until the modified registrant contact details are published.
     * @param {string} params.registration - (Required) Required. The name of the `Registration` whose contact settings are being updated, in the format `projects/*\/locations/*\/registrations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.configureContactSettings = (params) => this._makeRequest('v1alpha2/{+registration}:configureContactSettings', 'POST', params);

    /**
     * Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Exports a `Registration` resource, such that it is no longer managed by Cloud Domains. When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.
     * @param {string} params.name - (Required) Required. The name of the `Registration` to export, in the format `projects/*\/locations/*\/registrations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.export = (params) => this._makeRequest('v1alpha2/{+name}:export', 'POST', params);

    /**
     * Deletes a `Registration` resource. This method works on any `Registration` resource using [Subscription or Commitment billing](/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past. When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains. After January 2024 you will only be able to delete `Registration` resources when `state` is one of: `EXPORTED`, `EXPIRED`,`REGISTRATION_FAILED` or `TRANSFER_FAILED`. See [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) for more details.
     * @param {string} params.name - (Required) Required. The name of the `Registration` to delete, in the format `projects/*\/locations/*\/registrations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.delete = (params) => this._makeRequest('v1alpha2/{+name}', 'DELETE', params);

    /**
     * Gets the authorization code of the `Registration` for the purpose of transferring the domain to another registrar. You can call this method only after 60 days have elapsed since the initial domain registration. Domains that have the `REQUIRE_PUSH_TRANSFER` property in the list of `domain_properties` don't support authorization codes and must use the `InitiatePushTransfer` method to initiate the process to transfer the domain to a different registrar.
     * @param {string} params.registration - (Required) Required. The name of the `Registration` whose authorization code is being retrieved, in the format `projects/*\/locations/*\/registrations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.retrieveAuthorizationCode = (params) => this._makeRequest('v1alpha2/{+registration}:retrieveAuthorizationCode', 'GET', params);

    /**
     * Resets the authorization code of the `Registration` to a new random string. You can call this method only after 60 days have elapsed since the initial domain registration. Domains that have the `REQUIRE_PUSH_TRANSFER` property in the list of `domain_properties` don't support authorization codes and must use the `InitiatePushTransfer` method to initiate the process to transfer the domain to a different registrar.
     * @param {string} params.registration - (Required) Required. The name of the `Registration` whose authorization code is being reset, in the format `projects/*\/locations/*\/registrations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.resetAuthorizationCode = (params) => this._makeRequest('v1alpha2/{+registration}:resetAuthorizationCode', 'POST', params);

    /**
     * Initiates the `Push Transfer` process to transfer the domain to another registrar. The process might complete instantly or might require confirmation or additional work. Check the emails sent to the email address of the registrant. The process is aborted after a timeout if it's not completed. This method is only supported for domains that have the `REQUIRE_PUSH_TRANSFER` property in the list of `domain_properties`. The domain must also be unlocked before it can be transferred to a different registrar. For more information, see [Transfer a registered domain to another registrar](https://cloud.google.com/domains/docs/transfer-domain-to-another-registrar).
     * @param {string} params.registration - (Required) Required. The name of the `Registration` for which the push transfer is initiated, in the format `projects/*\/locations/*\/registrations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.initiatePushTransfer = (params) => this._makeRequest('v1alpha2/{+registration}:initiatePushTransfer', 'POST', params);

    /**
     * Renews a recently expired domain. This method can only be called on domains that expired in the previous 30 days. After the renewal, the new expiration time of the domain is one year after the old expiration time and you are charged a `yearly_price` for the renewal.
     * @param {string} params.registration - (Required) Required. The name of the `Registration` whish is being renewed, in the format `projects/*\/locations/*\/registrations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.registrations.renewDomain = (params) => this._makeRequest('v1alpha2/{+registration}:renewDomain', 'POST', params);
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
