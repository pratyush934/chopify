// Simple script to test Prisma connection
const { PrismaClient } = require('../lib/generated/prisma');

const prisma = new PrismaClient();

async function main() {
  try {
    // Try to get the number of users
    const userCount = await prisma.user.count();
    console.log(`Connected to database successfully. Found ${userCount} users.`);
  } catch (error) {
    console.error('Failed to connect to database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
