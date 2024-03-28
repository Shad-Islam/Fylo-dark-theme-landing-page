import React from "react";
import Email from "./Email";
import logo from "../images/logo.svg";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import {
  FooterRow,
  FooterNav,
  FooterArea,
  FooterCols,
  FooterList,
  FooterLogo,
  FooterPhone,
  FooterAddress,
  FooterListItem,
  FooterContainer,
  FooterSocialIcon,
  FooterSocialIconBorder,
  FooterSocialIcons,
} from "./styles/footer.style";

function Footer() {
  return (
    <>
      <FooterArea>
        <Email />
        <FooterContainer>
          <FooterLogo src={logo} />
          <FooterCols>
            {/* address */}
            <FooterAddress>
              <FooterRow>
                <div>
                  <FaMapMarkerAlt />
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore gagna aliqua
                </p>
              </FooterRow>
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
              <FooterList>
                <li>
                  <FooterListItem href="#"> About Us</FooterListItem>
                </li>
                <li>
                  <FooterListItem href="#">Jobs</FooterListItem>
                </li>
                <li>
                  <FooterListItem href="#"> Press</FooterListItem>
                </li>
                <li>
                  <FooterListItem href="#">Blog</FooterListItem>
                </li>
              </FooterList>
            </FooterNav>

            {/* quick nav  */}
            <FooterNav>
              <FooterList>
                <FooterListItem href="#">Contact Us</FooterListItem>
                <FooterListItem href="#">Terms</FooterListItem>
                <FooterListItem href="#">Privacy</FooterListItem>
              </FooterList>
            </FooterNav>

            {/* social media link */}
            <FooterSocialIcons>
              <FooterSocialIcon href="#">
                <FooterSocialIconBorder>
                  <FaFacebookF />
                </FooterSocialIconBorder>
              </FooterSocialIcon>

              <FooterSocialIcon href="#">
                <FooterSocialIconBorder>
                  <FaTwitter />
                </FooterSocialIconBorder>
              </FooterSocialIcon>
              <FooterSocialIcon href="#">
                <FooterSocialIconBorder>
                  <FaInstagram />
                </FooterSocialIconBorder>
              </FooterSocialIcon>
            </FooterSocialIcons>
          </FooterCols>
        </FooterContainer>
      </FooterArea>
    </>
  );
}

export default Footer;
