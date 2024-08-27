let menuBars = document.querySelector('.icon-bars-menu__nav');
let closeMenu = document.querySelector('.icon-menu-xmark__nav')
let burguerMenu = document.querySelector('.cont-burguer-menu__nav')
let mainElement = document.getElementsByTagName('main')[0];


menuBars.addEventListener('click', showBurguerMenu)
closeMenu.addEventListener('click', hideBurguerMenu)

function showBurguerMenu() {
    console.log('click')
    if(closeMenu.classList.contains('icon-xmark-disabled__nav')) {
        console.log('entro al if')
        menuBars.classList.remove('icon-bars-enabled__nav')
        menuBars.classList.add('icon-bars-disabled-menu__nav')
        closeMenu.classList.remove('icon-xmark-disabled__nav')
        closeMenu.classList.add('icon-menu-xmark-active__nav')
        burguerMenu.classList.add('open')
        mainElement.style.opacity = '50%'
        mainElement.style.position = 'relative'
    }
    
}

function hideBurguerMenu() {
    if(menuBars.classList.contains('icon-bars-disabled-menu__nav')) {
        closeMenu.classList.remove('icon-menu-xmark-active__nav')
        closeMenu.classList.add('icon-xmark-disabled__nav')
        menuBars.classList.remove('icon-bars-disabled-menu__nav')
        menuBars.classList.add('icon-bars-enabled__nav')
        burguerMenu.classList.remove('open')
        burguerMenu.style.zIndex = '1000'
        mainElement.style.position = 'relative'
        mainElement.style.opacity = '100%'
    }
}


