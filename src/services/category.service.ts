import { PrismaClient } from "@prisma/client/extension";

class CategoryService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
}

export const categoryService = new CategoryService();