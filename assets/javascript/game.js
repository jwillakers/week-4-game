// generate random number
// assign crystals random numbers between 1 & 50
// click on crystal
// generate number of crystal
// when clicking any crystal, adds with the previous number until equals the "totalscore"
// if "totalscore" matches "random_result" - player wins, we incriment win counter
// if "totalscore" is more than "random_result" - player loses, we decriment loss counter                
// game restarts when player wins or loses
// new random number is generated every time player wins or loses
  // variables var randomNumber = Math.floor(Math.random() * 50 + 1);

// resets document
$(document).ready(function() {
// declare and initialize random number from 19 - 120
var randomnumber = Math.floor(Math.random() * 101 + 19);
// append randomnumber to randomNumber id
$("#randomnumber").text(randomnumber);

//  random crystal number between 1 -12
var bluecrystal = Math.floor(Math.random() * 11 + 1);
var greencrystal = Math.floor(Math.random() * 11 + 1);
var yellowcrystal = Math.floor(Math.random() * 11 + 1);
var redcrystal = Math.floor(Math.random() * 11 + 1);

var generatedScore = 0;
var losses = 0;
var wins = 0;



// variables for the wins and losses
$("#wins").text(wins);
$("#losses").text(losses);
// adds wins to win-loss
function win(){
	alert("You won!");
	wins++
	$("#wins").text(wins);
	reset();

}

// adds losses to win-loss
function lose(){
	alert("You lost!");
	losses++
	$("#losses").text(losses);
	reset();
	
}

// resets game
function reset () {
// resetss random number
	randomnumber = Math.floor(Math.random() * 101 + 19);
	$("#randomnumber").text(randomnumber);
// resets random numbers of each crystal
	bluecrystal = Math.floor(Math.random() * 11 + 1);
	greencrystal = Math.floor(Math.random() * 11 + 1);
	yellowcrystal = Math.floor(Math.random() * 11 + 1);
	redcrystal = Math.floor(Math.random() * 11 + 1)
	generatedScore = 0
	$("#generatedScore").text(generatedScore);
}

// value from each crystal

$("#bluecrystal").on("click", function() {
generatedScore = generatedScore + bluecrystal;
$("#generatedScore").text(generatedScore);
console.log(bluecrystal)
totalscore();
})

$("#greencrystal").on("click", function() {
generatedScore = generatedScore + greencrystal;
$("#generatedScore").text(generatedScore);
console.log(greencrystal);
totalscore();
})

$("#redcrystal").on("click", function() {
generatedScore = generatedScore + redcrystal;
$("#generatedScore").text(generatedScore);
console.log(redcrystal);
totalscore();
})

$("#yellowcrystal").on("click", function() {
generatedScore = generatedScore + yellowcrystal;
$("#generatedScore").text(generatedScore);
console.log(yellowcrystal);
totalscore();
})
// see if totalscore equals randomnumber

function totalscore(){
	if(randomnumber === generatedScore) {
		win();
		
		}
	else if (randomnumber < generatedScore) {
		lose();
		
		}



	
	};
});





