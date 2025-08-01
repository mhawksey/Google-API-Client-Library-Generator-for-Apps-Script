# Google API Client Library Generator for Apps Script

A Google Apps Script project that dynamically generates modern, feature-rich client libraries for any public Google API directly from the [Google API Discovery Service](https://developers.google.com/discovery).

This tool creates libraries with features including flexible authentication, and automatic exponential backoff.

## Pre-built Libraries Available

**This repository includes a `build/` directory containing auto-generated client libraries for every discoverable Google API.**

For most users, you do not need to run the generator yourself. You can find the library you need in the `build/` directory.

> **Call for Contributions:** While all libraries are generated, not all have been extensively tested. We welcome and encourage community contributions. If you find a bug or have a suggestion, please [**open a GitHub Issue**](https://github.com/mhawksey/Google-API-Client-Library-Generator-for-Apps-Script/issues). If you have fixes or tests to add, please feel free to **submit a Pull Request**.


## Why Use a Generated Library?

While Google Apps Script has excellent built-in and advanced services, a generated client library offers two critical advantages:

1.  **Complete API Coverage:** Apps Script's built-in services only cover a fraction of all Google APIs. This generator allows you to create a client for **any** service with a Discovery Document, such as Firebase, Cloud Billing, and over 400 more.
2.  **Flexible Authentication Flows:** Generated libraries allow you to use a custom OAuth token. This unlocks powerful workflows, such as using your own OAuth clients and **service accounts** for server-to-server tasks, which is not possible with standard built-in services.

## Getting Started: Using a Pre-built Library

### Prerequisite: Enabling the API in a Google Cloud Project

Every API call your script makes must be associated with a Google Cloud Project that has that specific API enabled.

*   **For Service Accounts & Custom OAuth Clients:** You must enable the API in the GCP project that owns your credentials. Your Apps Script project does not need to be linked.
*   **For Default User Authentication:** The API must be enabled either by adding it as an "Advanced Service" (for those that are available) or by linking your script to a standard GCP project where the API has been manually enabled.

For a detailed guide on these setups, please see the official documentation on [Standard Google Cloud Platform projects](https://developers.google.com/apps-script/guides/cloud-platform-projects).

---

### Step 1: Find and Add the Library Code

1.  Navigate to the `build/` directory in this repository.
2.  Find the folder for the API you want to use and open the specific version directory.
3.  Add the library code to your project by copying the content from either `[ApiName].with_docs.gs` (for development) or `[ApiName].gs` (for production) into a new script file.

> **Tip:** Providing the `[ApiName].with_docs.gs` file to a conversation in gemini.google.com can help when vibe coding with Gemini.

### Step 2: Add Required Scopes to Your Manifest

For service account usage only the `https://www.googleapis.com/auth/script.external_request` scope is required in the manifest

1.  From the library folder in the `build/` directory, open the `appsscript.json` file.
2.  Copy the scopes you need from the `"oauthScopes"` array into your own project's manifest file (`Project Settings ⚙️ > Show "appsscript.json" manifest file`).
3.  **Note:** You must always include the `https://www.googleapis.com/auth/script.external_request` scope to allow the library to make API calls.

## Usage and Configuration Patterns

Instantiate the library by calling `new [ApiName]()`. You can pass a configuration object to the constructor to customize its behavior.

#### Standard Authentication (Default)
No configuration is needed. The library automatically uses the script's default user token.
```javascript
// The library uses the script's default OAuth token.
const ytAnalytics = new YoutubeAnalytics();
```

#### Using a Custom OAuth Token
Provide a pre-fetched OAuth token. This is the pattern used for service accounts.
```javascript
// Prerequisite: You have already obtained a token string.
const myToken = getServiceAccountToken(); // Your function to get the token

const ytAnalytics = new YoutubeAnalytics({
  token: myToken
});
```

#### Disabling Automatic Retries
By default, the library retries on rate limit and server errors. You can disable this to fail fast.
```javascript
// The library will now fail immediately on 429 or 5xx errors.
const ytAnalytics = new YoutubeAnalytics({
  backoff: {
    retries: 0
  }
});
```

#### Combining Configurations
The configuration options can be combined.
```javascript
// Use a custom token AND disable automatic retries.
const ytAnalytics = new YoutubeAnalytics({
  token: myToken,
  backoff: {
    retries: 0
  }
});
```

## Complete Example: Using a Service Account
This detailed walkthrough shows how to get a token using the OAuth2 for Apps Script library and pass it to a generated library. This flow is essential for scripts that run on a trigger or act on behalf of a system.

#### Prerequisites

1.  Add the OAuth2 for Apps Script library. In your project, go to **Libraries \+** and add it using this Script ID:
    `1B7FSrk5Zi6L1rSxxTDgDEUsPzlukDsi4KGuTMorsTQHhGBzBkMun4iDF`
2.  Create a Service Account in your Google Cloud Platform project. Download the JSON key file. [Official Google Guide](https://developers.google.com/identity/protocols/oauth2/service-account#creatinganaccount)

#### Implementation

```javascript
// The email of the user to impersonate (for domain-wide delegation).
const USER_EMAIL = 'user-to-impersonate@yourdomain.com'; 

function getService_() {
  // Credentials from the service account's JSON key file.
  const serviceAccountCreds = {
    "private_key": "-----BEGIN PRIVATE KEY-----\n...",
    "client_email": "your-service-account@your-project.iam.gserviceaccount.com",
  };

  // Use a unique name for the service, like 'Drive' or 'BigQuery', to avoid
  // token collisions between different services.
  return OAuth2.createService('Drive:' + USER_EMAIL)
      .setTokenUrl('https://oauth2.googleapis.com/token')
      .setPrivateKey(serviceAccountCreds.private_key)
      .setIssuer(serviceAccountCreds.client_email)
      .setSubject(USER_EMAIL)
      .setCache(CacheService.getUserCache())
      .setScope('https://www.googleapis.com/auth/drive');
}

/**
 * Lists files using the configured service account.
 */
function listFilesWithServiceAccount() {
  const service = getService_();
  if (!service.hasAccess()) {
    console.log('Service Account authentication failed: ' + service.getLastError());
    return;
  }
  
  const token = service.getAccessToken();

  // This is where the generated library is used with the custom token.
  const drive = new Drive({
    token: token 
  });

  const files = drive.files.list({
    supportsAllDrives: true,
    pageSize: 10
  });
  
  console.log('Files found via service account:', JSON.stringify(files, null, 2));
}
```

## For Developers: Generating a Library

If the library you need needs adjusting or or you would like to incorporate this into your own workflows, you can run the generator yourself.

### 1\. Setup the Generator

1. Create a new, standalone Google Apps Script project at [script.google.com](https://script.google.com). Name it **ApiLibraryGenerator**.  
2. Replace the contents of `Code.gs` with the complete code from the `generator/` folder in this repository.  
3. **Enable the Drive API Advanced Service:**  
   * In the editor, click **Services \+**.  
   * Find **Drive API**, select it, and click **Add**.

### 2\. Generate a Library

1. Open the `Code.gs` file in your **ApiLibraryGenerator** project.  
2. To generate a new library, call `createCompleteApiLibrary()` with the desired `apiName` and `version`. You can also configure whether to include JSDoc comments. 

```
function generateMyLibrary() {
  // Generate YouTube Analytics v2 library with full JSDoc comments
  createCompleteApiLibrary('youtubeAnalytics', 'v2', { generateJsdoc: true });
}
```

3. Select your function from the toolbar and click **Run**.  
4. Authorize the script. A new Apps Script project file will appear in your Google Drive.

## Acknowledgements

This project was heavily inspired by the pioneering work of **Spencer Easton** on his [Apps-Script-GoogleApis-Libraries](https://github.com/Spencer-Easton/Apps-Script-GoogleApis-Libraries) repository. This generator aims to build upon that foundation with modern class structures, automated project creation, and additional features.
