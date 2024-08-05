let nav = document.getElementById('nav')
let linksNav = document.querySelectorAll('.links__nav')
let logoNav = document.querySelector('.logo__nav')
let footer = document.querySelector('.footer')


if(nav.classList.contains('nav')) {
    linksNav.forEach(link => {
        link.classList.add('links-dark__nav')
    })
    nav.classList.add('dark__nav')
    logoNav.classList.add('logo-dark__nav')
    footer.classList.add('dark__footer')
}