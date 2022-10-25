function getPlayerChoice(){
    let choice = (prompt("Please enter your weapon of choice, rock, paper or scissors"));
    choice = choice.toUpperCase();
    console.log(choice);
    return choice;
}

// let getPlayerChoice = (prompt("Please enter your weapon of choice, rock, paper or scissors"));
// getPlayerChoice = getPlayerChoice.toUpperCase();
// console.log("player choice is " + getPlayerChoice);

function getComputerChoice(){
    choice = Math.floor(Math.random() * 3)
    if (choice == 0){
        choice = "ROCK";
    } else if
    (choice == 1){
        choice = "SCISSORS";
    }
    else{
        choice = "PAPER";
    }
    console.log(choice);
    return choice;

    
}

function playRound(playerSelection, computerSelection){

    if (playerSelection == "ROCK" && computerSelection == "ROCK" ||
        playerSelection == "SCISSORS" && computerSelection == "SCISSORS" ||
        playerSelection == "PAPER" && computerSelection == "PAPER"){
        console.log("its a draw you both picked " + playerSelection)
        return "IT'S A DRAW YOU BOTH PICKED" + playerSelection ;
    } 
    else if (playerSelection == "ROCK" && computerSelection == "PAPER" ||
             playerSelection == "PAPER" && computerSelection == "SCISSORS" || 
             playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        console.log("YOU LOSE HA HA ! YOU PICKED " + playerSelection + " AND THE COMPUTER PICKED " + computerSelection);
        return "YOU LOSE HA HA !";
    }
}

playRound("ROCK", "PAPER");
// getPlayerChoice();
// getComputerChoice();