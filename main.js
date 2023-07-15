



const menuBtn = document.querySelector(".menu-btn");
const navigaiton = document.querySelector(".navigation");
const navigaitonItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigaiton.classList.toggle("active");
});

navigaitonItems.forEach((navigaitonItems) =>{
    navigaitonItems.addEventListener("click", () => {
        menuBtn.classList.remove("active");
    navigaiton.classList.remove("active");
    })
});