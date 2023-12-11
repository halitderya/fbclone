import Body from "./Body";
import LeftColumn from "./LeftColumn";
import TopMenu from "./TopMenu";
import RightColumn from "./RightColumn";
import Footer from "./Footer";
import MasterContainer from "./MasterContainer";
import MidColumn from "./MidColumn";
import { styled, ThemeProvider } from "styled-components";
import { theme } from "../../assets/theme";

const Scaffoldin = styled.div`
  background-color: ${(props) => props.theme.lightgray};
  overflow: hidden;
`;
function Scaffolding() {
  return (
    <ThemeProvider theme={theme}>
      <Scaffoldin>
        <MasterContainer $divwidth={100} $divpadding={0}>
          <TopMenu></TopMenu>
          <Body>
            <LeftColumn></LeftColumn>
            <MidColumn></MidColumn>
            <RightColumn></RightColumn>
          </Body>
          <Footer></Footer>
        </MasterContainer>
      </Scaffoldin>
    </ThemeProvider>
  );
}

export default Scaffolding;
