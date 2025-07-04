const openBtn = document.getElementById("open");

const closeBtn = document.getElementById("close");

let time = document.getElementById("time");

const now = new Date();

const sideBarContainer = document.querySelector(".side-bar");

function openSideBar() {
  sideBarContainer.classList.add("active");
}

function closeSideBar() {
  sideBarContainer.classList.remove("active");
}

openBtn.addEventListener("click", openSideBar);

closeBtn.addEventListener("click", closeSideBar);

window.addEventListener("scroll", closeSideBar);
