
/**
 * Google Apps Script client library for the Books API
 * Documentation URL: https://code.google.com/apis/books/docs/v1/getting_started.html
 * @class
 */
class Books {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://books.googleapis.com/';
    this._servicePath = '';


    this.bookshelves = {};

    /**
     * Retrieves metadata for a specific bookshelf for the specified user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.shelf - (Required) ID of bookshelf to retrieve.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.userId - (Required) ID of user for whom to retrieve bookshelves.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bookshelves.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/users/{userId}/bookshelves/{shelf}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of public bookshelves for the specified user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.userId - (Required) ID of user for whom to retrieve bookshelves.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bookshelves.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/users/{userId}/bookshelves', 'GET', apiParams, clientConfig);

    this.bookshelves.volumes = {};

    /**
     * Retrieves volumes in a specific bookshelf for the specified user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Maximum number of results to return
     * @param {string} apiParams.shelf - (Required) ID of bookshelf to retrieve volumes.
     * @param {boolean} apiParams.showPreorders - Set to true to show pre-ordered books. Defaults to false.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {integer} apiParams.startIndex - Index of the first element to return (starts at 0)
     * @param {string} apiParams.userId - (Required) ID of user for whom to retrieve bookshelf volumes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bookshelves.volumes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/users/{userId}/bookshelves/{shelf}/volumes', 'GET', apiParams, clientConfig);

    this.cloudloading = {};

    /**
     * Add a user-upload volume and triggers processing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.drive_document_id - A drive document id. The upload_client_token must not be set.
     * @param {string} apiParams.mime_type - The document MIME type. It can be set only if the drive_document_id is set.
     * @param {string} apiParams.name - The document name. It can be set only if the drive_document_id is set.
     * @param {string} apiParams.upload_client_token - Scotty upload token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.cloudloading.addBook = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/cloudloading/addBook', 'POST', apiParams, clientConfig);

    /**
     * Remove the book and its contents
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.volumeId - (Required) The id of the book to be removed.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.cloudloading.deleteBook = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/cloudloading/deleteBook', 'POST', apiParams, clientConfig);

    /**
     * Updates a user-upload volume.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.cloudloading.updateBook = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/cloudloading/updateBook', 'POST', apiParams, clientConfig);

    this.dictionary = {};

    /**
     * Returns a list of offline dictionary metadata available
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.cpksver - (Required) The device/version ID from which to request the data.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.dictionary.listOfflineMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/dictionary/listOfflineMetadata', 'GET', apiParams, clientConfig);

    this.familysharing = {};

    /**
     * Gets information regarding the family that the user is part of.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.familysharing.getFamilyInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/familysharing/getFamilyInfo', 'GET', apiParams, clientConfig);

    /**
     * Initiates sharing of the content with the user's family. Empty response indicates success.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.docId - The docid to share.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.volumeId - The volume to share.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.familysharing.share = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/familysharing/share', 'POST', apiParams, clientConfig);

    /**
     * Initiates revoking content that has already been shared with the user's family. Empty response indicates success.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.docId - The docid to unshare.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.volumeId - The volume to unshare.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.familysharing.unshare = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/familysharing/unshare', 'POST', apiParams, clientConfig);

    this.layers = {};

    /**
     * Gets the layer summary for a volume.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.contentVersion - The content version for the requested volume.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.summaryId - (Required) The ID for the layer to get the summary for.
     * @param {string} apiParams.volumeId - (Required) The volume to retrieve layers for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.layers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/{volumeId}/layersummary/{summaryId}', 'GET', apiParams, clientConfig);

    /**
     * List the layer summaries for a volume.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.contentVersion - The content version for the requested volume.
     * @param {integer} apiParams.maxResults - Maximum number of results to return
     * @param {string} apiParams.pageToken - The value of the nextToken from the previous page.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.volumeId - (Required) The volume to retrieve layers for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.layers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/{volumeId}/layersummary', 'GET', apiParams, clientConfig);

    this.layers.annotationData = {};

    /**
     * Gets the annotation data.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowWebDefinitions - For the dictionary layer. Whether or not to allow web definitions.
     * @param {string} apiParams.annotationDataId - (Required) The ID of the annotation data to retrieve.
     * @param {string} apiParams.contentVersion - (Required) The content version for the volume you are trying to retrieve.
     * @param {integer} apiParams.h - The requested pixel height for any images. If height is provided width must also be provided.
     * @param {string} apiParams.layerId - (Required) The ID for the layer to get the annotations.
     * @param {string} apiParams.locale - The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     * @param {integer} apiParams.scale - The requested scale for the image.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.volumeId - (Required) The volume to retrieve annotations for.
     * @param {integer} apiParams.w - The requested pixel width for any images. If width is provided height must also be provided.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.layers.annotationData.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}', 'GET', apiParams, clientConfig);

    /**
     * Gets the annotation data for a volume and layer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.annotationDataId - The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
     * @param {string} apiParams.contentVersion - (Required) The content version for the requested volume.
     * @param {integer} apiParams.h - The requested pixel height for any images. If height is provided width must also be provided.
     * @param {string} apiParams.layerId - (Required) The ID for the layer to get the annotation data.
     * @param {string} apiParams.locale - The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     * @param {integer} apiParams.maxResults - Maximum number of results to return
     * @param {string} apiParams.pageToken - The value of the nextToken from the previous page.
     * @param {integer} apiParams.scale - The requested scale for the image.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.updatedMax - RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     * @param {string} apiParams.updatedMin - RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     * @param {string} apiParams.volumeId - (Required) The volume to retrieve annotation data for.
     * @param {integer} apiParams.w - The requested pixel width for any images. If width is provided height must also be provided.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.layers.annotationData.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/{volumeId}/layers/{layerId}/data', 'GET', apiParams, clientConfig);

    this.layers.volumeAnnotations = {};

    /**
     * Gets the volume annotation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.annotationId - (Required) The ID of the volume annotation to retrieve.
     * @param {string} apiParams.layerId - (Required) The ID for the layer to get the annotations.
     * @param {string} apiParams.locale - The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.volumeId - (Required) The volume to retrieve annotations for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.layers.volumeAnnotations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}', 'GET', apiParams, clientConfig);

    /**
     * Gets the volume annotations for a volume and layer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.contentVersion - (Required) The content version for the requested volume.
     * @param {string} apiParams.endOffset - The end offset to end retrieving data from.
     * @param {string} apiParams.endPosition - The end position to end retrieving data from.
     * @param {string} apiParams.layerId - (Required) The ID for the layer to get the annotations.
     * @param {string} apiParams.locale - The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     * @param {integer} apiParams.maxResults - Maximum number of results to return
     * @param {string} apiParams.pageToken - The value of the nextToken from the previous page.
     * @param {boolean} apiParams.showDeleted - Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.startOffset - The start offset to start retrieving data from.
     * @param {string} apiParams.startPosition - The start position to start retrieving data from.
     * @param {string} apiParams.updatedMax - RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     * @param {string} apiParams.updatedMin - RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     * @param {string} apiParams.volumeAnnotationsVersion - The version of the volume annotations that you are requesting.
     * @param {string} apiParams.volumeId - (Required) The volume to retrieve annotations for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.layers.volumeAnnotations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/{volumeId}/layers/{layerId}', 'GET', apiParams, clientConfig);

    this.myconfig = {};

    /**
     * Gets the current settings for the user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.country - Unused. Added only to workaround TEX mandatory request template requirement
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.myconfig.getUserSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/myconfig/getUserSettings', 'GET', apiParams, clientConfig);

    /**
     * Release downloaded content access restriction.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.cpksver - (Required) The device/version ID from which to release the restriction.
     * @param {string} apiParams.locale - ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.volumeIds - (Required) The volume(s) to release restrictions for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.myconfig.releaseDownloadAccess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/myconfig/releaseDownloadAccess', 'POST', apiParams, clientConfig);

    /**
     * Request concurrent and download access restrictions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.cpksver - (Required) The device/version ID from which to request the restrictions.
     * @param {string} apiParams.licenseTypes - The type of access license to request. If not specified, the default is BOTH.
     * @param {string} apiParams.locale - ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param {string} apiParams.nonce - (Required) The client nonce value.
     * @param {string} apiParams.source - (Required) String to identify the originator of this request.
     * @param {string} apiParams.volumeId - (Required) The volume to request concurrent/download restrictions for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.myconfig.requestAccess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/myconfig/requestAccess', 'POST', apiParams, clientConfig);

    /**
     * Request downloaded content access for specified volumes on the My eBooks shelf.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.cpksver - (Required) The device/version ID from which to release the restriction.
     * @param {string} apiParams.features - List of features supported by the client, i.e., 'RENTALS'
     * @param {boolean} apiParams.includeNonComicsSeries - Set to true to include non-comics series. Defaults to false.
     * @param {string} apiParams.locale - ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param {string} apiParams.nonce - (Required) The client nonce value.
     * @param {boolean} apiParams.showPreorders - Set to true to show pre-ordered books. Defaults to false.
     * @param {string} apiParams.source - (Required) String to identify the originator of this request.
     * @param {string} apiParams.volumeIds - The volume(s) to request download restrictions for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.myconfig.syncVolumeLicenses = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/myconfig/syncVolumeLicenses', 'POST', apiParams, clientConfig);

    /**
     * Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.myconfig.updateUserSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/myconfig/updateUserSettings', 'POST', apiParams, clientConfig);

    this.mylibrary = {};

    this.mylibrary.annotations = {};

    /**
     * Deletes an annotation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.annotationId - (Required) The ID for the annotation to delete.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mylibrary.annotations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/annotations/{annotationId}', 'DELETE', apiParams, clientConfig);

    /**
     * Inserts a new annotation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.annotationId - The ID for the annotation to insert.
     * @param {string} apiParams.country - ISO-3166-1 code to override the IP-based location.
     * @param {boolean} apiParams.showOnlySummaryInResponse - Requests that only the summary of the specified layer be provided in the response.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mylibrary.annotations.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/annotations', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of annotations, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.contentVersion - The content version for the requested volume.
     * @param {string} apiParams.layerId - The layer ID to limit annotation by.
     * @param {string} apiParams.layerIds - The layer ID(s) to limit annotation by.
     * @param {integer} apiParams.maxResults - Maximum number of results to return
     * @param {string} apiParams.pageToken - The value of the nextToken from the previous page.
     * @param {boolean} apiParams.showDeleted - Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.updatedMax - RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     * @param {string} apiParams.updatedMin - RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     * @param {string} apiParams.volumeId - The volume to restrict annotations to.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mylibrary.annotations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/annotations', 'GET', apiParams, clientConfig);

    /**
     * Gets the summary of specified layers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.layerIds - (Required) Array of layer IDs to get the summary for.
     * @param {string} apiParams.source - Optional. String to identify the originator of this request.
     * @param {string} apiParams.volumeId - (Required) Volume id to get the summary for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mylibrary.annotations.summary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/annotations/summary', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing annotation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.annotationId - (Required) The ID for the annotation to update.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mylibrary.annotations.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/annotations/{annotationId}', 'PUT', apiParams, clientConfig);

    this.mylibrary.bookshelves = {};

    /**
     * Adds a volume to a bookshelf.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.reason - The reason for which the book is added to the library.
     * @param {string} apiParams.shelf - (Required) ID of bookshelf to which to add a volume.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.volumeId - (Required) ID of volume to add.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mylibrary.bookshelves.addVolume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/addVolume', 'POST', apiParams, clientConfig);

    /**
     * Clears all volumes from a bookshelf.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.shelf - (Required) ID of bookshelf from which to remove a volume.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mylibrary.bookshelves.clearVolumes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/clearVolumes', 'POST', apiParams, clientConfig);

    /**
     * Retrieves metadata for a specific bookshelf belonging to the authenticated user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.shelf - (Required) ID of bookshelf to retrieve.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mylibrary.bookshelves.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of bookshelves belonging to the authenticated user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mylibrary.bookshelves.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/bookshelves', 'GET', apiParams, clientConfig);

    /**
     * Moves a volume within a bookshelf.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.shelf - (Required) ID of bookshelf with the volume.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.volumeId - (Required) ID of volume to move.
     * @param {integer} apiParams.volumePosition - (Required) Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mylibrary.bookshelves.moveVolume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/moveVolume', 'POST', apiParams, clientConfig);

    /**
     * Removes a volume from a bookshelf.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.reason - The reason for which the book is removed from the library.
     * @param {string} apiParams.shelf - (Required) ID of bookshelf from which to remove a volume.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.volumeId - (Required) ID of volume to remove.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mylibrary.bookshelves.removeVolume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/removeVolume', 'POST', apiParams, clientConfig);

    this.mylibrary.bookshelves.volumes = {};

    /**
     * Gets volume information for volumes on a bookshelf.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.country - ISO-3166-1 code to override the IP-based location.
     * @param {integer} apiParams.maxResults - Maximum number of results to return
     * @param {string} apiParams.projection - Restrict information returned to a set of selected fields.
     * @param {string} apiParams.q - Full-text search query string in this bookshelf.
     * @param {string} apiParams.shelf - (Required) The bookshelf ID or name retrieve volumes for.
     * @param {boolean} apiParams.showPreorders - Set to true to show pre-ordered books. Defaults to false.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {integer} apiParams.startIndex - Index of the first element to return (starts at 0)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mylibrary.bookshelves.volumes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/volumes', 'GET', apiParams, clientConfig);

    this.mylibrary.readingpositions = {};

    /**
     * Retrieves my reading position information for a volume.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.contentVersion - Volume content version for which this reading position is requested.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.volumeId - (Required) ID of volume for which to retrieve a reading position.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mylibrary.readingpositions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/readingpositions/{volumeId}', 'GET', apiParams, clientConfig);

    /**
     * Sets my reading position information for a volume.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.action - Action that caused this reading position to be set.
     * @param {string} apiParams.contentVersion - Volume content version for which this reading position applies.
     * @param {string} apiParams.deviceCookie - Random persistent device cookie optional on set position.
     * @param {string} apiParams.position - (Required) Position string for the new volume reading position.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.timestamp - (Required) RFC 3339 UTC format timestamp associated with this reading position.
     * @param {string} apiParams.volumeId - (Required) ID of volume for which to update the reading position.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mylibrary.readingpositions.setPosition = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/readingpositions/{volumeId}/setPosition', 'POST', apiParams, clientConfig);

    this.notification = {};

    /**
     * Returns notification details for a given notification id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.locale - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body.
     * @param {string} apiParams.notification_id - (Required) String to identify the notification.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.notification.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/notification/get', 'GET', apiParams, clientConfig);

    this.onboarding = {};

    /**
     * List categories for onboarding experience.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.locale - ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.onboarding.listCategories = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/onboarding/listCategories', 'GET', apiParams, clientConfig);

    /**
     * List available volumes under categories for onboarding experience.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.categoryId - List of category ids requested.
     * @param {string} apiParams.locale - ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
     * @param {string} apiParams.maxAllowedMaturityRating - The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.
     * @param {integer} apiParams.pageSize - Number of maximum results per page to be included in the response.
     * @param {string} apiParams.pageToken - The value of the nextToken from the previous page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.onboarding.listCategoryVolumes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/onboarding/listCategoryVolumes', 'GET', apiParams, clientConfig);

    this.personalizedstream = {};

    /**
     * Returns a stream of personalized book clusters
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.locale - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string} apiParams.maxAllowedMaturityRating - The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.personalizedstream.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/personalizedstream/get', 'GET', apiParams, clientConfig);

    this.promooffer = {};

    /**
     * Accepts the promo offer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.androidId - device android_id
     * @param {string} apiParams.device - device device
     * @param {string} apiParams.manufacturer - device manufacturer
     * @param {string} apiParams.model - device model
     * @param {string} apiParams.offerId - 
     * @param {string} apiParams.product - device product
     * @param {string} apiParams.serial - device serial
     * @param {string} apiParams.volumeId - Volume id to exercise the offer
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.promooffer.accept = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/promooffer/accept', 'POST', apiParams, clientConfig);

    /**
     * Marks the promo offer as dismissed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.androidId - device android_id
     * @param {string} apiParams.device - device device
     * @param {string} apiParams.manufacturer - device manufacturer
     * @param {string} apiParams.model - device model
     * @param {string} apiParams.offerId - Offer to dimiss
     * @param {string} apiParams.product - device product
     * @param {string} apiParams.serial - device serial
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.promooffer.dismiss = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/promooffer/dismiss', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of promo offers available to the user
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.androidId - device android_id
     * @param {string} apiParams.device - device device
     * @param {string} apiParams.manufacturer - device manufacturer
     * @param {string} apiParams.model - device model
     * @param {string} apiParams.product - device product
     * @param {string} apiParams.serial - device serial
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.promooffer.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/promooffer/get', 'GET', apiParams, clientConfig);

    this.series = {};

    /**
     * Returns Series metadata for the given series ids.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.series_id - (Required) String that identifies the series
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.series.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/series/get', 'GET', apiParams, clientConfig);

    this.series.membership = {};

    /**
     * Returns Series membership data given the series id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.page_size - Number of maximum results per page to be included in the response.
     * @param {string} apiParams.page_token - The value of the nextToken from the previous page.
     * @param {string} apiParams.series_id - (Required) String that identifies the series
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.series.membership.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/series/membership/get', 'GET', apiParams, clientConfig);

    this.volumes = {};

    /**
     * Gets volume information for a single volume.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.country - ISO-3166-1 code to override the IP-based location.
     * @param {boolean} apiParams.includeNonComicsSeries - Set to true to include non-comics series. Defaults to false.
     * @param {string} apiParams.partner - Brand results for partner ID.
     * @param {string} apiParams.projection - Restrict information returned to a set of selected fields.
     * @param {string} apiParams.source - string to identify the originator of this request.
     * @param {boolean} apiParams.user_library_consistent_read - 
     * @param {string} apiParams.volumeId - (Required) ID of volume to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.volumes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/{volumeId}', 'GET', apiParams, clientConfig);

    /**
     * Performs a book search.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.download - Restrict to volumes by download availability.
     * @param {string} apiParams.filter - Filter search results.
     * @param {string} apiParams.langRestrict - Restrict results to books with this language code.
     * @param {string} apiParams.libraryRestrict - Restrict search to this user's library.
     * @param {string} apiParams.maxAllowedMaturityRating - The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.orderBy - Sort search results.
     * @param {string} apiParams.partner - Restrict and brand results for partner ID.
     * @param {string} apiParams.printType - Restrict to books or magazines.
     * @param {string} apiParams.projection - Restrict information returned to a set of selected fields.
     * @param {string} apiParams.q - (Required) Full-text search query string.
     * @param {boolean} apiParams.showPreorders - Set to true to show books available for preorder. Defaults to false.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {integer} apiParams.startIndex - Index of the first result to return (starts at 0)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.volumes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes', 'GET', apiParams, clientConfig);

    this.volumes.associated = {};

    /**
     * Return a list of associated books.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.association - Association type.
     * @param {string} apiParams.locale - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string} apiParams.maxAllowedMaturityRating - The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.volumeId - (Required) ID of the source volume.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.volumes.associated.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/{volumeId}/associated', 'GET', apiParams, clientConfig);

    this.volumes.mybooks = {};

    /**
     * Return a list of books in My Library.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.acquireMethod - How the book was acquired
     * @param {string} apiParams.country - ISO-3166-1 code to override the IP-based location.
     * @param {string} apiParams.locale - ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.processingState - The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {integer} apiParams.startIndex - Index of the first result to return (starts at 0)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.volumes.mybooks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/mybooks', 'GET', apiParams, clientConfig);

    this.volumes.recommended = {};

    /**
     * Return a list of recommended books for the current user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.locale - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string} apiParams.maxAllowedMaturityRating - The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.volumes.recommended.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/recommended', 'GET', apiParams, clientConfig);

    /**
     * Rate a recommended book for the current user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.locale - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string} apiParams.rating - (Required) Rating to be given to the volume.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {string} apiParams.volumeId - (Required) ID of the source volume.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.volumes.recommended.rate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/recommended/rate', 'POST', apiParams, clientConfig);

    this.volumes.useruploaded = {};

    /**
     * Return a list of books uploaded by the current user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.locale - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.processingState - The processing state of the user uploaded volumes to be returned.
     * @param {string} apiParams.source - String to identify the originator of this request.
     * @param {integer} apiParams.startIndex - Index of the first result to return (starts at 0)
     * @param {string} apiParams.volumeId - The ids of the volumes to be returned. If not specified all that match the processingState are returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.volumes.useruploaded.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/useruploaded', 'GET', apiParams, clientConfig);
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
