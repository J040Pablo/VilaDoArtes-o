let botaoMenu = document.getElementById('botao-menu')
let menuLateral = document.getElementById('menu-lateral');
let escurecedor = document.getElementById('escurecedor');

function adjustLateralHeight() {
    let tamanhoCard = document.querySelector(".text-contents").getBoundingClientRect().height;
    document.querySelector('.lateral').style.height = (tamanhoCard - tamanhoCard * 0.30) + 'px';
}

document.addEventListener("DOMContentLoaded", () => {
    adjustLateralHeight();
});

window.addEventListener("resize", () => {
    adjustLateralHeight();
});


botaoMenu.addEventListener('click', ()=> {
    if (menuLateral.style.display == 'flex') {
        menuLateral.style.display = 'none'
        
    } else {
        menuLateral.style.display = 'flex'
    }
})

menuLateral.addEventListener('click', ()=> {
    menuLateral.style.display = 'none'
})
