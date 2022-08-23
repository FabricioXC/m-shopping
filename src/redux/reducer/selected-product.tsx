import { ProductInfo } from "@/domain/models/products";
import { ProductSelectedRedux } from "@/domain/models/reducers";
import { PRODUCT_SELECTED } from "@/redux/actions/actionsTypes";

const initialState: ProductSelectedRedux = {
  productInfo: {} as ProductInfo,
};

export const selectedProductState = (state = initialState, action: any) => {
  switch (action.type) {
    case PRODUCT_SELECTED:
      return {
        ...state,
        productInfo: action.value,
      };
    default:
      return state;
  }
};
