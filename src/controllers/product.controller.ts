import { Injectable } from "@slowvoid.dev/di";
import { Controller, Delete, Get, Post, Put } from "@slowvoid.dev/express";

@Controller("/product")
@Injectable()
export class ProductController {
  @Get("/all")
  async all() {
    return [];
  }

  @Post("/create")
  async create() {
    return null;
  }

  @Put("/:id/update")
  async update() {
    return null;
  }

  @Delete("/:id/delete")
  async delete() {
    return null;
  }

  @Get("/:id")
  async getProduct() {
    return null;
  }
}