# Cloud SQL Admin API - Apps Script Client Library

Auto-generated client library for using the **Cloud SQL Admin API (version: v1beta4)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:53:58 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:53:58 GMT
- **Created:** Sun, 20 Jul 2025 16:55:03 GMT



---

## API Reference

### `backupRuns`

#### `backupRuns.delete()`

Deletes the backup taken by a backup run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.id` | `string` | Yes | The ID of the backup run to delete. To find a backup run ID, use the [list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/backupRuns/list) method. |

#### `backupRuns.get()`

Retrieves a resource containing information about a backup run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.id` | `string` | Yes | The ID of this backup run. |

#### `backupRuns.insert()`

Creates a new backup run on demand.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `backupRuns.list()`

Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID, or "-" for all instances. This does not include the project ID. |
| `params.maxResults` | `integer` | No | Maximum number of backup runs per response. |
| `params.pageToken` | `string` | No | A previously-returned page token representing part of the larger set of results to view. |

### `databases`

#### `databases.delete()`

Deletes a database from a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.database` | `string` | Yes | Name of the database to be deleted in the instance. |

#### `databases.get()`

Retrieves a resource containing information about a database inside a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.database` | `string` | Yes | Name of the database in the instance. |

#### `databases.insert()`

Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `databases.list()`

Lists databases in the specified Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |

#### `databases.patch()`

Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.database` | `string` | Yes | Name of the database to be updated in the instance. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `databases.update()`

Updates a resource containing information about a database inside a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.database` | `string` | Yes | Name of the database to be updated in the instance. |
| `params.requestBody` | `object` | Yes | The request body. |

### `flags`

#### `flags.list()`

Lists all available database flags for Cloud SQL instances.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.databaseVersion` | `string` | No | Database type and version you want to retrieve flags for. By default, this method returns flags for all database types and versions. |
| `params.flagScope` | `string` | No | Optional. Specify the scope of flags to be returned by SqlFlagsListService. Return list of database flags if unspecified. |

### `instances`

#### `instances.addServerCa()`

Add a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in. For instances that have enabled Certificate Authority Service (CAS) based server CA, use AddServerCertificate to add a new server certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |

#### `instances.addServerCertificate()`

Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. Required to prepare for a certificate rotation. If a server certificate version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one certificate version waiting to be rotated in. For instances not using CAS server CA, use AddServerCa instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Required. Cloud SQL instance ID. This does not include the project ID. |

#### `instances.clone()`

Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the source as well as the clone Cloud SQL instance. |
| `params.instance` | `string` | Yes | The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.delete()`

Deletes a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance to be deleted. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.enableFinalBackup` | `boolean` | No | Flag to opt-in for final backup. By default, it is turned off. |
| `params.finalBackupTtlDays` | `string` | No | Optional. Retention period of the final backup. |
| `params.finalBackupExpiryTime` | `string` | No | Optional. Final Backup expiration time. Timestamp in UTC of when this resource is considered expired. |
| `params.finalBackupDescription` | `string` | No | Optional. The description of the final backup. |

#### `instances.demoteMaster()`

Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.demote()`

Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. The project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Required. The name of the Cloud SQL instance. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.export()`

Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance to be exported. |
| `params.instance` | `string` | Yes | The Cloud SQL instance ID. This doesn't include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.failover()`

Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | ID of the project that contains the read replica. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.reencrypt()`

Reencrypt CMEK instance with latest key version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.get()`

Retrieves a resource containing information about a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |

#### `instances.import()`

Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.insert()`

Creates a new Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project to which the newly created Cloud SQL instances should belong. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.list()`

Lists instances under a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project for which to list Cloud SQL instances. |
| `params.filter` | `string` | No | A filter expression that filters resources listed in the response. The expression is in the form of field:value. For example, 'instanceType:CLOUD_SQL_INSTANCE'. Fields can be nested as needed as per their JSON representation, such as 'settings.userLabels.auto_start:true'. Multiple filter queries are space-separated. For example. 'state:RUNNABLE instanceType:CLOUD_SQL_INSTANCE'. By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. |
| `params.maxResults` | `integer` | No | The maximum number of instances to return. The service may return fewer than this value. If unspecified, at most 500 instances are returned. The maximum value is 1000; values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | A previously-returned page token representing part of the larger set of results to view. |

#### `instances.listServerCas()`

Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |

#### `instances.ListServerCertificates()`

Lists all versions of server certificates and certificate authorities (CAs) for the specified instance. There can be up to three sets of certs listed: the certificate that is currently in use, a future that has been added but not yet used to sign a certificate, and a certificate that has been rotated out. For instances not using Certificate Authority Service (CAS) server CA, use ListServerCas instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Required. Cloud SQL instance ID. This does not include the project ID. |

#### `instances.patch()`

Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.promoteReplica()`

Promotes the read replica instance to be an independent Cloud SQL primary instance. Using this operation might cause your instance to restart.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | ID of the project that contains the read replica. |
| `params.instance` | `string` | Yes | Cloud SQL read replica instance name. |
| `params.failover` | `boolean` | No | Set to true to invoke a replica failover to the DR replica. As part of replica failover, the promote operation attempts to add the original primary instance as a replica of the promoted DR replica when the original primary instance comes back online. If set to false or not specified, then the original primary instance becomes an independent Cloud SQL primary instance. |

#### `instances.switchover()`

Switches over from the primary instance to the DR replica instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | ID of the project that contains the replica. |
| `params.instance` | `string` | Yes | Cloud SQL read replica instance name. |
| `params.dbTimeout` | `string` | No | Optional. (MySQL and PostgreSQL only) Cloud SQL instance operations timeout, which is a sum of all database operations. Default value is 10 minutes and can be modified to a maximum value of 24 hours. |

#### `instances.resetSslConfig()`

Deletes all client certificates and generates a new server SSL certificate for the instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.mode` | `string` | No | Optional. Reset SSL mode to use. |

#### `instances.restart()`

Restarts a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance to be restarted. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |

#### `instances.restoreBackup()`

Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.rotateServerCa()`

Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. For instances that have enabled Certificate Authority Service (CAS) based server CA, use RotateServerCertificate to rotate the server certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.RotateServerCertificate()`

Rotates the server certificate version to one previously added with the addServerCertificate method. For instances not using Certificate Authority Service (CAS) server CA, use RotateServerCa instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Required. Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.startReplica()`

Starts the replication in the read replica instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | ID of the project that contains the read replica. |
| `params.instance` | `string` | Yes | Cloud SQL read replica instance name. |

#### `instances.stopReplica()`

Stops the replication in the read replica instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | ID of the project that contains the read replica. |
| `params.instance` | `string` | Yes | Cloud SQL read replica instance name. |

#### `instances.truncateLog()`

Truncate MySQL general and slow query log tables MySQL only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the Cloud SQL project. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.update()`

Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.executeSql()`

Execute SQL statements.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Required. Database instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.acquireSsrsLease()`

Acquire a lease for the setup of SQL Server Reporting Services (SSRS).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. ID of the project that contains the instance (Example: project-id). |
| `params.instance` | `string` | Yes | Required. Cloud SQL instance ID. This doesn't include the project ID. It's composed of lowercase letters, numbers, and hyphens, and it must start with a letter. The total length must be 98 characters or less (Example: instance-id). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `instances.releaseSsrsLease()`

Release a lease for the setup of SQL Server Reporting Services (SSRS).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. The ID of the project that contains the instance (Example: project-id). |
| `params.instance` | `string` | Yes | Required. The Cloud SQL instance ID. This doesn't include the project ID. It's composed of lowercase letters, numbers, and hyphens, and it must start with a letter. The total length must be 98 characters or less (Example: instance-id). |

#### `instances.pointInTimeRestore()`

Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where you created this instance. Format: projects/{project} |
| `params.requestBody` | `object` | Yes | The request body. |

### `sslCerts`

#### `sslCerts.createEphemeral()`

Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the Cloud SQL project. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `sslCerts.delete()`

Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.sha1Fingerprint` | `string` | Yes | Sha1 FingerPrint. |

#### `sslCerts.get()`

Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.sha1Fingerprint` | `string` | Yes | Sha1 FingerPrint. |

#### `sslCerts.insert()`

Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `sslCerts.list()`

Lists all of the current SSL certificates for the instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |

### `projects`

### `projects.instances`

#### `projects.instances.rescheduleMaintenance()`

Reschedules the maintenance on the given instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.instances.verifyExternalSyncSettings()`

Verify External primary instance external sync settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
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
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.instances.getDiskShrinkConfig()`

Get Disk Shrink Config for a given instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |

#### `projects.instances.resetReplicaSize()`

Reset Replica Size to primary instance disk size.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | ID of the project that contains the read replica. |
| `params.instance` | `string` | Yes | Cloud SQL read replica instance name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.instances.getLatestRecoveryTime()`

Get Latest Recovery Time for a given instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.sourceInstanceDeletionTime` | `string` | No | The timestamp used to identify the time when the source instance is deleted. If this instance is deleted, then you must set the timestamp. |

### `operations`

#### `operations.get()`

Retrieves an instance operation that has been performed on an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.operation` | `string` | Yes | Instance operation ID. |

#### `operations.list()`

Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | No | Cloud SQL instance ID. This does not include the project ID. |
| `params.maxResults` | `integer` | No | Maximum number of operations per response. |
| `params.pageToken` | `string` | No | A previously-returned page token representing part of the larger set of results to view. |

#### `operations.cancel()`

Cancels an instance operation that has been performed on an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.operation` | `string` | Yes | Instance operation ID. |

### `backups`

#### `backups.createBackup()`

Creates a backup for a Cloud SQL instance. This API can be used only to create on-demand backups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this backup is created. Format: projects/{project} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `backups.getBackup()`

Retrieves a resource containing information about a backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the backup to retrieve. Format: projects/{project}/backups/{backup} |

#### `backups.listBackups()`

Lists all backups associated with the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent that owns this collection of backups. Format: projects/{project} |
| `params.pageSize` | `integer` | No | The maximum number of backups to return per response. The service might return fewer backups than this value. If a value for this parameter isn't specified, then, at most, 500 backups are returned. The maximum value is 2,000. Any values that you set, which are greater than 2,000, are changed to 2,000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListBackups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBackups` must match the call that provided the page token. |
| `params.filter` | `string` | No | Multiple filter queries are separated by spaces. For example, 'instance:abc AND type:FINAL, 'location:us', 'backupInterval.startTime>=1950-01-01T01:01:25.771Z'. You can filter by type, instance, backupInterval.startTime (creation time), or location. |

#### `backups.updateBackup()`

Updates the retention period and the description of the backup. You can use this API to update final backups only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the backup. Format: projects/{project}/backups/{backup}. |
| `params.updateMask` | `string` | No | The list of fields that you can update. You can update only the description and retention period of the final backup. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `backups.deleteBackup()`

Deletes the backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the backup to delete. Format: projects/{project}/backups/{backup} |

### `connect`

#### `connect.get()`

Retrieves connect settings about a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.readTime` | `string` | No | Optional. Optional snapshot read timestamp to trade freshness for performance. |

#### `connect.generateEphemeralCert()`

Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Cloud SQL instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

### `tiers`

#### `tiers.list()`

Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project for which to list tiers. |

### `users`

#### `users.delete()`

Deletes a user from a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.host` | `string` | No | Host of the user in the instance. |
| `params.name` | `string` | No | Name of the user in the instance. |

#### `users.get()`

Retrieves a resource containing information about a user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.name` | `string` | Yes | User of the instance. |
| `params.host` | `string` | No | Host of a user of the instance. |

#### `users.insert()`

Creates a new user in a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.list()`

Lists users in the specified Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |

#### `users.update()`

Updates an existing user in a Cloud SQL instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Project ID of the project that contains the instance. |
| `params.instance` | `string` | Yes | Database instance ID. This does not include the project ID. |
| `params.host` | `string` | No | Optional. Host of the user in the instance. |
| `params.name` | `string` | No | Name of the user in the instance. |
| `params.requestBody` | `object` | Yes | The request body. |