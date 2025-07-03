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

//scroll functionality on the logo 


let logoImage=document.getElementById("image");

let originalSrc="../../Images/logo.SVG"

function changeImageLogo(){

    logoImage.src="../../Images/Blackflower.SVG"
}

function handleScroll(){

    if(window.scrollY > 0){

        changeImageLogo();
    }else{

        logoImage.src=originalSrc;
    }
}

window.addEventListener("scroll",handleScroll);