import Body from "./containers/Body";
import LeftColumn from "./containers/LeftColumn";
import TopMenu from "./containers/TopMenu";
import RightColumn from "./containers/RightColumn";
import Footer from "./containers/Footer";
import MasterContainer from "./containers/MasterContainer";
import MidColumn from "./containers/MidColumn";
import styled from "styled-components";

const Scaffoldin = styled.div`
  div {
    border: 1px dotted black;
  }
`;
function Scaffolding() {
  return (
    <Scaffoldin>
      <MasterContainer $divwidth={100} $divpadding={10}>
        <TopMenu></TopMenu>
        <Body>
          <LeftColumn></LeftColumn>
          <MidColumn></MidColumn>
          <RightColumn></RightColumn>
        </Body>

        <Footer></Footer>
      </MasterContainer>
    </Scaffoldin>
  );
}

export default Scaffolding;
