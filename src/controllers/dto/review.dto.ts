export interface CreateReviewDto {
  contents: string;
  userId: string;
  productId: string;
}

export interface UpdateReviewDto extends CreateReviewDto {}