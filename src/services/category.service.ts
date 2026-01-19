import { Category, PrismaClient } from "../../prisma/generated/client";
import { CategoryCreateInput } from "../../prisma/generated/models";
import { GetPrismaClient, OmitIdFromModel } from "../lib/prisma";


class CategoryService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = GetPrismaClient();
  }

  async create(data: CategoryCreateInput): Promise<Category> {
    return await this.prisma.category.create({
      data: data
    });
  }

  async update(id: string, data: OmitIdFromModel<Category>): Promise<Category> {
    return await this.prisma.category.update({
      where: {
        id: id
      },
      data: {
        ...data
      }
    });
  }

  async delete(id: string): Promise<Category> {
    return await this.prisma.category.update({
      where: {
        id: id
      },
      data: {
        deletedAt: new Date()
      }
    });
  }

  async get(id: string): Promise<Category> {
    return await this.prisma.category.findUniqueOrThrow({
      where: {
        id: id
      }
    });
  }

  async getAll(): Promise<Category[]> {
    return await this.prisma.category.findMany();
  }

  async getProductsByCategoryId(inCategoryId: string) {
    return await this.prisma.category.findFirst({
      where: {
        id: inCategoryId
      },
      include: {
        products: true
      }
    });
  }
}

export const categoryService = new CategoryService();