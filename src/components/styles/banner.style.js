import styled from "styled-components";

const BannerHeading = styled.h1`
  margin-bottom: 40px;
  color: hsl(0, 0%, 100%);
`;

const BannerText = styled.h4`
  line-height: 25px;
  color: hsl(0, 0%, 85%);
`;

const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
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
  background-color: hsl(176, 68%, 64%);
`;

export {
  BannerText,
  BannerImage,
  BannerButton,
  BannerHeading,
  BannerContainer,
};
