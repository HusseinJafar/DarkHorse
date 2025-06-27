const openBtn=document.getElementById("openButton");

const closeBtn=document.getElementById("close");

const sideBar=document.getElementById("here");

closeBtn.addEventListener("click",close);

openBtn.addEventListener("click",open);

function close(){

    sideBar.classList.remove("active");

  
}

document.getElementById("openButton").addEventListener("click", function(e) {
    e.preventDefault(); // prevents navigation
    open();
  });