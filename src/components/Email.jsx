import React from "react";
import {
  EmailText,
  EmailInput,
  EmailHeading,
  EmailContainer,
  EmailInputButton,
  EmailInputSectioon,
} from "./styles/email.styled";

function Email() {
  return (
    <EmailContainer>
      <EmailHeading>Get early access today</EmailHeading>
      <EmailText>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </EmailText>
      <EmailInputSectioon>
        <EmailInput placeholder="email@example.com"></EmailInput>
        <EmailInputButton>Get Started For Free</EmailInputButton>
      </EmailInputSectioon>
    </EmailContainer>
  );
}

export default Email;
