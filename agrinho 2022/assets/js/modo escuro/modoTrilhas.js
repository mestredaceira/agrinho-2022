var nav1 = document.querySelector('.um');
var nav2 = document.querySelector('.dois');
var nav3 = document.querySelector('.tres');

var titulo = document.querySelector('.principal__titulo');
var subtitulo = document.querySelector('.principal__subtitulo');

var modoClaro = document.querySelector('.modo_claro');
var modoEscuro = document.querySelector('.modo_escuro');

var fundo = document.querySelector('.fundo');

modoEscuro.addEventListener('click', function(){
    nav1.classList.add('nav_fonte');
    nav2.classList.add('nav_fonte');
    nav3.classList.add('nav_fonte');

    fundo.classList.add('fundo_escuro');
    
    titulo.classList.add('fonte_clara');
    subtitulo.classList.add('fonte_clara');
});

modoClaro.addEventListener('click', function(){
    nav1.classList.remove('nav_fonte');
    nav2.classList.remove('nav_fonte');
    nav3.classList.remove('nav_fonte');

    fundo.classList.remove('fundo_escuro');
    
    titulo.classList.remove('fonte_clara');
    subtitulo.classList.remove('fonte_clara');
});