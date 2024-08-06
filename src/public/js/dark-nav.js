let nav = document.getElementById('nav')
let linksNav = document.querySelectorAll('.links__nav')
let logoNav = document.querySelector('.logo__nav')
let footer = document.querySelector('.footer')

window.addEventListener('resize', toDarkNav)



function toDarkNav() {
    if(window.innerWidth >= 1024) {
        linksNav.forEach(link => {
            link.classList.add('links-dark__nav')
        })
        nav.classList.add('dark__nav')
        logoNav.classList.add('logo-dark__nav')
        footer.classList.add('dark__footer')
    } else {
        linksNav.forEach(link => {
            link.classList.remove('links-dark__nav')
        })
        nav.classList.remove('dark__nav')
        logoNav.classList.remove('logo-dark__nav')
        footer.classList.remove('dark__footer')
    }
}