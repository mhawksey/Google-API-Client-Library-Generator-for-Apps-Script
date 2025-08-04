# Kubernetes Engine API - Apps Script Client Library

Auto-generated client library for using the **Kubernetes Engine API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:05:02 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:05:02 GMT
- **Created:** Sun, 20 Jul 2025 16:24:02 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.getServerConfig()`

Returns configuration info about the Google Kubernetes Engine service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project and location) of the server config to get, specified in the format `projects/*/locations/*`. |
| `params.projectId` | `string` | No | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | No | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field. |

#### `projects.locations.list()`

Fetches locations that offer Google Kubernetes Engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Contains the name of the resource requested. Specified in the format `projects/*`. |

### `projects.locations.clusters`

#### `projects.locations.clusters.list()`

Lists all clusters owned by a project in either the specified zone or all zones.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent (project and location) where the clusters will be listed. Specified in the format `projects/*/locations/*`. Location "-" matches all zones and all regions. |
| `params.projectId` | `string` | No | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. |
| `params.zone` | `string` | No | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field. |

#### `projects.locations.clusters.get()`

Gets the details for a specific cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.projectId` | `string` | No | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | No | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | No | Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field. |

#### `projects.locations.clusters.create()`

Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://{$universe.dns_names.final_documentation_domain}/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent (project and location) where the cluster will be created. Specified in the format `projects/*/locations/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.update()`

Updates the settings for a specific cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.setLogging()`

Sets the logging service for a specific cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.setMonitoring()`

Sets the monitoring service for a specific cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.setAddons()`

Sets the addons for a specific cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.setLocations()`

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://{$universe.dns_names.final_documentation_domain}/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.updateMaster()`

Updates the master for a specific cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.setMasterAuth()`

Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.delete()`

Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.projectId` | `string` | No | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | No | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | No | Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field. |

#### `projects.locations.clusters.getJwks()`

Gets the public component of the cluster signing keys in JSON Web Key format.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The cluster (project, location, cluster name) to get keys for. Specified in the format `projects/*/locations/*/clusters/*`. |

#### `projects.locations.clusters.setResourceLabels()`

Sets labels on a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster name) of the cluster to set labels. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.setLegacyAbac()`

Enables or disables the ABAC authorization mechanism on a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.startIpRotation()`

Starts master IP rotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.completeIpRotation()`

Completes master IP rotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.setNetworkPolicy()`

Enables or disables Network Policy for a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.setMaintenancePolicy()`

Sets the maintenance policy for a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.checkAutopilotCompatibility()`

Checks the cluster compatibility with Autopilot mode, and returns a list of compatibility issues.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/*/locations/*/clusters/*`. |

#### `projects.locations.clusters.fetchClusterUpgradeInfo()`

Fetch upgrade information of a specific cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name (project, location, cluster) of the cluster to get. Specified in the format `projects/*/locations/*/clusters/*` or `projects/*/zones/*/clusters/*`. |
| `params.version` | `string` | No | API request version that initiates this operation. |

### `projects.locations.clusters.nodePools`

#### `projects.locations.clusters.nodePools.update()`

Updates the version and/or image type of a specific node pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.nodePools.setAutoscaling()`

Sets the autoscaling settings of a specific node pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.nodePools.list()`

Lists the node pools for a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.projectId` | `string` | No | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. |
| `params.zone` | `string` | No | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. |
| `params.clusterId` | `string` | No | Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field. |

#### `projects.locations.clusters.nodePools.get()`

Retrieves the requested node pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`. |
| `params.projectId` | `string` | No | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | No | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | No | Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. |
| `params.nodePoolId` | `string` | No | Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field. |

#### `projects.locations.clusters.nodePools.create()`

Creates a node pool for a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/*/locations/*/clusters/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.nodePools.delete()`

Deletes a node pool from a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`. |
| `params.projectId` | `string` | No | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | No | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | No | Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. |
| `params.nodePoolId` | `string` | No | Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field. |

#### `projects.locations.clusters.nodePools.completeUpgrade()`

CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster, node pool id) of the node pool to complete upgrade. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.nodePools.rollback()`

Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.nodePools.setManagement()`

Sets the NodeManagement options for a node pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.nodePools.setSize()`

SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.nodePools.fetchNodePoolUpgradeInfo()`

Fetch upgrade information of a specific nodepool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name (project, location, cluster, nodepool) of the nodepool to get. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*` or `projects/*/zones/*/clusters/*/nodePools/*`. |
| `params.version` | `string` | No | API request version that initiates this operation. |

### `projects.locations.clusters.well-known`

#### `projects.locations.clusters.well-known.getOpenid-configuration()`

Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The cluster (project, location, cluster name) to get the discovery document for. Specified in the format `projects/*/locations/*/clusters/*`. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists all operations in a project in the specified zone or all zones.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent (project and location) where the operations will be listed. Specified in the format `projects/*/locations/*`. Location "-" matches all zones and all regions. |
| `params.projectId` | `string` | No | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. |
| `params.zone` | `string` | No | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field. |

#### `projects.locations.operations.get()`

Gets the specified operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, operation id) of the operation to get. Specified in the format `projects/*/locations/*/operations/*`. |
| `params.projectId` | `string` | No | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | No | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.operationId` | `string` | No | Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field. |

#### `projects.locations.operations.cancel()`

Cancels the specified operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/*/locations/*/operations/*`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.zones`

#### `projects.zones.getServerconfig()`

Returns configuration info about the Google Kubernetes Engine service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field. |
| `params.name` | `string` | No | The name (project and location) of the server config to get, specified in the format `projects/*/locations/*`. |

### `projects.zones.clusters`

#### `projects.zones.clusters.list()`

Lists all clusters owned by a project in either the specified zone or all zones.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field. |
| `params.parent` | `string` | No | The parent (project and location) where the clusters will be listed. Specified in the format `projects/*/locations/*`. Location "-" matches all zones and all regions. |

#### `projects.zones.clusters.get()`

Gets the details for a specific cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field. |
| `params.name` | `string` | No | The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/*/locations/*/clusters/*`. |

#### `projects.zones.clusters.create()`

Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://{$universe.dns_names.final_documentation_domain}/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.update()`

Updates the settings for a specific cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.logging()`

Sets the logging service for a specific cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.monitoring()`

Sets the monitoring service for a specific cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.addons()`

Sets the addons for a specific cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.locations()`

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://{$universe.dns_names.final_documentation_domain}/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.master()`

Updates the master for a specific cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.setMasterAuth()`

Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.delete()`

Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field. |
| `params.name` | `string` | No | The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/*/locations/*/clusters/*`. |

#### `projects.zones.clusters.resourceLabels()`

Sets labels on a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.legacyAbac()`

Enables or disables the ABAC authorization mechanism on a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.startIpRotation()`

Starts master IP rotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.completeIpRotation()`

Completes master IP rotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.setNetworkPolicy()`

Enables or disables Network Policy for a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.setMaintenancePolicy()`

Sets the maintenance policy for a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). |
| `params.zone` | `string` | Yes | Required. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. |
| `params.clusterId` | `string` | Yes | Required. The name of the cluster to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.fetchClusterUpgradeInfo()`

Fetch upgrade information of a specific cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name (project, location, cluster) of the cluster to get. Specified in the format `projects/*/locations/*/clusters/*` or `projects/*/zones/*/clusters/*`. |
| `params.version` | `string` | No | API request version that initiates this operation. |

### `projects.zones.clusters.nodePools`

#### `projects.zones.clusters.nodePools.update()`

Updates the version and/or image type of a specific node pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. |
| `params.nodePoolId` | `string` | Yes | Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.nodePools.autoscaling()`

Sets the autoscaling settings of a specific node pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. |
| `params.nodePoolId` | `string` | Yes | Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.nodePools.list()`

Lists the node pools for a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field. |
| `params.parent` | `string` | No | The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/*/locations/*/clusters/*`. |

#### `projects.zones.clusters.nodePools.get()`

Retrieves the requested node pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. |
| `params.nodePoolId` | `string` | Yes | Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field. |
| `params.name` | `string` | No | The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`. |

#### `projects.zones.clusters.nodePools.create()`

Creates a node pool for a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.nodePools.delete()`

Deletes a node pool from a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. |
| `params.nodePoolId` | `string` | Yes | Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field. |
| `params.name` | `string` | No | The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`. |

#### `projects.zones.clusters.nodePools.rollback()`

Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field. |
| `params.nodePoolId` | `string` | Yes | Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.nodePools.setManagement()`

Sets the NodeManagement options for a node pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. |
| `params.nodePoolId` | `string` | Yes | Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.nodePools.setSize()`

SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.clusterId` | `string` | Yes | Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. |
| `params.nodePoolId` | `string` | Yes | Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.zones.clusters.nodePools.fetchNodePoolUpgradeInfo()`

Fetch upgrade information of a specific nodepool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name (project, location, cluster, nodepool) of the nodepool to get. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*` or `projects/*/zones/*/clusters/*/nodePools/*`. |
| `params.version` | `string` | No | API request version that initiates this operation. |

### `projects.zones.operations`

#### `projects.zones.operations.list()`

Lists all operations in a project in the specified zone or all zones.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field. |
| `params.parent` | `string` | No | The parent (project and location) where the operations will be listed. Specified in the format `projects/*/locations/*`. Location "-" matches all zones and all regions. |

#### `projects.zones.operations.get()`

Gets the specified operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. |
| `params.operationId` | `string` | Yes | Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field. |
| `params.name` | `string` | No | The name (project, location, operation id) of the operation to get. Specified in the format `projects/*/locations/*/operations/*`. |

#### `projects.zones.operations.cancel()`

Cancels the specified operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. |
| `params.zone` | `string` | Yes | Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field. |
| `params.operationId` | `string` | Yes | Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.aggregated`

### `projects.aggregated.usableSubnetworks`

#### `projects.aggregated.usableSubnetworks.list()`

Lists subnetworks that can be used for creating clusters in a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project where subnetworks are usable. Specified in the format `projects/*`. |
| `params.filter` | `string` | No | Filtering currently only supports equality on the networkProjectId and must be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId` is the project which owns the listed subnetworks. This defaults to the parent project ID. |
| `params.pageSize` | `integer` | No | The max number of results per page that should be returned. If the number of available results is larger than `page_size`, a `next_page_token` is returned which can be used to get the next page of results in subsequent requests. Acceptable values are 0 to 500, inclusive. (Default: 500) |
| `params.pageToken` | `string` | No | Specifies a page token to use. Set this to the nextPageToken returned by previous list requests to get the next page of results. |