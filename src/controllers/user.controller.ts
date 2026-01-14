import { Injectable } from "@slowvoid.dev/di";
import { Body, Controller, Delete, Get, Params, Post, Put } from "@slowvoid.dev/express";
import { userService } from "../services/user.service";
import { CreateUserDto, UpdateUserDto } from "./dto/user.dto";

@Controller("/user")
@Injectable()
export class UserController {
  @Get("/all")
  async all() {
    return await userService.getAll();
  }

  @Post("/create")
  async create(
    @Body() data: CreateUserDto
  ) {
    return await userService.create(data);
  }

  @Put("/:id/update")
  async update(
    @Params("id") userId: string,
    @Body() data: UpdateUserDto
  ) {
    return await userService.update(userId, data);
  }

  @Delete("/:id/delete")
  async delete(
    @Params("id") userId: string
  ) {
    return await userService.delete(userId);
  }

  @Get("/:id")
  async getUser(
    @Params("id") userId: string
  ) {
    return await userService.get(userId);
  }
}