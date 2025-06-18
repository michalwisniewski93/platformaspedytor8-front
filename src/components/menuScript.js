const menuIcon = document.querySelector('.menuicon')
const menu = document.querySelector('.menu')

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active')
})