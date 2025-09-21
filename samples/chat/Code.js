/**
 * Main test runner for the Google Chat API library.
 * This performs a full lifecycle test, now including listing messages.
 */
async function runAllChatApiTests() {
    const chat = new Chat();
    const testSpaceName = `Test Space ${new Date().getTime()}`;
    let spaceResourceName = null; // Will be like "spaces/AAAAAAAAA"
    let messageResourceName = null; // Will be like "spaces/AAAAAAA/messages/BBBBBBB"

    try {
        Logger.log(`[START] Running tests for Chat API Library...`);

        // Each step is awaited to ensure it completes before the next one starts.
        spaceResourceName = await test_createSpace(chat, testSpaceName);
        messageResourceName = await test_createMessage(chat, spaceResourceName);
        await test_listMessages(chat, spaceResourceName, messageResourceName);
        await test_getMessage(chat, messageResourceName);
        await test_updateMessage(chat, messageResourceName);
        await test_deleteMessage(chat, messageResourceName);

        Logger.log(`\n[SUCCESS] All tests passed!`);

    } catch (e) {
        Logger.log(`\n[FAIL] A test failed: ${e.message}`);
        Logger.log(e.stack);
    } finally {
        // Cleanup: always try to delete the space
        if (spaceResourceName) {
            await test_deleteSpace(chat, spaceResourceName);
        }
        Logger.log('[END] Test run finished.');
    }
}

/**
 * [TEST] Creates a new chat space.
 */
async function test_createSpace(chat, displayName) {
    Logger.log('  [RUN] test_createSpace');
    const response = await chat.spaces.create({ requestBody: { displayName: displayName, spaceType: 'SPACE' } });
    Logger.log(`    [PASS] Successfully created space: ${response.data.name}`);
    return response.data.name;
}

/**
 * [TEST] Creates a message in a given space.
 */
async function test_createMessage(chat, parentSpace) {
    Logger.log('  [RUN] test_createMessage');
    const messageText = 'Hello from the test suite!';
    const response = await chat.spaces.messages.create({ parent: parentSpace, requestBody: { text: messageText } });
    Logger.log(`    [PASS] Successfully created message: ${response.data.name}`);
    return response.data.name;
}

/**
 * [TEST] Lists messages in a space and verifies the test message exists.
 */
async function test_listMessages(chat, parentSpace, expectedMessageName) {
    Logger.log('  [RUN] test_listMessages');
    const response = await chat.spaces.messages.list({ parent: parentSpace });

    if (!response.data.messages) {
        throw new Error(`Failed to list messages. Response did not contain a 'messages' array.`);
    }

    const foundMessage = response.data.messages.find(msg => msg.name === expectedMessageName);
    if (foundMessage) {
        Logger.log(`    [PASS] Successfully listed messages and found the test message.`);
    } else {
        throw new Error(`The test message was not found in the list.`);
    }
}

/**
 * [TEST] Retrieves a specific message by its resource name.
 */
async function test_getMessage(chat, messageName) {
    Logger.log('  [RUN] test_getMessage');
    const response = await chat.spaces.messages.get({ name: messageName });
    if (response.data.name === messageName && response.data.text.includes('Hello')) {
        Logger.log(`    [PASS] Successfully retrieved message.`);
    } else {
        throw new Error(`Retrieved message did not match expected content.`);
    }
}

/**
 * [TEST] Updates a message using the PATCH method.
 */
async function test_updateMessage(chat, messageName) {
    Logger.log('  [RUN] test_updateMessage');
    const updatedText = 'This message has been updated via PATCH.';
    const response = await chat.spaces.messages.patch({
        name: messageName,
        updateMask: 'text',
        requestBody: { text: updatedText }
    });
    if (response.data.text === updatedText) {
        Logger.log(`    [PASS] Successfully updated message.`);
    } else {
        throw new Error(`Message text was not updated as expected.`);
    }
}

/**
 * [TEST] Deletes a message.
 */
async function test_deleteMessage(chat, messageName) {
    Logger.log('  [RUN] test_deleteMessage');
    const response = await chat.spaces.messages.delete({ name: messageName });
    // A successful delete returns an empty data object {}
    if (response.data && Object.keys(response.data).length === 0) {
        Logger.log(`    [PASS] Successfully deleted message.`);
    } else {
        throw new Error(`Failed to delete message. Expected empty response.`);
    }
}

/**
 * [TEST] Deletes a space for cleanup.
 */
async function test_deleteSpace(chat, spaceName) {
    Logger.log('  [RUN] test_deleteSpace (Cleanup)');
    try {
        await chat.spaces.delete({ name: spaceName });
        Logger.log(`    [PASS] Successfully deleted space: ${spaceName}`);
    } catch (e) {
        // This is not a critical failure, so we just log a warning.
        Logger.log(`    [WARN] Failed to delete space during cleanup. Manual cleanup may be needed. Error: ${e.message}`);
    }
}


/**
 * [USER-CONFIGURED TEST] Runs the pagination test for listing messages.
 * You must provide the resource name for a space you are a member of
 * that has more than 5 messages.
 */
async function runPaginationTest() {
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
    await test_listMessages_pagination(chat, TARGET_SPACE_ID);
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
async function test_listMessages_pagination(chat, spaceId) {
  Logger.log('  [RUN] test_listMessages_pagination');
  const pageSize = 5;

  // --- First API Call: Get the first page ---
  Logger.log(`    Fetching page 1 with pageSize=${pageSize}...`);
  const page1Response = await chat.spaces.messages.list({
    parent: spaceId,
    pageSize: pageSize
  });

  if (!page1Response.data || !page1Response.data.messages) {
    throw new Error(`Failed to fetch the first page.`);
  }
  Logger.log(`      -> Found ${page1Response.data.messages.length} messages on page 1.`);

  // --- Check for the nextPageToken ---
  const pageToken = page1Response.data.nextPageToken;
  if (!pageToken) {
    throw new Error(`Test cannot proceed. The space does not have enough messages to require a second page (less than ${pageSize} total). Please use a more active space.`);
  }
  Logger.log(`      -> Found nextPageToken, proceeding to page 2.`);

  // --- Second API Call: Use the token to get the second page ---
  Logger.log(`    Fetching page 2 with pageToken...`);
  const page2Response = await chat.spaces.messages.list({
    parent: spaceId,
    pageSize: pageSize,
    pageToken: pageToken
  });

  if (page2Response.data && page2Response.data.messages && page2Response.data.messages.length > 0) {
    Logger.log(`      -> Found ${page2Response.data.messages.length} messages on page 2.`);
    Logger.log('    [PASS] Successfully fetched a second page of messages using a pageToken.');
  } else {
    throw new Error(`Failed to fetch the second page using the pageToken.`);
  }
}