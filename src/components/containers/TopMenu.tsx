import styled from "styled-components";
import { ButtonCircle, ButtonCircleFull, MiddleButton } from "../Buttons";
import Searchbar from "../../components/Inputs";
import * as topmenuicons from "../../assets/topmenu-icons/index";
import avatar from "../../assets/shortcut-icons/user_avatar.jpg";

const TopMenu = styled.div`
  background-color: ${(props) => props.theme.white};
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 1px ${(props) => props.theme.shadowgray};
  //  border: 4px dotted purple;
`;
const FirstDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SecondDiv = styled(FirstDiv)``;
const ThirdDiv = styled(FirstDiv)``;
function TopMenuFunction() {
  return (
    <TopMenu>
      <FirstDiv>
        <ButtonCircleFull $image={topmenuicons.flogo}></ButtonCircleFull>
        <Searchbar></Searchbar>
      </FirstDiv>
      <SecondDiv>
        <MiddleButton $image={topmenuicons.homeicon}></MiddleButton>
        <MiddleButton $image={topmenuicons.friendsicon}></MiddleButton>
        <MiddleButton $image={topmenuicons.videoicon}></MiddleButton>
        <MiddleButton $image={topmenuicons.groupsicon}></MiddleButton>
        <MiddleButton $image={topmenuicons.gaminicon}></MiddleButton>
      </SecondDiv>
      <ThirdDiv>
        <ButtonCircle $image={topmenuicons.logomessenger}></ButtonCircle>
        <ButtonCircle $image={topmenuicons.bellicon}></ButtonCircle>
        <ButtonCircle $image={topmenuicons.ninedotsicon}></ButtonCircle>
        <ButtonCircleFull $image={avatar}></ButtonCircleFull>
      </ThirdDiv>
    </TopMenu>
  );
}
export default TopMenuFunction;
