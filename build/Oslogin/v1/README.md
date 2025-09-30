# Cloud OS Login API - Apps Script Client Library

Auto-generated client library for using the **Cloud OS Login API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:46:28 GMT
- **Last Modified:** Tue, 30 Sep 2025 23:46:28 GMT
- **Created:** Sun, 20 Jul 2025 16:44:54 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.signSshPublicKey()`

Signs an SSH public key for a user to authenticate to a virtual machine on Google Compute Engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent for the signing request. Format: projects/{project}/locations/{location} |
| `params.requestBody` | `object` | Yes | The request body. |

### `users`

#### `users.getLoginProfile()`

Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique ID for the user in format `users/{user}`. |
| `params.projectId` | `string` | No | Required. The project ID of the Google Cloud Platform project. |
| `params.systemId` | `string` | No | Optional. A system ID for filtering the results of the request. |

#### `users.importSshPublicKey()`

Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The unique ID for the user in format `users/{user}`. |
| `params.projectId` | `string` | No | The project ID of the Google Cloud Platform project. |
| `params.regions` | `string` | No | Optional. The regions to which to assert that the key was written. If unspecified, defaults to all regions. Regions are listed at https://cloud.google.com/about/locations#region. |
| `params.requestBody` | `object` | Yes | The request body. |

### `users.sshPublicKeys`

#### `users.sshPublicKeys.create()`

Create an SSH public key

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The unique ID for the user in format `users/{user}`. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.updateMask` | `string` | No | Optional. Mask to control which fields get updated. Updates all if not present. |
| `params.requestBody` | `object` | Yes | The request body. |

### `users.projects`

#### `users.projects.delete()`

Deletes a POSIX account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A reference to the POSIX account to update. POSIX accounts are identified by the project ID they are associated with. A reference to the POSIX account is in format `users/{user}/projects/{project}`. |