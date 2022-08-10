var fundo = document.querySelector('.fundo');

var modoEscuro = document.querySelector('.modo_escuro');
var modoClaro = document.querySelector('.modo_claro');

var nav1 = document.querySelector('.um');
var nav2 = document.querySelector('.dois');
var nav3 = document.querySelector('.tres');

var titulo = document.querySelector('.titulo');
var descricao = document.querySelector('.descricao');
var tituloConteudos = document.querySelector('.titulo_conteudos');

modoEscuro.addEventListener('click', function(){
    fundo.classList.add('fundo_escuro');

    nav1.classList.add('nav_fonte');
    nav2.classList.add('nav_fonte');
    nav3.classList.add('nav_fonte');

    titulo.classList.add('fonte_clara');
    descricao.classList.add('fonte_clara');
    tituloConteudos.classList.add('fonte_clara');
    
});

modoClaro.addEventListener('click', function(){
    fundo.classList.remove('fundo_escuro');

    nav1.classList.remove('nav_fonte');
    nav2.classList.remove('nav_fonte');
    nav3.classList.remove('nav_fonte');

    titulo.classList.remove('fonte_clara');
    descricao.classList.remove('fonte_clara');
    tituloConteudos.classList.remove('fonte_clara');
    
});