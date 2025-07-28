# Google Forms API - Apps Script Client Library

Auto-generated client library for using the **Google Forms API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:55:19 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:33:23 GMT
- **Created:** Sun, 20 Jul 2025 16:34:04 GMT



---

## API Reference

### `forms`

#### `forms.create()`

Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.unpublished` | `boolean` | No | Optional. Whether the form is unpublished. If set to `true`, the form doesn't accept responses. If set to `false` or unset, the form is published and accepts responses. |
| `params.resource` | `object` | Yes | The request body. |

#### `forms.get()`

Get a form.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.formId` | `string` | Yes | Required. The form ID. |

#### `forms.batchUpdate()`

Change the form with a batch of updates.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.formId` | `string` | Yes | Required. The form ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `forms.setPublishSettings()`

Updates the publish settings of a form. Legacy forms aren't supported because they don't have the `publish_settings` field.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.formId` | `string` | Yes | Required. The ID of the form. You can get the id from Form.form_id field. |
| `params.resource` | `object` | Yes | The request body. |

### `forms.responses`

#### `forms.responses.get()`

Get one response from the form.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.formId` | `string` | Yes | Required. The form ID. |
| `params.responseId` | `string` | Yes | Required. The response ID within the form. |

#### `forms.responses.list()`

List a form's responses.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.formId` | `string` | Yes | Required. ID of the Form whose responses to list. |
| `params.filter` | `string` | No | Which form responses to return. Currently, the only supported filters are: * timestamp > *N* which means to get all form responses submitted after (but not at) timestamp *N*. * timestamp >= *N* which means to get all form responses submitted at and after timestamp *N*. For both supported filters, timestamp must be formatted in RFC3339 UTC "Zulu" format. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". |
| `params.pageSize` | `integer` | No | The maximum number of responses to return. The service may return fewer than this value. If unspecified or zero, at most 5000 responses are returned. |
| `params.pageToken` | `string` | No | A page token returned by a previous list response. If this field is set, the form and the values of the filter must be the same as for the original request. |

### `forms.watches`

#### `forms.watches.create()`

Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.formId` | `string` | Yes | Required. ID of the Form to watch. |
| `params.resource` | `object` | Yes | The request body. |

#### `forms.watches.list()`

Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.formId` | `string` | Yes | Required. ID of the Form whose watches to list. |

#### `forms.watches.renew()`

Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.formId` | `string` | Yes | Required. The ID of the Form. |
| `params.watchId` | `string` | Yes | Required. The ID of the Watch to renew. |
| `params.resource` | `object` | Yes | The request body. |

#### `forms.watches.delete()`

Delete a watch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.formId` | `string` | Yes | Required. The ID of the Form. |
| `params.watchId` | `string` | Yes | Required. The ID of the Watch to delete. |