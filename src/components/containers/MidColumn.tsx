import styled from "styled-components";
import logo from "../../assets/facebook-logo.svg";
import {
  ButtonDanger,
  ButtonNormal,
  ButtonWarning,
  ButtonCircleFull,
} from "../Buttons";
const MidColumn = styled.div`
  // border: 3px dashed green;
  width: 58%;
`;

function MidColumnComponent() {
  return (
    <MidColumn>
      {/*       <ButtonDanger>Danger</ButtonDanger>
      <ButtonWarning>Warning</ButtonWarning>
      <ButtonNormal>Normal</ButtonNormal>
      <ButtonCircleFull $image={logo}></ButtonCircleFull> */}
    </MidColumn>
  );
}

export default MidColumnComponent;
