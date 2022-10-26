function getPlayerChoice(){
    let choice = (prompt("Please enter your weapon of choice, rock, paper or scissors"));
    choice = choice.toUpperCase();
    // console.log(choice);
    return choice;
}

//getPlayerChoice function, asks the user for an input. Assigns this input
// to choice variable, makes the choice uppercase so no matter the users input 
// The choices will be the same 
// return this choice. 

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
    // console.log(choice);
    return choice;

}

// getComputerChoice function, generates a random number between 0-2 inclusive
// assign to variable choice, if choice is equal to a certain number assign computers turn

function playRound(playerSelection, computerSelection){

    let draw = "IT'S A DRAW YOU BOTH PICKED " + playerSelection;
    let lose = "YOU LOSE HA HA ! YOU PICKED " + playerSelection + " AND THE COMPUTER PICKED " + computerSelection;
    let win = "YOU WIN! YOU PICKED " + playerSelection + " AND THE COMPUTER PICKED " + computerSelection;
    
    if (playerSelection == "ROCK" && computerSelection == "ROCK" ||
        playerSelection == "SCISSORS" && computerSelection == "SCISSORS" ||
        playerSelection == "PAPER" && computerSelection == "PAPER"){
        // console.log("its a draw you both picked " + playerSelection)
        return draw ;
    } 
    else if (playerSelection == "ROCK" && computerSelection == "PAPER" ||
             playerSelection == "PAPER" && computerSelection == "SCISSORS" || 
             playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        // console.log("YOU LOSE HA HA ! YOU PICKED " + playerSelection + " AND THE COMPUTER PICKED " + computerSelection);
        return lose;
        
    }
    else 
        // console.log("YOU WIN! YOU PICKED " + playerSelection + " AND THE COMPUTER PICKED " + computerSelection);
        return win;
}

//playRound function, with the playerSelection and computerSelection as parameters
//The playerChoice and computerChoice will be used as arguments for this 
// use if statements to cover the draw, lose and win scenario. Win scenario only needs 
// else as everything else has been covered.



// function game(){
//     for (let i = 0; i < 5; i++){

//         const playerSelection = getPlayerChoice();

//         const computerSelection = getComputerChoice();

        

//         console.log(playRound(playerSelection,computerSelection));
//     }
// }
// game();

const playerSelection = "ROCK"
const computerSelection = "SCISSORS"
console.log(playRound(playerSelection,computerSelection));

//call the getPlayerChoice function and assign the return variable to playerSelection
//to be used as an argument
//do the same with the getComputerChoicefunction
//Print the result of running playRound function with the relevant arguments


// getPlayerChoice();
// getComputerChoice();