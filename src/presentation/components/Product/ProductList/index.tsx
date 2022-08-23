import React from "react";
import { useNavigate } from "react-router-dom";
import StandardButton from "../../Buttons";
import { ProductListTitle, ProductListWrapper } from "./styles";
interface ProductListProps {
  title?: string;
  checkout?: boolean;
  children: React.ReactNode;
}
const ProductList: React.FC<ProductListProps> = ({
  children,
  title,
  checkout,
}) => {
  let navToTitle = null;
  let navToPath = null;
  if (window.location.pathname === "/checkout") {
    navToTitle = "CATALOGO";
    navToPath = "/catalog";
  }

  const navigate = useNavigate();

  return (
    <ProductListWrapper checkout={checkout}>
      <ProductListTitle>{title}</ProductListTitle>
      {navToTitle && (
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "row",
            alignSelf: "flex-end",
            paddingBottom: "0.7em",
          }}
        >
          <StandardButton onClick={() => navigate(navToPath)}>
            {navToTitle}
          </StandardButton>
        </div>
      )}
      {children}
    </ProductListWrapper>
  );
};

export default ProductList;
