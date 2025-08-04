
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://servicenetworking.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.services = {};

    /**
     * Disables VPC service controls for a connection.
     * @param {string} params.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.disableVpcServiceControls = (params) => this._makeRequest('v1/{+parent}:disableVpcServiceControls', 'PATCH', params);

    /**
     * Enables VPC service controls for a connection.
     * @param {string} params.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.enableVpcServiceControls = (params) => this._makeRequest('v1/{+parent}:enableVpcServiceControls', 'PATCH', params);

    /**
     * For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed.
     * @param {string} params.parent - (Required) Required. A tenant project in the service producer organization, in the following format: services/{service}/{collection-id}/{resource-id}. {collection-id} is the cloud resource collection type that represents the tenant project. Only `projects` are supported. {resource-id} is the tenant project numeric id, such as `123456`. {service} the name of the peering service, such as `service-peering.example.com`. This service must already be enabled in the service consumer's project.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.addSubnetwork = (params) => this._makeRequest('v1/{+parent}:addSubnetwork', 'POST', params);

    /**
     * Service producers can use this method to find a currently unused range within consumer allocated ranges. This returned range is not reserved, and not guaranteed to remain unused. It will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range notation).
     * @param {string} params.parent - (Required) Required. This is in a form services/{service}. {service} the name of the private access management service, for example 'service-peering.example.com'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.searchRange = (params) => this._makeRequest('v1/{+parent}:searchRange', 'POST', params);

    /**
     * Service producers use this method to validate if the consumer provided network, project and requested range are valid. This allows them to use a fail-fast mechanism for consumer requests, and not have to wait for AddSubnetwork operation completion to determine if user request is invalid.
     * @param {string} params.parent - (Required) Required. This is in a form services/{service} where {service} is the name of the private access management service. For example 'service-peering.example.com'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.validate = (params) => this._makeRequest('v1/{+parent}:validate', 'POST', params);

    this.services.connections = {};

    /**
     * List the private connections that are configured in a service consumer's VPC network.
     * @param {string} params.network - Required. The name of service consumer's VPC network that's connected with service producer network through a private connection. The network name must be in the following format: `projects/{project}/global/networks/{network}`. {project} is a project number, such as in `12345` that includes the VPC service consumer's VPC network. {network} is the name of the service consumer's VPC network.
     * @param {string} params.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`. If you specify `services/-` as the parameter value, all configured peering services are listed.
     * @return {object} The API response object.
     */
    this.services.connections.list = (params) => this._makeRequest('v1/{+parent}/connections', 'GET', params);

    /**
     * Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used for all supported services in the service producer's organization, so it only needs to be invoked once.
     * @param {string} params.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.connections.create = (params) => this._makeRequest('v1/{+parent}/connections', 'POST', params);

    /**
     * Deletes a private service access connection.
     * @param {string} params.name - (Required) Required. The private service connection that connects to a service producer organization. The name includes both the private service name and the VPC network peering name in the format of `services/{peering_service_name}/connections/{vpc_peering_name}`. For Google services that support this functionality, this is `services/servicenetworking.googleapis.com/connections/servicenetworking-googleapis-com`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.connections.deleteConnection = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    /**
     * Updates the allocated ranges that are assigned to a connection.
     * @param {boolean} params.force - If a previously defined allocated range is removed, force flag must be set to true.
     * @param {string} params.name - (Required) Required. The private service connection that connects to a service producer organization. The name includes both the private service name and the VPC network peering name in the format of `services/{peering_service_name}/connections/{vpc_peering_name}`. For Google services that support this functionality, this is `services/servicenetworking.googleapis.com/connections/servicenetworking-googleapis-com`.
     * @param {string} params.updateMask - The update mask. If this is omitted, it defaults to "*". You can only update the listed peering ranges.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.connections.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.services.projects = {};

    this.services.projects.global = {};

    this.services.projects.global.networks = {};

    /**
     * Consumers use this method to find out the state of VPC Service Controls. The controls could be enabled or disabled for a connection.
     * @param {string} params.name - (Required) Required. Name of the VPC Service Controls config to retrieve in the format: `services/{service}/projects/{project}/global/networks/{network}`. {service} is the peering service that is managing connectivity for the service producer's organization. For Google services that support this functionality, this value is `servicenetworking.googleapis.com`. {project} is a project number e.g. `12345` that contains the service consumer's VPC network. {network} is the name of the service consumer's VPC network.
     * @return {object} The API response object.
     */
    this.services.projects.global.networks.getVpcServiceControls = (params) => this._makeRequest('v1/{+name}/vpcServiceControls', 'GET', params);

    /**
     * Service producers use this method to update the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
     * @param {string} params.parent - (Required) Required. Parent resource identifying the connection for which the consumer config is being updated in the format: `services/{service}/projects/{project}/global/networks/{network}` {service} is the peering service that is managing connectivity for the service producer's organization. For Google services that support this functionality, this value is `servicenetworking.googleapis.com`. {project} is the number of the project that contains the service consumer's VPC network e.g. `12345`. {network} is the name of the service consumer's VPC network.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.projects.global.networks.updateConsumerConfig = (params) => this._makeRequest('v1/{+parent}:updateConsumerConfig', 'PATCH', params);

    /**
     * Service producers use this method to get the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
     * @param {boolean} params.includeUsedIpRanges - Optional. When true, include the used IP ranges as part of the GetConsumerConfig output. This includes routes created inside the service networking network, consumer network, peers of the consumer network, and reserved ranges inside the service networking network. By default, this is false
     * @param {string} params.name - (Required) Required. Name of the consumer config to retrieve in the format: `services/{service}/projects/{project}/global/networks/{network}`. {service} is the peering service that is managing connectivity for the service producer's organization. For Google services that support this functionality, this value is `servicenetworking.googleapis.com`. {project} is a project number e.g. `12345` that contains the service consumer's VPC network. {network} is the name of the service consumer's VPC network.
     * @return {object} The API response object.
     */
    this.services.projects.global.networks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.services.projects.global.networks.dnsZones = {};

    /**
     * * Service producers can use this method to retrieve a list of available DNS zones in the shared producer host project and the matching peering zones in the consumer project. *
     * @param {string} params.parent - (Required) Required. Parent resource identifying the connection which owns this collection of DNS zones in the format services/{service}/projects/{project}/global/networks/{network} Service: The service that is managing connectivity for the service producer's organization. For Google services that support this functionality, this value is `servicenetworking.googleapis.com`. Projects: the consumer project containing the consumer network. Network: The consumer network accessible from the tenant project.
     * @return {object} The API response object.
     */
    this.services.projects.global.networks.dnsZones.list = (params) => this._makeRequest('v1/{+parent}/dnsZones:list', 'GET', params);

    /**
     * Service producers can use this method to retrieve a DNS zone in the shared producer host project and the matching peering zones in consumer project
     * @param {string} params.name - (Required) Required. The network that the consumer is using to connect with services. Must be in the form of services/{service}/projects/{project}/global/networks/{network}/dnsZones/{zoneName} Where {service} is the peering service that is managing connectivity for the service producer's organization. For Google services that support this {project} is the project number, as in '12345' {network} is the network name. {zoneName} is the DNS zone name
     * @return {object} The API response object.
     */
    this.services.projects.global.networks.dnsZones.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.services.projects.global.networks.peeredDnsDomains = {};

    /**
     * Creates a peered DNS domain which sends requests for records in given namespace originating in the service producer VPC network to the consumer VPC network to be resolved.
     * @param {string} params.parent - (Required) Required. Parent resource identifying the connection for which the peered DNS domain will be created in the format: `services/{service}/projects/{project}/global/networks/{network}` {service} is the peering service that is managing connectivity for the service producer's organization. For Google services that support this functionality, this value is `servicenetworking.googleapis.com`. {project} is the number of the project that contains the service consumer's VPC network e.g. `12345`. {network} is the name of the service consumer's VPC network.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.projects.global.networks.peeredDnsDomains.create = (params) => this._makeRequest('v1/{+parent}/peeredDnsDomains', 'POST', params);

    /**
     * Deletes a peered DNS domain.
     * @param {string} params.name - (Required) Required. The name of the peered DNS domain to delete in the format: `services/{service}/projects/{project}/global/networks/{network}/peeredDnsDomains/{name}`. {service} is the peering service that is managing connectivity for the service producer's organization. For Google services that support this functionality, this value is `servicenetworking.googleapis.com`. {project} is the number of the project that contains the service consumer's VPC network e.g. `12345`. {network} is the name of the service consumer's VPC network. {name} is the name of the peered DNS domain.
     * @return {object} The API response object.
     */
    this.services.projects.global.networks.peeredDnsDomains.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists peered DNS domains for a connection.
     * @param {string} params.parent - (Required) Required. Parent resource identifying the connection which owns this collection of peered DNS domains in the format: `services/{service}/projects/{project}/global/networks/{network}`. {service} is the peering service that is managing connectivity for the service producer's organization. For Google services that support this functionality, this value is `servicenetworking.googleapis.com`. {project} is a project number e.g. `12345` that contains the service consumer's VPC network. {network} is the name of the service consumer's VPC network.
     * @return {object} The API response object.
     */
    this.services.projects.global.networks.peeredDnsDomains.list = (params) => this._makeRequest('v1/{+parent}/peeredDnsDomains', 'GET', params);

    this.services.roles = {};

    /**
     * Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set of roles. Each role is applied at only the granularity specified in the allowlist.
     * @param {string} params.parent - (Required) Required. This is in a form services/{service} where {service} is the name of the private access management service. For example 'service-peering.example.com'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.roles.add = (params) => this._makeRequest('v1/{+parent}/roles:add', 'POST', params);

    this.services.dnsZones = {};

    /**
     * Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project.
     * @param {string} params.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.dnsZones.add = (params) => this._makeRequest('v1/{+parent}/dnsZones:add', 'POST', params);

    /**
     * Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project.
     * @param {string} params.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.dnsZones.remove = (params) => this._makeRequest('v1/{+parent}/dnsZones:remove', 'POST', params);

    this.services.dnsRecordSets = {};

    /**
     * Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project.
     * @param {string} params.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.dnsRecordSets.add = (params) => this._makeRequest('v1/{+parent}/dnsRecordSets:add', 'POST', params);

    /**
     * Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project.
     * @param {string} params.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.dnsRecordSets.remove = (params) => this._makeRequest('v1/{+parent}/dnsRecordSets:remove', 'POST', params);

    /**
     * Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project.
     * @param {string} params.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.dnsRecordSets.update = (params) => this._makeRequest('v1/{+parent}/dnsRecordSets:update', 'POST', params);

    /**
     * Producers can use this method to retrieve information about the DNS record set added to the private zone inside the shared tenant host project associated with a consumer network.
     * @param {string} params.consumerNetwork - Required. The consumer network containing the record set. Must be in the form of projects/{project}/global/networks/{network}
     * @param {string} params.domain - Required. The domain name of the zone containing the recordset.
     * @param {string} params.parent - (Required) Required. Parent resource identifying the connection which owns this collection of DNS zones in the format services/{service}.
     * @param {string} params.type - Required. RecordSet Type eg. type='A'. See the list of [Supported DNS Types](https://cloud.google.com/dns/records/json-record).
     * @param {string} params.zone - Required. The name of the zone containing the record set.
     * @return {object} The API response object.
     */
    this.services.dnsRecordSets.get = (params) => this._makeRequest('v1/{+parent}/dnsRecordSets:get', 'GET', params);

    /**
     * Producers can use this method to retrieve a list of available DNS RecordSets available inside the private zone on the tenant host project accessible from their network.
     * @param {string} params.consumerNetwork - Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is the project number, as in '12345' {network} is the network name.
     * @param {string} params.parent - (Required) Required. The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {string} params.zone - Required. The name of the private DNS zone in the shared producer host project from which the record set will be removed.
     * @return {object} The API response object.
     */
    this.services.dnsRecordSets.list = (params) => this._makeRequest('v1/{+parent}/dnsRecordSets:list', 'GET', params);
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
