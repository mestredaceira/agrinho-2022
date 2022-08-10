var nav1 = document.querySelector('.um');
var nav2 = document.querySelector('.dois');
var nav3 = document.querySelector('.tres');

var modoClaro = document.querySelector('.modo_claro');
var modoEscuro = document.querySelector('.modo_escuro');

var fundo = document.querySelector('.fundo');

var titulo = document.querySelector('.titulo');
var frase = document.querySelector('.frase');

modoEscuro.addEventListener('click', function(){
    nav1.classList.add('nav_fonte');
    nav2.classList.add('nav_fonte');
    nav3.classList.add('nav_fonte');

    fundo.classList.add('fundo_escuro');
    
    titulo.classList.add('fonte_clara');
    frase.classList.add('fonte_clara');
});

modoClaro.addEventListener('click', function(){
    nav1.classList.remove('nav_fonte');
    nav2.classList.remove('nav_fonte');
    nav3.classList.remove('nav_fonte');

    fundo.classList.remove('fundo_escuro');
    
    titulo.classList.remove('fonte_clara');
    frase.classList.remove('fonte_clara');
});