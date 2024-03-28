import React from "react";
import {
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
} from "./styles/testimonial.styled";
import Quotes from "../images/bg-quotes.png";
import profile1 from "../images/profile1.jpg";
import profile2 from "../images/profile2.jpg";
import profile3 from "../images/profile3.jpg";

function Testimonial() {
  return (
    <>
      <TestimonialContainer>
        <TestimonialImage src={Quotes} />
        <TestimonialCards>
          {/* 1st card */}
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
          {/* 2nd card */}
          <TestimonialCard>
            <TestimonialText>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-olled
              collaboration machine.
            </TestimonialText>

            <TestimonialProfile>
              <TestimonialProfileImageSection>
                <TestimonialProfileImage src={profile2} />
              </TestimonialProfileImageSection>
              <TestimonialProfileTextSection>
                <TestimonialProfileName>Bruce McKenzle</TestimonialProfileName>
                <TestimonialProfileBio>
                  Founder & CEO, Huddle
                </TestimonialProfileBio>
              </TestimonialProfileTextSection>
            </TestimonialProfile>
          </TestimonialCard>

          {/* 3rd card */}
          <TestimonialCard>
            <TestimonialText>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-olled
              collaboration machine.
            </TestimonialText>

            <TestimonialProfile>
              <TestimonialProfileImageSection>
                <TestimonialProfileImage src={profile3} />
              </TestimonialProfileImageSection>
              <TestimonialProfileTextSection>
                <TestimonialProfileName>Iva Boyd</TestimonialProfileName>
                <TestimonialProfileBio>
                  Founder & CEO, Muddle
                </TestimonialProfileBio>
              </TestimonialProfileTextSection>
            </TestimonialProfile>
          </TestimonialCard>
        </TestimonialCards>
      </TestimonialContainer>
    </>
  );
}

export default Testimonial;
