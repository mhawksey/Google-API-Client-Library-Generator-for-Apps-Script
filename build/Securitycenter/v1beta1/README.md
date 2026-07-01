# Security Command Center API - Apps Script Client Library

Auto-generated client library for using the **Security Command Center API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Wed, 01 Jul 2026 00:16:37 GMT
- **Last Modified:** Wed, 01 Jul 2026 00:16:37 GMT
- **Created:** Sun, 20 Jul 2025 16:53:46 GMT



---

## API Reference

### `organizations`

#### `organizations.updateOrganizationSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.getOrganizationSettings()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `organizations.sources`

#### `organizations.sources.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |

#### `organizations.sources.setIamPolicy()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.sources.getIamPolicy()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.testIamPermissions()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.sources.findings`

#### `organizations.sources.findings.group()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.findings.updateSecurityMarks()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.startTime` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.findings.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.findingId` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.findings.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.fieldMask` | `string` | No |  |
| `params.orderBy` | `string` | No |  |
| `params.readTime` | `string` | No |  |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |

#### `organizations.sources.findings.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.sources.findings.setState()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.operations`

#### `organizations.operations.cancel()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.operations.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `organizations.operations.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.returnPartialSuccess` | `boolean` | No |  |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.name` | `string` | Yes |  |

#### `organizations.operations.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `organizations.assets`

#### `organizations.assets.updateSecurityMarks()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No |  |
| `params.startTime` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.assets.group()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.assets.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.fieldMask` | `string` | No |  |
| `params.orderBy` | `string` | No |  |
| `params.readTime` | `string` | No |  |
| `params.compareDuration` | `string` | No |  |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |

#### `organizations.assets.runDiscovery()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |