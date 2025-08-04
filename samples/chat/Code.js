/**
 * Main test runner for the Google Chat API library.
 * This performs a full lifecycle test, now including listing messages.
 */
function runAllChatApiTests() {
    const chat = new Chat(); // Assumes the library identifier is 'Chat'
    const testSpaceName = `Test Space ${new Date().getTime()}`;
    let spaceResourceName = null; // Will be like "spaces/AAAAAAAAA"
    let messageResourceName = null; // Will be like "spaces/AAAAAAA/messages/BBBBBBB"

    try {
        Logger.log(`[START] Running tests for Chat API Library...`);

        // 1. Create a test space
        spaceResourceName = test_createSpace(chat, testSpaceName);

        // 2. Create a message in that space
        messageResourceName = test_createMessage(chat, spaceResourceName);

        // 3. NEW TEST: List messages in the space to verify the new message is there
        test_listMessages(chat, spaceResourceName, messageResourceName);

        // 4. Get the specific message back to verify
        test_getMessage(chat, messageResourceName);

        // 5. Update the message
        test_updateMessage(chat, messageResourceName);

        // 6. Delete the message
        test_deleteMessage(chat, messageResourceName);

        Logger.log(`\n[SUCCESS] All tests passed!`);

    } catch (e) {
        Logger.log(`\n[FAIL] A test failed: ${e.message}`);
        Logger.log(e.stack);
    } finally {
        // 7. Cleanup: always delete the space
        if (spaceResourceName) {
            test_deleteSpace(chat, spaceResourceName);
        }
        Logger.log('[END] Test run finished.');
    }
}

/**
 * [NEW TEST] Lists messages in a space and verifies the test message exists.
 * @param {Chat} chat The Chat API client instance.
 * @param {string} parentSpace The resource name of the space to list messages from.
 * @param {string} expectedMessageName The resource name of the message we expect to find.
 */
function test_listMessages(chat, parentSpace, expectedMessageName) {
    Logger.log('  [RUN] test_listMessages');

    // Call the list method on the nested messages resource
    const response = chat.spaces.messages.list({ parent: parentSpace });

    // A successful response should have a 'messages' array
    if (response && response.messages) {
        // Find our specific test message within the list
        const foundMessage = response.messages.find(msg => msg.name === expectedMessageName);
        if (foundMessage) {
            Logger.log(`    [PASS] Successfully listed messages and found the test message.`);
        } else {
            throw new Error(`The test message was not found in the list. Response: ${JSON.stringify(response)}`);
        }
    } else {
        throw new Error(`Failed to list messages. Response: ${JSON.stringify(response)}`);
    }
}

// =========================================================================
// (The other test functions: test_createSpace, test_createMessage, 
// test_getMessage, test_updateMessage, test_deleteMessage, and 
// test_deleteSpace remain unchanged. Keep them in your script.)
// =========================================================================

function test_createSpace(chat, displayName) {
    Logger.log('  [RUN] test_createSpace');
    const response = chat.spaces.create({ resource: { displayName: displayName, spaceType: 'SPACE' } });
    if (response && response.name) {
        Logger.log(`    [PASS] Successfully created space: ${response.name}`);
        return response.name;
    }
    throw new Error(`Failed to create space. Response: ${JSON.stringify(response)}`);
}

function test_createMessage(chat, parentSpace) {
    Logger.log('  [RUN] test_createMessage');
    const messageText = 'Hello from the test suite!';
    // Note the use of the nested resource: spaces.messages.create
    const response = chat.spaces.messages.create({ parent: parentSpace, resource: { text: messageText } });
    if (response && response.name) {
        Logger.log(`    [PASS] Successfully created message: ${response.name}`);
        return response.name;
    }
    throw new Error(`Failed to create message. Response: ${JSON.stringify(response)}`);
}

function test_getMessage(chat, messageName) {
    Logger.log('  [RUN] test_getMessage');
    const response = chat.spaces.messages.get({ name: messageName });
    if (response && response.name === messageName && response.text.includes('Hello')) {
        Logger.log(`    [PASS] Successfully retrieved message.`);
    } else {
        throw new Error(`Failed to get message. Response: ${JSON.stringify(response)}`);
    }
}

function test_updateMessage(chat, messageName) {
    Logger.log('  [RUN] test_updateMessage');
    const updatedText = 'This message has been updated via PATCH.';
    // Using 'patch' is generally preferred over 'update'
    const response = chat.spaces.messages.patch({
        name: messageName,
        updateMask: 'text',
        resource: { text: updatedText }
    });
    if (response && response.text === updatedText) {
        Logger.log(`    [PASS] Successfully updated message.`);
    } else {
        throw new Error(`Failed to update message. Response: ${JSON.stringify(response)}`);
    }
}

function test_deleteMessage(chat, messageName) {
    Logger.log('  [RUN] test_deleteMessage');
    const response = chat.spaces.messages.delete({ name: messageName });
    // A successful delete returns an empty object {}
    if (response && Object.keys(response).length === 0) {
        Logger.log(`    [PASS] Successfully deleted message.`);
    } else {
        throw new Error(`Failed to delete message. Response: ${JSON.stringify(response)}`);
    }
}

function test_deleteSpace(chat, spaceName) {
    Logger.log('  [RUN] test_deleteSpace (Cleanup)');
    const response = chat.spaces.delete({ name: spaceName });
    if (response && Object.keys(response).length === 0) {
        Logger.log(`    [PASS] Successfully deleted space: ${spaceName}`);
    } else {
        // This is not a critical failure, so we just log a warning.
        Logger.log(`    [WARN] Failed to delete space during cleanup. Manual cleanup may be needed. Response: ${JSON.stringify(response)}`);
    }
}

/**
 * [USER-CONFIGURED TEST] Runs the pagination test for listing messages.
 * You must provide the resource name for a space you are a member of
 * that has more than 5 messages.
 */
function runPaginationTest() {
  // !!! IMPORTANT !!!
  // !!! PASTE THE RESOURCE NAME OF YOUR CHAT SPACE HERE !!!
  // It should be in the format "spaces/XXXXXXXXXXX"
  const TARGET_SPACE_ID = 'spaces/AAAArBZArj8'; // <--- REPLACE WITH A REAL SPACE ID

  if (!TARGET_SPACE_ID || TARGET_SPACE_ID.includes('...')) {
    Logger.log('[FAIL] Please replace the placeholder TARGET_SPACE_ID in the runPaginationTest function.');
    return;
  }

  const chat = new Chat();

  try {
    Logger.log(`[START] Running Pagination Test on space: ${TARGET_SPACE_ID}...`);
    test_listMessages_pagination(chat, TARGET_SPACE_ID);
    Logger.log(`[SUCCESS] Pagination test passed!`);
  } catch (e) {
    Logger.log(`\n[FAIL] Pagination test failed: ${e.message}`);
    Logger.log(e.stack);
  } finally {
    Logger.log('[END] Pagination Test finished.');
  }
}

/**
 * Tests the pagination functionality of the spaces.messages.list method.
 * Fetches two pages of messages to confirm the pageToken works.
 *
 * @param {Chat} chat The Chat API client instance.
 * @param {string} spaceId The resource name of the space to test against.
 */
function test_listMessages_pagination(chat, spaceId) {
  Logger.log('  [RUN] test_listMessages_pagination');
  const pageSize = 5; // Use a small page size to easily trigger pagination

  // --- First API Call: Get the first page ---
  Logger.log(`    Fetching page 1 with pageSize=${pageSize}...`);

  const page1Response = chat.spaces.messages.list({
    parent: spaceId,
    pageSize: pageSize
  });

  if (!page1Response || !page1Response.messages) {
    throw new Error(`Failed to fetch the first page. Response: ${JSON.stringify(page1Response)}`);
  }
  Logger.log(`      -> Found ${page1Response.messages.length} messages on page 1.`);

  // --- Check for the nextPageToken ---
  const pageToken = page1Response.nextPageToken;
  if (!pageToken) {
    throw new Error(`Test cannot proceed. The space does not have enough messages to require a second page (less than ${pageSize} total). Please use a more active space.`);
  }
  Logger.log(`      -> Found nextPageToken, proceeding to page 2.`);

  // --- Second API Call: Use the token to get the second page ---
  Logger.log(`    Fetching page 2 with pageToken...`);
  const page2Response = chat.spaces.messages.list({
    parent: spaceId,
    pageSize: pageSize,
    pageToken: pageToken
  });

  if (page2Response && page2Response.messages && page2Response.messages.length > 0) {
    Logger.log(`      -> Found ${page2Response.messages.length} messages on page 2.`);
    Logger.log('    [PASS] Successfully fetched a second page of messages using a pageToken.');
  } else {
    throw new Error(`Failed to fetch the second page using the pageToken. Response: ${JSON.stringify(page2Response)}`);
  }
}