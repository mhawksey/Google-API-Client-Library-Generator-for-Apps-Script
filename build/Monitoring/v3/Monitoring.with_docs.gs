
/**
 * Google Apps Script client library for the Cloud Monitoring API
 * Documentation URL: https://cloud.google.com/monitoring/api/
 * @class
 */
class Monitoring {
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
    this._rootUrl = 'https://monitoring.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.monitoredResourceDescriptors = {};

    /**
     * Lists monitored resource descriptors that match a filter.
     * @param {string} params.filter - An optional filter (https://cloud.google.com/monitoring/api/v3/filters) describing the descriptors to be returned. The filter can reference the descriptor's type and labels. For example, the following filter returns only Google Compute Engine descriptors that have an id label: resource.type = starts_with("gce_") AND resource.label:id
     * @param {string} params.name - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER]
     * @param {integer} params.pageSize - A positive number that is the maximum number of results to return.
     * @param {string} params.pageToken - If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     * @return {object} The API response object.
     */
    this.projects.monitoredResourceDescriptors.list = (params) => this._makeRequest('v3/{+name}/monitoredResourceDescriptors', 'GET', params);

    /**
     * Gets a single monitored resource descriptor.
     * @param {string} params.name - (Required) Required. The monitored resource descriptor to get. The format is: projects/[PROJECT_ID_OR_NUMBER]/monitoredResourceDescriptors/[RESOURCE_TYPE] The [RESOURCE_TYPE] is a predefined type, such as cloudsql_database.
     * @return {object} The API response object.
     */
    this.projects.monitoredResourceDescriptors.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.projects.metricDescriptors = {};

    /**
     * Lists metric descriptors that match a filter.
     * @param {boolean} params.activeOnly - Optional. If true, only metrics and monitored resource types that have recent data (within roughly 25 hours) will be included in the response. - If a metric descriptor enumerates monitored resource types, only the monitored resource types for which the metric type has recent data will be included in the returned metric descriptor, and if none of them have recent data, the metric descriptor will not be returned. - If a metric descriptor does not enumerate the compatible monitored resource types, it will be returned only if the metric type has recent data for some monitored resource type. The returned descriptor will not enumerate any monitored resource types.
     * @param {string} params.filter - Optional. If this field is empty, all custom and system-defined metric descriptors are returned. Otherwise, the filter (https://cloud.google.com/monitoring/api/v3/filters) specifies which metric descriptors are to be returned. For example, the following filter matches all custom metrics (https://cloud.google.com/monitoring/custom-metrics): metric.type = starts_with("custom.googleapis.com/")
     * @param {string} params.name - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER]
     * @param {integer} params.pageSize - Optional. A positive number that is the maximum number of results to return. The default and maximum value is 10,000. If a page_size <= 0 or > 10,000 is submitted, will instead return a maximum of 10,000 results.
     * @param {string} params.pageToken - Optional. If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     * @return {object} The API response object.
     */
    this.projects.metricDescriptors.list = (params) => this._makeRequest('v3/{+name}/metricDescriptors', 'GET', params);

    /**
     * Gets a single metric descriptor.
     * @param {string} params.name - (Required) Required. The metric descriptor on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER]/metricDescriptors/[METRIC_ID] An example value of [METRIC_ID] is "compute.googleapis.com/instance/disk/read_bytes_count".
     * @return {object} The API response object.
     */
    this.projects.metricDescriptors.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
     * @param {string} params.name - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: 4 projects/PROJECT_ID_OR_NUMBER
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.metricDescriptors.create = (params) => this._makeRequest('v3/{+name}/metricDescriptors', 'POST', params);

    /**
     * Deletes a metric descriptor. Only user-created custom metrics (https://cloud.google.com/monitoring/custom-metrics) can be deleted.
     * @param {string} params.name - (Required) Required. The metric descriptor on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER]/metricDescriptors/[METRIC_ID] An example of [METRIC_ID] is: "custom.googleapis.com/my_test_metric".
     * @return {object} The API response object.
     */
    this.projects.metricDescriptors.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.timeSeries = {};

    /**
     * Lists time series that match a filter.
     * @param {string} params.aggregation.alignmentPeriod - The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies.
     * @param {string} params.aggregation.crossSeriesReducer - The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned.
     * @param {string} params.aggregation.groupByFields - The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored.
     * @param {string} params.aggregation.perSeriesAligner - An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned.
     * @param {string} params.filter - Required. A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that specifies which time series should be returned. The filter must specify a single metric type, and can additionally specify metric labels and other information. For example: metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND metric.labels.instance_name = "my-instance-name"
     * @param {string} params.interval.endTime - Required. The end of the time interval.
     * @param {string} params.interval.startTime - Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
     * @param {string} params.name - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name), organization or folder on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] organizations/[ORGANIZATION_ID] folders/[FOLDER_ID]
     * @param {string} params.orderBy - Unsupported: must be left blank. The points in each time series are currently returned in reverse time order (most recent to oldest).
     * @param {integer} params.pageSize - A positive number that is the maximum number of results to return. If page_size is empty or more than 100,000 results, the effective page_size is 100,000 results. If view is set to FULL, this is the maximum number of Points returned. If view is set to HEADERS, this is the maximum number of TimeSeries returned.
     * @param {string} params.pageToken - If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     * @param {string} params.secondaryAggregation.alignmentPeriod - The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies.
     * @param {string} params.secondaryAggregation.crossSeriesReducer - The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned.
     * @param {string} params.secondaryAggregation.groupByFields - The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored.
     * @param {string} params.secondaryAggregation.perSeriesAligner - An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned.
     * @param {string} params.view - Required. Specifies which information is returned about the time series.
     * @return {object} The API response object.
     */
    this.projects.timeSeries.list = (params) => this._makeRequest('v3/{+name}/timeSeries', 'GET', params);

    /**
     * Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This method does not support resource locations constraint of an organization policy (https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations#setting_the_organization_policy).
     * @param {string} params.name - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER]
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.timeSeries.create = (params) => this._makeRequest('v3/{+name}/timeSeries', 'POST', params);

    /**
     * Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
     * @param {string} params.name - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER]
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.timeSeries.createService = (params) => this._makeRequest('v3/{+name}/timeSeries:createService', 'POST', params);

    /**
     * Queries time series by using Monitoring Query Language (MQL). We recommend using PromQL instead of MQL. For more information about the status of MQL, see the MQL deprecation notice (https://cloud.google.com/stackdriver/docs/deprecations/mql).
     * @param {string} params.name - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER]
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.timeSeries.query = (params) => this._makeRequest('v3/{+name}/timeSeries:query', 'POST', params);

    this.projects.collectdTimeSeries = {};

    /**
     * Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
     * @param {string} params.name - (Required) The project (https://cloud.google.com/monitoring/api/v3#project_name) in which to create the time series. The format is: projects/[PROJECT_ID_OR_NUMBER]
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.collectdTimeSeries.create = (params) => this._makeRequest('v3/{+name}/collectdTimeSeries', 'POST', params);

    this.projects.alertPolicies = {};

    /**
     * Lists the existing alerting policies for the workspace.
     * @param {string} params.filter - Optional. If provided, this field specifies the criteria that must be met by alert policies to be included in the response.For more details, see sorting and filtering (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
     * @param {string} params.name - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) whose alert policies are to be listed. The format is: projects/[PROJECT_ID_OR_NUMBER] Note that this field names the parent container in which the alerting policies to be listed are stored. To retrieve a single alerting policy by name, use the GetAlertPolicy operation, instead.
     * @param {string} params.orderBy - Optional. A comma-separated list of fields by which to sort the result. Supports the same set of field references as the filter field. Entries can be prefixed with a minus sign to sort by the field in descending order.For more details, see sorting and filtering (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
     * @param {integer} params.pageSize - Optional. The maximum number of results to return in a single response.
     * @param {string} params.pageToken - Optional. If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call.
     * @return {object} The API response object.
     */
    this.projects.alertPolicies.list = (params) => this._makeRequest('v3/{+name}/alertPolicies', 'GET', params);

    /**
     * Gets a single alerting policy.
     * @param {string} params.name - (Required) Required. The alerting policy to retrieve. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID]
     * @return {object} The API response object.
     */
    this.projects.alertPolicies.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
     * @param {string} params.name - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is: projects/[PROJECT_ID_OR_NUMBER] Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form /alertPolicies/[ALERT_POLICY_ID], identifying the policy in the container.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.alertPolicies.create = (params) => this._makeRequest('v3/{+name}/alertPolicies', 'POST', params);

    /**
     * Deletes an alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
     * @param {string} params.name - (Required) Required. The alerting policy to delete. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] For more information, see AlertPolicy.
     * @return {object} The API response object.
     */
    this.projects.alertPolicies.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Updates an alerting policy. You can either replace the entire policy with a new one or replace only certain fields in the current alerting policy by specifying the fields to be updated via updateMask. Returns the updated alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
     * @param {string} params.name - (Required) Identifier. Required if the policy exists. The resource name for this policy. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] [ALERT_POLICY_ID] is assigned by Cloud Monitoring when the policy is created. When calling the alertPolicies.create method, do not include the name field in the alerting policy passed as part of the request.
     * @param {string} params.updateMask - Optional. A list of alerting policy field names. If this field is not empty, each listed field in the existing alerting policy is set to the value of the corresponding field in the supplied policy (alert_policy), or to the field's default value if the field is not in the supplied alerting policy. Fields not listed retain their previous value.Examples of valid field masks include display_name, documentation, documentation.content, documentation.mime_type, user_labels, user_label.nameofkey, enabled, conditions, combiner, etc.If this field is empty, then the supplied alerting policy replaces the existing policy. It is the same as deleting the existing policy and adding the supplied policy, except for the following: The new policy will have the same [ALERT_POLICY_ID] as the former policy. This gives you continuity with the former policy in your notifications and incidents. Conditions in the new policy will keep their former [CONDITION_ID] if the supplied condition includes the name field with that [CONDITION_ID]. If the supplied condition omits the name field, then a new [CONDITION_ID] is created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.alertPolicies.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    this.projects.groups = {};

    /**
     * Lists the existing groups.
     * @param {string} params.ancestorsOfGroup - A group name. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] Returns groups that are ancestors of the specified group. The groups are returned in order, starting with the immediate parent and ending with the most distant ancestor. If the specified group has no immediate parent, the results are empty.
     * @param {string} params.childrenOfGroup - A group name. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] Returns groups whose parent_name field contains the group name. If no groups have this parent, the results are empty.
     * @param {string} params.descendantsOfGroup - A group name. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] Returns the descendants of the specified group. This is a superset of the results returned by the children_of_group filter, and includes children-of-children, and so forth.
     * @param {string} params.name - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) whose groups are to be listed. The format is: projects/[PROJECT_ID_OR_NUMBER]
     * @param {integer} params.pageSize - A positive number that is the maximum number of results to return.
     * @param {string} params.pageToken - If this field is not empty then it must contain the next_page_token value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     * @return {object} The API response object.
     */
    this.projects.groups.list = (params) => this._makeRequest('v3/{+name}/groups', 'GET', params);

    /**
     * Gets a single group.
     * @param {string} params.name - (Required) Required. The group to retrieve. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
     * @return {object} The API response object.
     */
    this.projects.groups.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates a new group.
     * @param {string} params.name - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) in which to create the group. The format is: projects/[PROJECT_ID_OR_NUMBER]
     * @param {boolean} params.validateOnly - If true, validate this request but do not create the group.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.groups.create = (params) => this._makeRequest('v3/{+name}/groups', 'POST', params);

    /**
     * Updates an existing group. You can change any group attributes except name.
     * @param {string} params.name - (Required) Output only. The name of this group. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique [GROUP_ID] that is generated automatically.
     * @param {boolean} params.validateOnly - If true, validate this request but do not update the existing group.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.groups.update = (params) => this._makeRequest('v3/{+name}', 'PUT', params);

    /**
     * Deletes an existing group.
     * @param {string} params.name - (Required) Required. The group to delete. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
     * @param {boolean} params.recursive - If this field is true, then the request means to delete a group with all its descendants. Otherwise, the request means to delete a group only when it has no descendants. The default value is false.
     * @return {object} The API response object.
     */
    this.projects.groups.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.groups.members = {};

    /**
     * Lists the monitored resources that are members of a group.
     * @param {string} params.filter - An optional list filter (https://cloud.google.com/monitoring/api/learn_more#filtering) describing the members to be returned. The filter may reference the type, labels, and metadata of monitored resources that comprise the group. For example, to return only resources representing Compute Engine VM instances, use this filter: `resource.type = "gce_instance"`
     * @param {string} params.interval.endTime - Required. The end of the time interval.
     * @param {string} params.interval.startTime - Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
     * @param {string} params.name - (Required) Required. The group whose members are listed. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
     * @param {integer} params.pageSize - A positive number that is the maximum number of results to return.
     * @param {string} params.pageToken - If this field is not empty then it must contain the next_page_token value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     * @return {object} The API response object.
     */
    this.projects.groups.members.list = (params) => this._makeRequest('v3/{+name}/members', 'GET', params);

    this.projects.notificationChannelDescriptors = {};

    /**
     * Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
     * @param {string} params.name - (Required) Required. The REST resource name of the parent from which to retrieve the notification channel descriptors. The expected syntax is: projects/[PROJECT_ID_OR_NUMBER] Note that this names (https://cloud.google.com/monitoring/api/v3#project_name) the parent container in which to look for the descriptors; to retrieve a single descriptor by name, use the GetNotificationChannelDescriptor operation, instead.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. If not set to a positive number, a reasonable value will be chosen by the service.
     * @param {string} params.pageToken - If non-empty, page_token must contain a value returned as the next_page_token in a previous response to request the next set of results.
     * @return {object} The API response object.
     */
    this.projects.notificationChannelDescriptors.list = (params) => this._makeRequest('v3/{+name}/notificationChannelDescriptors', 'GET', params);

    /**
     * Gets a single channel descriptor. The descriptor indicates which fields are expected / permitted for a notification channel of the given type.
     * @param {string} params.name - (Required) Required. The channel type for which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannelDescriptors/[CHANNEL_TYPE]
     * @return {object} The API response object.
     */
    this.projects.notificationChannelDescriptors.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.projects.notificationChannels = {};

    /**
     * Lists the notification channels that have been created for the project. To list the types of notification channels that are supported, use the ListNotificationChannelDescriptors method.
     * @param {string} params.filter - Optional. If provided, this field specifies the criteria that must be met by notification channels to be included in the response.For more details, see sorting and filtering (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
     * @param {string} params.name - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] This names the container in which to look for the notification channels; it does not name a specific channel. To query a specific channel by REST resource name, use the GetNotificationChannel operation.
     * @param {string} params.orderBy - Optional. A comma-separated list of fields by which to sort the result. Supports the same set of fields as in filter. Entries can be prefixed with a minus sign to sort in descending rather than ascending order.For more details, see sorting and filtering (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
     * @param {integer} params.pageSize - Optional. The maximum number of results to return in a single response. If not set to a positive number, a reasonable value will be chosen by the service.
     * @param {string} params.pageToken - Optional. If non-empty, page_token must contain a value returned as the next_page_token in a previous response to request the next set of results.
     * @return {object} The API response object.
     */
    this.projects.notificationChannels.list = (params) => this._makeRequest('v3/{+name}/notificationChannels', 'GET', params);

    /**
     * Gets a single notification channel. The channel includes the relevant configuration details with which the channel was created. However, the response may truncate or omit passwords, API keys, or other private key matter and thus the response may not be 100% identical to the information that was supplied in the call to the create method.
     * @param {string} params.name - (Required) Required. The channel for which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]
     * @return {object} The API response object.
     */
    this.projects.notificationChannels.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
     * @param {string} params.name - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] This names the container into which the channel will be written, this does not name the newly created channel. The resulting channel's name will have a normalized version of this field as a prefix, but will add /notificationChannels/[CHANNEL_ID] to identify the channel.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notificationChannels.create = (params) => this._makeRequest('v3/{+name}/notificationChannels', 'POST', params);

    /**
     * Updates a notification channel. Fields not specified in the field mask remain unchanged.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
     * @param {string} params.name - (Required) Identifier. The full REST resource name for this channel. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] The [CHANNEL_ID] is automatically assigned by the server on creation.
     * @param {string} params.updateMask - Optional. The fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notificationChannels.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes a notification channel.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
     * @param {boolean} params.force - If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel). If false, this operation will fail if the notification channel is referenced by existing alerting policies.
     * @param {string} params.name - (Required) Required. The channel for which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]
     * @return {object} The API response object.
     */
    this.projects.notificationChannels.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
     * @param {string} params.name - (Required) Required. The notification channel to which to send a verification code.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notificationChannels.sendVerificationCode = (params) => this._makeRequest('v3/{+name}:sendVerificationCode', 'POST', params);

    /**
     * Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
     * @param {string} params.name - (Required) Required. The notification channel for which a verification code is to be generated and retrieved. This must name a channel that is already verified; if the specified channel is not verified, the request will fail.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notificationChannels.getVerificationCode = (params) => this._makeRequest('v3/{+name}:getVerificationCode', 'POST', params);

    /**
     * Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
     * @param {string} params.name - (Required) Required. The notification channel to verify.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notificationChannels.verify = (params) => this._makeRequest('v3/{+name}:verify', 'POST', params);

    this.projects.snoozes = {};

    /**
     * Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval.
     * @param {string} params.parent - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) in which a Snooze should be created. The format is: projects/[PROJECT_ID_OR_NUMBER]
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.snoozes.create = (params) => this._makeRequest('v3/{+parent}/snoozes', 'POST', params);

    /**
     * Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes.
     * @param {string} params.filter - Optional. Optional filter to restrict results to the given criteria. The following fields are supported. interval.start_time interval.end_timeFor example: interval.start_time > "2022-03-11T00:00:00-08:00" AND interval.end_time < "2022-03-12T00:00:00-08:00"
     * @param {integer} params.pageSize - Optional. The maximum number of results to return for a single query. The server may further constrain the maximum number of results returned in a single page. The value should be in the range 1, 1000. If the value given is outside this range, the server will decide the number of results to be returned.
     * @param {string} params.pageToken - Optional. The next_page_token from a previous call to ListSnoozesRequest to get the next page of results.
     * @param {string} params.parent - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) whose Snoozes should be listed. The format is: projects/[PROJECT_ID_OR_NUMBER]
     * @return {object} The API response object.
     */
    this.projects.snoozes.list = (params) => this._makeRequest('v3/{+parent}/snoozes', 'GET', params);

    /**
     * Retrieves a Snooze by name.
     * @param {string} params.name - (Required) Required. The ID of the Snooze to retrieve. The format is: projects/[PROJECT_ID_OR_NUMBER]/snoozes/[SNOOZE_ID]
     * @return {object} The API response object.
     */
    this.projects.snoozes.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Updates a Snooze, identified by its name, with the parameters in the given Snooze object.
     * @param {string} params.name - (Required) Required. Identifier. The name of the Snooze. The format is: projects/[PROJECT_ID_OR_NUMBER]/snoozes/[SNOOZE_ID] The ID of the Snooze will be generated by the system.
     * @param {string} params.updateMask - Required. The fields to update.For each field listed in update_mask: If the Snooze object supplied in the UpdateSnoozeRequest has a value for that field, the value of the field in the existing Snooze will be set to the value of the field in the supplied Snooze. If the field does not have a value in the supplied Snooze, the field in the existing Snooze is set to its default value.Fields not listed retain their existing value.The following are the field names that are accepted in update_mask: display_name interval.start_time interval.end_timeThat said, the start time and end time of the Snooze determines which fields can legally be updated. Before attempting an update, users should consult the documentation for UpdateSnoozeRequest, which talks about which fields can be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.snoozes.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    this.projects.uptimeCheckConfigs = {};

    /**
     * Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).
     * @param {string} params.filter - If provided, this field specifies the criteria that must be met by uptime checks to be included in the response.For more details, see Filtering syntax (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering#filter_syntax).
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page_size is <=0, the server will decide the number of results to be returned.
     * @param {string} params.pageToken - If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call.
     * @param {string} params.parent - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) whose Uptime check configurations are listed. The format is: projects/[PROJECT_ID_OR_NUMBER]
     * @return {object} The API response object.
     */
    this.projects.uptimeCheckConfigs.list = (params) => this._makeRequest('v3/{+parent}/uptimeCheckConfigs', 'GET', params);

    /**
     * Gets a single Uptime check configuration.
     * @param {string} params.name - (Required) Required. The Uptime check configuration to retrieve. The format is: projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID]
     * @return {object} The API response object.
     */
    this.projects.uptimeCheckConfigs.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates a new Uptime check configuration.
     * @param {string} params.parent - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) in which to create the Uptime check. The format is: projects/[PROJECT_ID_OR_NUMBER]
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.uptimeCheckConfigs.create = (params) => this._makeRequest('v3/{+parent}/uptimeCheckConfigs', 'POST', params);

    /**
     * Updates an Uptime check configuration. You can either replace the entire configuration with a new one or replace only certain fields in the current configuration by specifying the fields to be updated via updateMask. Returns the updated configuration.
     * @param {string} params.name - (Required) Identifier. A unique resource name for this Uptime check configuration. The format is: projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID] [PROJECT_ID_OR_NUMBER] is the Workspace host project associated with the Uptime check.This field should be omitted when creating the Uptime check configuration; on create, the resource name is assigned by the server and included in the response.
     * @param {string} params.updateMask - Optional. If present, only the listed fields in the current Uptime check configuration are updated with values from the new configuration. If this field is empty, then the current configuration is completely replaced with the new configuration.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.uptimeCheckConfigs.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes an Uptime check configuration. Note that this method will fail if the Uptime check configuration is referenced by an alert policy or other dependent configs that would be rendered invalid by the deletion.
     * @param {string} params.name - (Required) Required. The Uptime check configuration to delete. The format is: projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID]
     * @return {object} The API response object.
     */
    this.projects.uptimeCheckConfigs.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.organizations = {};

    this.organizations.timeSeries = {};

    /**
     * Lists time series that match a filter.
     * @param {string} params.aggregation.alignmentPeriod - The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies.
     * @param {string} params.aggregation.crossSeriesReducer - The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned.
     * @param {string} params.aggregation.groupByFields - The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored.
     * @param {string} params.aggregation.perSeriesAligner - An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned.
     * @param {string} params.filter - Required. A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that specifies which time series should be returned. The filter must specify a single metric type, and can additionally specify metric labels and other information. For example: metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND metric.labels.instance_name = "my-instance-name"
     * @param {string} params.interval.endTime - Required. The end of the time interval.
     * @param {string} params.interval.startTime - Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
     * @param {string} params.name - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name), organization or folder on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] organizations/[ORGANIZATION_ID] folders/[FOLDER_ID]
     * @param {string} params.orderBy - Unsupported: must be left blank. The points in each time series are currently returned in reverse time order (most recent to oldest).
     * @param {integer} params.pageSize - A positive number that is the maximum number of results to return. If page_size is empty or more than 100,000 results, the effective page_size is 100,000 results. If view is set to FULL, this is the maximum number of Points returned. If view is set to HEADERS, this is the maximum number of TimeSeries returned.
     * @param {string} params.pageToken - If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     * @param {string} params.secondaryAggregation.alignmentPeriod - The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies.
     * @param {string} params.secondaryAggregation.crossSeriesReducer - The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned.
     * @param {string} params.secondaryAggregation.groupByFields - The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored.
     * @param {string} params.secondaryAggregation.perSeriesAligner - An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned.
     * @param {string} params.view - Required. Specifies which information is returned about the time series.
     * @return {object} The API response object.
     */
    this.organizations.timeSeries.list = (params) => this._makeRequest('v3/{+name}/timeSeries', 'GET', params);

    this.folders = {};

    this.folders.timeSeries = {};

    /**
     * Lists time series that match a filter.
     * @param {string} params.aggregation.alignmentPeriod - The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies.
     * @param {string} params.aggregation.crossSeriesReducer - The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned.
     * @param {string} params.aggregation.groupByFields - The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored.
     * @param {string} params.aggregation.perSeriesAligner - An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned.
     * @param {string} params.filter - Required. A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that specifies which time series should be returned. The filter must specify a single metric type, and can additionally specify metric labels and other information. For example: metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND metric.labels.instance_name = "my-instance-name"
     * @param {string} params.interval.endTime - Required. The end of the time interval.
     * @param {string} params.interval.startTime - Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
     * @param {string} params.name - (Required) Required. The project (https://cloud.google.com/monitoring/api/v3#project_name), organization or folder on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] organizations/[ORGANIZATION_ID] folders/[FOLDER_ID]
     * @param {string} params.orderBy - Unsupported: must be left blank. The points in each time series are currently returned in reverse time order (most recent to oldest).
     * @param {integer} params.pageSize - A positive number that is the maximum number of results to return. If page_size is empty or more than 100,000 results, the effective page_size is 100,000 results. If view is set to FULL, this is the maximum number of Points returned. If view is set to HEADERS, this is the maximum number of TimeSeries returned.
     * @param {string} params.pageToken - If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     * @param {string} params.secondaryAggregation.alignmentPeriod - The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies.
     * @param {string} params.secondaryAggregation.crossSeriesReducer - The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned.
     * @param {string} params.secondaryAggregation.groupByFields - The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored.
     * @param {string} params.secondaryAggregation.perSeriesAligner - An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned.
     * @param {string} params.view - Required. Specifies which information is returned about the time series.
     * @return {object} The API response object.
     */
    this.folders.timeSeries.list = (params) => this._makeRequest('v3/{+name}/timeSeries', 'GET', params);

    this.services = {};

    /**
     * Create a Service.
     * @param {string} params.parent - (Required) Required. Resource name (https://cloud.google.com/monitoring/api/v3#project_name) of the parent Metrics Scope. The format is: projects/[PROJECT_ID_OR_NUMBER]
     * @param {string} params.serviceId - Optional. The Service id to use for this Service. If omitted, an id will be generated instead. Must match the pattern [a-z0-9\-]+
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.create = (params) => this._makeRequest('v3/{+parent}/services', 'POST', params);

    /**
     * Get the named Service.
     * @param {string} params.name - (Required) Required. Resource name of the Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]
     * @return {object} The API response object.
     */
    this.services.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * List Services for this Metrics Scope.
     * @param {string} params.filter - A filter specifying what Services to return. The filter supports filtering on a particular service-identifier type or one of its attributes.To filter on a particular service-identifier type, the identifier_case refers to which option in the identifier field is populated. For example, the filter identifier_case = "CUSTOM" would match all services with a value for the custom field. Valid options include "CUSTOM", "APP_ENGINE", "MESH_ISTIO", and the other options listed at https://cloud.google.com/monitoring/api/ref_v3/rest/v3/services#ServiceTo filter on an attribute of a service-identifier type, apply the filter name by using the snake case of the service-identifier type and the attribute of that service-identifier type, and join the two with a period. For example, to filter by the meshUid field of the MeshIstio service-identifier type, you must filter on mesh_istio.mesh_uid = "123" to match all services with mesh UID "123". Service-identifier types and their attributes are described at https://cloud.google.com/monitoring/api/ref_v3/rest/v3/services#Service
     * @param {integer} params.pageSize - A non-negative number that is the maximum number of results to return. When 0, use default page size.
     * @param {string} params.pageToken - If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     * @param {string} params.parent - (Required) Required. Resource name of the parent containing the listed services, either a project (https://cloud.google.com/monitoring/api/v3#project_name) or a Monitoring Metrics Scope. The formats are: projects/[PROJECT_ID_OR_NUMBER] workspaces/[HOST_PROJECT_ID_OR_NUMBER]
     * @return {object} The API response object.
     */
    this.services.list = (params) => this._makeRequest('v3/{+parent}/services', 'GET', params);

    /**
     * Update this Service.
     * @param {string} params.name - (Required) Identifier. Resource name for this Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]
     * @param {string} params.updateMask - A set of field paths defining which fields to use for the update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Soft delete this Service.
     * @param {string} params.name - (Required) Required. Resource name of the Service to delete. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]
     * @return {object} The API response object.
     */
    this.services.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.services.serviceLevelObjectives = {};

    /**
     * Create a ServiceLevelObjective for the given Service.
     * @param {string} params.parent - (Required) Required. Resource name of the parent Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]
     * @param {string} params.serviceLevelObjectiveId - Optional. The ServiceLevelObjective id to use for this ServiceLevelObjective. If omitted, an id will be generated instead. Must match the pattern ^[a-zA-Z0-9-_:.]+$
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.serviceLevelObjectives.create = (params) => this._makeRequest('v3/{+parent}/serviceLevelObjectives', 'POST', params);

    /**
     * Get a ServiceLevelObjective by name.
     * @param {string} params.name - (Required) Required. Resource name of the ServiceLevelObjective to get. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME]
     * @param {string} params.view - View of the ServiceLevelObjective to return. If DEFAULT, return the ServiceLevelObjective as originally defined. If EXPLICIT and the ServiceLevelObjective is defined in terms of a BasicSli, replace the BasicSli with a RequestBasedSli spelling out how the SLI is computed.
     * @return {object} The API response object.
     */
    this.services.serviceLevelObjectives.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * List the ServiceLevelObjectives for the given Service.
     * @param {string} params.filter - A filter specifying what ServiceLevelObjectives to return.
     * @param {integer} params.pageSize - A non-negative number that is the maximum number of results to return. When 0, use default page size.
     * @param {string} params.pageToken - If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     * @param {string} params.parent - (Required) Required. Resource name of the parent containing the listed SLOs, either a project or a Monitoring Metrics Scope. The formats are: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] workspaces/[HOST_PROJECT_ID_OR_NUMBER]/services/-
     * @param {string} params.view - View of the ServiceLevelObjectives to return. If DEFAULT, return each ServiceLevelObjective as originally defined. If EXPLICIT and the ServiceLevelObjective is defined in terms of a BasicSli, replace the BasicSli with a RequestBasedSli spelling out how the SLI is computed.
     * @return {object} The API response object.
     */
    this.services.serviceLevelObjectives.list = (params) => this._makeRequest('v3/{+parent}/serviceLevelObjectives', 'GET', params);

    /**
     * Update the given ServiceLevelObjective.
     * @param {string} params.name - (Required) Identifier. Resource name for this ServiceLevelObjective. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME]
     * @param {string} params.updateMask - A set of field paths defining which fields to use for the update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.serviceLevelObjectives.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Delete the given ServiceLevelObjective.
     * @param {string} params.name - (Required) Required. Resource name of the ServiceLevelObjective to delete. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME]
     * @return {object} The API response object.
     */
    this.services.serviceLevelObjectives.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.uptimeCheckIps = {};

    /**
     * Returns the list of IP addresses that checkers run from.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page_size is <=0, the server will decide the number of results to be returned. NOTE: this field is not yet implemented
     * @param {string} params.pageToken - If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call. NOTE: this field is not yet implemented
     * @return {object} The API response object.
     */
    this.uptimeCheckIps.list = (params) => this._makeRequest('v3/uptimeCheckIps', 'GET', params);
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
