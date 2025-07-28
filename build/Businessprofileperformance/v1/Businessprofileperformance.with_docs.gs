
/**
 * Google Apps Script client library for the Business Profile Performance API
 * Documentation URL: https://developers.google.com/my-business/
 * @class
 */
class Businessprofileperformance {
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
    this._rootUrl = 'https://businessprofileperformance.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.locations = {};

    /**
     * Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
     * @param {string} params.dailyMetric - Required. The metric to retrieve time series.
     * @param {integer} params.dailyRange.endDate.day - Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     * @param {integer} params.dailyRange.endDate.month - Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     * @param {integer} params.dailyRange.endDate.year - Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     * @param {integer} params.dailyRange.startDate.day - Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     * @param {integer} params.dailyRange.startDate.month - Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     * @param {integer} params.dailyRange.startDate.year - Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     * @param {string} params.dailySubEntityType.dayOfWeek - Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics = NONE.
     * @param {integer} params.dailySubEntityType.timeOfDay.hours - Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     * @param {integer} params.dailySubEntityType.timeOfDay.minutes - Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.
     * @param {integer} params.dailySubEntityType.timeOfDay.nanos - Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.
     * @param {integer} params.dailySubEntityType.timeOfDay.seconds - Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.
     * @param {string} params.name - (Required) Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.
     * @return {object} The API response object.
     */
    this.locations.getDailyMetricsTimeSeries = (params) => this._makeRequest('v1/{+name}:getDailyMetricsTimeSeries', 'GET', params);

    /**
     * Returns the values for each date from a given time range and optionally the sub entity type, where applicable, that are associated with the specific daily metrics. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
     * @param {string} params.dailyMetrics - Required. The metrics to retrieve time series for.
     * @param {integer} params.dailyRange.endDate.day - Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     * @param {integer} params.dailyRange.endDate.month - Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     * @param {integer} params.dailyRange.endDate.year - Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     * @param {integer} params.dailyRange.startDate.day - Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     * @param {integer} params.dailyRange.startDate.month - Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     * @param {integer} params.dailyRange.startDate.year - Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     * @param {string} params.location - (Required) Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.
     * @return {object} The API response object.
     */
    this.locations.fetchMultiDailyMetricsTimeSeries = (params) => this._makeRequest('v1/{+location}:fetchMultiDailyMetricsTimeSeries', 'GET', params);

    this.locations.searchkeywords = {};

    this.locations.searchkeywords.impressions = {};

    this.locations.searchkeywords.impressions.monthly = {};

    /**
     * Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`
     * @param {integer} params.monthlyRange.endMonth.day - Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     * @param {integer} params.monthlyRange.endMonth.month - Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     * @param {integer} params.monthlyRange.endMonth.year - Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     * @param {integer} params.monthlyRange.startMonth.day - Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     * @param {integer} params.monthlyRange.startMonth.month - Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     * @param {integer} params.monthlyRange.startMonth.year - Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     * @param {integer} params.pageSize - Optional. The number of results requested. The default page size is 100. Page size can be set to a maximum of 100.
     * @param {string} params.pageToken - Optional. A token indicating the next paginated result to be returned.
     * @param {string} params.parent - (Required) Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.
     * @return {object} The API response object.
     */
    this.locations.searchkeywords.impressions.monthly.list = (params) => this._makeRequest('v1/{+parent}/searchkeywords/impressions/monthly', 'GET', params);
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
