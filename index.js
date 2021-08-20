const svgMenu = document.querySelector('.svg-menu')
const button = document.querySelector('.button')
const burgerMenu = document.querySelector('.burger-menu')
const closeIcon = document.querySelector('.close-icon')
const cardContent = document.querySelectorAll('.card-content')
const button1 = document.querySelectorAll('.button1')

svgMenu.addEventListener('click', openBurgerMenu)
closeIcon.addEventListener('click', openBurgerMenu)

for (let i = 0; i < cardContent.length; i++) {
    cardContent[i].addEventListener('mouseover', hoverCard)
    cardContent[i].addEventListener('mouseout', hoverCard)

    function hoverCard() {
        cardContent[i].classList.toggle('hover')
        button1[i].classList.toggle('hover-btn')
    }
}


function openBurgerMenu() {
    burgerMenu.classList.toggle('open');
}
