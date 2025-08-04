
/**
 * Google Apps Script client library for the My Business Q&A API
 * Documentation URL: https://developers.google.com/my-business/
 * @class
 */
class Mybusinessqanda {
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
    this._rootUrl = 'https://mybusinessqanda.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.locations = {};

    this.locations.questions = {};

    /**
     * Returns the paginated list of questions and some of its answers for a specified location. This operation is only valid if the specified location is verified.
     * @param {integer} params.answersPerQuestion - Optional. How many answers to fetch per question. The default and maximum `answers_per_question` values are 10.
     * @param {string} params.filter - Optional. A filter constraining the questions to return. The only filter currently supported is "ignore_answered=true"
     * @param {string} params.orderBy - Optional. The order to return the questions. Valid options include 'update_time desc' and 'upvote_count desc', which will return the questions sorted descendingly by the requested field. The default sort order is 'update_time desc'.
     * @param {integer} params.pageSize - Optional. How many questions to fetch per page. The default and maximum `page_size` values are 10.
     * @param {string} params.pageToken - Optional. If specified, the next page of questions is retrieved.
     * @param {string} params.parent - (Required) Required. The name of the location to fetch questions for.
     * @return {object} The API response object.
     */
    this.locations.questions.list = (params) => this._makeRequest('v1/{+parent}', 'GET', params);

    /**
     * Adds a question for the specified location.
     * @param {string} params.parent - (Required) Required. The name of the location to write a question for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.questions.create = (params) => this._makeRequest('v1/{+parent}', 'POST', params);

    /**
     * Updates a specific question written by the current user.
     * @param {string} params.name - (Required) Immutable. The unique name for the question. locations/*\/questions/* This field will be ignored if set during question creation.
     * @param {string} params.updateMask - Required. The specific fields to update. Only question text can be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.questions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a specific question written by the current user.
     * @param {string} params.name - (Required) Required. The name of the question to delete.
     * @return {object} The API response object.
     */
    this.locations.questions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.locations.questions.answers = {};

    /**
     * Returns the paginated list of answers for a specified question.
     * @param {string} params.orderBy - Optional. The order to return the answers. Valid options include 'update_time desc' and 'upvote_count desc', which will return the answers sorted descendingly by the requested field. The default sort order is 'update_time desc'.
     * @param {integer} params.pageSize - Optional. How many answers to fetch per page. The default and maximum `page_size` values are 10.
     * @param {string} params.pageToken - Optional. If specified, the next page of answers is retrieved.
     * @param {string} params.parent - (Required) Required. The name of the question to fetch answers for.
     * @return {object} The API response object.
     */
    this.locations.questions.answers.list = (params) => this._makeRequest('v1/{+parent}/answers', 'GET', params);

    /**
     * Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.
     * @param {string} params.parent - (Required) Required. The name of the question to write an answer for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.questions.answers.upsert = (params) => this._makeRequest('v1/{+parent}/answers:upsert', 'POST', params);

    /**
     * Deletes the answer written by the current user to a question.
     * @param {string} params.name - (Required) Required. The name of the question to delete an answer for.
     * @return {object} The API response object.
     */
    this.locations.questions.answers.delete = (params) => this._makeRequest('v1/{+name}/answers:delete', 'DELETE', params);
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
