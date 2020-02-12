import "@babel/polyfill";
import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}
import "./scripts/paralax";
import "./scripts/skills";
import "./scripts/works";
import "./scripts/paralax-budda";
import "./scripts/revues";







// ------Главный экран открытие меню--------
var humburger = document.querySelector('.burger__menu');
var close = document.querySelector('.header__close');
var header = document.querySelector('.hero__header');
var handrer = function(e) {
  header.classList.toggle('header_fullcreen');
};


humburger.addEventListener('click', handrer);

close.addEventListener('click', handrer);