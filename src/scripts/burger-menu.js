var hamburger = document.querySelector('.burger');
var close = document.querySelector('.close');
var header = document.querySelector('.header');
var body = document.querySelector('body');
var contentcenter = document.querySelector('.hero__content');

var closeitem = document.querySelector('.menu__link');


hamburger.addEventListener('click', () =>{
header.classList.add('header_fulscreen')
  body.classList.add('body_screen')
contentcenter.classList.add('center')
})

close.addEventListener('click', () =>{
 header.classList.remove('header_fulscreen'),
 body.classList.remove('body_screen')
 contentcenter.classList.remove('center')
})



closeitem.addEventListener('click', () =>{
    header.classList.remove('header_fulscreen'),
    body.classList.remove('body_screen'),
    contentcenter.classList.remove('center')
})