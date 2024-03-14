import React from "react";
import {
  DescriptionImage,
  DescriptionContainer,
  DescriptionTextContent,
} from "./styles/description.style";

function Description() {
  return (
    <>
      <DescriptionContainer>
        <DescriptionImage></DescriptionImage>
        <DescriptionTextContent></DescriptionTextContent>
      </DescriptionContainer>
    </>
  );
}

export default Description;
