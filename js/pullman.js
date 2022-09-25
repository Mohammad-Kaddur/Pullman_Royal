// Start Menu
let show = document.getElementById("show");
let hide = document.getElementById("hide");
let menu = document.getElementById("menu");

menu.onclick = function () {
  show.style.width = "100%";
};
hide.onclick = function () {
  show.style.width = "0";
};

