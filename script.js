document.addEventListener("DOMContentLoaded", function () {

  const menuButton = document.getElementById("menu-button");
  const dropdownMenu = document.getElementById("dropdown-menu");

  menuButton.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", function () {
    dropdownMenu.classList.remove("show");
  });

  const themeToggle = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌙 Dark Mode";
  }

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      themeToggle.textContent = "🌙 Dark Mode";
      localStorage.setItem("theme", "light");
    } else {
      themeToggle.textContent = "☀️ Light Mode";
      localStorage.setItem("theme", "dark");
    }
  });

});
