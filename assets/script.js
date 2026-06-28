const themeButton = document.querySelector(".theme-toggle");
const storedTheme = localStorage.getItem("project-theme");

if (storedTheme === "dark") {
  document.body.classList.add("dark");
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("project-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

document.querySelectorAll(".access-card").forEach((card, index) => {
  card.style.transitionDelay = `${index * 45}ms`;
});
