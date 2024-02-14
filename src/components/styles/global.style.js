import styled, { createGlobalStyle } from "styled-components";

// Global styles
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: hsl(218, 28%, 13%);
   
  }
`;

// Container styled component
const Container = styled.div`
  width: 1440px;
  margin: 0 auto;

  @media (max-width: 375px) {
    width: 100%;
  }
`;

// Export components
export { GlobalStyles, Container };
