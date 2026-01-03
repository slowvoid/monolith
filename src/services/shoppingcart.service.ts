import { PrismaClient } from "@prisma/client/extension";

class ShoppingCartService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
}

export const categoryService = new ShoppingCartService();