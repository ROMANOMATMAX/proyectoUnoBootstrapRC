const buttonRight = document.getElementById("button-carousel-right");
const buttonLeft = document.getElementById("button-carousel-left");
console.log(buttonRight);
console.log(buttonLeft);
const carouselActive = document.getElementsByClassName("carousel-item active")[0];
const itemUnoCarousel = document.getElementById("item-1-carousel");
const miniCarrouselItems = document.getElementsByClassName("carrouselItem");
const miniCarrouselImages = document.getElementsByClassName("img-item-carrousel");
const tagPFromMiniCarrousel = document.getElementsByClassName("p-from-mc");
console.log(tagPFromMiniCarrousel);
const arryParagraph = [...tagPFromMiniCarrousel];
console.log(arryParagraph);
const mainCarrouselContainer = document.getElementById('carouselExampleControls');
const linkUno = document.getElementById("link-uno")
const linkDos = document.getElementById("link-dos");
const linkTres = document.getElementById("link-tres");
const tematicaUno = document.getElementById("tematicaUno");
const tematicaDos = document.getElementById("tematicaDos");
const tematicaTres = document.getElementById("tematicaTres");
const miniItemCarouselUno = document.getElementById("mini-item-carousel-1");
const miniItemCarouselDos = document.getElementById("mini-item-carousel-2");
const miniItemCarouselTres = document.getElementById("mini-item-carousel-3");
const miniItemCarouselCuatro = document.getElementById("mini-item-carousel-4");
const miniItemCarouselCinco = document.getElementById("mini-item-carousel-5");
const amountOfImgInCarrousel =  mainCarrouselContainer.children.length;
console.log("Children amount", amountOfImgInCarrousel);

if (window.matchMedia("(max-width: 768px)").matches) {
var myCarousel = document.querySelector('#carouselExampleControls')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
})
}

if (window.matchMedia("(min-width: 768px)").matches) {
  var myCarousel = document.querySelector('#carouselExampleControls')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: false,
    // touch: true,
    // pause: true 
  })
  }
  

// buttonLeft.addEventListener('click', () => {
//   buttonLeft.style.display = "none";
//   console.log("move to right");
//   console.log("Next");
//   console.log(miniCarrouselItems);
//   let arry = [...miniCarrouselItems]
//   let arryImages = [...miniCarrouselImages] 
//   console.log(arry);
//   // let currentPositionCardHover = -1;
//   for(let i= 0; i<arry.length; i++){
//     if(arry[i].className ==="carrouselItem cardHover"){
//       arry[i].className = "carrouselItem"
//       arryImages[i].className = "img-item-carrousel w-100"
//       console.log(arry.children)
//       if(i !== 0){
//         currentPositionCardHover = i;
//       }else{
//         currentPositionCardHover = arry.length;
//       }
//       console.log(currentPositionCardHover);
//     }
//   }
//   carousel.to(currentPositionCardHover-1);
//   arry[currentPositionCardHover-1].className = "carrouselItem cardHover"
//   arryImages[currentPositionCardHover-1].className = "img-item-carrousel w-100 opacity-lower"
//   console.log(currentPositionCardHover);
//   buttonLeft.style.display = "flex";
// })


// let iteradorMiniCarrousel = 0;
// let currentPositionCardHover = -1;
// buttonRight.addEventListener('click', () => {
//   buttonRight.style.display = "none";
//   console.log("move to left");
//       console.log("Next");
//       console.log(miniCarrouselItems);
//       let arry = [...miniCarrouselItems] 
//       let arryImages = [...miniCarrouselImages] 
//       console.log(arry);
//       console.log(arryImages);
//       // let currentPositionCardHover = -1;
//       for(let i= 0; i<arry.length; i++){
//         console.log(arry[i].className);
//         if(arry[i].className ==="carrouselItem cardHover"){
//           console.log("hay coincidencia");
//           arry[i].className = "carrouselItem"
//           arryImages[i].className = "img-item-carrousel w-100"
//           console.log(arry.children)
//           if(i !== arry.length -1){
//             currentPositionCardHover = i;
//           }else{
//             currentPositionCardHover = -1;
//           }
//           console.log(currentPositionCardHover);
//         }
//       }
//       carousel.to(currentPositionCardHover+1);
//       arry[currentPositionCardHover+1].className = "carrouselItem cardHover"
//       arryImages[currentPositionCardHover+1].className = "img-item-carrousel w-100 opacity-lower"
//       console.log(currentPositionCardHover);
//       buttonRight.style.display = "flex";
// })

// window.onload = function() {
//     itemUnoCarousel.classList.add("carousel-animation")
// };
// if(window.screen.width) {
//     console.log("Estas en pantalla pequeña");
//     buttonLeft.click();
// }


//JS para la animación de cards apenas aparecen en el viewport
const listOfCards = document.getElementsByClassName("img-article-page");
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
          arry[i].childNodes[3].childNodes[1].className="text-danger mb-0"
          console.log(arry.children)
          if(i !== 0){
            currentPositionCardHover = i;
            activeItem-=1;
          }else{
            currentPositionCardHover = arry.length;
            activeItem=5;
            // mainCarrouselContainer.removeEventListener("mousemove", lock);
            // mainCarrouselContainer.removeEventListener("mouseup", move);
          }
          console.log(currentPositionCardHover);
        }
      }
      carousel.prev();
      arry[currentPositionCardHover-1].className = "carrouselItem cardHover"
      console.log(arry[currentPositionCardHover-1].childNodes[3].childNodes[1].className)
      arry[currentPositionCardHover-1].childNodes[3].childNodes[1].className="text-white mb-0"
      arryImages[currentPositionCardHover-1].className = "img-item-carrousel w-100 opacity-lower"
      console.log(currentPositionCardHover);
    }else if(s<0){
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
          arry[i].childNodes[3].childNodes[1].className="text-danger mb-0"
          console.log(arry.children)
          if(i !== arry.length -1){
            currentPositionCardHover = i;
            activeItem +=1;
          }else{
            currentPositionCardHover = -1;
            activeItem=1;
            // mainCarrouselContainer.removeEventListener("mousemove", lock);
            // mainCarrouselContainer.removeEventListener("mouseup", move);
          }
          console.log(currentPositionCardHover);
        }
      }
      carousel.next();
      arry[currentPositionCardHover+1].className = "carrouselItem cardHover"
      arry[currentPositionCardHover+1].childNodes[3].childNodes[1].className="text-white mb-0"
      arryImages[currentPositionCardHover+1].className = "img-item-carrousel w-100 opacity-lower"
      console.log(currentPositionCardHover);
      }else {
        console.log("doble click");
      }
      
    x0 = null
  }
};
mainCarrouselContainer.addEventListener('mousedown', lock, false);
  mainCarrouselContainer.addEventListener('mouseup', move, false);
  mainCarrouselContainer.addEventListener('touchstart', lock, false);
  mainCarrouselContainer.addEventListener('touchend', move, false);
if (window.matchMedia("(max-width: 768px)").matches) {
  mainCarrouselContainer.addEventListener('touchstart', lock, false);
  mainCarrouselContainer.addEventListener('touchend', move, false);
  mainCarrouselContainer.addEventListener('mousedown', lock, false);
  mainCarrouselContainer.addEventListener('mouseup', move, false);
}


// linkUno.addEventListener('click', () => {
//   console.log("Click a Link 2");
//   tematicaUno.style.display = "block";
//   tematicaDos.style.display = "none";
//   tematicaTres.style.display = "none";
// })

// linkDos.addEventListener('click', () => {
//   console.log("Click a Link 2");
//   tematicaUno.style.display = "none";
//   tematicaDos.style.display = "block";
//   tematicaTres.style.display = "none";
// })

// linkTres.addEventListener('click', () => {
//   console.log("Click a Link 2");
//   tematicaUno.style.display = "none";
//   tematicaDos.style.display = "none";
//   tematicaTres.style.display = "block";
// })

let activeItem = 1;

miniItemCarouselUno.addEventListener('click', (e) => {
  activeItem=1;
  arryParagraph[0].className = "p-from-mc text-white mb-0"
  arryParagraph[1].className = "p-from-mc text-danger mb-0"
  arryParagraph[2].className = "p-from-mc text-danger mb-0"
  arryParagraph[3].className = "p-from-mc text-danger mb-0"
  arryParagraph[4].className = "p-from-mc text-danger mb-0"
  console.log("mini item Uno");
  console.log(e.target.parentNode);
  let arry = [...miniCarrouselItems]
  let arryImages = [...miniCarrouselImages] 
  carousel.to(0);
  arry[0].className="carrouselItem cardHover"
  arry[1].className="carrouselItem"
  arry[2].className="carrouselItem"
  arry[3].className="carrouselItem"
  arry[4].className="carrouselItem"
  arryImages[0].className="img-item-carrousel w-100 opacity-lower";
  arryImages[1].className="img-item-carrousel w-100";
  arryImages[2].className="img-item-carrousel w-100";
  arryImages[3].className="img-item-carrousel w-100";
  arryImages[4].className="img-item-carrousel w-100";
})

miniItemCarouselUno.addEventListener('mouseenter', (e) => {
  console.log("entre");
  console.log(e.target.childNodes[3].childNodes[1])
  e.target.childNodes[3].childNodes[1].className = "text-white mb-0"
})
miniItemCarouselUno.addEventListener('mouseleave', (e) => {
  console.log(activeItem);
  if(activeItem !== 1){
    console.log("entre");
    console.log(e.target.childNodes[3].childNodes[1])
    e.target.childNodes[3].childNodes[1].className = "text-danger mb-0"
  }
})

miniItemCarouselDos.addEventListener('click', () => {
  activeItem=2;
  arryParagraph[0].className = "p-from-mc text-danger mb-0"
  arryParagraph[1].className = "p-from-mc text-white mb-0"
  arryParagraph[2].className = "p-from-mc text-danger mb-0"
  arryParagraph[3].className = "p-from-mc text-danger mb-0"
  arryParagraph[4].className = "p-from-mc text-danger mb-0"
  console.log("mini item Dos");
  let arry = [...miniCarrouselItems]
  let arryImages = [...miniCarrouselImages] 
  carousel.to(1);
  arry[0].className="carrouselItem"
  arry[1].className="carrouselItem cardHover"
  arry[2].className="carrouselItem"
  arry[3].className="carrouselItem"
  arry[4].className="carrouselItem"
  arryImages[0].className="img-item-carrousel w-100";
  arryImages[1].className="img-item-carrousel w-100 opacity-lower";
  arryImages[2].className="img-item-carrousel w-100";
  arryImages[3].className="img-item-carrousel w-100";
  arryImages[4].className="img-item-carrousel w-100";
})
miniItemCarouselDos.addEventListener('mouseenter', (e) => {
    console.log("entre");
  console.log(e.target.childNodes[3].childNodes[1])
  e.target.childNodes[3].childNodes[1].className = "text-white mb-0"
})
miniItemCarouselDos.addEventListener('mouseleave', (e) => {
  console.log(activeItem);
  if(activeItem !==2){
    console.log("entre");
    console.log(e.target.childNodes[3].childNodes[1])
    e.target.childNodes[3].childNodes[1].className = "text-danger mb-0"
  }
})
miniItemCarouselTres.addEventListener('click', () => {
  activeItem=3;
  arryParagraph[0].className = "p-from-mc text-danger mb-0"
  arryParagraph[1].className = "p-from-mc text-danger mb-0"
  arryParagraph[2].className = "p-from-mc text-white mb-0"
  arryParagraph[3].className = "p-from-mc text-danger mb-0"
  arryParagraph[4].className = "p-from-mc text-danger mb-0"
  console.log("mini item Tres");
  let arry = [...miniCarrouselItems]
  let arryImages = [...miniCarrouselImages] 
  carousel.to(2);
  arry[0].className="carrouselItem"
  arry[1].className="carrouselItem"
  arry[2].className="carrouselItem cardHover"
  arry[3].className="carrouselItem"
  arry[4].className="carrouselItem"
  arryImages[0].className="img-item-carrousel w-100";
  arryImages[1].className="img-item-carrousel w-100";
  arryImages[2].className="img-item-carrousel w-100 opacity-lower";
  arryImages[3].className="img-item-carrousel w-100";
  arryImages[4].className="img-item-carrousel w-100";
})
miniItemCarouselTres.addEventListener('mouseenter', (e) => {
  console.log("entre");
  console.log(e.target.childNodes[3].childNodes[1])
  e.target.childNodes[3].childNodes[1].className = "text-white mb-0"
})
miniItemCarouselTres.addEventListener('mouseleave', (e) => {
  console.log(activeItem);
  if(activeItem !==3){
    console.log("entre");
  console.log(e.target.childNodes[3].childNodes[1])
  e.target.childNodes[3].childNodes[1].className = "text-danger mb-0"
  }
})
miniItemCarouselCuatro.addEventListener('click', () => {
  activeItem=4;
  arryParagraph[0].className = "p-from-mc text-danger mb-0"
  arryParagraph[1].className = "p-from-mc text-danger mb-0"
  arryParagraph[2].className = "p-from-mc text-danger mb-0"
  arryParagraph[3].className = "p-from-mc text-white mb-0"
  arryParagraph[4].className = "p-from-mc text-danger mb-0"
  console.log("mini item Tres");
  let arry = [...miniCarrouselItems]
  let arryImages = [...miniCarrouselImages] 
  carousel.to(3);
  arry[0].className="carrouselItem"
  arry[1].className="carrouselItem"
  arry[2].className="carrouselItem"
  arry[3].className="carrouselItem cardHover"
  arry[4].className="carrouselItem"
  arryImages[0].className="img-item-carrousel w-100";
  arryImages[1].className="img-item-carrousel w-100";
  arryImages[2].className="img-item-carrousel w-100";
  arryImages[3].className="img-item-carrousel w-100 opacity-lower";
  arryImages[4].className="img-item-carrousel w-100";
})
miniItemCarouselCuatro.addEventListener('mouseenter', (e) => {
  console.log("entre");
  console.log(e.target.childNodes[3].childNodes[1])
  e.target.childNodes[3].childNodes[1].className = "text-white mb-0"
})
miniItemCarouselCuatro.addEventListener('mouseleave', (e) => {
  console.log(activeItem);
  if(activeItem!==4) {
    console.log("entre");
  console.log(e.target.childNodes[3].childNodes[1])
  e.target.childNodes[3].childNodes[1].className = "text-danger mb-0"
  }
})
miniItemCarouselCinco.addEventListener('click', (e) => {
  activeItem=5;
  arryParagraph[0].className = "p-from-mc text-danger mb-0"
  arryParagraph[1].className = "p-from-mc text-danger mb-0"
  arryParagraph[2].className = "p-from-mc text-danger mb-0"
  arryParagraph[3].className = "p-from-mc text-danger mb-0"
  arryParagraph[4].className = "p-from-mc text-white mb-0"
  console.log("mini item Tres");
  let arry = [...miniCarrouselItems]
  let arryImages = [...miniCarrouselImages] 
  carousel.to(4);
  arry[0].className="carrouselItem"
  arry[1].className="carrouselItem"
  arry[2].className="carrouselItem"
  arry[3].className="carrouselItem"
  arry[4].className="carrouselItem cardHover"
  arryImages[0].className="img-item-carrousel w-100";
  arryImages[1].className="img-item-carrousel w-100";
  arryImages[2].className="img-item-carrousel w-100";
  arryImages[3].className="img-item-carrousel w-100";
  arryImages[4].className="img-item-carrousel w-100 opacity-lower";
})
miniItemCarouselCinco.addEventListener('mouseenter', (e) => {
  console.log("entre");
  console.log(e.target.childNodes[3].childNodes[1])
  e.target.childNodes[3].childNodes[1].className = "text-white mb-0"
})
miniItemCarouselCinco.addEventListener('mouseleave', (e) => {
  if(activeItem !==5){
    console.log("entre");
  console.log(e.target.childNodes[3].childNodes[1])
  e.target.childNodes[3].childNodes[1].className = "text-danger mb-0"
  }
})