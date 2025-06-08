import prisma from './db';

async function testPrismaConnection() {
  try {
    // Try to get the number of users
    const userCount = await prisma.user.count();
    console.log(`Connected to database successfully. Found ${userCount} users.`);
    return { success: true, message: `Connected to database. Found ${userCount} users.` };
  } catch (error) {
    console.error('Failed to connect to database:', error);
    return { success: false, error };
  }
}

// Only run if this file is executed directly
if (require.main === module) {
  testPrismaConnection()
    .then((result) => {
      console.log(result);
      process.exit(result.success ? 0 : 1);
    })
    .catch((error) => {
      console.error('Unexpected error:', error);
      process.exit(1);
    });
}

export default testPrismaConnection;
