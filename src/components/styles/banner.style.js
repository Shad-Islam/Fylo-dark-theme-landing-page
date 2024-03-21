import styled from "styled-components";

const BannerArea = styled.div`
  width: 100%;
  position: relative;
  background-color: #1c2230;
  padding: 30px 30px 0px;
`;

const BannerHeading = styled.h1`
  z-index: 10;
  margin-bottom: 40px;
  color: hsl(0, 0%, 100%);
`;

const BannerText = styled.h4`
  z-index: 10;
  line-height: 25px;
  color: hsl(0, 0%, 85%);
`;

const BannerContainer = styled.div`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

const BannerImage = styled.img`
  margin-bottom: 50px;
`;

const BannerButton = styled.button`
  border: 0px;
  outline: 0px;
  margin: 50px;
  font-size: 15px;
  cursor: pointer;
  padding: 10px 40px;
  border-radius: 15px;
  color: hsl(0, 0%, 100%);
  z-index: 10;
  background-color: hsl(176, 68%, 64%);
`;

const BannerCurvImage = styled.img`
  width: 100%;
  height: 350px;
  z-index: 2;
  position: absolute;
  bottom: -40px;
  background-color: aqua;
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
