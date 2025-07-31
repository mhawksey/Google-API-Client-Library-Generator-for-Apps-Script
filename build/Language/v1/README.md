# Cloud Natural Language API - Apps Script Client Library

Auto-generated client library for using the **Cloud Natural Language API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:42:55 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:34:43 GMT
- **Created:** Sun, 20 Jul 2025 16:35:52 GMT



---

## API Reference

### `documents`

#### `documents.analyzeSentiment()`

Analyzes the sentiment of the provided text.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `documents.analyzeEntities()`

Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `documents.analyzeEntitySentiment()`

Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `documents.analyzeSyntax()`

Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `documents.classifyText()`

Classifies a document into categories.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `documents.moderateText()`

Moderates a document for harmful and sensitive categories.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `documents.annotateText()`

A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |