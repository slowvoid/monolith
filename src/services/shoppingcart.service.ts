import { PrismaClient, ShoppingCart } from "../../prisma/generated/client";
import { ShoppingCartCreateInput } from "../../prisma/generated/models";
import { GetPrismaClient, OmitIdFromModel } from "../lib/prisma";

class ShoppingCartService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = GetPrismaClient();
  }

  async create(data: ShoppingCartCreateInput): Promise<ShoppingCart> {
      return await this.prisma.shoppingCart.create({
        data: data
      });
    }
  
    async update(id: string, data: OmitIdFromModel<ShoppingCart>): Promise<ShoppingCart> {
      return await this.prisma.shoppingCart.update({
        where: {
          id: id
        },
        data: {
          ...data
        }
      });
    }
  
    async delete(id: string): Promise<void> {
      await this.prisma.shoppingCart.update({
        where: {
          id: id
        },
        data: {
          deletedAt: new Date()
        }
      });
    }
  
    async get(id: string): Promise<ShoppingCart> {
      return await this.prisma.shoppingCart.findUniqueOrThrow({
        where: {
          id: id
        }
      });
    }
}

export const shoppingCartService = new ShoppingCartService();