import React from "react";
import { Link } from "react-router-dom";
import StandardButton from "../../Buttons";
import Selector from "../../Selector";
import {
  ProductMainWrapper,
  ProductMainTitle,
  ProductMainInfo,
  ProductMainImage,
  ProductMainPrice,
  ProductMainNoteTitle,
  ProductMainDescription,
  ProductMainImageContainer,
  ProductMainSelectAddContainer,
  AddButtonContainer,
} from "./styles";
interface ProductListProps {
  title?: string;
  description?: string;
  price?: string;
  noteTilte?: string;
  children?: React.ReactNode;
  imageSrc?: string;
  productQty: any;
  setProductQty: any;
  addClick: () => void;
  buttonTitle: string;
  checkout?: boolean;
}
const ProductMain: React.FC<ProductListProps> = ({
  title,
  description,
  noteTilte,
  price,
  children,
  imageSrc,
  productQty,
  setProductQty,
  addClick,
  buttonTitle,
  checkout,
}) => {
  return (
    <ProductMainWrapper>
      <ProductMainTitle>{title}</ProductMainTitle>
      <ProductMainImageContainer>
        <ProductMainImage>
          <img src={imageSrc} alt="product" width="200px" height="200px"></img>
        </ProductMainImage>
      </ProductMainImageContainer>
      <ProductMainInfo>
        <ProductMainDescription>{description}</ProductMainDescription>

        <ProductMainPrice>{price}</ProductMainPrice>
        <ProductMainNoteTitle>{noteTilte}</ProductMainNoteTitle>

        {children}
      </ProductMainInfo>
      <ProductMainSelectAddContainer>
        <>
          <Selector
            checkout={checkout}
            selectorValue={productQty}
            setSelectorValue={setProductQty}
          />

          <AddButtonContainer>
            <Link
              to="/checkout"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <StandardButton onClick={addClick}>{buttonTitle}</StandardButton>
            </Link>
          </AddButtonContainer>
        </>
      </ProductMainSelectAddContainer>
    </ProductMainWrapper>
  );
};

export default ProductMain;
