$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19) 
   // Selects a random number to be shown at the start of the game 
   // Number should be should be between 19 - 120 
   // 
   $('#randomNumber').text(Random);
   // Appending random number to the randomNumber id in the html doc 
   // 
   var num1= Math.floor(Math.random()*11+1) 
   var num2= Math.floor(Math.random()*11+1) 
   var num3= Math.floor(Math.random()*11+1) 
   var num4= Math.floor(Math.random()*11+1) 
   // Setting up random numbers for each jewel 
   // Random number has to be between 1 - 12 
   //  
   var userTotal= 0;  
   var wins= 0; 
   var losses = 0; 
   //  Decaring variables for tallies 
 $('#numberWins').text(wins); 
 $('#numberLosses').text(losses); 
 //resets the game 
 function reset(){ 
       Random=Math.floor(Math.random()*101+19); 
       console.log(Random) 
       $('#randomNumber').text(Random); 
       num1= Math.floor(Math.random()*11+1); 
       num2= Math.floor(Math.random()*11+1); 
       num3= Math.floor(Math.random()*11+1); 
       num4= Math.floor(Math.random()*11+1); 
       userTotal= 0; 
       $('#finalTotal').text(userTotal); 
       }  
 //adds the wins to the userTotal 
 function win(){ 
   wins++;  
   $('#numberWins').text(wins); 
   reset(); 
 } 
 //adds the losses to the userTotal 
 function lose(){ 
   losses++; 
   $('#numberLosses').text(losses); 
   reset() 
 } 
 //sets up click for jewels 
   $('#one').on ('click', function() { 
     userTotal = userTotal + num1; 
     console.log("New userTotal= " + userTotal); 
     $('#finalTotal').text(userTotal);  
           //sets win/lose conditions 
         if (userTotal == Random){ 
           win(); 
         } 
         else if ( userTotal > Random){ 
           lose(); 
         }    
   })   
   $('#two').on ('click', function(){ 
     userTotal = userTotal + num2; 
     console.log("New userTotal= " + userTotal); 
     $('#finalTotal').text(userTotal);  
         if (userTotal == Random){ 
           win(); 
         } 
         else if ( userTotal > Random){ 
           lose(); 
         }  
   })   
   $('#three').on ('click', function(){ 
     userTotal = userTotal + num3; 
     console.log("New userTotal= " + userTotal); 
     $('#finalTotal').text(userTotal); 
 //sets win/lose conditions 
           if (userTotal == Random){ 
           win(); 
         } 
         else if ( userTotal > Random){ 
           lose(); 
         }  
   })   
   $('#four').on ('click', function(){ 
     userTotal = userTotal + num4; 
     console.log("New userTotal= " + userTotal); 
     $('#finalTotal').text(userTotal);  
        
           if (userTotal == Random){ 
           win(); 
         } 
                  else if ( userTotal > Random){ 
           lose(); 
         } 
   });    
 });  
//      pusedo notes:

//	assign computer to randomly choose a number between 1 & 120,
//		and display in 'score to match:' box

// show 4 individual jewels (DONE - completed on html) 

 //	make individual jewels a clickable item and assigning them
 //		them a value between 1 & 12

//	make individual jewels a clickable item and assigning them
//		them a value between 1 & 12

// value for jewel 1



 

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


