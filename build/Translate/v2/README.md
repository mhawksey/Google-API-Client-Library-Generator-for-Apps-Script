# Google Cloud Translation API - Apps Script Client Library

Auto-generated client library for using the **Google Cloud Translation API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:54:10 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:54:10 GMT
- **Created:** Sun, 20 Jul 2025 16:56:18 GMT



---

## API Reference

### `detections`

#### `detections.list()`

Detects the language of text within a request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.q` | `string` | Yes | The input text upon which to perform language detection. Repeat this
parameter to perform language detection on multiple text inputs. |

#### `detections.detect()`

Detects the language of text within a request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `languages`

#### `languages.list()`

Returns a list of supported languages for translation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.target` | `string` | No | The language to use to return localized, human readable names of supported
languages. |
| `params.model` | `string` | No | The model type for which supported languages should be returned. |

### `translations`

#### `translations.list()`

Translates input text, returning translated text.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.cid` | `string` | No | The customization id for translate |
| `params.format` | `string` | No | The format of the source text, in either HTML (default) or plain-text. A
value of "html" indicates HTML and a value of "text" indicates plain-text. |
| `params.q` | `string` | Yes | The input text to translate. Repeat this parameter to perform translation
operations on multiple text inputs. |
| `params.source` | `string` | No | The language of the source text, set to one of the language codes listed in
Language Support. If the source language is not specified, the API will
attempt to identify the source language automatically and return it within
the response. |
| `params.target` | `string` | Yes | The language to use for translation of the input text, set to one of the
language codes listed in Language Support. |
| `params.model` | `string` | No | The `model` type requested for this translation. Valid values are
listed in public documentation. |

#### `translations.translate()`

Translates input text, returning translated text.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |