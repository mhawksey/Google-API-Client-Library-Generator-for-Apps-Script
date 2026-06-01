# Security Command Center API - Apps Script Client Library

Auto-generated client library for using the **Security Command Center API (version: v1beta2)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 01 Jun 2026 00:15:17 GMT
- **Last Modified:** Mon, 01 Jun 2026 00:15:17 GMT
- **Created:** Sun, 20 Jul 2025 16:53:50 GMT



---

## API Reference

### `organizations`

#### `organizations.getSecurityCenterSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.getSubscription()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.getContainerThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.updateContainerThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getEventThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.updateEventThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

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

#### `organizations.updateVirtualMachineThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getRapidVulnerabilityDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.updateRapidVulnerabilityDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getWebSecurityScannerSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.updateWebSecurityScannerSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.containerThreatDetectionSettings`

#### `organizations.containerThreatDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

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

### `organizations.virtualMachineThreatDetectionSettings`

#### `organizations.virtualMachineThreatDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `organizations.rapidVulnerabilityDetectionSettings`

#### `organizations.rapidVulnerabilityDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `organizations.webSecurityScannerSettings`

#### `organizations.webSecurityScannerSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `folders`

#### `folders.getSecurityCenterSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.getContainerThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.updateContainerThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.getEventThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.updateEventThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.getSecurityHealthAnalyticsSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.updateSecurityHealthAnalyticsSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.getVirtualMachineThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.updateVirtualMachineThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
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

#### `folders.getWebSecurityScannerSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `folders.updateWebSecurityScannerSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `folders.containerThreatDetectionSettings`

#### `folders.containerThreatDetectionSettings.calculate()`
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

### `folders.securityHealthAnalyticsSettings`

#### `folders.securityHealthAnalyticsSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `folders.virtualMachineThreatDetectionSettings`

#### `folders.virtualMachineThreatDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `folders.rapidVulnerabilityDetectionSettings`

#### `folders.rapidVulnerabilityDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `folders.webSecurityScannerSettings`

#### `folders.webSecurityScannerSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `projects`

#### `projects.getSecurityCenterSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.getContainerThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.updateContainerThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.getEventThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.updateEventThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.getSecurityHealthAnalyticsSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

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

#### `projects.getWebSecurityScannerSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.updateWebSecurityScannerSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations`

### `projects.locations.clusters`

#### `projects.locations.clusters.getContainerThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.clusters.updateContainerThreatDetectionSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.clusters.containerThreatDetectionSettings`

#### `projects.locations.clusters.containerThreatDetectionSettings.calculate()`
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

### `projects.eventThreatDetectionSettings`

#### `projects.eventThreatDetectionSettings.calculate()`
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

### `projects.virtualMachineThreatDetectionSettings`

#### `projects.virtualMachineThreatDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |

### `projects.rapidVulnerabilityDetectionSettings`

#### `projects.rapidVulnerabilityDetectionSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.webSecurityScannerSettings`

#### `projects.webSecurityScannerSettings.calculate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.showEligibleModulesOnly` | `boolean` | No |  |