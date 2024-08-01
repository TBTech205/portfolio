const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  // try catch finally
  try {
    await db.dev.create({
      data: {
        token: '8e4b5f3b-318b-46aa-9ebc-fe8b5b6471c4',
        createdAt: new Date(),
      }
    })

    console.log("Seeded dev codes");
  } catch (error) {
    console.error("Error seeding genres", error);
  } finally {
    await db.$disconnect();
  }
}

main();