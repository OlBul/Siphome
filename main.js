const headerButton = document.querySelectorAll('.header__button');
const headerMenu = document.querySelector('.header__menu');
const headerLogoText = document.querySelector('.header__logo-text');
const headerNav = document.querySelector('.header__nav');
const logoTextActive = document.querySelector('.logo-text__active');
const headerLogoImg = document.querySelector('.header__logo-img');
const header = document.querySelector('.header');
//headerMenu.addEventListener('click', getMenu());

headerMenu.addEventListener('click', () => {
    if (headerMenu.innerHTML == 'Menu') {
        headerMenu.innerHTML = 'Close';
        headerLogoText.innerHTML = 'Siphome Menu';
        headerLogoText.className = 'logo-text__active';
        headerLogoImg.style.display = 'none';
        
    } else {
        headerMenu.innerHTML = 'Menu';
        headerLogoText.innerHTML = 'Siphome';
        headerLogoText.className = 'header__logo-text';
        headerLogoImg.style.display = 'block';
        //Hheader.style.background = '#262b35'
    }
   // headerLogoText.classList.toggle ('logo-text__active');
    //headerLogoText.innerHTML = 'Siphome Menu';
    headerMenu.classList.toggle('menu-active');
    document.body.classList.toggle('lock');
   // headerButton.classList.toggle('button');
    
    headerNav.classList.toggle('nav__active');
   for (const btn of headerButton){
        btn.classList.toggle('button-active');
    }
    //headerButton.classList.toggle('button-active');
})

//==============================================================

/*const menuActive = document.querySelector('.menu-active');

headerMenu.addEventListener('click', () => {
    headerMenu.classList.toggle('menu-active');
    document.body.classList.toggle('lock');
    headerLogoImg.style.display = 'none';
    headerMenu.innerHTML = 'Close';
    headerLogoText.innerHTML = 'Siphome Menu';
});

menuActive.addEventListener('click', () => {
    headerLogoImg.style.display = 'block';
    headerMenu.innerHTML = 'Menu';
})*/

