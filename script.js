// For future interactivity if needed
console.log("Welcome to my portfolio site!");
// Typewriter Effect
const textElement = document.querySelector(".typewriter");
const textArray = ["Web Developer", "Java Enthusiast", "AI Explorer"];
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
  if (index >= textArray.length) index = 0;
  currentText = textArray[index];

  let displayedText = isDeleting
    ? currentText.substring(0, charIndex--)
    : currentText.substring(0, charIndex++);

  textElement.textContent = displayedText;

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index++;
    setTimeout(type, 200);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Reveal sections on scroll
window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

// Optional: Smooth scroll (for future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

console.log("Portfolio JS loaded");
