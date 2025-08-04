# **Google Apps Script: Service Account with Custom Drive API Library**

This Google Apps Script project demonstrates how to use a Google Service Account to interact with the Google Drive API. It features a self-contained Drive library for making API requests.

## **🚀 Features**

* **Service Account Authentication**: Securely authenticates with Google APIs using a service account, allowing the script to act on behalf of a user (**impersonation**) or on its own.  
* **Custom Drive API Library (DriveLib.js)**: A reusable, class-based library that wraps the Google Drive API v3. It simplifies making API calls and includes features like:  
  * Automatic handling of path and query parameters.  
  * Built-in exponential backoff to handle rate limits and transient errors gracefully.  

## **🔧 Setup Instructions**

Follow these steps to get the project running in your own Google account.

### **1\. Google Cloud & Service Account Setup**

1. **Create a Google Cloud Project**: If you don't have one already, create a new project in the [Google Cloud Console](https://console.cloud.google.com/).  
2. **Enable the Google Drive API**: In your Cloud Project, navigate to the "APIs & Services" \> "Library" and enable the **Google Drive API**.  
3. **Create a Service Account**:  
   * Go to "APIs & Services" \> "Credentials".  
   * Click "Create Credentials" and select "Service Account".   
   * Create and download a JSON key file for the service account. You will need the `client_email` and `private_key` from this file.
4. **Domain Wide Delegation**: Configure [domain-wide authority to the service account](https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority) using the service account's client ID and the scope `https://www.googleapis.com/auth/drive`

### **2\. Apps Script Project Setup**

1. **Create a new Apps Script Project**: Go to [script.google.com](https://script.google.com/home) and create a new project.  
2. **Copy the Script Files**:  
   * Create four script files in your project: `Code.js`, `DriveLib.js`, `ENVIRONMENT.js`, and the manifest file `appsscript.json`.  
   * Copy the content from the provided project files into your corresponding new files.  
3. **Configure the Script**:  
   * **ENVIRONMENT.js**: Open the downloaded service account JSON key. Paste the `private_key` and `client_email` (and other relevant fields) into the serviceAccountCreds object in this file.  
   * **Code.js**: Change the `USER_EMAIL` constant to the email address of the user you want the service account to impersonate. This user must have access to the Drive files you shared with the service account.

## **▶️ Usage**

1. Open the Apps Script editor.  
2. Select the `listFilesWithServiceAccount()` function from the function dropdown menu.  
3. Click **Run**.  
4. The first time you run it, you will be prompted to grant the necessary permissions.

## **📂 File Descriptions**

* `Code.js`: The main execution file. It orchestrates the authentication process and makes the final call to the Drive API.  
* `DriveLib.js`: A custom library for interacting with the Google Drive API. It is designed to be portable to other projects.  
* `ENVIRONMENT.js`: A configuration file to store sensitive information like the service account credentials, keeping them separate from the core logic.  
* `appsscript.json`: The project manifest file. It defines necessary permissions (OAuth scopes) and library dependencies.

## **⚠️ Security Disclaimer**

Storing private keys directly in script files (ENVIRONMENT.js) is convenient for development but is **not a recommended security practice for production environments**. For production applications, consider using a more secure method for storing and accessing secrets.