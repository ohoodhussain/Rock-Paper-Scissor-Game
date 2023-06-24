//create function that allow the coputer to choice random
//chioce between rock, paper, and scissors
function getCoputerChoice(){
    //create variable name randomNumber to stor and genrate 
    //the computer random choice
    let randomNumber = Math.floor (Math.random() * 3);
    //now create switch statment to determine the comuter's chioce
    //based on the (randomnumber)genrate.
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "secissors";
        default:
            return "error"
    }
}

let computerChoise = getCoputerChoice();
//${} allow you create sentences that can 
//change depending on the value of variables you have
// in this case  computerChoise.
console.log (`the computer choice is ${computerChoise}`);



//second part
//Write a function that plays a single 
//round of Rock Paper Scissors. 


function declareWinner(playerSelectionChoice) {
    let computerChoise = getCoputerChoice();
    //create  
    //let playerSelection = prompt ("pleae enter your choise");
    const computerSelection = computerChoise;
    
    if (playerSelectionChoice===computerSelection){
        return("It's a tie!");
    } else if (
        (playerSelectionChoice ==="rock" && computerChoise ==="scissors") ||
        (playerSelectionChoice ==="paper" && computerChoise==="rock") ||
        (playerSelectionChoice==="scissors" && computerChoise==="paper")


    ){
        return (`you win! ${playerSelectionChoice} beats ${computerChoise}`);
    } else {
        return (`you lose! ${computerChoise} beats ${playerSelectionChoice}`)
    }

        
}

 declareWinner(playerSelectionChoice);
 

var startPlayingPageButton = document.getElementById("startPlaytButton");
var closeStartPage = document.getElementById("startPage");
var openPlayingPage = document.getElementById("playingPage");

startPlayingPageButton.addEventListener("click", function(){
    closeStartPage.style.display="none";
    openPlayingPage.style.display="block";
})

function playerSelectionChoice(choice) {
   const result= declareWinner(choice);
   showGameResult(result)
  }
function showGameResult(result){
    var showResult =document.getElementById("result");
    showResult.textContent= result;
}
