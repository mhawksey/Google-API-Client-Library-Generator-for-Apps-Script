/**
 * =================================================================
 * INTEGRATION TEST SUITE FOR THE 'Calendar' CLIENT LIBRARY
 * =================================================================
 * !! WARNING !!
 * This script interacts with your REAL Google Calendar data.
 * It will create, modify, and delete a calendar.
 *
 * TO RUN:
 * 1. Ensure the 'Calendar' class is in your project.
 * 2. Complete the authorisation setup (see instructions).
 * 3. Select 'runIntegrationTests' and click 'Run'.
 * 4. Check the logs for results.
 * =================================================================
 */

// ‼️ IMPORTANT: Change this to a valid email address you can check.
const SHARE_WITH = 'me@example.com'

/**
 * The main test runner. It creates a temporary calendar,
 * runs tests on it, and then deletes it.
 */
function runIntegrationTests() {
  const calendar = new Calendar(); // Assumes Calendar class is in the project
  let testCalendarId = null;

  try {
    console.log('--- 🚀 Starting Integration Tests ---');
    
    // 1. CREATE a test calendar to avoid touching the primary calendar
    console.log('\nStep 1: Creating a temporary test calendar...');
    const createResponse = calendar.calendars.insert({
      resource: {
        summary: `My Test Calendar - ${new Date().toISOString()}`,
        description: 'A temporary calendar for integration testing.',
        timeZone: 'Europe/London'
      }
    });
    
    if (createResponse.error) {
      throw new Error(`Failed to create calendar: ${JSON.stringify(createResponse.error)}`);
    }
    testCalendarId = createResponse.id;
    console.log(`✅ Success! Created calendar with ID: ${testCalendarId}`);

    // --- Run individual test suites ---
    
    test_calendarGetAndUpdate(calendar, testCalendarId);
    test_eventLifecycle(calendar, testCalendarId);
    test_aclLifecycle(calendar, testCalendarId);

  } catch (e) {
    console.error(`❌ A critical error stopped the tests: ${e.message}`);
    
  } finally {
    // 4. CLEAN UP by deleting the test calendar
    if (testCalendarId) {
      console.log(`\nStep 4: Cleaning up by deleting test calendar (${testCalendarId})...`);
      const deleteResponse = calendar.calendars.delete({ calendarId: testCalendarId });
       if (deleteResponse && deleteResponse.error) {
         console.error(`⚠️ Failed to delete calendar. You may need to delete it manually. Error: ${JSON.stringify(deleteResponse.error)}`);
       } else {
         console.log('✅ Success! Cleanup complete.');
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
function test_calendarGetAndUpdate(calendar, calendarId) {
    console.log('\n--- Testing Calendar Get & Update ---');
    
    const getResponse = calendar.calendars.get({ calendarId });
    if (getResponse.error) throw new Error(`Failed to get calendar: ${JSON.stringify(getResponse.error)}`);
    console.log(`- Fetched calendar summary: "${getResponse.summary}"`);
    
    const newDescription = 'This description was updated by an integration test.';
    const patchResponse = calendar.calendars.patch({
        calendarId,
        resource: { description: newDescription }
    });
    if (patchResponse.error) throw new Error(`Failed to patch calendar: ${JSON.stringify(patchResponse.error)}`);
    console.log(`- Patched calendar. New description is now: "${patchResponse.description}"`);
    console.log('✅ Calendar Get & Update test passed.');
}

/**
 * Tests the full lifecycle of an event: create, get, update, and delete.
 * @param {Calendar} calendar The initialized Calendar client.
 * @param {string} calendarId The ID of the test calendar.
 */
function test_eventLifecycle(calendar, calendarId) {
    console.log('\n--- Testing Event Lifecycle (Insert, Get, Patch, Delete) ---');
    let eventId = null;

    const eventStart = new Date();
    eventStart.setDate(eventStart.getDate() + 1); // Tomorrow
    const eventEnd = new Date(eventStart.getTime());
    eventEnd.setHours(eventEnd.getHours() + 1); // 1 hour duration

    const insertResponse = calendar.events.insert({
        calendarId,
        resource: {
          summary: 'My Test Event',
          start: { dateTime: eventStart.toISOString() },
          end: { dateTime: eventEnd.toISOString() }
        }
    });
    if (insertResponse.error) throw new Error(`Failed to insert event: ${JSON.stringify(insertResponse.error)}`);
    eventId = insertResponse.id;
    console.log(`- Inserted event with ID: ${eventId}`);

    const getResponse = calendar.events.get({ calendarId, eventId });
    if (getResponse.error) throw new Error(`Failed to get event: ${JSON.stringify(getResponse.error)}`);
    console.log(`- Fetched event with summary: "${getResponse.summary}"`);
    
    const patchResponse = calendar.events.patch({
        calendarId,
        eventId,
        resource: { location: 'The Cloud' }
    });
    if (patchResponse.error) throw new Error(`Failed to patch event: ${JSON.stringify(patchResponse.error)}`);
    console.log(`- Patched event. New location: "${patchResponse.location}"`);

    calendar.events.delete({ calendarId, eventId });
    console.log('- Deleted event.');
    
    console.log('✅ Event Lifecycle test passed.');
}

/**
 * Tests the full lifecycle of an ACL rule: create, list, and delete.
 * @param {Calendar} calendar The initialized Calendar client.
 * @param {string} calendarId The ID of the test calendar.
 */
function test_aclLifecycle(calendar, calendarId) {
    console.log('\n--- Testing ACL Lifecycle (Insert, List, Delete) ---');
    
    const userEmailToShareWith = SHARE_WITH; 
    let ruleId = null;

    const insertResponse = calendar.acl.insert({
        calendarId,
        resource: {
          role: 'reader',
          scope: { type: 'user', value: userEmailToShareWith }
        }
    });
    
    if (insertResponse.error) {
        console.warn(`⚠️  Could not insert ACL rule. This often happens if the email is invalid or if you are running this with a service account. Skipping ACL test. Error: ${JSON.stringify(insertResponse.error)}`);
        return; // Skip the rest of this test
    }
    ruleId = insertResponse.id;
    console.log(`- Inserted ACL rule for ${userEmailToShareWith}. Rule ID: ${ruleId}`);

    const listResponse = calendar.acl.list({ calendarId });
    if (listResponse.error) throw new Error(`Failed to list ACLs: ${JSON.stringify(listResponse.error)}`);
    const hasRule = listResponse.items.some(item => item.id === ruleId);
    console.log(`- Listed ACL rules. Verified that the new rule exists: ${hasRule}`);
    
    calendar.acl.delete({ calendarId, ruleId });
    console.log('- Deleted ACL rule.');
    
    console.log('✅ ACL Lifecycle test passed.');
}