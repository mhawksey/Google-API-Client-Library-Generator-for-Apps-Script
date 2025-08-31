# Blogger API - Apps Script Client Library

Auto-generated client library for using the **Blogger API (version: v3)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:23:51 GMT
- **Last Modified:** Mon, 04 Aug 2025 19:54:52 GMT
- **Created:** Sun, 20 Jul 2025 16:14:46 GMT



---

## API Reference

### `comments`

#### `comments.approve()`

Marks a comment as not spam by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.commentId` | `string` | Yes |  |

#### `comments.delete()`

Deletes a comment by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.commentId` | `string` | Yes |  |

#### `comments.get()`

Gets a comment by id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.commentId` | `string` | Yes |  |
| `params.view` | `string` | No |  |

#### `comments.list()`

Lists comments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.startDate` | `string` | No |  |
| `params.endDate` | `string` | No |  |
| `params.maxResults` | `integer` | No |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.view` | `string` | No |  |
| `params.status` | `string` | No |  |

#### `comments.listByBlog()`

Lists comments by blog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.startDate` | `string` | No |  |
| `params.endDate` | `string` | No |  |
| `params.maxResults` | `integer` | No |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.status` | `string` | No |  |

#### `comments.markAsSpam()`

Marks a comment as spam by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.commentId` | `string` | Yes |  |

#### `comments.removeContent()`

Removes the content of a comment by blog id, post id and comment id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.commentId` | `string` | Yes |  |

### `pages`

#### `pages.delete()`

Deletes a page by blog id and page id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.pageId` | `string` | Yes |  |
| `params.useTrash` | `boolean` | No | Move to Trash if possible |

#### `pages.get()`

Gets a page by blog id and page id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.pageId` | `string` | Yes |  |
| `params.view` | `string` | No |  |

#### `pages.insert()`

Inserts a page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.isDraft` | `boolean` | No |  |
| `params.resource` | `object` | Yes | The request body. |

#### `pages.list()`

Lists pages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.maxResults` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.status` | `string` | No |  |
| `params.view` | `string` | No |  |

#### `pages.patch()`

Patches a page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.pageId` | `string` | Yes |  |
| `params.publish` | `boolean` | No |  |
| `params.revert` | `boolean` | No |  |
| `params.resource` | `object` | Yes | The request body. |

#### `pages.publish()`

Publishes a page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.pageId` | `string` | Yes |  |

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
| `params.blogId` | `string` | Yes |  |
| `params.pageId` | `string` | Yes |  |
| `params.publish` | `boolean` | No |  |
| `params.revert` | `boolean` | No |  |
| `params.resource` | `object` | Yes | The request body. |

### `posts`

#### `posts.delete()`

Deletes a post by blog id and post id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.useTrash` | `boolean` | No | Move to Trash if possible |

#### `posts.get()`

Gets a post by blog id and post id

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.fetchBody` | `boolean` | No |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.maxComments` | `integer` | No |  |
| `params.view` | `string` | No |  |

#### `posts.getByPath()`

Gets a post by path.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.path` | `string` | Yes |  |
| `params.maxComments` | `integer` | No |  |
| `params.view` | `string` | No |  |

#### `posts.insert()`

Inserts a post.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.fetchBody` | `boolean` | No |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.isDraft` | `boolean` | No |  |
| `params.resource` | `object` | Yes | The request body. |

#### `posts.list()`

Lists posts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.endDate` | `string` | No |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.labels` | `string` | No |  |
| `params.maxResults` | `integer` | No |  |
| `params.orderBy` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.startDate` | `string` | No |  |
| `params.status` | `string` | No |  |
| `params.view` | `string` | No |  |
| `params.sortOption` | `string` | No | Sort direction applied to post list. |

#### `posts.patch()`

Patches a post.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.fetchBody` | `boolean` | No |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.maxComments` | `integer` | No |  |
| `params.publish` | `boolean` | No |  |
| `params.revert` | `boolean` | No |  |
| `params.resource` | `object` | Yes | The request body. |

#### `posts.publish()`

Publishes a post.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.publishDate` | `string` | No |  |

#### `posts.revert()`

Reverts a published or scheduled post to draft state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |

#### `posts.search()`

Searches for posts matching given query terms in the specified blog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.q` | `string` | Yes |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.orderBy` | `string` | No |  |

#### `posts.update()`

Updates a post by blog id and post id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.fetchBody` | `boolean` | No |  |
| `params.fetchImages` | `boolean` | No |  |
| `params.maxComments` | `integer` | No |  |
| `params.publish` | `boolean` | No |  |
| `params.revert` | `boolean` | No |  |
| `params.resource` | `object` | Yes | The request body. |

### `blogs`

#### `blogs.get()`

Gets a blog by id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.maxPosts` | `integer` | No |  |
| `params.view` | `string` | No |  |

#### `blogs.getByUrl()`

Gets a blog by url.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.url` | `string` | Yes |  |
| `params.view` | `string` | No |  |

#### `blogs.listByUser()`

Lists blogs by user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes |  |
| `params.fetchUserInfo` | `boolean` | No |  |
| `params.role` | `string` | No |  |
| `params.status` | `string` | No | Default value of status is LIVE. |
| `params.view` | `string` | No |  |

### `blogUserInfos`

#### `blogUserInfos.get()`

Gets one blog and user info pair by blog id and user id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.maxPosts` | `integer` | No |  |

### `pageViews`

#### `pageViews.get()`

Gets page views by blog id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.blogId` | `string` | Yes |  |
| `params.range` | `string` | No |  |

### `postUserInfos`

#### `postUserInfos.get()`

Gets one post and user info pair, by post_id and user_id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.postId` | `string` | Yes |  |
| `params.maxComments` | `integer` | No |  |

#### `postUserInfos.list()`

Lists post and user info pairs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes |  |
| `params.blogId` | `string` | Yes |  |
| `params.startDate` | `string` | No |  |
| `params.endDate` | `string` | No |  |
| `params.fetchBodies` | `boolean` | No |  |
| `params.labels` | `string` | No |  |
| `params.maxResults` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.orderBy` | `string` | No |  |
| `params.view` | `string` | No |  |
| `params.status` | `string` | No |  |

### `users`

#### `users.get()`

Gets one user by user_id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes |  |