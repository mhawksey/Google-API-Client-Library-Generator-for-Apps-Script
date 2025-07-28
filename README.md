# **Google API Client Library Generator for Apps Script**

A Google Apps Script project that dynamically generates modern, feature-rich client libraries for any public Google API directly from the Google APIs Discovery Service.

This tool creates libraries with features including flexible authentication, and automatic exponential backoff.

## **Pre-built Libraries Available**

**This repository includes a `build/` directory containing auto-generated client libraries for every discoverable Google API.**

For most users, you do not need to run the generator yourself. You can find the library you need in the `build/` directory.

**Call for Contributions:** While all libraries are generated, not all have been extensively tested in real-world applications. We welcome and encourage community contributions. If you find a bug or have a suggestion, please [**open a GitHub Issue**](https://github.com/mhawksey/Google-API-Client-Library-Generator-for-Apps-Script/issues). If you have fixes or tests to add, please feel free to **submit a Pull Request**.

---

## **Why Use a Generated Library?**

While Google Apps Script has excellent built-in and advanced services, a generated client library offers two critical advantages:

1. **Complete API Coverage:** Apps Script's built-in services only cover a fraction of all Google APIs. This generator allows you to create a client for **any** service with a Discovery Document, such as Firebase, Cloud Billing, and over 400 more.  
2. **Flexible Authentication Flows:** Generated libraries allow you to use a custom OAuth token. This unlocks powerful workflows, such as using your own oAuth clients and **service accounts** for server-to-server tasks, which is not possible with standard built-in services.

## **Getting Started: Using a Pre-built Library**

Follow these steps to use a library in your Apps Script project.

### **Step 1: Find and Add the Library Code**

1. Navigate to the `build/` directory in this repository.  
2. Find the folder for the API you want to use (e.g., `Drive`, `Bigquery`). Inside that folder, open the specific version directory (e.g., `v3`).  
3. You will find two library files. Choose one to add to your project:  
   * `[ApiName].with_docs.gs`: This version includes full JSDoc comments, giving you an alternative way to review basic documentation.  
   * `[ApiName].gs`: A compact version without JSDoc comments. Ideal for production scripts where file size is a consideration.  
4. In your Apps Script project, create a new script file (e.g., `DriveLibrary.gs`) and paste the code into it.

### **Step 2: Add Required Scopes to Your Manifest**

The generated libraries do not automatically grant your project permissions. You must add the required OAuth scopes to your project's manifest file.

1. From the library folder in the `build/` directory, open the `appsscript.json` file.  
2. Copy the scopes you need from the `"oauthScopes"` array.  
3. In your Apps Script project, open the manifest file by clicking **Project Settings ⚙️ \> "appsscript.json" Manifest File**.  
4. Paste the required scopes into the `"oauthScopes"` array in your project's manifest. Note: you must always include the `https://www.googleapis.com/auth/script.external_request` scope to make the API calls with `UrlFetchApp`

---

## **Authentication Flows**

The libraries support multiple authentication methods.

#### *Default: Standard User Authentication*

By default, the library uses the script's own OAuth token. This is the simplest method and works automatically when a user is running the script and has approved the necessary scopes.

``` javascript
// No special configuration needed.
const drive = new Drive();
const files = drive.files.list();
console.log(files.files.length + ' files found.');
```

#### *Advanced: Service Accounts & Custom OAuth*

For more advanced workflows, you can provide your own OAuth token via the constructor. This is essential for using **service accounts** or specific user credentials managed by the [OAuth2 for Apps Script](https://github.com/googleworkspace/apps-script-oauth2) library.

**Example: Using a Service Account**
This flow is essential for scripts that run on a trigger, act on behalf of a system, or need to impersonate a user in a Google Workspace domain.

#### Prerequisites

1. Add the OAuth2 for Apps Script library. In your project, go to Libraries \+ and add it using this Script ID:  
   `1B7FSrk57A1B1LCo3YTO5V323iJ30rO-Z_d-3Q6gceTvYsbM4E_c3r1g5`  
2. Create a Service Account in your Google Cloud Platform project and enable domain-wide delegation if you need to impersonate users. Download the JSON key file. [Official Google Guide](https://developers.google.com/identity/protocols/oauth2/service-account#creatinganaccount)

#### Implementation

The following is a complete, working example for using a service account with the generated Drive library.

``` javascript
/*
 * This sample demonstrates how to configure the library for Google APIs, using
 * domain-wide delegation (Service Account flow).
 * https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority
 */

// Private key and client email of the service account.
const PRIVATE_KEY =
    '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n';
const CLIENT_EMAIL = '...';

// Email address of the user to impersonate.
const USER_EMAIL = '...';

/**
 * Creates and configures the OAuth2 service.
 * @return {OAuth2.Service} The configured service.
 * @private
 */
function getService_() {
  return OAuth2.createService('GoogleApi:' + USER_EMAIL)
      .setTokenUrl('https://oauth2.googleapis.com/token')
      .setPrivateKey(PRIVATE_KEY)
      .setIssuer(CLIENT_EMAIL)
      .setSubject(USER_EMAIL)
      .setPropertyStore(PropertiesService.getScriptProperties())
      .setScope('https://www.googleapis.com/auth/drive'); 
      // Set the scope. This must match one of the scopes configured during the setup of domain-wide delegation.
}

// --- END: SERVICE ACCOUNT CONFIGURATION ---


/**
 * Lists files using the configured service account.
 */
function listFilesWithServiceAccount() {
  const service = getService_();
  if (!service.hasAccess()) {
    console.log('Service Account authentication failed: ' + service.getLastError());
    return;
  }
  
  // 1. Get the access token from the OAuth2 service.
  const token = service.getAccessToken();

  // 2. Pass the token to the generated library's constructor.
  const drive = new Drive({
    token: token 
  });

  // 3. Use the library as normal.
  const files = drive.files.list({
    supportsAllDrives: true,
    pageSize: 10
  });
  
  console.log('Files found via service account:');
  console.log(JSON.stringify(files, null, 2));
}

/**
 * Resets the authorization state of the service account.
 */
function resetServiceAccount() {
  getService_().reset();
}
```
---

## **For Developers: Generating a Library**

If the library you need needs adjusting or or you would like to incorporate this into your own workflows, you can run the generator yourself.

### **1\. Setup the Generator**

1. Create a new, standalone Google Apps Script project at [script.google.com](https://script.google.com). Name it **ApiLibraryGenerator**.  
2. Replace the contents of `Code.gs` with the complete code from the `generator/` folder in this repository.  
3. **Enable the Drive API Advanced Service:**  
   * In the editor, click **Services \+**.  
   * Find **Drive API**, select it, and click **Add**.

### **2\. Generate a Library**

1. Open the `Code.gs` file in your **ApiLibraryGenerator** project.  
2. To generate a new library, call `createCompleteApiLibrary()` with the desired `apiName` and `version`. You can also configure whether to include JSDoc comments. 

``` javascript
function generateMyLibrary() {
  // Generate YouTube Analytics v2 library with full JSDoc comments
  createCompleteApiLibrary('youtubeAnalytics', 'v2', { generateJsdoc: true });
}
```

3. Select your function from the toolbar and click **Run**.  
4. Authorize the script. A new Apps Script project file will appear in your Google Drive.

---

## **Acknowledgements**

This project was heavily inspired by the pioneering work of **Spencer Easton** on his [Apps-Script-GoogleApis-Libraries](https://github.com/Spencer-Easton/Apps-Script-GoogleApis-Libraries) repository. This generator aims to build upon that foundation with modern class structures, automated project creation, and additional features.
