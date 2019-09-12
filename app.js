const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');
const hamburger = document.querySelector('.hamburger');

const tl = new TimelineMax();
tl.fromTo(hero, 1, {height:"0%"}, {height:"100%", ease:Power2.easeInOut });
tl.fromTo(hero, 1, {width:"100%"}, {width:"80%", ease:Power2.easeInOut });


