# Blogger API - Apps Script Client Library

Auto-generated client library for using the **Blogger API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 19:54:48 GMT
- **Last Modified:** Mon, 04 Aug 2025 19:54:48 GMT
- **Created:** Sun, 20 Jul 2025 16:14:43 GMT



---

## API Reference

### `blogs`

#### `blogs.get()`

Gets a blog by id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |

#### `blogs.list()`

Lists blogs by user id, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes |  |

### `comments`

#### `comments.get()`

Gets a comment by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.commentId` | `string` | Yes |  |

#### `comments.list()`

Lists comments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.startDate` | `string` | No |  |
| `params.maxResults` | `integer` | No |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.pageToken` | `string` | No |  |

### `pages`

#### `pages.get()`

Gets a page by blog id and page id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.pageId` | `string` | Yes |  |

#### `pages.list()`

Lists pages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.fetchBodies` | `boolean` | No |  |

### `posts`

#### `posts.get()`

Gets a post by blog id and post id

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |

#### `posts.list()`

Lists posts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.maxResults` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.startDate` | `string` | No |  |

### `users`

#### `users.get()`

Gets a user by user id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes |  |