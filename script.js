const hamburgerButton = document.querySelector("#hamburger");
const openMenu = document.querySelector("nav ul");

/* Sections */
const aboutSection = document.querySelector("#about");
const resumeSection = document.querySelector("#resume");
const projectsSection = document.querySelector("#projects");

hamburgerButton.addEventListener("click", () => {
  openMenu.classList.toggle("open");
  hamburgerButton.classList.toggle("active");
});

/* Link highlight on scroll */

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (
    scrollPosition >= aboutSection.offsetTop &&
    scrollPosition < resumeSection.offsetTop
  ) {
    console.log("about");
  } else if (
    scrollPosition >= resumeSection.offsetTop &&
    scrollPosition < resumeSection.offsetTop + resumeSection.offsetHeight
  ) {
    console.log("Resume");
  } else if (
    scrollPosition >=
    resumeSection.offsetTop + resumeSection.offsetHeight
  ) {
    console.log("projects");
  }
  {
    console.log("projects");
  }
  // console.log(aboutSection.offsetTop); 498
  // resumeSection: 1135
  // projectsSection 2254
});
