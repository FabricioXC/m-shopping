import { ProductInfoShoppingCart } from "../products";

export type ShoppingCart = {
  products: ProductInfoShoppingCart[];
};

export type ShoppingCartResume = {
  products: number;
  subTotal: number;
};
