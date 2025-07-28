# Library Agent API - Apps Script Client Library

Auto-generated client library for using the **Library Agent API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:08:10 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:34:48 GMT
- **Created:** Sun, 20 Jul 2025 16:35:57 GMT



---

## API Reference

### `shelves`

#### `shelves.get()`

Gets a shelf. Returns NOT_FOUND if the shelf does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the shelf to retrieve. |

#### `shelves.list()`

Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer shelves than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListShelvesResponse.next_page_token returned from the previous call to `ListShelves` method. |

### `shelves.books`

#### `shelves.books.get()`

Gets a book. Returns NOT_FOUND if the book does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the book to retrieve. |

#### `shelves.books.list()`

Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the shelf whose books we'd like to list. |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer books than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListBooksResponse.next_page_token. returned from the previous call to `ListBooks` method. |

#### `shelves.books.borrow()`

Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the book to borrow. |

#### `shelves.books.return()`

Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the book to return. |