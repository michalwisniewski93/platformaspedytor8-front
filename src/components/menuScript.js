const menuIcon = document.querySelector('.menuicon')
const menu = document.querySelector('.menu')

menuIcon.addEventListener('touchstart', () => {
    menu.classList.toggle('active')
})