/* menu showcas function component */
const menuTogle = document.querySelector(".header-mob__btn");
const navShow = document.querySelector('[data-action="nav__list"]');
const menuOpen = document.querySelector('[data-action="header-button__open"]');
const menuClose = document.querySelector('[data-action="header-button__close"]');

menuTogle.addEventListener('click',  () => {
    navShow.classList.toggle("active");
    menuOpen.classList.toggle("active");
    menuClose.classList.toggle("active");
})


const accordion = document.getElementsByClassName('workspace__bottom-block');

for (i = 0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}