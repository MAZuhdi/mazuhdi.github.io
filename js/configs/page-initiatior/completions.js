import { mainContent, asideContent } from "../../dom-elements/index.js";
import { completionsAside } from "../../pages/completions.js";
import showDetailItem from "../../utils/show-detail-item.js";
import completionsDatas from "../../datas/completions.js";

function completionsInitiator() {
  document.title = "Completions Page";
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

export default completionsInitiator;
