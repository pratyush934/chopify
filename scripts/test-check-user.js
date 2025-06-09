// Test file for the checkUser function
// This will help verify our changes to the checkUser function

import { checkUser } from '../lib/checkUsers';

async function testCheckUser() {
  try {
    console.log('Testing checkUser function...');
    const user = await checkUser();
    console.log('Result:', user);
    console.log('Test completed successfully!');
  } catch (error) {
    console.error('Error testing checkUser function:', error);
  }
}

// Only run this if executed directly
if (require.main === module) {
  testCheckUser()
    .then(() => {
      console.log('Test script finished');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Unexpected error in test script:', error);
      process.exit(1);
    });
}
