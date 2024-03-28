import styled from "styled-components";

const FooterArea = styled.div`
  width: 100%;
  height: 500px;
  background-color: hsl(216, 53%, 9%);
`;
const FooterContainer = styled.div`
  height: 100%;
  width: 1440px;
  margin: 0 auto;
  background-color: aqua;
`;

const FooterLogo = styled.img`
  background-color: red;
`;

const FooterCols = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;
  color: hsl(0, 0%, 100%);
  background-color: orange;
  justify-content: space-between;
`;

const FooterRow = styled.div`
  gap: 20px;
  display: flex;
`;
const FooterAddress = styled.div`
  width: 300px;
  background-color: blue;
`;
const FooterPhone = styled.div`
  gap: 10px;
  display: flex;
  width: 200px;
  flex-direction: column;
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

const FooterList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const FooterListItem = styled.a`
  color: white;
  text-decoration: none;
`;

export {
  FooterRow,
  FooterNav,
  FooterCols,
  FooterList,
  FooterLogo,
  FooterArea,
  FooterPhone,
  FooterAddress,
  FooterListItem,
  FooterContainer,
  FooterSocialIcon,
};
