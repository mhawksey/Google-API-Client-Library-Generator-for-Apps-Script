# **Google API Client Library Generator for Apps Script**

A Google Apps Script project that dynamically generates modern, feature-rich client libraries for any public Google API directly from the Google APIs Discovery Service.

This tool creates libraries with features including flexible authentication, and automatic exponential backoff.

## **Pre-built Libraries Available**

**This repository includes a `build/` directory containing auto-generated client libraries for every discoverable Google API.**

For most users, you do not need to run the generator yourself. You can find the library you need in the `build/` directory.

> **Call for Contributions:** While all libraries are generated, not all have been extensively tested. We welcome and encourage community contributions. If you find a bug or have a suggestion, please [**open a GitHub Issue**](https://github.com/mhawksey/Google-API-Client-Library-Generator-for-Apps-Script/issues). If you have fixes or tests to add, please feel free to **submit a Pull Request**.

---

## **Why Use a Generated Library?**

While Google Apps Script has excellent built-in and advanced services, a generated client library offers two critical advantages:

1.  **Complete API Coverage:** Apps Script's built-in services only cover a fraction of all Google APIs. This generator allows you to create a client for **any** service with a Discovery Document, such as Firebase, Cloud Billing, and over 400 more.
2.  **Flexible Authentication Flows:** Generated libraries allow you to use a custom OAuth token. This unlocks powerful workflows, such as using your own OAuth clients and **service accounts** for server-to-server tasks, which is not possible with standard built-in services.

---

## **Getting Started: Using a Pre-built Library**

### **Prerequisite: Enabling the API in a Google Cloud Project**

Every API call your script makes must be associated with a Google Cloud Project that has that specific API enabled.

#### **If using Service Accounts or a Custom OAuth Client:**
This is the most flexible approach.

1.  Create or select a project in the [Google Cloud Console](https://console.cloud.google.com/).
2.  In this project, go to **APIs & Services > Library** and **enable the API** you intend to use (e.g., "Cloud Vision API").
3.  Create your credentials (e.g., a Service Account key or an OAuth 2.0 Client ID) within this same project.
4.  **You do not need to link your Apps Script project to this GCP project.** The authentication is handled by the credentials you provide to the library.

#### **If using the Default User Authentication Flow:**
This method uses the identity of the user running the script. For libraries that already exist as an Advanced Services (e.g., Drive, Sheets, and Slides etc), you can use the default user authentication flow by following these steps:

1. In your Apps Script project, click **Services \+**.  
2. Find the corresponding advanced service (e.g., `Drive API`) and **Add** it.  
3. By doing this, you've instructed Apps Script to enable the API in the background using its hidden, default Google Cloud project.  

### **When and How to Link a Standard GCP Project**

You only need to link your Apps Script project to a standard GCP project for specific operational reasons. The most common are:

*   To publish your script as an add-on in the Google Workspace Marketplace.
*   To call an API using the **default user authentication flow** if that API is not an Apps Script "Advanced Service".
*   To view your script's logs and error reports in the Google Cloud console.
*   To have your script executed by other applications via the Apps Script API.

**To link your project:**

1.  Create or select a project in the [Google Cloud Console](https://console.cloud.google.com/).
2.  You must configure the consent screen before you can link the project. Go to **APIs & Services > OAuth consent screen** and complete the required fields.
3.  In your Apps Script project, click **Project Settings ⚙️**.
4.  Scroll down to **Google Cloud Platform (GCP) Project** and click **Change project**.
5.  Enter the **Project Number** of your GCP project and click **Set project**.

---

### **Step 1: Find and Add the Library Code**

1.  Navigate to the `build/` directory in this repository.
2.  Find the folder for the API you want to use and open the specific version directory.
3.  Add the library code to your project by copying the content from either `[ApiName].with_docs.gs` (for development) or `[ApiName].gs` (for production) into a new script file.

### **Step 2: Add Required Scopes to Your Manifest**

1.  From the library folder in the `build/` directory, open the `appsscript.json` file.
2.  Copy the scopes you need from the `"oauthScopes"` array into your own project's manifest file (`Project Settings ⚙️ > Show "appsscript.json" manifest file`).
3.  **Note:** You must always include the `https://www.googleapis.com/auth/script.external_request` scope to allow the library to make API calls.

*(The rest of the README, covering Authentication Flow examples, Developer Usage, and Acknowledgements, would follow here as before.)*

# **Google API Client Library Generator for Apps Script**

A Google Apps Script project that dynamically generates modern, feature-rich client libraries for any public Google API directly from the Google APIs Discovery Service.

This tool creates libraries with features including flexible authentication, and automatic exponential backoff.

## **Pre-built Libraries Available**

**This repository includes a `build/` directory containing auto-generated client libraries for every discoverable Google API.**

For most users, you do not need to run the generator yourself. You can find the library you need in the `build/` directory.

> **Call for Contributions:** While all libraries are generated, not all have been extensively tested. We welcome and encourage community contributions. If you find a bug or have a suggestion, please [**open a GitHub Issue**](https://github.com/mhawksey/Google-API-Client-Library-Generator-for-Apps-Script/issues). If you have fixes or tests to add, please feel free to **submit a Pull Request**.

---

## **Why Use a Generated Library?**

While Google Apps Script has excellent built-in and advanced services, a generated client library offers two critical advantages:

1.  **Complete API Coverage:** Apps Script's built-in services only cover a fraction of all Google APIs. This generator allows you to create a client for **any** service with a Discovery Document, such as Firebase, Cloud Billing, and over 400 more.
2.  **Flexible Authentication Flows:** Generated libraries allow you to use a custom OAuth token. This unlocks powerful workflows, such as using your own OAuth clients and **service accounts** for server-to-server tasks, which is not possible with standard built-in services.

---

## **Getting Started: Using a Pre-built Library**

### **Prerequisite: Enabling the API in a Google Cloud Project**

Every API call your script makes must be associated with a Google Cloud Project that has that specific API enabled.

#### **If using Service Accounts or a Custom OAuth Client:**
This is the most flexible approach.

1.  Create or select a project in the [Google Cloud Console](https://console.cloud.google.com/).
2.  In this project, go to **APIs & Services > Library** and **enable the API** you intend to use (e.g., "Cloud Vision API").
3.  Create your credentials (e.g., a Service Account key or an OAuth 2.0 Client ID) within this same project.
4.  **You do not need to link your Apps Script project to this GCP project.** The authentication is handled by the credentials you provide to the library.

#### **If using the Default User Authentication Flow:**
This method uses the identity of the user running the script.

1.  You must link your Apps Script project to a standard GCP project to enable APIs that are not available as "Advanced Services".
2.  Follow the steps in the section below, **"When and How to Link a Standard GCP Project."**

---

### **When and How to Link a Standard GCP Project**

You only need to link your Apps Script project to a standard GCP project for specific operational reasons. The most common are:

*   To publish your script as an add-on in the Google Workspace Marketplace.
*   To call an API using the **default user authentication flow** if that API is not an Apps Script "Advanced Service".
*   To view your script's logs and error reports in the Google Cloud console.
*   To have your script executed by other applications via the Apps Script API.

**To link your project:**

1.  Create or select a project in the [Google Cloud Console](https://console.cloud.google.com/).
2.  You must configure the consent screen before you can link the project. Go to **APIs & Services > OAuth consent screen** and complete the required fields.
3.  In your Apps Script project, click **Project Settings ⚙️**.
4.  Scroll down to **Google Cloud Platform (GCP) Project** and click **Change project**.
5.  Enter the **Project Number** of your GCP project and click **Set project**.

---

### **Step 1: Find and Add the Library Code**

1.  Navigate to the `build/` directory in this repository.
2.  Find the folder for the API you want to use and open the specific version directory.
3.  Add the library code to your project by copying the content from either `[ApiName].with_docs.gs` (for development) or `[ApiName].gs` (for production) into a new script file.

### **Step 2: Add Required Scopes to Your Manifest**

1.  From the library folder in the `build/` directory, open the `appsscript.json` file.
2.  Copy the scopes you need from the `"oauthScopes"` array into your own project's manifest file (`Project Settings ⚙️ > Show "appsscript.json" manifest file`).
3.  **Note:** You must always include the `https://www.googleapis.com/auth/script.external_request` scope to allow the library to make API calls.

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
  return OAuth2.createService('Drive:' + USER_EMAIL)
      .setTokenUrl('https://oauth2.googleapis.com/token')
      .setPrivateKey(PRIVATE_KEY)
      .setIssuer(CLIENT_EMAIL)
      .setSubject(USER_EMAIL)
      .setCache(CacheService.getUserCache())
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
