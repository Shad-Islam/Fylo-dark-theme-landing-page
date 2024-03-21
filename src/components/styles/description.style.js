import styled from "styled-components";

const DescriptionContainer = styled.div`
  gap: 140px;
  display: flex;
  /* background-color: aqua; */
  margin-top: 20px;
  justify-content: space-evenly;
`;

const DescriptionImagePart = styled.div`
  /* width: 50%; */
  /* padding-left: 20px; */
  /* background-color: blueviolet; */
`;
const DescriptionImage = styled.img``;
const DescriptionTextPart = styled.div`
  gap: 20px;
  width: 50%;
  display: flex;
  padding-left: 30px;
  /* background-color: red; */
  flex-direction: column;
  justify-content: center;
`;
const DescriptionHeading = styled.h2`
  font-size: 30px;
  color: hsl(0, 0%, 100%);
  /* background-color: bisque; */
`;
const DescriptionText = styled.p`
  color: hsl(0, 0%, 85%);
`;
const DescriptionLink = styled.a`
  color: hsl(176, 68%, 64%);
`;

export {
  DescriptionImagePart,
  DescriptionText,
  DescriptionLink,
  DescriptionImage,
  DescriptionHeading,
  DescriptionTextPart,
  DescriptionContainer,
};
