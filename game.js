console.log("Let's play some Rock Paper Scissor!");
console.log("Type 'playgame()' to start");
function getRandomNumber(max){
    return Math.floor(Math.random()*max);
}
function capitalizeFirstLetter(humanChoice){
    humanChoice = humanChoice[0].toUpperCase()+str.slice(1);
    return humanChoice;
}
function getComputerChoice(){
    let choiceNumber = getRandomNumber(3);
    let choiceWord =""
    if (choiceNumber === 0){
        choiceWord = "Rock";
    }
    else if (choiceNumber === 1){
        choiceWord = "Paper";
    }
    else if (choiceNumber === 2){
        choiceWord = "Scissors";
    }
    choiceWord = choiceWord.toUpperCase();
    return choiceWord;
}
function getHumanChoice(){
    let humanChoice = (prompt("Please type one of the following: 'Rock' , 'Paper', 'Scissors'"));
    if (typeof(humanChoice) === "string"){
        humanChoice = humanChoice.toUpperCase();
        return humanChoice;
    }
    else {
        console.log("Please make sure to enter the correct type of input (string).");
        return getHumanChoice();
    }
}
function playRound(humanChoice,choiceWord){
    humanChoice = getHumanChoice(); 
    choiceWord = getComputerChoice();
    console.log(humanChoice,choiceWord);

    if (humanChoice === choiceWord){
        console.log(humanChoice, " hugs" ,choiceWord, "we got a tie!");
        console.log("Human Score:",humanScore,"Computer Score:",computerScore);
    }
    else if ((humanChoice === "ROCK")&&(choiceWord ==="PAPER")){
        console.log("You lose! Paper beats Rock.")
        console.log("Human Score:",humanScore,"Computer Score:",(++computerScore));
    }
    else if ((humanChoice === "ROCK")&&(choiceWord ==="SCISSORS")){
        console.log("You won! Rock beats Scissors.")
        console.log("Human Score:",(++humanScore),"Computer Score:",computerScore);
    }
    else if ((humanChoice === "PAPER")&&(choiceWord ==="ROCK")){
        console.log("You won! Paper beats Rock.")
        console.log("Human Score:",(++humanScore),"Computer Score:",computerScore);
    }
    else if ((humanChoice === "PAPER")&&(choiceWord ==="SCISSORS")){
        console.log("You lose! Scissors beats Paper.")
        console.log("Human Score:",humanScore,"Computer Score:",(++computerScore));
    }
    else if ((humanChoice === "SCISSORS")&&(choiceWord ==="ROCK")){
        console.log("You lose! Rock beats Scissors.")
        console.log("Human Score:",humanScore,"Computer Score:",(++computerScore));
    }
    else if ((humanChoice === "SCISSORS")&&(choiceWord ==="PAPER")){
        console.log("You won! Scissors beats Paper.")
        console.log("Human Score:",(++humanScore),"Computer Score:",computerScore);
    }
}
var humanScore = 0, computerScore = 0;

function playGame(){
    var roundNumber = 0;
    while (roundNumber < 5){
        console.log("Round#",roundNumber);
        playRound();
        ++roundNumber;
    }
    if (humanScore > computerScore){
        console.log("Congratulations! You W O N !!");
    }
    else if(computerScore > humanScore){
        console.log("You lose! Better luck next time");
    }
    else {
        console.log("We got a tie.")
    }
}