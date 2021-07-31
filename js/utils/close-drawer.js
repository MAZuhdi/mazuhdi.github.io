import { drawerMenu, menuItems } from "../dom-elements/index.js";

function closeDrawer() {
  for (let index = 0; index < menuItems.length; index++) {
    menuItems[index].addEventListener("click", function () {
      drawerMenu.classList.toggle("show-drawer");
    });
  }
}

export default closeDrawer;
