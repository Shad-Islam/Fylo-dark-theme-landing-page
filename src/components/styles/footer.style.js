import styled from "styled-components";

const FooterArea = styled.div`
  width: 100%;
  padding: 10px 30px;
  position: relative;
  background-color: hsl(216, 53%, 9%);
`;
const FooterContainer = styled.div`
  max-width: 1440px;
  /* background-color: red; */
  margin: 240px auto 100px;
`;

const FooterLogo = styled.img`
  /* background-color: red; */
`;

const FooterCols = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;
  margin-top: 50px;
  color: hsl(0, 0%, 100%);
  /* background-color: orange; */
  justify-content: space-between;
`;

const FooterRow = styled.div`
  gap: 20px;
  display: flex;
`;
const FooterAddress = styled.div`
  width: 300px;
  font-weight: 400;
  font-family: "Open Sans";

  /* background-color: blue; */
`;
const FooterPhone = styled.div`
  gap: 10px;
  width: 200px;
  display: flex;
  font-weight: 400;
  align-items: end;
  flex-direction: column;
  font-family: "Open Sans";
  /* background-color: blue; */
`;
const FooterNav = styled.div`
  width: 200px;
  font-weight: 400;
  padding-left: 50px;
  font-family: "Open Sans";
  /* background-color: blue; */
`;

const FooterList = styled.ul`
  gap: 10px;
  display: flex;
  list-style: none;
  flex-direction: column;
`;
const FooterListItem = styled.a`
  color: white;
  text-decoration: none;
`;

const FooterSocialIcons = styled.div`
  gap: 20px;
  width: 200px;
  display: flex;
  justify-content: center;
  /* background-color: blue; */
`;

const FooterSocialIconBorder = styled.div`
  padding: 10px;
  display: inline;
  border-radius: 50%;
  border: 1px solid #fff;
`;

const FooterSocialIcon = styled.a`
  color: white;
  margin-top: 10px;
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
  FooterSocialIcons,
  FooterSocialIconBorder,
};
