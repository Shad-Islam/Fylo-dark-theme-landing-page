import styled from "styled-components";

const TestimonialContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 100px 0px;
  justify-content: space-evenly;
`;
const TestimonialCard = styled.div`
  width: 350px;
  height: 200px;
  background-color: hsl(219, 30%, 18%);
`;
const TestimonialText = styled.p`
  color: hsl(0, 0%, 85%);
`;
const TestimonialProfile = styled.div`
  width: 100%;
  background-color: antiquewhite;
`;
const TestimonialProfileImage = styled.img``;
const TestimonialProfileName = styled.h5``;
const TestimonialProfileBio = styled.p``;

export {
  TestimonialText,
  TestimonialCard,
  TestimonialProfile,
  TestimonialContainer,
  TestimonialProfileImage,
  TestimonialProfileName,
  TestimonialProfileBio,
};
