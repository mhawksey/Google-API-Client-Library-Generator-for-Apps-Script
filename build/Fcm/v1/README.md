# Firebase Cloud Messaging API - Apps Script Client Library

Auto-generated client library for using the **Firebase Cloud Messaging API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:17:44 GMT
- **Last Modified:** Sun, 15 Nov 2026 16:17:44 GMT
- **Created:** Sun, 20 Jul 2025 16:32:54 GMT



---

## API Reference

### `projects`

### `projects.messages`

#### `projects.messages.send()`

Send a message to specified target (a [Firebase Installation ID (FID)](/docs/cloud-messaging/android/get-started#access-firebase-installation-id), registration token, topic, or condition). If duplicate fields or parameters are provided in a request (such as repeated JSON keys in the request body or duplicate query parameters), the last occurrence takes precedence.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. It contains the Firebase project id (i.e. the unique identifier for your Firebase project), in the format of `projects/{project_id}`. The numeric project number with no padding is also supported in the format of `projects/{project_number}`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.registrations`

### `projects.registrations.topicSubscriptions`

#### `projects.registrations.topicSubscriptions.patch()`

Updates a TopicSubscription. Subscribes an app installation instance by registration_id, either FID or FCM Token, to a topicSubscription. Returns an existing TopicSubscription or creates a new one if it does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the subscription. Format: projects/{project}/registrations/{registration}/topicSubscriptions/{topicSubscription} The {registration} part contains the registration ID (e.g., FID). |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the topic subscription is not found, a new topic subscription will be created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.registrations.topicSubscriptions.create()`

Creates a TopicSubscription. Subscribes an app installation instance (by registration_id, either FID or FCM Token) to a topicSubscription. Returns a TopicSubscription if it is created successfully. If the subscription already exists, returns error of ALREADY_EXISTS.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this subscription will be created. Format: projects/{project}/registrations/{registration} The {registration} part can be an FID or an FCM Token. |
| `params.topicName` | `string` | No | Required. The ID to use for the subscription, which is the topic name. This will become the last segment of the TopicSubscription's resource name. Topic names match the pattern of "[a-zA-Z0-9-_.~%]{1,900}". |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.registrations.topicSubscriptions.list()`

Lists TopicSubscriptions for a given app instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource, which owns this collection of subscriptions. Format: projects/{project}/registrations/{registration} The {registration} part can be an FID or an FCM Token. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListTopicSubscriptions` call. Provide this to retrieve the subsequent page. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 1000 subscriptions will be returned. The maximum value is 2000; values above 2000 will be coerced to 2000. |

#### `projects.registrations.topicSubscriptions.get()`

Gets a TopicSubscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the topic subscription to retrieve. Format: projects/{project}/registrations/{registration}/topicSubscriptions/{topicSubscription} |

#### `projects.registrations.topicSubscriptions.delete()`

Deletes a TopicSubscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the topic subscription to delete. Format: projects/{project}/registrations/{registration}/topicSubscriptions/{topicSubscription} |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the topic subscription is not found, the request will succeed but no action will be taken on the server. |