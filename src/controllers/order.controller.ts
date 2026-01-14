import { Injectable } from "@slowvoid.dev/di";
import { Body, Controller, Delete, Get, Params, Post, Put } from "@slowvoid.dev/express";
import { orderService } from "../services/order.service";
import { AddProductToOrderDto, CreateOrderDto, UpdateOrderDto } from "./dto/order.dto";

@Controller("/order")
@Injectable()
export class OrderController {
  @Get("/all")
  async all() {
    return await orderService.getAll();
  }

  @Post("/create")
  async create(
    @Body() data: CreateOrderDto
  ) {
    return await orderService.create(data.userId, data.addressId);
  }

  @Put("/:id/product")
  async addProduct(
    @Params("id") orderId: string,
    @Body() data: AddProductToOrderDto
  ) {
    return await orderService.addProduct(orderId, data.productId);
  }

  @Put("/:id/update")
  async update(
    @Params("id") orderId: string,
    @Body() data: UpdateOrderDto
  ) {
    return await orderService.update(orderId, data);
  }

  @Delete("/:id/delete")
  async delete(
    @Params("id") orderId: string
  ) {
    return await orderService.delete(orderId);
  }

  @Get("/:id")
  async getOrder(
    @Params("id") orderId: string
  ) {
    return await orderService.get(orderId);
  }
}