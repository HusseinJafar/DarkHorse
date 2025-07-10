//sideBar functionality
const openBtn=document.getElementById("open");

const closeBtn=document.getElementById("close");

const sideBar=document.getElementById("side-bar");

const hamburger=document.getElementById("hamburger");


function openSideBar(){

  sideBar.classList.add("active");
  hamburger.style.display="none";

}

function closeSideBar(){

  sideBar.classList.remove("active");
  hamburger.style.display="block"
}

openBtn.addEventListener("click",openSideBar);

closeBtn.addEventListener("click",closeSideBar);

//time displayed on the home screen functionality 

const time=document.getElementById("time");

const now= new Date();

let fullYear=now.getFullYear();

let months=now.getMonth();

let hours=now.getHours();

let minutes=now.getMinutes();

let dayOfTheWeek=now.getDay();

let date=now.getDate();

switch (months) {
  case 0:
    months = "January";
    break;
  case 1:
    months = "February";
    break;
  case 2:
    months = "March";
    break;
  case 3:
    months = "April";
    break;
  case 4:
    months = "May";
    break;
  case 5:
    months = "June";
    break;
  case 6:
    months = "July";
    break;
  case 7:
    months = "August";
    break;
  case 8:
    months = "september";
    break;
  case 9:
    months = "October";
    break;
  case 10:
    months = "November";
    break;
  case 11:
    months = "December";
    break;
}


switch (dayOfTheWeek) {
  case 0:
    dayOfTheWeek = "Sunday";
    break;
  case 1:
    dayOfTheWeek = "Monday";
    break;
  case 2:
    dayOfTheWeek = "Tuesday";
    break;
  case 3:
    dayOfTheWeek = "Wednesday";
    break;
  case 4:
    dayOfTheWeek = "Thursday";
    break;
  case 5:
    dayOfTheWeek = "Friday";
    break;
  case 6:
    dayOfTheWeek = "Saturday";
    break;
}

time.textContent=`Nairobi, Kenya | ${dayOfTheWeek} ${months},${date},${fullYear}|${hours}:${minutes}|EAT`
