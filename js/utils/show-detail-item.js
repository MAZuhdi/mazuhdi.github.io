import completionsDatas from "../datas/completions.js";
import portfoliosDatas from "../datas/portfolios.js";
import experiencesDatas from "../datas/experiences.js";
import { portfoliosMain } from "../pages/portfolios.js";
import { completionsMain } from "../pages/completions.js";
import { experiencesMain } from "../pages/experiences.js";

function showDetailItem(id) {
  // const indexArray = id;
  switch (window.location.hash.substr(1)) {
    case "/portfolios":
      const data = portfoliosDatas[id];
      return portfoliosMain({
        id: data.id,
        cover: data.cover,
        desc: data.desc,
        link: data.link,
        role: data.role,
        title: data.title,
        tools: data.tools,
        type: data.type,
        link: data.link,
      });
    case "/completions":
      const completionData = completionsDatas[id];
      return completionsMain({
        id: completionData.id,
        cover: completionData.cover,
        desc: completionData.desc,
        link: completionData.link,
        publisher: completionData.publisher,
        title: completionData.title,
        year: completionData.year,
        link: completionData.link,
      });
    case "/experiences":
      const experiencesData = experiencesDatas[id];
      return experiencesMain({
        id: experiencesData.id,
        cover: experiencesData.cover,
        desc: experiencesData.desc,
        link: experiencesData.link,
        publisher: experiencesData.publisher,
        title: experiencesData.title,
        year: experiencesData.year,
        link: experiencesData.link,
      });
    default:
      break;
  }
}

export default showDetailItem;
