const showMenu = document.querySelector("#showMenu");
const topNav = document.querySelector("#topNav");

showMenu.addEventListener('click', () => {
    topNav.classList.toggle("hide");
})
