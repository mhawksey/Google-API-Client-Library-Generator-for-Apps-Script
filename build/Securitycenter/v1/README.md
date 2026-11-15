# Security Command Center API - Apps Script Client Library

Auto-generated client library for using the **Security Command Center API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:53:35 GMT
- **Last Modified:** Sun, 15 Nov 2026 16:53:35 GMT
- **Created:** Sun, 20 Jul 2025 16:53:53 GMT



---

## API Reference

### `folders`

### `folders.bigQueryExports`

#### `folders.bigQueryExports.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |

#### `folders.bigQueryExports.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.bigQueryExports.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.bigQueryExports.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.bigQueryExports.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.bigQueryExportId` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `folders.securityHealthAnalyticsSettings`

### `folders.securityHealthAnalyticsSettings.effectiveCustomModules`

#### `folders.securityHealthAnalyticsSettings.effectiveCustomModules.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |

#### `folders.securityHealthAnalyticsSettings.effectiveCustomModules.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `folders.securityHealthAnalyticsSettings.customModules`

#### `folders.securityHealthAnalyticsSettings.customModules.listDescendant()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `folders.securityHealthAnalyticsSettings.customModules.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.securityHealthAnalyticsSettings.customModules.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.securityHealthAnalyticsSettings.customModules.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

#### `folders.securityHealthAnalyticsSettings.customModules.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.securityHealthAnalyticsSettings.customModules.simulate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.securityHealthAnalyticsSettings.customModules.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `folders.assets`

#### `folders.assets.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fieldMask` | `string` | No |  |
| `params.orderBy` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.readTime` | `string` | No |  |
| `params.filter` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.compareDuration` | `string` | No |  |

#### `folders.assets.group()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.assets.updateSecurityMarks()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.startTime` | `string` | No |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `folders.notificationConfigs`

#### `folders.notificationConfigs.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `folders.notificationConfigs.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.configId` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.notificationConfigs.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.notificationConfigs.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.notificationConfigs.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `folders.sources`

#### `folders.sources.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

### `folders.sources.findings`

#### `folders.sources.findings.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.sources.findings.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No |  |
| `params.fieldMask` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.compareDuration` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.orderBy` | `string` | No |  |
| `params.readTime` | `string` | No |  |

#### `folders.sources.findings.setMute()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.sources.findings.group()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.sources.findings.updateSecurityMarks()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.startTime` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.sources.findings.setState()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `folders.sources.findings.externalSystems`

#### `folders.sources.findings.externalSystems.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `folders.locations`

### `folders.locations.muteConfigs`

#### `folders.locations.muteConfigs.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.locations.muteConfigs.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.locations.muteConfigs.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `folders.findings`

#### `folders.findings.bulkMute()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `folders.eventThreatDetectionSettings`

#### `folders.eventThreatDetectionSettings.validateCustomModule()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `folders.eventThreatDetectionSettings.customModules`

#### `folders.eventThreatDetectionSettings.customModules.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.eventThreatDetectionSettings.customModules.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.eventThreatDetectionSettings.customModules.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.eventThreatDetectionSettings.customModules.listDescendant()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |

#### `folders.eventThreatDetectionSettings.customModules.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.eventThreatDetectionSettings.customModules.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |

### `folders.eventThreatDetectionSettings.effectiveCustomModules`

#### `folders.eventThreatDetectionSettings.effectiveCustomModules.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |

#### `folders.eventThreatDetectionSettings.effectiveCustomModules.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `folders.muteConfigs`

#### `folders.muteConfigs.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.muteConfigId` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.muteConfigs.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.muteConfigs.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.muteConfigs.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

#### `folders.muteConfigs.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects`

### `projects.securityHealthAnalyticsSettings`

### `projects.securityHealthAnalyticsSettings.customModules`

#### `projects.securityHealthAnalyticsSettings.customModules.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.securityHealthAnalyticsSettings.customModules.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.securityHealthAnalyticsSettings.customModules.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.securityHealthAnalyticsSettings.customModules.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |

#### `projects.securityHealthAnalyticsSettings.customModules.listDescendant()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.securityHealthAnalyticsSettings.customModules.simulate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.securityHealthAnalyticsSettings.customModules.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.securityHealthAnalyticsSettings.effectiveCustomModules`

#### `projects.securityHealthAnalyticsSettings.effectiveCustomModules.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.securityHealthAnalyticsSettings.effectiveCustomModules.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |

### `projects.eventThreatDetectionSettings`

#### `projects.eventThreatDetectionSettings.validateCustomModule()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.eventThreatDetectionSettings.customModules`

#### `projects.eventThreatDetectionSettings.customModules.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.eventThreatDetectionSettings.customModules.listDescendant()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.eventThreatDetectionSettings.customModules.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.eventThreatDetectionSettings.customModules.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.eventThreatDetectionSettings.customModules.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |

#### `projects.eventThreatDetectionSettings.customModules.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.eventThreatDetectionSettings.effectiveCustomModules`

#### `projects.eventThreatDetectionSettings.effectiveCustomModules.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.eventThreatDetectionSettings.effectiveCustomModules.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |

### `projects.assets`

#### `projects.assets.updateSecurityMarks()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.startTime` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.assets.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fieldMask` | `string` | No |  |
| `params.orderBy` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.compareDuration` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.readTime` | `string` | No |  |
| `params.filter` | `string` | No |  |

#### `projects.assets.group()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.findings`

#### `projects.findings.bulkMute()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.bigQueryExports`

#### `projects.bigQueryExports.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.bigQueryExports.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.bigQueryExports.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.bigQueryExports.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bigQueryExportId` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.bigQueryExports.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

### `projects.sources`

#### `projects.sources.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |

### `projects.sources.findings`

#### `projects.sources.findings.group()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.sources.findings.updateSecurityMarks()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.startTime` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.sources.findings.setMute()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.sources.findings.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.readTime` | `string` | No |  |
| `params.compareDuration` | `string` | No |  |
| `params.orderBy` | `string` | No |  |
| `params.fieldMask` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.filter` | `string` | No |  |

#### `projects.sources.findings.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.sources.findings.setState()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.sources.findings.externalSystems`

#### `projects.sources.findings.externalSystems.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.notificationConfigs`

#### `projects.notificationConfigs.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.configId` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.notificationConfigs.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.notificationConfigs.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.notificationConfigs.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.notificationConfigs.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

### `projects.locations`

### `projects.locations.muteConfigs`

#### `projects.locations.muteConfigs.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.muteConfigs.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.muteConfigs.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.muteConfigs`

#### `projects.muteConfigs.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.muteConfigs.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.muteConfigs.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.muteConfigId` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.muteConfigs.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.muteConfigs.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `organizations`

#### `organizations.getOrganizationSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.updateOrganizationSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.notificationConfigs`

#### `organizations.notificationConfigs.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.notificationConfigs.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |

#### `organizations.notificationConfigs.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.notificationConfigs.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.configId` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.notificationConfigs.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.muteConfigs`

#### `organizations.muteConfigs.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `organizations.muteConfigs.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.muteConfigs.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.muteConfigId` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.muteConfigs.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.muteConfigs.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `organizations.attackPaths`

#### `organizations.attackPaths.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |

### `organizations.findings`

#### `organizations.findings.bulkMute()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.simulations`

#### `organizations.simulations.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `organizations.simulations.attackExposureResults`

### `organizations.simulations.attackExposureResults.valuedResources`

#### `organizations.simulations.attackExposureResults.valuedResources.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.filter` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

### `organizations.simulations.attackExposureResults.attackPaths`

#### `organizations.simulations.attackExposureResults.attackPaths.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |

### `organizations.simulations.attackPaths`

#### `organizations.simulations.attackPaths.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.filter` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |

### `organizations.simulations.valuedResources`

#### `organizations.simulations.valuedResources.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.orderBy` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

#### `organizations.simulations.valuedResources.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `organizations.simulations.valuedResources.attackPaths`

#### `organizations.simulations.valuedResources.attackPaths.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.filter` | `string` | No |  |

### `organizations.operations`

#### `organizations.operations.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.operations.cancel()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.operations.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.returnPartialSuccess` | `boolean` | No |  |
| `params.name` | `string` | Yes |  |
| `params.filter` | `string` | No |  |
| `params.pageToken` | `string` | No |  |

#### `organizations.operations.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `organizations.locations`

### `organizations.locations.muteConfigs`

#### `organizations.locations.muteConfigs.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.locations.muteConfigs.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.locations.muteConfigs.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.eventThreatDetectionSettings`

#### `organizations.eventThreatDetectionSettings.validateCustomModule()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.eventThreatDetectionSettings.effectiveCustomModules`

#### `organizations.eventThreatDetectionSettings.effectiveCustomModules.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |

#### `organizations.eventThreatDetectionSettings.effectiveCustomModules.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `organizations.eventThreatDetectionSettings.customModules`

#### `organizations.eventThreatDetectionSettings.customModules.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.eventThreatDetectionSettings.customModules.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.eventThreatDetectionSettings.customModules.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.eventThreatDetectionSettings.customModules.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `organizations.eventThreatDetectionSettings.customModules.listDescendant()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |

#### `organizations.eventThreatDetectionSettings.customModules.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.securityHealthAnalyticsSettings`

### `organizations.securityHealthAnalyticsSettings.effectiveCustomModules`

#### `organizations.securityHealthAnalyticsSettings.effectiveCustomModules.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.securityHealthAnalyticsSettings.effectiveCustomModules.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

### `organizations.securityHealthAnalyticsSettings.customModules`

#### `organizations.securityHealthAnalyticsSettings.customModules.simulate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.securityHealthAnalyticsSettings.customModules.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |

#### `organizations.securityHealthAnalyticsSettings.customModules.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.securityHealthAnalyticsSettings.customModules.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.securityHealthAnalyticsSettings.customModules.listDescendant()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |

#### `organizations.securityHealthAnalyticsSettings.customModules.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.securityHealthAnalyticsSettings.customModules.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `organizations.assets`

#### `organizations.assets.updateSecurityMarks()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.startTime` | `string` | No |  |
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.assets.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.readTime` | `string` | No |  |
| `params.compareDuration` | `string` | No |  |
| `params.fieldMask` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.filter` | `string` | No |  |

#### `organizations.assets.group()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.assets.runDiscovery()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.resourceValueConfigs`

#### `organizations.resourceValueConfigs.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.resourceValueConfigs.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.resourceValueConfigs.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.resourceValueConfigs.batchCreate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.resourceValueConfigs.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |

### `organizations.bigQueryExports`

#### `organizations.bigQueryExports.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.bigQueryExportId` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.bigQueryExports.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.bigQueryExports.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `organizations.bigQueryExports.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.bigQueryExports.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `organizations.sources`

#### `organizations.sources.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |

#### `organizations.sources.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.testIamPermissions()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.getIamPolicy()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.sources.setIamPolicy()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.sources.findings`

#### `organizations.sources.findings.group()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.findings.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.readTime` | `string` | No |  |
| `params.fieldMask` | `string` | No |  |
| `params.orderBy` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.compareDuration` | `string` | No |  |
| `params.filter` | `string` | No |  |

#### `organizations.sources.findings.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.findingId` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.findings.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.findings.setState()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.findings.setMute()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.findings.updateSecurityMarks()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.startTime` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.sources.findings.externalSystems`

#### `organizations.sources.findings.externalSystems.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.valuedResources`

#### `organizations.valuedResources.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.filter` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |