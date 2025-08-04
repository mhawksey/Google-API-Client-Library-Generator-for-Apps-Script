
/**
 * Google Apps Script client library for the Payments Reseller Subscription API
 * Documentation URL: https://developers.google.com/payments/reseller/subscription/
 * @class
 */
class Paymentsresellersubscription {
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
    this._rootUrl = 'https://paymentsresellersubscription.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.partners = {};

    this.partners.subscriptions = {};

    /**
     * Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.
     * @param {string} params.parent - (Required) Required. The parent resource name, which is the identifier of the partner. It will have the format of "partners/{partner_id}".
     * @param {string} params.subscriptionId - Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.subscriptions.create = (params) => this._makeRequest('v1/{+parent}/subscriptions', 'POST', params);

    /**
     * Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.
     * @param {string} params.parent - (Required) Required. The parent resource name, which is the identifier of the partner. It will have the format of "partners/{partner_id}".
     * @param {string} params.subscriptionId - Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.subscriptions.provision = (params) => this._makeRequest('v1/{+parent}/subscriptions:provision', 'POST', params);

    /**
     * Gets a subscription by id. It should be called directly by the partner using service accounts.
     * @param {string} params.name - (Required) Required. The name of the subscription resource to retrieve. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"
     * @return {object} The API response object.
     */
    this.partners.subscriptions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Entitles a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.
     * @param {string} params.name - (Required) Required. The name of the subscription resource that is entitled to the current end user. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.subscriptions.entitle = (params) => this._makeRequest('v1/{+name}:entitle', 'POST', params);

    /**
     * [Opt-in only] Most partners should be on auto-extend by default. Extends a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.
     * @param {string} params.name - (Required) Required. The name of the subscription resource to be extended. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.subscriptions.extend = (params) => this._makeRequest('v1/{+name}:extend', 'POST', params);

    /**
     * Cancels a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.
     * @param {string} params.name - (Required) Required. The name of the subscription resource to be cancelled. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.subscriptions.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    /**
     * Currently, it is used by **Google One, Play Pass** partners. Revokes the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.
     * @param {string} params.name - (Required) Required. The name of the subscription resource whose pending cancellation needs to be undone. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.subscriptions.undoCancel = (params) => this._makeRequest('v1/{+name}:undoCancel', 'POST', params);

    /**
     * Suspends a subscription. Contract terms may dictate if a prorated refund will be issued upon suspension. It should be called directly by the partner using service accounts.
     * @param {string} params.name - (Required) Required. The name of the subscription resource to be suspended. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.subscriptions.suspend = (params) => this._makeRequest('v1/{+name}:suspend', 'POST', params);

    /**
     * Resumes a suspended subscription. The new billing cycle will start at the time of the request. It should be called directly by the partner using service accounts.
     * @param {string} params.name - (Required) Required. The name of the subscription resource to be resumed. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.subscriptions.resume = (params) => this._makeRequest('v1/{+name}:resume', 'POST', params);

    this.partners.products = {};

    /**
     * Currently, it doesn't support **YouTube** products. Retrieves the products that can be resold by the partner. It should be autenticated with a service account.
     * @param {string} params.filter - Optional. Specifies the filters for the product results. The syntax is defined in https://google.aip.dev/160 with the following caveats: 1. Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) 2. Only the following fields are supported: - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` 3. Unless explicitly mentioned above, other features are not supported. Example: `regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id`
     * @param {integer} params.pageSize - Optional. The maximum number of products to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProducts` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, the partner that can resell. Format: partners/{partner}
     * @return {object} The API response object.
     */
    this.partners.products.list = (params) => this._makeRequest('v1/{+parent}/products', 'GET', params);

    this.partners.promotions = {};

    /**
     * Currently, it is only enabeld for **YouTube**. Finds eligible promotions for the current user. The API requires user authorization via OAuth. The bare minimum oauth scope `openid` is sufficient, which will skip the consent screen.
     * @param {string} params.parent - (Required) Required. The parent, the partner that can resell. Format: partners/{partner}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.promotions.findEligible = (params) => this._makeRequest('v1/{+parent}/promotions:findEligible', 'POST', params);

    /**
     * Currently, it doesn't support **YouTube** promotions. Retrieves the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.
     * @param {string} params.filter - Optional. Specifies the filters for the promotion results. The syntax is defined in https://google.aip.dev/160 with the following caveats: 1. Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) 2. Only the following fields are supported: - `applicableProducts` - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` 3. Unless explicitly mentioned above, other features are not supported. Example: `applicableProducts:partners/partner1/products/product1 AND regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id`
     * @param {integer} params.pageSize - Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, the partner that can resell. Format: partners/{partner}
     * @return {object} The API response object.
     */
    this.partners.promotions.list = (params) => this._makeRequest('v1/{+parent}/promotions', 'GET', params);

    this.partners.userSessions = {};

    /**
     * This API replaces user authorized OAuth consent based APIs (Create, Entitle). Issues a timed session token for the given user intent. You can use the session token to redirect the user to Google to finish the signup flow. You can re-generate new session token repeatedly for the same request if necessary, regardless of the previous tokens being expired or not. By default, the session token is valid for 1 hour.
     * @param {string} params.parent - (Required) Required. The parent, the partner that can resell. Format: partners/{partner}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.userSessions.generate = (params) => this._makeRequest('v1/{+parent}/userSessions:generate', 'POST', params);
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
