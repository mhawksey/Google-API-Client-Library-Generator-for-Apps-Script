
/**
 * Google Apps Script client library for the Google Wallet API
 * Documentation URL: https://developers.google.com/pay/passes
 * @class
 */
class Walletobjects {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://walletobjects.googleapis.com/';
    this._servicePath = '';


    this.issuer = {};

    /**
     * Returns the issuer with the given issuer ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an issuer.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.issuer.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/issuer/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts an issuer with the given ID and properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.issuer.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/issuer', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of all issuers shared to the caller.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.issuer.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/issuer', 'GET', apiParams, clientConfig);

    /**
     * Updates the issuer referenced by the given issuer ID. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an issuer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.issuer.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/issuer/{resourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the issuer referenced by the given issuer ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an issuer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.issuer.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/issuer/{resourceId}', 'PUT', apiParams, clientConfig);

    this.eventticketclass = {};

    /**
     * Adds a message to the event ticket class referenced by the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventticketclass.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketClass/{resourceId}/addMessage', 'POST', apiParams, clientConfig);

    /**
     * Returns the event ticket class with the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventticketclass.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketClass/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts an event ticket class with the given ID and properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventticketclass.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketClass', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of all event ticket classes for a given issuer ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.issuerId - The ID of the issuer authorized to list classes.
     * @param {integer} apiParams.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} apiParams.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventticketclass.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketClass', 'GET', apiParams, clientConfig);

    /**
     * Updates the event ticket class referenced by the given class ID. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventticketclass.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketClass/{resourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the event ticket class referenced by the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventticketclass.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketClass/{resourceId}', 'PUT', apiParams, clientConfig);

    this.eventticketobject = {};

    /**
     * Adds a message to the event ticket object referenced by the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventticketobject.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}/addMessage', 'POST', apiParams, clientConfig);

    /**
     * Returns the event ticket object with the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventticketobject.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts an event ticket object with the given ID and properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventticketobject.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketObject', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of all event ticket objects for a given issuer ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.classId - The ID of the class whose objects will be listed.
     * @param {integer} apiParams.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} apiParams.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventticketobject.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketObject', 'GET', apiParams, clientConfig);

    /**
     * Modifies linked offer objects for the event ticket object with the given ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventticketobject.modifylinkedofferobjects = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}/modifyLinkedOfferObjects', 'POST', apiParams, clientConfig);

    /**
     * Updates the event ticket object referenced by the given object ID. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventticketobject.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the event ticket object referenced by the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventticketobject.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}', 'PUT', apiParams, clientConfig);

    this.flightclass = {};

    /**
     * Adds a message to the flight class referenced by the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.flightclass.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightClass/{resourceId}/addMessage', 'POST', apiParams, clientConfig);

    /**
     * Returns the flight class with the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.flightclass.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightClass/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts an flight class with the given ID and properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.flightclass.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightClass', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of all flight classes for a given issuer ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.issuerId - The ID of the issuer authorized to list classes.
     * @param {integer} apiParams.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} apiParams.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.flightclass.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightClass', 'GET', apiParams, clientConfig);

    /**
     * Updates the flight class referenced by the given class ID. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.flightclass.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightClass/{resourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the flight class referenced by the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.flightclass.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightClass/{resourceId}', 'PUT', apiParams, clientConfig);

    this.flightobject = {};

    /**
     * Adds a message to the flight object referenced by the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.flightobject.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightObject/{resourceId}/addMessage', 'POST', apiParams, clientConfig);

    /**
     * Returns the flight object with the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.flightobject.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightObject/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts an flight object with the given ID and properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.flightobject.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightObject', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of all flight objects for a given issuer ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.classId - The ID of the class whose objects will be listed.
     * @param {integer} apiParams.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} apiParams.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.flightobject.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightObject', 'GET', apiParams, clientConfig);

    /**
     * Updates the flight object referenced by the given object ID. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.flightobject.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightObject/{resourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the flight object referenced by the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.flightobject.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightObject/{resourceId}', 'PUT', apiParams, clientConfig);

    this.genericclass = {};

    /**
     * Adds a message to the generic class referenced by the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.genericclass.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericClass/{resourceId}/addMessage', 'POST', apiParams, clientConfig);

    /**
     * Returns the generic class with the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.genericclass.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericClass/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a generic class with the given ID and properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.genericclass.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericClass', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of all generic classes for a given issuer ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.issuerId - The ID of the issuer authorized to list classes.
     * @param {integer} apiParams.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} apiParams.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.genericclass.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericClass', 'GET', apiParams, clientConfig);

    /**
     * Updates the generic class referenced by the given class ID. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.genericclass.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericClass/{resourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the Generic class referenced by the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.genericclass.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericClass/{resourceId}', 'PUT', apiParams, clientConfig);

    this.genericobject = {};

    /**
     * Adds a message to the generic object referenced by the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.genericobject.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericObject/{resourceId}/addMessage', 'POST', apiParams, clientConfig);

    /**
     * Returns the generic object with the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.genericobject.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericObject/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a generic object with the given ID and properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.genericobject.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericObject', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of all generic objects for a given issuer ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.classId - The ID of the class whose objects will be listed.
     * @param {integer} apiParams.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} apiParams.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.genericobject.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericObject', 'GET', apiParams, clientConfig);

    /**
     * Updates the generic object referenced by the given object ID. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.genericobject.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericObject/{resourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the generic object referenced by the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.genericobject.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericObject/{resourceId}', 'PUT', apiParams, clientConfig);

    this.giftcardclass = {};

    /**
     * Adds a message to the gift card class referenced by the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.giftcardclass.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardClass/{resourceId}/addMessage', 'POST', apiParams, clientConfig);

    /**
     * Returns the gift card class with the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.giftcardclass.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardClass/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts an gift card class with the given ID and properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.giftcardclass.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardClass', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of all gift card classes for a given issuer ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.issuerId - The ID of the issuer authorized to list classes.
     * @param {integer} apiParams.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} apiParams.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.giftcardclass.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardClass', 'GET', apiParams, clientConfig);

    /**
     * Updates the gift card class referenced by the given class ID. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.giftcardclass.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardClass/{resourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the gift card class referenced by the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.giftcardclass.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardClass/{resourceId}', 'PUT', apiParams, clientConfig);

    this.giftcardobject = {};

    /**
     * Adds a message to the gift card object referenced by the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.giftcardobject.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardObject/{resourceId}/addMessage', 'POST', apiParams, clientConfig);

    /**
     * Returns the gift card object with the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.giftcardobject.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardObject/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts an gift card object with the given ID and properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.giftcardobject.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardObject', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of all gift card objects for a given issuer ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.classId - The ID of the class whose objects will be listed.
     * @param {integer} apiParams.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} apiParams.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.giftcardobject.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardObject', 'GET', apiParams, clientConfig);

    /**
     * Updates the gift card object referenced by the given object ID. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.giftcardobject.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardObject/{resourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the gift card object referenced by the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.giftcardobject.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardObject/{resourceId}', 'PUT', apiParams, clientConfig);

    this.jwt = {};

    /**
     * Inserts the resources in the JWT.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.jwt.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/jwt', 'POST', apiParams, clientConfig);

    this.loyaltyclass = {};

    /**
     * Adds a message to the loyalty class referenced by the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.loyaltyclass.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyClass/{resourceId}/addMessage', 'POST', apiParams, clientConfig);

    /**
     * Returns the loyalty class with the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.loyaltyclass.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyClass/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts an loyalty class with the given ID and properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.loyaltyclass.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyClass', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of all loyalty classes for a given issuer ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.issuerId - The ID of the issuer authorized to list classes.
     * @param {integer} apiParams.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} apiParams.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.loyaltyclass.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyClass', 'GET', apiParams, clientConfig);

    /**
     * Updates the loyalty class referenced by the given class ID. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.loyaltyclass.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyClass/{resourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the loyalty class referenced by the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.loyaltyclass.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyClass/{resourceId}', 'PUT', apiParams, clientConfig);

    this.loyaltyobject = {};

    /**
     * Adds a message to the loyalty object referenced by the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.loyaltyobject.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}/addMessage', 'POST', apiParams, clientConfig);

    /**
     * Returns the loyalty object with the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.loyaltyobject.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts an loyalty object with the given ID and properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.loyaltyobject.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyObject', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of all loyalty objects for a given issuer ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.classId - The ID of the class whose objects will be listed.
     * @param {integer} apiParams.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} apiParams.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.loyaltyobject.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyObject', 'GET', apiParams, clientConfig);

    /**
     * Modifies linked offer objects for the loyalty object with the given ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.loyaltyobject.modifylinkedofferobjects = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}/modifyLinkedOfferObjects', 'POST', apiParams, clientConfig);

    /**
     * Updates the loyalty object referenced by the given object ID. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.loyaltyobject.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the loyalty object referenced by the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.loyaltyobject.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}', 'PUT', apiParams, clientConfig);

    this.offerclass = {};

    /**
     * Adds a message to the offer class referenced by the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.offerclass.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerClass/{resourceId}/addMessage', 'POST', apiParams, clientConfig);

    /**
     * Returns the offer class with the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.offerclass.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerClass/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts an offer class with the given ID and properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.offerclass.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerClass', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of all offer classes for a given issuer ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.issuerId - The ID of the issuer authorized to list classes.
     * @param {integer} apiParams.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} apiParams.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.offerclass.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerClass', 'GET', apiParams, clientConfig);

    /**
     * Updates the offer class referenced by the given class ID. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.offerclass.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerClass/{resourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the offer class referenced by the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.offerclass.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerClass/{resourceId}', 'PUT', apiParams, clientConfig);

    this.offerobject = {};

    /**
     * Adds a message to the offer object referenced by the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.offerobject.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerObject/{resourceId}/addMessage', 'POST', apiParams, clientConfig);

    /**
     * Returns the offer object with the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.offerobject.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerObject/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts an offer object with the given ID and properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.offerobject.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerObject', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of all offer objects for a given issuer ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.classId - The ID of the class whose objects will be listed.
     * @param {integer} apiParams.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} apiParams.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.offerobject.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerObject', 'GET', apiParams, clientConfig);

    /**
     * Updates the offer object referenced by the given object ID. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.offerobject.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerObject/{resourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the offer object referenced by the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.offerobject.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerObject/{resourceId}', 'PUT', apiParams, clientConfig);

    this.permissions = {};

    /**
     * Returns the permissions for the given issuer id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an issuer. This ID must be unique across all issuers.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.permissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/permissions/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Updates the permissions for the given issuer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an issuer. This ID must be unique across all issuers.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.permissions.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/permissions/{resourceId}', 'PUT', apiParams, clientConfig);

    this.media = {};

    /**
     * Uploads rotating barcode values for the transit object referenced by the given object ID. Note the max upload size is specified in google3/production/config/cdd/apps-upload/customers/payments-consumer-passes/config.gcl and enforced by Scotty.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.media.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/walletobjects/v1/transitObject/{resourceId}/uploadRotatingBarcodeValues' : 'walletobjects/v1/transitObject/{resourceId}/uploadRotatingBarcodeValues';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Downloads rotating barcode values for the transit object referenced by the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.media.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}/downloadRotatingBarcodeValues', 'GET', apiParams, clientConfig);

    this.walletobjects = {};

    this.walletobjects.v1 = {};

    this.walletobjects.v1.privateContent = {};

    /**
     * Provide Google with information about awaiting private pass update. This will allow Google to provide the update notification to the device that currently holds this pass.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.walletobjects.v1.privateContent.setPassUpdateNotice = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/privateContent/setPassUpdateNotice', 'POST', apiParams, clientConfig);

    this.smarttap = {};

    /**
     * Inserts the smart tap.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.smarttap.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/smartTap', 'POST', apiParams, clientConfig);

    this.transitclass = {};

    /**
     * Adds a message to the transit class referenced by the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.transitclass.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitClass/{resourceId}/addMessage', 'POST', apiParams, clientConfig);

    /**
     * Returns the transit class with the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.transitclass.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitClass/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a transit class with the given ID and properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.transitclass.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitClass', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of all transit classes for a given issuer ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.issuerId - The ID of the issuer authorized to list classes.
     * @param {integer} apiParams.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} apiParams.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.transitclass.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitClass', 'GET', apiParams, clientConfig);

    /**
     * Updates the transit class referenced by the given class ID. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.transitclass.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitClass/{resourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the transit class referenced by the given class ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.transitclass.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitClass/{resourceId}', 'PUT', apiParams, clientConfig);

    this.transitobject = {};

    /**
     * Adds a message to the transit object referenced by the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.transitobject.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}/addMessage', 'POST', apiParams, clientConfig);

    /**
     * Returns the transit object with the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.transitobject.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts an transit object with the given ID and properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.transitobject.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitObject', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of all transit objects for a given issuer ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.classId - The ID of the class whose objects will be listed.
     * @param {integer} apiParams.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} apiParams.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.transitobject.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitObject', 'GET', apiParams, clientConfig);

    /**
     * Updates the transit object referenced by the given object ID. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.transitobject.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the transit object referenced by the given object ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.transitobject.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}', 'PUT', apiParams, clientConfig);
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
