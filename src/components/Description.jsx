import React from "react";
import {
  DescriptionImage,
  DescriptionContainer,
  DescriptionTextContent,
} from "./styles/description.style";
import StayProductive from "../images/illustration-stay-productive.png";

function Description() {
  return (
    <>
      <DescriptionContainer>
        <DescriptionImage src={StayProductive} />
        <DescriptionTextContent></DescriptionTextContent>
      </DescriptionContainer>
    </>
  );
}

export default Description;
