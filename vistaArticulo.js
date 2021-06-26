const listOfCards = document.getElementsByClassName("img-article-page");
const listOfCardsFromBT = document.getElementsByClassName("card");
console.log(listOfCards);
console.log(listOfCardsFromBT);
let arryBT = [...listOfCardsFromBT]
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
  arryBT.forEach(card => {
    if(card.getBoundingClientRect().top < window.innerHeight){
      card.classList.add("card-animation-y");
    }
  });
})