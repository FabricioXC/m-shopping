import { ProductInfo, ProductInfoShoppingCart } from "@/domain/models/products";

import { ReduxState } from "@/domain/models/reducers/reducer";
import { ShoppingCart } from "@/domain/models/shopping-cart";

import ProductMain from "@/presentation/components/Product/ProductMain";
import { ProductMainNoteInput } from "@/presentation/components/Product/ProductMain/styles";
import { SHOPPING_CART } from "@/redux/actions/actionsTypes";
import { store } from "@/redux/store";

import { InternalContainer } from "@/styles/containers";
import { useState } from "react";

import { useSelector } from "react-redux";

const Product = () => {
  const shoppingCart = useSelector<ReduxState, ShoppingCart>(
    (state) => state.shoppingCart.shoppingCart
  );
  const productInfo = useSelector<ReduxState, ProductInfo>(
    (state) => state.selectedProduct.productInfo
  );

  const [productQty, setProductQty] = useState<number>(1);

  const [noteValue, setNoteValue] = useState("");

  const addClick = () => {
    const productOrderData: ProductInfoShoppingCart = JSON.parse(
      JSON.stringify(productInfo)
    );
    productOrderData.qty = productQty;
    productOrderData.note = noteValue;

    let localShoppingCart: ShoppingCart = JSON.parse(
      JSON.stringify(shoppingCart)
    );

    if (localShoppingCart?.products) {
      let cont = 0;
      localShoppingCart.products.forEach((element, index) => {
        if (element.id === productInfo.id) {
          localShoppingCart.products[index].qty =
            localShoppingCart.products[index].qty + productQty;
          localShoppingCart.products[index].note = noteValue;

          cont += 1;
        }
      });
      if (cont === 0) {
        localShoppingCart.products.push(productOrderData);
      }
    } else {
      localShoppingCart.products = [];
      localShoppingCart.products.push(productOrderData);
    }

    store.dispatch({ type: SHOPPING_CART, value: localShoppingCart });
  };

  return (
    <InternalContainer>
      {productInfo && (
        <>
          <ProductMain
            productQty={productQty}
            setProductQty={setProductQty}
            title={productInfo?.title}
            description={productInfo?.description}
            noteTilte="Observação:"
            price={`R$ ${productInfo?.price.toFixed(2).replace(".", ",")}`}
            imageSrc={productInfo?.image}
            addClick={addClick}
            buttonTitle={"Adicionar"}
          >
            <ProductMainNoteInput
              value={noteValue}
              onChange={(e) => setNoteValue(e.target.value)}
            />
          </ProductMain>
        </>
      )}
    </InternalContainer>
  );
};

export default Product;
