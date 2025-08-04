# Knowledge Graph Search API - Apps Script Client Library

Auto-generated client library for using the **Knowledge Graph Search API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:24:56 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:24:56 GMT
- **Created:** Sun, 20 Jul 2025 16:35:44 GMT



---

## API Reference

### `entities`

#### `entities.search()`

Searches Knowledge Graph for entities that match the constraints. A list of matched entities will be returned in response, which will be in JSON-LD format and compatible with http://schema.org

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.query` | `string` | No | The literal query string for search. |
| `params.ids` | `string` | No | The list of entity id to be used for search instead of query string. To specify multiple ids in the HTTP request, repeat the parameter in the URL as in ...?ids=A&ids=B |
| `params.languages` | `string` | No | The list of language codes (defined in ISO 693) to run the query with, e.g. 'en'. |
| `params.types` | `string` | No | Restricts returned entities with these types, e.g. Person (as defined in http://schema.org/Person). If multiple types are specified, returned entities will contain one or more of these types. |
| `params.indent` | `boolean` | No | Enables indenting of json results. |
| `params.prefix` | `boolean` | No | Enables prefix match against names and aliases of entities |
| `params.limit` | `integer` | No | Limits the number of entities to be returned. |