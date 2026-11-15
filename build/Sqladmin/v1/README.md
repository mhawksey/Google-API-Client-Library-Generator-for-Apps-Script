# Cloud SQL Admin API - Apps Script Client Library

Auto-generated client library for using the **Cloud SQL Admin API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 17:01:10 GMT
- **Last Modified:** Sun, 15 Nov 2026 17:01:10 GMT
- **Created:** Sun, 20 Jul 2025 16:55:06 GMT



---

## API Reference

### `backupRuns`

#### `backupRuns.list()`

Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Maximum number of backup runs per response. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID, or "-" for all instances. This does not include the project ID. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.pageToken` | `string` | No | A previously-returned page token representing part of the larger set of results to view. |

#### `backupRuns.insert()`

Creates a new backup run on demand.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `backupRuns.get()`

Retrieves a resource containing information about a backup run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.id` | `string` | Yes | The ID of this backup run. |

#### `backupRuns.delete()`

Deletes the backup taken by a backup run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.id` | `string` | Yes | The ID of the backup run to delete. To find a backup run ID, use the [list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/backupRuns/list) method. |

### `blueGreenDeployments`

#### `blueGreenDeployments.list()`

Lists blue-green deployments under a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListBlueGreenDeployments` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | Optional. A filter expression that filters the results. |
| `params.orderBy` | `string` | No | Optional. A comma-separated list of fields to order the results by. |
| `params.parent` | `string` | Yes | Required. The parent resource whose blue-green deployments are to be listed. Format: projects/{project}/locations/{location} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of deployments to return. The service may return fewer deployments than this value. If unspecified, at most 500 deployments are returned. The maximum value is 1000; values above 1000 are treated as 1000. |

#### `blueGreenDeployments.create()`

Creates a blue-green deployment under a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this blue-green deployment will be created. Format: projects/{project}/locations/{location} |
| `params.blueGreenDeploymentId` | `string` | No | Required. The ID to use for the blue-green deployment, which will become the final component of the deployment's resource name. The ID must be unique within the given project and location and between 2-63 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `blueGreenDeployments.delete()`

Deletes a blue-green deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.deleteOldSource` | `boolean` | No | Optional. If set to true, and the switchover is complete, this deletes the old source instance along with the deployment. |
| `params.name` | `string` | Yes | Required. The name of the blue-green deployment to delete. Format: projects/{project}/locations/{location}/blueGreenDeployments/{blue_green_deployment} |

#### `blueGreenDeployments.switchover()`

Switches over to green instance for a blue-green deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the blue-green deployment to switch over. Format: projects/{project}/locations/{location}/blueGreenDeployments/{blue_green_deployment} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `blueGreenDeployments.get()`

Retrieves a blue-green deployment resource under a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the blue-green deployment to retrieve. Format: projects/{project}/locations/{location}/blueGreenDeployments/{blue_green_deployment} |
| `params.view` | `string` | No | Optional. Specifies whether to return the basic or detailed view of the resource in the response. |

### `tiers`

#### `tiers.list()`

Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For more information, see https://cloud.google.com/sql/pricing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project for which to list tiers. |

### `sslCerts`

#### `sslCerts.insert()`

Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `sslCerts.get()`

Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.sha1Fingerprint` | `string` | Yes | Sha1 FingerPrint. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |

#### `sslCerts.list()`

Lists all of the current SSL certificates for the instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |

#### `sslCerts.delete()`

Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.sha1Fingerprint` | `string` | Yes | Sha1 FingerPrint. |

#### `sslCerts.createEphemeral()`

Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the Cloud SQL project. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

### `workloadCaptures`

#### `workloadCaptures.startReplay()`

Starts executing a captured workload on a separate Cloud SQL instance provisioned for workload replay. This target instance simulates the production environment without affecting the primary instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Required. Cloud SQL instance ID. This does not include the project ID. |
| `params.workloadId` | `string` | Yes | Required. The ID of the workload to replay. |
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `workloadCaptures.stop()`

Stops capturing the query traffic and related operations executed on the primary instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Required. Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `workloadCaptures.list()`

Lists all captured workloads associated with the instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Required. Cloud SQL instance ID. This does not include the project ID. |

#### `workloadCaptures.start()`

Starts capturing the SQL queries, transactions, and other operations executed on the primary instance. This traffic is securely stored and forms a "captured workload". This workload can be replayed later on a different instance to safely test performance impacts, database upgrades, configuration changes etc. before applying them to production.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Required. Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `workloadCaptures.stopReplay()`

Stops an active workload replay on the target Cloud SQL replay instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Required. Cloud SQL instance ID of the target replay instance. This does not include the project ID. |
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the target replay instance. |
| `params.requestBody` | `object` | Yes | The request body. |

### `connect`

#### `connect.get()`

Retrieves connect settings about a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.readTime` | `string` | No | Optional. Optional snapshot read timestamp to trade freshness for performance. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |

#### `connect.resolve()`

Retrieves connect settings about a Cloud SQL instance using the instance DNS name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The region of the instance. |
| `params.dnsName` | `string` | Yes | Required. Cloud SQL instance ID. This does not include the project ID. |

#### `connect.generateEphemeralCert()`

Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

### `users`

#### `users.insert()`

Creates a new user in a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.list()`

Lists users in the specified Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |

#### `users.get()`

Retrieves a resource containing information about a user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.host` | `string` | No | Host of a user of the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.name` | `string` | Yes | User of the instance. |

#### `users.delete()`

Deletes a user from a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.host` | `string` | No | Host of the user in the instance. |
| `params.name` | `string` | No | Name of the user in the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |

#### `users.update()`

Updates an existing user in a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | No | Name of the user in the instance. |
| `params.revokeExistingServerRoles` | `boolean` | No | Optional. Specifies whether to revoke existing roles that are not present in the `server_roles` field. If `false` or unset, the server roles specified in `server_roles` are added to the user's existing server roles. |
| `params.databaseRoles` | `string` | No | Optional. List of database roles to grant to the user. body.database_roles will be ignored for update request. |
| `params.host` | `string` | No | Optional. Host of the user in the instance. |
| `params.revokeExistingRoles` | `boolean` | No | Optional. Specifies whether to revoke existing roles that are not present in the `database_roles` field. If `false` or unset, the database roles specified in `database_roles` are added to the user's existing roles. |
| `params.serverRoles` | `string` | No | Optional. The server roles to grant to the SQL Server login. Existing server roles will not be revoked if revoke_existing_roles is false. body.server_roles will be ignored for update request. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects`

### `projects.instances`

#### `projects.instances.rescheduleMaintenance()`

Reschedules the maintenance on the given instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | ID of the project that contains the instance. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.instances.verifyExternalSyncSettings()`

Verify External primary instance external sync settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.instances.getLatestRecoveryTime()`

Get Latest Recovery Time for a given instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.sourceInstanceDeletionTime` | `string` | No | The timestamp used to identify the time when the source instance is deleted. If this instance is deleted, then you must set the timestamp. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |

#### `projects.instances.resetReplicaSize()`

Reset Replica Size to primary instance disk size.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Cloud SQL read replica instance name. |
| `params.project` | `string` | Yes | ID of the project that contains the read replica. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.instances.startExternalSync()`

Start External primary instance migration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.instances.performDiskShrink()`

Perform Disk Shrink on primary instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.instances.getDiskShrinkConfig()`

Get Disk Shrink Config for a given instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |

### `instances`

#### `instances.export()`

Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance to be exported. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.startReplica()`

Starts the replication in the read replica instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Cloud SQL read replica instance name. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | ID of the project that contains the read replica. |

#### `instances.executeSql()`

Execute SQL statements.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Required. Database instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.promoteReplica()`

Promotes the read replica instance to be an independent Cloud SQL primary instance. Using this operation might cause your instance to restart.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | ID of the project that contains the read replica. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.instance` | `string` | Yes | Cloud SQL read replica instance name. |
| `params.failover` | `boolean` | No | Set to true to invoke a replica failover to the DR replica. As part of replica failover, the promote operation attempts to add the original primary instance as a replica of the promoted DR replica when the original primary instance comes back online. If set to false or not specified, then the original primary instance becomes an independent Cloud SQL primary instance. |

#### `instances.listServerCas()`

Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |

#### `instances.RotateEntraIdCertificate()`

Rotates the server certificate version to one previously added with the addEntraIdCertificate method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.instance` | `string` | Yes | Required. Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.rotateServerCa()`

Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. For instances that have enabled Certificate Authority Service (CAS) based server CA, use RotateServerCertificate to rotate the server certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.patch()`

Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.reconcilePscNetworkingForce` | `boolean` | No | Optional. Set PSC config to the same value as the existing config and force reconcile the PSC networking. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.reconcilePscNetworking` | `boolean` | No | Optional. Set PSC config to the same value as the existing config to reconcile the PSC networking. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.ListEntraIdCertificates()`

Lists all versions of EntraID certificates for the specified instance. There can be up to three sets of certificates listed: the certificate that is currently in use, a future that has been added but not yet used to sign a certificate, and a certificate that has been rotated out.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.instance` | `string` | Yes | Required. Cloud SQL instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |

#### `instances.demoteMaster()`

Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.preCheckMajorVersionUpgrade()`

Execute MVU Pre-checks

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Required. Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.delete()`

Deletes a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance to be deleted. |
| `params.finalBackupExpiryTime` | `string` | No | Optional. Final Backup expiration time. Timestamp in UTC of when this resource is considered expired. |
| `params.finalBackupTtlDays` | `string` | No | Optional. Retention period of the final backup. |
| `params.finalBackupDescription` | `string` | No | Optional. The description of the final backup. |
| `params.enableFinalBackup` | `boolean` | No | Flag to opt-in for final backup. By default, it is turned off. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |

#### `instances.acquireSsrsLease()`

Acquire a lease for the setup of SQL Server Reporting Services (SSRS).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance (Example: project-id). |
| `params.instance` | `string` | Yes | Required. Cloud SQL instance ID. This doesn't include the project ID. It's composed of lowercase letters, numbers, and hyphens, and it must start with a letter. The total length must be 98 characters or less (Example: instance-id). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.addServerCertificate()`

Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. Required to prepare for a certificate rotation. If a server certificate version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one certificate version waiting to be rotated in. For instances not using CAS server CA, use AddServerCa instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |

#### `instances.releaseSsrsLease()`

Release a lease for the setup of SQL Server Reporting Services (SSRS).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Required. The Cloud SQL instance ID. This doesn't include the project ID. The instance ID contains lowercase letters, numbers, and hyphens, and it must start with a letter. This ID can have a maximum length of 98 characters. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Required. The project ID that contains the instance. |

#### `instances.addServerCa()`

Adds a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in. For instances that have enabled Certificate Authority Service (CAS) based server CA, use AddServerCertificate to add a new server certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |

#### `instances.stopReplica()`

Stops the replication in the read replica instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | ID of the project that contains the read replica. |
| `params.instance` | `string` | Yes | Cloud SQL read replica instance name. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |

#### `instances.resetSslConfig()`

Deletes all client certificates and generates a new server SSL certificate for the instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.mode` | `string` | No | Optional. Reset SSL mode to use. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |

#### `instances.restart()`

Restarts a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance to be restarted. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |

#### `instances.clone()`

Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Required. Project ID of the source Cloud SQL instance. |
| `params.instance` | `string` | Yes | Required. The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.get()`

Retrieves a resource containing information about a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Required. Database instance ID. This does not include the project ID. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |

#### `instances.import()`

Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.switchover()`

Switches over from the primary instance to the DR replica instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | ID of the project that contains the replica. |
| `params.dbTimeout` | `string` | No | Optional. (MySQL and PostgreSQL only) Cloud SQL instance operations timeout, which is a sum of all database operations. Default value is 10 minutes and can be modified to a maximum value of 24 hours. |
| `params.instance` | `string` | Yes | Cloud SQL read replica instance name. |

#### `instances.failover()`

Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | ID of the project that contains the read replica. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.insert()`

Creates a new Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project to which the newly created Cloud SQL instances should belong. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.addEntraIdCertificate()`

Adds a new Entra ID certificate for the specified instance. If an Entra ID certificate was previously added but never used in a certificate rotation, this operation replaces that version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.instance` | `string` | Yes | Required. Cloud SQL instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |

#### `instances.demote()`

Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Required. ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Required. Cloud SQL instance name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.restoreBackup()`

Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.update()`

Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.list()`

Lists instances under a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.pageToken` | `string` | No | A previously-returned page token representing part of the larger set of results to view. |
| `params.project` | `string` | Yes | Project ID of the project for which to list Cloud SQL instances. |
| `params.maxResults` | `integer` | No | The maximum number of instances to return. The service may return fewer than this value. If unspecified, at most 500 instances are returned. The maximum value is 1000; values above 1000 are coerced to 1000. |
| `params.filter` | `string` | No | A filter expression that filters resources listed in the response. The expression is in the form of field:value. For example, 'instanceType:CLOUD_SQL_INSTANCE'. Fields can be nested as needed as per their JSON representation, such as 'settings.userLabels.auto_start:true'. Multiple filter queries are space-separated. For example. 'state:RUNNABLE instanceType:CLOUD_SQL_INSTANCE'. By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. |

#### `instances.pointInTimeRestore()`

Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where you created this instance. Format: projects/{project} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.truncateLog()`

Truncate MySQL general and slow query log tables MySQL only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | Project ID of the Cloud SQL project. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.RotateServerCertificate()`

Rotates the server certificate version to one previously added with the addServerCertificate method. For instances not using Certificate Authority Service (CAS) server CA, use RotateServerCa instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Required. Cloud SQL instance ID. This does not include the project ID. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.ListServerCertificates()`

Lists all versions of server certificates and certificate authorities (CAs) for the specified instance. There can be up to three sets of certs listed: the certificate that is currently in use, a future that has been added but not yet used to sign a certificate, and a certificate that has been rotated out. For instances not using Certificate Authority Service (CAS) server CA, use ListServerCas instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Required. Cloud SQL instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |

#### `instances.reencrypt()`

Reencrypt CMEK instance with latest key version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | ID of the project that contains the instance. |
| `params.requestBody` | `object` | Yes | The request body. |

### `Backups`

#### `Backups.UpdateBackup()`

Updates the retention period and description of the backup. You can use this API to update final backups only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the backup. Format: projects/{project}/backups/{backup}. |
| `params.updateMask` | `string` | No | The list of fields that you can update. You can update only the description and retention period of the final backup. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `Backups.CreateBackup()`

Creates a backup for a Cloud SQL instance. This API can be used only to create on-demand backups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this backup is created. Format: projects/{project} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `Backups.ListBackups()`

Lists all backups associated with the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of backups to return per response. The service might return fewer backups than this value. If a value for this parameter isn't specified, then, at most, 500 backups are returned. The maximum value is 2,000. Any values that you set, which are greater than 2,000, are changed to 2,000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListBackups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBackups` must match the call that provided the page token. |
| `params.parent` | `string` | Yes | Required. The parent that owns this collection of backups. Format: projects/{project} |
| `params.filter` | `string` | No | Multiple filter queries are separated by spaces. For example, 'instance:abc AND type:FINAL, 'location:us', 'backupInterval.startTime>=1950-01-01T01:01:25.771Z'. You can filter by type, instance, backupInterval.startTime (creation time), or location. |

#### `Backups.GetBackup()`

Retrieves a resource containing information about a backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the backup to retrieve. Format: projects/{project}/backups/{backup} |

#### `Backups.DeleteBackup()`

Deletes the backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the backup to delete. Format: projects/{project}/backups/{backup} |

### `flags`

#### `flags.list()`

Lists all available database flags for Cloud SQL instances.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.databaseVersion` | `string` | No | Database type and version you want to retrieve flags for. By default, this method returns flags for all database types and versions. |
| `params.flagScope` | `string` | No | Optional. Specify the scope of flags to be returned by SqlFlagsListService. Return list of database flags if unspecified. |

### `operations`

#### `operations.get()`

Retrieves an instance operation that has been performed on an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |
| `params.operation` | `string` | Yes | Required. Instance operation ID. |

#### `operations.cancel()`

Cancels an instance operation that has been performed on an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.operation` | `string` | Yes | Instance operation ID. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |

#### `operations.list()`

Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.maxResults` | `integer` | No | Maximum number of operations per response. |
| `params.pageToken` | `string` | No | A previously-returned page token representing part of the larger set of results to view. |
| `params.instance` | `string` | No | Cloud SQL instance ID. This does not include the project ID. |

### `databases`

#### `databases.update()`

Updates a resource containing information about a database inside a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.database` | `string` | Yes | Name of the database to be updated in the instance. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `databases.list()`

Lists databases in the specified Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |

#### `databases.get()`

Retrieves a resource containing information about a database inside a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.database` | `string` | Yes | Name of the database in the instance. |

#### `databases.patch()`

Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.database` | `string` | Yes | Name of the database to be updated in the instance. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `databases.insert()`

Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `databases.delete()`

Deletes a database from a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.location` | `string` | No | Optional. Region of the Cloud SQL instance. |
| `params.database` | `string` | Yes | Name of the database to be deleted in the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |