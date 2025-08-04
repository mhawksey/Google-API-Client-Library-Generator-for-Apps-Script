# Cloud OS Login API - Apps Script Client Library

Auto-generated client library for using the **Cloud OS Login API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:35:23 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:35:23 GMT
- **Created:** Sun, 20 Jul 2025 16:44:51 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.signSshPublicKey()`

Signs an SSH public key for a user to authenticate to a virtual machine on Google Compute Engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent for the signing request. Format: projects/{project}/locations/{location} |
| `params.resource` | `object` | Yes | The request body. |

### `users`

#### `users.getLoginProfile()`

Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique ID for the user in format `users/{user}`. |
| `params.projectId` | `string` | No | Required. The project ID of the Google Cloud Platform project. |
| `params.systemId` | `string` | No | Optional. A system ID for filtering the results of the request. |
| `params.view` | `string` | No | The view configures whether to retrieve security keys information. |

#### `users.importSshPublicKey()`

Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The unique ID for the user in format `users/{user}`. |
| `params.projectId` | `string` | No | The project ID of the Google Cloud Platform project. |
| `params.view` | `string` | No | The view configures whether to retrieve security keys information. |
| `params.regions` | `string` | No | Optional. The regions to which to assert that the key was written. If unspecified, defaults to all regions. Regions are listed at https://cloud.google.com/about/locations#region. |
| `params.resource` | `object` | Yes | The request body. |

### `users.sshPublicKeys`

#### `users.sshPublicKeys.create()`

Create an SSH public key

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The unique ID for the user in format `users/{user}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.sshPublicKeys.delete()`

Deletes an SSH public key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`. |

#### `users.sshPublicKeys.get()`

Retrieves an SSH public key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`. |

#### `users.sshPublicKeys.patch()`

Updates an SSH public key and returns the profile information. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`. |
| `params.updateMask` | `string` | No | Mask to control which fields get updated. Updates all if not present. |
| `params.resource` | `object` | Yes | The request body. |

### `users.projects`

#### `users.projects.delete()`

Deletes a POSIX account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A reference to the POSIX account to update. POSIX accounts are identified by the project ID they are associated with. A reference to the POSIX account is in format `users/{user}/projects/{project}`. |

#### `users.projects.provisionPosixAccount()`

Create a POSIX account if it doesn't exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique ID for the user in format `users/{user}/projects/{project}`. |
| `params.resource` | `object` | Yes | The request body. |

### `users.projects.zones`

#### `users.projects.zones.signSshPublicKey()`

Signs an SSH public key for a user to authenticate to an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project and region for the signing request. |
| `params.resource` | `object` | Yes | The request body. |

### `users.projects.locations`

#### `users.projects.locations.signSshPublicKey()`

Signs an SSH public key for a user to authenticate to an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project and region for the signing request. |
| `params.resource` | `object` | Yes | The request body. |