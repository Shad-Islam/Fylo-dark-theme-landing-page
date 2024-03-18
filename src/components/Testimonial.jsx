import React from "react";
import {
  TestimonialText,
  TestimonialCard,
  TestimonialProfile,
  TestimonialContainer,
  TestimonialProfileImage,
  TestimonialProfileName,
  TestimonialProfileBio,
  TestimonialProfileImageSection,
  TestimonialProfileTextSection,
} from "./styles/testimonial.styled";

import profile1 from "../images/profile1.jpg";

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
          <TestimonialProfile>
            <TestimonialProfileImageSection>
              <TestimonialProfileImage src={profile1} />
            </TestimonialProfileImageSection>
            <TestimonialProfileTextSection>
              <TestimonialProfileName>Satish Patel</TestimonialProfileName>
              <TestimonialProfileBio>
                Founder & CEO, Huddle
              </TestimonialProfileBio>
            </TestimonialProfileTextSection>
          </TestimonialProfile>
        </TestimonialCard>
      </TestimonialContainer>
    </>
  );
}

export default Testimonial;
