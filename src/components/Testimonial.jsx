import React from "react";
import {
  TestimonialText,
  TestimonialCard,
  TestimonialProfile,
  TestimonialContainer,
  TestimonialProfileImage,
  TestimonialProfileName,
  TestimonialProfileBio,
} from "./styles/testimonial.styled";

function Testimonial() {
  return (
    <>
      <TestimonialContainer>
        <TestimonialCard>
          <TestimonialText>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-olled
            collaboration machine.
          </TestimonialText>
          <TestimonialProfile></TestimonialProfile>
        </TestimonialCard>
        {/* <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard> */}
      </TestimonialContainer>
    </>
  );
}

export default Testimonial;
