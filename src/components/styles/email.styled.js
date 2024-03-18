import styled from "styled-components";

const EmailContainer = styled.div`
  gap: 20px;
  width: 70%;
  height: 200px;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: hsl(217, 28%, 15%);
`;

const EmailHeading = styled.h2`
  color: hsl(0, 0%, 100%);
`;
const EmailText = styled.p`
  color: hsl(0, 0%, 85%);
  padding: 0 130px;
`;
const EmailInputSectioon = styled.div``;

const EmailInput = styled.input`
  border: 0px;
  outline: 0px;
  width: 500px;
  padding: 10px 20px;
  border-radius: 15px;
`;
const EmailInputButton = styled.button`
  border: 0px;
  outline: 0px;
  margin-left: 30px;
  font-size: 15px;
  cursor: pointer;
  padding: 10px 40px;
  border-radius: 15px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(176, 68%, 64%);
`;

export {
  EmailText,
  EmailInput,
  EmailHeading,
  EmailContainer,
  EmailInputButton,
  EmailInputSectioon,
};
