import styled from "styled-components";
import { ButtonCircle, ButtonCircleFull, MiddleButton } from "../Buttons";
import facebooklogo from "../../assets/facebook-logo.svg";
import logomessenger from "../../assets/facebook-messenger-logo.svg";
import bellicon from "../../assets/facebook-bell-icon.svg";
import ninedotsicon from "../../assets/facebook-ninedots-icon.svg";
import avatar from "../../assets/user_avatar.jpg";
import homeicon from "../../assets/home-icon.svg";
import friendsicon from "../../assets/friends-icon.svg";
import videoicon from "../../assets/video-icon.svg";
import groupsicon from "../../assets/groups-icon.svg";
import gaminicon from "../../assets/gaming-icon.svg";
import Searchbar from "../../components/Inputs";

const TopMenu = styled.div`
  background-color: ${(props) => props.theme.white};
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  border-radius: 4px;
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
        <ButtonCircleFull $image={facebooklogo}></ButtonCircleFull>
        <Searchbar></Searchbar>
      </FirstDiv>
      <SecondDiv>
        <MiddleButton $image={homeicon}></MiddleButton>
        <MiddleButton $image={friendsicon}></MiddleButton>
        <MiddleButton $image={videoicon}></MiddleButton>
        <MiddleButton $image={groupsicon}></MiddleButton>
        <MiddleButton $image={gaminicon}></MiddleButton>
      </SecondDiv>
      <ThirdDiv>
        <ButtonCircle $image={logomessenger}></ButtonCircle>
        <ButtonCircle $image={bellicon}></ButtonCircle>
        <ButtonCircle $image={ninedotsicon}></ButtonCircle>
        <ButtonCircleFull $image={avatar}></ButtonCircleFull>
      </ThirdDiv>
    </TopMenu>
  );
}
export default TopMenuFunction;
