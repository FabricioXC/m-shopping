import { ReduxState } from "@/domain/models/reducers/reducer";
import { ShoppingCart } from "@/domain/models/shopping-cart";
import { SHOPPING_CART } from "@/redux/actions/actionsTypes";
import { store } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Selector from "../../Selector";
import {
  ProductBoxWrapper,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductPriceSelectorWrapper,
  ProductTitle,
} from "./styles";

interface ProductBoxProps {
  title?: string;
  price?: number;
  imageSrc?: string;
  onClick?: () => void;
  checkout?: boolean;
  qty?: number;
  removeItem?: any;
  id?: number;
}

const ProductBox: React.FC<ProductBoxProps> = ({
  title,
  price,
  imageSrc,
  onClick,
  checkout,
  qty,
  removeItem,
  id,
}) => {
  const [productQty, setProductQty] = useState<number>(0);
  const [stringPrice, setStringPrice] = useState("");
  const shoppingCart = useSelector<ReduxState, ShoppingCart>(
    (state) => state.shoppingCart.shoppingCart
  );

  useEffect(() => {
    if (checkout && productQty !== 0) {
      let localShoppingCart: ShoppingCart = JSON.parse(
        JSON.stringify(shoppingCart)
      );
      localShoppingCart.products.forEach((value, index) => {
        if (value.id === id) {
          localShoppingCart.products[index].qty = productQty;
        }
      });
      store.dispatch({ type: SHOPPING_CART, value: localShoppingCart });
    }
  }, [productQty]);

  useEffect(() => {
    if (checkout) {
      setProductQty(qty);
    }
  }, [qty]);

  useEffect(() => {}, [productQty]);

  useEffect(() => {
    setStringPrice(`R$ ${price.toFixed(2).replace(".", ",")}`);
  }, [price]);

  const navigate = useNavigate();
  const changePath = () => {
    if (checkout) {
      navigate("/product");
    }
  };
  return (
    <ProductBoxWrapper onClick={onClick} hover={!checkout}>
      <ProductImage checkout={checkout} onClick={() => changePath()}>
        <img src={imageSrc} alt="product" width="80px" height="80px" />
      </ProductImage>
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>

        <ProductPriceSelectorWrapper>
          <ProductPrice checkout={checkout}>
            {checkout
              ? `${stringPrice} x ${qty} = R$ ${(price * qty)
                  .toFixed(2)
                  .replace(".", ",")}`
              : stringPrice}
          </ProductPrice>
          {checkout && (
            <Selector
              checkout={checkout}
              selectorValue={productQty}
              setSelectorValue={setProductQty}
            />
          )}
        </ProductPriceSelectorWrapper>
      </ProductInfo>
      {checkout && (
        <div
          onClick={() => {
            removeItem(id);
          }}
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            color: "black",
            alignContent: "flex-start",
          }}
        >
          x
        </div>
      )}
    </ProductBoxWrapper>
  );
};
export default ProductBox;
