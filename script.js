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
        choice = "Rock";
    } else if
    (choice == 1){
        choice = "Scissors";
    }
    else{
        choice = "Paper";
    }
    console.log(choice);
    return choice;

    
}

function playRound(getPlayerChoice, computerSelection)
getPlayerChoice();
getComputerChoice();