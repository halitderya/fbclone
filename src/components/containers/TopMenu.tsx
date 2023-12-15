import styled from "styled-components";
import { ButtonCircle, ButtonCircleFull, MiddleButton } from "../../components/particles/Buttons";
import Searchbar from "../particles/Inputs";
import * as topmenuicons from "../../assets/topmenu-icons/index";
import { handleLogout } from "../../Auth/logout";
import { ShortCutIcon } from "./Shortcuts";
import { auth } from "../../Auth/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
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
const currentuser = auth;

function TopMenuFunction() {
  const [profilepicture, setProfilePicture] = useState<string | undefined>(currentuser.currentUser?.photoURL?.toString());
  useEffect(() => {
    setProfilePicture(currentuser.currentUser?.photoURL?.toString());
  }, [currentuser.currentUser?.photoURL?.toString()]);

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert("Error logging out: " + error.message.toString());
      });
  };
  return (
    <TopMenu>
      <FirstDiv>
        <ButtonCircleFull to="./" $image={topmenuicons.flogo}></ButtonCircleFull>
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
        <ButtonCircle to="#" $image={topmenuicons.logomessenger}></ButtonCircle>
        <ButtonCircle to="#" $image={topmenuicons.bellicon}></ButtonCircle>
        <ButtonCircle to="#" $image={topmenuicons.ninedotsicon}></ButtonCircle>
        <ShortCutIcon $isprofile={true} id="profilepicture" onClick={handleLogout} $image={profilepicture}></ShortCutIcon>
      </ThirdDiv>
    </TopMenu>
  );
}
export default TopMenuFunction;
