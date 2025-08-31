# Bare Metal Solution API - Apps Script Client Library

Auto-generated client library for using the **Bare Metal Solution API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:23:10 GMT
- **Last Modified:** Mon, 04 Aug 2025 19:53:46 GMT
- **Created:** Sun, 20 Jul 2025 16:13:44 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.instances`

#### `projects.locations.instances.list()`

List servers in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListInstancesRequest. |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results from the server. |
| `params.filter` | `string` | No | List filter. |

#### `projects.locations.instances.get()`

Get details about a single server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. |

#### `projects.locations.instances.loadAuthInfo()`

Load auth info for a server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the server. |

#### `projects.locations.instances.patch()`

Update details of a single server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of this `Instance`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/instances/{instance}` |
| `params.updateMask` | `string` | No | The list of fields to update. The currently supported fields are: `labels` `hyperthreading_enabled` `os_image` `ssh_keys` `kms_key_version` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.reimage()`

Perform reimage operation on a single server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The `name` field is used to identify the instance. Format: projects/{project}/locations/{location}/instances/{instance} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.enableHyperthreading()`

Perform enable hyperthreading operation on a single server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The `name` field is used to identify the instance. Format: projects/{project}/locations/{location}/instances/{instance} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.disableHyperthreading()`

Perform disable hyperthreading operation on a single server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The `name` field is used to identify the instance. Format: projects/{project}/locations/{location}/instances/{instance} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.rename()`

RenameInstance sets a new name for an instance. Use with caution, previous names become immediately invalidated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The `name` field is used to identify the instance. Format: projects/{project}/locations/{location}/instances/{instance} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.reset()`

Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.start()`

Starts a server that was shutdown.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.stop()`

Stop a running server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.enableInteractiveSerialConsole()`

Enable the interactive serial console feature on an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.disableInteractiveSerialConsole()`

Disable the interactive serial console feature on an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.detachLun()`

Detach LUN from Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Required. Name of the instance. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.sshKeys`

#### `projects.locations.sshKeys.list()`

Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent containing the SSH keys. Currently, the only valid value for the location is "global". |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

#### `projects.locations.sshKeys.create()`

Register a public SSH key in the specified project for use with the interactive serial console feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent containing the SSH keys. |
| `params.sshKeyId` | `string` | No | Required. The ID to use for the key, which will become the final component of the key's resource name. This value must match the regex: [a-zA-Z0-9@.\-_]{1,64} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sshKeys.delete()`

Deletes a public SSH key registered in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SSH key to delete. Currently, the only valid value for the location is "global". |

### `projects.locations.volumes`

#### `projects.locations.volumes.list()`

List storage volumes in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListVolumesRequest. |
| `params.pageSize` | `integer` | No | Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results from the server. |
| `params.filter` | `string` | No | List filter. |

#### `projects.locations.volumes.get()`

Get details of a single storage volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. |

#### `projects.locations.volumes.patch()`

Update details of a single storage volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of this `Volume`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/volumes/{volume}` |
| `params.updateMask` | `string` | No | The list of fields to update. The only currently supported fields are: 'labels' |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.volumes.rename()`

RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The `name` field is used to identify the volume. Format: projects/{project}/locations/{location}/volumes/{volume} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.volumes.evict()`

Skips volume's cooloff and deletes it now. Volume must be in cooloff state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Volume. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.volumes.resize()`

Emergency Volume resize.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volume` | `string` | Yes | Required. Volume to resize. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.volumes.snapshots`

#### `projects.locations.volumes.snapshots.create()`

Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The volume to snapshot. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.volumes.snapshots.restoreVolumeSnapshot()`

Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volumeSnapshot` | `string` | Yes | Required. Name of the snapshot which will be used to restore its parent volume. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.volumes.snapshots.delete()`

Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the snapshot to delete. |

#### `projects.locations.volumes.snapshots.get()`

Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the snapshot. |

#### `projects.locations.volumes.snapshots.list()`

Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListVolumesRequest. |
| `params.pageSize` | `integer` | No | Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results from the server. |

### `projects.locations.volumes.luns`

#### `projects.locations.volumes.luns.get()`

Get details of a single storage logical unit number(LUN).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. |

#### `projects.locations.volumes.luns.list()`

List storage volume luns for given storage volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListLunsRequest. |
| `params.pageSize` | `integer` | No | Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results from the server. |

#### `projects.locations.volumes.luns.evict()`

Skips lun's cooloff and deletes it now. Lun must be in cooloff state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the lun. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.networks`

#### `projects.locations.networks.list()`

List network in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListNetworksRequest. |
| `params.pageSize` | `integer` | No | Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results from the server. |
| `params.filter` | `string` | No | List filter. |

#### `projects.locations.networks.listNetworkUsage()`

List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. Parent value (project and location). |

#### `projects.locations.networks.get()`

Get details of a single network.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. |

#### `projects.locations.networks.patch()`

Update details of a single network.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of this `Network`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/networks/{network}` |
| `params.updateMask` | `string` | No | The list of fields to update. The only currently supported fields are: `labels`, `reservations`, `vrf.vlan_attachments` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.networks.rename()`

RenameNetwork sets a new name for a network. Use with caution, previous names become immediately invalidated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The `name` field is used to identify the network. Format: projects/{project}/locations/{location}/networks/{network} |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.nfsShares`

#### `projects.locations.nfsShares.get()`

Get details of a single NFS share.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. |

#### `projects.locations.nfsShares.list()`

List NFS shares.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListNfsSharesRequest. |
| `params.pageSize` | `integer` | No | Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results from the server. |
| `params.filter` | `string` | No | List filter. |

#### `projects.locations.nfsShares.patch()`

Update details of a single NFS share.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The name of the NFS share. |
| `params.updateMask` | `string` | No | The list of fields to update. The only currently supported fields are: `labels` `allowed_clients` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.nfsShares.create()`

Create an NFS share.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project and location. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.nfsShares.rename()`

RenameNfsShare sets a new name for an nfsshare. Use with caution, previous names become immediately invalidated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The `name` field is used to identify the nfsshare. Format: projects/{project}/locations/{location}/nfsshares/{nfsshare} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.nfsShares.delete()`

Delete an NFS share. The underlying volume is automatically deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the NFS share to delete. |

### `projects.locations.provisioningQuotas`

#### `projects.locations.provisioningQuotas.list()`

List the budget details to provision resources on a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListProvisioningQuotasRequest. |
| `params.pageSize` | `integer` | No | Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. Notice that page_size field is not supported and won't be respected in the API request for now, will be updated when pagination is supported. |
| `params.pageToken` | `string` | No | A token identifying a page of results from the server. |

### `projects.locations.provisioningConfigs`

#### `projects.locations.provisioningConfigs.submit()`

Submit a provisioning configuration for a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project and location containing the ProvisioningConfig. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.provisioningConfigs.get()`

Get ProvisioningConfig by name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the ProvisioningConfig. |

#### `projects.locations.provisioningConfigs.create()`

Create new ProvisioningConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project and location containing the ProvisioningConfig. |
| `params.email` | `string` | No | Optional. Email provided to send a confirmation with provisioning config to. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.provisioningConfigs.patch()`

Update existing ProvisioningConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The system-generated name of the provisioning config. This follows the UUID format. |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.email` | `string` | No | Optional. Email provided to send a confirmation with provisioning config to. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.operations`

#### `projects.locations.operations.get()`

Get details about an operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.osImages`

#### `projects.locations.osImages.list()`

Retrieves the list of OS images which are currently approved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListOSImagesRequest. |
| `params.pageSize` | `integer` | No | Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. Notice that page_size field is not supported and won't be respected in the API request for now, will be updated when pagination is supported. |
| `params.pageToken` | `string` | No | A token identifying a page of results from the server. |

#### `projects.locations.osImages.get()`

Get details of a single OS image.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the OS image. |