import styled from "styled-components";

interface ProductBoxWrapperProps {
  onClick?: () => void;
  hover: boolean;
}
export const ProductBoxWrapper = styled.div<ProductBoxWrapperProps>`
  background-color: #fff;
  border-radius: 0.5em;
  padding: 0.7em;
  display: flex;
  flex-direction: row;
  border: 1px solid #000;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 0.7em;
  cursor: ${(props) => (props.hover ? "pointer" : "normal")};
`;

export const ProductInfo = styled.div`
  padding: 0 0.6em 0 0.6em;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80px;
`;
interface ProductImageProps {
  checkout?: boolean;
}
export const ProductImage = styled.div<ProductImageProps>`
  display: flex;
  padding: 0.2em;
  width: fit-content;
  border-radius: 0.3em;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  cursor: ${(props) => (props.checkout ? "pointer" : "normal")};
`;

export const ProductTitle = styled.div`
  margin: 0%;
  font-size: medium;
  color: #000;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
`;

interface ProductPriceProps {
  checkout: boolean;
}

export const ProductPrice = styled.div<ProductPriceProps>`
  margin: 0%;
  font-size: ${(props) => (props.checkout ? "small" : "medium")};
  color: #000;
  width: 100%;
`;
export const ProductPriceSelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
`;

export const ProductSelector = styled.div`
  width: 100%;
  border: 1px solid black;
`;
