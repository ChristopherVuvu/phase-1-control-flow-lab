function scuberGreetingForFeet(someValue){
  // Write your code here!
    if(someValue <= 400){
    return 'This one is on me!'
  } else if(someValue >400 || someValue < 2000){
    return 'I will gladly take your thirty bucks.'
  } else if(someValue >2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let isNYC = city == "NYC" ? 'Ok, sounds good.' : 'No go.'
  return isNYC;
}
console.log(city)
function switchOnCharmFromTip(tip){
  // Write your code here!
  let tipOffer;
  switch(tip){
    case "if the tip is generous":
    tipOffer = "Thank you so much.";
    break;
    case "if the tip is not generous":
    tipOffer = "Thank You.";
    break;
    case "if anything else":
    tipOffer = "Bye.";
    }
  }