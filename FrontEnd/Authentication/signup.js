const hamburgerBtn=document.getElementById("hamburger");

const closeBtn=document.getElementById("close");

const sideBar=document.getElementById("side-bar");

function openSideBar(){
    sideBar.classList.add("active");
    console.log("open")
}

function closeSideBar(){
    sideBar.classList.remove("active");
    console.log("close");
}

hamburgerBtn.addEventListener("click",openSideBar);

closeBtn.addEventListener("click",closeSideBar);