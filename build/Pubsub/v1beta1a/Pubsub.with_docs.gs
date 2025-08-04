
/**
 * Google Apps Script client library for the Cloud Pub/Sub API
 * Documentation URL: https://cloud.google.com/pubsub/docs
 * @class
 */
class Pubsub {
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
    this._rootUrl = 'https://pubsub.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.topics = {};

    /**
     * Creates the given topic with the given name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.topics.create = (params) => this._makeRequest('v1beta1a/topics', 'POST', params);

    /**
     * Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.topics.publish = (params) => this._makeRequest('v1beta1a/topics/publish', 'POST', params);

    /**
     * Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.topics.publishBatch = (params) => this._makeRequest('v1beta1a/topics/publishBatch', 'POST', params);

    /**
     * Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.
     * @param {string} params.topic - (Required) The name of the topic to get.
     * @return {object} The API response object.
     */
    this.topics.get = (params) => this._makeRequest('v1beta1a/topics/{+topic}', 'GET', params);

    /**
     * Lists matching topics.
     * @param {integer} params.maxResults - Maximum number of topics to return.
     * @param {string} params.pageToken - The value obtained in the last ListTopicsResponse for continuation.
     * @param {string} params.query - A valid label query expression.
     * @return {object} The API response object.
     */
    this.topics.list = (params) => this._makeRequest('v1beta1a/topics', 'GET', params);

    /**
     * Deletes the topic with the given name. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.
     * @param {string} params.topic - (Required) Name of the topic to delete.
     * @return {object} The API response object.
     */
    this.topics.delete = (params) => this._makeRequest('v1beta1a/topics/{+topic}', 'DELETE', params);

    this.subscriptions = {};

    /**
     * Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.subscriptions.create = (params) => this._makeRequest('v1beta1a/subscriptions', 'POST', params);

    /**
     * Gets the configuration details of a subscription.
     * @param {string} params.subscription - (Required) The name of the subscription to get.
     * @return {object} The API response object.
     */
    this.subscriptions.get = (params) => this._makeRequest('v1beta1a/subscriptions/{+subscription}', 'GET', params);

    /**
     * Lists matching subscriptions.
     * @param {integer} params.maxResults - Maximum number of subscriptions to return.
     * @param {string} params.pageToken - The value obtained in the last ListSubscriptionsResponse for continuation.
     * @param {string} params.query - A valid label query expression.
     * @return {object} The API response object.
     */
    this.subscriptions.list = (params) => this._makeRequest('v1beta1a/subscriptions', 'GET', params);

    /**
     * Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.
     * @param {string} params.subscription - (Required) The subscription to delete.
     * @return {object} The API response object.
     */
    this.subscriptions.delete = (params) => this._makeRequest('v1beta1a/subscriptions/{+subscription}', 'DELETE', params);

    /**
     * Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.subscriptions.modifyPushConfig = (params) => this._makeRequest('v1beta1a/subscriptions/modifyPushConfig', 'POST', params);

    /**
     * Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.subscriptions.pull = (params) => this._makeRequest('v1beta1a/subscriptions/pull', 'POST', params);

    /**
     * Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.subscriptions.pullBatch = (params) => this._makeRequest('v1beta1a/subscriptions/pullBatch', 'POST', params);

    /**
     * Modifies the Ack deadline for a message received from a pull request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.subscriptions.modifyAckDeadline = (params) => this._makeRequest('v1beta1a/subscriptions/modifyAckDeadline', 'POST', params);

    /**
     * Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.subscriptions.acknowledge = (params) => this._makeRequest('v1beta1a/subscriptions/acknowledge', 'POST', params);
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
