# SAS Portal API (Testing) - Apps Script Client Library

Auto-generated client library for using the **SAS Portal API (Testing) (version: v1alpha1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:45:29 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:45:29 GMT
- **Created:** Sun, 20 Jul 2025 16:46:37 GMT



---

## API Reference

### `customers`

#### `customers.get()`

Returns a requested customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the customer. |

#### `customers.list()`

Returns a list of requested customers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of customers to return in the response. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to ListCustomers that indicates where this listing should continue from. |

#### `customers.patch()`

Updates an existing customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of the customer. |
| `params.updateMask` | `string` | No | Fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.listGcpProjectDeployments()`

Returns a list of SAS deployments associated with current GCP project. Includes whether SAS analytics has been enabled or not.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `customers.provisionDeployment()`

Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.listLegacyOrganizations()`

Returns a list of legacy organizations.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `customers.migrateOrganization()`

Migrates a SAS organization to the cloud. This will create GCP projects for each deployment and associate them. The SAS Organization is linked to the gcp project that called the command. go/sas-legacy-customer-migration

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.setupSasAnalytics()`

Setups the a GCP Project to receive SAS Analytics messages via GCP Pub/Sub with a subscription to BigQuery. All the Pub/Sub topics and BigQuery tables are created automatically as part of this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.devices`

#### `customers.devices.create()`

Creates a device under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.devices.createSigned()`

Creates a signed device under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.devices.delete()`

Deletes a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the device. |

#### `customers.devices.get()`

Gets details about a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the device. |

#### `customers.devices.list()`

Lists devices under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.pageSize` | `integer` | No | The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000]. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from. |
| `params.filter` | `string` | No | The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive. |

#### `customers.devices.move()`

Moves a device under another node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the device to move. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.devices.patch()`

Updates a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource path name. |
| `params.updateMask` | `string` | No | Fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.devices.updateSigned()`

Updates a signed device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the device to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.devices.signDevice()`

Signs a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource path name. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.nodes`

#### `customers.nodes.create()`

Creates a new node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name where the node is to be created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.nodes.delete()`

Deletes a node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the node. |

#### `customers.nodes.get()`

Returns a requested node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the node. |

#### `customers.nodes.list()`

Lists nodes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, for example, "nodes/1". |
| `params.pageSize` | `integer` | No | The maximum number of nodes to return in the response. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from. |
| `params.filter` | `string` | No | The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered. |

#### `customers.nodes.move()`

Moves a node under another node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the node to move. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.nodes.patch()`

Updates an existing node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name. |
| `params.updateMask` | `string` | No | Fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.nodes.devices`

#### `customers.nodes.devices.create()`

Creates a device under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.nodes.devices.createSigned()`

Creates a signed device under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.nodes.devices.list()`

Lists devices under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.pageSize` | `integer` | No | The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000]. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from. |
| `params.filter` | `string` | No | The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive. |

### `customers.nodes.nodes`

#### `customers.nodes.nodes.create()`

Creates a new node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name where the node is to be created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.nodes.nodes.list()`

Lists nodes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, for example, "nodes/1". |
| `params.pageSize` | `integer` | No | The maximum number of nodes to return in the response. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from. |
| `params.filter` | `string` | No | The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered. |

### `customers.nodes.deployments`

#### `customers.nodes.deployments.create()`

Creates a new deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name where the deployment is to be created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.nodes.deployments.list()`

Lists deployments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2. |
| `params.pageSize` | `integer` | No | The maximum number of deployments to return in the response. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from. |
| `params.filter` | `string` | No | The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered. |

### `customers.deployments`

#### `customers.deployments.create()`

Creates a new deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name where the deployment is to be created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.deployments.delete()`

Deletes a deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment. |

#### `customers.deployments.get()`

Returns a requested deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment. |

#### `customers.deployments.list()`

Lists deployments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2. |
| `params.pageSize` | `integer` | No | The maximum number of deployments to return in the response. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from. |
| `params.filter` | `string` | No | The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered. |

#### `customers.deployments.patch()`

Updates an existing deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name. |
| `params.updateMask` | `string` | No | Fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.deployments.move()`

Moves a deployment under another node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment to move. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.deployments.devices`

#### `customers.deployments.devices.create()`

Creates a device under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.deployments.devices.createSigned()`

Creates a signed device under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.deployments.devices.list()`

Lists devices under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.pageSize` | `integer` | No | The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000]. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from. |
| `params.filter` | `string` | No | The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive. |

### `nodes`

#### `nodes.get()`

Returns a requested node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the node. |

### `nodes.devices`

#### `nodes.devices.create()`

Creates a device under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `nodes.devices.createSigned()`

Creates a signed device under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `nodes.devices.delete()`

Deletes a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the device. |

#### `nodes.devices.get()`

Gets details about a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the device. |

#### `nodes.devices.list()`

Lists devices under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.pageSize` | `integer` | No | The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000]. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from. |
| `params.filter` | `string` | No | The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive. |

#### `nodes.devices.move()`

Moves a device under another node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the device to move. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `nodes.devices.patch()`

Updates a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource path name. |
| `params.updateMask` | `string` | No | Fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `nodes.devices.updateSigned()`

Updates a signed device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the device to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `nodes.devices.signDevice()`

Signs a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource path name. |
| `params.requestBody` | `object` | Yes | The request body. |

### `nodes.nodes`

#### `nodes.nodes.create()`

Creates a new node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name where the node is to be created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `nodes.nodes.delete()`

Deletes a node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the node. |

#### `nodes.nodes.get()`

Returns a requested node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the node. |

#### `nodes.nodes.list()`

Lists nodes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, for example, "nodes/1". |
| `params.pageSize` | `integer` | No | The maximum number of nodes to return in the response. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from. |
| `params.filter` | `string` | No | The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered. |

#### `nodes.nodes.move()`

Moves a node under another node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the node to move. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `nodes.nodes.patch()`

Updates an existing node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name. |
| `params.updateMask` | `string` | No | Fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `nodes.nodes.devices`

#### `nodes.nodes.devices.create()`

Creates a device under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `nodes.nodes.devices.createSigned()`

Creates a signed device under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `nodes.nodes.devices.list()`

Lists devices under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.pageSize` | `integer` | No | The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000]. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from. |
| `params.filter` | `string` | No | The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive. |

### `nodes.nodes.nodes`

#### `nodes.nodes.nodes.create()`

Creates a new node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name where the node is to be created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `nodes.nodes.nodes.list()`

Lists nodes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, for example, "nodes/1". |
| `params.pageSize` | `integer` | No | The maximum number of nodes to return in the response. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from. |
| `params.filter` | `string` | No | The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered. |

### `nodes.nodes.deployments`

#### `nodes.nodes.deployments.create()`

Creates a new deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name where the deployment is to be created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `nodes.nodes.deployments.list()`

Lists deployments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2. |
| `params.pageSize` | `integer` | No | The maximum number of deployments to return in the response. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from. |
| `params.filter` | `string` | No | The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered. |

### `nodes.deployments`

#### `nodes.deployments.delete()`

Deletes a deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment. |

#### `nodes.deployments.get()`

Returns a requested deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment. |

#### `nodes.deployments.list()`

Lists deployments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2. |
| `params.pageSize` | `integer` | No | The maximum number of deployments to return in the response. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from. |
| `params.filter` | `string` | No | The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered. |

#### `nodes.deployments.patch()`

Updates an existing deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name. |
| `params.updateMask` | `string` | No | Fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `nodes.deployments.move()`

Moves a deployment under another node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment to move. |
| `params.requestBody` | `object` | Yes | The request body. |

### `nodes.deployments.devices`

#### `nodes.deployments.devices.create()`

Creates a device under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `nodes.deployments.devices.createSigned()`

Creates a signed device under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `nodes.deployments.devices.list()`

Lists devices under a node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. |
| `params.pageSize` | `integer` | No | The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000]. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from. |
| `params.filter` | `string` | No | The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive. |

### `installer`

#### `installer.generateSecret()`

Generates a secret to be used with the ValidateInstaller.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `installer.validate()`

Validates the identity of a Certified Professional Installer (CPI).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `deployments`

#### `deployments.get()`

Returns a requested deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment. |

### `deployments.devices`

#### `deployments.devices.delete()`

Deletes a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the device. |

#### `deployments.devices.get()`

Gets details about a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the device. |

#### `deployments.devices.move()`

Moves a device under another node or customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the device to move. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `deployments.devices.patch()`

Updates a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource path name. |
| `params.updateMask` | `string` | No | Fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `deployments.devices.updateSigned()`

Updates a signed device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the device to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `deployments.devices.signDevice()`

Signs a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource path name. |
| `params.requestBody` | `object` | Yes | The request body. |

### `policies`

#### `policies.set()`

Sets the access control policy on the specified resource. Replaces any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `policies.get()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `policies.test()`

Returns permissions that a caller has on the specified resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |