import { ProductInfo } from "@/domain/models/products";
import { ReduxState } from "@/domain/models/reducers/reducer";
import {
  ShoppingCart,
  ShoppingCartResume,
} from "@/domain/models/shopping-cart";
import StandardButton from "@/presentation/components/Buttons";
import TotalResume from "@/presentation/components/Informative/TotalResume";
import LoadingSpin from "@/presentation/components/Loading/LoadingStandardSpinning";
import ProductBox from "@/presentation/components/Product/ProductBox";
import ProductList from "@/presentation/components/Product/ProductList";
import StandardModal from "@/presentation/components/StandardModal";
import { useUsecase } from "@/presentation/contexts";
import { PRODUCT_SELECTED, SHOPPING_CART } from "@/redux/actions/actionsTypes";
import { store } from "@/redux/store";
import { InternalContainer } from "@/styles/containers";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    msg: null,
    btnMessage: null,
    btnRoute: null,
  });

  const { createOrder } = useUsecase();

  const [shoppingResume, setShoppingResume] = useState<ShoppingCartResume>({
    subTotal: 0,
    products: 0,
  });

  const shoppingCart = useSelector<ReduxState, ShoppingCart>(
    (state) => state.shoppingCart.shoppingCart
  );

  const removeItem = (id: number) => {
    let localShoppingCart: ShoppingCart = JSON.parse(
      JSON.stringify(shoppingCart)
    );
    localShoppingCart.products.forEach((value, index) => {
      if (value.id === id) {
        localShoppingCart.products.splice(index, 1);
      }
    });
    store.dispatch({ type: SHOPPING_CART, value: localShoppingCart });
  };

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
  const mockLoading = () => {
    setIsLoading(false);

    setShowModal(true);
  };

  const sendOrder = () => {
    if (shoppingResume.products > 0) {
      setIsLoading(true);
      createOrder
        .post({ order: shoppingCart.products })
        .then((response) => {
          console.log("Response:", response);
          setTimeout(() => {
            mockLoading();
          }, 2000);
          setModalInfo({
            btnMessage: "Fechar",
            btnRoute: "/",
            msg: "Seu pedido foi realizado com sucesso!",
          });
          store.dispatch({
            type: SHOPPING_CART,
            value: {
              products: [],
            },
          });
        })
        .catch((e) => {
          console.log("Error:", e);
          setTimeout(() => {
            mockLoading();
          }, 2000);
          setModalInfo({
            btnMessage: "Fechar",
            btnRoute: "/checkout",
            msg: "Ocorreu um erro ao realizar o seu pedido",
          });
        });
    } else {
      setModalInfo({
        btnMessage: "Fechar",
        btnRoute: "/",
        msg: "Seu carrinho se encontra vazio. Adicione ítems para realizar o checkout!",
      });
      setShowModal(true);
    }
  };

  return (
    <>
      <StandardModal
        msg={modalInfo.msg}
        btnMessage={modalInfo.btnMessage}
        btnRoute={modalInfo.btnRoute}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <InternalContainer>
        {isLoading ? (
          <LoadingSpin />
        ) : (
          <>
            <ProductList checkout={true} title="CHECKOUT">
              {shoppingCart.products?.map((item, index) => {
                const itemData: ProductInfo = {
                  id: item.id,
                  title: item.title,
                  price: item.price,
                  description: item.description,
                  image: item.image,
                };
                return (
                  <ProductBox
                    id={item.id}
                    removeItem={removeItem}
                    checkout={true}
                    key={index}
                    imageSrc={item.image}
                    title={item.title}
                    price={item.price}
                    qty={item.qty}
                    onClick={() => {
                      store.dispatch({
                        type: PRODUCT_SELECTED,
                        value: itemData,
                      });
                    }}
                  />
                );
              })}
              <TotalResume
                total={shoppingResume?.subTotal ? shoppingResume.subTotal : 0}
              />
              <StandardButton
                onClick={() => {
                  sendOrder();
                }}
              >
                Enviar Pedido
              </StandardButton>
            </ProductList>
          </>
        )}
      </InternalContainer>
    </>
  );
};

export default Checkout;
