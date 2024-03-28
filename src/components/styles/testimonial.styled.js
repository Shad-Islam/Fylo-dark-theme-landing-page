import styled from "styled-components";

const TestimonialContainer = styled.div`
  width: 100%;
  margin: 100px 0px 200px;
  /* background-color: antiquewhite; */
`;
const TestimonialImage = styled.img`
  margin-left: 70px;
`;
const TestimonialCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  /* background-color: blue; */
`;

const TestimonialCard = styled.div`
  width: 350px;
  height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: hsl(219, 30%, 18%);
`;
const TestimonialText = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: hsl(0, 0%, 90%);
  font-family: "Open Sans";
`;
const TestimonialProfile = styled.div`
  width: 100%;
  /* background-color: antiquewhite; */
  display: flex;
  gap: 10px;
`;
const TestimonialProfileImageSection = styled.div`
  /* background-color: blue; */
`;
const TestimonialProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* box-sizing: border-box; */
`;
const TestimonialProfileTextSection = styled.div`
  gap: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TestimonialProfileName = styled.h5`
  font-weight: 700;
  font-family: "Raleway";
  color: hsl(0, 0%, 100%);
`;
const TestimonialProfileBio = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: hsl(0, 0%, 90%);
  font-family: "Open Sans";
`;

export {
  TestimonialText,
  TestimonialCard,
  TestimonialCards,
  TestimonialImage,
  TestimonialProfile,
  TestimonialContainer,
  TestimonialProfileBio,
  TestimonialProfileName,
  TestimonialProfileImage,
  TestimonialProfileTextSection,
  TestimonialProfileImageSection,
};
