
let destinations = ['Manhattan','Brooklyn','StatenIsland'];
let restaurants = ['HibachiBanzai','PizzaZone','CrazyCannolis'];
let entertainments = ['NightClub','MovieTheater','Circus'];
let transportations =['Car','Train','Bus']

function getRandomElementFromArray(array) {
    let randomNumber = Math.floor(Math.random()*array.length);
    let element = array[randomNumber]
    return element;
} 

let counter = 0
while (counter == 0){
    let destination = getRandomElementFromArray(destinations);
    let restaurant = getRandomElementFromArray(restaurants);
    let entertainment = getRandomElementFromArray(entertainments);
    let transportation = getRandomElementFromArray(transportations);
    let results = `Destination: ${destination}\nRestaurant: ${restaurant}\nEntertainment: ${entertainment}\nTransportation: ${transportation}`;
if (confirm(`Press OK to confirm your day trip.\nPress Cancel to have destinations re-selected. \n\n${results}`)) {
    counter = 1;
    console.log(results);
  }
  else{
      continue;
  }
}
