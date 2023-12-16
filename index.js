function scuberGreetingForFeet(rideDistance){
  let greeting 
  if(rideDistance <= 400){
    greeting = 'This one is on me!'
  } else if(rideDistance > 400 && rideDistance <= 2000){
    greeting = 'That will be twenty bucks.'
  } else if(rideDistance > 2000 && rideDistance<= 2500){
    greeting = 'I will gladly take your thirty bucks.'
  } else {
    greeting = 'No can do.'
  }
  return greeting
}

let city
function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."
}
ternaryCheckCity("NYC")
ternaryCheckCity("Pittsburgh")

let generosity
function switchOnCharmFromTip(generosity){
  switch(generosity){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default : 
      return 'Bye.'
  }     
  return switchOnCharmFromTip
}