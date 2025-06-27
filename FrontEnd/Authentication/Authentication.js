const hamburgerButton=document.getElementById("hamburger");

const closeButton=document.getElementById("close");

const sideBar=document.getElementById("side-bar");

function openSideBar(){

    sideBar.classList.add("active");
};

function closeSideBar(){

    sideBar.classList.remove("active");
}

hamburgerButton.addEventListener("click",openSideBar);

closeButton.addEventListener("click",closeSideBar);