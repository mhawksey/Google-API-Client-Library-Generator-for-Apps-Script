
/**
 * Google Apps Script client library for the Content API for Shopping
 * Documentation URL: https://developers.google.com/shopping-content/v2/
 * @class
 */
class Content {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://shoppingcontent.googleapis.com/';
    this._servicePath = 'content/v2.1/';


    this.collections = {};
    this.collections.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/collections/{collectionId}', 'GET', apiParams, clientConfig);
    this.collections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/collections', 'GET', apiParams, clientConfig);
    this.collections.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/collections', 'POST', apiParams, clientConfig);
    this.collections.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/collections/{collectionId}', 'DELETE', apiParams, clientConfig);

    this.returnpolicyonline = {};
    this.returnpolicyonline.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnpolicyonline/{returnPolicyId}', 'PATCH', apiParams, clientConfig);
    this.returnpolicyonline.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnpolicyonline', 'GET', apiParams, clientConfig);
    this.returnpolicyonline.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnpolicyonline/{returnPolicyId}', 'GET', apiParams, clientConfig);
    this.returnpolicyonline.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnpolicyonline/{returnPolicyId}', 'DELETE', apiParams, clientConfig);
    this.returnpolicyonline.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnpolicyonline', 'POST', apiParams, clientConfig);

    this.quotas = {};
    this.quotas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/quotas', 'GET', apiParams, clientConfig);

    this.freelistingsprogram = {};
    this.freelistingsprogram.requestreview = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/freelistingsprogram/requestreview', 'POST', apiParams, clientConfig);
    this.freelistingsprogram.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/freelistingsprogram', 'GET', apiParams, clientConfig);

    this.freelistingsprogram.checkoutsettings = {};
    this.freelistingsprogram.checkoutsettings.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/freelistingsprogram/checkoutsettings', 'POST', apiParams, clientConfig);
    this.freelistingsprogram.checkoutsettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/freelistingsprogram/checkoutsettings', 'GET', apiParams, clientConfig);
    this.freelistingsprogram.checkoutsettings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/freelistingsprogram/checkoutsettings', 'DELETE', apiParams, clientConfig);

    this.shippingsettings = {};
    this.shippingsettings.getsupportedholidays = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/supportedHolidays', 'GET', apiParams, clientConfig);
    this.shippingsettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/shippingsettings/{accountId}', 'GET', apiParams, clientConfig);
    this.shippingsettings.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('shippingsettings/batch', 'POST', apiParams, clientConfig);
    this.shippingsettings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/shippingsettings', 'GET', apiParams, clientConfig);
    this.shippingsettings.getsupportedcarriers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/supportedCarriers', 'GET', apiParams, clientConfig);
    this.shippingsettings.getsupportedpickupservices = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/supportedPickupServices', 'GET', apiParams, clientConfig);
    this.shippingsettings.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/shippingsettings/{accountId}', 'PUT', apiParams, clientConfig);

    this.recommendations = {};
    this.recommendations.reportInteraction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/recommendations/reportInteraction', 'POST', apiParams, clientConfig);
    this.recommendations.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/recommendations/generate', 'GET', apiParams, clientConfig);

    this.collectionstatuses = {};
    this.collectionstatuses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/collectionstatuses/{collectionId}', 'GET', apiParams, clientConfig);
    this.collectionstatuses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/collectionstatuses', 'GET', apiParams, clientConfig);

    this.ordertrackingsignals = {};
    this.ordertrackingsignals.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/ordertrackingsignals', 'POST', apiParams, clientConfig);

    this.regionalinventory = {};
    this.regionalinventory.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('regionalinventory/batch', 'POST', apiParams, clientConfig);
    this.regionalinventory.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/products/{productId}/regionalinventory', 'POST', apiParams, clientConfig);

    this.conversionsources = {};
    this.conversionsources.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/conversionsources/{conversionSourceId}', 'PATCH', apiParams, clientConfig);
    this.conversionsources.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/conversionsources', 'POST', apiParams, clientConfig);
    this.conversionsources.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/conversionsources/{conversionSourceId}:undelete', 'POST', apiParams, clientConfig);
    this.conversionsources.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/conversionsources/{conversionSourceId}', 'DELETE', apiParams, clientConfig);
    this.conversionsources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/conversionsources', 'GET', apiParams, clientConfig);
    this.conversionsources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/conversionsources/{conversionSourceId}', 'GET', apiParams, clientConfig);

    this.datafeeds = {};
    this.datafeeds.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/datafeeds', 'POST', apiParams, clientConfig);
    this.datafeeds.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/datafeeds/{datafeedId}', 'DELETE', apiParams, clientConfig);
    this.datafeeds.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('datafeeds/batch', 'POST', apiParams, clientConfig);
    this.datafeeds.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/datafeeds', 'GET', apiParams, clientConfig);
    this.datafeeds.fetchnow = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/datafeeds/{datafeedId}/fetchNow', 'POST', apiParams, clientConfig);
    this.datafeeds.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/datafeeds/{datafeedId}', 'PUT', apiParams, clientConfig);
    this.datafeeds.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/datafeeds/{datafeedId}', 'GET', apiParams, clientConfig);

    this.csses = {};
    this.csses.updatelabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{cssGroupId}/csses/{cssDomainId}/updatelabels', 'POST', apiParams, clientConfig);
    this.csses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{cssGroupId}/csses/{cssDomainId}', 'GET', apiParams, clientConfig);
    this.csses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{cssGroupId}/csses', 'GET', apiParams, clientConfig);

    this.products = {};
    this.products.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/products', 'GET', apiParams, clientConfig);
    this.products.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/products/{productId}', 'GET', apiParams, clientConfig);
    this.products.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/products/{productId}', 'DELETE', apiParams, clientConfig);
    this.products.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('products/batch', 'POST', apiParams, clientConfig);
    this.products.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/products', 'POST', apiParams, clientConfig);
    this.products.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/products/{productId}', 'PATCH', apiParams, clientConfig);

    this.datafeedstatuses = {};
    this.datafeedstatuses.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('datafeedstatuses/batch', 'POST', apiParams, clientConfig);
    this.datafeedstatuses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/datafeedstatuses/{datafeedId}', 'GET', apiParams, clientConfig);
    this.datafeedstatuses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/datafeedstatuses', 'GET', apiParams, clientConfig);

    this.productstatuses = {};
    this.productstatuses.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('productstatuses/batch', 'POST', apiParams, clientConfig);
    this.productstatuses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/productstatuses', 'GET', apiParams, clientConfig);
    this.productstatuses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/productstatuses/{productId}', 'GET', apiParams, clientConfig);

    this.regions = {};
    this.regions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/regions/{regionId}', 'DELETE', apiParams, clientConfig);
    this.regions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/regions/{regionId}', 'PATCH', apiParams, clientConfig);
    this.regions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/regions', 'GET', apiParams, clientConfig);
    this.regions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/regions/{regionId}', 'GET', apiParams, clientConfig);
    this.regions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/regions', 'POST', apiParams, clientConfig);

    this.accounts = {};
    this.accounts.claimwebsite = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}/claimwebsite', 'POST', apiParams, clientConfig);
    this.accounts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}', 'DELETE', apiParams, clientConfig);
    this.accounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}', 'PUT', apiParams, clientConfig);
    this.accounts.listlinks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}/listlinks', 'GET', apiParams, clientConfig);
    this.accounts.authinfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/authinfo', 'GET', apiParams, clientConfig);
    this.accounts.verifyphonenumber = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}/verifyphonenumber', 'POST', apiParams, clientConfig);
    this.accounts.link = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}/link', 'POST', apiParams, clientConfig);
    this.accounts.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/batch', 'POST', apiParams, clientConfig);
    this.accounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}', 'GET', apiParams, clientConfig);
    this.accounts.requestphoneverification = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}/requestphoneverification', 'POST', apiParams, clientConfig);
    this.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts', 'GET', apiParams, clientConfig);
    this.accounts.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts', 'POST', apiParams, clientConfig);
    this.accounts.updatelabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}/updatelabels', 'POST', apiParams, clientConfig);

    this.accounts.credentials = {};
    this.accounts.credentials.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/credentials', 'POST', apiParams, clientConfig);

    this.accounts.labels = {};
    this.accounts.labels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/labels', 'GET', apiParams, clientConfig);
    this.accounts.labels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/labels', 'POST', apiParams, clientConfig);
    this.accounts.labels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/labels/{labelId}', 'DELETE', apiParams, clientConfig);
    this.accounts.labels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/labels/{labelId}', 'PATCH', apiParams, clientConfig);

    this.accounts.returncarrier = {};
    this.accounts.returncarrier.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/returncarrier', 'GET', apiParams, clientConfig);
    this.accounts.returncarrier.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/returncarrier/{carrierAccountId}', 'PATCH', apiParams, clientConfig);
    this.accounts.returncarrier.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/returncarrier/{carrierAccountId}', 'DELETE', apiParams, clientConfig);
    this.accounts.returncarrier.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/returncarrier', 'POST', apiParams, clientConfig);

    this.productdeliverytime = {};
    this.productdeliverytime.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/productdeliverytime/{productId}', 'DELETE', apiParams, clientConfig);
    this.productdeliverytime.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/productdeliverytime', 'POST', apiParams, clientConfig);
    this.productdeliverytime.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/productdeliverytime/{productId}', 'GET', apiParams, clientConfig);

    this.accounttax = {};
    this.accounttax.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounttax/{accountId}', 'PUT', apiParams, clientConfig);
    this.accounttax.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounttax/batch', 'POST', apiParams, clientConfig);
    this.accounttax.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounttax/{accountId}', 'GET', apiParams, clientConfig);
    this.accounttax.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounttax', 'GET', apiParams, clientConfig);

    this.merchantsupport = {};
    this.merchantsupport.triggeraction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/merchantsupport/triggeraction', 'POST', apiParams, clientConfig);
    this.merchantsupport.renderproductissues = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/merchantsupport/renderproductissues/{productId}', 'POST', apiParams, clientConfig);
    this.merchantsupport.renderaccountissues = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/merchantsupport/renderaccountissues', 'POST', apiParams, clientConfig);

    this.accountstatuses = {};
    this.accountstatuses.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accountstatuses/batch', 'POST', apiParams, clientConfig);
    this.accountstatuses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accountstatuses/{accountId}', 'GET', apiParams, clientConfig);
    this.accountstatuses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accountstatuses', 'GET', apiParams, clientConfig);

    this.pos = {};
    this.pos.inventory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/inventory', 'POST', apiParams, clientConfig);
    this.pos.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/store', 'POST', apiParams, clientConfig);
    this.pos.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/store/{storeCode}', 'GET', apiParams, clientConfig);
    this.pos.sale = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/sale', 'POST', apiParams, clientConfig);
    this.pos.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/store', 'GET', apiParams, clientConfig);
    this.pos.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/store/{storeCode}', 'DELETE', apiParams, clientConfig);
    this.pos.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('pos/batch', 'POST', apiParams, clientConfig);

    this.shoppingadsprogram = {};
    this.shoppingadsprogram.requestreview = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/shoppingadsprogram/requestreview', 'POST', apiParams, clientConfig);
    this.shoppingadsprogram.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/shoppingadsprogram', 'GET', apiParams, clientConfig);

    this.liasettings = {};
    this.liasettings.requestgmbaccess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings/{accountId}/requestgmbaccess', 'POST', apiParams, clientConfig);
    this.liasettings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings', 'GET', apiParams, clientConfig);
    this.liasettings.listposdataproviders = async (apiParams = {}, clientConfig = {}) => this._makeRequest('liasettings/posdataproviders', 'GET', apiParams, clientConfig);
    this.liasettings.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('liasettings/batch', 'POST', apiParams, clientConfig);
    this.liasettings.setposdataprovider = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings/{accountId}/setposdataprovider', 'POST', apiParams, clientConfig);
    this.liasettings.requestinventoryverification = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings/{accountId}/requestinventoryverification/{country}', 'POST', apiParams, clientConfig);
    this.liasettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings/{accountId}', 'GET', apiParams, clientConfig);
    this.liasettings.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings/{accountId}', 'PUT', apiParams, clientConfig);
    this.liasettings.setomnichannelexperience = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings/{accountId}/setomnichannelexperience', 'POST', apiParams, clientConfig);
    this.liasettings.setinventoryverificationcontact = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings/{accountId}/setinventoryverificationcontact', 'POST', apiParams, clientConfig);
    this.liasettings.getaccessiblegmbaccounts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings/{accountId}/accessiblegmbaccounts', 'GET', apiParams, clientConfig);

    this.localinventory = {};
    this.localinventory.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('localinventory/batch', 'POST', apiParams, clientConfig);
    this.localinventory.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/products/{productId}/localinventory', 'POST', apiParams, clientConfig);

    this.reports = {};
    this.reports.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/reports/search', 'POST', apiParams, clientConfig);

    this.promotions = {};
    this.promotions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/promotions/{id}', 'GET', apiParams, clientConfig);
    this.promotions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/promotions', 'POST', apiParams, clientConfig);
    this.promotions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/promotions', 'GET', apiParams, clientConfig);

    this.pubsubnotificationsettings = {};
    this.pubsubnotificationsettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/pubsubnotificationsettings', 'GET', apiParams, clientConfig);
    this.pubsubnotificationsettings.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/pubsubnotificationsettings', 'PUT', apiParams, clientConfig);
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
