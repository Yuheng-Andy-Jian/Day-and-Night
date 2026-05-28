const themeBtn = document.getElementById("themeBtn");

function updateThemeButton(isNightMode) {
  if (isNightMode) {
    themeBtn.innerHTML = `
      <i class="fa-solid fa-sun"></i>
      <span>Day Mode</span>
    `;
  } else {
    themeBtn.innerHTML = `
      <i class="fa-solid fa-moon"></i>
      <span>Night Mode</span>
    `;
  }
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "night") {
  document.body.classList.add("night-theme");
  updateThemeButton(true);
} else {
  updateThemeButton(false);
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("night-theme");

  const isNightMode =
    document.body.classList.contains("night-theme");

  localStorage.setItem(
    "theme",
    isNightMode ? "night" : "day"
  );

  updateThemeButton(isNightMode);
});