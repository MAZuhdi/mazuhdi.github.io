import { mainContent, asideContent } from "../dom-elements/index.js";

function portfoliosSkeleton() {
  mainContent.innerHTML = detailItemSkeleton();
  let asideContentItem = "";
  for (let index = 0; index < 5; index++) {
    asideContentItem += itemCardSkeleton();
  }
  asideContent.innerHTML = asideContentItem;
}

function itemCardSkeleton() {
  return `
  <div
  class="fade"
  style="
    height: 120px;
    margin-bottom: 8px;
    width: 100%;
    background-color: #e5e5e5;
    border-radius: 5px;
    box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.07);
    padding: 10px;
  "
></div>
  `;
}

function detailItemSkeleton() {
  return `
  <div class="fade" style="background-color: #e5e5e5; margin-bottom: 8px; width: 100%; height: 60vh; border-radius: 5px;"></div>
  <div class="fade" style="background-color: #e5e5e5; margin-bottom: 8px; width: 70%; height: 42px; border-radius: 5px;"></div>
  `;
}
export default portfoliosSkeleton;
