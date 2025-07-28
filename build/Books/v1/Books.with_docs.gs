
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://books.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.bookshelves = {};

    /**
     * Retrieves metadata for a specific bookshelf for the specified user.
     * @param {string} params.shelf - (Required) ID of bookshelf to retrieve.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.userId - (Required) ID of user for whom to retrieve bookshelves.
     * @return {object} The API response object.
     */
    this.bookshelves.get = (params) => this._makeRequest('books/v1/users/{userId}/bookshelves/{shelf}', 'GET', params);

    /**
     * Retrieves a list of public bookshelves for the specified user.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.userId - (Required) ID of user for whom to retrieve bookshelves.
     * @return {object} The API response object.
     */
    this.bookshelves.list = (params) => this._makeRequest('books/v1/users/{userId}/bookshelves', 'GET', params);

    this.bookshelves.volumes = {};

    /**
     * Retrieves volumes in a specific bookshelf for the specified user.
     * @param {integer} params.maxResults - Maximum number of results to return
     * @param {string} params.shelf - (Required) ID of bookshelf to retrieve volumes.
     * @param {boolean} params.showPreorders - Set to true to show pre-ordered books. Defaults to false.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {integer} params.startIndex - Index of the first element to return (starts at 0)
     * @param {string} params.userId - (Required) ID of user for whom to retrieve bookshelf volumes.
     * @return {object} The API response object.
     */
    this.bookshelves.volumes.list = (params) => this._makeRequest('books/v1/users/{userId}/bookshelves/{shelf}/volumes', 'GET', params);

    this.cloudloading = {};

    /**
     * Add a user-upload volume and triggers processing.
     * @param {string} params.drive_document_id - A drive document id. The upload_client_token must not be set.
     * @param {string} params.mime_type - The document MIME type. It can be set only if the drive_document_id is set.
     * @param {string} params.name - The document name. It can be set only if the drive_document_id is set.
     * @param {string} params.upload_client_token - Scotty upload token.
     * @return {object} The API response object.
     */
    this.cloudloading.addBook = (params) => this._makeRequest('books/v1/cloudloading/addBook', 'POST', params);

    /**
     * Remove the book and its contents
     * @param {string} params.volumeId - (Required) The id of the book to be removed.
     * @return {object} The API response object.
     */
    this.cloudloading.deleteBook = (params) => this._makeRequest('books/v1/cloudloading/deleteBook', 'POST', params);

    /**
     * Updates a user-upload volume.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.cloudloading.updateBook = (params) => this._makeRequest('books/v1/cloudloading/updateBook', 'POST', params);

    this.dictionary = {};

    /**
     * Returns a list of offline dictionary metadata available
     * @param {string} params.cpksver - (Required) The device/version ID from which to request the data.
     * @return {object} The API response object.
     */
    this.dictionary.listOfflineMetadata = (params) => this._makeRequest('books/v1/dictionary/listOfflineMetadata', 'GET', params);

    this.familysharing = {};

    /**
     * Gets information regarding the family that the user is part of.
     * @param {string} params.source - String to identify the originator of this request.
     * @return {object} The API response object.
     */
    this.familysharing.getFamilyInfo = (params) => this._makeRequest('books/v1/familysharing/getFamilyInfo', 'GET', params);

    /**
     * Initiates sharing of the content with the user's family. Empty response indicates success.
     * @param {string} params.docId - The docid to share.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.volumeId - The volume to share.
     * @return {object} The API response object.
     */
    this.familysharing.share = (params) => this._makeRequest('books/v1/familysharing/share', 'POST', params);

    /**
     * Initiates revoking content that has already been shared with the user's family. Empty response indicates success.
     * @param {string} params.docId - The docid to unshare.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.volumeId - The volume to unshare.
     * @return {object} The API response object.
     */
    this.familysharing.unshare = (params) => this._makeRequest('books/v1/familysharing/unshare', 'POST', params);

    this.layers = {};

    /**
     * Gets the layer summary for a volume.
     * @param {string} params.contentVersion - The content version for the requested volume.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.summaryId - (Required) The ID for the layer to get the summary for.
     * @param {string} params.volumeId - (Required) The volume to retrieve layers for.
     * @return {object} The API response object.
     */
    this.layers.get = (params) => this._makeRequest('books/v1/volumes/{volumeId}/layersummary/{summaryId}', 'GET', params);

    /**
     * List the layer summaries for a volume.
     * @param {string} params.contentVersion - The content version for the requested volume.
     * @param {integer} params.maxResults - Maximum number of results to return
     * @param {string} params.pageToken - The value of the nextToken from the previous page.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.volumeId - (Required) The volume to retrieve layers for.
     * @return {object} The API response object.
     */
    this.layers.list = (params) => this._makeRequest('books/v1/volumes/{volumeId}/layersummary', 'GET', params);

    this.layers.annotationData = {};

    /**
     * Gets the annotation data.
     * @param {boolean} params.allowWebDefinitions - For the dictionary layer. Whether or not to allow web definitions.
     * @param {string} params.annotationDataId - (Required) The ID of the annotation data to retrieve.
     * @param {string} params.contentVersion - (Required) The content version for the volume you are trying to retrieve.
     * @param {integer} params.h - The requested pixel height for any images. If height is provided width must also be provided.
     * @param {string} params.layerId - (Required) The ID for the layer to get the annotations.
     * @param {string} params.locale - The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     * @param {integer} params.scale - The requested scale for the image.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.volumeId - (Required) The volume to retrieve annotations for.
     * @param {integer} params.w - The requested pixel width for any images. If width is provided height must also be provided.
     * @return {object} The API response object.
     */
    this.layers.annotationData.get = (params) => this._makeRequest('books/v1/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}', 'GET', params);

    /**
     * Gets the annotation data for a volume and layer.
     * @param {string} params.annotationDataId - The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
     * @param {string} params.contentVersion - (Required) The content version for the requested volume.
     * @param {integer} params.h - The requested pixel height for any images. If height is provided width must also be provided.
     * @param {string} params.layerId - (Required) The ID for the layer to get the annotation data.
     * @param {string} params.locale - The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     * @param {integer} params.maxResults - Maximum number of results to return
     * @param {string} params.pageToken - The value of the nextToken from the previous page.
     * @param {integer} params.scale - The requested scale for the image.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.updatedMax - RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     * @param {string} params.updatedMin - RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     * @param {string} params.volumeId - (Required) The volume to retrieve annotation data for.
     * @param {integer} params.w - The requested pixel width for any images. If width is provided height must also be provided.
     * @return {object} The API response object.
     */
    this.layers.annotationData.list = (params) => this._makeRequest('books/v1/volumes/{volumeId}/layers/{layerId}/data', 'GET', params);

    this.layers.volumeAnnotations = {};

    /**
     * Gets the volume annotation.
     * @param {string} params.annotationId - (Required) The ID of the volume annotation to retrieve.
     * @param {string} params.layerId - (Required) The ID for the layer to get the annotations.
     * @param {string} params.locale - The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.volumeId - (Required) The volume to retrieve annotations for.
     * @return {object} The API response object.
     */
    this.layers.volumeAnnotations.get = (params) => this._makeRequest('books/v1/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}', 'GET', params);

    /**
     * Gets the volume annotations for a volume and layer.
     * @param {string} params.contentVersion - (Required) The content version for the requested volume.
     * @param {string} params.endOffset - The end offset to end retrieving data from.
     * @param {string} params.endPosition - The end position to end retrieving data from.
     * @param {string} params.layerId - (Required) The ID for the layer to get the annotations.
     * @param {string} params.locale - The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     * @param {integer} params.maxResults - Maximum number of results to return
     * @param {string} params.pageToken - The value of the nextToken from the previous page.
     * @param {boolean} params.showDeleted - Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.startOffset - The start offset to start retrieving data from.
     * @param {string} params.startPosition - The start position to start retrieving data from.
     * @param {string} params.updatedMax - RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     * @param {string} params.updatedMin - RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     * @param {string} params.volumeAnnotationsVersion - The version of the volume annotations that you are requesting.
     * @param {string} params.volumeId - (Required) The volume to retrieve annotations for.
     * @return {object} The API response object.
     */
    this.layers.volumeAnnotations.list = (params) => this._makeRequest('books/v1/volumes/{volumeId}/layers/{layerId}', 'GET', params);

    this.myconfig = {};

    /**
     * Gets the current settings for the user.
     * @param {string} params.country - Unused. Added only to workaround TEX mandatory request template requirement
     * @return {object} The API response object.
     */
    this.myconfig.getUserSettings = (params) => this._makeRequest('books/v1/myconfig/getUserSettings', 'GET', params);

    /**
     * Release downloaded content access restriction.
     * @param {string} params.cpksver - (Required) The device/version ID from which to release the restriction.
     * @param {string} params.locale - ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.volumeIds - (Required) The volume(s) to release restrictions for.
     * @return {object} The API response object.
     */
    this.myconfig.releaseDownloadAccess = (params) => this._makeRequest('books/v1/myconfig/releaseDownloadAccess', 'POST', params);

    /**
     * Request concurrent and download access restrictions.
     * @param {string} params.cpksver - (Required) The device/version ID from which to request the restrictions.
     * @param {string} params.licenseTypes - The type of access license to request. If not specified, the default is BOTH.
     * @param {string} params.locale - ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param {string} params.nonce - (Required) The client nonce value.
     * @param {string} params.source - (Required) String to identify the originator of this request.
     * @param {string} params.volumeId - (Required) The volume to request concurrent/download restrictions for.
     * @return {object} The API response object.
     */
    this.myconfig.requestAccess = (params) => this._makeRequest('books/v1/myconfig/requestAccess', 'POST', params);

    /**
     * Request downloaded content access for specified volumes on the My eBooks shelf.
     * @param {string} params.cpksver - (Required) The device/version ID from which to release the restriction.
     * @param {string} params.features - List of features supported by the client, i.e., 'RENTALS'
     * @param {boolean} params.includeNonComicsSeries - Set to true to include non-comics series. Defaults to false.
     * @param {string} params.locale - ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param {string} params.nonce - (Required) The client nonce value.
     * @param {boolean} params.showPreorders - Set to true to show pre-ordered books. Defaults to false.
     * @param {string} params.source - (Required) String to identify the originator of this request.
     * @param {string} params.volumeIds - The volume(s) to request download restrictions for.
     * @return {object} The API response object.
     */
    this.myconfig.syncVolumeLicenses = (params) => this._makeRequest('books/v1/myconfig/syncVolumeLicenses', 'POST', params);

    /**
     * Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.myconfig.updateUserSettings = (params) => this._makeRequest('books/v1/myconfig/updateUserSettings', 'POST', params);

    this.mylibrary = {};

    this.mylibrary.annotations = {};

    /**
     * Deletes an annotation.
     * @param {string} params.annotationId - (Required) The ID for the annotation to delete.
     * @param {string} params.source - String to identify the originator of this request.
     * @return {object} The API response object.
     */
    this.mylibrary.annotations.delete = (params) => this._makeRequest('books/v1/mylibrary/annotations/{annotationId}', 'DELETE', params);

    /**
     * Inserts a new annotation.
     * @param {string} params.annotationId - The ID for the annotation to insert.
     * @param {string} params.country - ISO-3166-1 code to override the IP-based location.
     * @param {boolean} params.showOnlySummaryInResponse - Requests that only the summary of the specified layer be provided in the response.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.mylibrary.annotations.insert = (params) => this._makeRequest('books/v1/mylibrary/annotations', 'POST', params);

    /**
     * Retrieves a list of annotations, possibly filtered.
     * @param {string} params.contentVersion - The content version for the requested volume.
     * @param {string} params.layerId - The layer ID to limit annotation by.
     * @param {string} params.layerIds - The layer ID(s) to limit annotation by.
     * @param {integer} params.maxResults - Maximum number of results to return
     * @param {string} params.pageToken - The value of the nextToken from the previous page.
     * @param {boolean} params.showDeleted - Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.updatedMax - RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     * @param {string} params.updatedMin - RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     * @param {string} params.volumeId - The volume to restrict annotations to.
     * @return {object} The API response object.
     */
    this.mylibrary.annotations.list = (params) => this._makeRequest('books/v1/mylibrary/annotations', 'GET', params);

    /**
     * Gets the summary of specified layers.
     * @param {string} params.layerIds - (Required) Array of layer IDs to get the summary for.
     * @param {string} params.source - Optional. String to identify the originator of this request.
     * @param {string} params.volumeId - (Required) Volume id to get the summary for.
     * @return {object} The API response object.
     */
    this.mylibrary.annotations.summary = (params) => this._makeRequest('books/v1/mylibrary/annotations/summary', 'POST', params);

    /**
     * Updates an existing annotation.
     * @param {string} params.annotationId - (Required) The ID for the annotation to update.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.mylibrary.annotations.update = (params) => this._makeRequest('books/v1/mylibrary/annotations/{annotationId}', 'PUT', params);

    this.mylibrary.bookshelves = {};

    /**
     * Adds a volume to a bookshelf.
     * @param {string} params.reason - The reason for which the book is added to the library.
     * @param {string} params.shelf - (Required) ID of bookshelf to which to add a volume.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.volumeId - (Required) ID of volume to add.
     * @return {object} The API response object.
     */
    this.mylibrary.bookshelves.addVolume = (params) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/addVolume', 'POST', params);

    /**
     * Clears all volumes from a bookshelf.
     * @param {string} params.shelf - (Required) ID of bookshelf from which to remove a volume.
     * @param {string} params.source - String to identify the originator of this request.
     * @return {object} The API response object.
     */
    this.mylibrary.bookshelves.clearVolumes = (params) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/clearVolumes', 'POST', params);

    /**
     * Retrieves metadata for a specific bookshelf belonging to the authenticated user.
     * @param {string} params.shelf - (Required) ID of bookshelf to retrieve.
     * @param {string} params.source - String to identify the originator of this request.
     * @return {object} The API response object.
     */
    this.mylibrary.bookshelves.get = (params) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}', 'GET', params);

    /**
     * Retrieves a list of bookshelves belonging to the authenticated user.
     * @param {string} params.source - String to identify the originator of this request.
     * @return {object} The API response object.
     */
    this.mylibrary.bookshelves.list = (params) => this._makeRequest('books/v1/mylibrary/bookshelves', 'GET', params);

    /**
     * Moves a volume within a bookshelf.
     * @param {string} params.shelf - (Required) ID of bookshelf with the volume.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.volumeId - (Required) ID of volume to move.
     * @param {integer} params.volumePosition - (Required) Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
     * @return {object} The API response object.
     */
    this.mylibrary.bookshelves.moveVolume = (params) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/moveVolume', 'POST', params);

    /**
     * Removes a volume from a bookshelf.
     * @param {string} params.reason - The reason for which the book is removed from the library.
     * @param {string} params.shelf - (Required) ID of bookshelf from which to remove a volume.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.volumeId - (Required) ID of volume to remove.
     * @return {object} The API response object.
     */
    this.mylibrary.bookshelves.removeVolume = (params) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/removeVolume', 'POST', params);

    this.mylibrary.bookshelves.volumes = {};

    /**
     * Gets volume information for volumes on a bookshelf.
     * @param {string} params.country - ISO-3166-1 code to override the IP-based location.
     * @param {integer} params.maxResults - Maximum number of results to return
     * @param {string} params.projection - Restrict information returned to a set of selected fields.
     * @param {string} params.q - Full-text search query string in this bookshelf.
     * @param {string} params.shelf - (Required) The bookshelf ID or name retrieve volumes for.
     * @param {boolean} params.showPreorders - Set to true to show pre-ordered books. Defaults to false.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {integer} params.startIndex - Index of the first element to return (starts at 0)
     * @return {object} The API response object.
     */
    this.mylibrary.bookshelves.volumes.list = (params) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/volumes', 'GET', params);

    this.mylibrary.readingpositions = {};

    /**
     * Retrieves my reading position information for a volume.
     * @param {string} params.contentVersion - Volume content version for which this reading position is requested.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.volumeId - (Required) ID of volume for which to retrieve a reading position.
     * @return {object} The API response object.
     */
    this.mylibrary.readingpositions.get = (params) => this._makeRequest('books/v1/mylibrary/readingpositions/{volumeId}', 'GET', params);

    /**
     * Sets my reading position information for a volume.
     * @param {string} params.action - Action that caused this reading position to be set.
     * @param {string} params.contentVersion - Volume content version for which this reading position applies.
     * @param {string} params.deviceCookie - Random persistent device cookie optional on set position.
     * @param {string} params.position - (Required) Position string for the new volume reading position.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.timestamp - (Required) RFC 3339 UTC format timestamp associated with this reading position.
     * @param {string} params.volumeId - (Required) ID of volume for which to update the reading position.
     * @return {object} The API response object.
     */
    this.mylibrary.readingpositions.setPosition = (params) => this._makeRequest('books/v1/mylibrary/readingpositions/{volumeId}/setPosition', 'POST', params);

    this.notification = {};

    /**
     * Returns notification details for a given notification id.
     * @param {string} params.locale - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body.
     * @param {string} params.notification_id - (Required) String to identify the notification.
     * @param {string} params.source - String to identify the originator of this request.
     * @return {object} The API response object.
     */
    this.notification.get = (params) => this._makeRequest('books/v1/notification/get', 'GET', params);

    this.onboarding = {};

    /**
     * List categories for onboarding experience.
     * @param {string} params.locale - ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
     * @return {object} The API response object.
     */
    this.onboarding.listCategories = (params) => this._makeRequest('books/v1/onboarding/listCategories', 'GET', params);

    /**
     * List available volumes under categories for onboarding experience.
     * @param {string} params.categoryId - List of category ids requested.
     * @param {string} params.locale - ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
     * @param {string} params.maxAllowedMaturityRating - The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.
     * @param {integer} params.pageSize - Number of maximum results per page to be included in the response.
     * @param {string} params.pageToken - The value of the nextToken from the previous page.
     * @return {object} The API response object.
     */
    this.onboarding.listCategoryVolumes = (params) => this._makeRequest('books/v1/onboarding/listCategoryVolumes', 'GET', params);

    this.personalizedstream = {};

    /**
     * Returns a stream of personalized book clusters
     * @param {string} params.locale - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string} params.maxAllowedMaturityRating - The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {string} params.source - String to identify the originator of this request.
     * @return {object} The API response object.
     */
    this.personalizedstream.get = (params) => this._makeRequest('books/v1/personalizedstream/get', 'GET', params);

    this.promooffer = {};

    /**
     * Accepts the promo offer.
     * @param {string} params.androidId - device android_id
     * @param {string} params.device - device device
     * @param {string} params.manufacturer - device manufacturer
     * @param {string} params.model - device model
     * @param {string} params.offerId - 
     * @param {string} params.product - device product
     * @param {string} params.serial - device serial
     * @param {string} params.volumeId - Volume id to exercise the offer
     * @return {object} The API response object.
     */
    this.promooffer.accept = (params) => this._makeRequest('books/v1/promooffer/accept', 'POST', params);

    /**
     * Marks the promo offer as dismissed.
     * @param {string} params.androidId - device android_id
     * @param {string} params.device - device device
     * @param {string} params.manufacturer - device manufacturer
     * @param {string} params.model - device model
     * @param {string} params.offerId - Offer to dimiss
     * @param {string} params.product - device product
     * @param {string} params.serial - device serial
     * @return {object} The API response object.
     */
    this.promooffer.dismiss = (params) => this._makeRequest('books/v1/promooffer/dismiss', 'POST', params);

    /**
     * Returns a list of promo offers available to the user
     * @param {string} params.androidId - device android_id
     * @param {string} params.device - device device
     * @param {string} params.manufacturer - device manufacturer
     * @param {string} params.model - device model
     * @param {string} params.product - device product
     * @param {string} params.serial - device serial
     * @return {object} The API response object.
     */
    this.promooffer.get = (params) => this._makeRequest('books/v1/promooffer/get', 'GET', params);

    this.series = {};

    /**
     * Returns Series metadata for the given series ids.
     * @param {string} params.series_id - (Required) String that identifies the series
     * @return {object} The API response object.
     */
    this.series.get = (params) => this._makeRequest('books/v1/series/get', 'GET', params);

    this.series.membership = {};

    /**
     * Returns Series membership data given the series id.
     * @param {integer} params.page_size - Number of maximum results per page to be included in the response.
     * @param {string} params.page_token - The value of the nextToken from the previous page.
     * @param {string} params.series_id - (Required) String that identifies the series
     * @return {object} The API response object.
     */
    this.series.membership.get = (params) => this._makeRequest('books/v1/series/membership/get', 'GET', params);

    this.volumes = {};

    /**
     * Gets volume information for a single volume.
     * @param {string} params.country - ISO-3166-1 code to override the IP-based location.
     * @param {boolean} params.includeNonComicsSeries - Set to true to include non-comics series. Defaults to false.
     * @param {string} params.partner - Brand results for partner ID.
     * @param {string} params.projection - Restrict information returned to a set of selected fields.
     * @param {string} params.source - string to identify the originator of this request.
     * @param {boolean} params.user_library_consistent_read - 
     * @param {string} params.volumeId - (Required) ID of volume to retrieve.
     * @return {object} The API response object.
     */
    this.volumes.get = (params) => this._makeRequest('books/v1/volumes/{volumeId}', 'GET', params);

    /**
     * Performs a book search.
     * @param {string} params.download - Restrict to volumes by download availability.
     * @param {string} params.filter - Filter search results.
     * @param {string} params.langRestrict - Restrict results to books with this language code.
     * @param {string} params.libraryRestrict - Restrict search to this user's library.
     * @param {string} params.maxAllowedMaturityRating - The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.orderBy - Sort search results.
     * @param {string} params.partner - Restrict and brand results for partner ID.
     * @param {string} params.printType - Restrict to books or magazines.
     * @param {string} params.projection - Restrict information returned to a set of selected fields.
     * @param {string} params.q - (Required) Full-text search query string.
     * @param {boolean} params.showPreorders - Set to true to show books available for preorder. Defaults to false.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {integer} params.startIndex - Index of the first result to return (starts at 0)
     * @return {object} The API response object.
     */
    this.volumes.list = (params) => this._makeRequest('books/v1/volumes', 'GET', params);

    this.volumes.associated = {};

    /**
     * Return a list of associated books.
     * @param {string} params.association - Association type.
     * @param {string} params.locale - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string} params.maxAllowedMaturityRating - The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.volumeId - (Required) ID of the source volume.
     * @return {object} The API response object.
     */
    this.volumes.associated.list = (params) => this._makeRequest('books/v1/volumes/{volumeId}/associated', 'GET', params);

    this.volumes.mybooks = {};

    /**
     * Return a list of books in My Library.
     * @param {string} params.acquireMethod - How the book was acquired
     * @param {string} params.country - ISO-3166-1 code to override the IP-based location.
     * @param {string} params.locale - ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.processingState - The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {integer} params.startIndex - Index of the first result to return (starts at 0)
     * @return {object} The API response object.
     */
    this.volumes.mybooks.list = (params) => this._makeRequest('books/v1/volumes/mybooks', 'GET', params);

    this.volumes.recommended = {};

    /**
     * Return a list of recommended books for the current user.
     * @param {string} params.locale - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string} params.maxAllowedMaturityRating - The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {string} params.source - String to identify the originator of this request.
     * @return {object} The API response object.
     */
    this.volumes.recommended.list = (params) => this._makeRequest('books/v1/volumes/recommended', 'GET', params);

    /**
     * Rate a recommended book for the current user.
     * @param {string} params.locale - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string} params.rating - (Required) Rating to be given to the volume.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {string} params.volumeId - (Required) ID of the source volume.
     * @return {object} The API response object.
     */
    this.volumes.recommended.rate = (params) => this._makeRequest('books/v1/volumes/recommended/rate', 'POST', params);

    this.volumes.useruploaded = {};

    /**
     * Return a list of books uploaded by the current user.
     * @param {string} params.locale - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.processingState - The processing state of the user uploaded volumes to be returned.
     * @param {string} params.source - String to identify the originator of this request.
     * @param {integer} params.startIndex - Index of the first result to return (starts at 0)
     * @param {string} params.volumeId - The ids of the volumes to be returned. If not specified all that match the processingState are returned.
     * @return {object} The API response object.
     */
    this.volumes.useruploaded.list = (params) => this._makeRequest('books/v1/volumes/useruploaded', 'GET', params);
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
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
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
