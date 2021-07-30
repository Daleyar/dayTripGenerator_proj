
let destinations = ['Manhattan','Brooklyn','StatenIsland'];
let restaurants = ['Hibachi','Pizza','IceCreamery'];
let entertainments = ['NightClub','MovieTheater','Circus'];
let transportations =['Car','Train','Bus']

function getRandomElementFromArray(array) {
    let randomNumber = Math.floor(Math.random()*array.length);
    let element = array[randomNumber]
    return element;
} 

let destination = getRandomElementFromArray(destinations);
let restaurant = getRandomElementFromArray(restaurants);
let entertainment = getRandomElementFromArray(entertainments);
let transportation = getRandomElementFromArray(transportations);

