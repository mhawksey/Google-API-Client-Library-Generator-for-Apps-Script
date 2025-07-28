
/**
 * Google Apps Script client library for the Google Workspace Reseller API
 * Documentation URL: https://developers.google.com/google-apps/reseller/
 * @class
 */
class Reseller {
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
    this._rootUrl = 'https://reseller.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.customers = {};

    /**
     * Gets a customer account. Use this operation to see a customer account already in your reseller management, or to see the minimal account information for an existing customer that you do not manage. For more information about the API response for existing customers, see [retrieving a customer account](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_customers#get_customer).
     * @param {string} params.customerId - (Required) This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
     * @return {object} The API response object.
     */
    this.customers.get = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}', 'GET', params);

    /**
     * Orders a new customer's account. Before ordering a new customer account, establish whether the customer account already exists using the [`customers.get`](https://developers.google.com/workspace/admin/reseller/v1/reference/customers/get) If the customer account exists as a direct Google account or as a resold customer account from another reseller, use the `customerAuthToken\` as described in [order a resold account for an existing customer](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_customers#create_existing_customer). For more information about ordering a new customer account, see [order a new customer account](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_customers#create_customer). After creating a new customer account, you must provision a user as an administrator. The customer's administrator is required to sign in to the Admin console and sign the G Suite via Reseller agreement to activate the account. Resellers are prohibited from signing the G Suite via Reseller agreement on the customer's behalf. For more information, see [order a new customer account](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_customers#tos).
     * @param {string} params.customerAuthToken - The `customerAuthToken` query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.insert = (params) => this._makeRequest('apps/reseller/v1/customers', 'POST', params);

    /**
     * Updates a customer account's settings. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [update a customer's settings](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_customers#update_customer).
     * @param {string} params.customerId - (Required) This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.update = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}', 'PUT', params);

    /**
     * Updates a customer account's settings. This method supports patch semantics. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [Verify your domain to unlock Essentials features](https://support.google.com/a/answer/9122284).
     * @param {string} params.customerId - (Required) This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.patch = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}', 'PATCH', params);

    this.resellernotify = {};

    /**
     * Returns all the details of the watch corresponding to the reseller.
     * @return {object} The API response object.
     */
    this.resellernotify.getwatchdetails = (params) => this._makeRequest('apps/reseller/v1/resellernotify/getwatchdetails', 'GET', params);

    /**
     * Registers a Reseller for receiving notifications.
     * @param {string} params.serviceAccountEmailAddress - The service account which will own the created Cloud-PubSub topic.
     * @return {object} The API response object.
     */
    this.resellernotify.register = (params) => this._makeRequest('apps/reseller/v1/resellernotify/register', 'POST', params);

    /**
     * Unregisters a Reseller for receiving notifications.
     * @param {string} params.serviceAccountEmailAddress - The service account which owns the Cloud-PubSub topic.
     * @return {object} The API response object.
     */
    this.resellernotify.unregister = (params) => this._makeRequest('apps/reseller/v1/resellernotify/unregister', 'POST', params);

    this.subscriptions = {};

    /**
     * Activates a subscription previously suspended by the reseller. If you did not suspend the customer subscription and it is suspended for any other reason, such as for abuse or a pending ToS acceptance, this call will not reactivate the customer subscription.
     * @param {string} params.customerId - (Required) This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
     * @param {string} params.subscriptionId - (Required) This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.
     * @return {object} The API response object.
     */
    this.subscriptions.activate = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/activate', 'POST', params);

    /**
     * Updates a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments. How a plan is updated differs depending on the plan and the products. For more information, see the description in [manage subscriptions](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#update_subscription_plan).
     * @param {string} params.customerId - (Required) This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
     * @param {string} params.subscriptionId - (Required) This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.subscriptions.changePlan = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changePlan', 'POST', params);

    /**
     * Updates a user license's renewal settings. This is applicable for accounts with annual commitment plans only. For more information, see the description in [manage subscriptions](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#update_renewal).
     * @param {string} params.customerId - (Required) This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
     * @param {string} params.subscriptionId - (Required) This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.subscriptions.changeRenewalSettings = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeRenewalSettings', 'POST', params);

    /**
     * Updates a subscription's user license settings. For more information about updating an annual commitment plan or a flexible plan subscription’s licenses, see [Manage Subscriptions](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#update_subscription_seat).
     * @param {string} params.customerId - (Required) This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
     * @param {string} params.subscriptionId - (Required) This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.subscriptions.changeSeats = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeSeats', 'POST', params);

    /**
     * Cancels, suspends, or transfers a subscription to direct.
     * @param {string} params.customerId - (Required) This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
     * @param {string} params.deletionType - (Required) The `deletionType` query string enables the cancellation, downgrade, or suspension of a subscription.
     * @param {string} params.subscriptionId - (Required) This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.
     * @return {object} The API response object.
     */
    this.subscriptions.delete = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}', 'DELETE', params);

    /**
     * Gets a specific subscription. The `subscriptionId` can be found using the [Retrieve all reseller subscriptions](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions) method. For more information about retrieving a specific subscription, see the information descrived in [manage subscriptions](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#get_subscription).
     * @param {string} params.customerId - (Required) This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
     * @param {string} params.subscriptionId - (Required) This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.
     * @return {object} The API response object.
     */
    this.subscriptions.get = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}', 'GET', params);

    /**
     * Creates or transfer a subscription. Create a subscription for a customer's account that you ordered using the [Order a new customer account](https://developers.google.com/workspace/admin/reseller/v1/reference/customers/insert.html) method. For more information about creating a subscription for different payment plans, see [manage subscriptions](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#create_subscription).\ If you did not order the customer's account using the customer insert method, use the customer's `customerAuthToken` when creating a subscription for that customer. If transferring a G Suite subscription with an associated Google Drive or Google Vault subscription, use the [batch operation](https://developers.google.com/workspace/admin/reseller/v1/how-tos/batch.html) to transfer all of these subscriptions. For more information, see how to [transfer subscriptions](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#transfer_a_subscription).
     * @param {string} params.action - The intented insert action. Advised to set this when the customer already has a subscription for a different SKU in the same product.
     * @param {string} params.customerAuthToken - The `customerAuthToken` query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
     * @param {string} params.customerId - (Required) This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
     * @param {string} params.sourceSkuId - The sku_id of the existing subscription to be upgraded or downgraded. This is required when action is SWITCH.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.subscriptions.insert = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions', 'POST', params);

    /**
     * Lists of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions. Optionally, this method can filter the response by a `customerNamePrefix`. For more information, see [manage subscriptions](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions).
     * @param {string} params.customerAuthToken - The `customerAuthToken` query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
     * @param {string} params.customerId - This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
     * @param {string} params.customerNamePrefix - When retrieving all of your subscriptions and filtering for specific customers, you can enter a prefix for a customer name. Using an example customer group that includes `exam.com`, `example20.com` and `example.com`: - `exa` -- Returns all customer names that start with 'exa' which could include `exam.com`, `example20.com`, and `example.com`. A name prefix is similar to using a regular expression's asterisk, exa*. - `example` -- Returns `example20.com` and `example.com`.
     * @param {integer} params.maxResults - When retrieving a large list, the `maxResults` is the maximum number of results per page. The `nextPageToken` value takes you to the next page. The default is 20.
     * @param {string} params.pageToken - Token to specify next page in the list
     * @return {object} The API response object.
     */
    this.subscriptions.list = (params) => this._makeRequest('apps/reseller/v1/subscriptions', 'GET', params);

    /**
     * Immediately move a 30-day free trial subscription to a paid service subscription. This method is only applicable if a payment plan has already been set up for the 30-day trial subscription. For more information, see [manage subscriptions](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#paid_service).
     * @param {string} params.customerId - (Required) This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
     * @param {string} params.subscriptionId - (Required) This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.
     * @return {object} The API response object.
     */
    this.subscriptions.startPaidService = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/startPaidService', 'POST', params);

    /**
     * Suspends an active subscription. You can use this method to suspend a paid subscription that is currently in the `ACTIVE` state. * For `FLEXIBLE` subscriptions, billing is paused. * For `ANNUAL_MONTHLY_PAY` or `ANNUAL_YEARLY_PAY` subscriptions: * Suspending the subscription does not change the renewal date that was originally committed to. * A suspended subscription does not renew. If you activate the subscription after the original renewal date, a new annual subscription will be created, starting on the day of activation. We strongly encourage you to suspend subscriptions only for short periods of time as suspensions over 60 days may result in the subscription being cancelled.
     * @param {string} params.customerId - (Required) This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
     * @param {string} params.subscriptionId - (Required) This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.
     * @return {object} The API response object.
     */
    this.subscriptions.suspend = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/suspend', 'POST', params);
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
