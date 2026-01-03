import { PrismaClient } from "@prisma/client/extension";

class ProductService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
}

export const categoryService = new ProductService();