import { toggleMenu, drawerMenu, headElement } from "./dom-elements/index.js";

import headInnerHtml from "./elements/head.js";
import { navigation } from "./configs/router.js";
import closeDrawer from "./utils/close-drawer.js";
import skeleton from "./elements/skeleton.js";
console.log("Connected!");

toggleMenu.addEventListener("click", function (e) {
  //   console.log(e);

  // Cara 1
  //   drawerMenu.style.transform = "translateX(0)";

  // Cara 2
  //   if (drawerMenu.classList.contains("show-drawer")) {
  //     drawerMenu.classList.remove("show-drawer"); //nambahin class ke element
  //   } else {
  //     drawerMenu.classList.add("show-drawer"); //nambahin class ke element
  //   }

  // Cara 3
  drawerMenu.classList.toggle("show-drawer");
});

headElement.innerHTML += headInnerHtml;

window.addEventListener("load", (e) => {
  console.log(window.location.hash);
  navigation(window.location.hash.substr(1));
});

window.addEventListener("click", function (e) {
  console.log(e.target.id);
  navigation("/" + e.target.id);
});

closeDrawer();
