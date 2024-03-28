import styled from "styled-components";

const NavArea = styled.div`
  width: 100%;
  padding: 10px 30px;
  background-color: #1c2230;
`;

const NavbarContainer = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 20px auto 0px;
  justify-content: space-between;
  /* background-color: aquamarine; */
`;

const NevbarLogo = styled.img`
  width: 200px;
`;

const MenuContainer = styled.div`
  gap: 50px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: end;
  /* background-color: red; */
`;

const MenuText = styled.a`
  color: hsl(0, 0%, 100%);
  text-decoration: none;
  font-family: "Raleway";
  font-weight: 400;

  &:hover {
    text-decoration: underline;
    color: hsl(0, 0%, 100%);
  }
`;

export { NavArea, NevbarLogo, MenuText, MenuContainer, NavbarContainer };
