let playerSelection = (prompt("Please enter your weapon of choice, rock, paper or scissors"));
playerSelection = playerSelection.toUpperCase();
console.log("player choice is " + playerSelection);

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

getComputerChoice();