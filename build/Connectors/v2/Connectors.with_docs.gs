
/**
 * Google Apps Script client library for the Connectors API
 * Documentation URL: https://cloud.google.com/apigee/docs/api-platform/connectors/about-connectors
 * @class
 */
class Connectors {
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
    this._rootUrl = 'https://connectors.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.connections = {};

    /**
     * Reports the status of the connection. Note that when the connection is in a state that is not ACTIVE, the implementation of this RPC method must return a Status with the corresponding State instead of returning a gRPC status code that is not "OK", which indicates that ConnectionStatus itself, not the connection, failed.
     * @param {string} params.name - (Required)
     * @return {object} The API response object.
     */
    this.projects.locations.connections.checkStatus = (params) => this._makeRequest('v2/{+name}:checkStatus', 'GET', params);

    /**
     * Reports readiness status of the connector. Similar logic to GetStatus but modified for kubernetes health check to understand.
     * @param {string} params.name - (Required)
     * @return {object} The API response object.
     */
    this.projects.locations.connections.checkReadiness = (params) => this._makeRequest('v2/{+name}:checkReadiness', 'GET', params);

    /**
     * ExchangeAuthCode exchanges the OAuth authorization code (and other necessary data) for an access token (and associated credentials).
     * @param {string} params.name - (Required)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.exchangeAuthCode = (params) => this._makeRequest('v2/{+name}:exchangeAuthCode', 'POST', params);

    /**
     * RefreshAccessToken exchanges the OAuth refresh token (and other necessary data) for a new access token (and new associated credentials).
     * @param {string} params.name - (Required)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.refreshAccessToken = (params) => this._makeRequest('v2/{+name}:refreshAccessToken', 'POST', params);

    /**
     * Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.
     * @param {string} params.connection - (Required) Required. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.executeSqlQuery = (params) => this._makeRequest('v2/{+connection}:executeSqlQuery', 'POST', params);

    this.projects.locations.connections.actions = {};

    /**
     * Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.
     * @param {string} params.name - (Required) Required. Resource name of the Action. Format: projects/{project}/locations/{location}/connections/{connection}/actions/{action}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.actions.execute = (params) => this._makeRequest('v2/{+name}:execute', 'POST', params);

    /**
     * Gets the schema of all the actions supported by the connector.
     * @param {integer} params.pageSize - Number of Actions to return. Defaults to 25.
     * @param {string} params.pageToken - Page token, return from a previous ListActions call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of actions.
     * @param {string} params.parent - (Required) Required. Parent resource name of the Action. Format: projects/{project}/locations/{location}/connections/{connection}
     * @param {string} params.view - Specifies which fields of the Action are returned in the response.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.actions.list = (params) => this._makeRequest('v2/{+parent}/actions', 'GET', params);

    /**
     * Gets the schema of the given action.
     * @param {string} params.name - (Required) Required. Resource name of the Action. Format: projects/{project}/locations/{location}/connections/{connection}/actions/{action}
     * @param {string} params.view - Specified view of the action schema.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.actions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.connections.entityTypes = {};

    /**
     * Gets metadata of given entity type
     * @param {string} params.name - (Required) Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{entityType}
     * @param {string} params.view - Specifies view for entity type schema.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.entityTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists metadata related to all entity types present in the external system.
     * @param {integer} params.pageSize - Number of entity types to return. Defaults to 25.
     * @param {string} params.pageToken - Page token, return from a previous ListEntityTypes call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of entity types.
     * @param {string} params.parent - (Required) Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}
     * @param {string} params.view - Specifies which fields of the Entity Type are returned in the response.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.entityTypes.list = (params) => this._makeRequest('v2/{+parent}/entityTypes', 'GET', params);

    this.projects.locations.connections.entityTypes.entities = {};

    /**
     * Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.
     * @param {string} params.conditions - Conditions to be used when listing entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported.
     * @param {integer} params.pageSize - Number of entity rows to return. Defaults page size = 25. Max page size = 200.
     * @param {string} params.pageToken - Page token value if available from a previous request.
     * @param {string} params.parent - (Required) Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}
     * @param {string} params.sortBy - List of 'sort_by' columns to use when returning the results.
     * @param {string} params.sortOrder - List of 'sort_order' columns to use when returning the results.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.entityTypes.entities.list = (params) => this._makeRequest('v2/{+parent}/entities', 'GET', params);

    /**
     * Gets a single entity row matching the entity type and entity id specified in the request.
     * @param {string} params.name - (Required) Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id}
     * @return {object} The API response object.
     */
    this.projects.locations.connections.entityTypes.entities.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.
     * @param {string} params.parent - (Required) Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.entityTypes.entities.create = (params) => this._makeRequest('v2/{+parent}/entities', 'POST', params);

    /**
     * Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.
     * @param {string} params.name - (Required) Output only. Resource name of the Entity. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.entityTypes.entities.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Updates entities based on conditions specified in the request and not on entity id.
     * @param {string} params.conditions - Required. Conditions to be used when updating entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be.
     * @param {string} params.entityType - (Required) Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.entityTypes.entities.updateEntitiesWithConditions = (params) => this._makeRequest('v2/{+entityType}/entities:updateEntitiesWithConditions', 'POST', params);

    /**
     * Deletes an existing entity row matching the entity type and entity id specified in the request.
     * @param {string} params.name - (Required) Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id}
     * @return {object} The API response object.
     */
    this.projects.locations.connections.entityTypes.entities.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Deletes entities based on conditions specified in the request and not on entity id.
     * @param {string} params.conditions - Required. Conditions to be used when deleting entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be.
     * @param {string} params.entityType - (Required) Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}
     * @return {object} The API response object.
     */
    this.projects.locations.connections.entityTypes.entities.deleteEntitiesWithConditions = (params) => this._makeRequest('v2/{+entityType}/entities:deleteEntitiesWithConditions', 'POST', params);
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
        url = url.replace(placeholder, remainingParams[paramName]);
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
