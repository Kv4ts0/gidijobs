const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const closeMenu = document.querySelector(".closeMenu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

closeMenu.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
});

document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
