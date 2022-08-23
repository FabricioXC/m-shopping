import { ProductInfo } from "@/domain/models/products";

import { ReduxState } from "@/domain/models/reducers/reducer";
import {
  ShoppingCart,
  ShoppingCartResume,
} from "@/domain/models/shopping-cart";
import PartialShopping from "@/presentation/components/Informative/ParcialShopping";
import LoadingSpin from "@/presentation/components/Loading/LoadingStandardSpinning";
import ProductBox from "@/presentation/components/Product/ProductBox";

import ProductList from "@/presentation/components/Product/ProductList";

import { useUsecase } from "@/presentation/contexts";
import { PRODUCT_DATA, PRODUCT_SELECTED } from "@/redux/actions/actionsTypes";
import { store } from "@/redux/store";
import { InternalContainer } from "@/styles/containers";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Catalog = () => {
  const { getProduct } = useUsecase();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [shoppingResume, setShoppingResume] = useState<ShoppingCartResume>({
    subTotal: 0,
    products: 0,
  });

  const mockLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);
    getProduct
      .get({})
      .then((data) => {
        store.dispatch({ type: PRODUCT_DATA, value: data });
      })
      .catch((error) => console.log("Product GET Error: ", error))
      .finally(() =>
        setTimeout(() => {
          mockLoading();
        }, 1000)
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shoppingCart = useSelector<ReduxState, ShoppingCart>(
    (state) => state.shoppingCart.shoppingCart
  );

  useEffect(() => {
    const resumeTotal = (value: ShoppingCart): ShoppingCartResume => {
      let subTotal: number = 0;
      value.products.forEach((product) => {
        subTotal = subTotal + Number((product.qty * product.price).toFixed(2));
      });

      return { subTotal: subTotal, products: value.products.length };
    };

    if (shoppingCart.products) {
      setShoppingResume(resumeTotal(shoppingCart));
    }
  }, [shoppingCart]);

  const productData = useSelector<ReduxState, ProductInfo[]>(
    (state) => state.productData.productInfo
  );

  return (
    <InternalContainer>
      {isLoading ? (
        <LoadingSpin />
      ) : (
        <>
          <ProductList title="Catálogo">
            {productData?.map((item, index) => {
              const itemData: ProductInfo = {
                id: item.id,
                title: item.title,
                price: item.price,
                description: item.description,
                image: item.image,
              };
              return (
                <Link
                  key={index}
                  to="/product"
                  style={{ textDecoration: "none" }}
                >
                  <ProductBox
                    key={index}
                    imageSrc={item.image}
                    title={item.title}
                    price={item.price}
                    onClick={() => {
                      store.dispatch({
                        type: PRODUCT_SELECTED,
                        value: itemData,
                      });
                    }}
                  />
                </Link>
              );
            })}
          </ProductList>
          <Link
            to="/checkout"
            style={{
              textDecoration: "none",
              padding: "0",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PartialShopping
              products={shoppingResume.products}
              subTotal={shoppingResume?.subTotal ? shoppingResume.subTotal : 0}
              onClick={() => {}}
            />
          </Link>
        </>
      )}
    </InternalContainer>
  );
};

export default Catalog;
