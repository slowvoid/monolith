export interface CreateOrderDto {
  userId: string;
  addressId: string;
}

export interface UpdateOrderDto extends CreateOrderDto {}

export interface AddProductToOrderDto {
  productId: string;
}