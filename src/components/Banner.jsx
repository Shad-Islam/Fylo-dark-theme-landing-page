import React from "react";
import illustration from "../images/illustration-intro.png";
import {
  BannerText,
  BannerImage,
  BannerButton,
  BannerHeading,
  BannerContainer,
} from "./styles/banner.style";

function Banner() {
  return (
    <>
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
        <BannerButton>Get started</BannerButton>
      </BannerContainer>
    </>
  );
}

export default Banner;
