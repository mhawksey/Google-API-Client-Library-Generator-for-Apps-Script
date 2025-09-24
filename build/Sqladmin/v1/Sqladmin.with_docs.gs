
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://sqladmin.googleapis.com/';
    this._servicePath = '';


    this.instances = {};

    /**
     * Adds a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in. For instances that have enabled Certificate Authority Service (CAS) based server CA, use AddServerCertificate to add a new server certificate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.addServerCa = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/addServerCa', 'POST', apiParams, clientConfig);

    /**
     * Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. Required to prepare for a certificate rotation. If a server certificate version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one certificate version waiting to be rotated in. For instances not using CAS server CA, use AddServerCa instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.addServerCertificate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/addServerCertificate', 'POST', apiParams, clientConfig);

    /**
     * Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the source as well as the clone Cloud SQL instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.clone = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/clone', 'POST', apiParams, clientConfig);

    /**
     * Deletes a Cloud SQL instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.enableFinalBackup - Flag to opt-in for final backup. By default, it is turned off.
     * @param {string} apiParams.finalBackupDescription - Optional. The description of the final backup.
     * @param {string} apiParams.finalBackupExpiryTime - Optional. Final Backup expiration time. Timestamp in UTC of when this resource is considered expired.
     * @param {string} apiParams.finalBackupTtlDays - Optional. Retention period of the final backup.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}', 'DELETE', apiParams, clientConfig);

    /**
     * Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance name.
     * @param {string} apiParams.project - (Required) ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.demoteMaster = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/demoteMaster', 'POST', apiParams, clientConfig);

    /**
     * Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Required. Cloud SQL instance name.
     * @param {string} apiParams.project - (Required) Required. ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.demote = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/demote', 'POST', apiParams, clientConfig);

    /**
     * Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance to be exported.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/export', 'POST', apiParams, clientConfig);

    /**
     * Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) ID of the project that contains the read replica.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.failover = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/failover', 'POST', apiParams, clientConfig);

    /**
     * Reencrypt CMEK instance with latest key version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.reencrypt = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/reencrypt', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a resource containing information about a Cloud SQL instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}', 'GET', apiParams, clientConfig);

    /**
     * Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/import', 'POST', apiParams, clientConfig);

    /**
     * Creates a new Cloud SQL instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.project - (Required) Project ID of the project to which the newly created Cloud SQL instances should belong.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances', 'POST', apiParams, clientConfig);

    /**
     * Lists instances under a given project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter expression that filters resources listed in the response. The expression is in the form of field:value. For example, 'instanceType:CLOUD_SQL_INSTANCE'. Fields can be nested as needed as per their JSON representation, such as 'settings.userLabels.auto_start:true'. Multiple filter queries are space-separated. For example. 'state:RUNNABLE instanceType:CLOUD_SQL_INSTANCE'. By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly.
     * @param {integer} apiParams.maxResults - The maximum number of instances to return. The service may return fewer than this value. If unspecified, at most 500 instances are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     * @param {string} apiParams.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} apiParams.project - (Required) Project ID of the project for which to list Cloud SQL instances.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances', 'GET', apiParams, clientConfig);

    /**
     * Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.listServerCas = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/listServerCas', 'GET', apiParams, clientConfig);

    /**
     * Lists all versions of server certificates and certificate authorities (CAs) for the specified instance. There can be up to three sets of certs listed: the certificate that is currently in use, a future that has been added but not yet used to sign a certificate, and a certificate that has been rotated out. For instances not using Certificate Authority Service (CAS) server CA, use ListServerCas instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Required. Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Required. Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.ListServerCertificates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/listServerCertificates', 'GET', apiParams, clientConfig);

    /**
     * Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}', 'PATCH', apiParams, clientConfig);

    /**
     * Promotes the read replica instance to be an independent Cloud SQL primary instance. Using this operation might cause your instance to restart.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.failover - Set to true to invoke a replica failover to the DR replica. As part of replica failover, the promote operation attempts to add the original primary instance as a replica of the promoted DR replica when the original primary instance comes back online. If set to false or not specified, then the original primary instance becomes an independent Cloud SQL primary instance.
     * @param {string} apiParams.instance - (Required) Cloud SQL read replica instance name.
     * @param {string} apiParams.project - (Required) ID of the project that contains the read replica.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.promoteReplica = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/promoteReplica', 'POST', apiParams, clientConfig);

    /**
     * Switches over from the primary instance to the DR replica instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dbTimeout - Optional. (MySQL and PostgreSQL only) Cloud SQL instance operations timeout, which is a sum of all database operations. Default value is 10 minutes and can be modified to a maximum value of 24 hours.
     * @param {string} apiParams.instance - (Required) Cloud SQL read replica instance name.
     * @param {string} apiParams.project - (Required) ID of the project that contains the replica.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.switchover = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/switchover', 'POST', apiParams, clientConfig);

    /**
     * Deletes all client certificates and generates a new server SSL certificate for the instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.mode - Optional. Reset SSL mode to use.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.resetSslConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/resetSslConfig', 'POST', apiParams, clientConfig);

    /**
     * Restarts a Cloud SQL instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance to be restarted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.restart = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/restart', 'POST', apiParams, clientConfig);

    /**
     * Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.restoreBackup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/restoreBackup', 'POST', apiParams, clientConfig);

    /**
     * Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. For instances that have enabled Certificate Authority Service (CAS) based server CA, use RotateServerCertificate to rotate the server certificate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.rotateServerCa = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/rotateServerCa', 'POST', apiParams, clientConfig);

    /**
     * Rotates the server certificate version to one previously added with the addServerCertificate method. For instances not using Certificate Authority Service (CAS) server CA, use RotateServerCa instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Required. Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Required. Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.RotateServerCertificate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/rotateServerCertificate', 'POST', apiParams, clientConfig);

    /**
     * Starts the replication in the read replica instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL read replica instance name.
     * @param {string} apiParams.project - (Required) ID of the project that contains the read replica.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.startReplica = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/startReplica', 'POST', apiParams, clientConfig);

    /**
     * Stops the replication in the read replica instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL read replica instance name.
     * @param {string} apiParams.project - (Required) ID of the project that contains the read replica.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.stopReplica = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/stopReplica', 'POST', apiParams, clientConfig);

    /**
     * Truncate MySQL general and slow query log tables MySQL only.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the Cloud SQL project.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.truncateLog = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/truncateLog', 'POST', apiParams, clientConfig);

    /**
     * Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}', 'PUT', apiParams, clientConfig);

    /**
     * Execute SQL statements.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Required. Database instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Required. Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.executeSql = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/executeSql', 'POST', apiParams, clientConfig);

    /**
     * Acquire a lease for the setup of SQL Server Reporting Services (SSRS).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Required. Cloud SQL instance ID. This doesn't include the project ID. It's composed of lowercase letters, numbers, and hyphens, and it must start with a letter. The total length must be 98 characters or less (Example: instance-id).
     * @param {string} apiParams.project - (Required) Required. Project ID of the project that contains the instance (Example: project-id).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.acquireSsrsLease = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/acquireSsrsLease', 'POST', apiParams, clientConfig);

    /**
     * Release a lease for the setup of SQL Server Reporting Services (SSRS).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Required. The Cloud SQL instance ID. This doesn't include the project ID. The instance ID contains lowercase letters, numbers, and hyphens, and it must start with a letter. This ID can have a maximum length of 98 characters.
     * @param {string} apiParams.project - (Required) Required. The project ID that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.releaseSsrsLease = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/releaseSsrsLease', 'POST', apiParams, clientConfig);

    /**
     * Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where you created this instance. Format: projects/{project}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.instances.pointInTimeRestore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:pointInTimeRestore', 'POST', apiParams, clientConfig);

    this.sslCerts = {};

    /**
     * Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the Cloud SQL project.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sslCerts.createEphemeral = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/createEphemeral', 'POST', apiParams, clientConfig);

    /**
     * Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {string} apiParams.sha1Fingerprint - (Required) Sha1 FingerPrint.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sslCerts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {string} apiParams.sha1Fingerprint - (Required) Sha1 FingerPrint.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sslCerts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}', 'GET', apiParams, clientConfig);

    /**
     * Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sslCerts.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/sslCerts', 'POST', apiParams, clientConfig);

    /**
     * Lists all of the current SSL certificates for the instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sslCerts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/sslCerts', 'GET', apiParams, clientConfig);

    this.projects = {};

    this.projects.instances = {};

    /**
     * Reschedules the maintenance on the given instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.instances.rescheduleMaintenance = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/rescheduleMaintenance', 'POST', apiParams, clientConfig);

    /**
     * Verify External primary instance external sync settings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.instances.verifyExternalSyncSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/verifyExternalSyncSettings', 'POST', apiParams, clientConfig);

    /**
     * Start External primary instance migration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.instances.startExternalSync = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/startExternalSync', 'POST', apiParams, clientConfig);

    /**
     * Perform Disk Shrink on primary instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.instances.performDiskShrink = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/performDiskShrink', 'POST', apiParams, clientConfig);

    /**
     * Get Disk Shrink Config for a given instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.instances.getDiskShrinkConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/getDiskShrinkConfig', 'GET', apiParams, clientConfig);

    /**
     * Reset Replica Size to primary instance disk size.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL read replica instance name.
     * @param {string} apiParams.project - (Required) ID of the project that contains the read replica.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.instances.resetReplicaSize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/resetReplicaSize', 'POST', apiParams, clientConfig);

    /**
     * Get Latest Recovery Time for a given instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {string} apiParams.sourceInstanceDeletionTime - The timestamp used to identify the time when the source instance is deleted. If this instance is deleted, then you must set the timestamp.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.instances.getLatestRecoveryTime = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/getLatestRecoveryTime', 'GET', apiParams, clientConfig);

    this.backupRuns = {};

    /**
     * Deletes the backup taken by a backup run.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the backup run to delete. To find a backup run ID, use the [list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/backupRuns/list) method.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.backupRuns.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/backupRuns/{id}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a resource containing information about a backup run.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of this backup run.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.backupRuns.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/backupRuns/{id}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new backup run on demand.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.backupRuns.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/backupRuns', 'POST', apiParams, clientConfig);

    /**
     * Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID, or "-" for all instances. This does not include the project ID.
     * @param {integer} apiParams.maxResults - Maximum number of backup runs per response.
     * @param {string} apiParams.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.backupRuns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/backupRuns', 'GET', apiParams, clientConfig);

    this.Backups = {};

    /**
     * Creates a backup for a Cloud SQL instance. This API can be used only to create on-demand backups.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this backup is created. Format: projects/{project}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.Backups.CreateBackup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/backups', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a resource containing information about a backup.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the backup to retrieve. Format: projects/{project}/backups/{backup}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.Backups.GetBackup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all backups associated with the project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Multiple filter queries are separated by spaces. For example, 'instance:abc AND type:FINAL, 'location:us', 'backupInterval.startTime>=1950-01-01T01:01:25.771Z'. You can filter by type, instance, backupInterval.startTime (creation time), or location.
     * @param {integer} apiParams.pageSize - The maximum number of backups to return per response. The service might return fewer backups than this value. If a value for this parameter isn't specified, then, at most, 500 backups are returned. The maximum value is 2,000. Any values that you set, which are greater than 2,000, are changed to 2,000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListBackups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBackups` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent that owns this collection of backups. Format: projects/{project}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.Backups.ListBackups = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/backups', 'GET', apiParams, clientConfig);

    /**
     * Updates the retention period and description of the backup. You can use this API to update final backups only.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name of the backup. Format: projects/{project}/backups/{backup}.
     * @param {string} apiParams.updateMask - The list of fields that you can update. You can update only the description and retention period of the final backup.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.Backups.UpdateBackup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the backup.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the backup to delete. Format: projects/{project}/backups/{backup}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.Backups.DeleteBackup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.connect = {};

    /**
     * Retrieves connect settings about a Cloud SQL instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {string} apiParams.readTime - Optional. Optional snapshot read timestamp to trade freshness for performance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.connect.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/connectSettings', 'GET', apiParams, clientConfig);

    /**
     * Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.connect.generateEphemeralCert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}:generateEphemeralCert', 'POST', apiParams, clientConfig);

    this.databases = {};

    /**
     * Deletes a database from a Cloud SQL instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.database - (Required) Name of the database to be deleted in the instance.
     * @param {string} apiParams.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.databases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases/{database}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a resource containing information about a database inside a Cloud SQL instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.database - (Required) Name of the database in the instance.
     * @param {string} apiParams.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.databases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases/{database}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.databases.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases', 'POST', apiParams, clientConfig);

    /**
     * Lists databases in the specified Cloud SQL instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Cloud SQL instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.databases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases', 'GET', apiParams, clientConfig);

    /**
     * Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.database - (Required) Name of the database to be updated in the instance.
     * @param {string} apiParams.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.databases.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases/{database}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates a resource containing information about a database inside a Cloud SQL instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.database - (Required) Name of the database to be updated in the instance.
     * @param {string} apiParams.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.databases.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases/{database}', 'PUT', apiParams, clientConfig);

    this.flags = {};

    /**
     * Lists all available database flags for Cloud SQL instances.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.databaseVersion - Database type and version you want to retrieve flags for. By default, this method returns flags for all database types and versions.
     * @param {string} apiParams.flagScope - Optional. Specify the scope of flags to be returned by SqlFlagsListService. Return list of database flags if unspecified.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.flags.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/flags', 'GET', apiParams, clientConfig);

    this.operations = {};

    /**
     * Retrieves an instance operation that has been performed on an instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.operation - (Required) Instance operation ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/operations/{operation}', 'GET', apiParams, clientConfig);

    /**
     * Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - Cloud SQL instance ID. This does not include the project ID.
     * @param {integer} apiParams.maxResults - Maximum number of operations per response.
     * @param {string} apiParams.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/operations', 'GET', apiParams, clientConfig);

    /**
     * Cancels an instance operation that has been performed on an instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.operation - (Required) Instance operation ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/operations/{operation}/cancel', 'POST', apiParams, clientConfig);

    this.tiers = {};

    /**
     * Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For more information, see https://cloud.google.com/sql/pricing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.project - (Required) Project ID of the project for which to list tiers.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tiers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/tiers', 'GET', apiParams, clientConfig);

    this.users = {};

    /**
     * Deletes a user from a Cloud SQL instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.host - Host of the user in the instance.
     * @param {string} apiParams.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} apiParams.name - Name of the user in the instance.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/users', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a resource containing information about a user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.host - Host of a user of the instance.
     * @param {string} apiParams.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} apiParams.name - (Required) User of the instance.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/users/{name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new user in a Cloud SQL instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/users', 'POST', apiParams, clientConfig);

    /**
     * Lists users in the specified Cloud SQL instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/users', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing user in a Cloud SQL instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.host - Optional. Host of the user in the instance.
     * @param {string} apiParams.instance - (Required) Database instance ID. This does not include the project ID.
     * @param {string} apiParams.name - Name of the user in the instance.
     * @param {string} apiParams.project - (Required) Project ID of the project that contains the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/users', 'PUT', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
