
/**
 * Google Apps Script client library for the Cloud Billing API
 * Documentation URL: https://cloud.google.com/billing/docs/apis
 * @class
 */
class Cloudbilling {
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
    this._rootUrl = 'https://cloudbilling.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.billingAccounts = {};

    /**
     * Gets information about a billing account. The current authenticated user must be a [viewer of the billing account](https://cloud.google.com/billing/docs/how-to/billing-access).
     * @param {string} params.name - (Required) Required. The resource name of the billing account to retrieve. For example, `billingAccounts/012345-567890-ABCDEF`.
     * @return {object} The API response object.
     */
    this.billingAccounts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).
     * @param {string} params.filter - Options for how to filter the returned billing accounts. This only supports filtering for [subaccounts](https://cloud.google.com/billing/docs/concepts) under a single provided parent billing account. (for example, `master_billing_account=billingAccounts/012345-678901-ABCDEF`). Boolean algebra and other fields are not currently supported.
     * @param {integer} params.pageSize - Requested page size. The maximum page size is 100; this is also the default.
     * @param {string} params.pageToken - A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListBillingAccounts` call. If unspecified, the first page of results is returned.
     * @param {string} params.parent - Optional. The parent resource to list billing accounts from. Format: - `organizations/{organization_id}`, for example, `organizations/12345678` - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF`
     * @return {object} The API response object.
     */
    this.billingAccounts.list = (params) => this._makeRequest('v1/billingAccounts', 'GET', params);

    /**
     * Updates a billing account's fields. Currently the only field that can be edited is `display_name`. The current authenticated user must have the `billing.accounts.update` IAM permission, which is typically given to the [administrator](https://cloud.google.com/billing/docs/how-to/billing-access) of the billing account.
     * @param {string} params.name - (Required) Required. The name of the billing account resource to be updated.
     * @param {string} params.updateMask - The update mask applied to the resource. Only "display_name" is currently supported.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned for subaccounts.
     * @param {string} params.parent - Optional. The parent to create a billing account from. Format: - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.create = (params) => this._makeRequest('v1/billingAccounts', 'POST', params);

    /**
     * Gets the access control policy for a billing account. The caller must have the `billing.accounts.getIamPolicy` permission on the account, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.billingAccounts.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Sets the access control policy for a billing account. Replaces any existing policy. The caller must have the `billing.accounts.setIamPolicy` permission on the account, which is often given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Tests the access control policy for a billing account. This method takes the resource and a set of permissions as input and returns the subset of the input permissions that the caller is allowed for that resource.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Changes which parent organization a billing account belongs to.
     * @param {string} params.name - (Required) Required. The resource name of the billing account to move. Must be of the form `billingAccounts/{billing_account_id}`. The specified billing account cannot be a subaccount, since a subaccount always belongs to the same organization as its parent account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.move = (params) => this._makeRequest('v1/{+name}:move', 'POST', params);

    this.billingAccounts.subAccounts = {};

    /**
     * Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).
     * @param {string} params.filter - Options for how to filter the returned billing accounts. This only supports filtering for [subaccounts](https://cloud.google.com/billing/docs/concepts) under a single provided parent billing account. (for example, `master_billing_account=billingAccounts/012345-678901-ABCDEF`). Boolean algebra and other fields are not currently supported.
     * @param {integer} params.pageSize - Requested page size. The maximum page size is 100; this is also the default.
     * @param {string} params.pageToken - A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListBillingAccounts` call. If unspecified, the first page of results is returned.
     * @param {string} params.parent - (Required) Optional. The parent resource to list billing accounts from. Format: - `organizations/{organization_id}`, for example, `organizations/12345678` - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF`
     * @return {object} The API response object.
     */
    this.billingAccounts.subAccounts.list = (params) => this._makeRequest('v1/{+parent}/subAccounts', 'GET', params);

    /**
     * This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned for subaccounts.
     * @param {string} params.parent - (Required) Optional. The parent to create a billing account from. Format: - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.subAccounts.create = (params) => this._makeRequest('v1/{+parent}/subAccounts', 'POST', params);

    this.billingAccounts.projects = {};

    /**
     * Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
     * @param {string} params.name - (Required) Required. The resource name of the billing account associated with the projects that you want to list. For example, `billingAccounts/012345-567890-ABCDEF`.
     * @param {integer} params.pageSize - Requested page size. The maximum page size is 100; this is also the default.
     * @param {string} params.pageToken - A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous `ListProjectBillingInfo` call. If unspecified, the first page of results is returned.
     * @return {object} The API response object.
     */
    this.billingAccounts.projects.list = (params) => this._makeRequest('v1/{+name}/projects', 'GET', params);

    this.organizations = {};

    this.organizations.billingAccounts = {};

    /**
     * Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).
     * @param {string} params.filter - Options for how to filter the returned billing accounts. This only supports filtering for [subaccounts](https://cloud.google.com/billing/docs/concepts) under a single provided parent billing account. (for example, `master_billing_account=billingAccounts/012345-678901-ABCDEF`). Boolean algebra and other fields are not currently supported.
     * @param {integer} params.pageSize - Requested page size. The maximum page size is 100; this is also the default.
     * @param {string} params.pageToken - A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListBillingAccounts` call. If unspecified, the first page of results is returned.
     * @param {string} params.parent - (Required) Optional. The parent resource to list billing accounts from. Format: - `organizations/{organization_id}`, for example, `organizations/12345678` - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF`
     * @return {object} The API response object.
     */
    this.organizations.billingAccounts.list = (params) => this._makeRequest('v1/{+parent}/billingAccounts', 'GET', params);

    /**
     * This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned for subaccounts.
     * @param {string} params.parent - (Required) Optional. The parent to create a billing account from. Format: - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.billingAccounts.create = (params) => this._makeRequest('v1/{+parent}/billingAccounts', 'POST', params);

    /**
     * Changes which parent organization a billing account belongs to.
     * @param {string} params.destinationParent - (Required) Required. The resource name of the Organization to move the billing account under. Must be of the form `organizations/{organization_id}`.
     * @param {string} params.name - (Required) Required. The resource name of the billing account to move. Must be of the form `billingAccounts/{billing_account_id}`. The specified billing account cannot be a subaccount, since a subaccount always belongs to the same organization as its parent account.
     * @return {object} The API response object.
     */
    this.organizations.billingAccounts.move = (params) => this._makeRequest('v1/{+destinationParent}/{+name}:move', 'GET', params);

    this.projects = {};

    /**
     * Gets the billing information for a project. The current authenticated user must have the `resourcemanager.projects.get` permission for the project, which can be granted by assigning the [Project Viewer](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) role.
     * @param {string} params.name - (Required) Required. The resource name of the project for which billing information is retrieved. For example, `projects/tokyo-rain-123`.
     * @return {object} The API response object.
     */
    this.projects.getBillingInfo = (params) => this._makeRequest('v1/{+name}/billingInfo', 'GET', params);

    /**
     * Sets or updates the billing account associated with a project. You specify the new billing account by setting the `billing_account_name` in the `ProjectBillingInfo` resource to the resource name of a billing account. Associating a project with an open billing account enables billing on the project and allows charges for resource usage. If the project already had a billing account, this method changes the billing account used for resource usage charges. *Note:* Incurred charges that have not yet been reported in the transaction history of the Google Cloud Console might be billed to the new billing account, even if the charge occurred before the new billing account was assigned to the project. The current authenticated user must have ownership privileges for both the [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo ) and the [billing account](https://cloud.google.com/billing/docs/how-to/billing-access). You can disable billing on the project by setting the `billing_account_name` field to empty. This action disassociates the current billing account from the project. Any billable activity of your in-use services will stop, and your application could stop functioning as expected. Any unbilled charges to date will be billed to the previously associated account. The current authenticated user must be either an owner of the project or an owner of the billing account for the project. Note that associating a project with a *closed* billing account will have much the same effect as disabling billing on the project: any paid resources used by the project will be shut down. Thus, unless you wish to disable billing, you should always call this method with the name of an *open* billing account.
     * @param {string} params.name - (Required) Required. The resource name of the project associated with the billing information that you want to update. For example, `projects/tokyo-rain-123`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.updateBillingInfo = (params) => this._makeRequest('v1/{+name}/billingInfo', 'PUT', params);

    this.services = {};

    /**
     * Lists all public cloud services.
     * @param {integer} params.pageSize - Requested page size. Defaults to 5000.
     * @param {string} params.pageToken - A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListServices` call. If unspecified, the first page of results is returned.
     * @return {object} The API response object.
     */
    this.services.list = (params) => this._makeRequest('v1/services', 'GET', params);

    this.services.skus = {};

    /**
     * Lists all publicly available SKUs for a given cloud service.
     * @param {string} params.currencyCode - The ISO 4217 currency code for the pricing info in the response proto. Will use the conversion rate as of start_time. Optional. If not specified USD will be used.
     * @param {string} params.endTime - Optional exclusive end time of the time range for which the pricing versions will be returned. Timestamps in the future are not allowed. The time range has to be within a single calendar month in America/Los_Angeles timezone. Time range as a whole is optional. If not specified, the latest pricing will be returned (up to 12 hours old at most).
     * @param {integer} params.pageSize - Requested page size. Defaults to 5000.
     * @param {string} params.pageToken - A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListSkus` call. If unspecified, the first page of results is returned.
     * @param {string} params.parent - (Required) Required. The name of the service. Example: "services/6F81-5844-456A"
     * @param {string} params.startTime - Optional inclusive start time of the time range for which the pricing versions will be returned. Timestamps in the future are not allowed. The time range has to be within a single calendar month in America/Los_Angeles timezone. Time range as a whole is optional. If not specified, the latest pricing will be returned (up to 12 hours old at most).
     * @return {object} The API response object.
     */
    this.services.skus.list = (params) => this._makeRequest('v1/{+parent}/skus', 'GET', params);
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
