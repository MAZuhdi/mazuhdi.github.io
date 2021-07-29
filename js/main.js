const toggleMenu = document.getElementById("toggle");
const drawerMenu = document.getElementById("drawer");

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
