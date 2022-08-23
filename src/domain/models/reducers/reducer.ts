import { ProductDataRedux } from "./product-data";
import { ProductSelectedRedux } from "./product-selected";
import { ShoppingCartRedux } from "./shopping-cart";

export type ReduxState = {
  shoppingCart: ShoppingCartRedux;
  productData: ProductDataRedux;
  selectedProduct: ProductSelectedRedux;
};
