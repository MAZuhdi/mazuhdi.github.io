import { homeMain, homeAside } from "../pages/home.js";
import { portfoliosHome, portfoliosAside } from "../pages/portfolios.js";
import { mainContent, asideContent } from "../dom-elements/index.js";

function navigation(pageName) {
  switch (pageName) {
    case "":
      mainContent.innerHTML = homeMain;
      asideContent.innerHTML = homeAside;
      break;
    case "home":
      mainContent.innerHTML = homeMain;
      asideContent.innerHTML = homeAside;
      break;
    case "portfolios":
      mainContent.innerHTML = portfoliosHome();
      asideContent.innerHTML = "";
      for (let index = 0; index < 5; index++) {
        asideContent.innerHTML += portfoliosAside();
      }
    default:
      break;
  }
}

export { navigation };
