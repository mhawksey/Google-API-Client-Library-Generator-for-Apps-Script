# Threat Intelligence API - Apps Script Client Library

Auto-generated client library for using the **Threat Intelligence API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Fri, 01 May 2026 00:35:49 GMT
- **Last Modified:** Fri, 01 May 2026 00:35:49 GMT
- **Created:** Wed, 18 Mar 2026 22:10:07 GMT



---

## API Reference

### `projects`

#### `projects.generateOrgProfile()`

Triggers the generation of a Customer Profile for a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the project to generate the profile for. Format: projects/{project} |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.alerts`

#### `projects.alerts.get()`

Get an alert by name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to get. Format: projects/{project}/alerts/{alert} |

#### `projects.alerts.trackExternally()`

Marks an alert as tracked externally - TRACKED_EXTERNALLY.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to mark as tracked externally. Format: projects/{project}/alerts/{alert} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.alerts.escalate()`

Marks an alert as escalated - ESCALATED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to mark as escalated. Format: projects/{project}/alerts/{alert} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.alerts.duplicate()`

Marks an alert as a duplicate of another alert. - DUPLICATE.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to mark as a duplicate. Format: projects/{project}/alerts/{alert} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.alerts.triage()`

Marks an alert as triaged - TRIAGED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to mark as a triaged. Format: projects/{project}/alerts/{alert} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.alerts.benign()`

Marks an alert as benign - BENIGN.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to mark as a benign. Format: projects/{project}/alerts/{alert} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.alerts.resolve()`

Marks an alert to closed state - RESOLVED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to mark as resolved. Format: projects/{project}/alerts/{alert} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.alerts.list()`

Get a list of alerts that meet the filter criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent of the alerts. Format: projects/{project} |
| `params.filter` | `string` | No | Optional. Filter criteria. Supported fields for filtering include: * `audit.create_time` * `audit.creator` * `audit.update_time` * `audit.updater` * `detail.data_leak.discovery_document_ids` * `detail.data_leak.severity` * `detail.detail_type` * `detail.initial_access_broker.discovery_document_ids` * `detail.initial_access_broker.severity` * `detail.insider_threat.discovery_document_ids` * `detail.insider_threat.severity` * `finding_count` * `priority_analysis.priority_level` * `relevance_analysis.confidence` * `relevance_analysis.relevance_level` * `relevance_analysis.relevant` * `severity_analysis.severity_level` * `state` Examples: * `detail.detail_type = "initial_access_broker"` * `detail.detail_type != "data_leak"` * `detail.insider_threat.severity = "HIGH"` * `audit.create_time >= "2026-04-03T00:00:00Z" AND audit.create_time < "2026-04-06T00:00:00Z"` * `state = "NEW" OR state = "TRIAGED"` * `severity_analysis.severity_level = "SEVERITY_LEVEL_CRITICAL"` |
| `params.orderBy` | `string` | No | Optional. Order by criteria in the csv format: "field1, field2 desc" or "field1, field2" or "field1 asc, field2". If a field is specified without `asc` or `desc`, ascending order is used by default. Supported fields for ordering are identical to those supported for filtering. Examples: * `audit.create_time desc` * `audit.update_time asc` * `audit.create_time desc, severity_analysis.severity_level desc` |
| `params.pageToken` | `string` | No | Optional. Page token to retrieve the next page of results. |
| `params.pageSize` | `integer` | No | Optional. Page size. Default to 100 alerts per page. Maximum is 1000 alerts per page. |

#### `projects.alerts.enumerateFacets()`

EnumerateAlertFacets returns the facets and the number of alerts that meet the filter criteria and have that value for each facet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent of the alerts. |
| `params.filter` | `string` | No | Optional. Filter on what alerts will be enumerated. |

#### `projects.alerts.falsePositive()`

Marks an alert as a false positive - FALSE_POSITIVE.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to mark as a false positive. Format: projects/{project}/alerts/{alert} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.alerts.notActionable()`

Marks an alert as not actionable - NOT_ACTIONABLE.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to mark as a not actionable. Format: projects/{project}/alerts/{alert} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.alerts.read()`

Marks an alert as read - READ.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to mark as read. Format: projects/{project}/alerts/{alert} |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.alerts.documents`

#### `projects.alerts.documents.get()`

Gets a specific document associated with an alert.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert document to get. Format: projects/{project}/alerts/{alert}/documents/{document} |

### `projects.configurations`

#### `projects.configurations.upsert()`

Creates or updates a configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent of the configuration. |
| `params.publishTime` | `string` | No | Optional. Time that the configuration should be considered to have been published. This is an advanced feature used when onboarding and bulk loading data from other systems. Do not set this field without consulting with the API team. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.configurations.get()`

Get a configuration by name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the configuration to get. Format: vaults/{vault}/configurations/{configuration} |

#### `projects.configurations.list()`

Get a list of configurations that meet the filter criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. Filter criteria. |
| `params.orderBy` | `string` | No | Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2". |
| `params.pageToken` | `string` | No | Optional. Page token. |
| `params.pageSize` | `integer` | No | Optional. Page size. |
| `params.parent` | `string` | Yes | Required. Parent of the configuration. Format: vaults/{vault} |

### `projects.configurations.revisions`

#### `projects.configurations.revisions.list()`

List configuration revisions that meet the filter criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. An AIP-160 filter string |
| `params.orderBy` | `string` | No | Optional. Specify ordering of response |
| `params.pageSize` | `integer` | No | Optional. Page Size |
| `params.pageToken` | `string` | No | Optional. A page token provided by the API |
| `params.parent` | `string` | Yes | Required. The name of the Configuration to retrieve Revisions for |

### `projects.findings`

#### `projects.findings.list()`

Get a list of findings that meet the filter criteria. The `parent` field in ListFindingsRequest should have the format: projects/{project}

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent of the findings. |
| `params.pageToken` | `string` | No | Optional. Page token. |
| `params.pageSize` | `integer` | No | Optional. Page size. |
| `params.filter` | `string` | No | Optional. Filter criteria. |
| `params.orderBy` | `string` | No | Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2". |

#### `projects.findings.get()`

Get a finding by name. The `name` field should have the format: `projects/{project}/findings/{finding}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the finding to get. |

#### `projects.findings.search()`

SearchFindings is a more powerful version of ListFindings that supports complex queries like "findings for alerts" using functions such as `has_alert` in the query string. The `parent` field in SearchFindingsRequest should have the format: projects/{project} Example to search for findings for a specific issue: `has_alert("name=\"projects/gti-12345/alerts/alert-12345\"")`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent of the findings. Format: vaults/{vault} |
| `params.query` | `string` | No | Optional. Query on what findings will be returned. This supports the same filter criteria as FindingService.ListFindings as well as the following relationship query `has_alert`. Example: - `has_alert("name=\"projects/gti-12345/alerts/alert-12345\"")` |
| `params.pageToken` | `string` | No | Optional. Page token. |
| `params.pageSize` | `integer` | No | Optional. Page size. |
| `params.orderBy` | `string` | No | Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2". |