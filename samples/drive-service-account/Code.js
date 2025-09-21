// The email of the user to impersonate (for domain-wide delegation).
const USER_EMAIL = 'user-to-impersonate@yourdomain.com'; 

function getService_() {
  // Use a unique name for the service, like 'Drive' or 'BigQuery', to avoid
  // token collisions between different services.
  return OAuth2.createService('Drive:' + USER_EMAIL)
      .setTokenUrl('https://oauth2.googleapis.com/token')
      .setPrivateKey(SERVICE_ACCOUNT_CRED.private_key)
      .setIssuer(SERVICE_ACCOUNT_CRED.client_email)
      .setSubject(USER_EMAIL)
      .setCache(CacheService.getUserCache())
      .setScope('https://www.googleapis.com/auth/drive');
}

/**
 * Lists files using a service account token.
 * This function is now async to handle the Promise returned by the Drive library.
 */
async function listFilesWithServiceAccount() {
  const service = getService_();
  if (!service.hasAccess()) {
    console.log('Service Account authentication failed: ' + service.getLastError());
    return;
  }

  const token = service.getAccessToken();

  // Instantiate the Drive library with the service account token.
  const drive = new Drive({
    token: token
  });

  try {
    // Use 'await' to wait for the asynchronous API call to complete.
    const response = await drive.files.list({
      supportsAllDrives: true,
      pageSize: 10
    });

    // The actual list of files is in the 'data' property of the response.
    console.log('Files found via service account:', JSON.stringify(response.data, null, 2));
    
  } catch (e) {
    console.error(`Error listing files: ${e.message}`);
  }
}