
/**
 * Google Apps Script client library for the Threat Intelligence API
 * Documentation URL: https://docs.cloud.google.com/threatintelligence/
 * @class
 */
class Threatintelligence {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://threatintelligence.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    /**
     * Triggers the generation of a Customer Profile for a project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the project to generate the profile for. Format: projects/{project}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.generateOrgProfile = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:generateOrgProfile', 'POST', apiParams, clientConfig);

    this.projects.configurations = {};

    /**
     * Get a configuration by name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the configuration to get. Format: vaults/{vault}/configurations/{configuration}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.configurations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Get a list of configurations that meet the filter criteria.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter criteria.
     * @param {string} apiParams.orderBy - Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2".
     * @param {integer} apiParams.pageSize - Optional. Page size.
     * @param {string} apiParams.pageToken - Optional. Page token.
     * @param {string} apiParams.parent - (Required) Required. Parent of the configuration. Format: vaults/{vault}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.configurations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/configurations', 'GET', apiParams, clientConfig);

    /**
     * Creates or updates a configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Parent of the configuration.
     * @param {string} apiParams.publishTime - Optional. Time that the configuration should be considered to have been published. This is an advanced feature used when onboarding and bulk loading data from other systems. Do not set this field without consulting with the API team.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.configurations.upsert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/configurations:upsert', 'POST', apiParams, clientConfig);

    this.projects.configurations.revisions = {};

    /**
     * List configuration revisions that meet the filter criteria.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An AIP-160 filter string
     * @param {string} apiParams.orderBy - Optional. Specify ordering of response
     * @param {integer} apiParams.pageSize - Optional. Page Size
     * @param {string} apiParams.pageToken - Optional. A page token provided by the API
     * @param {string} apiParams.parent - (Required) Required. The name of the Configuration to retrieve Revisions for
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.configurations.revisions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/revisions', 'GET', apiParams, clientConfig);

    this.projects.findings = {};

    /**
     * Get a finding by name. The `name` field should have the format: `projects/{project}/findings/{finding}`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the finding to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.findings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Get a list of findings that meet the filter criteria. The `parent` field in ListFindingsRequest should have the format: projects/{project}
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter criteria.
     * @param {string} apiParams.orderBy - Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2".
     * @param {integer} apiParams.pageSize - Optional. Page size.
     * @param {string} apiParams.pageToken - Optional. Page token.
     * @param {string} apiParams.parent - (Required) Required. Parent of the findings.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.findings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/findings', 'GET', apiParams, clientConfig);

    /**
     * SearchFindings is a more powerful version of ListFindings that supports complex queries like "findings for alerts" using functions such as `has_alert` in the query string. The `parent` field in SearchFindingsRequest should have the format: projects/{project} Example to search for findings for a specific issue: `has_alert("name=\"projects/gti-12345/alerts/alert-12345\"")`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.orderBy - Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2".
     * @param {integer} apiParams.pageSize - Optional. Page size.
     * @param {string} apiParams.pageToken - Optional. Page token.
     * @param {string} apiParams.parent - (Required) Required. Parent of the findings. Format: vaults/{vault}
     * @param {string} apiParams.query - Optional. Query on what findings will be returned. This supports the same filter criteria as FindingService.ListFindings as well as the following relationship query `has_alert`. Example: - `has_alert("name=\"projects/gti-12345/alerts/alert-12345\"")`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.findings.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/findings:search', 'GET', apiParams, clientConfig);

    this.projects.alerts = {};

    /**
     * Get an alert by name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the alert to get. Format: projects/{project}/alerts/{alert}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.alerts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Get a list of alerts that meet the filter criteria.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter criteria.
     * @param {string} apiParams.orderBy - Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2".
     * @param {integer} apiParams.pageSize - Optional. Page size.
     * @param {string} apiParams.pageToken - Optional. Page token.
     * @param {string} apiParams.parent - (Required) Required. Parent of the alerts. Format: projects/{project}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.alerts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/alerts', 'GET', apiParams, clientConfig);

    /**
     * EnumerateAlertFacets returns the facets and the number of alerts that meet the filter criteria and have that value for each facet.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter on what alerts will be enumerated.
     * @param {string} apiParams.parent - (Required) Required. Parent of the alerts.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.alerts.enumerateFacets = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/alerts:enumerateFacets', 'GET', apiParams, clientConfig);

    /**
     * Marks an alert as read - READ.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the alert to mark as read. Format: projects/{project}/alerts/{alert}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.alerts.read = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:read', 'POST', apiParams, clientConfig);

    /**
     * Marks an alert as triaged - TRIAGED.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the alert to mark as a triaged. Format: projects/{project}/alerts/{alert}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.alerts.triage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:triage', 'POST', apiParams, clientConfig);

    /**
     * Marks an alert as escalated - ESCALATED.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the alert to mark as escalated. Format: projects/{project}/alerts/{alert}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.alerts.escalate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:escalate', 'POST', apiParams, clientConfig);

    /**
     * Marks an alert to closed state - RESOLVED.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the alert to mark as resolved. Format: projects/{project}/alerts/{alert}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.alerts.resolve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:resolve', 'POST', apiParams, clientConfig);

    /**
     * Marks an alert as a false positive - FALSE_POSITIVE.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the alert to mark as a false positive. Format: projects/{project}/alerts/{alert}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.alerts.falsePositive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:falsePositive', 'POST', apiParams, clientConfig);

    /**
     * Marks an alert as not actionable - NOT_ACTIONABLE.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the alert to mark as a not actionable. Format: projects/{project}/alerts/{alert}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.alerts.notActionable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:notActionable', 'POST', apiParams, clientConfig);

    /**
     * Marks an alert as benign - BENIGN.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the alert to mark as a benign. Format: projects/{project}/alerts/{alert}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.alerts.benign = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:benign', 'POST', apiParams, clientConfig);

    /**
     * Marks an alert as tracked externally - TRACKED_EXTERNALLY.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the alert to mark as tracked externally. Format: projects/{project}/alerts/{alert}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.alerts.trackExternally = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:trackExternally', 'POST', apiParams, clientConfig);

    /**
     * Marks an alert as a duplicate of another alert. - DUPLICATE.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the alert to mark as a duplicate. Format: projects/{project}/alerts/{alert}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.alerts.duplicate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:duplicate', 'POST', apiParams, clientConfig);

    this.projects.alerts.documents = {};

    /**
     * Gets a specific document associated with an alert.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the alert document to get. Format: projects/{project}/alerts/{alert}/documents/{document}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.alerts.documents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
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
