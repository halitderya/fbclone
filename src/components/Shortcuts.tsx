import styled from "styled-components";
import { SyntheticEvent } from "react";
import sprite from "../assets/shortcut-icons/sprite_sheet.png";
export interface ShortcutsType {
  text: string;
  image?: string;
  offset?: string;
  issprite?: boolean;
  id?: string;
  isprofile?: boolean;
  hidden?: boolean;
  class?: string;

  click?: (event: SyntheticEvent) => void;
}

const ShortCutDiv = styled.div`
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

const ShortCutIconBase = styled.div`
  height: 36px;
  width: 36px;
  box-sizing: border-box;
  border-radius: 50%;
  margin: 2px;
`;

const ShortCutIcon = styled(ShortCutIconBase)<{ $image?: string; $offset?: string; $issprite?: boolean; $hidden?: boolean }>`
  background-image: ${(props) => (props.$issprite ? `url(${sprite})` : `url(${props.$image})`)};
  background-position-y: ${(props) => (props.$issprite ? props.$offset : "")};

  background-repeat: no-repeat;
  background-size: 36px;

  transform: ${(props) => (props.$hidden ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

const ShortCutText = styled.label`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 5px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

function ShortCutProfileComponent(props: ShortcutsType) {
  return (
    <ShortCutDiv className={props.class} id={props.id} onClick={props.click}>
      <ShortCutIcon $issprite={props.issprite} $offset={props.offset} id={props.id} $hidden={props.hidden} $image={props.image}></ShortCutIcon>
      <ShortCutText id={props.id}>{props.text}</ShortCutText>
    </ShortCutDiv>
  );
}

export default ShortCutProfileComponent;
