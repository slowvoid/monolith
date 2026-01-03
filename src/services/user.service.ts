import { PrismaClient } from "@prisma/client/extension";

class UserService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
}

export const categoryService = new UserService();