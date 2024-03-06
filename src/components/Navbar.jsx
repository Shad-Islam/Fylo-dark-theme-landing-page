import React from "react";
import {
  MenuText,
  NevbarLogo,
  MenuContainer,
  NavbarContainer,
} from "./styles/navbar.style";
import logo from "../images/logo.svg";
function Navbar() {
  return (
    <>
      <NavbarContainer>
        <NevbarLogo src={logo} />
        <MenuContainer>
          <MenuText href="#">Featurs</MenuText>
          <MenuText href="#">Team</MenuText>
          <MenuText href="#">Sign in</MenuText>
        </MenuContainer>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
