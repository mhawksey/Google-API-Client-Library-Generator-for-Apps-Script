
/**
 * Google Apps Script client library for the Google Workspace Alert Center API
 * Documentation URL: https://developers.google.com/workspace/admin/alertcenter/
 * @class
 */
class Alertcenter {
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
    this._rootUrl = 'https://alertcenter.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.alerts = {};

    /**
     * Lists the alerts.
     * @param {string} params.customerId - Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     * @param {string} params.filter - Optional. A query string for filtering alert results. For more details, see [Query filters](https://developers.google.com/workspace/admin/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/workspace/admin/alertcenter/reference/filter-fields#alerts.list).
     * @param {string} params.orderBy - Optional. The sort order of the list results. If not specified results may be returned in arbitrary order. You can sort the results in descending order based on the creation timestamp using `order_by="create_time desc"`. Currently, supported sorting are `create_time asc`, `create_time desc`, `update_time desc`
     * @param {integer} params.pageSize - Optional. The requested page size. Server may return fewer items than requested. If unspecified, server picks an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return. If empty, a new iteration is started. To continue an iteration, pass in the value from the previous ListAlertsResponse's next_page_token field.
     * @return {object} The API response object.
     */
    this.alerts.list = (params) => this._makeRequest('v1beta1/alerts', 'GET', params);

    /**
     * Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.
     * @param {string} params.alertId - (Required) Required. The identifier of the alert to retrieve.
     * @param {string} params.customerId - Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     * @return {object} The API response object.
     */
    this.alerts.get = (params) => this._makeRequest('v1beta1/alerts/{alertId}', 'GET', params);

    /**
     * Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.
     * @param {string} params.alertId - (Required) Required. The identifier of the alert to delete.
     * @param {string} params.customerId - Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     * @return {object} The API response object.
     */
    this.alerts.delete = (params) => this._makeRequest('v1beta1/alerts/{alertId}', 'DELETE', params);

    /**
     * Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.
     * @param {string} params.alertId - (Required) Required. The identifier of the alert to undelete.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.alerts.undelete = (params) => this._makeRequest('v1beta1/alerts/{alertId}:undelete', 'POST', params);

    /**
     * Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.
     * @param {string} params.alertId - (Required) Required. The identifier of the alert this metadata belongs to.
     * @param {string} params.customerId - Optional. The unique identifier of the Google Workspace account of the customer the alert metadata is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     * @return {object} The API response object.
     */
    this.alerts.getMetadata = (params) => this._makeRequest('v1beta1/alerts/{alertId}/metadata', 'GET', params);

    /**
     * Performs batch delete operation on alerts.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.alerts.batchDelete = (params) => this._makeRequest('v1beta1/alerts:batchDelete', 'POST', params);

    /**
     * Performs batch undelete operation on alerts.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.alerts.batchUndelete = (params) => this._makeRequest('v1beta1/alerts:batchUndelete', 'POST', params);

    this.alerts.feedback = {};

    /**
     * Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.
     * @param {string} params.alertId - (Required) Required. The identifier of the alert this feedback belongs to.
     * @param {string} params.customerId - Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.alerts.feedback.create = (params) => this._makeRequest('v1beta1/alerts/{alertId}/feedback', 'POST', params);

    /**
     * Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.
     * @param {string} params.alertId - (Required) Required. The alert identifier. The "-" wildcard could be used to represent all alerts.
     * @param {string} params.customerId - Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     * @param {string} params.filter - Optional. A query string for filtering alert feedback results. For more details, see [Query filters](https://developers.google.com/workspace/admin/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/workspace/admin/alertcenter/reference/filter-fields#alerts.feedback.list).
     * @return {object} The API response object.
     */
    this.alerts.feedback.list = (params) => this._makeRequest('v1beta1/alerts/{alertId}/feedback', 'GET', params);

    this.v1beta1 = {};

    /**
     * Returns customer-level settings.
     * @param {string} params.customerId - Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The `customer_id` must/ have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     * @return {object} The API response object.
     */
    this.v1beta1.getSettings = (params) => this._makeRequest('v1beta1/settings', 'GET', params);

    /**
     * Updates the customer-level settings.
     * @param {string} params.customerId - Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.v1beta1.updateSettings = (params) => this._makeRequest('v1beta1/settings', 'PATCH', params);
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
