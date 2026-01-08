import { PrismaClient, Product } from "../../prisma/generated/client";
import { ProductCreateInput } from "../../prisma/generated/models";
import { GetPrismaClient, OmitIdFromModel } from "../lib/prisma";

class ProductService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = GetPrismaClient();
  }

  async create(data: ProductCreateInput): Promise<Product> {
      return await this.prisma.product.create({
        data: data
      });
    }
  
    async update(id: string, data: OmitIdFromModel<Product>): Promise<Product> {
      return await this.prisma.product.update({
        where: {
          id: id
        },
        data: {
          ...data
        }
      });
    }
  
    async delete(id: string): Promise<void> {
      await this.prisma.product.update({
        where: {
          id: id
        },
        data: {
          deletedAt: new Date()
        }
      });
    }
  
    async get(id: string): Promise<Product> {
      return await this.prisma.product.findUniqueOrThrow({
        where: {
          id: id
        }
      });
    }
}

export const productService = new ProductService();