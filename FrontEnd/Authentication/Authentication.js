//sideBar functionality
const openBtn = document.getElementById("open");

const closeBtn = document.getElementById("close");

const sideBar = document.getElementById("side-bar");

const hamburger = document.getElementById("hamburger");

function openSideBar() {
  sideBar.classList.add("active");
  hamburger.style.display = "none";
}

function closeSideBar() {
  sideBar.classList.remove("active");
  hamburger.style.display = "block";
}

openBtn.addEventListener("click", openSideBar);

closeBtn.addEventListener("click", closeSideBar);

sideBar.addEventListener("click", closeSideBar);
