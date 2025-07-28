
/**
 * Google Apps Script client library for the Firebase Rules API
 * Documentation URL: https://firebase.google.com/docs/storage/security
 * @class
 */
class Firebaserules {
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
    this._rootUrl = 'https://firebaserules.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Test `Source` for syntactic and semantic correctness. Issues present, if any, will be returned to the caller with a description, severity, and source location. The test method may be executed with `Source` or a `Ruleset` name. Passing `Source` is useful for unit testing new rules. Passing a `Ruleset` name is useful for regression testing an existing rule. The following is an example of `Source` that permits users to upload images to a bucket bearing their user id and matching the correct metadata: _*Example*_ // Users are allowed to subscribe and unsubscribe to the blog. service firebase.storage { match /users/{userId}/images/{imageName} { allow write: if userId == request.auth.uid && (imageName.matches('*.png$') || imageName.matches('*.jpg$')) && resource.mimeType.matches('^image/') } }
     * @param {string} params.name - (Required) Required. Tests may either provide `source` or a `Ruleset` resource name. For tests against `source`, the resource name must refer to the project: Format: `projects/{project_id}` For tests against a `Ruleset`, this must be the `Ruleset` resource name: Format: `projects/{project_id}/rulesets/{ruleset_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.test = (params) => this._makeRequest('v1/{+name}:test', 'POST', params);

    this.projects.rulesets = {};

    /**
     * Create a `Ruleset` from `Source`. The `Ruleset` is given a unique generated name which is returned to the caller. `Source` containing syntactic or semantics errors will result in an error response indicating the first error encountered. For a detailed view of `Source` issues, use TestRuleset.
     * @param {string} params.name - (Required) Required. Resource name for Project which owns this `Ruleset`. Format: `projects/{project_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.rulesets.create = (params) => this._makeRequest('v1/{+name}/rulesets', 'POST', params);

    /**
     * Get a `Ruleset` by name including the full `Source` contents.
     * @param {string} params.name - (Required) Required. Resource name for the ruleset to get. Format: `projects/{project_id}/rulesets/{ruleset_id}`
     * @return {object} The API response object.
     */
    this.projects.rulesets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List `Ruleset` metadata only and optionally filter the results by `Ruleset` name. The full `Source` contents of a `Ruleset` may be retrieved with GetRuleset.
     * @param {string} params.filter - Optional. `Ruleset` filter. The list method supports filters with restrictions on `Ruleset.name`. Filters on `Ruleset.create_time` should use the `date` function which parses strings that conform to the RFC 3339 date/time specifications. Example: `create_time > date("2017-01-01T00:00:00Z") AND name=UUID-*`
     * @param {string} params.name - (Required) Required. Resource name for the project. Format: `projects/{project_id}`
     * @param {integer} params.pageSize - Optional. Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load less than `page_size` due to the size of the output. To traverse all of the releases, caller should iterate until the `page_token` is empty.
     * @param {string} params.pageToken - Optional. Next page token for loading the next batch of `Ruleset` instances.
     * @return {object} The API response object.
     */
    this.projects.rulesets.list = (params) => this._makeRequest('v1/{+name}/rulesets', 'GET', params);

    /**
     * Delete a `Ruleset` by resource name. If the `Ruleset` is referenced by a `Release` the operation will fail.
     * @param {string} params.name - (Required) Required. Resource name for the ruleset to delete. Format: `projects/{project_id}/rulesets/{ruleset_id}`
     * @return {object} The API response object.
     */
    this.projects.rulesets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.releases = {};

    /**
     * Create a `Release`. Release names should reflect the developer's deployment practices. For example, the release name may include the environment name, application name, application version, or any other name meaningful to the developer. Once a `Release` refers to a `Ruleset`, the rules can be enforced by Firebase Rules-enabled services. More than one `Release` may be 'live' concurrently. Consider the following three `Release` names for `projects/foo` and the `Ruleset` to which they refer. Release Name -> Ruleset Name * projects/foo/releases/prod -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/beta -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/v23 -> projects/foo/rulesets/uuid456 The relationships reflect a `Ruleset` rollout in progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be updated using the UpdateRelease method.
     * @param {string} params.name - (Required) Required. Resource name for the project which owns this `Release`. Format: `projects/{project_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.releases.create = (params) => this._makeRequest('v1/{+name}/releases', 'POST', params);

    /**
     * Update a `Release` via PATCH. Only updates to `ruleset_name` will be honored. `Release` rename is not supported. To create a `Release` use the CreateRelease method.
     * @param {string} params.name - (Required) Required. Resource name for the project which owns this `Release`. Format: `projects/{project_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.releases.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Get a `Release` by name.
     * @param {string} params.name - (Required) Required. Resource name of the `Release`. Format: `projects/{project_id}/releases/{release_id}`
     * @return {object} The API response object.
     */
    this.projects.releases.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List the `Release` values for a project. This list may optionally be filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any combination thereof.
     * @param {string} params.filter - Optional. `Release` filter. The list method supports filters with restrictions on the `Release.name`, and `Release.ruleset_name`. Example 1: A filter of 'name=prod*' might return `Release`s with names within 'projects/foo' prefixed with 'prod': Name -> Ruleset Name: * projects/foo/releases/prod -> projects/foo/rulesets/uuid1234 * projects/foo/releases/prod/v1 -> projects/foo/rulesets/uuid1234 * projects/foo/releases/prod/v2 -> projects/foo/rulesets/uuid8888 Example 2: A filter of `name=prod* ruleset_name=uuid1234` would return only `Release` instances for 'projects/foo' with names prefixed with 'prod' referring to the same `Ruleset` name of 'uuid1234': Name -> Ruleset Name: * projects/foo/releases/prod -> projects/foo/rulesets/1234 * projects/foo/releases/prod/v1 -> projects/foo/rulesets/1234 In the examples, the filter parameters refer to the search filters are relative to the project. Fully qualified prefixed may also be used.
     * @param {string} params.name - (Required) Required. Resource name for the project. Format: `projects/{project_id}`
     * @param {integer} params.pageSize - Optional. Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load fewer than `page_size` results due to the size of the output. To traverse all of the releases, the caller should iterate until the `page_token` on the response is empty.
     * @param {string} params.pageToken - Optional. Next page token for the next batch of `Release` instances.
     * @return {object} The API response object.
     */
    this.projects.releases.list = (params) => this._makeRequest('v1/{+name}/releases', 'GET', params);

    /**
     * Delete a `Release` by resource name.
     * @param {string} params.name - (Required) Required. Resource name for the `Release` to delete. Format: `projects/{project_id}/releases/{release_id}`
     * @return {object} The API response object.
     */
    this.projects.releases.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Get the `Release` executable to use when enforcing rules.
     * @param {string} params.executableVersion - Optional. The requested runtime executable version. Defaults to FIREBASE_RULES_EXECUTABLE_V1.
     * @param {string} params.name - (Required) Required. Resource name of the `Release`. Format: `projects/{project_id}/releases/{release_id}`
     * @return {object} The API response object.
     */
    this.projects.releases.getExecutable = (params) => this._makeRequest('v1/{+name}:getExecutable', 'GET', params);
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
