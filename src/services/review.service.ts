import { PrismaClient, Review } from "../../prisma/generated/client";
import { ReviewCreateInput } from "../../prisma/generated/models";
import { GetPrismaClient, OmitIdFromModel } from "../lib/prisma";

class ReviewService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = GetPrismaClient();
  }

  async create(data: ReviewCreateInput): Promise<Review> {
      return await this.prisma.review.create({
        data: {
          ...data
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
  
    async delete(id: string): Promise<void> {
      await this.prisma.review.update({
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