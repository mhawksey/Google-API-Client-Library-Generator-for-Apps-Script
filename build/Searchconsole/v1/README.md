# Google Search Console API - Apps Script Client Library

Auto-generated client library for using the **Google Search Console API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 22:06:58 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:38:23 GMT
- **Created:** Sun, 20 Jul 2025 16:53:30 GMT



---

## API Reference

### `urlInspection`

### `urlInspection.index`

#### `urlInspection.index.inspect()`

Index inspection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `searchanalytics`

#### `searchanalytics.query()`

Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteUrl` | `string` | Yes | The site's URL, including protocol. For example: `http://www.example.com/`. |
| `params.resource` | `object` | Yes | The request body. |

### `urlTestingTools`

### `urlTestingTools.mobileFriendlyTest`

#### `urlTestingTools.mobileFriendlyTest.run()`

Runs Mobile-Friendly Test for a given URL.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `sitemaps`

#### `sitemaps.delete()`

Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteUrl` | `string` | Yes | The site's URL, including protocol. For example: `http://www.example.com/`. |
| `params.feedpath` | `string` | Yes | The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. |

#### `sitemaps.get()`

Retrieves information about a specific sitemap.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteUrl` | `string` | Yes | The site's URL, including protocol. For example: `http://www.example.com/`. |
| `params.feedpath` | `string` | Yes | The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. |

#### `sitemaps.list()`

 Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteUrl` | `string` | Yes | The site's URL, including protocol. For example: `http://www.example.com/`. |
| `params.sitemapIndex` | `string` | No |  A URL of a site's sitemap index. For example: `http://www.example.com/sitemapindex.xml`. |

#### `sitemaps.submit()`

Submits a sitemap for a site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteUrl` | `string` | Yes | The site's URL, including protocol. For example: `http://www.example.com/`. |
| `params.feedpath` | `string` | Yes | The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. |

### `sites`

#### `sites.delete()`

 Removes a site from the set of the user's Search Console sites.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteUrl` | `string` | Yes | The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`. |

#### `sites.get()`

 Retrieves information about specific site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteUrl` | `string` | Yes | The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`. |

#### `sites.list()`

 Lists the user's Search Console sites.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `sites.add()`

 Adds a site to the set of the user's sites in Search Console.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteUrl` | `string` | Yes | The URL of the site to add. |