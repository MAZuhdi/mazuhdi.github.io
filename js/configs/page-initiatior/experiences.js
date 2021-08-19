import { mainContent, asideContent } from "../../dom-elements/index.js";
import { experiencesAside } from "../../pages/experiences.js";
import showDetailItem from "../../utils/show-detail-item.js";
import experiencesDatas from "../../datas/experiences.js";

function experiencesInitiator() {
  document.title = "experiences Page";
  let experiencesElement = "";
  experiencesDatas.forEach(function (experiences) {
    // console.log(experiences);
    experiencesElement += experiencesAside({
      id: experiences.id,
      title: experiences.title,
      publisher: experiences.publisher,
      year: experiences.year,
    });
  });
  mainContent.innerHTML = showDetailItem(0);
  asideContent.innerHTML = "";
  asideContent.innerHTML = experiencesElement;
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

export default experiencesInitiator;
