import styled from "styled-components";

const FeaturesContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: #fff;
`;

const FeaturesRow = styled.div`
  width: 100%;
  height: 350px;
  background-color: #f1f1f1;

  &:last-child {
    background-color: rebeccapurple;
  }
`;

const FeaturesItem = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
`;

export { FeaturesRow, FeaturesItem, FeaturesContainer };
