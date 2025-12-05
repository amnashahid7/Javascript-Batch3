let randomNumber = Math.floor(Math.random() * 100 + 1);
// console.log(randomNumber);

let userInput = document.getElementById("guessField");
let submitBtn = document.getElementById("subt");
let guessArray = document.querySelector(".guesses");
let attempts = document.querySelector(".lastResult");
let lowhi = document.querySelector(".lowOrHi");
let paras= document.querySelector(".resultParas");

let p = document.createElement("p");

let playGame = true;
let numGuess = 0;
let prevArray = [];
if (playGame) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    
    validateguess(guess);
  });
}

function validateguess(guess) {
    if(isNaN(guess)){
        displayMessage("Please enter a valid number");
    }
    else if(guess < 1){
        displayMessage("Please enter a number greater than 0");
    }
    else if(guess > 100){
        displayMessage("Please enter a number less than 100");
    }else{
        prevArray.push(guess);
        if(numGuess=== 10){
            displayGuesses(guess);
            displayMessage(`Game over and random number is ${randomNumber}`);
            endGame();
        }
        else{
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
  //
}
function checkGuess(guess) {
    if(guess==randomNumber){
        displayMessage("You Win");
        endGame();
    }else if(guess<randomNumber){
        displayMessage("your guess is tooo low")
    }else if(guess>randomNumber){
        displayMessage("your guess is too high")
    }
}
function displayGuesses() {
    userInput.value= "";

    guessArray.innerHTML= `${prevArray}`;
    
    numGuess++;
    console.log(numGuess," numguess");
    
    attempts.innerHTML = `${10-numGuess}`;
    console.log(attempts, " attempts");
    
    
}
function displayMessage(message) {
    lowhi.innerHTML= `${message}`
}



function endGame() {
    userInput.value = "";
    submitBtn.setAttribute("disabled","");
    userInput.setAttribute("disabled","");
    p.classList.add('button');
    p.innerHTML= `<h2 id="startbtn">NEW GAME</h2>`;
    paras.appendChild(p);
    playGame = false;
    startGame();



  
}

function startGame() {
    let button = document.getElementById("startbtn");
    button.addEventListener('click',function(){
        console.log("click");
        prevArray = [];
        numGuess = 0;
        p.innerHTML= "";
        guessArray.innerHTML= "";
        attempts.innerHTML= `${10 - numGuess}`;
        lowhi.innerHTML= "";
        userInput.removeAttribute("disabled");
        submitBtn.removeAttribute("disabled");
         playGame = true;
        randomNumber = Math.floor(Math.random() * 100 + 1);
    })
  
}
