console.log("Let's play some Rock Paper Scissor!");
console.log("Type 'playgame()' to start");
function getRandomNumber(max){
    return Math.floor(Math.random()*max);
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
    computerSelection = choiceWord;
    return choiceWord;
}

function playRound(humanChoice,choiceWord){

    choiceWord = getComputerChoice();
    console.log(humanChoice,choiceWord);

    if (humanChoice === choiceWord){
        console.log(humanChoice, " hugs" ,choiceWord, "we got a tie!");
        messagePrint = "We got a tie!";
        console.log("Human Score:",humanScore,"Computer Score:",computerScore);
        ("Human Score:",humanScore,"Computer Score:",computerScore);
    }
    else if ((humanChoice === "ROCK")&&(choiceWord ==="PAPER")){
        console.log("You lose! Paper beats Rock.");
        messagePrint = ("You lose! Paper beats Rock.");
        console.log("Human Score:",humanScore,"Computer Score:",(++computerScore));
    }
    else if ((humanChoice === "ROCK")&&(choiceWord ==="SCISSORS")){
        console.log("You won! Rock beats Scissors.");
        messagePrint = ("You won! Rock beats Scissors.");
        console.log("Human Score:",(++humanScore),"Computer Score:",computerScore);
    }
    else if ((humanChoice === "PAPER")&&(choiceWord ==="ROCK")){
        console.log("You won! Paper beats Rock.");
        messagePrint = ("You won! Paper beats Rock.");
        console.log("Human Score:",(++humanScore),"Computer Score:",computerScore);
    }
    else if ((humanChoice === "PAPER")&&(choiceWord ==="SCISSORS")){
        console.log("You lose! Scissors beats Paper.");
        messagePrint = ("You lose! Scissors beats Paper.");
        console.log("Human Score:",humanScore,"Computer Score:",(++computerScore));
    }
    else if ((humanChoice === "SCISSORS")&&(choiceWord ==="ROCK")){
        console.log("You lose! Rock beats Scissors.");
        messagePrint = ("You lose! Rock beats Scissors.");
        console.log("Human Score:",humanScore,"Computer Score:",(++computerScore));
    }
    else if ((humanChoice === "SCISSORS")&&(choiceWord ==="PAPER")){
        console.log("You won! Scissors beats Paper.");
        messagePrint = ("You won! Scissors beats Paper.");
        console.log("Human Score:",(++humanScore),"Computer Score:",computerScore);
    }
    return messagePrint;
}
var humanScore = 0, computerScore = 0; 
let messagePrint = "";
let computerSelection = "";

/* This adds a header to display console messages*/
const Message = document.createElement("p");
Message.classList.add("Message1");
Message.textContent = "Who will Win?";
Message.style.margin = "8px";
Message.style.fontSize = "28px";
Message.style.fontStyle = "oblique";
message.appendChild(Message);

/*This adds a div for the selected Item*/
const selectItem = document.createElement("div");
selectItem.classList.add("selectItem");
selectItem.style.width = "300px";
selectItem.style.background = "beige";
selectItem.style.margin = "8px";

/*This adds a header inside the div of human selection*/
const selectionHheader =  document.createElement("h2");
selectionHheader.classList.add("selectionHheader");
selectionHheader.textContent = "Selected:" + " ";
selectItem.appendChild(selectionHheader);
container.appendChild(selectItem);

/*This adds a header inside the div of computer selection*/
const VS =  document.createElement("h4");
VS.classList.add("vs");
VS.textContent = "VS";
selectItem.appendChild(VS);
container.appendChild(selectItem);

/*This adds a header inside the div of computer selection*/
const selectionCheader =  document.createElement("h3");
selectionCheader.classList.add("selectionCheader");
selectionCheader.textContent = "CPU:" + " ";
selectItem.appendChild(selectionCheader);
container.appendChild(selectItem);


/*This adds a div*/
const gameDisplay = document.createElement("div");
gameDisplay.classList.add("gameDisplay");
gameDisplay.style.marginLeft = "8px";

/*This adds a header inside the div*/
const header1 =  document.createElement("h1");
header1.classList.add("headerInDiv");
header1.textContent = "Scores";
gameDisplay.appendChild(header1);

/*This adds a div for the scoreLogs*/
const scoreLogs = document.createElement("div");
scoreLogs.classList.add("scoreLogs");
scoreLogs.style.height = "40px";
gameDisplay.appendChild(scoreLogs);

/*This adds a paragraph*/
const paragraph1 =  document.createElement("p");
paragraph1.classList.add("paragrapInDiv");
paragraph1.textContent = "Computer Score:" + " " + computerScore;
scoreLogs.appendChild(paragraph1);

/*This adds a paragraph*/
const paragraph2 =  document.createElement("p");
paragraph2.classList.add("paragrapInDiv2");
paragraph2.textContent = "Human Score:" + " " + humanScore;
scoreLogs.appendChild(paragraph2);

container.appendChild(gameDisplay);
/*Connection to buttons*/
const selectionButtons = document.querySelectorAll("button");

selectionButtons.forEach((button) => {
    button.addEventListener("click", () =>{
        let HumanSelection = (button.id);
        HumanSelection = HumanSelection.toUpperCase();
        document.getElementsByClassName("selectionHheader")[0].innerHTML = ("Selected:" + " " + HumanSelection);
        playRound(HumanSelection);
        document.getElementsByClassName("selectionCheader")[0].innerHTML = ("CPU:" + " " + computerSelection);
        document.getElementsByClassName("paragrapInDiv")[0].innerHTML = ("Computer Score:" + " " + computerScore);
        document.getElementsByClassName("paragrapInDiv2")[0].innerHTML = ("Human Score:" + " " + humanScore);
        document.getElementsByClassName("Message1")[0].innerHTML = (messagePrint);
        if (computerScore === 5) {
            document.getElementsByClassName("Message1")[0].innerHTML = ("The computer has won, better luck next time!");
            computerScore = 0 ; humanScore = 0;
            document.getElementsByClassName("paragrapInDiv")[0].innerHTML = ("Computer Score:" + " " + computerScore);
            document.getElementsByClassName("paragrapInDiv2")[0].innerHTML = ("Human Score:" + " " + humanScore);
        }
        else if (humanScore === 5){
            document.getElementsByClassName("Message1")[0].innerHTML = ("You beat the computer, nice job!");
            computerScore = 0 ; humanScore = 0;
            document.getElementsByClassName("paragrapInDiv")[0].innerHTML = ("Computer Score:" + " " + computerScore);
            document.getElementsByClassName("paragrapInDiv2")[0].innerHTML = ("Human Score:" + " " + humanScore);
        }
    });
});