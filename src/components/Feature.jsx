import React from "react";
import {
  FeaturesRow,
  FeaturesContainer,
  FeaturesItem,
} from "./styles/feature.style";

function Feature() {
  return (
    <>
      <FeaturesContainer>
        <FeaturesRow>
          <FeaturesItem></FeaturesItem>
          <FeaturesItem></FeaturesItem>
        </FeaturesRow>
        <FeaturesRow>
          <FeaturesItem></FeaturesItem>
          <FeaturesItem></FeaturesItem>
        </FeaturesRow>
      </FeaturesContainer>
    </>
  );
}

export default Feature;
