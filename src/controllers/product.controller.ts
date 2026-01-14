import { Injectable } from "@slowvoid.dev/di";
import { Body, Controller, Delete, Get, Params, Post, Put } from "@slowvoid.dev/express";
import { productService } from "../services/product.service";
import { CreateProductDto, UpdateProductDto } from "./dto/product.dto";

@Controller("/product")
@Injectable()
export class ProductController {
  @Get("/all")
  async all() {
    return await productService.getAll();
  }

  @Post("/create")
  async create(
    @Body() data: CreateProductDto
  ) {
    return await productService.create(data);
  }

  @Put("/:id/update")
  async update(
    @Params("id") productId: string,
    @Body() data: UpdateProductDto
  ) {
    return await productService.update(productId, data);
  }

  @Delete("/:id/delete")
  async delete(
    @Params("id") productId: string
  ) {
    return await productService.delete(productId);
  }

  @Get("/:id")
  async getProduct(
    @Params("id") productId: string
  ) {
    return await productService.get(productId);
  }
}