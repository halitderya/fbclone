import styled from "styled-components";
import { Link } from "react-router-dom";

/* const ButtonSquare = styled.button<{ $kind?: string }>`
  color: #ffffff;
  width: auto;
  height: 38px;
  border-radius: 5px;
  padding: 5px;
  margin: 2px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
`;
 */
const ButtonCircleFull = styled(Link)<{ $image: string }>`
  background-color: ${(props) => props.theme.lightgray};
  width: 46px;
  height: 46px;
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
  @media (max-width: 899px) {
    display: none;
  }
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

export { ButtonCircleFull, ButtonCircle, MiddleButton };
