//functionality of the side bar

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

let day = now.getDay();

let month = now.getMonth();

let date=now.getDate();

let year=now.getFullYear();

switch (month) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "Novermber";
    break;
  case 10:
    month = "December";
    break;
}

switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "saturday";
    break;
}

time.textContent = `Nairobi, Kenya | ${day},${month},${date},${year},${now}`;
