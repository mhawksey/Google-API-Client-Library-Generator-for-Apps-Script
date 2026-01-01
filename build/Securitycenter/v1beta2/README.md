# Security Command Center API - Apps Script Client Library

Auto-generated client library for using the **Security Command Center API (version: v1beta2)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 01:07:12 GMT
- **Last Modified:** Thu, 01 Jan 2026 01:07:12 GMT
- **Created:** Sun, 20 Jul 2025 16:53:50 GMT



---

## API Reference

### `folders`

#### `folders.updateContainerThreatDetectionSettings()`

Update the ContainerThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.name` | `string` | Yes | Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.getVirtualMachineThreatDetectionSettings()`

Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |

#### `folders.getEventThreatDetectionSettings()`

Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |

#### `folders.getContainerThreatDetectionSettings()`

Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |

#### `folders.getRapidVulnerabilityDetectionSettings()`

Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings |

#### `folders.updateWebSecurityScannerSettings()`

Update the WebSecurityScannerSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.name` | `string` | Yes | Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.updateVirtualMachineThreatDetectionSettings()`

Update the VirtualMachineThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.getSecurityCenterSettings()`

Get the SecurityCenterSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings |

#### `folders.getSecurityHealthAnalyticsSettings()`

Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings |

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

#### `folders.updateEventThreatDetectionSettings()`

Update the EventThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.getWebSecurityScannerSettings()`

Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |

### `folders.containerThreatDetectionSettings`

#### `folders.containerThreatDetectionSettings.calculate()`

Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |

### `folders.webSecurityScannerSettings`

#### `folders.webSecurityScannerSettings.calculate()`

Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |
| `params.name` | `string` | Yes | Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |

### `folders.eventThreatDetectionSettings`

#### `folders.eventThreatDetectionSettings.calculate()`

Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |

### `folders.securityHealthAnalyticsSettings`

#### `folders.securityHealthAnalyticsSettings.calculate()`

Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings |
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |

### `folders.virtualMachineThreatDetectionSettings`

#### `folders.virtualMachineThreatDetectionSettings.calculate()`

Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |
| `params.name` | `string` | Yes | Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |

### `folders.rapidVulnerabilityDetectionSettings`

#### `folders.rapidVulnerabilityDetectionSettings.calculate()`

Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings |

### `organizations`

#### `organizations.updateVirtualMachineThreatDetectionSettings()`

Update the VirtualMachineThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

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

#### `organizations.updateWebSecurityScannerSettings()`

Update the WebSecurityScannerSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.name` | `string` | Yes | Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getVirtualMachineThreatDetectionSettings()`

Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |

#### `organizations.getRapidVulnerabilityDetectionSettings()`

Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings |

#### `organizations.getSubscription()`

Get the Subscription resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subscription to retrieve. Format: organizations/{organization}/subscription |

#### `organizations.updateRapidVulnerabilityDetectionSettings()`

Update the RapidVulnerabilityDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.updateEventThreatDetectionSettings()`

Update the EventThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.updateSecurityHealthAnalyticsSettings()`

Update the SecurityHealthAnalyticsSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.name` | `string` | Yes | Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getContainerThreatDetectionSettings()`

Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |

#### `organizations.getSecurityCenterSettings()`

Get the SecurityCenterSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings |

#### `organizations.getSecurityHealthAnalyticsSettings()`

Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings |

#### `organizations.getEventThreatDetectionSettings()`

Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |

### `organizations.eventThreatDetectionSettings`

#### `organizations.eventThreatDetectionSettings.calculate()`

Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |
| `params.name` | `string` | Yes | Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |

### `organizations.securityHealthAnalyticsSettings`

#### `organizations.securityHealthAnalyticsSettings.calculate()`

Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |
| `params.name` | `string` | Yes | Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings |

### `organizations.rapidVulnerabilityDetectionSettings`

#### `organizations.rapidVulnerabilityDetectionSettings.calculate()`

Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings |

### `organizations.webSecurityScannerSettings`

#### `organizations.webSecurityScannerSettings.calculate()`

Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |

### `organizations.containerThreatDetectionSettings`

#### `organizations.containerThreatDetectionSettings.calculate()`

Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |
| `params.name` | `string` | Yes | Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |

### `organizations.virtualMachineThreatDetectionSettings`

#### `organizations.virtualMachineThreatDetectionSettings.calculate()`

Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |

### `projects`

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

#### `projects.getContainerThreatDetectionSettings()`

Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |

#### `projects.updateEventThreatDetectionSettings()`

Update the EventThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.name` | `string` | Yes | Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.getEventThreatDetectionSettings()`

Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |

#### `projects.getSecurityHealthAnalyticsSettings()`

Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings |

#### `projects.updateContainerThreatDetectionSettings()`

Update the ContainerThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

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

#### `projects.updateVirtualMachineThreatDetectionSettings()`

Update the VirtualMachineThreatDetectionSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.getRapidVulnerabilityDetectionSettings()`

Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings |

#### `projects.updateWebSecurityScannerSettings()`

Update the WebSecurityScannerSettings resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.getWebSecurityScannerSettings()`

Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |

### `projects.webSecurityScannerSettings`

#### `projects.webSecurityScannerSettings.calculate()`

Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings |
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |

### `projects.rapidVulnerabilityDetectionSettings`

#### `projects.rapidVulnerabilityDetectionSettings.calculate()`

Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings |

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
| `params.name` | `string` | Yes | Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.clusters.containerThreatDetectionSettings`

#### `projects.locations.clusters.containerThreatDetectionSettings.calculate()`

Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |
| `params.name` | `string` | Yes | Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |

### `projects.containerThreatDetectionSettings`

#### `projects.containerThreatDetectionSettings.calculate()`

Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |
| `params.name` | `string` | Yes | Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings |

### `projects.virtualMachineThreatDetectionSettings`

#### `projects.virtualMachineThreatDetectionSettings.calculate()`

Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |
| `params.name` | `string` | Yes | Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings |

### `projects.securityHealthAnalyticsSettings`

#### `projects.securityHealthAnalyticsSettings.calculate()`

Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings |
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |

### `projects.eventThreatDetectionSettings`

#### `projects.eventThreatDetectionSettings.calculate()`

Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showEligibleModulesOnly` | `boolean` | No | Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. |
| `params.name` | `string` | Yes | Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings |