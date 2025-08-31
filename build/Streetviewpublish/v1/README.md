# Street View Publish API - Apps Script Client Library

Auto-generated client library for using the **Street View Publish API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:55:44 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:47:31 GMT
- **Created:** Sun, 20 Jul 2025 16:55:20 GMT



---

## API Reference

### `photo`

#### `photo.startUpload()`

Creates an upload session to start uploading photo bytes. The method uses the upload URL of the returned UploadRef to upload the bytes for the Photo. In addition to the photo requirements shown in https://support.google.com/maps/answer/7012050?ref_topic=6275604, the photo must meet the following requirements:

* Photo Sphere XMP metadata must be included in the photo metadata. See https://developers.google.com/streetview/spherical-metadata for the required fields.

* The pixel size of the photo must meet the size requirements listed in https://support.google.com/maps/answer/7012050?ref_topic=6275604, and the photo must be a full 360 horizontally. After the upload completes, the method uses UploadRef with CreatePhoto to create the Photo object entry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `photo.create()`

After the client finishes uploading the photo with the returned UploadRef, CreatePhoto publishes the uploaded Photo to Street View on Google Maps. Currently, the only way to set heading, pitch, and roll in CreatePhoto is through the [Photo Sphere XMP metadata](https://developers.google.com/streetview/spherical-metadata) in the photo bytes. CreatePhoto ignores the `pose.heading`, `pose.pitch`, `pose.roll`, `pose.altitude`, and `pose.level` fields in Pose. This method returns the following error codes:

* google.rpc.Code.INVALID_ARGUMENT if the request is malformed or if the uploaded photo is not a 360 photo.

* google.rpc.Code.NOT_FOUND if the upload reference does not exist.

* google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the storage limit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `photo.get()`

Gets the metadata of the specified Photo. This method returns the following error codes:

* google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested Photo.

* google.rpc.Code.NOT_FOUND if the requested Photo does not exist.

* google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.photoId` | `string` | Yes | Required. ID of the Photo. |
| `params.view` | `string` | No | Required. Specifies if a download URL for the photo bytes should be returned in the Photo response. |
| `params.languageCode` | `string` | No | The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used. |

#### `photo.update()`

Updates the metadata of a Photo, such as pose, place association, connections, etc. Changing the pixels of a photo is not supported. Only the fields specified in the updateMask field are used. If `updateMask` is not present, the update applies to all fields. This method returns the following error codes:

* google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo.

* google.rpc.Code.INVALID_ARGUMENT if the request is malformed.

* google.rpc.Code.NOT_FOUND if the requested photo does not exist.

* google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | A unique identifier for a photo. |
| `params.updateMask` | `string` | No | Required. Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list. The following fields are valid: * `pose.heading` * `pose.lat_lng_pair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places` > Note: When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections are removed. |
| `params.resource` | `object` | Yes | The request body. |

#### `photo.delete()`

Deletes a Photo and its metadata. This method returns the following error codes:

* google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo.

* google.rpc.Code.NOT_FOUND if the photo ID does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.photoId` | `string` | Yes | Required. ID of the Photo. |

### `photos`

#### `photos.batchGet()`

Gets the metadata of the specified Photo batch. Note that if BatchGetPhotos fails, either critical fields are missing or there is an authentication error. Even if BatchGetPhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchGetPhotosResponse.results. See GetPhoto for specific failures that can occur per photo.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.photoIds` | `string` | No | Required. IDs of the Photos. For HTTP GET requests, the URL query parameter should be `photoIds=&photoIds=&...`. |
| `params.view` | `string` | No | Required. Specifies if a download URL for the photo bytes should be returned in the Photo response. |
| `params.languageCode` | `string` | No | Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used. |

#### `photos.list()`

Lists all the Photos that belong to the user. > Note: Recently created photos that are still being indexed are not returned in the response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.view` | `string` | No | Required. Specifies if a download URL for the photos bytes should be returned in the Photos response. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of photos to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 is used. The number of photos returned in the response may be less than `pageSize` if the number of photos that belong to the user is less than `pageSize`. |
| `params.pageToken` | `string` | No | Optional. The nextPageToken value returned from a previous ListPhotos request, if any. |
| `params.filter` | `string` | No | Optional. The filter expression. For example: `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`. The filters supported are: `placeId`, `min_latitude`, `max_latitude`, `min_longitude`, `max_longitude`. See https://google.aip.dev/160 for more information. |
| `params.languageCode` | `string` | No | Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used. |

#### `photos.batchUpdate()`

Updates the metadata of Photos, such as pose, place association, connections, etc. Changing the pixels of photos is not supported. Note that if BatchUpdatePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchUpdatePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchUpdatePhotosResponse.results. See UpdatePhoto for specific failures that can occur per photo. Only the fields specified in updateMask field are used. If `updateMask` is not present, the update applies to all fields. The number of UpdatePhotoRequest messages in a BatchUpdatePhotosRequest must not exceed 20. > Note: To update Pose.altitude, Pose.latLngPair has to be filled as well. Otherwise, the request will fail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `photos.batchDelete()`

Deletes a list of Photos and their metadata. Note that if BatchDeletePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchDeletePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchDeletePhotosResponse.results. See DeletePhoto for specific failures that can occur per photo.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `photoSequence`

#### `photoSequence.startUpload()`

Creates an upload session to start uploading photo sequence data. The upload URL of the returned UploadRef is used to upload the data for the `photoSequence`. After the upload is complete, the UploadRef is used with CreatePhotoSequence to create the PhotoSequence object entry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `photoSequence.create()`

After the client finishes uploading the PhotoSequence with the returned UploadRef, CreatePhotoSequence extracts a sequence of 360 photos from a video or Extensible Device Metadata (XDM, http://www.xdm.org/) to be published to Street View on Google Maps. `CreatePhotoSequence` returns an Operation, with the PhotoSequence Id set in the `Operation.name` field. This method returns the following error codes:

* google.rpc.Code.INVALID_ARGUMENT if the request is malformed.

* google.rpc.Code.NOT_FOUND if the upload reference does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.inputType` | `string` | No | Required. The input form of PhotoSequence. |
| `params.resource` | `object` | Yes | The request body. |

#### `photoSequence.get()`

Gets the metadata of the specified PhotoSequence via the Operation interface. This method returns the following three types of responses:

* `Operation.done` = false, if the processing of PhotoSequence is not finished yet.

* `Operation.done` = true and `Operation.error` is populated, if there was an error in processing.

* `Operation.done` = true and `Operation.response` is poulated, which contains a PhotoSequence message. This method returns the following error codes:

* google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested PhotoSequence.

* google.rpc.Code.NOT_FOUND if the requested PhotoSequence does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.sequenceId` | `string` | Yes | Required. ID of the photo sequence. |
| `params.view` | `string` | No | Specifies if a download URL for the photo sequence should be returned in `download_url` of individual photos in the PhotoSequence response. > Note: Currently not implemented. |
| `params.filter` | `string` | No | Optional. The filter expression. For example: `published_status=PUBLISHED`. The filters supported are: `published_status`. See https://google.aip.dev/160 for more information. |

#### `photoSequence.delete()`

Deletes a PhotoSequence and its metadata. This method returns the following error codes:

* google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo sequence.

* google.rpc.Code.NOT_FOUND if the photo sequence ID does not exist.

* google.rpc.Code.FAILED_PRECONDITION if the photo sequence ID is not yet finished processing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.sequenceId` | `string` | Yes | Required. ID of the PhotoSequence. |

### `photoSequences`

#### `photoSequences.list()`

Lists all the PhotoSequences that belong to the user, in descending CreatePhotoSequence timestamp order.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The maximum number of photo sequences to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 is used. The number of photo sequences returned in the response may be less than `pageSize` if the number of matches is less than `pageSize`. This is currently unimplemented but is in process. |
| `params.pageToken` | `string` | No | Optional. The nextPageToken value returned from a previous ListPhotoSequences request, if any. |
| `params.filter` | `string` | No | Optional. The filter expression. For example: `imagery_type=SPHERICAL`. The filters supported are: `imagery_type`, `processing_state`, `min_latitude`, `max_latitude`, `min_longitude`, `max_longitude`, `filename_query`, `min_capture_time_seconds`, `max_capture_time_seconds. See https://google.aip.dev/160 for more information. Filename queries should sent as a Phrase in order to support multiple words and special characters by adding escaped quotes. Ex: filename_query="example of a phrase.mp4" |