# Cloud Natural Language API - Apps Script Client Library

Auto-generated client library for using the **Cloud Natural Language API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Fri, 01 May 2026 00:05:41 GMT
- **Last Modified:** Fri, 01 May 2026 00:05:41 GMT
- **Created:** Sun, 20 Jul 2025 16:35:54 GMT



---

## API Reference

### `documents`

#### `documents.classifyText()`

Classifies a document into categories.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `documents.analyzeSentiment()`

Analyzes the sentiment of the provided text.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `documents.analyzeEntities()`

Finds named entities (currently proper names and common nouns) in the text along with entity types, probability, mentions for each entity, and other properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `documents.annotateText()`

A convenience method that provides all features in one call.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `documents.moderateText()`

Moderates a document for harmful and sensitive categories.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |