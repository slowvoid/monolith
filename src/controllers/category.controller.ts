import { Injectable } from "@slowvoid.dev/di";
import { Controller, Delete, Get, Post, Put } from "@slowvoid.dev/express";

@Controller("/category")
@Injectable()
export class CategoryController {
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
  async getCategory() {
    return null;
  }
}