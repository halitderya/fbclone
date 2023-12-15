import styled from "styled-components";
import { SyntheticEvent } from "react";
import sprite from "../../assets/shortcut-icons/sprite_sheet.png";
export interface ShortcutsType {
  text?: string;
  image?: string;
  offset?: string;
  issprite?: boolean;
  id?: string;
  isprofile?: boolean;
  hidden?: string;
  class?: string;

  click?: (event: SyntheticEvent) => void;
}

const ShortCutDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;

  height: 60px;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  &:hover {
    background-color: ${(props) => props.theme.hovergray};
  }
`;

const ShortCutIconBase = styled.div`
  height: 36px;
  width: 36px;
  box-sizing: border-box;
  border-radius: 50%;
  margin: 2px;
`;

export const ShortCutIcon = styled(ShortCutIconBase)<{ $image?: string; $offset?: string; $issprite?: boolean; $hidden?: string; $isprofile?: boolean }>`
  background-image: ${(props) => (props.$issprite ? `url(${sprite})` : `url(${props.$image})`)};
  background-position-y: ${(props) => (props.$issprite ? props.$offset : "")};

  background-repeat: no-repeat;
  background-size: ${(props) => (props.$isprofile ? "48px" : "36px")};
  width: ${(props) => (props.$isprofile ? "48px" : "36px")};
  height: ${(props) => (props.$isprofile ? "48px" : "36px")};
  transform: ${(props) => (props.$hidden ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

const ShortCutText = styled.label`
  font-size: 16px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  color: ${(props) => props.theme.black};
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
      <ShortCutIcon $isprofile={props.isprofile} $issprite={props.issprite} $offset={props.offset} id={props.id} $hidden={props.hidden} $image={props.image}></ShortCutIcon>
      <ShortCutText id={props.id}>{props.text}</ShortCutText>
    </ShortCutDiv>
  );
}

export default ShortCutProfileComponent;
