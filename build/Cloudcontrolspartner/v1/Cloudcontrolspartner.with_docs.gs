
/**
 * Google Apps Script client library for the Cloud Controls Partner API
 * Documentation URL: https://cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest
 * @class
 */
class Cloudcontrolspartner {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://cloudcontrolspartner.googleapis.com/';
    this._servicePath = '';


    this.organizations = {};

    this.organizations.locations = {};

    /**
     * Get details of a Partner.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Format: `organizations/{organization}/locations/{location}/partner`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.getPartner = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.locations.customers = {};

    /**
     * Gets details of a single customer
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Format: `organizations/{organization}/locations/{location}/customers/{customer}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.customers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists customers of a partner identified by its Google Cloud organization ID
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filtering results
     * @param {string} apiParams.orderBy - Optional. Hint for how to order the results
     * @param {integer} apiParams.pageSize - The maximum number of Customers to return. The service may return fewer than this value. If unspecified, at most 500 Customers will be returned.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListCustomers` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. Parent resource Format: `organizations/{organization}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.customers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customers', 'GET', apiParams, clientConfig);

    /**
     * Creates a new customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - Required. The customer id to use for the customer, which will become the final component of the customer's resource name. The specified value must be a valid Google cloud organization id.
     * @param {string} apiParams.parent - (Required) Required. Parent resource Format: `organizations/{organization}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.customers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customers', 'POST', apiParams, clientConfig);

    /**
     * Update details of a single customer
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Format: `organizations/{organization}/locations/{location}/customers/{customer}`
     * @param {string} apiParams.updateMask - Optional. The list of fields to update
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.customers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete details of a single customer
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. name of the resource to be deleted format: name=organizations/*\/locations/*\/customers/*
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.customers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.locations.customers.workloads = {};

    /**
     * Gets details of a single workload
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.customers.workloads.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists customer workloads for a given customer org id
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filtering results.
     * @param {string} apiParams.orderBy - Optional. Hint for how to order the results.
     * @param {integer} apiParams.pageSize - The maximum number of workloads to return. The service may return fewer than this value. If unspecified, at most 500 workloads will be returned.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListWorkloads` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. Parent resource Format: `organizations/{organization}/locations/{location}/customers/{customer}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.customers.workloads.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/workloads', 'GET', apiParams, clientConfig);

    /**
     * Gets the EKM connections associated with a workload
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/ekmConnections`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.customers.workloads.getEkmConnections = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Gets the partner permissions granted for a workload
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource to get in the format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/partnerPermissions`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.customers.workloads.getPartnerPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.locations.customers.workloads.accessApprovalRequests = {};

    /**
     * Deprecated: Only returns access approval requests directly associated with an assured workload folder.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filtering results.
     * @param {string} apiParams.orderBy - Optional. Hint for how to order the results.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of access requests to return. The service may return fewer than this value. If unspecified, at most 500 access requests will be returned.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListAccessApprovalRequests` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. Parent resource Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.customers.workloads.accessApprovalRequests.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/accessApprovalRequests', 'GET', apiParams, clientConfig);

    this.organizations.locations.customers.workloads.violations = {};

    /**
     * Lists Violations for a workload Callers may also choose to read across multiple Customers or for a single customer as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of {customer} & {workload}. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filtering results
     * @param {string} apiParams.interval.endTime - Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     * @param {string} apiParams.interval.startTime - Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     * @param {string} apiParams.orderBy - Optional. Hint for how to order the results
     * @param {integer} apiParams.pageSize - Optional. The maximum number of customers row to return. The service may return fewer than this value. If unspecified, at most 10 customers will be returned.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListViolations` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. Parent resource Format `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.customers.workloads.violations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/violations', 'GET', apiParams, clientConfig);

    /**
     * Gets details of a single Violation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/violations/{violation}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.customers.workloads.violations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
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
