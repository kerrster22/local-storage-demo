const body = document.querySelector("body");
function setTheme() {
  if (
    localStorage.getItem("theme") === "light" ||
    localStorage.getItem("theme") === null
  ) {
    localStorage.setItem("theme", "dark");
    body.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    body.classList.remove("dark");
  }
}
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", setTheme);

function getTheme() {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
  }
}
getTheme();
