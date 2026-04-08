// 1. Import from your custom generated path instead of node_modules
import { PrismaClient } from "../generated/prisma"; 

// 2. The rest of your singleton logic remains exactly the same
const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const db = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;