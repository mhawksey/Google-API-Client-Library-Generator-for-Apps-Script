# Blogger API - Apps Script Client Library

Auto-generated client library for using the **Blogger API (version: v3)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 00:25:28 GMT
- **Last Modified:** Thu, 01 Jan 2026 00:25:28 GMT
- **Created:** Sun, 20 Jul 2025 16:14:46 GMT



---

## API Reference

### `pages`

#### `pages.delete()`

Deletes a page by blog id and page id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.pageId` | `string` | Yes |  |
| `params.useTrash` | `boolean` | No | Move to Trash if possible |

#### `pages.revert()`

Reverts a published or scheduled page to draft state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |

#### `pages.patch()`

Patches a page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.revert` | `boolean` | No |  |
| `params.pageId` | `string` | Yes |  |
| `params.publish` | `boolean` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `pages.insert()`

Inserts a page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.isDraft` | `boolean` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `pages.get()`

Gets a page by blog id and page id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.view` | `string` | No |  |
| `params.pageId` | `string` | Yes |  |

#### `pages.publish()`

Publishes a page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |

#### `pages.update()`

Updates a page by blog id and page id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.revert` | `boolean` | No |  |
| `params.publish` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.pageId` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `pages.list()`

Lists pages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.view` | `string` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.maxResults` | `integer` | No |  |
| `params.status` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.fetchBodies` | `boolean` | No |  |

### `pageViews`

#### `pageViews.get()`

Gets page views by blog id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.range` | `string` | No |  |

### `blogUserInfos`

#### `blogUserInfos.get()`

Gets one blog and user info pair by blog id and user id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.maxPosts` | `integer` | No |  |
| `params.userId` | `string` | Yes |  |

### `posts`

#### `posts.patch()`

Patches a post.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxComments` | `integer` | No |  |
| `params.publish` | `boolean` | No |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.postId` | `string` | Yes |  |
| `params.fetchBody` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.revert` | `boolean` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `posts.update()`

Updates a post by blog id and post id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.postId` | `string` | Yes |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.maxComments` | `integer` | No |  |
| `params.revert` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.fetchBody` | `boolean` | No |  |
| `params.publish` | `boolean` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `posts.get()`

Gets a post by blog id and post id

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.maxComments` | `integer` | No |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.postId` | `string` | Yes |  |
| `params.fetchBody` | `boolean` | No |  |
| `params.view` | `string` | No |  |

#### `posts.search()`

Searches for posts matching given query terms in the specified blog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No |  |
| `params.q` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.fetchBodies` | `boolean` | No |  |

#### `posts.list()`

Lists posts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.maxResults` | `integer` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.endDate` | `string` | No |  |
| `params.view` | `string` | No |  |
| `params.status` | `string` | No |  |
| `params.labels` | `string` | No |  |
| `params.orderBy` | `string` | No |  |
| `params.sortOption` | `string` | No | Sort direction applied to post list. |
| `params.startDate` | `string` | No |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.fetchBodies` | `boolean` | No |  |

#### `posts.insert()`

Inserts a post.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.isDraft` | `boolean` | No |  |
| `params.fetchBody` | `boolean` | No |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `posts.revert()`

Reverts a published or scheduled post to draft state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |

#### `posts.publish()`

Publishes a post.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.publishDate` | `string` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |

#### `posts.getByPath()`

Gets a post by path.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxComments` | `integer` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.path` | `string` | Yes |  |
| `params.view` | `string` | No |  |

#### `posts.delete()`

Deletes a post by blog id and post id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.useTrash` | `boolean` | No | Move to Trash if possible |

### `comments`

#### `comments.approve()`

Marks a comment as not spam by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commentId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |

#### `comments.get()`

Gets a comment by id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.postId` | `string` | Yes |  |
| `params.view` | `string` | No |  |
| `params.commentId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |

#### `comments.list()`

Lists comments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endDate` | `string` | No |  |
| `params.postId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.startDate` | `string` | No |  |
| `params.status` | `string` | No |  |
| `params.view` | `string` | No |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.maxResults` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `comments.markAsSpam()`

Marks a comment as spam by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commentId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |

#### `comments.listByBlog()`

Lists comments by blog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fetchBodies` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.endDate` | `string` | No |  |
| `params.maxResults` | `integer` | No |  |
| `params.startDate` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.status` | `string` | No |  |

#### `comments.delete()`

Deletes a comment by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.postId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.commentId` | `string` | Yes |  |

#### `comments.removeContent()`

Removes the content of a comment by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commentId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |

### `users`

#### `users.get()`

Gets one user by user_id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes |  |

### `blogs`

#### `blogs.listByUser()`

Lists blogs by user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes |  |
| `params.view` | `string` | No |  |
| `params.status` | `string` | No | Default value of status is LIVE. |
| `params.role` | `string` | No |  |
| `params.fetchUserInfo` | `boolean` | No |  |

#### `blogs.getByUrl()`

Gets a blog by url.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.view` | `string` | No |  |
| `params.url` | `string` | Yes |  |

#### `blogs.get()`

Gets a blog by id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.maxPosts` | `integer` | No |  |
| `params.view` | `string` | No |  |

### `postUserInfos`

#### `postUserInfos.get()`

Gets one post and user info pair, by post_id and user_id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxComments` | `integer` | No |  |
| `params.postId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.userId` | `string` | Yes |  |

#### `postUserInfos.list()`

Lists post and user info pairs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.labels` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.endDate` | `string` | No |  |
| `params.orderBy` | `string` | No |  |
| `params.view` | `string` | No |  |
| `params.maxResults` | `integer` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.startDate` | `string` | No |  |
| `params.userId` | `string` | Yes |  |
| `params.status` | `string` | No |  |
| `params.fetchBodies` | `boolean` | No |  |