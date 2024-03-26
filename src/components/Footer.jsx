import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import {
  FooterRow,
  FooterNav,
  FooterPhone,
  FooterAddress,
  FooterArea,
  FooterCol,
  FooterCols,
  FooterContainer,
  FooterLogo,
  FooterSocialIcon,
} from "./styles/footer.style";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <>
      <FooterArea>
        <FooterContainer>
          <FooterLogo src={logo} />
          <FooterCols>
            {/* address */}
            <FooterAddress>
              <FaMapMarkerAlt />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore gagna aliqua
            </FooterAddress>

            {/* email and phone number  */}
            <FooterPhone>
              <FooterRow>
                <FaPhoneVolume />
                <p>+1-543-123-4567</p>
              </FooterRow>

              <FooterRow>
                <FaEnvelope />
                <p>examole@tvio.com</p>
              </FooterRow>
            </FooterPhone>

            {/* quick nav  */}
            <FooterNav>
              <ul>
                <li>About Us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
            </FooterNav>

            {/* quick nav  */}
            <FooterNav>
              <ul>
                <li>Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </FooterNav>

            <FooterSocialIcon></FooterSocialIcon>

            {/* social media link */}
          </FooterCols>
        </FooterContainer>
      </FooterArea>
    </>
  );
}

export default Footer;
