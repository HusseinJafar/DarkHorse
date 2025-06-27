const hamburgerButton=document.getElementById("hamburger");

const sideBar=document.getElementById("side-bar");

function openSideBar(){

    sideBar.classList.add("active");
};

hamburgerButton.addEventListener("click",openSideBar);