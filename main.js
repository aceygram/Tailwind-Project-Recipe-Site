const burger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
    }
})