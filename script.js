const hamburgerButton = document.querySelector("#hamburger");
const openMenu = document.querySelector("nav ul");

hamburgerButton.addEventListener("click", () => {
  openMenu.classList.toggle("open");
});
