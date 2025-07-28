
/**
 * Google Apps Script client library for the Google Forms API
 * Documentation URL: https://developers.google.com/workspace/forms/api
 * @class
 */
class Forms {
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
    this._rootUrl = 'https://forms.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.forms = {};

    /**
     * Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.
     * @param {boolean} params.unpublished - Optional. Whether the form is unpublished. If set to `true`, the form doesn't accept responses. If set to `false` or unset, the form is published and accepts responses.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.forms.create = (params) => this._makeRequest('v1/forms', 'POST', params);

    /**
     * Get a form.
     * @param {string} params.formId - (Required) Required. The form ID.
     * @return {object} The API response object.
     */
    this.forms.get = (params) => this._makeRequest('v1/forms/{formId}', 'GET', params);

    /**
     * Change the form with a batch of updates.
     * @param {string} params.formId - (Required) Required. The form ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.forms.batchUpdate = (params) => this._makeRequest('v1/forms/{formId}:batchUpdate', 'POST', params);

    /**
     * Updates the publish settings of a form. Legacy forms aren't supported because they don't have the `publish_settings` field.
     * @param {string} params.formId - (Required) Required. The ID of the form. You can get the id from Form.form_id field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.forms.setPublishSettings = (params) => this._makeRequest('v1/forms/{formId}:setPublishSettings', 'POST', params);

    this.forms.responses = {};

    /**
     * Get one response from the form.
     * @param {string} params.formId - (Required) Required. The form ID.
     * @param {string} params.responseId - (Required) Required. The response ID within the form.
     * @return {object} The API response object.
     */
    this.forms.responses.get = (params) => this._makeRequest('v1/forms/{formId}/responses/{responseId}', 'GET', params);

    /**
     * List a form's responses.
     * @param {string} params.filter - Which form responses to return. Currently, the only supported filters are: * timestamp > *N* which means to get all form responses submitted after (but not at) timestamp *N*. * timestamp >= *N* which means to get all form responses submitted at and after timestamp *N*. For both supported filters, timestamp must be formatted in RFC3339 UTC "Zulu" format. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     * @param {string} params.formId - (Required) Required. ID of the Form whose responses to list.
     * @param {integer} params.pageSize - The maximum number of responses to return. The service may return fewer than this value. If unspecified or zero, at most 5000 responses are returned.
     * @param {string} params.pageToken - A page token returned by a previous list response. If this field is set, the form and the values of the filter must be the same as for the original request.
     * @return {object} The API response object.
     */
    this.forms.responses.list = (params) => this._makeRequest('v1/forms/{formId}/responses', 'GET', params);

    this.forms.watches = {};

    /**
     * Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).
     * @param {string} params.formId - (Required) Required. ID of the Form to watch.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.forms.watches.create = (params) => this._makeRequest('v1/forms/{formId}/watches', 'POST', params);

    /**
     * Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.
     * @param {string} params.formId - (Required) Required. ID of the Form whose watches to list.
     * @return {object} The API response object.
     */
    this.forms.watches.list = (params) => this._makeRequest('v1/forms/{formId}/watches', 'GET', params);

    /**
     * Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.
     * @param {string} params.formId - (Required) Required. The ID of the Form.
     * @param {string} params.watchId - (Required) Required. The ID of the Watch to renew.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.forms.watches.renew = (params) => this._makeRequest('v1/forms/{formId}/watches/{watchId}:renew', 'POST', params);

    /**
     * Delete a watch.
     * @param {string} params.formId - (Required) Required. The ID of the Form.
     * @param {string} params.watchId - (Required) Required. The ID of the Watch to delete.
     * @return {object} The API response object.
     */
    this.forms.watches.delete = (params) => this._makeRequest('v1/forms/{formId}/watches/{watchId}', 'DELETE', params);
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
