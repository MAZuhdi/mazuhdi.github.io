const toggleMenu = document.getElementById("toggle");
const drawerMenu = document.getElementById("drawer");
const mainContent = document.getElementById("main");
const asideContent = document.getElementById("aside");
const headElement = document.getElementsByTagName("head")[0];
const menuItems = document.getElementsByClassName("menu-item");

export {
  toggleMenu,
  drawerMenu,
  mainContent,
  headElement,
  asideContent,
  menuItems,
};
