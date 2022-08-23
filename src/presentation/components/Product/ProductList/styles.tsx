import styled from "styled-components";

interface ProductListWrapperProps {
  checkout?: boolean;
}

export const ProductListWrapper = styled.div<ProductListWrapperProps>`
  background-color: #fff;
  border-radius: ${(props) => (props.checkout ? "0.5em" : "0.5em 0.5em 0 0")};
  padding: 0.7em 0.7em 0.7em 0.7em;
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: space-between;
`;

export const ProductListTitle = styled.div`
  color: #000;
  padding: 0 0.7em 0.7em 0.7em;
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: large;
  justify-content: center;
  align-items: center;
`;
