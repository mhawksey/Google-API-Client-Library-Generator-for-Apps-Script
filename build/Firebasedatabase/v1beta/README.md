# Firebase Realtime Database Management API - Apps Script Client Library

Auto-generated client library for using the **Firebase Realtime Database Management API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:00:07 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:32:52 GMT
- **Created:** Sun, 20 Jul 2025 16:33:24 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.instances`

#### `projects.locations.instances.create()`

Requests that a new DatabaseInstance be created. The state of a successfully created DatabaseInstance is ACTIVE. Only available for projects on the Blaze plan. Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Note that it might take a few minutes for billing enablement state to propagate to Firebase systems.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project for which to create a database instance, in the form: `projects/{project-number}/locations/{location-id}`. |
| `params.databaseId` | `string` | No | The globally unique identifier of the database instance. |
| `params.validateOnly` | `boolean` | No | When set to true, the request will be validated but not submitted. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.get()`

Gets the DatabaseInstance identified by the specified resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`. `database-id` is a globally unique identifier across all parent collections. For convenience, this method allows you to supply `-` as a wildcard character in place of specific collections under `projects` and `locations`. The resulting wildcarding form of the method is: `projects/-/locations/-/instances/{database-id}`. |

#### `projects.locations.instances.list()`

Lists each DatabaseInstance associated with the specified parent project. The list items are returned in no particular order, but will be a consistent view of the database instances when additional requests are made with a `pageToken`. The resulting list contains instances in any STATE. The list results may be stale by a few seconds. Use GetDatabaseInstance for consistent reads.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project for which to list database instances, in the form: `projects/{project-number}/locations/{location-id}` To list across all locations, use a parent in the form: `projects/{project-number}/locations/-` |
| `params.pageToken` | `string` | No | Token returned from a previous call to `ListDatabaseInstances` indicating where in the set of database instances to resume listing. |
| `params.pageSize` | `integer` | No | The maximum number of database instances to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. |
| `params.showDeleted` | `boolean` | No | Indicate that DatabaseInstances in the `DELETED` state should also be returned. |

#### `projects.locations.instances.delete()`

Marks a DatabaseInstance to be deleted. The DatabaseInstance will be set to the DELETED state for 20 days, and will be purged within 30 days. The default database cannot be deleted. IDs for deleted database instances may never be recovered or re-used. The Database may only be deleted if it is already in a DISABLED state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}` |

#### `projects.locations.instances.undelete()`

Restores a DatabaseInstance that was previously marked to be deleted. After the delete method is used, DatabaseInstances are set to the DELETED state for 20 days, and will be purged within 30 days. Databases in the DELETED state can be undeleted without losing any data. This method may only be used on a DatabaseInstance in the DELETED state. Purged DatabaseInstances may not be recovered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.disable()`

Disables a DatabaseInstance. The database can be re-enabled later using ReenableDatabaseInstance. When a database is disabled, all reads and writes are denied, including view access in the Firebase console.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.reenable()`

Enables a DatabaseInstance. The database must have been disabled previously using DisableDatabaseInstance. The state of a successfully reenabled DatabaseInstance is ACTIVE.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}` |
| `params.resource` | `object` | Yes | The request body. |