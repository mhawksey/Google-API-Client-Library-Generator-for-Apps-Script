# Cloud Monitoring API - Apps Script Client Library

Auto-generated client library for using the **Cloud Monitoring API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:44:24 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:42:07 GMT
- **Created:** Sun, 20 Jul 2025 16:43:21 GMT



---

## API Reference

### `operations`

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects`

### `projects.dashboards`

#### `projects.dashboards.create()`

Creates a new custom dashboard. For examples on how you can use this API to create dashboards, see Managing dashboards by API (https://cloud.google.com/monitoring/dashboards/api-dashboard). This method requires the monitoring.dashboards.create permission on the specified project. For more information about permissions, see Cloud Identity and Access Management (https://cloud.google.com/iam).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] The [PROJECT_ID_OR_NUMBER] must match the dashboard resource name. |
| `params.validateOnly` | `boolean` | No | If set, validate the request and preview the review, but do not actually save it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.dashboards.list()`

Lists the existing dashboards.This method requires the monitoring.dashboards.list permission on the specified project. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The scope of the dashboards to list. The format is: projects/[PROJECT_ID_OR_NUMBER]  |
| `params.pageSize` | `integer` | No | A positive number that is the maximum number of results to return. If unspecified, a default of 1000 is used. |
| `params.pageToken` | `string` | No | Optional. If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call. |

#### `projects.dashboards.get()`

Fetches a specific dashboard.This method requires the monitoring.dashboards.get permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Dashboard. The format is one of: dashboards/[DASHBOARD_ID] (for system dashboards) projects/[PROJECT_ID_OR_NUMBER]/dashboards/[DASHBOARD_ID] (for custom dashboards). |

#### `projects.dashboards.delete()`

Deletes an existing custom dashboard.This method requires the monitoring.dashboards.delete permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Dashboard. The format is: projects/[PROJECT_ID_OR_NUMBER]/dashboards/[DASHBOARD_ID]  |

#### `projects.dashboards.patch()`

Replaces an existing custom dashboard with a new definition.This method requires the monitoring.dashboards.update permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the dashboard. |
| `params.validateOnly` | `boolean` | No | If set, validate the request and preview the review, but do not actually save it. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.location`

### `projects.location.prometheus`

### `projects.location.prometheus.api`

### `projects.location.prometheus.api.v1`

#### `projects.location.prometheus.api.v1.query()`

Evaluate a PromQL query at a single point in time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The project on which to execute the request. Data associcated with the project's workspace stored under the The format is: projects/PROJECT_ID_OR_NUMBER. Open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. |
| `params.location` | `string` | Yes | Location of the resource information. Has to be "global" now. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.location.prometheus.api.v1.query_range()`

Evaluate a PromQL query with start, end time range.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The project on which to execute the request. Data associcated with the project's workspace stored under the The format is: projects/PROJECT_ID_OR_NUMBER. Open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. |
| `params.location` | `string` | Yes | Location of the resource information. Has to be "global" now. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.location.prometheus.api.v1.labels()`

Lists labels for metrics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER. |
| `params.location` | `string` | Yes | Location of the resource information. Has to be "global" now. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.location.prometheus.api.v1.series()`

Lists metadata for metrics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER. |
| `params.location` | `string` | Yes | Location of the resource information. Has to be "global" for now. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.location.prometheus.api.v1.query_exemplars()`

Lists exemplars relevant to a given PromQL query,

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The project on which to execute the request. Data associcated with the project's workspace stored under the The format is: projects/PROJECT_ID_OR_NUMBER. Open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. |
| `params.location` | `string` | Yes | Location of the resource information. Has to be "global" now. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.location.prometheus.api.v1.label`

#### `projects.location.prometheus.api.v1.label.values()`

Lists possible values for a given label name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER. |
| `params.location` | `string` | Yes | Location of the resource information. Has to be "global" now. |
| `params.label` | `string` | Yes | The label name for which values are queried. |
| `params.start` | `string` | No | The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. |
| `params.end` | `string` | No | The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. |
| `params.match` | `string` | No | A list of matchers encoded in the Prometheus label matcher format to constrain the values to series that satisfy them. |

### `projects.location.prometheus.api.v1.metadata`

#### `projects.location.prometheus.api.v1.metadata.list()`

Lists metadata for metrics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER. |
| `params.location` | `string` | Yes | Location of the resource information. Has to be "global" for now. |
| `params.metric` | `string` | No | The metric name for which to query metadata. If unset, all metric metadata is returned. |
| `params.limit` | `string` | No | Maximum number of metrics to return. |

### `locations`

### `locations.global`

### `locations.global.metricsScopes`

#### `locations.global.metricsScopes.get()`

Returns a specific Metrics Scope, including the list of projects monitored by the specified Metrics Scope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Metrics Scope. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER} |

#### `locations.global.metricsScopes.listMetricsScopesByMonitoredProject()`

Returns a list of every Metrics Scope that a specific MonitoredProject has been added to. The metrics scope representing the specified monitored project will always be the first entry in the response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.monitoredResourceContainer` | `string` | No | Required. The resource name of the Monitored Project being requested. Example: projects/{MONITORED_PROJECT_ID_OR_NUMBER} |

### `locations.global.metricsScopes.projects`

#### `locations.global.metricsScopes.projects.create()`

Adds a MonitoredProject with the given project ID to the specified Metrics Scope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER} |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.global.metricsScopes.projects.delete()`

Deletes a MonitoredProject from the specified Metrics Scope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the MonitoredProject. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER}Authorization requires the following Google IAM (https://cloud.google.com/iam) permissions on both the Metrics Scope and on the MonitoredProject: monitoring.metricsScopes.link |