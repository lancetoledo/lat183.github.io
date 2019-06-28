var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z"
]


var wins = 0;
var losses = 0;
var ties = 0;
var maxNumGuess = 9;
var usedGuess = [];
var numGuessLeft = 9;
var isFinished = false;
var x = document.getElementById("myAudio"); 




document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess)
    
    
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerGuess)

    usedGuess.push(userGuess);

    if (userGuess === computerGuess) {
        wins++;
        x.play(); 
        alert('You got it right! You are a Psychic!')
        numGuessLeft = 9;
        usedGuess.length = 0;

    } 
    else if (numGuessLeft == 0){
        losses++;
        numGuessLeft = 9;
        usedGuess.length = 0;
        console.log(losses);
        alert('No more guesses for you! Try Again!')
    }
    else if(userGuess !== computerGuess){
        numGuessLeft--;
        
    }

    var html = "<p>Guess what letter I'm thinking of!</p>" + "<br>" +
        "<p>Total Wins: " + wins + "</p>" + "<br>" +
        "<p>Total Losses: " + losses + "</p>" + "<br>" +
        "<p>Guesses Left: " + numGuessLeft + "</p>" + "<br>" +
        "<p>Your Guesses so far: " + usedGuess + "</p>" + "<br>" 
        ;
      
        document.querySelector('#game').innerHTML = html;


}

