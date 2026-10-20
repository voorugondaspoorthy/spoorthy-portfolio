const themeToggle = document.getElementById("themeToggle");
const year = document.getElementById("year");

// Automatically display the current year
year.textContent = new Date().getFullYear();

// Switch between light and dark themes
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});