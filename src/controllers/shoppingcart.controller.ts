import { Injectable } from "@slowvoid.dev/di";
import { Body, Controller, Delete, Get, Params, Post, Put } from "@slowvoid.dev/express";
import { shoppingCartService } from "../services/shoppingcart.service";
import { CreateShoppingCartDto, UpdateShoppingCartDto } from "./dto/shoppingcart.dto";

@Controller("/shopping-cart")
@Injectable()
export class ShoppingCartController {
  @Get("/all")
  async all() {
    return await shoppingCartService.getAll();
  }

  @Post("/create")
  async create(
    @Body() data: CreateShoppingCartDto
  ) {
    return await shoppingCartService.create(data.userId);
  }

  @Put("/:id/update")
  async update(
    @Params("id") shoppingCartId: string,
    @Body() data: UpdateShoppingCartDto
  ) {
    return await shoppingCartService.update(shoppingCartId, data);
  }

  @Delete("/:id/delete")
  async delete(
    @Params("id") shoppingCartId: string
  ) {
    return await shoppingCartService.delete(shoppingCartId);
  }

  @Get("/:id")
  async getCart(
    @Params("id") shoppingCartId: string
  ) {
    return await shoppingCartService.get(shoppingCartId);
  }
}