import { mainContent, asideContent } from "../../dom-elements/index.js";
import { portfoliosAside } from "../../pages/portfolios.js";
import showDetailItem from "../../utils/show-detail-item.js";
import portfoliosDatas from "../../datas/portfolios.js";

function portfoliosInitiator() {
  document.title = "MAZ | Portfolios Page";
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
      scroll(top);
      mainContent.innerHTML = showDetailItem(e.target.id);
    });
  }
}

export default portfoliosInitiator;
