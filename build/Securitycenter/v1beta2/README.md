# Security Command Center API - Apps Script Client Library

Auto-generated client library for using the **Security Command Center API (version: v1beta2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 01:16:20 GMT
- **Last Modified:** Sat, 01 Nov 2025 01:16:20 GMT
- **Created:** Sun, 20 Jul 2025 16:53:50 GMT



---

## API Reference

### `projects`

#### `projects.updateContainerThreatDetectionSettings()`

Update the ContainerThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.getWebSecurityScannerSettings()`

Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |

#### `projects.updateSecurityHealthAnalyticsSettings()`

Update the SecurityHealthAnalyticsSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.updateRapidVulnerabilityDetectionSettings()`

Update the RapidVulnerabilityDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.getEventThreatDetectionSettings()`

Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |

#### `projects.getRapidVulnerabilityDetectionSettings()`

Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings |

#### `projects.getSecurityHealthAnalyticsSettings()`

Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings |

#### `projects.updateVirtualMachineThreatDetectionSettings()`

Update the VirtualMachineThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.updateEventThreatDetectionSettings()`

Update the EventThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.name` | `string` | Yes | Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.getContainerThreatDetectionSettings()`

Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |

#### `projects.updateWebSecurityScannerSettings()`

Update the WebSecurityScannerSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.getVirtualMachineThreatDetectionSettings()`

Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |

#### `projects.getSecurityCenterSettings()`

Get the SecurityCenterSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings |

### `projects.eventThreatDetectionSettings`

#### `projects.eventThreatDetectionSettings.calculate()`

Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |
| `params.name` | `string` | Yes | Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |

### `projects.locations`

### `projects.locations.clusters`

#### `projects.locations.clusters.getContainerThreatDetectionSettings()`

Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |

#### `projects.locations.clusters.updateContainerThreatDetectionSettings()`

Update the ContainerThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.name` | `string` | Yes | Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.clusters.containerThreatDetectionSettings`

#### `projects.locations.clusters.containerThreatDetectionSettings.calculate()`

Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |

### `projects.webSecurityScannerSettings`

#### `projects.webSecurityScannerSettings.calculate()`

Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |
| `params.name` | `string` | Yes | Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |

### `projects.virtualMachineThreatDetectionSettings`

#### `projects.virtualMachineThreatDetectionSettings.calculate()`

Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |

### `projects.securityHealthAnalyticsSettings`

#### `projects.securityHealthAnalyticsSettings.calculate()`

Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |
| `params.name` | `string` | Yes | Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings |

### `projects.rapidVulnerabilityDetectionSettings`

#### `projects.rapidVulnerabilityDetectionSettings.calculate()`

Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings |

### `projects.containerThreatDetectionSettings`

#### `projects.containerThreatDetectionSettings.calculate()`

Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |
| `params.name` | `string` | Yes | Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |

### `organizations`

#### `organizations.updateRapidVulnerabilityDetectionSettings()`

Update the RapidVulnerabilityDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getEventThreatDetectionSettings()`

Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |

#### `organizations.updateEventThreatDetectionSettings()`

Update the EventThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.name` | `string` | Yes | Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getSecurityHealthAnalyticsSettings()`

Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings |

#### `organizations.getVirtualMachineThreatDetectionSettings()`

Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |

#### `organizations.updateWebSecurityScannerSettings()`

Update the WebSecurityScannerSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.name` | `string` | Yes | Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getSecurityCenterSettings()`

Get the SecurityCenterSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings |

#### `organizations.updateContainerThreatDetectionSettings()`

Update the ContainerThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getWebSecurityScannerSettings()`

Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |

#### `organizations.updateSecurityHealthAnalyticsSettings()`

Update the SecurityHealthAnalyticsSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getRapidVulnerabilityDetectionSettings()`

Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings |

#### `organizations.getContainerThreatDetectionSettings()`

Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |

#### `organizations.updateVirtualMachineThreatDetectionSettings()`

Update the VirtualMachineThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getSubscription()`

Get the Subscription resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subscription to retrieve. Format: organizations/{organization}/subscription |

### `organizations.webSecurityScannerSettings`

#### `organizations.webSecurityScannerSettings.calculate()`

Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |

### `organizations.rapidVulnerabilityDetectionSettings`

#### `organizations.rapidVulnerabilityDetectionSettings.calculate()`

Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings |

### `organizations.containerThreatDetectionSettings`

#### `organizations.containerThreatDetectionSettings.calculate()`

Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |

### `organizations.eventThreatDetectionSettings`

#### `organizations.eventThreatDetectionSettings.calculate()`

Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |

### `organizations.securityHealthAnalyticsSettings`

#### `organizations.securityHealthAnalyticsSettings.calculate()`

Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |
| `params.name` | `string` | Yes | Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings |

### `organizations.virtualMachineThreatDetectionSettings`

#### `organizations.virtualMachineThreatDetectionSettings.calculate()`

Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |

### `folders`

#### `folders.getSecurityHealthAnalyticsSettings()`

Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings |

#### `folders.updateContainerThreatDetectionSettings()`

Update the ContainerThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.name` | `string` | Yes | Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.getWebSecurityScannerSettings()`

Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |

#### `folders.updateRapidVulnerabilityDetectionSettings()`

Update the RapidVulnerabilityDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.name` | `string` | Yes | The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.updateSecurityHealthAnalyticsSettings()`

Update the SecurityHealthAnalyticsSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.name` | `string` | Yes | Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.getVirtualMachineThreatDetectionSettings()`

Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |

#### `folders.updateVirtualMachineThreatDetectionSettings()`

Update the VirtualMachineThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.name` | `string` | Yes | Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.getContainerThreatDetectionSettings()`

Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |

#### `folders.getEventThreatDetectionSettings()`

Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |

#### `folders.updateWebSecurityScannerSettings()`

Update the WebSecurityScannerSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.updateEventThreatDetectionSettings()`

Update the EventThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.name` | `string` | Yes | Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.getRapidVulnerabilityDetectionSettings()`

Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings |

#### `folders.getSecurityCenterSettings()`

Get the SecurityCenterSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings |

### `folders.virtualMachineThreatDetectionSettings`

#### `folders.virtualMachineThreatDetectionSettings.calculate()`

Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |

### `folders.rapidVulnerabilityDetectionSettings`

#### `folders.rapidVulnerabilityDetectionSettings.calculate()`

Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings |

### `folders.securityHealthAnalyticsSettings`

#### `folders.securityHealthAnalyticsSettings.calculate()`

Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings |
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |

### `folders.containerThreatDetectionSettings`

#### `folders.containerThreatDetectionSettings.calculate()`

Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |
| `params.name` | `string` | Yes | Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |

### `folders.webSecurityScannerSettings`

#### `folders.webSecurityScannerSettings.calculate()`

Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |

### `folders.eventThreatDetectionSettings`

#### `folders.eventThreatDetectionSettings.calculate()`

Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |
| `params.name` | `string` | Yes | Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |