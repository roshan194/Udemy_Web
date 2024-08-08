// Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Print the value to the console to test
console.log(randomNumber1);

// Generate the file name based on the random number
var diceImageSource1 = "./images/dice" + randomNumber1 + ".png";

// Set the src attribute of the first <img> element with class "img1"
document.querySelector('.img1').src = diceImageSource1;



var randomNumber2 = Math.floor(Math.random() *6) + 1;

var diceImageSource2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector('.img2').src = diceImageSource2;



// Select the <h1> element
var heading = document.querySelector('h1');

// Determine the winner and change the <h1> text accordingly
if (randomNumber1 > randomNumber2) {
  heading.textContent = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  heading.textContent = "Player 2 Wins!";
} else {
  heading.textContent = "Draw!";
}