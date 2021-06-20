const buttonLeft = document.getElementById("button-carousel-left");
const carouselActive = document.getElementsByClassName("carousel-item active")[0];
const itemUnoCarousel = document.getElementById("item-1-carousel");
const miniCarrouselItems = document.getElementsByClassName("carrouselItem");
const miniCarrouselImages = document.getElementsByClassName("img-item-carrousel");
const mainCarrouselContainer = document.getElementById('carouselExampleControls');
const amountOfImgInCarrousel =  mainCarrouselContainer.children.length;
console.log("Children amount", amountOfImgInCarrousel);

buttonLeft.addEventListener('click', () => {
    console.log("Previus");
})

const buttonRight = document.getElementById("button-carousel-right");
let iteradorMiniCarrousel = 0;
let currentPositionCardHover = -1;
// buttonRight.addEventListener('click', () => {
//     console.log("Next");
//     console.log(miniCarrouselItems);
//     let arry = [...miniCarrouselItems] 
//     console.log(arry);
//     // let currentPositionCardHover = -1;
//     for(let i= 0; i<arry.length; i++){
//       if(arry[i].className ==="carrouselItem cardHover"){
//         arry[i].className = "carrouselItem"
//         if(i !== arry.length -1){
//           currentPositionCardHover = i;
//         }else{
//           currentPositionCardHover = -1;
//         }
//         console.log(currentPositionCardHover);
//       }
//     }
//     arry[currentPositionCardHover+1].className = "carrouselItem cardHover"
//     console.log(currentPositionCardHover);
// })

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

//JS para la animación de cards apenas aparecen en el viewport
const listOfCards = document.getElementsByClassName("card");
console.log(listOfCards);
let arry = [...listOfCards] 
console.log(arry);
//This actually give you values relative to the top left corner of the browser window
window.addEventListener('scroll', function () {
  // console.log(window.innerHeight);
  // console.log(firstCard.getBoundingClientRect().top);
  arry.forEach(card => {
    if(card.getBoundingClientRect().top < window.innerHeight){
      card.classList.add("card-animation");
    }
  });
})

//Eventos para manejar el touch del carrousel
let x0 = null;
function unify(e) { return e.changedTouches ? e.changedTouches[0] : e };
function lock(e) { x0 = unify(e).clientX; console.log(x0); };
let i = 0;

function move(e) {
  if(x0 || x0 === 0) {
    let dx = unify(e).clientX - x0, s = Math.sign(dx);
  
    if( s> 0) {
      console.log("move to right");
      console.log("Next");
      console.log(miniCarrouselItems);
      let arry = [...miniCarrouselItems]
      let arryImages = [...miniCarrouselImages] 
      console.log(arry);
      // let currentPositionCardHover = -1;
      for(let i= 0; i<arry.length; i++){
        if(arry[i].className ==="carrouselItem cardHover"){
          arry[i].className = "carrouselItem"
          arryImages[i].className = "img-item-carrousel w-100"
          console.log(arry.children)
          if(i !== 0){
            currentPositionCardHover = i;
          }else{
            currentPositionCardHover = arry.length;
          }
          console.log(currentPositionCardHover);
        }
      }
      arry[currentPositionCardHover-1].className = "carrouselItem cardHover"
      arryImages[currentPositionCardHover-1].className = "img-item-carrousel w-100 opacity-lower"
      console.log(currentPositionCardHover);
    }else{
      console.log("move to left");
      console.log("Next");
      console.log(miniCarrouselItems);
      let arry = [...miniCarrouselItems] 
      let arryImages = [...miniCarrouselImages] 
      console.log(arry);
      console.log(arryImages);
      // let currentPositionCardHover = -1;
      for(let i= 0; i<arry.length; i++){
        if(arry[i].className ==="carrouselItem cardHover"){
          arry[i].className = "carrouselItem"
          arryImages[i].className = "img-item-carrousel w-100"
          console.log(arry.children)
          if(i !== arry.length -1){
            currentPositionCardHover = i;
          }else{
            currentPositionCardHover = -1;
          }
          console.log(currentPositionCardHover);
        }
      }
      arry[currentPositionCardHover+1].className = "carrouselItem cardHover"
      arryImages[currentPositionCardHover+1].className = "img-item-carrousel w-100 opacity-lower"
      console.log(currentPositionCardHover);
      }
      
    x0 = null
  }
};
mainCarrouselContainer.addEventListener('mousedown', lock, false);
mainCarrouselContainer.addEventListener('touchstart', lock, false);
mainCarrouselContainer.addEventListener('mouseup', move, false);
mainCarrouselContainer.addEventListener('touchend', move, false);