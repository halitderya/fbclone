import Body from "./containers/Body";
import LeftColumn from "./containers/LeftColumn";
import TopMenu from "./containers/TopMenu";
import RightColumn from "./containers/RightColumn";
import Footer from "./containers/Footer";
import MasterContainer from "./containers/MasterContainer";
import MidColumn from "./containers/MidColumn";
import { styled, ThemeProvider } from "styled-components";
import { theme } from "../assets/theme";

const Scaffoldin = styled.div`
  background-color: ${(props) => props.theme.lightgray};
`;
function Scaffolding() {
  return (
    <ThemeProvider theme={theme}>
      <Scaffoldin>
        <MasterContainer $divwidth={100} $divpadding={10}>
          {/*           <TopMenu></TopMenu>
           */}{" "}
          <Body>
            {/*             <LeftColumn></LeftColumn>
             */}{" "}
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
