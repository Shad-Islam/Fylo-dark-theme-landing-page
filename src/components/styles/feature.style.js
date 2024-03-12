import styled from "styled-components";

const FeaturesContainer = styled.div`
  width: 100%;
  height: 700px;
  /* background-color: #fff; */
`;

const FeaturesRow = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  /* background-color: #f1f1f1; */

  &:last-child {
    /* background-color: rebeccapurple; */

  }
`;

const FeaturesItem = styled.div`
  width: 500px;
  height: 300px;
  padding: 30px;
  text-align: center;
  /* background-color: blue; */

  & > * {
    margin-bottom: 20px;
  }
`;

const FeaturesItemIcon = styled.div`
  height: 80px;

  img {
    height: 100%;
  }
`;

const FeaturesItemImage = styled.img`
  /* height: 78px; */
`;
const FeaturesItemTitle = styled.h2`
  color: hsl(0, 0%, 100%);
`;
const FeaturesItemText = styled.p`
  color: hsl(0, 0%, 90%);
`;

export {
  FeaturesRow,
  FeaturesItem,
  FeaturesItemText,
  FeaturesItemImage,
  FeaturesItemTitle,
  FeaturesItemIcon,
  FeaturesContainer,
};
