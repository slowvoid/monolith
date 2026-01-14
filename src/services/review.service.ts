import { PrismaClient, Review } from "../../prisma/generated/client";
import { ReviewCreateInput } from "../../prisma/generated/models";
import { GetPrismaClient, OmitIdFromModel } from "../lib/prisma";

class ReviewService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = GetPrismaClient();
  }

  async getAll(): Promise<Review[]> {
    return await this.prisma.review.findMany();
  }

  async create(inContents: string, inProductId: string, inUserId: string): Promise<Review> {
    return await this.prisma.review.create({
      data: {
        contents: inContents,
        productId: inProductId,
        userId: inUserId
      }
    });
  }

  async update(id: string, data: OmitIdFromModel<Review>): Promise<Review> {
    return await this.prisma.review.update({
      where: {
        id: id
      },
      data: {
        ...data
      }
    });
  }

  async delete(id: string): Promise<Review> {
    return await this.prisma.review.update({
      where: {
        id: id
      },
      data: {
        deletedAt: new Date()
      }
    });
  }

  async get(id: string): Promise<Review> {
    return await this.prisma.review.findUniqueOrThrow({
      where: {
        id: id
      }
    });
  }
}

export const reviewService = new ReviewService();