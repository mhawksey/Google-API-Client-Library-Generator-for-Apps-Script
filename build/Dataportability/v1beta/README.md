# Data Portability API - Apps Script Client Library

Auto-generated client library for using the **Data Portability API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:32:24 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:30:48 GMT
- **Created:** Sun, 20 Jul 2025 16:25:22 GMT



---

## API Reference

### `portabilityArchive`

#### `portabilityArchive.initiate()`

Initiates a new Archive job for the Portability API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `archiveJobs`

#### `archiveJobs.getPortabilityArchiveState()`

Retrieves the state of an Archive job for the Portability API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The archive job ID that is returned when you request the state of the job. The format is: archiveJobs/{archive_job}/portabilityArchiveState. archive_job is the job ID returned by the InitiatePortabilityArchiveResponse. |

#### `archiveJobs.retry()`

Retries a failed Portability Archive job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Archive job ID you're retrying. This is returned by the InitiatePortabilityArchiveResponse. Retrying is only executed if the initial job failed. |
| `params.resource` | `object` | Yes | The request body. |

#### `archiveJobs.cancel()`

Cancels a Portability Archive job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Archive job ID you're canceling. This is returned by the InitiatePortabilityArchive response. The format is: archiveJobs/{archive_job}. Canceling is only executed if the job is in progress. |
| `params.resource` | `object` | Yes | The request body. |

### `authorization`

#### `authorization.reset()`

Revokes OAuth tokens and resets exhausted scopes for a user/project pair. This method allows you to initiate a request after a new consent is granted. This method also indicates that previous archives can be garbage collected. You should call this method when all jobs are complete and all archives are downloaded. Do not call it only when you start a new job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `accessType`

#### `accessType.check()`

Gets the access type of the token.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |