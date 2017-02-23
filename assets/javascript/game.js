
var chosenNumber = 0;
var numberList = [];
var numbersNeeded = 1
var gameWins =0;
var gameLosses =0;
var jewelArray = ["jewel1", "jewel2", "jewel3", "jewel4"];
var jewel1Value = [];
var jewel2Value = [];
var jewel3Value = [];
var jewel4Value = [];
var valueNeeded1 = 0;
var valueNeeded2 = 0;
var valueNeeded3 = 0;
var valueNeeded4 = 0;
var playerScore = 0;
var pointsAwarded = 1;

//      pusedo notes:

//	assign computer to randomly choose a number between 1 & 120,
//		and display in 'score to match:' box

// show 4 individual jewels (DONE - completed on html) 

 //	make individual jewels a clickable item and assigning them
 //		them a value between 1 & 12

for( var i = 0; i < numbersNeeded; i++) {
	var num = Math.floor(Math.random() * 120 + 1);
	numberList.push(num);
}
chosenNumber = numberList[Math.floor(Math.random() * numberList.length)];
document.getElementById("chosen-number").innerHTML = chosenNumber;
console.log(numberList);

//	make individual jewels a clickable item and assigning them
//		them a value between 1 & 12

// value for jewel 1

for( var i = 0; i < pointsAwarded; i++) {
	var num = Math.floor(Math.random() * 12 + 1);
	jewel1Value.push(num);

}
value1Needed = jewel1Value[Math.floor(Math.random() * jewel1Value.length)];
document.getElementById( "jewel1" ).onclick = function () { 
};
console.log(jewel1Value);

// value for jewel 2


for( var i = 0; i < pointsAwarded; i++) {
	var num = Math.floor(Math.random() * 12 + 1);
	jewel2Value.push(num);

}
value1Needed = jewel2Value[Math.floor(Math.random() * jewel2Value.length)];
document.getElementById( "jewel2" ).onclick = function () { 
};
console.log(jewel2Value);

// value for jewel 3

for( var i = 0; i < pointsAwarded; i++) {
	var num = Math.floor(Math.random() * 12 + 1);
	jewel3Value.push(num);

}
value1Needed = jewel3Value[Math.floor(Math.random() * jewel3Value.length)];
document.getElementById( "jewel3" ).onclick = function () { 
};
console.log(jewel3Value);

// value for jewel 4

for( var i = 0; i < pointsAwarded; i++) {
	var num = Math.floor(Math.random() * 12 + 1);
	jewel4Value.push(num);

}
value1Needed = jewel4Value[Math.floor(Math.random() * jewel4Value.length)];
document.getElementById( "jewel4" ).onclick = function () { 
};
console.log(jewel4Value);

 

 //	make individual jewels a clickable item and assigning them
 //		them a value between 1 & 12

 // assign value to said individual jewels when clicked

 // accumulate (sum) values of clicked jewels and total them
 // 	in the 'your current game score' box

 // with player goal to match computers randomly generated score, have 
 //		game end when scores match, with a scored 'win' or 'loss' 
 //		recorded in the 'losses:' when player score exceeds match goal

 // utilizing refresh button to reset game, computer will randomly
 //		chose a new score to match, as well as reset the value of 
 // 	the jewels randomly with values between 1 & 12

 //	the wins - losses totals will not reset but continue to accumulate
 //	as games is repeatedly reset, but will be at zero win game is 
 // initially started


