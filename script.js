

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  const html = document.documentElement;

  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    icon?.classList.replace("fa-moon", "fa-sun");
  }

  toggle?.addEventListener("click", () => {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      icon?.classList.replace("fa-moon", "fa-sun");
    } else {
      localStorage.setItem("theme", "light");
      icon?.classList.replace("fa-sun", "fa-moon");
    }
  });
});