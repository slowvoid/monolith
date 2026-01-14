import { Order, PrismaClient } from "../../prisma/generated/client";
import { GetPrismaClient, OmitIdFromModel } from "../lib/prisma";

class OrderService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = GetPrismaClient();
  }

  async getAll(): Promise<Order[]> {
    return await this.prisma.order.findMany();
  }

  async create(inUserId: string, inAddressId: string): Promise<Order> {
    return await this.prisma.order.create({
      data: {
        userId: inUserId,
        addressId: inAddressId
      }
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

  async delete(id: string): Promise<Order> {
    return await this.prisma.order.update({
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

  async addProduct(inOrderId: string, inProductId: string): Promise<Order> {
    return await this.prisma.order.update({
      data: {
        items: {
          create: {
            productId: inProductId
          }
        }
      },
      where: {
        id: inOrderId
      }
    });
  }
}

export const orderService = new OrderService();