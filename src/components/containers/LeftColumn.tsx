import styled from "styled-components";
import ShortCut from "../Shortcuts";

import * as icons from "../../assets/shortcut-icons";
import { SyntheticEvent, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

const LeftColumn = styled.div`
  width: 18%;
  float: left;
  padding-top: 20px;
`;

function LeftColumnComponent() {
  const toggleClick = (event: SyntheticEvent) => {
    const EventTarget = event.target as HTMLDivElement;
    if (EventTarget.id === "seemore") {
      setHidden(!hidden);
    }
  };
  const [hidden, setHidden] = useState<boolean>(true);
  return (
    <LeftColumn>
      <ShortCut isprofile={true} click={toggleClick} image={icons.avatar} text="Halit Derya"></ShortCut>
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
    </LeftColumn>
  );
}

export default LeftColumnComponent;
