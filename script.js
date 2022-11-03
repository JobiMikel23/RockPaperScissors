
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

function getPlayerChoice(){
    let choice = "";
    if (buttonClick == "Rock"){
        choice = "ROCK";
        console.log(choice);
        return choice;
    }
    else if (buttonClick == "Paper"){
        choice = "PAPER";
        console.log(choice);
        return choice;
    }
    else if (buttonClick = "Scissors"){
        choice = "SCISSORS";
        console.log(choice);
        return choice;
    }
    
    
}

const container = document.querySelector('#results');
const results = document.createElement('h3');
results.style.color = "red";
results.style.fontFamily = "Roboto";
//For below function, red text to appear 

function playRound(playerSelection, computerSelection){

    
    let draw = "draw";
    let lose = "lose";
    let win = "win";
    
    
    if (playerSelection == "ROCK" && computerSelection == "ROCK" ||
        playerSelection == "SCISSORS" && computerSelection == "SCISSORS" ||
        playerSelection == "PAPER" && computerSelection == "PAPER"){
        results.textContent = "IT'S A DRAW YOU BOTH PICKED  " + playerSelection;
        //DOM method to add text, to the middle displaying the results. 
        container.appendChild(results);
        
        return draw;
    } 
    else if (playerSelection == "ROCK" && computerSelection == "PAPER" ||
             playerSelection == "PAPER" && computerSelection == "SCISSORS" || 
             playerSelection == "SCISSORS" && computerSelection == "ROCK"){
            results.textContent = "YOU LOSE HA HA ! YOU PICKED " + playerSelection + " AND THE COMPUTER PICKED " + computerSelection;
            container.appendChild(results);
            
            return lose;
        
    }
    else if(playerSelection == "ROCK" && computerSelection == "SCISSORSS" || 
            playerSelection == "PAPER" && computerSelection == "ROCK" ||
            playerSelection == "SCISSORS" && computerSelection == "PAPER"){
            results.textContent = "YOU WIN! YOU PICKED " + playerSelection + " AND THE COMPUTER PICKED " + computerSelection;
            container.appendChild(results);
            return win;
            }
            
        
    
}


let playerScore = 0;
let computerScore = 0;
let draws = 0;

const displayScores = document.createElement('h4');
displayScores.style.color = "blue";
displayScores.style.fontFamily = "Roboto";
const scores = document.querySelector('#scores');
//Display score
const winner = document.querySelector('#winner')
const displayWinner = document.createElement('h2');
displayWinner.style.color = "purple";
displayWinner.style.fontFamily = "Roboto";

//Display winner in below function

function game2(currentResult){
    
    if (currentResult == "draw"){
        draws +=1;
        
    }
    else if (currentResult == "lose"){
        computerScore += 1;
        
    }
    else if (currentResult == "win"){
        playerScore += 1;
        
    }
    
    
    displayScores.textContent = "PLAYER SCORE: " +playerScore+ "  DRAWS: " + draws + " COMPUTER SCORE: " + computerScore;
    scores.appendChild(displayScores);
    
    
    if (playerScore > 4){
        displayWinner.textContent = "YOU WIN! ";
        winner.appendChild(displayWinner);
    }
    else if (computerScore > 4){
        displayWinner.textContent = "YOU LOSE! ";
        winner.appendChild(displayWinner);
    }
    
}


//Event listeners for buttons, calling a function on the event listeners. 

let buttonClick = "";

const rockBtn = document.querySelector('#Rock');
const paperBtn = document.querySelector('#Paper');
const scissorBtn = document.querySelector('#Scissors');



rockBtn.addEventListener('click', function(){
    buttonClick = "Rock";
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    currentResult = playRound(playerSelection,computerSelection);
    game2(currentResult);
});
paperBtn.addEventListener('click', function(){
    buttonClick = "Paper";
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    
    currentResult = playRound(playerSelection,computerSelection);
    game2(currentResult);
});
scissorBtn.addEventListener('click', function(){
    buttonClick = "Scissors";
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    currentResult = playRound(playerSelection,computerSelection);
    game2(currentResult);
});

