
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://pubsublite.googleapis.com/';
    this._servicePath = '';


    this.admin = {};

    this.admin.projects = {};

    this.admin.projects.locations = {};

    this.admin.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - (Required) The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.admin.projects.locations.topics = {};

    /**
     * Creates a new topic.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent location in which to create the topic. Structured like `projects/{project_number}/locations/{location}`.
     * @param {string} apiParams.topicId - Required. The ID to use for the topic, which will become the final component of the topic's name. This value is structured like: `my-topic-name`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.topics.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+parent}/topics', 'POST', apiParams, clientConfig);

    /**
     * Returns the topic configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the topic whose configuration to return.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.topics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns the partition information for the requested topic.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The topic whose partition information to return.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.topics.getPartitions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}/partitions', 'GET', apiParams, clientConfig);

    /**
     * Returns the list of topics for the given project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the parent will be returned.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopics` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent whose topics are to be listed. Structured like `projects/{project_number}/locations/{location}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.topics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+parent}/topics', 'GET', apiParams, clientConfig);

    /**
     * Updates properties of the specified topic.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the topic. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}
     * @param {string} apiParams.updateMask - Required. A mask specifying the topic fields to change.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.topics.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified topic.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the topic to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.topics.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'DELETE', apiParams, clientConfig);

    this.admin.projects.locations.topics.subscriptions = {};

    /**
     * Lists the subscriptions attached to the specified topic.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the topic whose subscriptions to list.
     * @param {integer} apiParams.pageSize - The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the given topic will be returned.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListTopicSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopicSubscriptions` must match the call that provided the page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.topics.subscriptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}/subscriptions', 'GET', apiParams, clientConfig);

    this.admin.projects.locations.subscriptions = {};

    /**
     * Creates a new subscription.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent location in which to create the subscription. Structured like `projects/{project_number}/locations/{location}`.
     * @param {boolean} apiParams.skipBacklog - If true, the newly created subscription will only receive messages published after the subscription was created. Otherwise, the entire message backlog will be received on the subscription. Defaults to false.
     * @param {string} apiParams.subscriptionId - Required. The ID to use for the subscription, which will become the final component of the subscription's name. This value is structured like: `my-sub-name`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.subscriptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+parent}/subscriptions', 'POST', apiParams, clientConfig);

    /**
     * Returns the subscription configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the subscription whose configuration to return.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.subscriptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns the list of subscriptions for the given project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the parent will be returned.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent whose subscriptions are to be listed. Structured like `projects/{project_number}/locations/{location}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.subscriptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+parent}/subscriptions', 'GET', apiParams, clientConfig);

    /**
     * Updates properties of the specified subscription.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the subscription. Structured like: projects/{project_number}/locations/{location}/subscriptions/{subscription_id}
     * @param {string} apiParams.updateMask - Required. A mask specifying the subscription fields to change.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.subscriptions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified subscription.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the subscription to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.subscriptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Performs an out-of-band seek for a subscription to a specified target, which may be timestamps or named positions within the message backlog. Seek translates these targets to cursors for each partition and orchestrates subscribers to start consuming messages from these seek cursors. If an operation is returned, the seek has been registered and subscribers will eventually receive messages from the seek cursors (i.e. eventual consistency), as long as they are using a minimum supported client library version and not a system that tracks cursors independently of Pub/Sub Lite (e.g. Apache Beam, Dataflow, Spark). The seek operation will fail for unsupported clients. If clients would like to know when subscribers react to the seek (or not), they can poll the operation. The seek operation will succeed and complete once subscribers are ready to receive messages from the seek cursors for all partitions of the topic. This means that the seek operation will not complete until all subscribers come online. If the previous seek operation has not yet completed, it will be aborted and the new invocation of seek will supersede it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the subscription to seek.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.subscriptions.seek = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}:seek', 'POST', apiParams, clientConfig);

    this.admin.projects.locations.reservations = {};

    /**
     * Creates a new reservation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent location in which to create the reservation. Structured like `projects/{project_number}/locations/{location}`.
     * @param {string} apiParams.reservationId - Required. The ID to use for the reservation, which will become the final component of the reservation's name. This value is structured like: `my-reservation-name`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.reservations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+parent}/reservations', 'POST', apiParams, clientConfig);

    /**
     * Returns the reservation configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the reservation whose configuration to return. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.reservations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns the list of reservations for the given project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of reservations to return. The service may return fewer than this value. If unset or zero, all reservations for the parent will be returned.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListReservations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReservations` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent whose reservations are to be listed. Structured like `projects/{project_number}/locations/{location}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.reservations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+parent}/reservations', 'GET', apiParams, clientConfig);

    /**
     * Updates properties of the specified reservation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the reservation. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}
     * @param {string} apiParams.updateMask - Required. A mask specifying the reservation fields to change.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.reservations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified reservation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the reservation to delete. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.reservations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'DELETE', apiParams, clientConfig);

    this.admin.projects.locations.reservations.topics = {};

    /**
     * Lists the topics attached to the specified reservation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the reservation whose topics to list. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}
     * @param {integer} apiParams.pageSize - The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the given reservation will be returned.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListReservationTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReservationTopics` must match the call that provided the page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.admin.projects.locations.reservations.topics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}/topics', 'GET', apiParams, clientConfig);

    this.cursor = {};

    this.cursor.projects = {};

    this.cursor.projects.locations = {};

    this.cursor.projects.locations.subscriptions = {};

    /**
     * Updates the committed cursor.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.subscription - (Required) The subscription for which to update the cursor.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.cursor.projects.locations.subscriptions.commitCursor = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/cursor/{+subscription}:commitCursor', 'POST', apiParams, clientConfig);

    this.cursor.projects.locations.subscriptions.cursors = {};

    /**
     * Returns all committed cursor information for a subscription.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of cursors to return. The service may return fewer than this value. If unset or zero, all cursors for the parent will be returned.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListPartitionCursors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPartitionCursors` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The subscription for which to retrieve cursors. Structured like `projects/{project_number}/locations/{location}/subscriptions/{subscription_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.cursor.projects.locations.subscriptions.cursors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/cursor/{+parent}/cursors', 'GET', apiParams, clientConfig);

    this.topicStats = {};

    this.topicStats.projects = {};

    this.topicStats.projects.locations = {};

    this.topicStats.projects.locations.topics = {};

    /**
     * Compute statistics about a range of messages in a given topic and partition.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.topic - (Required) Required. The topic for which we should compute message stats.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.topicStats.projects.locations.topics.computeMessageStats = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/topicStats/{+topic}:computeMessageStats', 'POST', apiParams, clientConfig);

    /**
     * Compute the head cursor for the partition. The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.topic - (Required) Required. The topic for which we should compute the head cursor.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.topicStats.projects.locations.topics.computeHeadCursor = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/topicStats/{+topic}:computeHeadCursor', 'POST', apiParams, clientConfig);

    /**
     * Compute the corresponding cursor for a publish or event time in a topic partition.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.topic - (Required) Required. The topic for which we should compute the cursor.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.topicStats.projects.locations.topics.computeTimeCursor = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/topicStats/{+topic}:computeTimeCursor', 'POST', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
