
//! responsive navbar
// function resNavbar(){
//     console.log('clicked');
//     var nav = document.getElementById('nav-menu');
//     nav.setAttribute('class','responsive');
// }

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('actived');
    navMenu.classList.toggle('actived');
});




