import { PrismaClient } from "@prisma/client/extension";

class ReviewService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
}

export const categoryService = new ReviewService();