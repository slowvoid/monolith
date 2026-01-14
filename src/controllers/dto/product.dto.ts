export interface CreateProductDto {
  name: string;
  price: number;
  description?: string;
  tags?: string;
}

export interface UpdateProductDto extends CreateProductDto {}

export interface AddProductToCategory {
  categoryId: string;
}