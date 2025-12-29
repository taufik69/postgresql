import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.ts";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const dbConnect = async () => {
  try {
    await prisma.$connect();
    console.log("Database Connected ");
  } catch (error) {
    console.log("Database connection Error", error);
  }
};

const disConnect = async () => {
  try {
    await prisma.$disconnect();
  } catch (error) {
    console.log("disconnect error ", error);
  }
};

export { prisma, dbConnect, disConnect };
