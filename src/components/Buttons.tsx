import styled from "styled-components";
const ButtonSquare = styled.button<{ $kind?: string }>`
  color: #ffffff;
  width: auto;
  height: 38px;
  border-radius: 5px;
  padding: 5px;
  margin: 2px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
`;

const ButtonDanger = styled(ButtonSquare)`
  background-color: red;
  color: black;
`;
const ButtonWarning = styled(ButtonSquare)`
  background-color: orange;
  color: white;
`;
const ButtonNormal = styled(ButtonSquare)`
  background-color: blue;
  color: white;
`;
const ButtonCircleFull = styled.button<{ $image: string }>`
  background-color: #f0f2f5;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-image: url(${(props) => props.$image});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-width: 0;
  box-sizing: border-box;
  margin-left: 5px;
  margin-right: 5px;
`;
const ButtonCircle = styled(ButtonCircleFull)<{ $image: string }>`
  background-image: url(${(props) => props.$image});
  box-sizing: content-box;
  background-size: 60%;
  box-sizing: border-box;
  margin-left: auto;
  display: flex;
`;
const MiddleButton = styled.button<{ $image: string }>`
  width: 100px;
  height: 100%;
  border-width: 0;
  background-image: url(${(props) => props.$image});
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  border-radius: 5px;
  margin: 0 5px 0 5px;
  &:hover {
    background-color: #f0f2f5;
  }
`;

export {
  ButtonNormal,
  ButtonDanger,
  ButtonWarning,
  ButtonCircleFull,
  ButtonCircle,
  MiddleButton,
};
