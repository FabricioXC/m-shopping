import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
*::after,
*::before {
  font-family: Arial, sans-serif;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  padding: 0;
  border: 0;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}

body {
  background: white;
  overflow-x: hidden;
  margin: 0 auto;
  position: relative;
}
`;
