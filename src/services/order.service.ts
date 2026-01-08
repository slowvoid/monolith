import { Order, PrismaClient } from "../../prisma/generated/client";
import { OrderCreateInput } from "../../prisma/generated/models";
import { GetPrismaClient, OmitIdFromModel } from "../lib/prisma";

class OrderService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = GetPrismaClient();
  }

  async create(data: OrderCreateInput): Promise<Order> {
      return await this.prisma.order.create({
        data: data
      });
    }
  
    async update(id: string, data: OmitIdFromModel<Order>): Promise<Order> {
      return await this.prisma.order.update({
        where: {
          id: id
        },
        data: {
          ...data
        }
      });
    }
  
    async delete(id: string): Promise<void> {
      await this.prisma.order.update({
        where: {
          id: id
        },
        data: {
          deletedAt: new Date()
        }
      });
    }
  
    async get(id: string): Promise<Order> {
      return await this.prisma.order.findUniqueOrThrow({
        where: {
          id: id
        }
      });
    }
}

export const orderService = new OrderService();