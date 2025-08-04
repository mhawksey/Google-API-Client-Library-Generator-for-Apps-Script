
/**
 * Google Apps Script client library for the Google Play Developer Reporting API
 * Documentation URL: https://developers.google.com/play/developer/reporting
 * @class
 */
class Playdeveloperreporting {
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
    this._rootUrl = 'https://playdeveloperreporting.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.anomalies = {};

    /**
     * Lists anomalies in any of the datasets.
     * @param {string} params.filter - Filtering criteria for anomalies. For basic filter guidance, please check: https://google.aip.dev/160. **Supported functions:** * `activeBetween(startTime, endTime)`: If specified, only list anomalies that were active in between `startTime` (inclusive) and `endTime` (exclusive). Both parameters are expected to conform to an RFC-3339 formatted string (e.g. `2012-04-21T11:30:00-04:00`). UTC offsets are supported. Both `startTime` and `endTime` accept the special value `UNBOUNDED`, to signify intervals with no lower or upper bound, respectively. Examples: * `activeBetween("2021-04-21T11:30:00Z", "2021-07-21T00:00:00Z")` * `activeBetween(UNBOUNDED, "2021-11-21T00:00:00-04:00")` * `activeBetween("2021-07-21T00:00:00-04:00", UNBOUNDED)`
     * @param {integer} params.pageSize - Maximum size of the returned data. If unspecified, at most 10 anomalies will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - A page token, received from a previous `ListErrorReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListErrorReports` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Parent app for which anomalies were detected. Format: apps/{app}
     * @return {object} The API response object.
     */
    this.anomalies.list = (params) => this._makeRequest('v1beta1/{+parent}/anomalies', 'GET', params);

    this.vitals = {};

    this.vitals.crashrate = {};

    /**
     * Describes the properties of the metric set.
     * @param {string} params.name - (Required) Required. The resource name. Format: apps/{app}/crashRateMetricSet
     * @return {object} The API response object.
     */
    this.vitals.crashrate.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Queries the metrics in the metric set.
     * @param {string} params.name - (Required) Required. The resource name. Format: apps/{app}/crashRateMetricSet
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.vitals.crashrate.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.vitals.anrrate = {};

    /**
     * Describes the properties of the metric set.
     * @param {string} params.name - (Required) Required. The resource name. Format: apps/{app}/anrRateMetricSet
     * @return {object} The API response object.
     */
    this.vitals.anrrate.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Queries the metrics in the metric set.
     * @param {string} params.name - (Required) Required. The resource name. Format: apps/{app}/anrRateMetricSet
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.vitals.anrrate.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.vitals.lmkrate = {};

    /**
     * Describes the properties of the metric set.
     * @param {string} params.name - (Required) Required. The resource name. Format: apps/{app}/lmkRateMetricSet
     * @return {object} The API response object.
     */
    this.vitals.lmkrate.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Queries the metrics in the metric set.
     * @param {string} params.name - (Required) Required. The resource name. Format: apps/{app}/lmkRateMetricSet
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.vitals.lmkrate.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.vitals.excessivewakeuprate = {};

    /**
     * Describes the properties of the metric set.
     * @param {string} params.name - (Required) Required. The resource name. Format: apps/{app}/excessiveWakeupRateMetricSet
     * @return {object} The API response object.
     */
    this.vitals.excessivewakeuprate.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Queries the metrics in the metric set.
     * @param {string} params.name - (Required) Required. The resource name. Format: apps/{app}/excessiveWakeupRateMetricSet
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.vitals.excessivewakeuprate.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.vitals.stuckbackgroundwakelockrate = {};

    /**
     * Describes the properties of the metric set.
     * @param {string} params.name - (Required) Required. The resource name. Format: apps/{app}/stuckBackgroundWakelockRateMetricSet
     * @return {object} The API response object.
     */
    this.vitals.stuckbackgroundwakelockrate.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Queries the metrics in the metric set.
     * @param {string} params.name - (Required) Required. The resource name. Format: apps/{app}/stuckBackgroundWakelockRateMetricSet
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.vitals.stuckbackgroundwakelockrate.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.vitals.slowstartrate = {};

    /**
     * Describes the properties of the metric set.
     * @param {string} params.name - (Required) Required. The resource name. Format: apps/{app}/slowStartRateMetricSet
     * @return {object} The API response object.
     */
    this.vitals.slowstartrate.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Queries the metrics in the metric set.
     * @param {string} params.name - (Required) Required. The resource name. Format: apps/{app}/slowStartRateMetricSet
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.vitals.slowstartrate.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.vitals.slowrenderingrate = {};

    /**
     * Describes the properties of the metric set.
     * @param {string} params.name - (Required) Required. The resource name. Format: apps/{app}/slowRenderingRateMetricSet
     * @return {object} The API response object.
     */
    this.vitals.slowrenderingrate.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Queries the metrics in the metric set.
     * @param {string} params.name - (Required) Required. The resource name. Format: apps/{app}/slowRenderingRateMetricSet
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.vitals.slowrenderingrate.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.vitals.errors = {};

    this.vitals.errors.reports = {};

    /**
     * Searches all error reports received for an app.
     * @param {string} params.filter - A selection predicate to retrieve only a subset of the reports. For filtering basics, please check [AIP-160](https://google.aip.dev/160). ** Supported field names:** * `apiLevel`: Matches error reports that occurred in the requested Android versions (specified as the numeric API level) only. Example: `apiLevel = 28 OR apiLevel = 29`. * `versionCode`: Matches error reports that occurred in the requested app version codes only. Example: `versionCode = 123 OR versionCode = 456`. * `deviceModel`: Matches error issues that occurred in the requested devices. Example: `deviceModel = "google/walleye" OR deviceModel = "google/marlin"`. * `deviceBrand`: Matches error issues that occurred in the requested device brands. Example: `deviceBrand = "Google". * `deviceType`: Matches error reports that occurred in the requested device types. Example: `deviceType = "PHONE"`. * `errorIssueType`: Matches error reports of the requested types only. Valid candidates: `CRASH`, `ANR`, `NON_FATAL`. Example: `errorIssueType = CRASH OR errorIssueType = ANR`. * `errorIssueId`: Matches error reports belonging to the requested error issue ids only. Example: `errorIssueId = 1234 OR errorIssueId = 4567`. * `errorReportId`: Matches error reports with the requested error report id. Example: `errorReportId = 1234 OR errorReportId = 4567`. * `appProcessState`: Matches error reports on the process state of an app, indicating whether an app runs in the foreground (user-visible) or background. Valid candidates: `FOREGROUND`, `BACKGROUND`. Example: `appProcessState = FOREGROUND`. * `isUserPerceived`: Matches error reports that are user-perceived. It is not accompanied by any operators. Example: `isUserPerceived`. ** Supported operators:** * Comparison operators: The only supported comparison operator is equality. The filtered field must appear on the left hand side of the comparison. * Logical Operators: Logical operators `AND` and `OR` can be used to build complex filters following a conjunctive normal form (CNF), i.e., conjunctions of disjunctions. The `OR` operator takes precedence over `AND` so the use of parenthesis is not necessary when building CNF. The `OR` operator is only supported to build disjunctions that apply to the same field, e.g., `versionCode = 123 OR versionCode = ANR`. The filter expression `versionCode = 123 OR errorIssueType = ANR` is not valid. ** Examples ** Some valid filtering expressions: * `versionCode = 123 AND errorIssueType = ANR` * `versionCode = 123 AND errorIssueType = OR errorIssueType = CRASH` * `versionCode = 123 AND (errorIssueType = OR errorIssueType = CRASH)`
     * @param {integer} params.interval.endTime.day - Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     * @param {integer} params.interval.endTime.hours - Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     * @param {integer} params.interval.endTime.minutes - Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     * @param {integer} params.interval.endTime.month - Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     * @param {integer} params.interval.endTime.nanos - Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     * @param {integer} params.interval.endTime.seconds - Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     * @param {string} params.interval.endTime.timeZone.id - IANA Time Zone Database time zone. For example "America/New_York".
     * @param {string} params.interval.endTime.timeZone.version - Optional. IANA Time Zone Database version number. For example "2019a".
     * @param {string} params.interval.endTime.utcOffset - UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.
     * @param {integer} params.interval.endTime.year - Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     * @param {integer} params.interval.startTime.day - Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     * @param {integer} params.interval.startTime.hours - Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     * @param {integer} params.interval.startTime.minutes - Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     * @param {integer} params.interval.startTime.month - Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     * @param {integer} params.interval.startTime.nanos - Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     * @param {integer} params.interval.startTime.seconds - Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     * @param {string} params.interval.startTime.timeZone.id - IANA Time Zone Database time zone. For example "America/New_York".
     * @param {string} params.interval.startTime.timeZone.version - Optional. IANA Time Zone Database version number. For example "2019a".
     * @param {string} params.interval.startTime.utcOffset - UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.
     * @param {integer} params.interval.startTime.year - Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     * @param {integer} params.pageSize - The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 50 reports will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - A page token, received from a previous `SearchErrorReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchErrorReports` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Parent resource of the reports, indicating the application for which they were received. Format: apps/{app}
     * @return {object} The API response object.
     */
    this.vitals.errors.reports.search = (params) => this._makeRequest('v1beta1/{+parent}/errorReports:search', 'GET', params);

    this.vitals.errors.issues = {};

    /**
     * Searches all error issues in which reports have been grouped.
     * @param {string} params.filter - A selection predicate to retrieve only a subset of the issues. Counts in the returned error issues will only reflect occurrences that matched the filter. For filtering basics, please check [AIP-160](https://google.aip.dev/160). ** Supported field names:** * `apiLevel`: Matches error issues that occurred in the requested Android versions (specified as the numeric API level) only. Example: `apiLevel = 28 OR apiLevel = 29`. * `versionCode`: Matches error issues that occurred in the requested app version codes only. Example: `versionCode = 123 OR versionCode = 456`. * `deviceModel`: Matches error issues that occurred in the requested devices. Example: `deviceModel = "google/walleye" OR deviceModel = "google/marlin"`. * `deviceBrand`: Matches error issues that occurred in the requested device brands. Example: `deviceBrand = "Google". * `deviceType`: Matches error issues that occurred in the requested device types. Example: `deviceType = "PHONE"`. * `errorIssueType`: Matches error issues of the requested types only. Valid candidates: `CRASH`, `ANR`, `NON_FATAL`. Example: `errorIssueType = CRASH OR errorIssueType = ANR`. * `appProcessState`: Matches error issues on the process state of an app, indicating whether an app runs in the foreground (user-visible) or background. Valid candidates: `FOREGROUND`, `BACKGROUND`. Example: `appProcessState = FOREGROUND`. * `isUserPerceived`: Matches error issues that are user-perceived. It is not accompanied by any operators. Example: `isUserPerceived`. ** Supported operators:** * Comparison operators: The only supported comparison operator is equality. The filtered field must appear on the left hand side of the comparison. * Logical Operators: Logical operators `AND` and `OR` can be used to build complex filters following a conjunctive normal form (CNF), i.e., conjunctions of disjunctions. The `OR` operator takes precedence over `AND` so the use of parenthesis is not necessary when building CNF. The `OR` operator is only supported to build disjunctions that apply to the same field, e.g., `versionCode = 123 OR errorIssueType = ANR` is not a valid filter. ** Examples ** Some valid filtering expressions: * `versionCode = 123 AND errorIssueType = ANR` * `versionCode = 123 AND errorIssueType = OR errorIssueType = CRASH` * `versionCode = 123 AND (errorIssueType = OR errorIssueType = CRASH)`
     * @param {integer} params.interval.endTime.day - Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     * @param {integer} params.interval.endTime.hours - Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     * @param {integer} params.interval.endTime.minutes - Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     * @param {integer} params.interval.endTime.month - Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     * @param {integer} params.interval.endTime.nanos - Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     * @param {integer} params.interval.endTime.seconds - Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     * @param {string} params.interval.endTime.timeZone.id - IANA Time Zone Database time zone. For example "America/New_York".
     * @param {string} params.interval.endTime.timeZone.version - Optional. IANA Time Zone Database version number. For example "2019a".
     * @param {string} params.interval.endTime.utcOffset - UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.
     * @param {integer} params.interval.endTime.year - Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     * @param {integer} params.interval.startTime.day - Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     * @param {integer} params.interval.startTime.hours - Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     * @param {integer} params.interval.startTime.minutes - Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     * @param {integer} params.interval.startTime.month - Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     * @param {integer} params.interval.startTime.nanos - Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     * @param {integer} params.interval.startTime.seconds - Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     * @param {string} params.interval.startTime.timeZone.id - IANA Time Zone Database time zone. For example "America/New_York".
     * @param {string} params.interval.startTime.timeZone.version - Optional. IANA Time Zone Database version number. For example "2019a".
     * @param {string} params.interval.startTime.utcOffset - UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.
     * @param {integer} params.interval.startTime.year - Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     * @param {string} params.orderBy - Specifies a field that will be used to order the results. ** Supported dimensions:** * `errorReportCount`: Orders issues by number of error reports. * `distinctUsers`: Orders issues by number of unique affected users. ** Supported operations:** * `asc` for ascending order. * `desc` for descending order. Format: A field and an operation, e.g., `errorReportCount desc` *Note:* currently only one field is supported at a time.
     * @param {integer} params.pageSize - The maximum number of error issues to return. The service may return fewer than this value. If unspecified, at most 50 error issues will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Parent resource of the error issues, indicating the application for which they were received. Format: apps/{app}
     * @param {integer} params.sampleErrorReportLimit - Optional. Number of sample error reports to return per ErrorIssue. If unspecified, 0 will be used. *Note:* currently only 0 and 1 are supported.
     * @return {object} The API response object.
     */
    this.vitals.errors.issues.search = (params) => this._makeRequest('v1beta1/{+parent}/errorIssues:search', 'GET', params);

    this.vitals.errors.counts = {};

    /**
     * Describes the properties of the metrics set.
     * @param {string} params.name - (Required) Required. Name of the errors metric set. Format: apps/{app}/errorCountMetricSet
     * @return {object} The API response object.
     */
    this.vitals.errors.counts.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Queries the metrics in the metrics set.
     * @param {string} params.name - (Required) Required. The resource name. Format: apps/{app}/errorCountMetricSet
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.vitals.errors.counts.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.apps = {};

    /**
     * Describes filtering options for releases.
     * @param {string} params.name - (Required) Required. Name of the resource, i.e. app the filtering options are for. Format: apps/{app}
     * @return {object} The API response object.
     */
    this.apps.fetchReleaseFilterOptions = (params) => this._makeRequest('v1beta1/{+name}:fetchReleaseFilterOptions', 'GET', params);

    /**
     * Searches for Apps accessible by the user.
     * @param {integer} params.pageSize - The maximum number of apps to return. The service may return fewer than this value. If unspecified, at most 50 apps will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `SearchAccessibleApps` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchAccessibleApps` must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.apps.search = (params) => this._makeRequest('v1beta1/apps:search', 'GET', params);
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
