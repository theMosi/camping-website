console.log("Naya Injoor JaHa");
let father = document.querySelector('body');

let navBtnElem = document.querySelector('.nav__btn');

let navOpen = false

navBtnElem.addEventListener('click', () => {
if(navOpen){
    navBtnElem.classList.remove('nav__btn--open');
    navOpen=false;
}else {
    navBtnElem.classList.add('nav__btn--open');
    navOpen=true;
}
})