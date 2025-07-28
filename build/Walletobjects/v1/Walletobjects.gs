
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
    this.issuer.get = (params) => this._makeRequest('walletobjects/v1/issuer/{resourceId}', 'GET', params);
    this.issuer.insert = (params) => this._makeRequest('walletobjects/v1/issuer', 'POST', params);
    this.issuer.list = (params) => this._makeRequest('walletobjects/v1/issuer', 'GET', params);
    this.issuer.patch = (params) => this._makeRequest('walletobjects/v1/issuer/{resourceId}', 'PATCH', params);
    this.issuer.update = (params) => this._makeRequest('walletobjects/v1/issuer/{resourceId}', 'PUT', params);

    this.eventticketclass = {};
    this.eventticketclass.addmessage = (params) => this._makeRequest('walletobjects/v1/eventTicketClass/{resourceId}/addMessage', 'POST', params);
    this.eventticketclass.get = (params) => this._makeRequest('walletobjects/v1/eventTicketClass/{resourceId}', 'GET', params);
    this.eventticketclass.insert = (params) => this._makeRequest('walletobjects/v1/eventTicketClass', 'POST', params);
    this.eventticketclass.list = (params) => this._makeRequest('walletobjects/v1/eventTicketClass', 'GET', params);
    this.eventticketclass.patch = (params) => this._makeRequest('walletobjects/v1/eventTicketClass/{resourceId}', 'PATCH', params);
    this.eventticketclass.update = (params) => this._makeRequest('walletobjects/v1/eventTicketClass/{resourceId}', 'PUT', params);

    this.eventticketobject = {};
    this.eventticketobject.addmessage = (params) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}/addMessage', 'POST', params);
    this.eventticketobject.get = (params) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}', 'GET', params);
    this.eventticketobject.insert = (params) => this._makeRequest('walletobjects/v1/eventTicketObject', 'POST', params);
    this.eventticketobject.list = (params) => this._makeRequest('walletobjects/v1/eventTicketObject', 'GET', params);
    this.eventticketobject.modifylinkedofferobjects = (params) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}/modifyLinkedOfferObjects', 'POST', params);
    this.eventticketobject.patch = (params) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}', 'PATCH', params);
    this.eventticketobject.update = (params) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}', 'PUT', params);

    this.flightclass = {};
    this.flightclass.addmessage = (params) => this._makeRequest('walletobjects/v1/flightClass/{resourceId}/addMessage', 'POST', params);
    this.flightclass.get = (params) => this._makeRequest('walletobjects/v1/flightClass/{resourceId}', 'GET', params);
    this.flightclass.insert = (params) => this._makeRequest('walletobjects/v1/flightClass', 'POST', params);
    this.flightclass.list = (params) => this._makeRequest('walletobjects/v1/flightClass', 'GET', params);
    this.flightclass.patch = (params) => this._makeRequest('walletobjects/v1/flightClass/{resourceId}', 'PATCH', params);
    this.flightclass.update = (params) => this._makeRequest('walletobjects/v1/flightClass/{resourceId}', 'PUT', params);

    this.flightobject = {};
    this.flightobject.addmessage = (params) => this._makeRequest('walletobjects/v1/flightObject/{resourceId}/addMessage', 'POST', params);
    this.flightobject.get = (params) => this._makeRequest('walletobjects/v1/flightObject/{resourceId}', 'GET', params);
    this.flightobject.insert = (params) => this._makeRequest('walletobjects/v1/flightObject', 'POST', params);
    this.flightobject.list = (params) => this._makeRequest('walletobjects/v1/flightObject', 'GET', params);
    this.flightobject.patch = (params) => this._makeRequest('walletobjects/v1/flightObject/{resourceId}', 'PATCH', params);
    this.flightobject.update = (params) => this._makeRequest('walletobjects/v1/flightObject/{resourceId}', 'PUT', params);

    this.genericclass = {};
    this.genericclass.addmessage = (params) => this._makeRequest('walletobjects/v1/genericClass/{resourceId}/addMessage', 'POST', params);
    this.genericclass.get = (params) => this._makeRequest('walletobjects/v1/genericClass/{resourceId}', 'GET', params);
    this.genericclass.insert = (params) => this._makeRequest('walletobjects/v1/genericClass', 'POST', params);
    this.genericclass.list = (params) => this._makeRequest('walletobjects/v1/genericClass', 'GET', params);
    this.genericclass.patch = (params) => this._makeRequest('walletobjects/v1/genericClass/{resourceId}', 'PATCH', params);
    this.genericclass.update = (params) => this._makeRequest('walletobjects/v1/genericClass/{resourceId}', 'PUT', params);

    this.genericobject = {};
    this.genericobject.addmessage = (params) => this._makeRequest('walletobjects/v1/genericObject/{resourceId}/addMessage', 'POST', params);
    this.genericobject.get = (params) => this._makeRequest('walletobjects/v1/genericObject/{resourceId}', 'GET', params);
    this.genericobject.insert = (params) => this._makeRequest('walletobjects/v1/genericObject', 'POST', params);
    this.genericobject.list = (params) => this._makeRequest('walletobjects/v1/genericObject', 'GET', params);
    this.genericobject.patch = (params) => this._makeRequest('walletobjects/v1/genericObject/{resourceId}', 'PATCH', params);
    this.genericobject.update = (params) => this._makeRequest('walletobjects/v1/genericObject/{resourceId}', 'PUT', params);

    this.giftcardclass = {};
    this.giftcardclass.addmessage = (params) => this._makeRequest('walletobjects/v1/giftCardClass/{resourceId}/addMessage', 'POST', params);
    this.giftcardclass.get = (params) => this._makeRequest('walletobjects/v1/giftCardClass/{resourceId}', 'GET', params);
    this.giftcardclass.insert = (params) => this._makeRequest('walletobjects/v1/giftCardClass', 'POST', params);
    this.giftcardclass.list = (params) => this._makeRequest('walletobjects/v1/giftCardClass', 'GET', params);
    this.giftcardclass.patch = (params) => this._makeRequest('walletobjects/v1/giftCardClass/{resourceId}', 'PATCH', params);
    this.giftcardclass.update = (params) => this._makeRequest('walletobjects/v1/giftCardClass/{resourceId}', 'PUT', params);

    this.giftcardobject = {};
    this.giftcardobject.addmessage = (params) => this._makeRequest('walletobjects/v1/giftCardObject/{resourceId}/addMessage', 'POST', params);
    this.giftcardobject.get = (params) => this._makeRequest('walletobjects/v1/giftCardObject/{resourceId}', 'GET', params);
    this.giftcardobject.insert = (params) => this._makeRequest('walletobjects/v1/giftCardObject', 'POST', params);
    this.giftcardobject.list = (params) => this._makeRequest('walletobjects/v1/giftCardObject', 'GET', params);
    this.giftcardobject.patch = (params) => this._makeRequest('walletobjects/v1/giftCardObject/{resourceId}', 'PATCH', params);
    this.giftcardobject.update = (params) => this._makeRequest('walletobjects/v1/giftCardObject/{resourceId}', 'PUT', params);

    this.jwt = {};
    this.jwt.insert = (params) => this._makeRequest('walletobjects/v1/jwt', 'POST', params);

    this.loyaltyclass = {};
    this.loyaltyclass.addmessage = (params) => this._makeRequest('walletobjects/v1/loyaltyClass/{resourceId}/addMessage', 'POST', params);
    this.loyaltyclass.get = (params) => this._makeRequest('walletobjects/v1/loyaltyClass/{resourceId}', 'GET', params);
    this.loyaltyclass.insert = (params) => this._makeRequest('walletobjects/v1/loyaltyClass', 'POST', params);
    this.loyaltyclass.list = (params) => this._makeRequest('walletobjects/v1/loyaltyClass', 'GET', params);
    this.loyaltyclass.patch = (params) => this._makeRequest('walletobjects/v1/loyaltyClass/{resourceId}', 'PATCH', params);
    this.loyaltyclass.update = (params) => this._makeRequest('walletobjects/v1/loyaltyClass/{resourceId}', 'PUT', params);

    this.loyaltyobject = {};
    this.loyaltyobject.addmessage = (params) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}/addMessage', 'POST', params);
    this.loyaltyobject.get = (params) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}', 'GET', params);
    this.loyaltyobject.insert = (params) => this._makeRequest('walletobjects/v1/loyaltyObject', 'POST', params);
    this.loyaltyobject.list = (params) => this._makeRequest('walletobjects/v1/loyaltyObject', 'GET', params);
    this.loyaltyobject.modifylinkedofferobjects = (params) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}/modifyLinkedOfferObjects', 'POST', params);
    this.loyaltyobject.patch = (params) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}', 'PATCH', params);
    this.loyaltyobject.update = (params) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}', 'PUT', params);

    this.offerclass = {};
    this.offerclass.addmessage = (params) => this._makeRequest('walletobjects/v1/offerClass/{resourceId}/addMessage', 'POST', params);
    this.offerclass.get = (params) => this._makeRequest('walletobjects/v1/offerClass/{resourceId}', 'GET', params);
    this.offerclass.insert = (params) => this._makeRequest('walletobjects/v1/offerClass', 'POST', params);
    this.offerclass.list = (params) => this._makeRequest('walletobjects/v1/offerClass', 'GET', params);
    this.offerclass.patch = (params) => this._makeRequest('walletobjects/v1/offerClass/{resourceId}', 'PATCH', params);
    this.offerclass.update = (params) => this._makeRequest('walletobjects/v1/offerClass/{resourceId}', 'PUT', params);

    this.offerobject = {};
    this.offerobject.addmessage = (params) => this._makeRequest('walletobjects/v1/offerObject/{resourceId}/addMessage', 'POST', params);
    this.offerobject.get = (params) => this._makeRequest('walletobjects/v1/offerObject/{resourceId}', 'GET', params);
    this.offerobject.insert = (params) => this._makeRequest('walletobjects/v1/offerObject', 'POST', params);
    this.offerobject.list = (params) => this._makeRequest('walletobjects/v1/offerObject', 'GET', params);
    this.offerobject.patch = (params) => this._makeRequest('walletobjects/v1/offerObject/{resourceId}', 'PATCH', params);
    this.offerobject.update = (params) => this._makeRequest('walletobjects/v1/offerObject/{resourceId}', 'PUT', params);

    this.permissions = {};
    this.permissions.get = (params) => this._makeRequest('walletobjects/v1/permissions/{resourceId}', 'GET', params);
    this.permissions.update = (params) => this._makeRequest('walletobjects/v1/permissions/{resourceId}', 'PUT', params);

    this.walletobjects = {};

    this.walletobjects.v1 = {};

    this.walletobjects.v1.privateContent = {};
    this.walletobjects.v1.privateContent.setPassUpdateNotice = (params) => this._makeRequest('walletobjects/v1/privateContent/setPassUpdateNotice', 'POST', params);

    this.smarttap = {};
    this.smarttap.insert = (params) => this._makeRequest('walletobjects/v1/smartTap', 'POST', params);

    this.transitclass = {};
    this.transitclass.addmessage = (params) => this._makeRequest('walletobjects/v1/transitClass/{resourceId}/addMessage', 'POST', params);
    this.transitclass.get = (params) => this._makeRequest('walletobjects/v1/transitClass/{resourceId}', 'GET', params);
    this.transitclass.insert = (params) => this._makeRequest('walletobjects/v1/transitClass', 'POST', params);
    this.transitclass.list = (params) => this._makeRequest('walletobjects/v1/transitClass', 'GET', params);
    this.transitclass.patch = (params) => this._makeRequest('walletobjects/v1/transitClass/{resourceId}', 'PATCH', params);
    this.transitclass.update = (params) => this._makeRequest('walletobjects/v1/transitClass/{resourceId}', 'PUT', params);

    this.transitobject = {};
    this.transitobject.addmessage = (params) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}/addMessage', 'POST', params);
    this.transitobject.get = (params) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}', 'GET', params);
    this.transitobject.insert = (params) => this._makeRequest('walletobjects/v1/transitObject', 'POST', params);
    this.transitobject.list = (params) => this._makeRequest('walletobjects/v1/transitObject', 'GET', params);
    this.transitobject.patch = (params) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}', 'PATCH', params);
    this.transitobject.update = (params) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}', 'PUT', params);

    this.media = {};
    this.media.upload = (params) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}/uploadRotatingBarcodeValues', 'POST', params);
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
