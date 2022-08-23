import { combineReducers } from "redux";

import { shoppingCartState } from "@/redux/reducer/shopping-cart";
import { productDataState } from "./product-data";
import { selectedProductState } from "./selected-product";

export const Reducers = combineReducers({
  shoppingCart: shoppingCartState,
  productData: productDataState,
  selectedProduct: selectedProductState,
});
