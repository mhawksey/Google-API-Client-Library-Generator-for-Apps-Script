
/**
 * Google Apps Script client library for the Cloud SQL Admin API
 * Documentation URL: https://developers.google.com/cloud-sql/
 * @class
 */
class Sqladmin {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://sqladmin.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.instances = {};

    /**
     * Adds a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in. For instances that have enabled Certificate Authority Service (CAS) based server CA, use AddServerCertificate to add a new server certificate.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.instances.addServerCa = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/addServerCa', 'POST', params);

    /**
     * Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. Required to prepare for a certificate rotation. If a server certificate version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one certificate version waiting to be rotated in. For instances not using CAS server CA, use AddServerCa instead.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.instances.addServerCertificate = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/addServerCertificate', 'POST', params);

    /**
     * Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.
     * @param {string} params.instance - (Required) The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the source as well as the clone Cloud SQL instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.instances.clone = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/clone', 'POST', params);

    /**
     * Deletes a Cloud SQL instance.
     * @param {boolean} params.enableFinalBackup - Flag to opt-in for final backup. By default, it is turned off.
     * @param {string} params.finalBackupDescription - Optional. The description of the final backup.
     * @param {string} params.finalBackupExpiryTime - Optional. Final Backup expiration time. Timestamp in UTC of when this resource is considered expired.
     * @param {string} params.finalBackupTtlDays - Optional. Retention period of the final backup.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance to be deleted.
     * @return {object} The API response object.
     */
    this.instances.delete = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}', 'DELETE', params);

    /**
     * Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
     * @param {string} params.instance - (Required) Cloud SQL instance name.
     * @param {string} params.project - (Required) ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.instances.demoteMaster = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/demoteMaster', 'POST', params);

    /**
     * Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server.
     * @param {string} params.instance - (Required) Required. Cloud SQL instance name.
     * @param {string} params.project - (Required) Required. ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.instances.demote = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/demote', 'POST', params);

    /**
     * Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance to be exported.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.instances.export = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/export', 'POST', params);

    /**
     * Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) ID of the project that contains the read replica.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.instances.failover = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/failover', 'POST', params);

    /**
     * Reencrypt CMEK instance with latest key version.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.instances.reencrypt = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/reencrypt', 'POST', params);

    /**
     * Retrieves a resource containing information about a Cloud SQL instance.
     * @param {string} params.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.instances.get = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}', 'GET', params);

    /**
     * Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.instances.import = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/import', 'POST', params);

    /**
     * Creates a new Cloud SQL instance.
     * @param {string} params.project - (Required) Project ID of the project to which the newly created Cloud SQL instances should belong.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.instances.insert = (params) => this._makeRequest('v1/projects/{project}/instances', 'POST', params);

    /**
     * Lists instances under a given project.
     * @param {string} params.filter - A filter expression that filters resources listed in the response. The expression is in the form of field:value. For example, 'instanceType:CLOUD_SQL_INSTANCE'. Fields can be nested as needed as per their JSON representation, such as 'settings.userLabels.auto_start:true'. Multiple filter queries are space-separated. For example. 'state:RUNNABLE instanceType:CLOUD_SQL_INSTANCE'. By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly.
     * @param {integer} params.maxResults - The maximum number of instances to return. The service may return fewer than this value. If unspecified, at most 500 instances are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     * @param {string} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} params.project - (Required) Project ID of the project for which to list Cloud SQL instances.
     * @return {object} The API response object.
     */
    this.instances.list = (params) => this._makeRequest('v1/projects/{project}/instances', 'GET', params);

    /**
     * Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.instances.listServerCas = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/listServerCas', 'GET', params);

    /**
     * Lists all versions of server certificates and certificate authorities (CAs) for the specified instance. There can be up to three sets of certs listed: the certificate that is currently in use, a future that has been added but not yet used to sign a certificate, and a certificate that has been rotated out. For instances not using Certificate Authority Service (CAS) server CA, use ListServerCas instead.
     * @param {string} params.instance - (Required) Required. Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Required. Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.instances.ListServerCertificates = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/listServerCertificates', 'GET', params);

    /**
     * Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.instances.patch = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}', 'PATCH', params);

    /**
     * Promotes the read replica instance to be an independent Cloud SQL primary instance. Using this operation might cause your instance to restart.
     * @param {boolean} params.failover - Set to true to invoke a replica failover to the DR replica. As part of replica failover, the promote operation attempts to add the original primary instance as a replica of the promoted DR replica when the original primary instance comes back online. If set to false or not specified, then the original primary instance becomes an independent Cloud SQL primary instance.
     * @param {string} params.instance - (Required) Cloud SQL read replica instance name.
     * @param {string} params.project - (Required) ID of the project that contains the read replica.
     * @return {object} The API response object.
     */
    this.instances.promoteReplica = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/promoteReplica', 'POST', params);

    /**
     * Switches over from the primary instance to the DR replica instance.
     * @param {string} params.dbTimeout - Optional. (MySQL and PostgreSQL only) Cloud SQL instance operations timeout, which is a sum of all database operations. Default value is 10 minutes and can be modified to a maximum value of 24 hours.
     * @param {string} params.instance - (Required) Cloud SQL read replica instance name.
     * @param {string} params.project - (Required) ID of the project that contains the replica.
     * @return {object} The API response object.
     */
    this.instances.switchover = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/switchover', 'POST', params);

    /**
     * Deletes all client certificates and generates a new server SSL certificate for the instance.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.instances.resetSslConfig = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/resetSslConfig', 'POST', params);

    /**
     * Restarts a Cloud SQL instance.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance to be restarted.
     * @return {object} The API response object.
     */
    this.instances.restart = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/restart', 'POST', params);

    /**
     * Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.instances.restoreBackup = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/restoreBackup', 'POST', params);

    /**
     * Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. For instances that have enabled Certificate Authority Service (CAS) based server CA, use RotateServerCertificate to rotate the server certificate.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.instances.rotateServerCa = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/rotateServerCa', 'POST', params);

    /**
     * Rotates the server certificate version to one previously added with the addServerCertificate method. For instances not using Certificate Authority Service (CAS) server CA, use RotateServerCa instead.
     * @param {string} params.instance - (Required) Required. Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Required. Project ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.instances.RotateServerCertificate = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/rotateServerCertificate', 'POST', params);

    /**
     * Starts the replication in the read replica instance.
     * @param {string} params.instance - (Required) Cloud SQL read replica instance name.
     * @param {string} params.project - (Required) ID of the project that contains the read replica.
     * @return {object} The API response object.
     */
    this.instances.startReplica = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/startReplica', 'POST', params);

    /**
     * Stops the replication in the read replica instance.
     * @param {string} params.instance - (Required) Cloud SQL read replica instance name.
     * @param {string} params.project - (Required) ID of the project that contains the read replica.
     * @return {object} The API response object.
     */
    this.instances.stopReplica = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/stopReplica', 'POST', params);

    /**
     * Truncate MySQL general and slow query log tables MySQL only.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the Cloud SQL project.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.instances.truncateLog = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/truncateLog', 'POST', params);

    /**
     * Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.instances.update = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}', 'PUT', params);

    /**
     * Acquire a lease for the setup of SQL Server Reporting Services (SSRS).
     * @param {string} params.instance - (Required) Required. Cloud SQL instance ID. This doesn't include the project ID. It's composed of lowercase letters, numbers, and hyphens, and it must start with a letter. The total length must be 98 characters or less (Example: instance-id).
     * @param {string} params.project - (Required) Required. Project ID of the project that contains the instance (Example: project-id).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.instances.acquireSsrsLease = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/acquireSsrsLease', 'POST', params);

    /**
     * Release a lease for the setup of SQL Server Reporting Services (SSRS).
     * @param {string} params.instance - (Required) Required. The Cloud SQL instance ID. This doesn't include the project ID. The instance ID contains lowercase letters, numbers, and hyphens, and it must start with a letter. This ID can have a maximum length of 98 characters.
     * @param {string} params.project - (Required) Required. The project ID that contains the instance.
     * @return {object} The API response object.
     */
    this.instances.releaseSsrsLease = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/releaseSsrsLease', 'POST', params);

    /**
     * Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery.
     * @param {string} params.parent - (Required) Required. The parent resource where you created this instance. Format: projects/{project}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.instances.pointInTimeRestore = (params) => this._makeRequest('v1/{+parent}:pointInTimeRestore', 'POST', params);

    this.sslCerts = {};

    /**
     * Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the Cloud SQL project.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sslCerts.createEphemeral = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/createEphemeral', 'POST', params);

    /**
     * Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {string} params.sha1Fingerprint - (Required) Sha1 FingerPrint.
     * @return {object} The API response object.
     */
    this.sslCerts.delete = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}', 'DELETE', params);

    /**
     * Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {string} params.sha1Fingerprint - (Required) Sha1 FingerPrint.
     * @return {object} The API response object.
     */
    this.sslCerts.get = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}', 'GET', params);

    /**
     * Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sslCerts.insert = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/sslCerts', 'POST', params);

    /**
     * Lists all of the current SSL certificates for the instance.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.sslCerts.list = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/sslCerts', 'GET', params);

    this.projects = {};

    this.projects.instances = {};

    /**
     * Reschedules the maintenance on the given instance.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.rescheduleMaintenance = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/rescheduleMaintenance', 'POST', params);

    /**
     * Verify External primary instance external sync settings.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.verifyExternalSyncSettings = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/verifyExternalSyncSettings', 'POST', params);

    /**
     * Start External primary instance migration.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.startExternalSync = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/startExternalSync', 'POST', params);

    /**
     * Perform Disk Shrink on primary instance.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.performDiskShrink = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/performDiskShrink', 'POST', params);

    /**
     * Get Disk Shrink Config for a given instance.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.projects.instances.getDiskShrinkConfig = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/getDiskShrinkConfig', 'GET', params);

    /**
     * Reset Replica Size to primary instance disk size.
     * @param {string} params.instance - (Required) Cloud SQL read replica instance name.
     * @param {string} params.project - (Required) ID of the project that contains the read replica.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.resetReplicaSize = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/resetReplicaSize', 'POST', params);

    /**
     * Get Latest Recovery Time for a given instance.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.projects.instances.getLatestRecoveryTime = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/getLatestRecoveryTime', 'GET', params);

    this.backupRuns = {};

    /**
     * Deletes the backup taken by a backup run.
     * @param {string} params.id - (Required) The ID of the backup run to delete. To find a backup run ID, use the [list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/backupRuns/list) method.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.backupRuns.delete = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/backupRuns/{id}', 'DELETE', params);

    /**
     * Retrieves a resource containing information about a backup run.
     * @param {string} params.id - (Required) The ID of this backup run.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.backupRuns.get = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/backupRuns/{id}', 'GET', params);

    /**
     * Creates a new backup run on demand.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.backupRuns.insert = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/backupRuns', 'POST', params);

    /**
     * Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.
     * @param {string} params.instance - (Required) Cloud SQL instance ID, or "-" for all instances. This does not include the project ID.
     * @param {integer} params.maxResults - Maximum number of backup runs per response.
     * @param {string} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.backupRuns.list = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/backupRuns', 'GET', params);

    this.Backups = {};

    /**
     * Creates a backup for a Cloud SQL instance. This API can be used only to create on-demand backups.
     * @param {string} params.parent - (Required) Required. The parent resource where this backup is created. Format: projects/{project}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.Backups.CreateBackup = (params) => this._makeRequest('v1/{+parent}/backups', 'POST', params);

    /**
     * Retrieves a resource containing information about a backup.
     * @param {string} params.name - (Required) Required. The name of the backup to retrieve. Format: projects/{project}/backups/{backup}
     * @return {object} The API response object.
     */
    this.Backups.GetBackup = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all backups associated with the project.
     * @param {string} params.filter - Multiple filter queries are separated by spaces. For example, 'instance:abc AND type:FINAL, 'location:us', 'backupInterval.startTime>=1950-01-01T01:01:25.771Z'. You can filter by type, instance, backupInterval.startTime (creation time), or location.
     * @param {integer} params.pageSize - The maximum number of backups to return per response. The service might return fewer backups than this value. If a value for this parameter isn't specified, then, at most, 500 backups are returned. The maximum value is 2,000. Any values that you set, which are greater than 2,000, are changed to 2,000.
     * @param {string} params.pageToken - A page token, received from a previous `ListBackups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBackups` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent that owns this collection of backups. Format: projects/{project}
     * @return {object} The API response object.
     */
    this.Backups.ListBackups = (params) => this._makeRequest('v1/{+parent}/backups', 'GET', params);

    /**
     * Updates the retention period and description of the backup. You can use this API to update final backups only.
     * @param {string} params.name - (Required) Output only. The resource name of the backup. Format: projects/{project}/backups/{backup}.
     * @param {string} params.updateMask - The list of fields that you can update. You can update only the description and retention period of the final backup.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.Backups.UpdateBackup = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes the backup.
     * @param {string} params.name - (Required) Required. The name of the backup to delete. Format: projects/{project}/backups/{backup}
     * @return {object} The API response object.
     */
    this.Backups.DeleteBackup = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.connect = {};

    /**
     * Retrieves connect settings about a Cloud SQL instance.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {string} params.readTime - Optional. Optional snapshot read timestamp to trade freshness for performance.
     * @return {object} The API response object.
     */
    this.connect.get = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/connectSettings', 'GET', params);

    /**
     * Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.connect.generateEphemeralCert = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}:generateEphemeralCert', 'POST', params);

    this.databases = {};

    /**
     * Deletes a database from a Cloud SQL instance.
     * @param {string} params.database - (Required) Name of the database to be deleted in the instance.
     * @param {string} params.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.databases.delete = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases/{database}', 'DELETE', params);

    /**
     * Retrieves a resource containing information about a database inside a Cloud SQL instance.
     * @param {string} params.database - (Required) Name of the database in the instance.
     * @param {string} params.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.databases.get = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases/{database}', 'GET', params);

    /**
     * Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation.
     * @param {string} params.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.databases.insert = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases', 'POST', params);

    /**
     * Lists databases in the specified Cloud SQL instance.
     * @param {string} params.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.databases.list = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases', 'GET', params);

    /**
     * Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
     * @param {string} params.database - (Required) Name of the database to be updated in the instance.
     * @param {string} params.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.databases.patch = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases/{database}', 'PATCH', params);

    /**
     * Updates a resource containing information about a database inside a Cloud SQL instance.
     * @param {string} params.database - (Required) Name of the database to be updated in the instance.
     * @param {string} params.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.databases.update = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases/{database}', 'PUT', params);

    this.flags = {};

    /**
     * Lists all available database flags for Cloud SQL instances.
     * @param {string} params.databaseVersion - Database type and version you want to retrieve flags for. By default, this method returns flags for all database types and versions.
     * @param {string} params.flagScope - Optional. Specify the scope of flags to be returned by SqlFlagsListService. Return list of database flags if unspecified.
     * @return {object} The API response object.
     */
    this.flags.list = (params) => this._makeRequest('v1/flags', 'GET', params);

    this.operations = {};

    /**
     * Retrieves an instance operation that has been performed on an instance.
     * @param {string} params.operation - (Required) Instance operation ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v1/projects/{project}/operations/{operation}', 'GET', params);

    /**
     * Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.
     * @param {string} params.instance - Cloud SQL instance ID. This does not include the project ID.
     * @param {integer} params.maxResults - Maximum number of operations per response.
     * @param {string} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.operations.list = (params) => this._makeRequest('v1/projects/{project}/operations', 'GET', params);

    /**
     * Cancels an instance operation that has been performed on an instance.
     * @param {string} params.operation - (Required) Instance operation ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.operations.cancel = (params) => this._makeRequest('v1/projects/{project}/operations/{operation}/cancel', 'POST', params);

    this.tiers = {};

    /**
     * Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For more information, see https://cloud.google.com/sql/pricing.
     * @param {string} params.project - (Required) Project ID of the project for which to list tiers.
     * @return {object} The API response object.
     */
    this.tiers.list = (params) => this._makeRequest('v1/projects/{project}/tiers', 'GET', params);

    this.users = {};

    /**
     * Deletes a user from a Cloud SQL instance.
     * @param {string} params.host - Host of the user in the instance.
     * @param {string} params.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} params.name - Name of the user in the instance.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.users.delete = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/users', 'DELETE', params);

    /**
     * Retrieves a resource containing information about a user.
     * @param {string} params.host - Host of a user of the instance.
     * @param {string} params.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} params.name - (Required) User of the instance.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.users.get = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/users/{name}', 'GET', params);

    /**
     * Creates a new user in a Cloud SQL instance.
     * @param {string} params.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.insert = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/users', 'POST', params);

    /**
     * Lists users in the specified Cloud SQL instance.
     * @param {string} params.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @return {object} The API response object.
     */
    this.users.list = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/users', 'GET', params);

    /**
     * Updates an existing user in a Cloud SQL instance.
     * @param {string} params.host - Optional. Host of the user in the instance.
     * @param {string} params.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} params.name - Name of the user in the instance.
     * @param {string} params.project - (Required) Project ID of the project that contains the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.update = (params) => this._makeRequest('v1/projects/{project}/instances/{instance}/users', 'PUT', params);
  }

  /**
   * @private Builds the full request URL and options object.
   */
  _buildRequestDetails(path, httpMethod, params) {
    let url = this._rootUrl + this._servicePath + path;
    const remainingParams = { ...params };
    // Fix: Correctly handle {+param} style parameters and other potential special chars.
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
      const isPlus = placeholder.startsWith('{+');
      const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
      if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
        url = url.replace(placeholder, remainingParams[paramName]);
        delete remainingParams[paramName];
      }
    });

    const queryParts = [];
    for (const key in remainingParams) {
      if (key !== 'resource') {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
      }
    }
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }

    const options = {
      method: httpMethod,
      headers: { 'Authorization': 'Bearer ' + this._token },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };
    if (params && params.resource) {
      options.payload = JSON.stringify(params.resource);
    }
    
    return { url, options };
  }

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   */
  _makeRequest(path, httpMethod, params) {
    const { url, options } = this._buildRequestDetails(path, httpMethod, params);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseText = response.getContentText(); // Simplified call

      if (responseCode >= 200 && responseCode < 300) {
        return responseText ? JSON.parse(responseText) : {};
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      try {
        // Return parsed error if possible, otherwise a generic error object
        return JSON.parse(responseText);
      } catch (e) {
        return { error: { code: responseCode, message: responseText } };
      }
    }
    
    // This line is technically unreachable if retries >= 0, but good for safety.
    throw new Error('Request failed after multiple retries.');
  }
}
