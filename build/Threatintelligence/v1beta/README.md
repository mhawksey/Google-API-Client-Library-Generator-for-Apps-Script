# Threat Intelligence API - Apps Script Client Library

Auto-generated client library for using the **Threat Intelligence API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 31 Mar 2026 07:34:07 GMT
- **Last Modified:** Wed, 18 Mar 2026 22:10:07 GMT
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

### `projects.configurations`

#### `projects.configurations.get()`

Get a configuration by name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the configuration to get. Format: vaults/{vault}/configurations/{configuration} |

#### `projects.configurations.list()`

Get a list of configurations that meet the filter criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent of the configuration. Format: vaults/{vault} |
| `params.filter` | `string` | No | Optional. Filter criteria. |
| `params.orderBy` | `string` | No | Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2". |
| `params.pageToken` | `string` | No | Optional. Page token. |
| `params.pageSize` | `integer` | No | Optional. Page size. |

#### `projects.configurations.upsert()`

Creates or updates a configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent of the configuration. |
| `params.publishTime` | `string` | No | Optional. Time that the configuration should be considered to have been published. This is an advanced feature used when onboarding and bulk loading data from other systems. Do not set this field without consulting with the API team. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.configurations.revisions`

#### `projects.configurations.revisions.list()`

List configuration revisions that meet the filter criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the Configuration to retrieve Revisions for |
| `params.filter` | `string` | No | Optional. An AIP-160 filter string |
| `params.orderBy` | `string` | No | Optional. Specify ordering of response |
| `params.pageSize` | `integer` | No | Optional. Page Size |
| `params.pageToken` | `string` | No | Optional. A page token provided by the API |

### `projects.findings`

#### `projects.findings.get()`

Get a finding by name. The `name` field should have the format: `projects/{project}/findings/{finding}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the finding to get. |

#### `projects.findings.list()`

Get a list of findings that meet the filter criteria. The `parent` field in ListFindingsRequest should have the format: projects/{project}

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent of the findings. |
| `params.filter` | `string` | No | Optional. Filter criteria. |
| `params.orderBy` | `string` | No | Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2". |
| `params.pageToken` | `string` | No | Optional. Page token. |
| `params.pageSize` | `integer` | No | Optional. Page size. |

#### `projects.findings.search()`

SearchFindings is a more powerful version of ListFindings that supports complex queries like "findings for alerts" using functions such as `has_alert` in the query string. The `parent` field in SearchFindingsRequest should have the format: projects/{project} Example to search for findings for a specific issue: `has_alert("name=\"projects/gti-12345/alerts/alert-12345\"")`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent of the findings. Format: vaults/{vault} |
| `params.query` | `string` | No | Optional. Query on what findings will be returned. This supports the same filter criteria as FindingService.ListFindings as well as the following relationship query `has_alert`. Example: - `has_alert("name=\"projects/gti-12345/alerts/alert-12345\"")` |
| `params.orderBy` | `string` | No | Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2". |
| `params.pageToken` | `string` | No | Optional. Page token. |
| `params.pageSize` | `integer` | No | Optional. Page size. |

### `projects.alerts`

#### `projects.alerts.get()`

Get an alert by name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to get. Format: projects/{project}/alerts/{alert} |

#### `projects.alerts.list()`

Get a list of alerts that meet the filter criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent of the alerts. Format: projects/{project} |
| `params.filter` | `string` | No | Optional. Filter criteria. |
| `params.orderBy` | `string` | No | Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2". |
| `params.pageToken` | `string` | No | Optional. Page token. |
| `params.pageSize` | `integer` | No | Optional. Page size. |

#### `projects.alerts.enumerateFacets()`

EnumerateAlertFacets returns the facets and the number of alerts that meet the filter criteria and have that value for each facet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent of the alerts. |
| `params.filter` | `string` | No | Optional. Filter on what alerts will be enumerated. |

#### `projects.alerts.read()`

Marks an alert as read - READ.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to mark as read. Format: projects/{project}/alerts/{alert} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.alerts.triage()`

Marks an alert as triaged - TRIAGED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to mark as a triaged. Format: projects/{project}/alerts/{alert} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.alerts.escalate()`

Marks an alert as escalated - ESCALATED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to mark as escalated. Format: projects/{project}/alerts/{alert} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.alerts.resolve()`

Marks an alert to closed state - RESOLVED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to mark as resolved. Format: projects/{project}/alerts/{alert} |
| `params.requestBody` | `object` | Yes | The request body. |

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

#### `projects.alerts.benign()`

Marks an alert as benign - BENIGN.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to mark as a benign. Format: projects/{project}/alerts/{alert} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.alerts.trackExternally()`

Marks an alert as tracked externally - TRACKED_EXTERNALLY.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to mark as tracked externally. Format: projects/{project}/alerts/{alert} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.alerts.duplicate()`

Marks an alert as a duplicate of another alert. - DUPLICATE.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert to mark as a duplicate. Format: projects/{project}/alerts/{alert} |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.alerts.documents`

#### `projects.alerts.documents.get()`

Gets a specific document associated with an alert.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alert document to get. Format: projects/{project}/alerts/{alert}/documents/{document} |