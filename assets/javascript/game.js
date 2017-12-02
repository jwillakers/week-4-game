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

var randomnumber = 0
var losses = 0
var wins = 0
var bluecrystal = Math.floor(Math.random() * 11 + 1);
var greencrystal = Math.floor(Math.random() * 11 + 1);
var yellowcrystal = Math.floor(Math.random() * 11 + 1);
var redcrystal = Math.floor(Math.random() * 11 + 1);
var restartgame = 0
var generatedScore = 0
var totalscore = 0


function crystalCollector (result) {

// declare and initialize random number
var randomnumber = Math.floor(Math.random() * 70) + 50;

$("#randomnumber").html(randomnumber);

}
// value from each crystal

$("#bluecrystal").on("click", function() {
generatedScore = generatedScore + bluecrystal
$("#generatedScore").text(generatedScore);
console.log(bluecrystal)

})

$("#greencrystal").on("click", function() {
// $("#totalscore").text(greencrystal);
generatedScore = generatedScore + greencrystal
$("#generatedScore").text(generatedScore)
console.log(greencrystal)

})

$("#redcrystal").on("click", function() {
// $("#totalscore").text(greencrystal);
generatedScore = generatedScore + redcrystal
$("#generatedScore").text(generatedScore)
console.log(redcrystal)

})

$("#yellowcrystal").on("click", function() {
// $("#totalscore").text(greencrystal);
generatedScore = generatedScore + yellowcrystal
$("#generatedScore").text(generatedScore);
push("generatedScore");
console.log(yellowcrystal)

})

// see if totalscore equals randomnumber or is more than randomnumber

	if(totalscore === randomnumber) {
	// $("#win-lose").text("<h2>You Won!</h2>");
    $("#wins").text(totalscore[0]);
	this.wins++
	console.log(wins);
	$("#wins").text(wins)
// reset game
	restartgame = randomnumber [0];
	$("randomnumber").text(randomnumber)
	totalscore = 0;
	console.log(randomnumber);
	

}

else if(totalscore > randomnumber) {
	losses--;
	$("#losses").text(totalscore + losses);
    
		}
	




crystalCollector()




