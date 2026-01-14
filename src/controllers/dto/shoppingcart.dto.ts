export interface CreateShoppingCartDto {
  userId: string;
}

export interface UpdateShoppingCartDto extends CreateShoppingCartDto {}

export interface AddProductToCartDto {
  productId: string;
}