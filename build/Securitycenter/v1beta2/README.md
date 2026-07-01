# Security Command Center API - Apps Script Client Library

Auto-generated client library for using the **Security Command Center API (version: v1beta2)** in Google Apps Script.

## Metadata

- **Last Checked:** Wed, 01 Jul 2026 00:16:41 GMT
- **Last Modified:** Wed, 01 Jul 2026 00:16:41 GMT
- **Created:** Sun, 20 Jul 2025 16:53:50 GMT



---

## API Reference

### `folders`

#### `folders.updateVirtualMachineThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.getRapidVulnerabilityDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.updateRapidVulnerabilityDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.getEventThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.getSecurityCenterSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.updateContainerThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.updateEventThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.updateWebSecurityScannerSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.getWebSecurityScannerSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.getContainerThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.getSecurityHealthAnalyticsSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.updateSecurityHealthAnalyticsSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.getVirtualMachineThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `folders.virtualMachineThreatDetectionSettings`

#### `folders.virtualMachineThreatDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `folders.containerThreatDetectionSettings`

#### `folders.containerThreatDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `folders.rapidVulnerabilityDetectionSettings`

#### `folders.rapidVulnerabilityDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `folders.securityHealthAnalyticsSettings`

#### `folders.securityHealthAnalyticsSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `folders.webSecurityScannerSettings`

#### `folders.webSecurityScannerSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `folders.eventThreatDetectionSettings`

#### `folders.eventThreatDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `projects`

#### `projects.updateVirtualMachineThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.getRapidVulnerabilityDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.updateRapidVulnerabilityDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.getEventThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.getSecurityCenterSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.updateContainerThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.getWebSecurityScannerSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.getContainerThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.updateEventThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.updateWebSecurityScannerSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.updateSecurityHealthAnalyticsSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.getVirtualMachineThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.getSecurityHealthAnalyticsSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.virtualMachineThreatDetectionSettings`

#### `projects.virtualMachineThreatDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `projects.locations`

### `projects.locations.clusters`

#### `projects.locations.clusters.updateContainerThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.clusters.getContainerThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.clusters.containerThreatDetectionSettings`

#### `projects.locations.clusters.containerThreatDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `projects.securityHealthAnalyticsSettings`

#### `projects.securityHealthAnalyticsSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `projects.webSecurityScannerSettings`

#### `projects.webSecurityScannerSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `projects.eventThreatDetectionSettings`

#### `projects.eventThreatDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `projects.containerThreatDetectionSettings`

#### `projects.containerThreatDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `projects.rapidVulnerabilityDetectionSettings`

#### `projects.rapidVulnerabilityDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `organizations`

#### `organizations.getRapidVulnerabilityDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.updateRapidVulnerabilityDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getSubscription()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.updateVirtualMachineThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getSecurityCenterSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.updateContainerThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getEventThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.updateWebSecurityScannerSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.updateEventThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getContainerThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.getWebSecurityScannerSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.getSecurityHealthAnalyticsSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.updateSecurityHealthAnalyticsSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getVirtualMachineThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `organizations.eventThreatDetectionSettings`

#### `organizations.eventThreatDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `organizations.securityHealthAnalyticsSettings`

#### `organizations.securityHealthAnalyticsSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `organizations.webSecurityScannerSettings`

#### `organizations.webSecurityScannerSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `organizations.containerThreatDetectionSettings`

#### `organizations.containerThreatDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `organizations.rapidVulnerabilityDetectionSettings`

#### `organizations.rapidVulnerabilityDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `organizations.virtualMachineThreatDetectionSettings`

#### `organizations.virtualMachineThreatDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |