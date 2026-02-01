
/**
 * Google Apps Script client library for the Google Analytics API
 * Documentation URL: https://developers.google.com/analytics/
 * @class
 */
class Analytics {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://analytics.googleapis.com/';
    this._servicePath = 'analytics/v3/';


    this.data = {};

    this.data.realtime = {};
    this.data.realtime.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('data/realtime', 'GET', apiParams, clientConfig);

    this.data.mcf = {};
    this.data.mcf.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('data/mcf', 'GET', apiParams, clientConfig);

    this.data.ga = {};
    this.data.ga.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('data/ga', 'GET', apiParams, clientConfig);

    this.provisioning = {};
    this.provisioning.createAccountTree = async (apiParams = {}, clientConfig = {}) => this._makeRequest('provisioning/createAccountTree', 'POST', apiParams, clientConfig);
    this.provisioning.createAccountTicket = async (apiParams = {}, clientConfig = {}) => this._makeRequest('provisioning/createAccountTicket', 'POST', apiParams, clientConfig);

    this.metadata = {};

    this.metadata.columns = {};
    this.metadata.columns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('metadata/{reportType}/columns', 'GET', apiParams, clientConfig);

    this.userDeletion = {};

    this.userDeletion.userDeletionRequest = {};
    this.userDeletion.userDeletionRequest.upsert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userDeletion/userDeletionRequests:upsert', 'POST', apiParams, clientConfig);

    this.management = {};

    this.management.accountSummaries = {};
    this.management.accountSummaries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accountSummaries', 'GET', apiParams, clientConfig);

    this.management.webPropertyAdWordsLinks = {};
    this.management.webPropertyAdWordsLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}', 'DELETE', apiParams, clientConfig);
    this.management.webPropertyAdWordsLinks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}', 'PATCH', apiParams, clientConfig);
    this.management.webPropertyAdWordsLinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}', 'PUT', apiParams, clientConfig);
    this.management.webPropertyAdWordsLinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}', 'GET', apiParams, clientConfig);
    this.management.webPropertyAdWordsLinks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks', 'POST', apiParams, clientConfig);
    this.management.webPropertyAdWordsLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks', 'GET', apiParams, clientConfig);

    this.management.webpropertyUserLinks = {};
    this.management.webpropertyUserLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks', 'GET', apiParams, clientConfig);
    this.management.webpropertyUserLinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}', 'PUT', apiParams, clientConfig);
    this.management.webpropertyUserLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}', 'DELETE', apiParams, clientConfig);
    this.management.webpropertyUserLinks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks', 'POST', apiParams, clientConfig);

    this.management.experiments = {};
    this.management.experiments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}', 'GET', apiParams, clientConfig);
    this.management.experiments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}', 'DELETE', apiParams, clientConfig);
    this.management.experiments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments', 'GET', apiParams, clientConfig);
    this.management.experiments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}', 'PATCH', apiParams, clientConfig);
    this.management.experiments.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}', 'PUT', apiParams, clientConfig);
    this.management.experiments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments', 'POST', apiParams, clientConfig);

    this.management.profiles = {};
    this.management.profiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}', 'GET', apiParams, clientConfig);
    this.management.profiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles', 'GET', apiParams, clientConfig);
    this.management.profiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}', 'DELETE', apiParams, clientConfig);
    this.management.profiles.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles', 'POST', apiParams, clientConfig);
    this.management.profiles.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}', 'PUT', apiParams, clientConfig);
    this.management.profiles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}', 'PATCH', apiParams, clientConfig);

    this.management.filters = {};
    this.management.filters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/filters/{filterId}', 'DELETE', apiParams, clientConfig);
    this.management.filters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/filters', 'GET', apiParams, clientConfig);
    this.management.filters.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/filters', 'POST', apiParams, clientConfig);
    this.management.filters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/filters/{filterId}', 'GET', apiParams, clientConfig);
    this.management.filters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/filters/{filterId}', 'PATCH', apiParams, clientConfig);
    this.management.filters.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/filters/{filterId}', 'PUT', apiParams, clientConfig);

    this.management.webproperties = {};
    this.management.webproperties.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}', 'PATCH', apiParams, clientConfig);
    this.management.webproperties.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties', 'POST', apiParams, clientConfig);
    this.management.webproperties.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties', 'GET', apiParams, clientConfig);
    this.management.webproperties.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}', 'PUT', apiParams, clientConfig);
    this.management.webproperties.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}', 'GET', apiParams, clientConfig);

    this.management.unsampledReports = {};
    this.management.unsampledReports.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports', 'POST', apiParams, clientConfig);
    this.management.unsampledReports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}', 'GET', apiParams, clientConfig);
    this.management.unsampledReports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports', 'GET', apiParams, clientConfig);
    this.management.unsampledReports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}', 'DELETE', apiParams, clientConfig);

    this.management.accountUserLinks = {};
    this.management.accountUserLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/entityUserLinks/{linkId}', 'DELETE', apiParams, clientConfig);
    this.management.accountUserLinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/entityUserLinks/{linkId}', 'PUT', apiParams, clientConfig);
    this.management.accountUserLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/entityUserLinks', 'GET', apiParams, clientConfig);
    this.management.accountUserLinks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/entityUserLinks', 'POST', apiParams, clientConfig);

    this.management.customDimensions = {};
    this.management.customDimensions.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}', 'PUT', apiParams, clientConfig);
    this.management.customDimensions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions', 'GET', apiParams, clientConfig);
    this.management.customDimensions.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions', 'POST', apiParams, clientConfig);
    this.management.customDimensions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}', 'PATCH', apiParams, clientConfig);
    this.management.customDimensions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}', 'GET', apiParams, clientConfig);

    this.management.accounts = {};
    this.management.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts', 'GET', apiParams, clientConfig);

    this.management.customDataSources = {};
    this.management.customDataSources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources', 'GET', apiParams, clientConfig);

    this.management.uploads = {};
    this.management.uploads.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads/{uploadId}', 'GET', apiParams, clientConfig);
    this.management.uploads.deleteUploadData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/deleteUploadData', 'POST', apiParams, clientConfig);
    this.management.uploads.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads', 'GET', apiParams, clientConfig);
    this.management.uploads.uploadData = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads' : 'management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.management.clientId = {};
    this.management.clientId.hashClientId = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/clientId:hashClientId', 'POST', apiParams, clientConfig);

    this.management.segments = {};
    this.management.segments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/segments', 'GET', apiParams, clientConfig);

    this.management.profileFilterLinks = {};
    this.management.profileFilterLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}', 'DELETE', apiParams, clientConfig);
    this.management.profileFilterLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks', 'GET', apiParams, clientConfig);
    this.management.profileFilterLinks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks', 'POST', apiParams, clientConfig);
    this.management.profileFilterLinks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}', 'PATCH', apiParams, clientConfig);
    this.management.profileFilterLinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}', 'PUT', apiParams, clientConfig);
    this.management.profileFilterLinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}', 'GET', apiParams, clientConfig);

    this.management.goals = {};
    this.management.goals.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}', 'PATCH', apiParams, clientConfig);
    this.management.goals.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}', 'PUT', apiParams, clientConfig);
    this.management.goals.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}', 'GET', apiParams, clientConfig);
    this.management.goals.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals', 'GET', apiParams, clientConfig);
    this.management.goals.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals', 'POST', apiParams, clientConfig);

    this.management.remarketingAudience = {};
    this.management.remarketingAudience.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}', 'PATCH', apiParams, clientConfig);
    this.management.remarketingAudience.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}', 'PUT', apiParams, clientConfig);
    this.management.remarketingAudience.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}', 'DELETE', apiParams, clientConfig);
    this.management.remarketingAudience.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}', 'GET', apiParams, clientConfig);
    this.management.remarketingAudience.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences', 'GET', apiParams, clientConfig);
    this.management.remarketingAudience.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences', 'POST', apiParams, clientConfig);

    this.management.customMetrics = {};
    this.management.customMetrics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}', 'GET', apiParams, clientConfig);
    this.management.customMetrics.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics', 'POST', apiParams, clientConfig);
    this.management.customMetrics.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}', 'PATCH', apiParams, clientConfig);
    this.management.customMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics', 'GET', apiParams, clientConfig);
    this.management.customMetrics.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}', 'PUT', apiParams, clientConfig);

    this.management.profileUserLinks = {};
    this.management.profileUserLinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}', 'PUT', apiParams, clientConfig);
    this.management.profileUserLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks', 'GET', apiParams, clientConfig);
    this.management.profileUserLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}', 'DELETE', apiParams, clientConfig);
    this.management.profileUserLinks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks', 'POST', apiParams, clientConfig);
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
