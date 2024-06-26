import styled from "styled-components";
import ShortCut from "./Shortcuts";
import { capitalizeFirstLetter } from "../particles/CapitalizeFirstLetter";
import * as icons from "../../assets/shortcut-icons";
import { SyntheticEvent, useState } from "react";
import { auth } from "../../Auth/firebase";

const ShortCutsContainer = styled.div``;

const LeftColumn = styled.div`
  width: 25%;
  float: left;
  max-width: 300px;

  /* display: flex; */
  /* border: 3px dotted red; */
  /* justify-content: space-between; */
  /* flex-direction: column; */
  padding-top: 10px;
  overflow: auto;
  @media (max-width: 1080px) {
    display: none;
  }
  @media (min-width: 1920px) {
    margin-left: auto;
  }
`;

function LeftColumnComponent() {
  const currentuser = auth;

  const toggleClick = (event: SyntheticEvent) => {
    const EventTarget = event.target as HTMLDivElement;
    if (EventTarget.id === "seemore") {
      setHidden(!hidden);
    }
  };
  const [hidden, setHidden] = useState<boolean>(true);
  const profilepicture = currentuser.currentUser?.photoURL?.toString();
  return (
    <LeftColumn>
      <ShortCutsContainer>
        <ShortCut isprofile={true} id="profilepicture" click={toggleClick} image={profilepicture} text={capitalizeFirstLetter(currentuser.currentUser?.displayName?.toString())}></ShortCut>
        <ShortCut issprite={true} offset="-288px" text="Find Friends" id="findfriends"></ShortCut>
        <ShortCut issprite={true} click={toggleClick} offset="-432px" text="Memories"></ShortCut>
        <ShortCut issprite={true} click={toggleClick} offset="-180px" text="Saved"></ShortCut>
        <ShortCut issprite={true} click={toggleClick} offset="-36px" text="Groups"></ShortCut>
        <ShortCut issprite={true} click={toggleClick} offset="-504px" text="Video"></ShortCut>
        <ShortCut click={(e) => toggleClick(e)} image={icons.arrow} id="seemore" hidden={hidden ? "hidden" : ""} text="See More"></ShortCut>
        {!hidden && (
          <>
            <ShortCut image={icons.adc} text="Ad Centre"></ShortCut>
            <ShortCut image={icons.adm} text="Ads Manager"></ShortCut>
            <ShortCut image={icons.climate} text="Climate Crisis"></ShortCut>
            <ShortCut image={icons.events} text="Events"></ShortCut>
            <ShortCut image={icons.feeds} text="Feeds"></ShortCut>
            <ShortCut image={icons.gaming} text="Gaming video"></ShortCut>
            <ShortCut image={icons.meta} text="Meta Quest"></ShortCut>
            <ShortCut image={icons.news} text="News"></ShortCut>
            <ShortCut image={icons.orders} text="Orders and payments"></ShortCut>
          </>
        )}
      </ShortCutsContainer>
    </LeftColumn>
  );
}

export default LeftColumnComponent;
