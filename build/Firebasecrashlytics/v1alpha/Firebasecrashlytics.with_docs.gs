
/**
 * Google Apps Script client library for the Firebase Crashlytics API
 * Documentation URL: https://firebase.google.com/docs/crashlytics
 * Generator: https://github.com/mhawksey/Google-API-Client-Library-Generator-for-Apps-Script/
 * @class
 */
class Firebasecrashlytics {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://firebasecrashlytics.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.apps = {};

    /**
     * Retrieves the Android Profiling Manager configuration for an app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the Profiling Manager configuration to retrieve. Format: "projects/{project}/apps/{app}/profilingManagerConfig".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.getProfilingManagerConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the Android Profiling Manager configuration for an app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the Profiling Manager configuration. Format: "projects/{project}/apps/{app}/profilingManagerConfig".
     * @param {string} apiParams.updateMask - Optional. The list of ProfilingManagerConfig fields to update (`gcs_bucket`, `heap_dump_collection_enabled`). If omitted, all populated (non-default) fields are updated; specify an explicit `update_mask` (or `*`) when clearing a field to its default value (such as `""` or `false`).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.updateProfilingManagerConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Creates a Cloud Monitoring AlertPolicy for the requested Crashlytics Web alert type and returns the created resource reference.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The firebase application. Format: "projects/{project}/apps/{app_id}".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.generateAlertPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:generateAlertPolicy', 'POST', apiParams, clientConfig);

    this.projects.apps.events = {};

    /**
     * List the events for an issue matching filter criteria, sorted in descending order by timestamp.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter.browser.displayNames - Optional. Only count events from the given browser. This string matches Browser.display_name. Format: "name (display_version)" e.g. "Chrome (123)", or just "name" for all possible versions, e.g. simply "Chrome".
     * @param {string} apiParams.filter.device.displayNames - Only counts events from the given Device model. This string matches Device.display_name. Format: "manufacturer (model)" e.g. "Google (Pixel 6)", or just "manufacturer" for all possible models, e.g. simply "Google". Note that a device's marketing_name field can not be used for filtering.
     * @param {string} apiParams.filter.device.formFactors - Only counts events from devices with the given form factor (e.g. phone or tablet).
     * @param {string} apiParams.filter.interval.endTime - Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     * @param {string} apiParams.filter.interval.startTime - Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     * @param {string} apiParams.filter.issue.content - Optional. A space separated list of filter terms matched against the contents of the issue. Contents include the title and the stack trace. Matches must begin at alphanumeric tokens, i.e., 'util.Sorted' matches 'java.util.SortedSet' but not 'myutil.SortedArray'. The filter matches if all filter terms match. All non-alphanumeric characters are ignored for matching. Filtering is assumed to be prefix-search and order-independent unless phrases are surrounded by "". Any terms contained in quotes are searched using exact-match (given filter term "foo", we will not return "foobar"), and must appear in the order given exactly. To get order-dependence but prefix-search, use a * within the quotes ("abc foo*" will match "abc foobar", but not "foo abc" "abcd foobar", or "abc xyz foobar").
     * @param {string} apiParams.filter.issue.errorTypes - Optional. Only counts events of the given error types. This field matches [Issue.error_type].
     * @param {string} apiParams.filter.issue.id - Optional. Only counts events in the given issue ID. This field matches [Issue.id].
     * @param {string} apiParams.filter.issue.signals - Optional. Only returns issues currently marked with the given signals. This field matches [Issue.signals.signal].
     * @param {string} apiParams.filter.issue.state - Optional. Deprecated: Prefer `states` field. Only includes events for issues with the given issue state. Only available for `topIssues` reports.
     * @param {string} apiParams.filter.issue.states - Optional. Only includes events for issues with the given issue states. Only available for `topIssues` reports.
     * @param {string} apiParams.filter.issue.variantId - Optional. Only counts events for the given issue variant ID. This field matches [IssueVariant.id].
     * @param {string} apiParams.filter.operatingSystem.displayNames - Only counts events in the given operating system and version. This string matches OperatingSystem.display_name. Format: "osName (osVersion)" e.g. "Android (11)". or just "osName" for all versions, e.g. simply "iPadOS".
     * @param {string} apiParams.filter.version.displayNames - Only counts events in the given app version. This string matches Version.display_name. Format: "display_version (build_version)" e.g. "1.2.3 (456)".
     * @param {string} apiParams.filterExpression - Optional. Filters events by custom keys (https://firebase.google.com/docs/crashlytics/customize-crash-reports#add-keys). Supported forms: * Equality: `custom_keys.level = "vip"` * Has: `custom_keys.level:"vip"` (matches the same events as equality) * Presence: `custom_keys.level:*` * OR across values of one key: `custom_keys.level = "vip" OR custom_keys.level = "enterprise"` * AND across different keys: `custom_keys.level = "vip" AND custom_keys.region = "us"` Keys are case-sensitive. Keys and values containing spaces must be double-quoted, for example `custom_keys."app state" = "background"`. OR across different keys, repeating a key within an AND, NOT, and comparators other than `=` and `:` are rejected with INVALID_ARGUMENT. Wildcards are not supported in values; use `custom_keys.:*` to match events that set a key to any value. This filter expression applies in addition to the `filter` field above. The syntax is a subset of AIP-160 (https://google.aip.dev/160).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of events per page. If omitted, defaults to 10.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous calls.
     * @param {string} apiParams.parent - (Required) Required. The Firebase application. Format: "projects/{project}/apps/{app_id}".
     * @param {string} apiParams.readMask - Optional. The list of Event fields to include in the response. If omitted, the full event is returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.events.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/events', 'GET', apiParams, clientConfig);

    /**
     * Fetch a batch of up to 100 events by name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.names - Required. The resource names of the desired events. A maximum of 100 events can be retrieved in a batch. Format: "projects/{project}/apps/{app_id}/events/{event_id}". The app_id and event_id are required, but project may be "-" to conserve space in long URIs.
     * @param {string} apiParams.parent - (Required) Required. The firebase application. Format: "projects/{project}/apps/{app_id}".
     * @param {string} apiParams.readMask - Optional. The list of Event fields to include in the response. If omitted, the full event is returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.events.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/events:batchGet', 'GET', apiParams, clientConfig);

    this.projects.apps.reports = {};

    /**
     * Get a report with its computed results.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter.browser.displayNames - Optional. Only count events from the given browser. This string matches Browser.display_name. Format: "name (display_version)" e.g. "Chrome (123)", or just "name" for all possible versions, e.g. simply "Chrome".
     * @param {string} apiParams.filter.device.displayNames - Only counts events from the given Device model. This string matches Device.display_name. Format: "manufacturer (model)" e.g. "Google (Pixel 6)", or just "manufacturer" for all possible models, e.g. simply "Google". Note that a device's marketing_name field can not be used for filtering.
     * @param {string} apiParams.filter.device.formFactors - Only counts events from devices with the given form factor (e.g. phone or tablet).
     * @param {string} apiParams.filter.interval.endTime - Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     * @param {string} apiParams.filter.interval.startTime - Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     * @param {string} apiParams.filter.issue.content - Optional. A space separated list of filter terms matched against the contents of the issue. Contents include the title and the stack trace. Matches must begin at alphanumeric tokens, i.e., 'util.Sorted' matches 'java.util.SortedSet' but not 'myutil.SortedArray'. The filter matches if all filter terms match. All non-alphanumeric characters are ignored for matching. Filtering is assumed to be prefix-search and order-independent unless phrases are surrounded by "". Any terms contained in quotes are searched using exact-match (given filter term "foo", we will not return "foobar"), and must appear in the order given exactly. To get order-dependence but prefix-search, use a * within the quotes ("abc foo*" will match "abc foobar", but not "foo abc" "abcd foobar", or "abc xyz foobar").
     * @param {string} apiParams.filter.issue.errorTypes - Optional. Only counts events of the given error types. This field matches [Issue.error_type].
     * @param {string} apiParams.filter.issue.id - Optional. Only counts events in the given issue ID. This field matches [Issue.id].
     * @param {string} apiParams.filter.issue.signals - Optional. Only returns issues currently marked with the given signals. This field matches [Issue.signals.signal].
     * @param {string} apiParams.filter.issue.state - Optional. Deprecated: Prefer `states` field. Only includes events for issues with the given issue state. Only available for `topIssues` reports.
     * @param {string} apiParams.filter.issue.states - Optional. Only includes events for issues with the given issue states. Only available for `topIssues` reports.
     * @param {string} apiParams.filter.issue.variantId - Optional. Only counts events for the given issue variant ID. This field matches [IssueVariant.id].
     * @param {string} apiParams.filter.operatingSystem.displayNames - Only counts events in the given operating system and version. This string matches OperatingSystem.display_name. Format: "osName (osVersion)" e.g. "Android (11)". or just "osName" for all versions, e.g. simply "iPadOS".
     * @param {string} apiParams.filter.version.displayNames - Only counts events in the given app version. This string matches Version.display_name. Format: "display_version (build_version)" e.g. "1.2.3 (456)".
     * @param {string} apiParams.filterExpression - Optional. Filters the events counted in the report by custom keys. Not all reports support this filter. It is currently only supported for web apps; see the report's `usage` field for whether `filter_expression` is supported. Requests for other apps or unsupported reports that set this field are rejected with `INVALID_ARGUMENT`. Supported forms: * Equality: `custom_keys.level = "vip"` * Has: `custom_keys.level:"vip"` (matches the same events as equality) * Presence: `custom_keys.level:*` * OR across values of one key: `custom_keys.level = "vip" OR custom_keys.level = "enterprise"` * AND across different keys: `custom_keys.level = "vip" AND custom_keys.region = "us"` Keys are case-sensitive. Keys and values containing spaces must be double-quoted, for example `custom_keys."app state" = "background"`. OR across different keys, repeating a key within an AND, NOT, and comparators other than `=` and `:` are rejected with INVALID_ARGUMENT. Wildcards are not supported in values; use `custom_keys.:*` to match events that set a key to any value. This filter expression applies in addition to the `filter` field above. The syntax is a subset of AIP-160 (https://google.aip.dev/160).
     * @param {string} apiParams.granularity - Optional. The report response will contain one data point per time grain. If omitted, the report will contain a single data point for the complete interval.
     * @param {string} apiParams.metricsMode - Optional. Controls whether metrics are raw observed values (mobile and web) or extrapolated values (web only). If omitted, defaults to OBSERVED.
     * @param {string} apiParams.name - (Required) Required. The report name. Format: "projects/{project}/apps/{app_id}/reports/{report}".
     * @param {integer} apiParams.pageSize - Optional. The maximum number of result groups to return. The maximum value is 100; values above 100 will be coerced to 100. If omitted, defaults to 25.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous call. The page token is only valid for the exact same set of filters, which must also be sent in subsequent requests. This token is valid for 10 minutes after the first request.
     * @param {string} apiParams.view - Optional. Response view. If not set, defaults to `REPORT_VIEW_FULL`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.reports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List all of the available reports.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The firebase application. Format: "projects/{project}/apps/{app_id}".
     * @param {string} apiParams.view - Optional. Response view. If not set, defaults to `REPORT_VIEW_BASIC`. `REPORT_VIEW_FULL` is not supported for list operations.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.reports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/reports', 'GET', apiParams, clientConfig);

    this.projects.apps.users = {};

    /**
     * Enqueues a request to permanently remove crash reports associated with the specified user. All reports belonging to the specified user will be deleted typically within 24 hours of receiving the crash report.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name for user reports, in the format: projects/ PROJECT_IDENTIFIER/apps/APP_ID/users/USER_ID/crashReports - PROJECT_IDENTIFIER: The Firebase project's project number (recommended) or its project ID. Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). - APP_ID: The globally unique, Firebase-assigned identifier for the Firebase App. This is not your package name or bundle ID. Learn how to [find your app ID](https://firebase.google.com/support/faq/#find-app-id). - USER_ID: The user ID set using the Crashlytics SDK. Learn how to [set user identifiers](https://firebase.google.com/docs/crashlytics/customize-crash-reports#set-user-ids).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.users.deleteCrashReports = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.apps.issues = {};

    /**
     * Retrieve an issue.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the issue to retrieve. Format: "projects/{project}/apps/{app}/issues/{issue}".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.issues.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Change the state of an issue.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Output only. Immutable. Identifier. The name of the issue resource. Format: "projects/{project}/apps/{app}/issues/{issue}".
     * @param {string} apiParams.updateMask - Optional. The list of Issue fields to update. Currently only "state" is mutable.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.issues.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Change the state of a group of issues. This method is not atomic, so partial failures can occur. In the event of a partial failure, the request will fail and you will need to call `GetIssue` to see which issues were not updated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource shared by all issues being updated. Format: projects/{project}/apps/{app}. If this is set, the parent field in the UpdateIssueRequest messages must either be empty or match this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.issues.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/issues:batchUpdate', 'POST', apiParams, clientConfig);

    this.projects.apps.issues.notes = {};

    /**
     * List all notes for a certain issue, sorted in descending order by timestamp.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of notes per page. If omitted, defaults to 10.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous calls.
     * @param {string} apiParams.parent - (Required) Required. The issue the notes belongs to. Format: "projects/{project}/apps/{app}/issues/{issue}".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.issues.notes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/notes', 'GET', apiParams, clientConfig);

    /**
     * Delete a note by its name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the note to delete. Format: projects/{project}/apps/{app}/issues/{issue}/notes/{note}.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.issues.notes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Create a new note for an issue.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this note will be created. Format: "projects/{project}/apps/{app}/issues/{issue}".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.issues.notes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/notes', 'POST', apiParams, clientConfig);
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
