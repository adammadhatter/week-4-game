
var chosenNumber = "";
var numberList = []
var numbersNeeded = 1
var winCounter = 0;
var lossCounter = 1;

chosenNumber = numberList[Math.floor(Math.random() * numberList.length)];


for( var i = 0; i < numbersNeeded; i++) {
	var num = Math.floor(Math.random() * 120 + 1);
	numberList.push(num);
}
console.log(numberList)