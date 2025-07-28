
/**
 * Google Apps Script client library for the Google Analytics Admin API
 * Documentation URL: http://code.google.com/apis/analytics/docs/mgmt/home.html
 * @class
 */
class Analyticsadmin {
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
    this._rootUrl = 'https://analyticsadmin.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};
    this.accounts.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.accounts.list = (params) => this._makeRequest('v1alpha/accounts', 'GET', params);
    this.accounts.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.accounts.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.accounts.provisionAccountTicket = (params) => this._makeRequest('v1alpha/accounts:provisionAccountTicket', 'POST', params);
    this.accounts.getDataSharingSettings = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.accounts.searchChangeHistoryEvents = (params) => this._makeRequest('v1alpha/{+account}:searchChangeHistoryEvents', 'POST', params);
    this.accounts.runAccessReport = (params) => this._makeRequest('v1alpha/{+entity}:runAccessReport', 'POST', params);

    this.accounts.accessBindings = {};
    this.accounts.accessBindings.create = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings', 'POST', params);
    this.accounts.accessBindings.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.accounts.accessBindings.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.accounts.accessBindings.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.accounts.accessBindings.list = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings', 'GET', params);
    this.accounts.accessBindings.batchCreate = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchCreate', 'POST', params);
    this.accounts.accessBindings.batchGet = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchGet', 'GET', params);
    this.accounts.accessBindings.batchUpdate = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchUpdate', 'POST', params);
    this.accounts.accessBindings.batchDelete = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchDelete', 'POST', params);

    this.accountSummaries = {};
    this.accountSummaries.list = (params) => this._makeRequest('v1alpha/accountSummaries', 'GET', params);

    this.properties = {};
    this.properties.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.list = (params) => this._makeRequest('v1alpha/properties', 'GET', params);
    this.properties.create = (params) => this._makeRequest('v1alpha/properties', 'POST', params);
    this.properties.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.properties.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.acknowledgeUserDataCollection = (params) => this._makeRequest('v1alpha/{+property}:acknowledgeUserDataCollection', 'POST', params);
    this.properties.getGoogleSignalsSettings = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.updateGoogleSignalsSettings = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.getDataRetentionSettings = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.updateDataRetentionSettings = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.getAttributionSettings = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.updateAttributionSettings = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.runAccessReport = (params) => this._makeRequest('v1alpha/{+entity}:runAccessReport', 'POST', params);
    this.properties.createRollupProperty = (params) => this._makeRequest('v1alpha/properties:createRollupProperty', 'POST', params);
    this.properties.provisionSubproperty = (params) => this._makeRequest('v1alpha/properties:provisionSubproperty', 'POST', params);
    this.properties.submitUserDeletion = (params) => this._makeRequest('v1alpha/{+name}:submitUserDeletion', 'POST', params);
    this.properties.getReportingIdentitySettings = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.properties.firebaseLinks = {};
    this.properties.firebaseLinks.create = (params) => this._makeRequest('v1alpha/{+parent}/firebaseLinks', 'POST', params);
    this.properties.firebaseLinks.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.properties.firebaseLinks.list = (params) => this._makeRequest('v1alpha/{+parent}/firebaseLinks', 'GET', params);

    this.properties.dataStreams = {};
    this.properties.dataStreams.getGlobalSiteTag = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.dataStreams.create = (params) => this._makeRequest('v1alpha/{+parent}/dataStreams', 'POST', params);
    this.properties.dataStreams.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.properties.dataStreams.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.dataStreams.list = (params) => this._makeRequest('v1alpha/{+parent}/dataStreams', 'GET', params);
    this.properties.dataStreams.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.dataStreams.getEnhancedMeasurementSettings = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.dataStreams.updateEnhancedMeasurementSettings = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.dataStreams.updateDataRedactionSettings = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.dataStreams.getDataRedactionSettings = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.properties.dataStreams.measurementProtocolSecrets = {};
    this.properties.dataStreams.measurementProtocolSecrets.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.dataStreams.measurementProtocolSecrets.list = (params) => this._makeRequest('v1alpha/{+parent}/measurementProtocolSecrets', 'GET', params);
    this.properties.dataStreams.measurementProtocolSecrets.create = (params) => this._makeRequest('v1alpha/{+parent}/measurementProtocolSecrets', 'POST', params);
    this.properties.dataStreams.measurementProtocolSecrets.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.properties.dataStreams.measurementProtocolSecrets.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    this.properties.dataStreams.sKAdNetworkConversionValueSchema = {};
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.create = (params) => this._makeRequest('v1alpha/{+parent}/sKAdNetworkConversionValueSchema', 'POST', params);
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.list = (params) => this._makeRequest('v1alpha/{+parent}/sKAdNetworkConversionValueSchema', 'GET', params);

    this.properties.dataStreams.eventCreateRules = {};
    this.properties.dataStreams.eventCreateRules.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.dataStreams.eventCreateRules.list = (params) => this._makeRequest('v1alpha/{+parent}/eventCreateRules', 'GET', params);
    this.properties.dataStreams.eventCreateRules.create = (params) => this._makeRequest('v1alpha/{+parent}/eventCreateRules', 'POST', params);
    this.properties.dataStreams.eventCreateRules.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.dataStreams.eventCreateRules.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.properties.dataStreams.eventEditRules = {};
    this.properties.dataStreams.eventEditRules.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.dataStreams.eventEditRules.list = (params) => this._makeRequest('v1alpha/{+parent}/eventEditRules', 'GET', params);
    this.properties.dataStreams.eventEditRules.create = (params) => this._makeRequest('v1alpha/{+parent}/eventEditRules', 'POST', params);
    this.properties.dataStreams.eventEditRules.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.dataStreams.eventEditRules.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.properties.dataStreams.eventEditRules.reorder = (params) => this._makeRequest('v1alpha/{+parent}/eventEditRules:reorder', 'POST', params);

    this.properties.googleAdsLinks = {};
    this.properties.googleAdsLinks.create = (params) => this._makeRequest('v1alpha/{+parent}/googleAdsLinks', 'POST', params);
    this.properties.googleAdsLinks.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.googleAdsLinks.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.properties.googleAdsLinks.list = (params) => this._makeRequest('v1alpha/{+parent}/googleAdsLinks', 'GET', params);

    this.properties.conversionEvents = {};
    this.properties.conversionEvents.create = (params) => this._makeRequest('v1alpha/{+parent}/conversionEvents', 'POST', params);
    this.properties.conversionEvents.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.conversionEvents.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.conversionEvents.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.properties.conversionEvents.list = (params) => this._makeRequest('v1alpha/{+parent}/conversionEvents', 'GET', params);

    this.properties.keyEvents = {};
    this.properties.keyEvents.create = (params) => this._makeRequest('v1alpha/{+parent}/keyEvents', 'POST', params);
    this.properties.keyEvents.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.keyEvents.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.keyEvents.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.properties.keyEvents.list = (params) => this._makeRequest('v1alpha/{+parent}/keyEvents', 'GET', params);

    this.properties.displayVideo360AdvertiserLinks = {};
    this.properties.displayVideo360AdvertiserLinks.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.displayVideo360AdvertiserLinks.list = (params) => this._makeRequest('v1alpha/{+parent}/displayVideo360AdvertiserLinks', 'GET', params);
    this.properties.displayVideo360AdvertiserLinks.create = (params) => this._makeRequest('v1alpha/{+parent}/displayVideo360AdvertiserLinks', 'POST', params);
    this.properties.displayVideo360AdvertiserLinks.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.properties.displayVideo360AdvertiserLinks.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    this.properties.displayVideo360AdvertiserLinkProposals = {};
    this.properties.displayVideo360AdvertiserLinkProposals.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.displayVideo360AdvertiserLinkProposals.list = (params) => this._makeRequest('v1alpha/{+parent}/displayVideo360AdvertiserLinkProposals', 'GET', params);
    this.properties.displayVideo360AdvertiserLinkProposals.create = (params) => this._makeRequest('v1alpha/{+parent}/displayVideo360AdvertiserLinkProposals', 'POST', params);
    this.properties.displayVideo360AdvertiserLinkProposals.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.properties.displayVideo360AdvertiserLinkProposals.approve = (params) => this._makeRequest('v1alpha/{+name}:approve', 'POST', params);
    this.properties.displayVideo360AdvertiserLinkProposals.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', params);

    this.properties.customDimensions = {};
    this.properties.customDimensions.create = (params) => this._makeRequest('v1alpha/{+parent}/customDimensions', 'POST', params);
    this.properties.customDimensions.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.customDimensions.list = (params) => this._makeRequest('v1alpha/{+parent}/customDimensions', 'GET', params);
    this.properties.customDimensions.archive = (params) => this._makeRequest('v1alpha/{+name}:archive', 'POST', params);
    this.properties.customDimensions.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.properties.customMetrics = {};
    this.properties.customMetrics.create = (params) => this._makeRequest('v1alpha/{+parent}/customMetrics', 'POST', params);
    this.properties.customMetrics.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.customMetrics.list = (params) => this._makeRequest('v1alpha/{+parent}/customMetrics', 'GET', params);
    this.properties.customMetrics.archive = (params) => this._makeRequest('v1alpha/{+name}:archive', 'POST', params);
    this.properties.customMetrics.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.properties.audiences = {};
    this.properties.audiences.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.audiences.list = (params) => this._makeRequest('v1alpha/{+parent}/audiences', 'GET', params);
    this.properties.audiences.create = (params) => this._makeRequest('v1alpha/{+parent}/audiences', 'POST', params);
    this.properties.audiences.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.audiences.archive = (params) => this._makeRequest('v1alpha/{+name}:archive', 'POST', params);

    this.properties.searchAds360Links = {};
    this.properties.searchAds360Links.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.searchAds360Links.list = (params) => this._makeRequest('v1alpha/{+parent}/searchAds360Links', 'GET', params);
    this.properties.searchAds360Links.create = (params) => this._makeRequest('v1alpha/{+parent}/searchAds360Links', 'POST', params);
    this.properties.searchAds360Links.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.properties.searchAds360Links.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    this.properties.accessBindings = {};
    this.properties.accessBindings.create = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings', 'POST', params);
    this.properties.accessBindings.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.accessBindings.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.accessBindings.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.properties.accessBindings.list = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings', 'GET', params);
    this.properties.accessBindings.batchCreate = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchCreate', 'POST', params);
    this.properties.accessBindings.batchGet = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchGet', 'GET', params);
    this.properties.accessBindings.batchUpdate = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchUpdate', 'POST', params);
    this.properties.accessBindings.batchDelete = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchDelete', 'POST', params);

    this.properties.expandedDataSets = {};
    this.properties.expandedDataSets.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.expandedDataSets.list = (params) => this._makeRequest('v1alpha/{+parent}/expandedDataSets', 'GET', params);
    this.properties.expandedDataSets.create = (params) => this._makeRequest('v1alpha/{+parent}/expandedDataSets', 'POST', params);
    this.properties.expandedDataSets.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.expandedDataSets.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.properties.channelGroups = {};
    this.properties.channelGroups.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.channelGroups.list = (params) => this._makeRequest('v1alpha/{+parent}/channelGroups', 'GET', params);
    this.properties.channelGroups.create = (params) => this._makeRequest('v1alpha/{+parent}/channelGroups', 'POST', params);
    this.properties.channelGroups.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.channelGroups.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.properties.bigQueryLinks = {};
    this.properties.bigQueryLinks.create = (params) => this._makeRequest('v1alpha/{+parent}/bigQueryLinks', 'POST', params);
    this.properties.bigQueryLinks.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.bigQueryLinks.list = (params) => this._makeRequest('v1alpha/{+parent}/bigQueryLinks', 'GET', params);
    this.properties.bigQueryLinks.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.properties.bigQueryLinks.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    this.properties.adSenseLinks = {};
    this.properties.adSenseLinks.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.adSenseLinks.create = (params) => this._makeRequest('v1alpha/{+parent}/adSenseLinks', 'POST', params);
    this.properties.adSenseLinks.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.properties.adSenseLinks.list = (params) => this._makeRequest('v1alpha/{+parent}/adSenseLinks', 'GET', params);

    this.properties.calculatedMetrics = {};
    this.properties.calculatedMetrics.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.calculatedMetrics.create = (params) => this._makeRequest('v1alpha/{+parent}/calculatedMetrics', 'POST', params);
    this.properties.calculatedMetrics.list = (params) => this._makeRequest('v1alpha/{+parent}/calculatedMetrics', 'GET', params);
    this.properties.calculatedMetrics.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.calculatedMetrics.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.properties.rollupPropertySourceLinks = {};
    this.properties.rollupPropertySourceLinks.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.rollupPropertySourceLinks.list = (params) => this._makeRequest('v1alpha/{+parent}/rollupPropertySourceLinks', 'GET', params);
    this.properties.rollupPropertySourceLinks.create = (params) => this._makeRequest('v1alpha/{+parent}/rollupPropertySourceLinks', 'POST', params);
    this.properties.rollupPropertySourceLinks.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.properties.subpropertyEventFilters = {};
    this.properties.subpropertyEventFilters.create = (params) => this._makeRequest('v1alpha/{+parent}/subpropertyEventFilters', 'POST', params);
    this.properties.subpropertyEventFilters.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.subpropertyEventFilters.list = (params) => this._makeRequest('v1alpha/{+parent}/subpropertyEventFilters', 'GET', params);
    this.properties.subpropertyEventFilters.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.subpropertyEventFilters.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.properties.reportingDataAnnotations = {};
    this.properties.reportingDataAnnotations.create = (params) => this._makeRequest('v1alpha/{+parent}/reportingDataAnnotations', 'POST', params);
    this.properties.reportingDataAnnotations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.properties.reportingDataAnnotations.list = (params) => this._makeRequest('v1alpha/{+parent}/reportingDataAnnotations', 'GET', params);
    this.properties.reportingDataAnnotations.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.reportingDataAnnotations.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.properties.subpropertySyncConfigs = {};
    this.properties.subpropertySyncConfigs.list = (params) => this._makeRequest('v1alpha/{+parent}/subpropertySyncConfigs', 'GET', params);
    this.properties.subpropertySyncConfigs.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.properties.subpropertySyncConfigs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
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
