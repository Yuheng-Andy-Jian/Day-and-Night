const themeBtn = document.getElementById("themeBtn");

/* Load saved theme */
if (localStorage.getItem("theme") === "night") {

  document.body.classList.add("night-theme");

  themeBtn.innerHTML = `
    <i class="fa-solid fa-sun"></i>
    <span>Day Mode</span>
  `;

}

/* Toggle theme */
themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("night-theme");

  if (document.body.classList.contains("night-theme")) {

    localStorage.setItem("theme", "night");

    themeBtn.innerHTML = `
      <i class="fa-solid fa-sun"></i>
      <span>Day Mode</span>
    `;

  } else {

    localStorage.setItem("theme", "day");

    themeBtn.innerHTML = `
      <i class="fa-solid fa-moon"></i>
      <span>Night Mode</span>
    `;

  }

});