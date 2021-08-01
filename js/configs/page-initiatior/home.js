import { mainContent, asideContent } from "../../dom-elements/index.js";
import { homeMain, homeAside } from "../../pages/home.js";

function homeInitiator() {
  mainContent.innerHTML = homeMain;
  asideContent.innerHTML = homeAside;
}

export default homeInitiator;
