# Blogger API - Apps Script Client Library

Auto-generated client library for using the **Blogger API (version: v3)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 00:25:01 GMT
- **Last Modified:** Sat, 01 Nov 2025 00:25:01 GMT
- **Created:** Sun, 20 Jul 2025 16:14:46 GMT



---

## API Reference

### `blogs`

#### `blogs.get()`

Gets a blog by id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxPosts` | `integer` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.view` | `string` | No |  |

#### `blogs.listByUser()`

Lists blogs by user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.role` | `string` | No |  |
| `params.userId` | `string` | Yes |  |
| `params.fetchUserInfo` | `boolean` | No |  |
| `params.status` | `string` | No | Default value of status is LIVE. |
| `params.view` | `string` | No |  |

#### `blogs.getByUrl()`

Gets a blog by url.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.url` | `string` | Yes |  |
| `params.view` | `string` | No |  |

### `postUserInfos`

#### `postUserInfos.get()`

Gets one post and user info pair, by post_id and user_id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.userId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.maxComments` | `integer` | No |  |

#### `postUserInfos.list()`

Lists post and user info pairs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.orderBy` | `string` | No |  |
| `params.status` | `string` | No |  |
| `params.endDate` | `string` | No |  |
| `params.labels` | `string` | No |  |
| `params.userId` | `string` | Yes |  |
| `params.view` | `string` | No |  |
| `params.startDate` | `string` | No |  |
| `params.maxResults` | `integer` | No |  |

### `comments`

#### `comments.list()`

Lists comments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.status` | `string` | No |  |
| `params.startDate` | `string` | No |  |
| `params.view` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.postId` | `string` | Yes |  |
| `params.maxResults` | `integer` | No |  |
| `params.endDate` | `string` | No |  |

#### `comments.removeContent()`

Removes the content of a comment by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.commentId` | `string` | Yes |  |

#### `comments.markAsSpam()`

Marks a comment as spam by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.commentId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |

#### `comments.delete()`

Deletes a comment by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.postId` | `string` | Yes |  |
| `params.commentId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |

#### `comments.get()`

Gets a comment by id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commentId` | `string` | Yes |  |
| `params.view` | `string` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |

#### `comments.approve()`

Marks a comment as not spam by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commentId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |

#### `comments.listByBlog()`

Lists comments by blog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endDate` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.status` | `string` | No |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.startDate` | `string` | No |  |
| `params.maxResults` | `integer` | No |  |

### `users`

#### `users.get()`

Gets one user by user_id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes |  |

### `posts`

#### `posts.revert()`

Reverts a published or scheduled post to draft state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.postId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |

#### `posts.delete()`

Deletes a post by blog id and post id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.postId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.useTrash` | `boolean` | No | Move to Trash if possible |

#### `posts.getByPath()`

Gets a post by path.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.view` | `string` | No |  |
| `params.maxComments` | `integer` | No |  |
| `params.path` | `string` | Yes |  |

#### `posts.get()`

Gets a post by blog id and post id

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fetchBody` | `boolean` | No |  |
| `params.postId` | `string` | Yes |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.maxComments` | `integer` | No |  |
| `params.view` | `string` | No |  |

#### `posts.search()`

Searches for posts matching given query terms in the specified blog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.q` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.orderBy` | `string` | No |  |

#### `posts.publish()`

Publishes a post.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.publishDate` | `string` | No |  |

#### `posts.list()`

Lists posts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endDate` | `string` | No |  |
| `params.status` | `string` | No |  |
| `params.maxResults` | `integer` | No |  |
| `params.startDate` | `string` | No |  |
| `params.sortOption` | `string` | No | Sort direction applied to post list. |
| `params.pageToken` | `string` | No |  |
| `params.labels` | `string` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.view` | `string` | No |  |
| `params.orderBy` | `string` | No |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.fetchBodies` | `boolean` | No |  |

#### `posts.patch()`

Patches a post.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.publish` | `boolean` | No |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.revert` | `boolean` | No |  |
| `params.fetchBody` | `boolean` | No |  |
| `params.maxComments` | `integer` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `posts.update()`

Updates a post by blog id and post id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.revert` | `boolean` | No |  |
| `params.publish` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.fetchBody` | `boolean` | No |  |
| `params.postId` | `string` | Yes |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.maxComments` | `integer` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `posts.insert()`

Inserts a post.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.isDraft` | `boolean` | No |  |
| `params.fetchBody` | `boolean` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `pageViews`

#### `pageViews.get()`

Gets page views by blog id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.range` | `string` | No |  |
| `params.blogId` | `string` | Yes |  |

### `blogUserInfos`

#### `blogUserInfos.get()`

Gets one blog and user info pair by blog id and user id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes |  |
| `params.maxPosts` | `integer` | No |  |
| `params.blogId` | `string` | Yes |  |

### `pages`

#### `pages.publish()`

Publishes a page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |

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
| `params.pageId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.view` | `string` | No |  |

#### `pages.patch()`

Patches a page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.revert` | `boolean` | No |  |
| `params.pageId` | `string` | Yes |  |
| `params.publish` | `boolean` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `pages.list()`

Lists pages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No |  |
| `params.status` | `string` | No |  |
| `params.view` | `string` | No |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |

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
| `params.blogId` | `string` | Yes |  |
| `params.pageId` | `string` | Yes |  |

#### `pages.update()`

Updates a page by blog id and page id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.revert` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.publish` | `boolean` | No |  |
| `params.pageId` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |