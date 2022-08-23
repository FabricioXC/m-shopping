import { ProductDataRedux } from "@/domain/models/reducers/product-data";
import { PRODUCT_DATA } from "@/redux/actions/actionsTypes";

const initialState: ProductDataRedux = {
  productInfo: [],
};

export const productDataState = (state = initialState, action: any) => {
  switch (action.type) {
    case PRODUCT_DATA:
      return {
        ...state,
        productInfo: action.value,
      };
    default:
      return state;
  }
};
