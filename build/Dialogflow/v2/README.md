# Dialogflow API - Apps Script Client Library

Auto-generated client library for using the **Dialogflow API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 30 Apr 2026 23:46:19 GMT
- **Last Modified:** Thu, 30 Apr 2026 23:46:19 GMT
- **Created:** Sun, 20 Jul 2025 16:31:31 GMT



---

## API Reference

### `projects`

#### `projects.getAgent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |

#### `projects.setAgent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.deleteAgent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |

### `projects.conversationProfiles`

#### `projects.conversationProfiles.setSuggestionFeatureConfig()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversationProfile` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.conversationProfiles.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.conversationProfiles.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.conversationProfiles.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.conversationProfiles.clearSuggestionFeatureConfig()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversationProfile` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.conversationProfiles.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.conversationProfiles.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.knowledgeBases`

#### `projects.knowledgeBases.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.filter` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.knowledgeBases.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.knowledgeBases.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.force` | `boolean` | No |  |

#### `projects.knowledgeBases.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.knowledgeBases.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.knowledgeBases.documents`

#### `projects.knowledgeBases.documents.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.knowledgeBases.documents.import()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.knowledgeBases.documents.export()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.knowledgeBases.documents.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.filter` | `string` | No |  |

#### `projects.knowledgeBases.documents.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.knowledgeBases.documents.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.knowledgeBases.documents.reload()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.knowledgeBases.documents.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.conversations`

#### `projects.conversations.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.filter` | `string` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.conversations.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.conversations.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.conversationId` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.conversations.complete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.conversations.suggestions`

#### `projects.conversations.suggestions.suggestConversationSummary()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversation` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.conversations.suggestions.generate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversation` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.conversations.suggestions.searchKnowledge()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversation` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.conversations.participants`

#### `projects.conversations.participants.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.conversations.participants.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.conversations.participants.analyzeContent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.participant` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.conversations.participants.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.conversations.participants.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.conversations.participants.suggestions`

#### `projects.conversations.participants.suggestions.suggestKnowledgeAssist()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.conversations.participants.suggestions.suggestArticles()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.conversations.participants.suggestions.suggestFaqAnswers()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.conversations.participants.suggestions.suggestSmartReplies()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.conversations.messages`

#### `projects.conversations.messages.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |

### `projects.operations`

#### `projects.operations.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.operations.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.returnPartialSuccess` | `boolean` | No |  |

#### `projects.operations.cancel()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.generators`

#### `projects.generators.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.generatorId` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.generators.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |

### `projects.agent`

#### `projects.agent.export()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.import()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.train()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.updateFulfillment()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.search()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.agent.restore()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.getValidationResult()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.languageCode` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.agent.getFulfillment()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.agent.intents`

#### `projects.agent.intents.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.languageCode` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.intentView` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.intents.batchUpdate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.intents.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.intentView` | `string` | No |  |
| `params.languageCode` | `string` | No |  |

#### `projects.agent.intents.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.agent.intents.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.intentView` | `string` | No |  |
| `params.languageCode` | `string` | No |  |

#### `projects.agent.intents.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.intentView` | `string` | No |  |
| `params.languageCode` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.intents.batchDelete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.agent.versions`

#### `projects.agent.versions.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.versions.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.agent.versions.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.agent.versions.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.agent.versions.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.agent.knowledgeBases`

#### `projects.agent.knowledgeBases.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.agent.knowledgeBases.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.knowledgeBases.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.filter` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.agent.knowledgeBases.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.knowledgeBases.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.force` | `boolean` | No |  |

### `projects.agent.knowledgeBases.documents`

#### `projects.agent.knowledgeBases.documents.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.agent.knowledgeBases.documents.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.filter` | `string` | No |  |

#### `projects.agent.knowledgeBases.documents.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.knowledgeBases.documents.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.knowledgeBases.documents.reload()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.knowledgeBases.documents.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.agent.environments`

#### `projects.agent.environments.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.agent.environments.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.agent.environments.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.allowLoadToDraftAndDiscardChanges` | `boolean` | No |  |
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.environments.getHistory()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.agent.environments.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.environmentId` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.environments.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.agent.environments.users`

### `projects.agent.environments.users.sessions`

#### `projects.agent.environments.users.sessions.deleteContexts()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |

#### `projects.agent.environments.users.sessions.detectIntent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.agent.environments.users.sessions.contexts`

#### `projects.agent.environments.users.sessions.contexts.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.agent.environments.users.sessions.contexts.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.agent.environments.users.sessions.contexts.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.environments.users.sessions.contexts.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.environments.users.sessions.contexts.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.agent.environments.users.sessions.entityTypes`

#### `projects.agent.environments.users.sessions.entityTypes.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |

#### `projects.agent.environments.users.sessions.entityTypes.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.environments.users.sessions.entityTypes.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.agent.environments.users.sessions.entityTypes.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.agent.environments.users.sessions.entityTypes.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.agent.environments.intents`

#### `projects.agent.environments.intents.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.intentView` | `string` | No |  |
| `params.languageCode` | `string` | No |  |

### `projects.agent.sessions`

#### `projects.agent.sessions.detectIntent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.sessions.deleteContexts()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |

### `projects.agent.sessions.contexts`

#### `projects.agent.sessions.contexts.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.agent.sessions.contexts.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.sessions.contexts.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.agent.sessions.contexts.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.agent.sessions.contexts.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.agent.sessions.entityTypes`

#### `projects.agent.sessions.entityTypes.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.agent.sessions.entityTypes.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.sessions.entityTypes.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.agent.sessions.entityTypes.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.agent.sessions.entityTypes.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.agent.entityTypes`

#### `projects.agent.entityTypes.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.languageCode` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.entityTypes.batchUpdate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.entityTypes.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.languageCode` | `string` | No |  |
| `params.name` | `string` | Yes |  |

#### `projects.agent.entityTypes.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.agent.entityTypes.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.languageCode` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.agent.entityTypes.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.languageCode` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.entityTypes.batchDelete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.agent.entityTypes.entities`

#### `projects.agent.entityTypes.entities.batchUpdate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.entityTypes.entities.batchCreate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.agent.entityTypes.entities.batchDelete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.suggestions`

#### `projects.suggestions.generateStatelessSummary()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.suggestions.searchKnowledge()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations`

#### `projects.locations.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.setAgent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.getEncryptionSpec()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.extraLocationTypes` | `string` | No |  |
| `params.filter` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |

#### `projects.locations.getAgent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |

#### `projects.locations.deleteAgent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |

### `projects.locations.generators`

#### `projects.locations.generators.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.generators.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.generatorId` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.generators.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.locations.generators.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.generators.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.generators.evaluations`

#### `projects.locations.generators.evaluations.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.generators.evaluations.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.generators.evaluations.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.locations.generators.evaluations.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.conversationProfiles`

#### `projects.locations.conversationProfiles.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.conversationProfiles.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.conversationProfiles.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversationProfiles.clearSuggestionFeatureConfig()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversationProfile` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversationProfiles.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversationProfiles.setSuggestionFeatureConfig()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversationProfile` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversationProfiles.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.knowledgeBases`

#### `projects.locations.knowledgeBases.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.filter` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.locations.knowledgeBases.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.knowledgeBases.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.force` | `boolean` | No |  |

#### `projects.locations.knowledgeBases.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.knowledgeBases.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.knowledgeBases.documents`

#### `projects.locations.knowledgeBases.documents.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.knowledgeBases.documents.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.knowledgeBases.documents.reload()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.knowledgeBases.documents.import()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.knowledgeBases.documents.export()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.knowledgeBases.documents.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.filter` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.locations.knowledgeBases.documents.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.knowledgeBases.documents.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.answerRecords`

#### `projects.locations.answerRecords.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.answerRecords.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.tools`

#### `projects.locations.tools.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.locations.tools.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tools.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.tools.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.tools.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.toolId` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.suggestions`

#### `projects.locations.suggestions.searchKnowledge()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.suggestions.generateStatelessSummary()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.sipTrunks`

#### `projects.locations.sipTrunks.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.sipTrunks.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.locations.sipTrunks.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.sipTrunks.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.sipTrunks.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.operations`

#### `projects.locations.operations.cancel()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.operations.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.operations.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No |  |
| `params.returnPartialSuccess` | `boolean` | No |  |
| `params.name` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

### `projects.locations.conversations`

#### `projects.locations.conversations.complete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversations.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.filter` | `string` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.conversations.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversationId` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversations.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.conversations.ingestContextReferences()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversation` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.conversations.suggestions`

#### `projects.locations.conversations.suggestions.suggestConversationSummary()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversation` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversations.suggestions.generate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversation` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversations.suggestions.searchKnowledge()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversation` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.conversations.participants`

#### `projects.locations.conversations.participants.analyzeContent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.participant` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversations.participants.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.conversations.participants.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversations.participants.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversations.participants.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.conversations.participants.suggestions`

#### `projects.locations.conversations.participants.suggestions.suggestKnowledgeAssist()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversations.participants.suggestions.suggestArticles()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversations.participants.suggestions.suggestFaqAnswers()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversations.participants.suggestions.suggestSmartReplies()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.conversations.messages`

#### `projects.locations.conversations.messages.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |

### `projects.locations.statelessSuggestion`

#### `projects.locations.statelessSuggestion.generate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.conversationDatasets`

#### `projects.locations.conversationDatasets.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.locations.conversationDatasets.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.conversationDatasets.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.conversationDatasets.importConversationData()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversationDatasets.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.conversationModels`

#### `projects.locations.conversationModels.deploy()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversationModels.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversationModels.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.conversationModels.undeploy()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.conversationModels.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.conversationModels.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

### `projects.locations.conversationModels.evaluations`

#### `projects.locations.conversationModels.evaluations.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.locations.conversationModels.evaluations.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.conversationModels.evaluations.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.encryptionSpec`

#### `projects.locations.encryptionSpec.initialize()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agent`

#### `projects.locations.agent.getFulfillment()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agent.restore()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.getValidationResult()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.languageCode` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.locations.agent.train()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.updateFulfillment()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.search()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.locations.agent.export()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.import()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agent.intents`

#### `projects.locations.agent.intents.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agent.intents.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.languageCode` | `string` | No |  |
| `params.intentView` | `string` | No |  |

#### `projects.locations.agent.intents.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.languageCode` | `string` | No |  |
| `params.intentView` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.intents.batchDelete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.intents.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.languageCode` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.intentView` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.intents.batchUpdate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.intents.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.intentView` | `string` | No |  |
| `params.languageCode` | `string` | No |  |
| `params.name` | `string` | Yes |  |

### `projects.locations.agent.versions`

#### `projects.locations.agent.versions.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agent.versions.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agent.versions.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.versions.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.versions.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.agent.environments`

#### `projects.locations.agent.environments.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environmentId` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.environments.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agent.environments.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agent.environments.getHistory()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.locations.agent.environments.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.locations.agent.environments.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.allowLoadToDraftAndDiscardChanges` | `boolean` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agent.environments.users`

### `projects.locations.agent.environments.users.sessions`

#### `projects.locations.agent.environments.users.sessions.detectIntent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.environments.users.sessions.deleteContexts()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |

### `projects.locations.agent.environments.users.sessions.contexts`

#### `projects.locations.agent.environments.users.sessions.contexts.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.environments.users.sessions.contexts.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agent.environments.users.sessions.contexts.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agent.environments.users.sessions.contexts.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agent.environments.users.sessions.contexts.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agent.environments.users.sessions.entityTypes`

#### `projects.locations.agent.environments.users.sessions.entityTypes.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agent.environments.users.sessions.entityTypes.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.environments.users.sessions.entityTypes.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.locations.agent.environments.users.sessions.entityTypes.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.environments.users.sessions.entityTypes.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.agent.environments.intents`

#### `projects.locations.agent.environments.intents.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.languageCode` | `string` | No |  |
| `params.intentView` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

### `projects.locations.agent.sessions`

#### `projects.locations.agent.sessions.deleteContexts()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |

#### `projects.locations.agent.sessions.detectIntent()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agent.sessions.contexts`

#### `projects.locations.agent.sessions.contexts.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agent.sessions.contexts.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.sessions.contexts.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |

#### `projects.locations.agent.sessions.contexts.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.sessions.contexts.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.agent.sessions.entityTypes`

#### `projects.locations.agent.sessions.entityTypes.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agent.sessions.entityTypes.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.sessions.entityTypes.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.agent.sessions.entityTypes.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.sessions.entityTypes.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.agent.entityTypes`

#### `projects.locations.agent.entityTypes.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.agent.entityTypes.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.languageCode` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.locations.agent.entityTypes.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.languageCode` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.entityTypes.batchDelete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.entityTypes.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.languageCode` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.entityTypes.batchUpdate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.entityTypes.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.languageCode` | `string` | No |  |
| `params.name` | `string` | Yes |  |

### `projects.locations.agent.entityTypes.entities`

#### `projects.locations.agent.entityTypes.entities.batchDelete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.entityTypes.entities.batchCreate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agent.entityTypes.entities.batchUpdate()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.answerRecords`

#### `projects.answerRecords.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |

#### `projects.answerRecords.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.conversationDatasets`

#### `projects.conversationDatasets.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

#### `projects.conversationDatasets.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.conversationDatasets.importConversationData()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.conversationModels`

#### `projects.conversationModels.deploy()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.conversationModels.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.conversationModels.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.conversationModels.undeploy()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.conversationModels.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.conversationModels.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

### `projects.conversationModels.evaluations`

#### `projects.conversationModels.evaluations.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.conversationModels.evaluations.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |