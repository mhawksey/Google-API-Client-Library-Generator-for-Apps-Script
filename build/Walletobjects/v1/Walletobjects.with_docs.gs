
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://walletobjects.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.issuer = {};

    /**
     * Returns the issuer with the given issuer ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an issuer.
     * @return {object} The API response object.
     */
    this.issuer.get = (params) => this._makeRequest('walletobjects/v1/issuer/{resourceId}', 'GET', params);

    /**
     * Inserts an issuer with the given ID and properties.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.issuer.insert = (params) => this._makeRequest('walletobjects/v1/issuer', 'POST', params);

    /**
     * Returns a list of all issuers shared to the caller.
     * @return {object} The API response object.
     */
    this.issuer.list = (params) => this._makeRequest('walletobjects/v1/issuer', 'GET', params);

    /**
     * Updates the issuer referenced by the given issuer ID. This method supports patch semantics.
     * @param {string} params.resourceId - (Required) The unique identifier for an issuer.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.issuer.patch = (params) => this._makeRequest('walletobjects/v1/issuer/{resourceId}', 'PATCH', params);

    /**
     * Updates the issuer referenced by the given issuer ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an issuer.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.issuer.update = (params) => this._makeRequest('walletobjects/v1/issuer/{resourceId}', 'PUT', params);

    this.eventticketclass = {};

    /**
     * Adds a message to the event ticket class referenced by the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.eventticketclass.addmessage = (params) => this._makeRequest('walletobjects/v1/eventTicketClass/{resourceId}/addMessage', 'POST', params);

    /**
     * Returns the event ticket class with the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @return {object} The API response object.
     */
    this.eventticketclass.get = (params) => this._makeRequest('walletobjects/v1/eventTicketClass/{resourceId}', 'GET', params);

    /**
     * Inserts an event ticket class with the given ID and properties.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.eventticketclass.insert = (params) => this._makeRequest('walletobjects/v1/eventTicketClass', 'POST', params);

    /**
     * Returns a list of all event ticket classes for a given issuer ID.
     * @param {string} params.issuerId - The ID of the issuer authorized to list classes.
     * @param {integer} params.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} params.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     * @return {object} The API response object.
     */
    this.eventticketclass.list = (params) => this._makeRequest('walletobjects/v1/eventTicketClass', 'GET', params);

    /**
     * Updates the event ticket class referenced by the given class ID. This method supports patch semantics.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.eventticketclass.patch = (params) => this._makeRequest('walletobjects/v1/eventTicketClass/{resourceId}', 'PATCH', params);

    /**
     * Updates the event ticket class referenced by the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.eventticketclass.update = (params) => this._makeRequest('walletobjects/v1/eventTicketClass/{resourceId}', 'PUT', params);

    this.eventticketobject = {};

    /**
     * Adds a message to the event ticket object referenced by the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.eventticketobject.addmessage = (params) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}/addMessage', 'POST', params);

    /**
     * Returns the event ticket object with the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @return {object} The API response object.
     */
    this.eventticketobject.get = (params) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}', 'GET', params);

    /**
     * Inserts an event ticket object with the given ID and properties.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.eventticketobject.insert = (params) => this._makeRequest('walletobjects/v1/eventTicketObject', 'POST', params);

    /**
     * Returns a list of all event ticket objects for a given issuer ID.
     * @param {string} params.classId - The ID of the class whose objects will be listed.
     * @param {integer} params.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} params.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     * @return {object} The API response object.
     */
    this.eventticketobject.list = (params) => this._makeRequest('walletobjects/v1/eventTicketObject', 'GET', params);

    /**
     * Modifies linked offer objects for the event ticket object with the given ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.eventticketobject.modifylinkedofferobjects = (params) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}/modifyLinkedOfferObjects', 'POST', params);

    /**
     * Updates the event ticket object referenced by the given object ID. This method supports patch semantics.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.eventticketobject.patch = (params) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}', 'PATCH', params);

    /**
     * Updates the event ticket object referenced by the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.eventticketobject.update = (params) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}', 'PUT', params);

    this.flightclass = {};

    /**
     * Adds a message to the flight class referenced by the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.flightclass.addmessage = (params) => this._makeRequest('walletobjects/v1/flightClass/{resourceId}/addMessage', 'POST', params);

    /**
     * Returns the flight class with the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @return {object} The API response object.
     */
    this.flightclass.get = (params) => this._makeRequest('walletobjects/v1/flightClass/{resourceId}', 'GET', params);

    /**
     * Inserts an flight class with the given ID and properties.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.flightclass.insert = (params) => this._makeRequest('walletobjects/v1/flightClass', 'POST', params);

    /**
     * Returns a list of all flight classes for a given issuer ID.
     * @param {string} params.issuerId - The ID of the issuer authorized to list classes.
     * @param {integer} params.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} params.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     * @return {object} The API response object.
     */
    this.flightclass.list = (params) => this._makeRequest('walletobjects/v1/flightClass', 'GET', params);

    /**
     * Updates the flight class referenced by the given class ID. This method supports patch semantics.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.flightclass.patch = (params) => this._makeRequest('walletobjects/v1/flightClass/{resourceId}', 'PATCH', params);

    /**
     * Updates the flight class referenced by the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.flightclass.update = (params) => this._makeRequest('walletobjects/v1/flightClass/{resourceId}', 'PUT', params);

    this.flightobject = {};

    /**
     * Adds a message to the flight object referenced by the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.flightobject.addmessage = (params) => this._makeRequest('walletobjects/v1/flightObject/{resourceId}/addMessage', 'POST', params);

    /**
     * Returns the flight object with the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @return {object} The API response object.
     */
    this.flightobject.get = (params) => this._makeRequest('walletobjects/v1/flightObject/{resourceId}', 'GET', params);

    /**
     * Inserts an flight object with the given ID and properties.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.flightobject.insert = (params) => this._makeRequest('walletobjects/v1/flightObject', 'POST', params);

    /**
     * Returns a list of all flight objects for a given issuer ID.
     * @param {string} params.classId - The ID of the class whose objects will be listed.
     * @param {integer} params.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} params.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     * @return {object} The API response object.
     */
    this.flightobject.list = (params) => this._makeRequest('walletobjects/v1/flightObject', 'GET', params);

    /**
     * Updates the flight object referenced by the given object ID. This method supports patch semantics.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.flightobject.patch = (params) => this._makeRequest('walletobjects/v1/flightObject/{resourceId}', 'PATCH', params);

    /**
     * Updates the flight object referenced by the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.flightobject.update = (params) => this._makeRequest('walletobjects/v1/flightObject/{resourceId}', 'PUT', params);

    this.genericclass = {};

    /**
     * Adds a message to the generic class referenced by the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.genericclass.addmessage = (params) => this._makeRequest('walletobjects/v1/genericClass/{resourceId}/addMessage', 'POST', params);

    /**
     * Returns the generic class with the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     * @return {object} The API response object.
     */
    this.genericclass.get = (params) => this._makeRequest('walletobjects/v1/genericClass/{resourceId}', 'GET', params);

    /**
     * Inserts a generic class with the given ID and properties.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.genericclass.insert = (params) => this._makeRequest('walletobjects/v1/genericClass', 'POST', params);

    /**
     * Returns a list of all generic classes for a given issuer ID.
     * @param {string} params.issuerId - The ID of the issuer authorized to list classes.
     * @param {integer} params.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} params.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     * @return {object} The API response object.
     */
    this.genericclass.list = (params) => this._makeRequest('walletobjects/v1/genericClass', 'GET', params);

    /**
     * Updates the generic class referenced by the given class ID. This method supports patch semantics.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.genericclass.patch = (params) => this._makeRequest('walletobjects/v1/genericClass/{resourceId}', 'PATCH', params);

    /**
     * Updates the Generic class referenced by the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.genericclass.update = (params) => this._makeRequest('walletobjects/v1/genericClass/{resourceId}', 'PUT', params);

    this.genericobject = {};

    /**
     * Adds a message to the generic object referenced by the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.genericobject.addmessage = (params) => this._makeRequest('walletobjects/v1/genericObject/{resourceId}/addMessage', 'POST', params);

    /**
     * Returns the generic object with the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     * @return {object} The API response object.
     */
    this.genericobject.get = (params) => this._makeRequest('walletobjects/v1/genericObject/{resourceId}', 'GET', params);

    /**
     * Inserts a generic object with the given ID and properties.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.genericobject.insert = (params) => this._makeRequest('walletobjects/v1/genericObject', 'POST', params);

    /**
     * Returns a list of all generic objects for a given issuer ID.
     * @param {string} params.classId - The ID of the class whose objects will be listed.
     * @param {integer} params.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} params.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     * @return {object} The API response object.
     */
    this.genericobject.list = (params) => this._makeRequest('walletobjects/v1/genericObject', 'GET', params);

    /**
     * Updates the generic object referenced by the given object ID. This method supports patch semantics.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.genericobject.patch = (params) => this._makeRequest('walletobjects/v1/genericObject/{resourceId}', 'PATCH', params);

    /**
     * Updates the generic object referenced by the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.genericobject.update = (params) => this._makeRequest('walletobjects/v1/genericObject/{resourceId}', 'PUT', params);

    this.giftcardclass = {};

    /**
     * Adds a message to the gift card class referenced by the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.giftcardclass.addmessage = (params) => this._makeRequest('walletobjects/v1/giftCardClass/{resourceId}/addMessage', 'POST', params);

    /**
     * Returns the gift card class with the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @return {object} The API response object.
     */
    this.giftcardclass.get = (params) => this._makeRequest('walletobjects/v1/giftCardClass/{resourceId}', 'GET', params);

    /**
     * Inserts an gift card class with the given ID and properties.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.giftcardclass.insert = (params) => this._makeRequest('walletobjects/v1/giftCardClass', 'POST', params);

    /**
     * Returns a list of all gift card classes for a given issuer ID.
     * @param {string} params.issuerId - The ID of the issuer authorized to list classes.
     * @param {integer} params.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} params.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     * @return {object} The API response object.
     */
    this.giftcardclass.list = (params) => this._makeRequest('walletobjects/v1/giftCardClass', 'GET', params);

    /**
     * Updates the gift card class referenced by the given class ID. This method supports patch semantics.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.giftcardclass.patch = (params) => this._makeRequest('walletobjects/v1/giftCardClass/{resourceId}', 'PATCH', params);

    /**
     * Updates the gift card class referenced by the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.giftcardclass.update = (params) => this._makeRequest('walletobjects/v1/giftCardClass/{resourceId}', 'PUT', params);

    this.giftcardobject = {};

    /**
     * Adds a message to the gift card object referenced by the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.giftcardobject.addmessage = (params) => this._makeRequest('walletobjects/v1/giftCardObject/{resourceId}/addMessage', 'POST', params);

    /**
     * Returns the gift card object with the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @return {object} The API response object.
     */
    this.giftcardobject.get = (params) => this._makeRequest('walletobjects/v1/giftCardObject/{resourceId}', 'GET', params);

    /**
     * Inserts an gift card object with the given ID and properties.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.giftcardobject.insert = (params) => this._makeRequest('walletobjects/v1/giftCardObject', 'POST', params);

    /**
     * Returns a list of all gift card objects for a given issuer ID.
     * @param {string} params.classId - The ID of the class whose objects will be listed.
     * @param {integer} params.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} params.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     * @return {object} The API response object.
     */
    this.giftcardobject.list = (params) => this._makeRequest('walletobjects/v1/giftCardObject', 'GET', params);

    /**
     * Updates the gift card object referenced by the given object ID. This method supports patch semantics.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.giftcardobject.patch = (params) => this._makeRequest('walletobjects/v1/giftCardObject/{resourceId}', 'PATCH', params);

    /**
     * Updates the gift card object referenced by the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.giftcardobject.update = (params) => this._makeRequest('walletobjects/v1/giftCardObject/{resourceId}', 'PUT', params);

    this.jwt = {};

    /**
     * Inserts the resources in the JWT.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.jwt.insert = (params) => this._makeRequest('walletobjects/v1/jwt', 'POST', params);

    this.loyaltyclass = {};

    /**
     * Adds a message to the loyalty class referenced by the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.loyaltyclass.addmessage = (params) => this._makeRequest('walletobjects/v1/loyaltyClass/{resourceId}/addMessage', 'POST', params);

    /**
     * Returns the loyalty class with the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @return {object} The API response object.
     */
    this.loyaltyclass.get = (params) => this._makeRequest('walletobjects/v1/loyaltyClass/{resourceId}', 'GET', params);

    /**
     * Inserts an loyalty class with the given ID and properties.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.loyaltyclass.insert = (params) => this._makeRequest('walletobjects/v1/loyaltyClass', 'POST', params);

    /**
     * Returns a list of all loyalty classes for a given issuer ID.
     * @param {string} params.issuerId - The ID of the issuer authorized to list classes.
     * @param {integer} params.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} params.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     * @return {object} The API response object.
     */
    this.loyaltyclass.list = (params) => this._makeRequest('walletobjects/v1/loyaltyClass', 'GET', params);

    /**
     * Updates the loyalty class referenced by the given class ID. This method supports patch semantics.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.loyaltyclass.patch = (params) => this._makeRequest('walletobjects/v1/loyaltyClass/{resourceId}', 'PATCH', params);

    /**
     * Updates the loyalty class referenced by the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.loyaltyclass.update = (params) => this._makeRequest('walletobjects/v1/loyaltyClass/{resourceId}', 'PUT', params);

    this.loyaltyobject = {};

    /**
     * Adds a message to the loyalty object referenced by the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.loyaltyobject.addmessage = (params) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}/addMessage', 'POST', params);

    /**
     * Returns the loyalty object with the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @return {object} The API response object.
     */
    this.loyaltyobject.get = (params) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}', 'GET', params);

    /**
     * Inserts an loyalty object with the given ID and properties.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.loyaltyobject.insert = (params) => this._makeRequest('walletobjects/v1/loyaltyObject', 'POST', params);

    /**
     * Returns a list of all loyalty objects for a given issuer ID.
     * @param {string} params.classId - The ID of the class whose objects will be listed.
     * @param {integer} params.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} params.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     * @return {object} The API response object.
     */
    this.loyaltyobject.list = (params) => this._makeRequest('walletobjects/v1/loyaltyObject', 'GET', params);

    /**
     * Modifies linked offer objects for the loyalty object with the given ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.loyaltyobject.modifylinkedofferobjects = (params) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}/modifyLinkedOfferObjects', 'POST', params);

    /**
     * Updates the loyalty object referenced by the given object ID. This method supports patch semantics.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.loyaltyobject.patch = (params) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}', 'PATCH', params);

    /**
     * Updates the loyalty object referenced by the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.loyaltyobject.update = (params) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}', 'PUT', params);

    this.offerclass = {};

    /**
     * Adds a message to the offer class referenced by the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.offerclass.addmessage = (params) => this._makeRequest('walletobjects/v1/offerClass/{resourceId}/addMessage', 'POST', params);

    /**
     * Returns the offer class with the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @return {object} The API response object.
     */
    this.offerclass.get = (params) => this._makeRequest('walletobjects/v1/offerClass/{resourceId}', 'GET', params);

    /**
     * Inserts an offer class with the given ID and properties.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.offerclass.insert = (params) => this._makeRequest('walletobjects/v1/offerClass', 'POST', params);

    /**
     * Returns a list of all offer classes for a given issuer ID.
     * @param {string} params.issuerId - The ID of the issuer authorized to list classes.
     * @param {integer} params.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} params.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     * @return {object} The API response object.
     */
    this.offerclass.list = (params) => this._makeRequest('walletobjects/v1/offerClass', 'GET', params);

    /**
     * Updates the offer class referenced by the given class ID. This method supports patch semantics.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.offerclass.patch = (params) => this._makeRequest('walletobjects/v1/offerClass/{resourceId}', 'PATCH', params);

    /**
     * Updates the offer class referenced by the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.offerclass.update = (params) => this._makeRequest('walletobjects/v1/offerClass/{resourceId}', 'PUT', params);

    this.offerobject = {};

    /**
     * Adds a message to the offer object referenced by the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.offerobject.addmessage = (params) => this._makeRequest('walletobjects/v1/offerObject/{resourceId}/addMessage', 'POST', params);

    /**
     * Returns the offer object with the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @return {object} The API response object.
     */
    this.offerobject.get = (params) => this._makeRequest('walletobjects/v1/offerObject/{resourceId}', 'GET', params);

    /**
     * Inserts an offer object with the given ID and properties.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.offerobject.insert = (params) => this._makeRequest('walletobjects/v1/offerObject', 'POST', params);

    /**
     * Returns a list of all offer objects for a given issuer ID.
     * @param {string} params.classId - The ID of the class whose objects will be listed.
     * @param {integer} params.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} params.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     * @return {object} The API response object.
     */
    this.offerobject.list = (params) => this._makeRequest('walletobjects/v1/offerObject', 'GET', params);

    /**
     * Updates the offer object referenced by the given object ID. This method supports patch semantics.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.offerobject.patch = (params) => this._makeRequest('walletobjects/v1/offerObject/{resourceId}', 'PATCH', params);

    /**
     * Updates the offer object referenced by the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.offerobject.update = (params) => this._makeRequest('walletobjects/v1/offerObject/{resourceId}', 'PUT', params);

    this.permissions = {};

    /**
     * Returns the permissions for the given issuer id.
     * @param {string} params.resourceId - (Required) The unique identifier for an issuer. This ID must be unique across all issuers.
     * @return {object} The API response object.
     */
    this.permissions.get = (params) => this._makeRequest('walletobjects/v1/permissions/{resourceId}', 'GET', params);

    /**
     * Updates the permissions for the given issuer.
     * @param {string} params.resourceId - (Required) The unique identifier for an issuer. This ID must be unique across all issuers.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.permissions.update = (params) => this._makeRequest('walletobjects/v1/permissions/{resourceId}', 'PUT', params);

    this.walletobjects = {};

    this.walletobjects.v1 = {};

    this.walletobjects.v1.privateContent = {};

    /**
     * Provide Google with information about awaiting private pass update. This will allow Google to provide the update notification to the device that currently holds this pass.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.walletobjects.v1.privateContent.setPassUpdateNotice = (params) => this._makeRequest('walletobjects/v1/privateContent/setPassUpdateNotice', 'POST', params);

    this.smarttap = {};

    /**
     * Inserts the smart tap.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.smarttap.insert = (params) => this._makeRequest('walletobjects/v1/smartTap', 'POST', params);

    this.transitclass = {};

    /**
     * Adds a message to the transit class referenced by the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.transitclass.addmessage = (params) => this._makeRequest('walletobjects/v1/transitClass/{resourceId}/addMessage', 'POST', params);

    /**
     * Returns the transit class with the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @return {object} The API response object.
     */
    this.transitclass.get = (params) => this._makeRequest('walletobjects/v1/transitClass/{resourceId}', 'GET', params);

    /**
     * Inserts a transit class with the given ID and properties.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.transitclass.insert = (params) => this._makeRequest('walletobjects/v1/transitClass', 'POST', params);

    /**
     * Returns a list of all transit classes for a given issuer ID.
     * @param {string} params.issuerId - The ID of the issuer authorized to list classes.
     * @param {integer} params.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} params.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     * @return {object} The API response object.
     */
    this.transitclass.list = (params) => this._makeRequest('walletobjects/v1/transitClass', 'GET', params);

    /**
     * Updates the transit class referenced by the given class ID. This method supports patch semantics.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.transitclass.patch = (params) => this._makeRequest('walletobjects/v1/transitClass/{resourceId}', 'PATCH', params);

    /**
     * Updates the transit class referenced by the given class ID.
     * @param {string} params.resourceId - (Required) The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.transitclass.update = (params) => this._makeRequest('walletobjects/v1/transitClass/{resourceId}', 'PUT', params);

    this.transitobject = {};

    /**
     * Adds a message to the transit object referenced by the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.transitobject.addmessage = (params) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}/addMessage', 'POST', params);

    /**
     * Returns the transit object with the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @return {object} The API response object.
     */
    this.transitobject.get = (params) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}', 'GET', params);

    /**
     * Inserts an transit object with the given ID and properties.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.transitobject.insert = (params) => this._makeRequest('walletobjects/v1/transitObject', 'POST', params);

    /**
     * Returns a list of all transit objects for a given issuer ID.
     * @param {string} params.classId - The ID of the class whose objects will be listed.
     * @param {integer} params.maxResults - Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     * @param {string} params.token - Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     * @return {object} The API response object.
     */
    this.transitobject.list = (params) => this._makeRequest('walletobjects/v1/transitObject', 'GET', params);

    /**
     * Updates the transit object referenced by the given object ID. This method supports patch semantics.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.transitobject.patch = (params) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}', 'PATCH', params);

    /**
     * Updates the transit object referenced by the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.transitobject.update = (params) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}', 'PUT', params);

    this.media = {};

    /**
     * Uploads rotating barcode values for the transit object referenced by the given object ID. Note the max upload size is specified in google3/production/config/cdd/apps-upload/customers/payments-consumer-passes/config.gcl and enforced by Scotty.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.media.upload = (params) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}/uploadRotatingBarcodeValues', 'POST', params);

    /**
     * Downloads rotating barcode values for the transit object referenced by the given object ID.
     * @param {string} params.resourceId - (Required) The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     * @return {object} The API response object.
     */
    this.media.download = (params) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}/downloadRotatingBarcodeValues', 'GET', params);
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
