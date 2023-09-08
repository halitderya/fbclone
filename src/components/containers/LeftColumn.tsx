import styled from "styled-components";
import ShortCut from "../Shortcuts";
import useravatar from "../../assets/user_avatar.jpg";

const LeftColumn = styled.div`
  // border: 3px dashed red;
  width: 18%;
  float: left;
  padding-top: 20px;
`;

function LeftColumnComponent() {
  return (
    <LeftColumn>
      <ShortCut
        image={useravatar}
        isavatar={true}
        text="Halit Derya"
      ></ShortCut>
      <ShortCut image={useravatar} isavatar={false} text="dfdsf"></ShortCut>
    </LeftColumn>
  );
}

export default LeftColumnComponent;
