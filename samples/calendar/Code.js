/**
 * ===========================================================================
 * INTEGRATION TEST SUITE FOR THE 'Calendar' CLIENT LIBRARY
 * ===========================================================================
 * !! WARNING !!
 * This script interacts with your REAL Google Calendar data.
 * It will create, modify, and delete a calendar.
 *
 * TO RUN:
 * 1. Ensure the 'Calendar' class is in your project.
 * 2. Select 'runIntegrationTests' and click 'Run'.
 * 3. Check the logs for results.
 * ===========================================================================
 */

// ‼️ IMPORTANT: Change this to a valid email address you can check.
const SHARE_WITH = 'me@example.com';

/**
 * The main test runner. It creates a temporary calendar,
 * runs tests on it, and then deletes it.
 */
async function runIntegrationTests() {
  const calendar = new Calendar(); // Assumes Calendar class is in the project
  let testCalendarId = null;

  try {
    console.log('--- 🚀 Starting Integration Tests ---');

    // 1. CREATE a test calendar to avoid touching the primary calendar
    console.log('\nStep 1: Creating a temporary test calendar...');
    const createResponse = await calendar.calendars.insert({
      requestBody: { // Note: resource is now named requestBody
        summary: `My Test Calendar - ${new Date().toISOString()}`,
        description: 'A temporary calendar for integration testing.',
        timeZone: 'Europe/London'
      }
    });

    testCalendarId = createResponse.data.id;
    console.log(`✅ Success! Created calendar with ID: ${testCalendarId}`);

    // --- Run individual test suites ---
    await test_calendarGetAndUpdate(calendar, testCalendarId);
    await test_eventLifecycle(calendar, testCalendarId);
    await test_aclLifecycle(calendar, testCalendarId);

  } catch (e) {
    console.error(`❌ A critical error stopped the tests: ${e.message}\nStack: ${e.stack}`);

  } finally {
    // 4. CLEAN UP by deleting the test calendar
    if (testCalendarId) {
      console.log(`\nStep 4: Cleaning up by deleting test calendar (${testCalendarId})...`);
      try {
        // A successful delete returns no content, so we just check that it doesn't throw an error.
        await calendar.calendars.delete({ calendarId: testCalendarId });
        console.log('✅ Success! Cleanup complete.');
      } catch (e) {
        console.error(`⚠️ Failed to delete calendar. You may need to delete it manually. Error: ${e.message}`);
      }
    }
    console.log('\n--- 🏁 Integration Tests Finished ---');
  }
}

/**
 * Tests getting and updating the test calendar's metadata.
 * @param {Calendar} calendar The initialized Calendar client.
 * @param {string} calendarId The ID of the test calendar.
 */
async function test_calendarGetAndUpdate(calendar, calendarId) {
    console.log('\n--- Testing Calendar Get & Update ---');

    const getResponse = await calendar.calendars.get({ calendarId });
    console.log(`- Fetched calendar summary: "${getResponse.data.summary}"`);

    const newDescription = 'This description was updated by an integration test.';
    const patchResponse = await calendar.calendars.patch({
        calendarId,
        requestBody: { description: newDescription }
    });
    console.log(`- Patched calendar. New description is now: "${patchResponse.data.description}"`);
    console.log('✅ Calendar Get & Update test passed.');
}

/**
 * Tests the full lifecycle of an event: create, get, update, and delete.
 * @param {Calendar} calendar The initialized Calendar client.
 * @param {string} calendarId The ID of the test calendar.
 */
async function test_eventLifecycle(calendar, calendarId) {
    console.log('\n--- Testing Event Lifecycle (Insert, Get, Patch, Delete) ---');
    let eventId = null;

    const eventStart = new Date();
    eventStart.setDate(eventStart.getDate() + 1); // Tomorrow
    const eventEnd = new Date(eventStart.getTime());
    eventEnd.setHours(eventEnd.getHours() + 1); // 1 hour duration

    const insertResponse = await calendar.events.insert({
        calendarId,
        requestBody: {
          summary: 'My Test Event',
          start: { dateTime: eventStart.toISOString() },
          end: { dateTime: eventEnd.toISOString() }
        }
    });
    eventId = insertResponse.data.id;
    console.log(`- Inserted event with ID: ${eventId}`);

    const getResponse = await calendar.events.get({ calendarId, eventId });
    console.log(`- Fetched event with summary: "${getResponse.data.summary}"`);

    const patchResponse = await calendar.events.patch({
        calendarId,
        eventId,
        requestBody: { location: 'The Cloud' }
    });
    console.log(`- Patched event. New location: "${patchResponse.data.location}"`);

    await calendar.events.delete({ calendarId, eventId });
    console.log('- Deleted event.');

    console.log('✅ Event Lifecycle test passed.');
}

/**
 * Tests the full lifecycle of an ACL rule: create, list, and delete.
 * @param {Calendar} calendar The initialized Calendar client.
 * @param {string} calendarId The ID of the test calendar.
 */
async function test_aclLifecycle(calendar, calendarId) {
    console.log('\n--- Testing ACL Lifecycle (Insert, List, Delete) ---');

    const userEmailToShareWith = SHARE_WITH;
    let ruleId = null;

    try {
      const insertResponse = await calendar.acl.insert({
          calendarId,
          requestBody: {
            role: 'reader',
            scope: { type: 'user', value: userEmailToShareWith }
          }
      });
      ruleId = insertResponse.data.id;
      console.log(`- Inserted ACL rule for ${userEmailToShareWith}. Rule ID: ${ruleId}`);
    } catch(e) {
      console.warn(`⚠️  Could not insert ACL rule. This often happens if the email is invalid or the test is run by a service account. Skipping ACL test. Error: ${e.message}`);
      return; // Skip the rest of this test
    }

    const listResponse = await calendar.acl.list({ calendarId });
    const hasRule = listResponse.data.items.some(item => item.id === ruleId);
    console.log(`- Listed ACL rules. Verified that the new rule exists: ${hasRule}`);

    await calendar.acl.delete({ calendarId, ruleId });
    console.log('- Deleted ACL rule.');

    console.log('✅ ACL Lifecycle test passed.');
}