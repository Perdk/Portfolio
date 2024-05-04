let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let sombra = document.getElementById('sombra-menu')

btnMenu.addEventListener('click', () =>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})

sombra.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
}) 

