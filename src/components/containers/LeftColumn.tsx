import styled from "styled-components";
import ShortCut from "../Shortcuts";
import useravatar from "../../assets/user_avatar.jpg";
import downarrow from "../../assets/down-arrow.svg";
import * as icons from "../../assets/shortcut-icons";
import { SyntheticEvent } from "react";

const LeftColumn = styled.div`
  width: 18%;
  float: left;
  padding-top: 20px;
`;

const toggleClick = (event: SyntheticEvent) => {
  console.log((event.target as HTMLLabelElement).id);
};
function LeftColumnComponent() {
  return (
    <LeftColumn>
      <ShortCut click={toggleClick} image={useravatar} text="Halit Derya"></ShortCut>
      <ShortCut issprite={true} offset="0 -288px" text="Find Friends" id="findfriends"></ShortCut>
      <ShortCut issprite={true} click={toggleClick} offset="0 -432px" text="Memories"></ShortCut>
      <ShortCut issprite={true} click={toggleClick} offset="0 -180px" text="Saved"></ShortCut>
      <ShortCut issprite={true} click={toggleClick} offset="0 -36px" text="Groups"></ShortCut>
      <ShortCut issprite={true} click={toggleClick} offset="0 36px" text="Video"></ShortCut>
      <ShortCut click={(e) => toggleClick(e)} image={downarrow} id="seemore" text="See More"></ShortCut>
      <ShortCut image={icons.adc} text="Ad Centre"></ShortCut>
      <ShortCut image={icons.adm} text="Ads Manager"></ShortCut>
      <ShortCut image={icons.climate} text="Climate Crisis"></ShortCut>
      <ShortCut image={icons.events} text="Events"></ShortCut>
      <ShortCut image={icons.feeds} text="Feeds"></ShortCut>
      <ShortCut image={icons.gaming} text="Gaming video"></ShortCut>
      <ShortCut image={icons.meta} text="Meta Quest"></ShortCut>
      <ShortCut image={icons.news} text="News"></ShortCut>
      <ShortCut image={icons.orders} text="Orders and payments"></ShortCut>
    </LeftColumn>
  );
}

export default LeftColumnComponent;
