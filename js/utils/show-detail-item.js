import { mainContent } from "../dom-elements/index.js";
import portfoliosDatas from "../datas/portfolios.js";
import { portfoliosHome } from "../pages/portfolios.js";

function showDetailItem(id) {
  const indexArray = id;
  const data = portfoliosDatas[indexArray];
  mainContent.innerHTML = portfoliosHome({
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
}

export default showDetailItem;
