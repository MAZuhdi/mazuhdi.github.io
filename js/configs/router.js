import { homeMain, homeAside } from "../pages/home.js";
import { portfoliosMain, portfoliosAside } from "../pages/portfolios.js";
import { completionsMain, completionsAside } from "../pages/completions.js";
import { mainContent, asideContent } from "../dom-elements/index.js";
import portfoliosDatas from "../datas/portfolios.js";
import completionsDatas from "../datas/completions.js";
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
        mainContent.innerHTML = showDetailItem(0);
        asideContent.innerHTML = "";
        asideContent.innerHTML = portfoliosElement;
        const itemCardList = document.getElementsByClassName("item-card-list");
        for (let index = 0; index < itemCardList.length; index++) {
          itemCardList[index].addEventListener("click", function (e) {
            // alert("ok");
            // console.log(e.target.id);
            mainContent.innerHTML = showDetailItem(e.target.id);
          });
        }
        break;
      case "/completions":
        let completionsElement = "";
        completionsDatas.forEach(function (completion) {
          // console.log(completion);
          completionsElement += completionsAside({
            id: completion.id,
            title: completion.title,
            publisher: completion.publisher,
            year: completion.year,
          });
        });
        mainContent.innerHTML = showDetailItem(0);
        asideContent.innerHTML = "";
        asideContent.innerHTML = completionsElement;
        const itemCardListCompletion =
          document.getElementsByClassName("item-card-list");
        for (let index = 0; index < itemCardListCompletion.length; index++) {
          itemCardListCompletion[index].addEventListener("click", function (e) {
            // alert("ok");
            // console.log(e.target.id);
            mainContent.innerHTML = showDetailItem(e.target.id);
          });
        }
      default:
        // window.location.hash = "/home";
        break;
    }
  }, 1500);
}

export { navigation };
