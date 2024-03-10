import styled from "styled-components";
import { ButtonCircle, ButtonCircleFull, MiddleButton } from "../../components/particles/Buttons";
import Searchbar from "../particles/Inputs";
import * as topmenuicons from "../../assets/topmenu-icons/index";
import { theme } from "../../assets/theme";
import { ShortCutIcon } from "./Shortcuts";
import { auth } from "../../Auth/firebase";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Text } from "./MidColumn/Post/PostStyles";
import { capitalizeFirstLetter } from "../particles/CapitalizeFirstLetter";

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
const SecondDiv = styled(FirstDiv)`
  @media (max-width: 1080px) {
    display: none;
  }
`;
const ThirdDiv = styled(FirstDiv)`
  position: relative;
`;
const Profile = styled.div<{ $show: boolean }>`
  max-width: 400px;
  width: 90vw;
  min-width: fit-content;
  flex-direction: column;
  display: flex;
  visibility: ${(props) => (props.$show ? "visible" : "hidden")};
  transition: opacity 0.2s, visibility 0.2s;

  height: fit-content;
  overflow: hidden;
  z-index: 1;
  padding: 10px;
  border-radius: 10px;
  box-shadow: ${theme.shadowstrong};
  background-color: ${theme.white};
  position: fixed;
  top: 70px;
  right: 10px;
`;
const ProfileSecondDiv = styled.div`
  height: auto;
`;
const ProfileFirstDiv = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const LogoutButton = styled.button`
  width: 100%;
  font-size: 16px;
  display: flex;
  font-weight: 600;
  box-sizing: border-box;
  color: ${theme.darkgray};
  background-color: ${theme.lightgray};
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  border: none;
  align-items: center;
  border: 2px solid transparent;
  &:hover {
    background-color: ${theme.hovergray};
    border: 2px ${theme.borderblue} solid;
    box-sizing: border-box;
  }
`;
const LogoutImage = styled.img`
  margin-right: 10px;
`;
const currentuser = auth;

function TopMenuFunction() {
  const [profilepicture, setProfilePicture] = useState<string | undefined>(currentuser.currentUser?.photoURL?.toString());
  const [profileOpen, setProfileOpen] = useState<boolean>(false);

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutsideComment(event: MouseEvent) {
      if (profileOpen && profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    }

    window.addEventListener("mousedown", handleClickOutsideComment);

    return () => {
      window.removeEventListener("mousedown", handleClickOutsideComment);
    };
  }, [profileOpen]);
  const HandleProfileOpen = () => {
    setProfileOpen(!profileOpen);
  };

  useEffect(() => {
    setProfilePicture(currentuser.currentUser?.photoURL?.toString());
  }, [currentuser.currentUser?.photoURL?.toString()]);

  const navigate = useNavigate();

  const handleLogout = () => {
    setProfileOpen(false);
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
        <Profile ref={profileRef} $show={profileOpen}>
          <ProfileFirstDiv>
            <ShortCutIcon $isprofile={true} id="profilepicture" onClick={handleLogout} $image={profilepicture}></ShortCutIcon>

            <Text style={{ marginLeft: "20px" }} $fontsize="18px" $weight={600} $colour="darkgray">
              {capitalizeFirstLetter(currentuser.currentUser?.displayName)}
            </Text>
          </ProfileFirstDiv>

          <ProfileSecondDiv>
            <LogoutButton onClick={handleLogout}>
              <LogoutImage src={topmenuicons.logout}></LogoutImage>
              Logout
            </LogoutButton>
          </ProfileSecondDiv>
        </Profile>

        <ShortCutIcon onClick={HandleProfileOpen} $isprofile={true} id="profilepicture" $image={profilepicture}></ShortCutIcon>
      </ThirdDiv>
    </TopMenu>
  );
}
export default TopMenuFunction;
