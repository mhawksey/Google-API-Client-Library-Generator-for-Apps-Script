
/**
 * Google Apps Script client library for the versionhistory.googleapis.com API
 * Documentation URL: https://developer.chrome.com/docs/web-platform/versionhistory/guide
 * @class
 */
class Versionhistory {
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
    this._rootUrl = 'https://versionhistory.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.platforms = {};

    /**
     * Returns list of platforms that are available for a given product. The resource "product" has no resource name in its name.
     * @param {integer} params.pageSize - Optional. Optional limit on the number of channels to include in the response. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListChannels` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The product, which owns this collection of platforms. Format: {product}
     * @return {object} The API response object.
     */
    this.platforms.list = (params) => this._makeRequest('v1/{+parent}/platforms', 'GET', params);

    this.platforms.channels = {};

    /**
     * Returns list of channels that are available for a given platform.
     * @param {integer} params.pageSize - Optional. Optional limit on the number of channels to include in the response. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListChannels` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The platform, which owns this collection of channels. Format: {product}/platforms/{platform}
     * @return {object} The API response object.
     */
    this.platforms.channels.list = (params) => this._makeRequest('v1/{+parent}/channels', 'GET', params);

    this.platforms.channels.versions = {};

    /**
     * Returns list of version for the given platform/channel.
     * @param {string} params.filter - Optional. Filter string. Format is a comma separated list of All comma separated filter clauses are conjoined with a logical "and". Valid field_names are "version", "name", "platform", and "channel". Valid operators are "<", "<=", "=", ">=", and ">". Channel comparison is done by distance from stable. Ex) stable < beta, beta < dev, canary < canary_asan. Version comparison is done numerically. If version is not entirely written, the version will be appended with 0 in missing fields. Ex) version > 80 becoms version > 80.0.0.0 Name and platform are filtered by string comparison. Ex) "...?filter=channel<=beta, version >= 80 Ex) "...?filter=version > 80, version < 81
     * @param {string} params.orderBy - Optional. Ordering string. Valid order_by strings are "version", "name", "platform", and "channel". Optionally, you can append " desc" or " asc" to specify the sorting order. Multiple order_by strings can be used in a comma separated list. Ordering by channel will sort by distance from the stable channel (not alphabetically). A list of channels sorted in this order is: stable, beta, dev, canary, and canary_asan. Sorting by name may cause unexpected behaviour as it is a naive string sort. For example, 1.0.0.8 will be before 1.0.0.10 in descending order. If order_by is not specified the response will be sorted by version in descending order. Ex) "...?order_by=version asc" Ex) "...?order_by=platform desc, channel, version"
     * @param {integer} params.pageSize - Optional. Optional limit on the number of versions to include in the response. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListVersions` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The channel, which owns this collection of versions. Format: {product}/platforms/{platform}/channels/{channel}
     * @return {object} The API response object.
     */
    this.platforms.channels.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);

    this.platforms.channels.versions.releases = {};

    /**
     * Returns list of releases of the given version.
     * @param {string} params.filter - Optional. Filter string. Format is a comma separated list of All comma separated filter clauses are conjoined with a logical "and". Valid field_names are "version", "name", "platform", "channel", "fraction" "starttime", and "endtime". Valid operators are "<", "<=", "=", ">=", and ">". Channel comparison is done by distance from stable. must be a valid channel when filtering by channel. Ex) stable < beta, beta < dev, canary < canary_asan. Version comparison is done numerically. Ex) 1.0.0.8 < 1.0.0.10. If version is not entirely written, the version will be appended with 0 for the missing fields. Ex) version > 80 becoms version > 80.0.0.0 When filtering by starttime or endtime, string must be in RFC 3339 date string format. Name and platform are filtered by string comparison. Ex) "...?filter=channel<=beta, version >= 80 Ex) "...?filter=version > 80, version < 81 Ex) "...?filter=starttime>2020-01-01T00:00:00Z
     * @param {string} params.orderBy - Optional. Ordering string. Valid order_by strings are "version", "name", "starttime", "endtime", "platform", "channel", and "fraction". Optionally, you can append "desc" or "asc" to specify the sorting order. Multiple order_by strings can be used in a comma separated list. Ordering by channel will sort by distance from the stable channel (not alphabetically). A list of channels sorted in this order is: stable, beta, dev, canary, and canary_asan. Sorting by name may cause unexpected behaviour as it is a naive string sort. For example, 1.0.0.8 will be before 1.0.0.10 in descending order. If order_by is not specified the response will be sorted by starttime in descending order. Ex) "...?order_by=starttime asc" Ex) "...?order_by=platform desc, channel, startime desc"
     * @param {integer} params.pageSize - Optional. Optional limit on the number of releases to include in the response. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The version, which owns this collection of releases. Format: {product}/platforms/{platform}/channels/{channel}/versions/{version}
     * @return {object} The API response object.
     */
    this.platforms.channels.versions.releases.list = (params) => this._makeRequest('v1/{+parent}/releases', 'GET', params);
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
