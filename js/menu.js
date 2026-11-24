document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    const open = menu.toggleAttribute("data-open");
    burger.setAttribute("aria-expanded", open);
    burger.querySelectorAll("svg").forEach((s) => s.classList.toggle("hidden"));
  });
});
