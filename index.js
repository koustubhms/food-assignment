

const submitButton = document.getElementById("submit-button");
const input = document.getElementById("food-input");
const cards = document.querySelectorAll(".card");
var nav = document.getElementById("nav-box");

submitButton.addEventListener("click", handleSubmit);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSubmit();
});

function handleSubmit() {
  const value = input.value.toLowerCase();
//If input value is fries 
  if (value === "fries") {

//first it will append image to nav bar
    let image=document.createElement("img");
    image.src = "https://i.ibb.co/TWbdBXv/FRIES-500x500px.png";
    image.style.width="5%";
    nav.appendChild(image);

//then it will check the index no of card and accordingly show css effect
    cards.forEach((card, index) => {
      if (index === 0) {
        card.style.transition= 'all 1.2s ease-in-out';
        card.style.transform='translateX(130%) scale(2.0)';
      }else if(index===1){
        card.style.transition= 'all 1.2s ease-in-out';
        card.style.transform='translateX(140%) scale(0.6)';
      }else{
        card.style.transition= 'all 1.2s ease-in-out';
        card.style.transform='translateX(60%) scale(0.6)';
      }
    });
    
  } 
//If input value is pepsi 
  else if (value === "pepsi") {

//first it will append image to nav bar
    let image=document.createElement("img");
    image.src = "https://i.ibb.co/3Mrd1Vd/PEPSI-500x500px.png";
    image.style.width="5%";
    nav.appendChild(image);

//then it will check the index no of card and accordingly show css effect
    cards.forEach((card, index) => {
      if (index === 1) {
        card.style.transition= 'all 1.2s ease-in-out';
        card.style.transform='scale(2.0)';
      } else if (index === 0) {
        card.style.transition= 'all 1.2s ease-in-out';
        card.style.transform='translateX(-40%) scale(0.6)';
      } else {
        card.style.transition= 'all 1.2s ease-in-out';
        card.style.transform='translateX(40%) scale(0.6)';
      }
    });
  } 
//If input value is popcorn 
   else if (value === "popcorn") {
//first it will append image to nav bar
    let image=document.createElement("img");
    image.src = "https://i.ibb.co/nC96sbb/POPCORN-500x500-px.png";
    image.style.width="5%";
    nav.appendChild(image);

//then it will check the index no of card and accordingly show css effect
    cards.forEach((card, index) => {
        if (index === 2) {
            card.style.transition= 'all 1.2s ease-in-out';
            card.style.transform='translateX(-130%) scale(2.0)';
          }else if(index===1){
            card.style.transition= 'all 1.2s ease-in-out';
            card.style.transform='translateX(-140%) scale(0.6)';
          }else{
            card.style.transition= 'all 1.2s ease-in-out';
            card.style.transform='translateX(-60%) scale(0.6)';
          }
    });
  }

}

