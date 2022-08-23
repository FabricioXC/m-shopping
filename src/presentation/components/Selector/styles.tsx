import styled from "styled-components";

interface ProductBoxWrapperProps {
  onClick?: () => void;
  checkout?: boolean;
}
export const SelectorWrapper = styled.div<ProductBoxWrapperProps>`
  background-color: #fff;
  padding: ${(props) => (props.checkout ? "0" : "0.7em 0 0.7em 0")};
  display: flex;
  flex-direction: row;
`;

export const SelectorValue = styled.div<ProductBoxWrapperProps>`
  color: #000;
  border-radius: 0.5em;
  padding: 0 0.7em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 50px;
`;
