const buttonLeft = document.getElementById("button-carousel-left");
const carouselActive = document.getElementsByClassName("carousel-item active")[0];
const itemUnoCarousel = document.getElementById("item-1-carousel");

buttonLeft.addEventListener('click', () => {
    console.log("Previus");
})

const buttonRight = document.getElementById("button-carousel-right");

buttonRight.addEventListener('click', () => {
    console.log("Next");
})

// window.onload = function() {
//     itemUnoCarousel.classList.add("carousel-animation")
// };
// if(window.screen.width) {
//     console.log("Estas en pantalla pequeña");
//     buttonLeft.click();
// }
var myCarousel = document.querySelector('#carouselExampleControls')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
})