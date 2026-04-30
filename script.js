const menu = document.getElementById("menu");
const links = document.getElementById("links");

menu.addEventListener("click", () => {
  links.classList.toggle("open");
});

document.querySelectorAll(".links a").forEach((link) => {
  link.addEventListener("click", () => links.classList.remove("open"));
});
