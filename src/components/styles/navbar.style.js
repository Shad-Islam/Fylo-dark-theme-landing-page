import styled from "styled-components";

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
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

  &:hover {
    text-decoration: underline;
    color: hsl(0, 0%, 100%);
  }
`;

export { NevbarLogo, MenuText, MenuContainer, NavbarContainer };