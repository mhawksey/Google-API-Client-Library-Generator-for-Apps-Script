# Android Device Provisioning Partner API - Apps Script Client Library

Auto-generated client library for using the **Android Device Provisioning Partner API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:21:56 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:21:01 GMT
- **Created:** Sun, 20 Jul 2025 16:12:11 GMT



---

## API Reference

### `operations`

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `partners`

### `partners.vendors`

#### `partners.vendors.list()`

Lists the vendors of the partner.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name in the format `partners/[PARTNER_ID]`. |
| `params.pageSize` | `integer` | No | The maximum number of results to be returned. |
| `params.pageToken` | `string` | No | A token identifying a page of results returned by the server. |

### `partners.vendors.customers`

#### `partners.vendors.customers.list()`

Lists the customers of the vendor.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name in the format `partners/[PARTNER_ID]/vendors/[VENDOR_ID]`. |
| `params.pageSize` | `integer` | No | The maximum number of results to be returned. |
| `params.pageToken` | `string` | No | A token identifying a page of results returned by the server. |

### `partners.customers`

#### `partners.customers.create()`

Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource ID in the format `partners/[PARTNER_ID]` that identifies the reseller. |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.customers.list()`

Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | Required. The ID of the reseller partner. |
| `params.pageSize` | `integer` | No | The maximum number of results to be returned. If not specified or 0, all the records are returned. |
| `params.pageToken` | `string` | No | A token identifying a page of results returned by the server. |

### `partners.devices`

#### `partners.devices.claim()`

Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | Required. The ID of the reseller partner. |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.devices.unclaim()`

Unclaims a device from a customer and removes it from zero-touch enrollment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | Required. The ID of the reseller partner. |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.devices.findByIdentifier()`

Finds devices by hardware identifiers, such as IMEI.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | Required. The ID of the reseller partner. |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.devices.findByOwner()`

Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | Required. The ID of the reseller partner. |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.devices.get()`

Gets a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The device API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`. |

#### `partners.devices.getSimLockState()`

Gets a device's SIM lock state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | Required. The ID of the partner. |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.devices.metadata()`

Updates reseller metadata associated with the device. Android devices only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.metadataOwnerId` | `string` | Yes | Required. The owner of the newly set metadata. Set this to the partner ID. |
| `params.deviceId` | `string` | Yes | Required. The ID of the device. |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.devices.claimAsync()`

Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | Required. The ID of the reseller partner. |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.devices.unclaimAsync()`

Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | Required. The reseller partner ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.devices.updateMetadataAsync()`

Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | Required. The reseller partner ID. |
| `params.resource` | `object` | Yes | The request body. |

### `customers`

#### `customers.list()`

Lists the user's customer accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Required. The maximum number of customers to show in a page of results. A number between 1 and 100 (inclusive). |
| `params.pageToken` | `string` | No | A token specifying which result page to return. This field has custom validations in ListCustomersRequestValidator |

### `customers.configurations`

#### `customers.configurations.create()`

Creates a new configuration. Once created, a customer can apply the configuration to devices.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The customer that manages the configuration. An API resource name in the format `customers/[CUSTOMER_ID]`. This field has custom validation in CreateConfigurationRequestValidator |
| `params.resource` | `object` | Yes | The request body. |

#### `customers.configurations.get()`

Gets the details of a configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The configuration to get. An API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. |

#### `customers.configurations.patch()`

Updates a configuration's field values.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server. |
| `params.updateMask` | `string` | No | Required. The field mask applied to the target `Configuration` before updating the fields. To learn more about using field masks, read [FieldMask](/protocol-buffers/docs/reference/google.protobuf#fieldmask) in the Protocol Buffers documentation. |
| `params.resource` | `object` | Yes | The request body. |

#### `customers.configurations.delete()`

Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The configuration to delete. An API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. If the configuration is applied to any devices, the API call fails. |

#### `customers.configurations.list()`

Lists a customer's configurations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The customer that manages the listed configurations. An API resource name in the format `customers/[CUSTOMER_ID]`. |

### `customers.dpcs`

#### `customers.dpcs.list()`

Lists the DPCs (device policy controllers) that support zero-touch enrollment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The customer that can use the DPCs in configurations. An API resource name in the format `customers/[CUSTOMER_ID]`. |

### `customers.devices`

#### `customers.devices.list()`

Lists a customer's devices.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The customer managing the devices. An API resource name in the format `customers/[CUSTOMER_ID]`. |
| `params.pageSize` | `string` | No | Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive. |
| `params.pageToken` | `string` | No | A token specifying which result page to return. |

#### `customers.devices.get()`

Gets the details of a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The device to get. An API resource name in the format `customers/[CUSTOMER_ID]/devices/[DEVICE_ID]`. |

#### `customers.devices.unclaim()`

Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`. |
| `params.resource` | `object` | Yes | The request body. |

#### `customers.devices.applyConfiguration()`

Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`. |
| `params.resource` | `object` | Yes | The request body. |

#### `customers.devices.removeConfiguration()`

Removes a configuration from device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The customer managing the device in the format `customers/[CUSTOMER_ID]`. |
| `params.resource` | `object` | Yes | The request body. |