import styled from "styled-components";

const FooterArea = styled.div`
  height: 500px;
  width: 100%;
  background-color: hsl(216, 53%, 9%);
`;
const FooterContainer = styled.div`
  height: 100%;
  width: 1440px;
  background-color: aqua;
  margin: 0 auto;
`;

const FooterLogo = styled.img`
  background-color: red;
`;

const FooterCols = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: orange;
`;
const FooterCol = styled.div`
  width: 100px;
  background-color: blue;
`;
const FooterAddress = styled.div`
  width: 300px;
  background-color: blue;
`;
const FooterPhone = styled.div`
  width: 200px;
  background-color: blue;
`;
const FooterNav = styled.div`
  width: 200px;
  background-color: blue;
`;
const FooterSocialIcon = styled.div`
  width: 200px;
  background-color: blue;
`;

export {
  FooterSocialIcon,
  FooterNav,
  FooterPhone,
  FooterAddress,
  FooterCols,
  FooterCol,
  FooterLogo,
  FooterArea,
  FooterContainer,
};
