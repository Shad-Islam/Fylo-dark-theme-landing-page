import React from "react";
import {
  DescriptionText,
  DescriptionLink,
  DescriptionImage,
  DescriptionHeading,
  DescriptionTextPart,
  DescriptionContainer,
  DescriptionImagePart,
} from "./styles/description.style";
import StayProductive from "../images/illustration-stay-productive.png";

function Description() {
  return (
    <>
      <DescriptionContainer>
        <DescriptionImagePart>
          <DescriptionImage src={StayProductive} />
        </DescriptionImagePart>
        <DescriptionTextPart>
          <DescriptionHeading>
            Stay productive,
            <br />
            wherever you are
          </DescriptionHeading>
          <DescriptionText>
            Never let location be an issue when accessing your files. Fylo has
            you
            <br />
            covered for all of your file storage needs.
          </DescriptionText>
          <DescriptionText>
            Securely share files and folders with friends, family and colleagues
            for live
            <br />
            collaboration. No email attachments required.
          </DescriptionText>
          <DescriptionLink href="#">See how Fylo works</DescriptionLink>
        </DescriptionTextPart>
      </DescriptionContainer>
    </>
  );
}

export default Description;
