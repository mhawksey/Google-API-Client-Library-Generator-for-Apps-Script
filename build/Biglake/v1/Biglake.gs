
/**
 * Google Apps Script client library for the BigLake API
 * Documentation URL: https://cloud.google.com/bigquery/
 * @class
 */
class Biglake {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://biglake.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.catalogs = {};

    /**
     * Creates a new catalog.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.catalogId - Required. The ID to use for the catalog, which will become the final component of the catalog's resource name.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this catalog will be created. Format: projects/{project_id_or_number}/locations/{location_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.catalogs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/catalogs', 'POST', apiParams, clientConfig);

    /**
     * Deletes an existing catalog specified by the catalog ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the catalog to delete. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.catalogs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets the catalog specified by the resource name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the catalog to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.catalogs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List all catalogs in a specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of catalogs to return. The service may return fewer than this value. If unspecified, at most 50 catalogs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListCatalogs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCatalogs` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of catalogs. Format: projects/{project_id_or_number}/locations/{location_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.catalogs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/catalogs', 'GET', apiParams, clientConfig);

    this.projects.locations.catalogs.databases = {};

    /**
     * Creates a new database.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.databaseId - Required. The ID to use for the database, which will become the final component of the database's resource name.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this database will be created. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.catalogs.databases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/databases', 'POST', apiParams, clientConfig);

    /**
     * Deletes an existing database specified by the database ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the database to delete. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.catalogs.databases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates an existing database specified by the database ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}
     * @param {string} apiParams.updateMask - The list of fields to update. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.catalogs.databases.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Gets the database specified by the resource name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the database to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.catalogs.databases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List all databases in a specified catalog.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of databases to return. The service may return fewer than this value. If unspecified, at most 50 databases will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListDatabases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDatabases` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of databases. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.catalogs.databases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/databases', 'GET', apiParams, clientConfig);

    this.projects.locations.catalogs.databases.tables = {};

    /**
     * Creates a new table.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this table will be created. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}
     * @param {string} apiParams.tableId - Required. The ID to use for the table, which will become the final component of the table's resource name.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.catalogs.databases.tables.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/tables', 'POST', apiParams, clientConfig);

    /**
     * Deletes an existing table specified by the table ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the table to delete. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.catalogs.databases.tables.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates an existing table specified by the table ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id}
     * @param {string} apiParams.updateMask - The list of fields to update. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.catalogs.databases.tables.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Renames an existing table specified by the table ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The table's `name` field is used to identify the table to rename. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.catalogs.databases.tables.rename = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:rename', 'POST', apiParams, clientConfig);

    /**
     * Gets the table specified by the resource name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the table to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.catalogs.databases.tables.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List all tables in a specified database.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of tables to return. The service may return fewer than this value. If unspecified, at most 50 tables will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListTables` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTables` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of tables. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}
     * @param {string} apiParams.view - The view for the returned tables.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.catalogs.databases.tables.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/tables', 'GET', apiParams, clientConfig);
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
