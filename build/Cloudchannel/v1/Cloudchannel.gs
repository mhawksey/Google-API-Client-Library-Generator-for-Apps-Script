
/**
 * Google Apps Script client library for the Cloud Channel API
 * Documentation URL: https://cloud.google.com/channel
 * @class
 */
class Cloudchannel {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://cloudchannel.googleapis.com/';
    this._servicePath = '';


    this.products = {};
    this.products.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/products', 'GET', apiParams, clientConfig);

    this.products.skus = {};
    this.products.skus.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/skus', 'GET', apiParams, clientConfig);

    this.operations = {};
    this.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.accounts = {};
    this.accounts.listTransferableOffers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:listTransferableOffers', 'POST', apiParams, clientConfig);
    this.accounts.listTransferableSkus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:listTransferableSkus', 'POST', apiParams, clientConfig);
    this.accounts.register = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+account}:register', 'POST', apiParams, clientConfig);
    this.accounts.listSubscribers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+account}:listSubscribers', 'GET', apiParams, clientConfig);
    this.accounts.unregister = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+account}:unregister', 'POST', apiParams, clientConfig);
    this.accounts.checkCloudIdentityAccountsExist = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:checkCloudIdentityAccountsExist', 'POST', apiParams, clientConfig);

    this.accounts.offers = {};
    this.accounts.offers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/offers', 'GET', apiParams, clientConfig);

    this.accounts.channelPartnerLinks = {};
    this.accounts.channelPartnerLinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.channelPartnerLinks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.channelPartnerLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/channelPartnerLinks', 'POST', apiParams, clientConfig);
    this.accounts.channelPartnerLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/channelPartnerLinks', 'GET', apiParams, clientConfig);

    this.accounts.channelPartnerLinks.customers = {};
    this.accounts.channelPartnerLinks.customers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customers', 'GET', apiParams, clientConfig);
    this.accounts.channelPartnerLinks.customers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.channelPartnerLinks.customers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.accounts.channelPartnerLinks.customers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.channelPartnerLinks.customers.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customers:import', 'POST', apiParams, clientConfig);
    this.accounts.channelPartnerLinks.customers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customers', 'POST', apiParams, clientConfig);

    this.accounts.channelPartnerLinks.channelPartnerRepricingConfigs = {};
    this.accounts.channelPartnerLinks.channelPartnerRepricingConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/channelPartnerRepricingConfigs', 'GET', apiParams, clientConfig);
    this.accounts.channelPartnerLinks.channelPartnerRepricingConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.channelPartnerLinks.channelPartnerRepricingConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.channelPartnerLinks.channelPartnerRepricingConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.accounts.channelPartnerLinks.channelPartnerRepricingConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/channelPartnerRepricingConfigs', 'POST', apiParams, clientConfig);

    this.accounts.customers = {};
    this.accounts.customers.transferEntitlementsToGoogle = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:transferEntitlementsToGoogle', 'POST', apiParams, clientConfig);
    this.accounts.customers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customers', 'GET', apiParams, clientConfig);
    this.accounts.customers.transferEntitlements = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:transferEntitlements', 'POST', apiParams, clientConfig);
    this.accounts.customers.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customers:import', 'POST', apiParams, clientConfig);
    this.accounts.customers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.customers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.accounts.customers.provisionCloudIdentity = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}:provisionCloudIdentity', 'POST', apiParams, clientConfig);
    this.accounts.customers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customers', 'POST', apiParams, clientConfig);
    this.accounts.customers.listPurchasableOffers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}:listPurchasableOffers', 'GET', apiParams, clientConfig);
    this.accounts.customers.queryEligibleBillingAccounts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}:queryEligibleBillingAccounts', 'GET', apiParams, clientConfig);
    this.accounts.customers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.customers.listPurchasableSkus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}:listPurchasableSkus', 'GET', apiParams, clientConfig);

    this.accounts.customers.customerRepricingConfigs = {};
    this.accounts.customers.customerRepricingConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customerRepricingConfigs', 'GET', apiParams, clientConfig);
    this.accounts.customers.customerRepricingConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.customers.customerRepricingConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.accounts.customers.customerRepricingConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.customers.customerRepricingConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customerRepricingConfigs', 'POST', apiParams, clientConfig);

    this.accounts.customers.entitlements = {};
    this.accounts.customers.entitlements.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/entitlements', 'GET', apiParams, clientConfig);
    this.accounts.customers.entitlements.lookupOffer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+entitlement}:lookupOffer', 'GET', apiParams, clientConfig);
    this.accounts.customers.entitlements.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.accounts.customers.entitlements.changeOffer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:changeOffer', 'POST', apiParams, clientConfig);
    this.accounts.customers.entitlements.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/entitlements', 'POST', apiParams, clientConfig);
    this.accounts.customers.entitlements.activate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:activate', 'POST', apiParams, clientConfig);
    this.accounts.customers.entitlements.changeRenewalSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:changeRenewalSettings', 'POST', apiParams, clientConfig);
    this.accounts.customers.entitlements.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.customers.entitlements.listEntitlementChanges = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:listEntitlementChanges', 'GET', apiParams, clientConfig);
    this.accounts.customers.entitlements.changeParameters = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:changeParameters', 'POST', apiParams, clientConfig);
    this.accounts.customers.entitlements.suspend = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:suspend', 'POST', apiParams, clientConfig);
    this.accounts.customers.entitlements.startPaidService = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:startPaidService', 'POST', apiParams, clientConfig);

    this.accounts.skuGroups = {};
    this.accounts.skuGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/skuGroups', 'GET', apiParams, clientConfig);

    this.accounts.skuGroups.billableSkus = {};
    this.accounts.skuGroups.billableSkus.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/billableSkus', 'GET', apiParams, clientConfig);

    this.accounts.reports = {};
    this.accounts.reports.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:run', 'POST', apiParams, clientConfig);
    this.accounts.reports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/reports', 'GET', apiParams, clientConfig);

    this.accounts.reportJobs = {};
    this.accounts.reportJobs.fetchReportResults = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+reportJob}:fetchReportResults', 'POST', apiParams, clientConfig);

    this.integrators = {};
    this.integrators.listSubscribers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+integrator}:listSubscribers', 'GET', apiParams, clientConfig);
    this.integrators.unregisterSubscriber = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+integrator}:unregisterSubscriber', 'POST', apiParams, clientConfig);
    this.integrators.registerSubscriber = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+integrator}:registerSubscriber', 'POST', apiParams, clientConfig);
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
