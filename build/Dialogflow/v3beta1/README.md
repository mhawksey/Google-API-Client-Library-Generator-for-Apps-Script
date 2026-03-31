# Dialogflow API - Apps Script Client Library

Auto-generated client library for using the **Dialogflow API (version: v3beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 31 Mar 2026 23:35:18 GMT
- **Last Modified:** Sun, 01 Mar 2026 00:42:35 GMT
- **Created:** Sun, 20 Jul 2025 16:31:28 GMT



---

## API Reference

### `projects`

### `projects.operations`

#### `projects.operations.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.returnPartialSuccess` | `boolean` | No |  |

#### `projects.operations.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.operations.cancel()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations`

#### `projects.locations.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.extraLocationTypes` | `string` | No |  |

#### `projects.locations.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.operations`

#### `projects.locations.operations.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.returnPartialSuccess` | `boolean` | No |  |

#### `projects.locations.operations.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.operations.cancel()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.securitySettings`

#### `projects.locations.securitySettings.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.securitySettings.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.securitySettings.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.securitySettings.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.securitySettings.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.agents`

#### `projects.locations.agents.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.export()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.restore()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.validate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.getValidationResult()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |

#### `projects.locations.agents.getGenerativeSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |

#### `projects.locations.agents.updateGenerativeSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.flows`

#### `projects.locations.agents.flows.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.force` | `boolean` | No |  |

#### `projects.locations.agents.flows.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.languageCode` | `string` | No |  |

#### `projects.locations.agents.flows.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |

#### `projects.locations.agents.flows.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.languageCode` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.train()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.validate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.getValidationResult()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |

#### `projects.locations.agents.flows.import()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.export()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.flows.pages`

#### `projects.locations.agents.flows.pages.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.flows.pages.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |

#### `projects.locations.agents.flows.pages.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.pages.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.pages.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.force` | `boolean` | No |  |

### `projects.locations.agents.flows.transitionRouteGroups`

#### `projects.locations.agents.flows.transitionRouteGroups.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.languageCode` | `string` | No |  |

#### `projects.locations.agents.flows.transitionRouteGroups.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |

#### `projects.locations.agents.flows.transitionRouteGroups.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.transitionRouteGroups.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.languageCode` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.transitionRouteGroups.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.force` | `boolean` | No |  |

### `projects.locations.agents.flows.versions`

#### `projects.locations.agents.flows.versions.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.flows.versions.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.flows.versions.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.versions.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.versions.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.flows.versions.load()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.versions.compareVersions()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.baseVersion` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.changelogs`

#### `projects.locations.agents.changelogs.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.changelogs.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.agents.intents`

#### `projects.locations.agents.intents.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |
| `params.intentView` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.intents.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |

#### `projects.locations.agents.intents.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.intents.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.intents.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.intents.import()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.intents.export()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.entityTypes`

#### `projects.locations.agents.entityTypes.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |

#### `projects.locations.agents.entityTypes.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.entityTypes.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.entityTypes.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.force` | `boolean` | No |  |

#### `projects.locations.agents.entityTypes.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.entityTypes.export()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.entityTypes.import()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.sessions`

#### `projects.locations.agents.sessions.detectIntent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.sessions.serverStreamingDetectIntent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.sessions.matchIntent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.sessions.fulfillIntent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.sessions.submitAnswerFeedback()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.sessions.entityTypes`

#### `projects.locations.agents.sessions.entityTypes.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.sessions.entityTypes.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.sessions.entityTypes.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.sessions.entityTypes.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.sessions.entityTypes.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.agents.transitionRouteGroups`

#### `projects.locations.agents.transitionRouteGroups.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.languageCode` | `string` | No |  |

#### `projects.locations.agents.transitionRouteGroups.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |

#### `projects.locations.agents.transitionRouteGroups.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.transitionRouteGroups.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.languageCode` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.transitionRouteGroups.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.force` | `boolean` | No |  |

### `projects.locations.agents.testCases`

#### `projects.locations.agents.testCases.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.view` | `string` | No |  |

#### `projects.locations.agents.testCases.batchDelete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.testCases.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.testCases.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.testCases.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.testCases.run()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.testCases.batchRun()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.testCases.calculateCoverage()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.agent` | `string` | Yes |  |
| `params.type` | `string` | No |  |

#### `projects.locations.agents.testCases.import()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.testCases.export()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.testCases.results`

#### `projects.locations.agents.testCases.results.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.filter` | `string` | No |  |

#### `projects.locations.agents.testCases.results.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.agents.webhooks`

#### `projects.locations.agents.webhooks.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.webhooks.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.webhooks.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.webhooks.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.webhooks.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.force` | `boolean` | No |  |

### `projects.locations.agents.environments`

#### `projects.locations.agents.environments.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.environments.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.environments.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.environments.lookupEnvironmentHistory()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.environments.runContinuousTest()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environment` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.deployFlow()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environment` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.environments.sessions`

#### `projects.locations.agents.environments.sessions.detectIntent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.sessions.serverStreamingDetectIntent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.sessions.matchIntent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.sessions.fulfillIntent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.environments.sessions.entityTypes`

#### `projects.locations.agents.environments.sessions.entityTypes.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.environments.sessions.entityTypes.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.environments.sessions.entityTypes.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.sessions.entityTypes.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.sessions.entityTypes.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.agents.environments.continuousTestResults`

#### `projects.locations.agents.environments.continuousTestResults.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

### `projects.locations.agents.environments.deployments`

#### `projects.locations.agents.environments.deployments.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.environments.deployments.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.agents.environments.experiments`

#### `projects.locations.agents.environments.experiments.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.environments.experiments.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.environments.experiments.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.experiments.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.experiments.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.environments.experiments.start()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.experiments.stop()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.conversations`

#### `projects.locations.agents.conversations.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.conversations.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.conversations.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.agents.generators`

#### `projects.locations.agents.generators.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.generators.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |

#### `projects.locations.agents.generators.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.generators.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.generators.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.force` | `boolean` | No |  |

### `projects.locations.agents.playbooks`

#### `projects.locations.agents.playbooks.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.playbooks.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.playbooks.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.playbooks.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.playbooks.export()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.playbooks.import()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.playbooks.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.playbooks.examples`

#### `projects.locations.agents.playbooks.examples.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.playbooks.examples.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.playbooks.examples.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.languageCode` | `string` | No |  |

#### `projects.locations.agents.playbooks.examples.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.playbooks.examples.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.playbooks.versions`

#### `projects.locations.agents.playbooks.versions.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.playbooks.versions.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.playbooks.versions.restore()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.playbooks.versions.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.playbooks.versions.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.agents.tools`

#### `projects.locations.agents.tools.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.tools.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.tools.export()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.tools.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.tools.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.tools.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.force` | `boolean` | No |  |

### `projects.locations.agents.tools.versions`

#### `projects.locations.agents.tools.versions.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agents.tools.versions.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.tools.versions.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agents.tools.versions.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.force` | `boolean` | No |  |

#### `projects.locations.agents.tools.versions.restore()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |