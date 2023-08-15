import Body from "../body/Body";
import Footer from "../footer/Footer";
import Topbar from "../topbar/Topbar";
import "./scaf.css";

function Scaf() {
  return (
    <div className="scaf">
      <Topbar></Topbar>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default Scaf;
