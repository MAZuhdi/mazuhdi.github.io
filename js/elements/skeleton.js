import { mainContent, asideContent } from "../dom-elements/index.js";

function skeleton() {
  mainContent.innerHTML = `
    <div class="fade" style="background-color: #e5e5e5; width: 100%; height: 60vh; border-radius: 5px;"></div>
    `;
  asideContent.innerHTML = `
    <div class="fade" style="background-color: #e5e5e5; width: 100%; height: 60vh; border-radius: 5px;"></div>
    `;
}
export default skeleton;
