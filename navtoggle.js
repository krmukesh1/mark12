const Open = document.querySelector("#open");
const Closed = document.querySelector("#closed");
const navLinks = document.querySelector("#navLinks");

function openMenu() {
  navLinks.style.right = "0";
}
function closedMenu() {
  navLinks.style.right = "-200px";
}
Open.addEventListener("click", openMenu);
Closed.addEventListener("click", closedMenu);
