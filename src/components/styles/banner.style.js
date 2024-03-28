import styled from "styled-components";

const BannerArea = styled.div`
  width: 100%;
  position: relative;
  background-color: #1c2230;
  padding: 30px 30px 0px;
`;

const BannerHeading = styled.h1`
  z-index: 10;
  font-weight: 700;
  margin-bottom: 40px;
  font-family: "Raleway";
  color: hsl(0, 0%, 100%);
`;

const BannerText = styled.h4`
  z-index: 10;
  font-weight: 400;
  line-height: 25px;
  color: hsl(0, 0%, 85%);
  font-family: "Open Sans";
`;

const BannerContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

const BannerImage = styled.img`
  margin-bottom: 50px;
`;

const BannerButton = styled.button`
  z-index: 10;
  border: 0px;
  outline: 0px;
  margin: 50px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  padding: 10px 40px;
  border-radius: 15px;
  font-family: "Raleway";
  color: hsl(0, 0%, 100%);
  transition: all linear 0.7s;
  background: linear-gradient(to right, #65e2d9, #339ecc);

  &:hover {
    background: hsl(176, 68%, 64%);
  }
`;

const BannerCurvImage = styled.img`
  width: 100%;
  height: 350px;
  z-index: 2;
  position: absolute;
  bottom: -40px;
`;

export {
  BannerArea,
  BannerText,
  BannerImage,
  BannerButton,
  BannerHeading,
  BannerContainer,
  BannerCurvImage,
};
