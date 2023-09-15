import styled from "styled-components";
import sprite from "../assets/sprite_sheet.png";
import { useState, useEffect, SyntheticEvent } from "react";

interface ShortcutsType {
  text: string;
  image?: string;
  offset?: string;
  issprite?: boolean;
  ishidden?: boolean;
  id?: string;

  click?: (event: SyntheticEvent) => void;
}

//const [hidden, setHidden] = useState<boolean>(false);

const ShortCutDiv = styled.div<{ $ishidden?: boolean }>`
  // border: 1px dotted black;

  display: ${(props) => (props.$ishidden ? "none" : "flex")};
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
const ShortCutIconProfile = styled(ShortCutIconBase)<{ $image?: string }>`
  background-image: url(${(props) => props.$image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 36px;
`;
const ShortCutIcon = styled(ShortCutIconBase)<{
  $image?: string;
  $offset?: string;
}>`
  background: url(${sprite}) ${(props) => props.$offset};
  background-size: 36px;
`;
const ShortCutText = styled.label`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 5px;
`;

function ShortCutProfileComponent(props: ShortcutsType) {
  const toggleClick = (event: any) => {
    console.log("shortcuts :" + (event.target as HTMLDivElement).id);
    setHidden(!hidden);
  };

  const [hidden, setHidden] = useState<boolean>(false);

  if (!props.issprite) {
    if (!hidden) {
      return (
        <ShortCutDiv id={props.id} onClick={(e) => toggleClick(e)} $ishidden={props.ishidden}>
          <ShortCutIconProfile id={props.id} $image={props.image}></ShortCutIconProfile>
          <ShortCutText id={props.id}>{props.text}</ShortCutText>
        </ShortCutDiv>
      );
    }
  } else {
    return (
      <ShortCutDiv id={props.id} onClick={toggleClick}>
        <ShortCutIcon id={props.id} $offset={props.offset} $image={props.image}></ShortCutIcon>
        <ShortCutText id={props.id}>{props.text}</ShortCutText>
      </ShortCutDiv>
    );
  }
}

export default ShortCutProfileComponent;
