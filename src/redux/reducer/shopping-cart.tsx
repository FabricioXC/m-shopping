import { ShoppingCartRedux } from "@/domain/models/reducers";
import { SHOPPING_CART } from "@/redux/actions/actionsTypes";

const initialState: ShoppingCartRedux = {
  shoppingCart: {
    products: [],
  },
};

export const shoppingCartState = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOPPING_CART:
      return {
        ...state,
        shoppingCart: action.value,
      };
    default:
      return state;
  }
};
