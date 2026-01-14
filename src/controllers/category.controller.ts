import { Injectable } from "@slowvoid.dev/di";
import { Body, Controller, Delete, Get, Params, Post, Put } from "@slowvoid.dev/express";
import { type UpdateCategoryDto, type CreateCategoryDto } from "./dto/category.dto";
import { categoryService } from "../services/category.service";

@Controller("/category")
@Injectable()
export class CategoryController {
  @Get("/all")
  async all() {
    return await categoryService.getAll();
  }

  @Post("/create")
  async create(
    @Body() data: CreateCategoryDto
  ) {
    return await categoryService.create({ ...data });
  }

  @Put("/:id/update")
  async update(
    @Body() data: UpdateCategoryDto,
    @Params("id") id: string
  ) {
    return await categoryService.update(id, data);
  }

  @Delete("/:id/delete")
  async delete(
    @Params("id") id: string
  ) {
    return await categoryService.delete(id);
  }

  @Get("/:id")
  async getCategory(
    @Params("id") id: string
  ) {
    return await categoryService.get(id);
  }
}