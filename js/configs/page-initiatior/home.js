import { mainContent, asideContent } from "../../dom-elements/index.js";
import { homeMain, homeAside } from "../../pages/home.js";

function homeInitiator() {
  document.title = "MAZ | Home Page";
  mainContent.innerHTML = homeMain;
  asideContent.innerHTML = homeAside;
}

export default homeInitiator;
