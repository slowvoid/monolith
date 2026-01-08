import { PrismaClient, User } from "../../prisma/generated/client";
import { UserCreateInput } from "../../prisma/generated/models";
import { GetPrismaClient, OmitIdFromModel } from "../lib/prisma";

class UserService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = GetPrismaClient();
  }

  async create(data: UserCreateInput): Promise<User> {
      return await this.prisma.user.create({
        data: data
      });
    }
  
    async update(id: string, data: OmitIdFromModel<User>): Promise<User> {
      return await this.prisma.user.update({
        where: {
          id: id
        },
        data: {
          ...data
        }
      });
    }
  
    async delete(id: string): Promise<void> {
      await this.prisma.user.update({
        where: {
          id: id
        },
        data: {
          deletedAt: new Date()
        }
      });
    }
  
    async get(id: string): Promise<User> {
      return await this.prisma.user.findUniqueOrThrow({
        where: {
          id: id
        }
      });
    }
}

export const userService = new UserService();