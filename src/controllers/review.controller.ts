import { Injectable } from "@slowvoid.dev/di";
import { Body, Controller, Delete, Get, Params, Post, Put } from "@slowvoid.dev/express";
import { reviewService } from "../services/review.service";
import { CreateReviewDto, UpdateReviewDto } from "./dto/review.dto";

@Controller("/review")
@Injectable()
export class ReviewController {
  @Get("/all")
  async all() {
    return await reviewService.getAll();
  }

  @Post("/create")
  async create(
    @Body() data: CreateReviewDto
  ) {
    return await reviewService.create(data.contents, data.productId, data.userId);
  }

  @Put("/:id/update")
  async update(
    @Params("id") reviewId: string,
    @Body() data: UpdateReviewDto
  ) {
    return await reviewService.update(reviewId, data);
  }

  @Delete("/:id/delete")
  async delete(
    @Params("id") reviewId: string
  ) {
    return await reviewService.delete(reviewId);
  }

  @Get("/:id")
  async getReview(
    @Params("id") reviewId: string
  ) {
    return await reviewService.get(reviewId);
  }
}