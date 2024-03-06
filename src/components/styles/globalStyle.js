import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

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

export { Global, Container };
