const root = document.documentElement;
const hamburgerButton = document.querySelector("#hamburger");
const openMenu = document.querySelector("nav ul");
const scrollIndicator = document.querySelector(".scroll-indicator");

/* Sections */
const aboutSection = document.querySelector("#about");
const resumeSection = document.querySelector("#resume");
const projectsSection = document.querySelector("#projects");
const contactSection = document.querySelector("#contact");

/* Links */
const aboutLink = document.querySelectorAll('a[href="#about"]');
const resumeLinks = document.querySelectorAll('a[href="#resume"]');
const projectsLink = document.querySelectorAll('a[href="#projects"]');
const contactLink = document.querySelectorAll('a[href="#contact"]');

/* Colors */
const accentColor = getComputedStyle(root)
  .getPropertyValue("--accent-color")
  .trim();
const lightBlueColor = getComputedStyle(root)
  .getPropertyValue("--light-blue-color")
  .trim();

hamburgerButton.addEventListener("click", () => {
  openMenu.classList.toggle("open");
  hamburgerButton.classList.toggle("active");
});

/* Bouncing arrow */

scrollIndicator.addEventListener("click", () => {
  const aboutSection = document.querySelector("#about");
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

/* Link highlight on scroll */
const offset = 500;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + offset;

  [...resumeLinks, ...projectsLink, ...contactLink].forEach((link) => {
    link.style.color = lightBlueColor;
  });

  if (
    scrollPosition >= resumeSection.offsetTop &&
    scrollPosition < projectsSection.offsetTop
  ) {
    resumeLinks.forEach((link) => (link.style.color = accentColor));
  } else if (
    scrollPosition >= projectsSection.offsetTop &&
    scrollPosition < contactSection.offsetTop
  ) {
    projectsLink.forEach((link) => (link.style.color = accentColor));
  } else if (scrollPosition >= contactSection.offsetTop && scrollPosition) {
    contactLink.forEach((link) => (link.style.color = accentColor));
  }

  console.log({
    scrollY: window.scrollY,
    aboutTop: aboutSection.offsetTop,
    resumeTop: resumeSection.offsetTop,
    projectsTop: projectsSection.offsetTop,
    projectsBottom: projectsSection.offsetTop + projectsSection.offsetHeight,
  });
});

console.log("hamburger loaded", hamburgerButton);

/* Cursor light effect */

const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

const delay = 0.7; // Lower = longer delay

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function animateCursor() {
  /* Calculate how much to move the cursor */
  currentX += (mouseX - currentX) * delay;
  currentY += (mouseY - currentY) * delay;

  /* Apply movement to the element visually */
  cursor.style.top = currentY + "px";
  cursor.style.left = currentX + "px";

  requestAnimationFrame(animateCursor);
}

animateCursor();
