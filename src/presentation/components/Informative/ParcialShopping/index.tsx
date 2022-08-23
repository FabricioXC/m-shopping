import { PartialShoppingWrapper } from "./styles";

interface ParcialShoppingProps {
  products: number;
  subTotal: number;
  onClick: () => void;
}

const PartialShopping: React.FC<ParcialShoppingProps> = ({
  products,
  subTotal,
  onClick,
}) => {
  return (
    <PartialShoppingWrapper onClick={onClick}>
      <p>
        {products} {products > 1 ? "PRODUTOS" : "PRODUTO"}
      </p>{" "}
      <p>{`CARRINHO: R$ ${subTotal?.toFixed(2).replace(".", ",")}`}</p>
    </PartialShoppingWrapper>
  );
};
export default PartialShopping;
