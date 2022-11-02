const buttons = document.querySelectorAll('button');

// testing button ids 
// function clickPlayerChoice(){
//     if (rockBtn.id === "Rock"){
//         console.log("Rock");
//     }
// }

//Iterate through the buttons, using for each. Add event listener to each button to add getPlayerChoice function
buttons.forEach((button) => {
    


    button.addEventListener('click', function(){
      const playerSelection = getPlayerChoice();
      const computerSelection = getComputerChoice();

      playRound(playerSelection,computerSelection);
      
    });

    function getPlayerChoice(){
        let choice = "";
        if (button.id == "Rock"){
            choice = "ROCK";
            console.log(choice)
            return choice;
        }
        else if(button.id == "Paper"){
            choice = "PAPER";
            console.log(choice)
            return choice;
        }
        else{
            choice = "SCISSORS";
            console.log(choice)
            return choice;
        }
        
    }

});




//     // let choice = (prompt("Please enter your weapon of choice, rock, paper or scissors"));
//     // choice = choice.toUpperCase();
//     // // console.log(choice);
//     // return choice;
// }


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

    let draw = "draw";
    let lose = "lose";
    let win = "win";

    
    if (playerSelection == "ROCK" && computerSelection == "ROCK" ||
        playerSelection == "SCISSORS" && computerSelection == "SCISSORS" ||
        playerSelection == "PAPER" && computerSelection == "PAPER"){
        console.log("IT'S A DRAW YOU BOTH PICKED  " + playerSelection)
        
        return draw;
    } 
    else if (playerSelection == "ROCK" && computerSelection == "PAPER" ||
             playerSelection == "PAPER" && computerSelection == "SCISSORS" || 
             playerSelection == "SCISSORS" && computerSelection == "ROCK"){
            console.log("YOU LOSE HA HA ! YOU PICKED " + playerSelection + " AND THE COMPUTER PICKED " + computerSelection);
        return lose;
        
    }
    else 
            console.log("YOU WIN! YOU PICKED " + playerSelection + " AND THE COMPUTER PICKED " + computerSelection);
        return win;
    
}


const container = document.querySelector('#container');
//Select the container 

const results = document.createElement('div');
results.classList.add('results');
results.textContent = "This will be where the results are displayed! ";

container.appendChild(results);

//playRound function, with the playerSelection and computerSelection as parameters
//The playerChoice and computerChoice will be used as arguments for this 
// use if statements to cover the draw, lose and win scenario. Win scenario only needs 
// else as everything else has been covered.



// function game(){

//     let wins = 0;
//     let draws = 0;
//     let losses = 0;
    
        

//     for (let i = 0; i < 5; i++){

        
//         const playerSelection = getPlayerChoice();
        
//         const computerSelection = getComputerChoice();

//         const currentResult = playRound(playerSelection,computerSelection);
        
//         if(currentResult == "draw"){
//             draws += 1;
//             console.log("THIS ROUND IS A DRAW YOU BOTH PICKED " + playerSelection);
//         }
//         else if(currentResult == "lose"){
//             losses +=1;
//             console.log("YOU LOSE THIS ROUND HA HA ! YOU PICKED " + playerSelection + " AND THE COMPUTER PICKED " + computerSelection);
//         }
//         else{
//             wins+=1;
//             console.log("YOU WIN THIS ROUND! YOU PICKED " + playerSelection + " AND THE COMPUTER PICKED " + computerSelection);
//         } 
            
        
//         // console.log("wins is " +  wins + " losses is " + losses + " draws is " + draws);
//     }
//     if (wins > losses){
//         console.log("CONGRATULATIONS, YOU HAVE WON THE SET OF ROCK PAPER SCISSORS\nYOU GOT " + wins + " POINTS AND THE COMPUTER GOT "
//         + losses + " POINTS");
//     }
//     else if (losses > wins){
//         console.log("UNLUCKY LOSER, YOU LOST THE SET OF ROCK PAPER SCISSORS TO THE COMPUTER HA HA !\nYOU GOT " + losses + 
//         "AND THE COMPUTER GOT "+ wins + " POINTS" );
//     }else{
//         console.log("BORING! IT'S A DRAW \n YOU BOTH GOT " + draws + " POINTS");
//     }

// }


// game();


// console.log(playRound(playerSelection,computerSelection));

//call the getPlayerChoice function and assign the return variable to playerSelection
//to be used as an argument
//do the same with the getComputerChoicefunction
//Print the result of running playRound function with the relevant arguments


// getPlayerChoice();
// getComputerChoice();



// const rockBtn = document.querySelector('#Rock');
// rockBtn.addEventListener('click', clickPlayerChoice);


