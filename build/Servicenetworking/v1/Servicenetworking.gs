
/**
 * Google Apps Script client library for the Service Networking API
 * Documentation URL: https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started
 * @class
 */
class Servicenetworking {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://servicenetworking.googleapis.com/';
    this._servicePath = '';


    this.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - (Required) The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.services = {};

    /**
     * Disables VPC service controls for a connection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.disableVpcServiceControls = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:disableVpcServiceControls', 'PATCH', apiParams, clientConfig);

    /**
     * Enables VPC service controls for a connection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.enableVpcServiceControls = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:enableVpcServiceControls', 'PATCH', apiParams, clientConfig);

    /**
     * For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. A tenant project in the service producer organization, in the following format: services/{service}/{collection-id}/{resource-id}. {collection-id} is the cloud resource collection type that represents the tenant project. Only `projects` are supported. {resource-id} is the tenant project numeric id, such as `123456`. {service} the name of the peering service, such as `service-peering.example.com`. This service must already be enabled in the service consumer's project.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.addSubnetwork = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:addSubnetwork', 'POST', apiParams, clientConfig);

    /**
     * Service producers can use this method to find a currently unused range within consumer allocated ranges. This returned range is not reserved, and not guaranteed to remain unused. It will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range notation).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. This is in a form services/{service}. {service} the name of the private access management service, for example 'service-peering.example.com'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.searchRange = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:searchRange', 'POST', apiParams, clientConfig);

    /**
     * Service producers use this method to validate if the consumer provided network, project and requested range are valid. This allows them to use a fail-fast mechanism for consumer requests, and not have to wait for AddSubnetwork operation completion to determine if user request is invalid.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. This is in a form services/{service} where {service} is the name of the private access management service. For example 'service-peering.example.com'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.validate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:validate', 'POST', apiParams, clientConfig);

    this.services.connections = {};

    /**
     * List the private connections that are configured in a service consumer's VPC network.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.network - Required. The name of service consumer's VPC network that's connected with service producer network through a private connection. The network name must be in the following format: `projects/{project}/global/networks/{network}`. {project} is a project number, such as in `12345` that includes the VPC service consumer's VPC network. {network} is the name of the service consumer's VPC network.
     * @param {string} apiParams.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`. If you specify `services/-` as the parameter value, all configured peering services are listed.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.connections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connections', 'GET', apiParams, clientConfig);

    /**
     * Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used for all supported services in the service producer's organization, so it only needs to be invoked once.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.connections.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connections', 'POST', apiParams, clientConfig);

    /**
     * Deletes a private service access connection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The private service connection that connects to a service producer organization. The name includes both the private service name and the VPC network peering name in the format of `services/{peering_service_name}/connections/{vpc_peering_name}`. For Google services that support this functionality, this is `services/servicenetworking.googleapis.com/connections/servicenetworking-googleapis-com`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.connections.deleteConnection = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);

    /**
     * Updates the allocated ranges that are assigned to a connection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - If a previously defined allocated range is removed, force flag must be set to true.
     * @param {string} apiParams.name - (Required) Required. The private service connection that connects to a service producer organization. The name includes both the private service name and the VPC network peering name in the format of `services/{peering_service_name}/connections/{vpc_peering_name}`. For Google services that support this functionality, this is `services/servicenetworking.googleapis.com/connections/servicenetworking-googleapis-com`.
     * @param {string} apiParams.updateMask - The update mask. If this is omitted, it defaults to "*". You can only update the listed peering ranges.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.connections.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.services.projects = {};

    this.services.projects.global = {};

    this.services.projects.global.networks = {};

    /**
     * Consumers use this method to find out the state of VPC Service Controls. The controls could be enabled or disabled for a connection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the VPC Service Controls config to retrieve in the format: `services/{service}/projects/{project}/global/networks/{network}`. {service} is the peering service that is managing connectivity for the service producer's organization. For Google services that support this functionality, this value is `servicenetworking.googleapis.com`. {project} is a project number e.g. `12345` that contains the service consumer's VPC network. {network} is the name of the service consumer's VPC network.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.projects.global.networks.getVpcServiceControls = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/vpcServiceControls', 'GET', apiParams, clientConfig);

    /**
     * Service producers use this method to update the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Parent resource identifying the connection for which the consumer config is being updated in the format: `services/{service}/projects/{project}/global/networks/{network}` {service} is the peering service that is managing connectivity for the service producer's organization. For Google services that support this functionality, this value is `servicenetworking.googleapis.com`. {project} is the number of the project that contains the service consumer's VPC network e.g. `12345`. {network} is the name of the service consumer's VPC network.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.projects.global.networks.updateConsumerConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:updateConsumerConfig', 'PATCH', apiParams, clientConfig);

    /**
     * Service producers use this method to get the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.includeUsedIpRanges - Optional. When true, include the used IP ranges as part of the GetConsumerConfig output. This includes routes created inside the service networking network, consumer network, peers of the consumer network, and reserved ranges inside the service networking network. By default, this is false
     * @param {string} apiParams.name - (Required) Required. Name of the consumer config to retrieve in the format: `services/{service}/projects/{project}/global/networks/{network}`. {service} is the peering service that is managing connectivity for the service producer's organization. For Google services that support this functionality, this value is `servicenetworking.googleapis.com`. {project} is a project number e.g. `12345` that contains the service consumer's VPC network. {network} is the name of the service consumer's VPC network.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.projects.global.networks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.services.projects.global.networks.dnsZones = {};

    /**
     * * Service producers can use this method to retrieve a list of available DNS zones in the shared producer host project and the matching peering zones in the consumer project. *
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Parent resource identifying the connection which owns this collection of DNS zones in the format services/{service}/projects/{project}/global/networks/{network} Service: The service that is managing connectivity for the service producer's organization. For Google services that support this functionality, this value is `servicenetworking.googleapis.com`. Projects: the consumer project containing the consumer network. Network: The consumer network accessible from the tenant project.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.projects.global.networks.dnsZones.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dnsZones:list', 'GET', apiParams, clientConfig);

    /**
     * Service producers can use this method to retrieve a DNS zone in the shared producer host project and the matching peering zones in consumer project
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The network that the consumer is using to connect with services. Must be in the form of services/{service}/projects/{project}/global/networks/{network}/dnsZones/{zoneName} Where {service} is the peering service that is managing connectivity for the service producer's organization. For Google services that support this {project} is the project number, as in '12345' {network} is the network name. {zoneName} is the DNS zone name
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.projects.global.networks.dnsZones.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.services.projects.global.networks.peeredDnsDomains = {};

    /**
     * Creates a peered DNS domain which sends requests for records in given namespace originating in the service producer VPC network to the consumer VPC network to be resolved.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Parent resource identifying the connection for which the peered DNS domain will be created in the format: `services/{service}/projects/{project}/global/networks/{network}` {service} is the peering service that is managing connectivity for the service producer's organization. For Google services that support this functionality, this value is `servicenetworking.googleapis.com`. {project} is the number of the project that contains the service consumer's VPC network e.g. `12345`. {network} is the name of the service consumer's VPC network.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.projects.global.networks.peeredDnsDomains.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/peeredDnsDomains', 'POST', apiParams, clientConfig);

    /**
     * Deletes a peered DNS domain.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the peered DNS domain to delete in the format: `services/{service}/projects/{project}/global/networks/{network}/peeredDnsDomains/{name}`. {service} is the peering service that is managing connectivity for the service producer's organization. For Google services that support this functionality, this value is `servicenetworking.googleapis.com`. {project} is the number of the project that contains the service consumer's VPC network e.g. `12345`. {network} is the name of the service consumer's VPC network. {name} is the name of the peered DNS domain.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.projects.global.networks.peeredDnsDomains.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists peered DNS domains for a connection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Parent resource identifying the connection which owns this collection of peered DNS domains in the format: `services/{service}/projects/{project}/global/networks/{network}`. {service} is the peering service that is managing connectivity for the service producer's organization. For Google services that support this functionality, this value is `servicenetworking.googleapis.com`. {project} is a project number e.g. `12345` that contains the service consumer's VPC network. {network} is the name of the service consumer's VPC network.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.projects.global.networks.peeredDnsDomains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/peeredDnsDomains', 'GET', apiParams, clientConfig);

    this.services.roles = {};

    /**
     * Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set of roles. Each role is applied at only the granularity specified in the allowlist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. This is in a form services/{service} where {service} is the name of the private access management service. For example 'service-peering.example.com'.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.roles.add = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/roles:add', 'POST', apiParams, clientConfig);

    this.services.dnsZones = {};

    /**
     * Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.dnsZones.add = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dnsZones:add', 'POST', apiParams, clientConfig);

    /**
     * Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.dnsZones.remove = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dnsZones:remove', 'POST', apiParams, clientConfig);

    this.services.dnsRecordSets = {};

    /**
     * Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.dnsRecordSets.add = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dnsRecordSets:add', 'POST', apiParams, clientConfig);

    /**
     * Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.dnsRecordSets.remove = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dnsRecordSets:remove', 'POST', apiParams, clientConfig);

    /**
     * Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.dnsRecordSets.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dnsRecordSets:update', 'POST', apiParams, clientConfig);

    /**
     * Producers can use this method to retrieve information about the DNS record set added to the private zone inside the shared tenant host project associated with a consumer network.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.consumerNetwork - Required. The consumer network containing the record set. Must be in the form of projects/{project}/global/networks/{network}
     * @param {string} apiParams.domain - Required. The domain name of the zone containing the recordset.
     * @param {string} apiParams.parent - (Required) Required. Parent resource identifying the connection which owns this collection of DNS zones in the format services/{service}.
     * @param {string} apiParams.type - Required. RecordSet Type eg. type='A'. See the list of [Supported DNS Types](https://cloud.google.com/dns/records/json-record).
     * @param {string} apiParams.zone - Required. The name of the zone containing the record set.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.dnsRecordSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dnsRecordSets:get', 'GET', apiParams, clientConfig);

    /**
     * Producers can use this method to retrieve a list of available DNS RecordSets available inside the private zone on the tenant host project accessible from their network.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.consumerNetwork - Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is the project number, as in '12345' {network} is the network name.
     * @param {string} apiParams.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {string} apiParams.zone - Required. The name of the private DNS zone in the shared producer host project from which the record set will be removed.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.dnsRecordSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dnsRecordSets:list', 'GET', apiParams, clientConfig);
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
