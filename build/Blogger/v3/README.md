# Blogger API - Apps Script Client Library

Auto-generated client library for using the **Blogger API (version: v3)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:37:34 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:37:34 GMT
- **Created:** Sun, 20 Jul 2025 16:14:46 GMT



---

## API Reference

### `blogUserInfos`

#### `blogUserInfos.get()`

Gets one blog and user info pair by blog id and user id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxPosts` | `integer` | No |  |
| `params.userId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |

### `postUserInfos`

#### `postUserInfos.get()`

Gets one post and user info pair, by post_id and user_id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxComments` | `integer` | No |  |
| `params.userId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |

#### `postUserInfos.list()`

Lists post and user info pairs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.orderBy` | `string` | No |  |
| `params.userId` | `string` | Yes |  |
| `params.startDate` | `string` | No |  |
| `params.status` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.endDate` | `string` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.labels` | `string` | No |  |
| `params.view` | `string` | No |  |

### `pages`

#### `pages.patch()`

Patches a page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.publish` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.pageId` | `string` | Yes |  |
| `params.revert` | `boolean` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `pages.update()`

Updates a page by blog id and page id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.publish` | `boolean` | No |  |
| `params.revert` | `boolean` | No |  |
| `params.pageId` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `pages.list()`

Lists pages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.view` | `string` | No |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.maxResults` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.status` | `string` | No |  |

#### `pages.publish()`

Publishes a page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |

#### `pages.get()`

Gets a page by blog id and page id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.view` | `string` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.pageId` | `string` | Yes |  |

#### `pages.insert()`

Inserts a page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.isDraft` | `boolean` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `pages.revert()`

Reverts a published or scheduled page to draft state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |

#### `pages.delete()`

Deletes a page by blog id and page id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.useTrash` | `boolean` | No | Move to Trash if possible |
| `params.pageId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |

### `pageViews`

#### `pageViews.get()`

Gets page views by blog id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.range` | `string` | No |  |

### `posts`

#### `posts.revert()`

Reverts a published or scheduled post to draft state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |

#### `posts.delete()`

Deletes a post by blog id and post id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.useTrash` | `boolean` | No | Move to Trash if possible |
| `params.postId` | `string` | Yes |  |

#### `posts.publish()`

Publishes a post.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.publishDate` | `string` | No |  |
| `params.postId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |

#### `posts.patch()`

Patches a post.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.publish` | `boolean` | No |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.revert` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.maxComments` | `integer` | No |  |
| `params.fetchBody` | `boolean` | No |  |
| `params.postId` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `posts.update()`

Updates a post by blog id and post id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fetchImages` | `boolean` | No |  |
| `params.fetchBody` | `boolean` | No |  |
| `params.revert` | `boolean` | No |  |
| `params.maxComments` | `integer` | No |  |
| `params.publish` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `posts.insert()`

Inserts a post.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fetchBody` | `boolean` | No |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.isDraft` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `posts.search()`

Searches for posts matching given query terms in the specified blog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fetchBodies` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.q` | `string` | Yes |  |
| `params.orderBy` | `string` | No |  |

#### `posts.get()`

Gets a post by blog id and post id

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.view` | `string` | No |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.fetchBody` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.maxComments` | `integer` | No |  |
| `params.postId` | `string` | Yes |  |

#### `posts.list()`

Lists posts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.labels` | `string` | No |  |
| `params.startDate` | `string` | No |  |
| `params.status` | `string` | No |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.endDate` | `string` | No |  |
| `params.view` | `string` | No |  |
| `params.maxResults` | `integer` | No |  |
| `params.sortOption` | `string` | No | Sort direction applied to post list. |
| `params.pageToken` | `string` | No |  |
| `params.orderBy` | `string` | No |  |
| `params.fetchBodies` | `boolean` | No |  |

#### `posts.getByPath()`

Gets a post by path.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes |  |
| `params.maxComments` | `integer` | No |  |
| `params.view` | `string` | No |  |
| `params.blogId` | `string` | Yes |  |

### `blogs`

#### `blogs.get()`

Gets a blog by id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.view` | `string` | No | Unspecified is interpreted as READER. |
| `params.maxPosts` | `integer` | No |  |

#### `blogs.getByUrl()`

Gets a blog by url.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.url` | `string` | Yes |  |
| `params.view` | `string` | No | Unspecified is interpreted as READER. |

#### `blogs.listByUser()`

Lists blogs by user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fetchUserInfo` | `boolean` | No |  |
| `params.status` | `string` | No | Default value of status is LIVE. |
| `params.view` | `string` | No | Unspecified is interpreted as the user's role on the blog. |
| `params.role` | `string` | No |  |
| `params.userId` | `string` | Yes |  |

### `users`

#### `users.get()`

Gets one user by user_id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes |  |

### `comments`

#### `comments.delete()`

Deletes a comment by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.postId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.commentId` | `string` | Yes |  |

#### `comments.approve()`

Marks a comment as not spam by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commentId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |

#### `comments.list()`

Lists comments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.status` | `string` | No |  |
| `params.endDate` | `string` | No |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.maxResults` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.view` | `string` | No |  |
| `params.postId` | `string` | Yes |  |
| `params.startDate` | `string` | No |  |

#### `comments.removeContent()`

Removes the content of a comment by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commentId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |

#### `comments.listByBlog()`

Lists comments by blog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.status` | `string` | No |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.startDate` | `string` | No |  |
| `params.endDate` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.maxResults` | `integer` | No |  |

#### `comments.get()`

Gets a comment by id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commentId` | `string` | Yes |  |
| `params.view` | `string` | No |  |
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |

#### `comments.markAsSpam()`

Marks a comment as spam by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commentId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |