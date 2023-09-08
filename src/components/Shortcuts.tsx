import styled from "styled-components";
import sprite from "../assets/sprite_sheet.png";

interface ShortcutsType {
  text: string;
  image?: string;
  offset?: number;
  isavatar: boolean;
}

const ShortCutDiv = styled.div`
  border: 1px dotted black;

  background-image: ${props => props.isavatar? };
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  height: 50px;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: #f0f2f5;
  }
`;

const ShortCutIcon = styled.div`
  height: 36px;
  width: 36px;
  box-sizing: border-box;
  border-radius: 50%;
  margin: 2px;
`;
const ShortCutText = styled.label`
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 5px;
`;

function ShortCutComponent(props: ShortcutsType) {
  return (
    <ShortCutDiv>
      <ShortCutIcon ></ShortCutIcon>
      <ShortCutText>{props.text}</ShortCutText>
    </ShortCutDiv>
  );
}
export default ShortCutComponent;
