
/**
 * Google Apps Script client library for the Pub/Sub Lite API
 * Documentation URL: https://cloud.google.com/pubsub/lite/docs
 * @class
 */
class Pubsublite {
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
    this._rootUrl = 'https://pubsublite.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.admin = {};

    this.admin.projects = {};

    this.admin.projects.locations = {};

    this.admin.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.operations.list = (params) => this._makeRequest('v1/admin/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.operations.get = (params) => this._makeRequest('v1/admin/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.operations.delete = (params) => this._makeRequest('v1/admin/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.operations.cancel = (params) => this._makeRequest('v1/admin/{+name}:cancel', 'POST', params);

    this.admin.projects.locations.topics = {};

    /**
     * Creates a new topic.
     * @param {string} params.parent - (Required) Required. The parent location in which to create the topic. Structured like `projects/{project_number}/locations/{location}`.
     * @param {string} params.topicId - Required. The ID to use for the topic, which will become the final component of the topic's name. This value is structured like: `my-topic-name`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.topics.create = (params) => this._makeRequest('v1/admin/{+parent}/topics', 'POST', params);

    /**
     * Returns the topic configuration.
     * @param {string} params.name - (Required) Required. The name of the topic whose configuration to return.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.topics.get = (params) => this._makeRequest('v1/admin/{+name}', 'GET', params);

    /**
     * Returns the partition information for the requested topic.
     * @param {string} params.name - (Required) Required. The topic whose partition information to return.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.topics.getPartitions = (params) => this._makeRequest('v1/admin/{+name}/partitions', 'GET', params);

    /**
     * Returns the list of topics for the given project.
     * @param {integer} params.pageSize - The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the parent will be returned.
     * @param {string} params.pageToken - A page token, received from a previous `ListTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopics` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent whose topics are to be listed. Structured like `projects/{project_number}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.topics.list = (params) => this._makeRequest('v1/admin/{+parent}/topics', 'GET', params);

    /**
     * Updates properties of the specified topic.
     * @param {string} params.name - (Required) The name of the topic. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}
     * @param {string} params.updateMask - Required. A mask specifying the topic fields to change.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.topics.patch = (params) => this._makeRequest('v1/admin/{+name}', 'PATCH', params);

    /**
     * Deletes the specified topic.
     * @param {string} params.name - (Required) Required. The name of the topic to delete.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.topics.delete = (params) => this._makeRequest('v1/admin/{+name}', 'DELETE', params);

    this.admin.projects.locations.topics.subscriptions = {};

    /**
     * Lists the subscriptions attached to the specified topic.
     * @param {string} params.name - (Required) Required. The name of the topic whose subscriptions to list.
     * @param {integer} params.pageSize - The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the given topic will be returned.
     * @param {string} params.pageToken - A page token, received from a previous `ListTopicSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopicSubscriptions` must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.topics.subscriptions.list = (params) => this._makeRequest('v1/admin/{+name}/subscriptions', 'GET', params);

    this.admin.projects.locations.subscriptions = {};

    /**
     * Creates a new subscription.
     * @param {string} params.parent - (Required) Required. The parent location in which to create the subscription. Structured like `projects/{project_number}/locations/{location}`.
     * @param {boolean} params.skipBacklog - If true, the newly created subscription will only receive messages published after the subscription was created. Otherwise, the entire message backlog will be received on the subscription. Defaults to false.
     * @param {string} params.subscriptionId - Required. The ID to use for the subscription, which will become the final component of the subscription's name. This value is structured like: `my-sub-name`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.subscriptions.create = (params) => this._makeRequest('v1/admin/{+parent}/subscriptions', 'POST', params);

    /**
     * Returns the subscription configuration.
     * @param {string} params.name - (Required) Required. The name of the subscription whose configuration to return.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.subscriptions.get = (params) => this._makeRequest('v1/admin/{+name}', 'GET', params);

    /**
     * Returns the list of subscriptions for the given project.
     * @param {integer} params.pageSize - The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the parent will be returned.
     * @param {string} params.pageToken - A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent whose subscriptions are to be listed. Structured like `projects/{project_number}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.subscriptions.list = (params) => this._makeRequest('v1/admin/{+parent}/subscriptions', 'GET', params);

    /**
     * Updates properties of the specified subscription.
     * @param {string} params.name - (Required) The name of the subscription. Structured like: projects/{project_number}/locations/{location}/subscriptions/{subscription_id}
     * @param {string} params.updateMask - Required. A mask specifying the subscription fields to change.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.subscriptions.patch = (params) => this._makeRequest('v1/admin/{+name}', 'PATCH', params);

    /**
     * Deletes the specified subscription.
     * @param {string} params.name - (Required) Required. The name of the subscription to delete.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.subscriptions.delete = (params) => this._makeRequest('v1/admin/{+name}', 'DELETE', params);

    /**
     * Performs an out-of-band seek for a subscription to a specified target, which may be timestamps or named positions within the message backlog. Seek translates these targets to cursors for each partition and orchestrates subscribers to start consuming messages from these seek cursors. If an operation is returned, the seek has been registered and subscribers will eventually receive messages from the seek cursors (i.e. eventual consistency), as long as they are using a minimum supported client library version and not a system that tracks cursors independently of Pub/Sub Lite (e.g. Apache Beam, Dataflow, Spark). The seek operation will fail for unsupported clients. If clients would like to know when subscribers react to the seek (or not), they can poll the operation. The seek operation will succeed and complete once subscribers are ready to receive messages from the seek cursors for all partitions of the topic. This means that the seek operation will not complete until all subscribers come online. If the previous seek operation has not yet completed, it will be aborted and the new invocation of seek will supersede it.
     * @param {string} params.name - (Required) Required. The name of the subscription to seek.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.subscriptions.seek = (params) => this._makeRequest('v1/admin/{+name}:seek', 'POST', params);

    this.admin.projects.locations.reservations = {};

    /**
     * Creates a new reservation.
     * @param {string} params.parent - (Required) Required. The parent location in which to create the reservation. Structured like `projects/{project_number}/locations/{location}`.
     * @param {string} params.reservationId - Required. The ID to use for the reservation, which will become the final component of the reservation's name. This value is structured like: `my-reservation-name`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.reservations.create = (params) => this._makeRequest('v1/admin/{+parent}/reservations', 'POST', params);

    /**
     * Returns the reservation configuration.
     * @param {string} params.name - (Required) Required. The name of the reservation whose configuration to return. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}
     * @return {object} The API response object.
     */
    this.admin.projects.locations.reservations.get = (params) => this._makeRequest('v1/admin/{+name}', 'GET', params);

    /**
     * Returns the list of reservations for the given project.
     * @param {integer} params.pageSize - The maximum number of reservations to return. The service may return fewer than this value. If unset or zero, all reservations for the parent will be returned.
     * @param {string} params.pageToken - A page token, received from a previous `ListReservations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReservations` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent whose reservations are to be listed. Structured like `projects/{project_number}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.reservations.list = (params) => this._makeRequest('v1/admin/{+parent}/reservations', 'GET', params);

    /**
     * Updates properties of the specified reservation.
     * @param {string} params.name - (Required) The name of the reservation. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}
     * @param {string} params.updateMask - Required. A mask specifying the reservation fields to change.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.reservations.patch = (params) => this._makeRequest('v1/admin/{+name}', 'PATCH', params);

    /**
     * Deletes the specified reservation.
     * @param {string} params.name - (Required) Required. The name of the reservation to delete. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}
     * @return {object} The API response object.
     */
    this.admin.projects.locations.reservations.delete = (params) => this._makeRequest('v1/admin/{+name}', 'DELETE', params);

    this.admin.projects.locations.reservations.topics = {};

    /**
     * Lists the topics attached to the specified reservation.
     * @param {string} params.name - (Required) Required. The name of the reservation whose topics to list. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}
     * @param {integer} params.pageSize - The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the given reservation will be returned.
     * @param {string} params.pageToken - A page token, received from a previous `ListReservationTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReservationTopics` must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.admin.projects.locations.reservations.topics.list = (params) => this._makeRequest('v1/admin/{+name}/topics', 'GET', params);

    this.cursor = {};

    this.cursor.projects = {};

    this.cursor.projects.locations = {};

    this.cursor.projects.locations.subscriptions = {};

    /**
     * Updates the committed cursor.
     * @param {string} params.subscription - (Required) The subscription for which to update the cursor.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.cursor.projects.locations.subscriptions.commitCursor = (params) => this._makeRequest('v1/cursor/{+subscription}:commitCursor', 'POST', params);

    this.cursor.projects.locations.subscriptions.cursors = {};

    /**
     * Returns all committed cursor information for a subscription.
     * @param {integer} params.pageSize - The maximum number of cursors to return. The service may return fewer than this value. If unset or zero, all cursors for the parent will be returned.
     * @param {string} params.pageToken - A page token, received from a previous `ListPartitionCursors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPartitionCursors` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The subscription for which to retrieve cursors. Structured like `projects/{project_number}/locations/{location}/subscriptions/{subscription_id}`.
     * @return {object} The API response object.
     */
    this.cursor.projects.locations.subscriptions.cursors.list = (params) => this._makeRequest('v1/cursor/{+parent}/cursors', 'GET', params);

    this.topicStats = {};

    this.topicStats.projects = {};

    this.topicStats.projects.locations = {};

    this.topicStats.projects.locations.topics = {};

    /**
     * Compute statistics about a range of messages in a given topic and partition.
     * @param {string} params.topic - (Required) Required. The topic for which we should compute message stats.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.topicStats.projects.locations.topics.computeMessageStats = (params) => this._makeRequest('v1/topicStats/{+topic}:computeMessageStats', 'POST', params);

    /**
     * Compute the head cursor for the partition. The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.
     * @param {string} params.topic - (Required) Required. The topic for which we should compute the head cursor.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.topicStats.projects.locations.topics.computeHeadCursor = (params) => this._makeRequest('v1/topicStats/{+topic}:computeHeadCursor', 'POST', params);

    /**
     * Compute the corresponding cursor for a publish or event time in a topic partition.
     * @param {string} params.topic - (Required) Required. The topic for which we should compute the cursor.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.topicStats.projects.locations.topics.computeTimeCursor = (params) => this._makeRequest('v1/topicStats/{+topic}:computeTimeCursor', 'POST', params);
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
