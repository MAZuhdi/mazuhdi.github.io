import { homeMain, homeAside } from "../pages/home.js";
import { portfoliosHome, portfoliosAside } from "../pages/portfolios.js";
import { mainContent, asideContent } from "../dom-elements/index.js";
import portfoliosDatas from "../datas/portfolios.js";
import showDetailItem from "../utils/show-detail-item.js";
import skeleton from "../elements/skeleton.js";

function navigation(pageName) {
  setTimeout(() => {
    switch (pageName) {
      case "":
      case "/home":
        mainContent.innerHTML = homeMain;
        asideContent.innerHTML = homeAside;
        break;
      case "/portfolios":
        let portfoliosElement = "";
        portfoliosDatas.forEach(function (portfolio) {
          // console.log(portfolio);
          portfoliosElement += portfoliosAside({
            id: portfolio.id,
            title: portfolio.title,
            role: portfolio.role,
            type: portfolio.type,
          });
        });
        showDetailItem(1);
        asideContent.innerHTML = "";
        asideContent.innerHTML = portfoliosElement;
        const itemCardList = document.getElementsByClassName("item-card-list");
        for (let index = 0; index < itemCardList.length; index++) {
          itemCardList[index].addEventListener("click", function (e) {
            // alert("ok");
            // console.log(e.target.id);
            showDetailItem(e.target.id);
          });
        }
      default:
        // window.location.hash = "/home";
        break;
    }
  }, 1500);
}

export { navigation };
