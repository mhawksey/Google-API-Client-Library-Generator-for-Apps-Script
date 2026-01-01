
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


    this.genericobject = {};
    this.genericobject.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericObject/{resourceId}', 'PUT', apiParams, clientConfig);
    this.genericobject.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericObject', 'GET', apiParams, clientConfig);
    this.genericobject.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericObject', 'POST', apiParams, clientConfig);
    this.genericobject.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericObject/{resourceId}', 'PATCH', apiParams, clientConfig);
    this.genericobject.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericObject/{resourceId}', 'GET', apiParams, clientConfig);
    this.genericobject.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericObject/{resourceId}/addMessage', 'POST', apiParams, clientConfig);

    this.smarttap = {};
    this.smarttap.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/smartTap', 'POST', apiParams, clientConfig);

    this.flightobject = {};
    this.flightobject.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightObject/{resourceId}', 'PUT', apiParams, clientConfig);
    this.flightobject.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightObject', 'GET', apiParams, clientConfig);
    this.flightobject.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightObject', 'POST', apiParams, clientConfig);
    this.flightobject.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightObject/{resourceId}/addMessage', 'POST', apiParams, clientConfig);
    this.flightobject.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightObject/{resourceId}', 'PATCH', apiParams, clientConfig);
    this.flightobject.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightObject/{resourceId}', 'GET', apiParams, clientConfig);

    this.media = {};
    this.media.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}/downloadRotatingBarcodeValues', 'GET', apiParams, clientConfig);
    this.media.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/walletobjects/v1/transitObject/{resourceId}/uploadRotatingBarcodeValues' : 'walletobjects/v1/transitObject/{resourceId}/uploadRotatingBarcodeValues';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.eventticketobject = {};
    this.eventticketobject.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}', 'PUT', apiParams, clientConfig);
    this.eventticketobject.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}/addMessage', 'POST', apiParams, clientConfig);
    this.eventticketobject.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketObject', 'GET', apiParams, clientConfig);
    this.eventticketobject.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}', 'GET', apiParams, clientConfig);
    this.eventticketobject.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}', 'PATCH', apiParams, clientConfig);
    this.eventticketobject.modifylinkedofferobjects = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketObject/{resourceId}/modifyLinkedOfferObjects', 'POST', apiParams, clientConfig);
    this.eventticketobject.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketObject', 'POST', apiParams, clientConfig);

    this.transitobject = {};
    this.transitobject.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}', 'PATCH', apiParams, clientConfig);
    this.transitobject.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitObject', 'GET', apiParams, clientConfig);
    this.transitobject.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}', 'PUT', apiParams, clientConfig);
    this.transitobject.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitObject', 'POST', apiParams, clientConfig);
    this.transitobject.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}/addMessage', 'POST', apiParams, clientConfig);
    this.transitobject.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitObject/{resourceId}', 'GET', apiParams, clientConfig);

    this.giftcardclass = {};
    this.giftcardclass.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardClass', 'GET', apiParams, clientConfig);
    this.giftcardclass.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardClass/{resourceId}', 'PUT', apiParams, clientConfig);
    this.giftcardclass.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardClass/{resourceId}/addMessage', 'POST', apiParams, clientConfig);
    this.giftcardclass.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardClass/{resourceId}', 'GET', apiParams, clientConfig);
    this.giftcardclass.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardClass', 'POST', apiParams, clientConfig);
    this.giftcardclass.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardClass/{resourceId}', 'PATCH', apiParams, clientConfig);

    this.giftcardobject = {};
    this.giftcardobject.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardObject', 'POST', apiParams, clientConfig);
    this.giftcardobject.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardObject/{resourceId}', 'GET', apiParams, clientConfig);
    this.giftcardobject.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardObject/{resourceId}', 'PUT', apiParams, clientConfig);
    this.giftcardobject.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardObject', 'GET', apiParams, clientConfig);
    this.giftcardobject.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardObject/{resourceId}/addMessage', 'POST', apiParams, clientConfig);
    this.giftcardobject.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/giftCardObject/{resourceId}', 'PATCH', apiParams, clientConfig);

    this.loyaltyobject = {};
    this.loyaltyobject.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}', 'PUT', apiParams, clientConfig);
    this.loyaltyobject.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyObject', 'GET', apiParams, clientConfig);
    this.loyaltyobject.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}/addMessage', 'POST', apiParams, clientConfig);
    this.loyaltyobject.modifylinkedofferobjects = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}/modifyLinkedOfferObjects', 'POST', apiParams, clientConfig);
    this.loyaltyobject.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyObject', 'POST', apiParams, clientConfig);
    this.loyaltyobject.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}', 'PATCH', apiParams, clientConfig);
    this.loyaltyobject.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyObject/{resourceId}', 'GET', apiParams, clientConfig);

    this.eventticketclass = {};
    this.eventticketclass.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketClass/{resourceId}', 'PUT', apiParams, clientConfig);
    this.eventticketclass.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketClass/{resourceId}', 'PATCH', apiParams, clientConfig);
    this.eventticketclass.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketClass', 'GET', apiParams, clientConfig);
    this.eventticketclass.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketClass/{resourceId}', 'GET', apiParams, clientConfig);
    this.eventticketclass.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketClass/{resourceId}/addMessage', 'POST', apiParams, clientConfig);
    this.eventticketclass.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/eventTicketClass', 'POST', apiParams, clientConfig);

    this.loyaltyclass = {};
    this.loyaltyclass.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyClass/{resourceId}', 'GET', apiParams, clientConfig);
    this.loyaltyclass.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyClass/{resourceId}', 'PUT', apiParams, clientConfig);
    this.loyaltyclass.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyClass', 'POST', apiParams, clientConfig);
    this.loyaltyclass.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyClass/{resourceId}/addMessage', 'POST', apiParams, clientConfig);
    this.loyaltyclass.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyClass', 'GET', apiParams, clientConfig);
    this.loyaltyclass.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/loyaltyClass/{resourceId}', 'PATCH', apiParams, clientConfig);

    this.offerclass = {};
    this.offerclass.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerClass/{resourceId}', 'PATCH', apiParams, clientConfig);
    this.offerclass.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerClass', 'GET', apiParams, clientConfig);
    this.offerclass.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerClass', 'POST', apiParams, clientConfig);
    this.offerclass.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerClass/{resourceId}', 'GET', apiParams, clientConfig);
    this.offerclass.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerClass/{resourceId}/addMessage', 'POST', apiParams, clientConfig);
    this.offerclass.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerClass/{resourceId}', 'PUT', apiParams, clientConfig);

    this.issuer = {};
    this.issuer.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/issuer/{resourceId}', 'GET', apiParams, clientConfig);
    this.issuer.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/issuer/{resourceId}', 'PATCH', apiParams, clientConfig);
    this.issuer.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/issuer', 'POST', apiParams, clientConfig);
    this.issuer.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/issuer/{resourceId}', 'PUT', apiParams, clientConfig);
    this.issuer.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/issuer', 'GET', apiParams, clientConfig);

    this.flightclass = {};
    this.flightclass.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightClass/{resourceId}', 'PATCH', apiParams, clientConfig);
    this.flightclass.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightClass/{resourceId}', 'PUT', apiParams, clientConfig);
    this.flightclass.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightClass/{resourceId}/addMessage', 'POST', apiParams, clientConfig);
    this.flightclass.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightClass/{resourceId}', 'GET', apiParams, clientConfig);
    this.flightclass.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightClass', 'POST', apiParams, clientConfig);
    this.flightclass.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/flightClass', 'GET', apiParams, clientConfig);

    this.permissions = {};
    this.permissions.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/permissions/{resourceId}', 'PUT', apiParams, clientConfig);
    this.permissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/permissions/{resourceId}', 'GET', apiParams, clientConfig);

    this.transitclass = {};
    this.transitclass.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitClass/{resourceId}', 'GET', apiParams, clientConfig);
    this.transitclass.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitClass/{resourceId}/addMessage', 'POST', apiParams, clientConfig);
    this.transitclass.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitClass/{resourceId}', 'PATCH', apiParams, clientConfig);
    this.transitclass.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitClass/{resourceId}', 'PUT', apiParams, clientConfig);
    this.transitclass.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitClass', 'POST', apiParams, clientConfig);
    this.transitclass.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/transitClass', 'GET', apiParams, clientConfig);

    this.offerobject = {};
    this.offerobject.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerObject/{resourceId}', 'PATCH', apiParams, clientConfig);
    this.offerobject.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerObject/{resourceId}', 'GET', apiParams, clientConfig);
    this.offerobject.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerObject', 'GET', apiParams, clientConfig);
    this.offerobject.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerObject', 'POST', apiParams, clientConfig);
    this.offerobject.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerObject/{resourceId}/addMessage', 'POST', apiParams, clientConfig);
    this.offerobject.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/offerObject/{resourceId}', 'PUT', apiParams, clientConfig);

    this.walletobjects = {};

    this.walletobjects.v1 = {};

    this.walletobjects.v1.privateContent = {};
    this.walletobjects.v1.privateContent.setPassUpdateNotice = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/privateContent/setPassUpdateNotice', 'POST', apiParams, clientConfig);

    this.jwt = {};
    this.jwt.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/jwt', 'POST', apiParams, clientConfig);

    this.genericclass = {};
    this.genericclass.addmessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericClass/{resourceId}/addMessage', 'POST', apiParams, clientConfig);
    this.genericclass.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericClass/{resourceId}', 'PUT', apiParams, clientConfig);
    this.genericclass.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericClass/{resourceId}', 'GET', apiParams, clientConfig);
    this.genericclass.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericClass', 'POST', apiParams, clientConfig);
    this.genericclass.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericClass', 'GET', apiParams, clientConfig);
    this.genericclass.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('walletobjects/v1/genericClass/{resourceId}', 'PATCH', apiParams, clientConfig);
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
