import {
  ShoppingCart,
  ShoppingCartResume,
} from "@/domain/models/shopping-cart";

export const resumeTotal = (value: ShoppingCart): ShoppingCartResume => {
  let subTotal: number = 0;
  value.products.forEach((product) => {
    subTotal = Number((subTotal + product.qty * product.price).toFixed(2));
  });

  return { subTotal: subTotal, products: value.products.length };
};
