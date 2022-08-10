// Para ativar o modo escuro/modo claro.
// obs.: eu sei que a semântica desse código ta horrível, mas essa foi a única forma que eu consegui fazer funcionar.

var titulo1 = document.querySelector('.principal__titulo');
var titulo2 = document.querySelector('.principal__titulo2');
var texto = document.querySelector('.principal__texto');
var descricao = document.querySelector('.sobre__descricao');
var rodapeInfo = document.querySelector('.rodape__info');
var rodapeInfo2 = document.querySelector('.rodape__info2');
var nav1 = document.querySelector('.um');
var nav2 = document.querySelector('.dois');
var nav3 = document.querySelector('.tres');

var fundo = document.querySelector('.fundo');
var rodape = document.querySelector('.rodape');

var modoEscuro = document.querySelector('.modo_escuro');
var modoClaro = document.querySelector('.modo_claro');

modoEscuro.addEventListener('click', function(){
    fundo.classList.add('fundo_escuro');
    rodape.classList.add('rodape_escuro');

    titulo1.classList.add('fonte_clara');
    titulo2.classList.add('fonte_clara');
    texto.classList.add('fonte_clara');
    descricao.classList.add('fonte_clara');
    rodapeInfo.classList.add('fonte_clara');
    rodapeInfo2.classList.add('fonte_clara');
    nav1.classList.add('nav_fonte');
    nav2.classList.add('nav_fonte');
    nav3.classList.add('nav_fonte');
});

modoClaro.addEventListener('click', function(){
    fundo.classList.remove('fundo_escuro');
    rodape.classList.remove('rodape_escuro');

    titulo1.classList.remove('fonte_clara');
    titulo2.classList.remove('fonte_clara');
    texto.classList.remove('fonte_clara');
    descricao.classList.remove('fonte_clara');
    rodapeInfo.classList.remove('fonte_clara');
    rodapeInfo2.classList.remove('fonte_clara');
    nav1.classList.remove('nav_fonte');
    nav2.classList.remove('nav_fonte');
    nav3.classList.remove('nav_fonte');
});