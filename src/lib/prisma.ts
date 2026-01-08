import { PrismaPg } from "@prisma/adapter-pg";
import { DATABASE_CONNECTION_STRING } from "../config";
import { PrismaClient } from "../../prisma/generated/client";

let pgAdapter: PrismaPg | null = null;
function GetAdapter() {
  if(!pgAdapter) {
    pgAdapter = new PrismaPg({
      connectionString: DATABASE_CONNECTION_STRING
    });
  }

  return pgAdapter;
}

let prismaClient: PrismaClient | null = null;
export function GetPrismaClient() {
  if(!prismaClient) {
    prismaClient = new PrismaClient({
      adapter: GetAdapter()
    });
  }

  return prismaClient;
}

export type OmitIdFromModel<T> = Partial<Omit<T, "id">>; 