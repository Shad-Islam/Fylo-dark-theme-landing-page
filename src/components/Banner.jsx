import React from "react";
import illustration from "../images/illustration-intro.png";
import curvImage from "../images/bg-curvy-desktop.svg";
import {
  BannerText,
  BannerImage,
  BannerButton,
  BannerHeading,
  BannerContainer,
  BannerCurvImage,
  BannerArea,
} from "./styles/banner.style";

function Banner() {
  return (
    <>
      <BannerArea>
        <BannerContainer>
          <BannerImage src={illustration} />
          <BannerHeading>
            All yours files in one secure location,
            <br></br>
            accessibe anywhere
          </BannerHeading>
          <BannerText>
            Fylo stores all your most important files in one secure location.
            <br></br>
            Access them wherever you need, share and collaborate with
            <br></br>
            friends tamily, and co-workers.
          </BannerText>
          <BannerButton>Get Started</BannerButton>
          <BannerCurvImage src={curvImage} />
        </BannerContainer>
      </BannerArea>
    </>
  );
}

export default Banner;
