//variable to store the list of guesses
let guesses = [];
//variable to store the correct random number
let correctNumber = getRandomNumber();

window.onload = function(){
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}

//functionality for playing the whole game
function playGame(){
    let numberGuess = document.getElementById("number-guess").value;
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
}
//functionality for displaying the result
function displayResult(numberGuess){
    if(numberGuess > correctNumber){
        showNumberAbove();
    }
    else if(numberGuess < correctNumber){
        showNumberBelow();
    }
    else if(numberGuess == correctNumber){
        showYouWon();
    }
}
function initGame(){
    correctNumber = getRandomNumber();
    document.getElementById("number-guess").innerHTML= "What's your guess?";
    document.getElementById("result").innerHTML = "";
    guesses = [];
    displayHistory();
}

//function to return a random number between 1 to 100 using Math.random
function getRandomNumber(){
    let randomNumber = Math.floor((Math.random() * 100) + 1);
    return randomNumber;
}


/**functionality to save the guess history */
function saveGuessHistory(guess){
    guesses.push(guess);
}
/**functionality to display the saved history */
function displayHistory(){
    let index = guesses.length-1;
    let list = "<ul class='list-group'>";
    while(index >= 0){
        list += "<li class='list-group-item'>" +
                "You guessed " + guesses[index] + "</li>";
        index--;
    }
    list += "</ul>";
    document.getElementById("history").innerHTML = list;
}



/**
 * Retriving the dialog based on if the guess is wrong or correct
 */
function getDialog(dialogType, text){
    let dialog;
    switch(dialogType){
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>";
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>";
            break;
    }
    dialog += text;
    dialog+= "</div>";
    return dialog;
}


function showYouWon(){
    const text = "Awesome job, you got it!";
    let dialog = getDialog('won', text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
    const text = "You guess is too high!";
    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
    const text = "Your guess is too low!";
    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}