const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    console.log(userChoice);
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);
  console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  if (randomNumber === 4) {
    computerChoice = "lizard";
  }
  if (randomNumber === 5) {
    computerChoice = "spock";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "it's a draw!";
  }

  if (
    (computerChoice === "rock" && userChoice === "paper") ||
    (computerChoice === "rock" && userChoice === "spock")
  ) {
    result = "you win!";
  }
  if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "rock" && userChoice === "lizard")
  ) {
    result = "you lose!";
  }
  if (
    (computerChoice === "paper" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "lizard")
  ) {
    result = "you win!";
  }
  if (
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "paper" && userChoice === "spock")
  ) {
    result = "you lose!";
  }
  if (
    (computerChoice === "scissors" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "spock")
  ) {
    result = "you win!";
  }
  if (
    (computerChoice === "scissors" && userChoice === "paper") ||
    (computerChoice === "scissors" && userChoice === "lizard")
  ) {
    result = "you lose!";
  }
  if (
    (computerChoice === "lizard" && userChoice === "rock") ||
    (computerChoice === "lizard" && userChoice === "scissors")
  ) {
    result = "you win!";
  }
 if (
   (computerChoice === "lizard" && userChoice === "paper") ||
   (computerChoice === "lizard" && userChoice === "spock")
 ) {
   result = "you lose!";
    }
   if (
     (computerChoice === "spock" && userChoice === "paper") ||
     (computerChoice === "spock" && userChoice === "lizard")
   ) {
     result = "you win!";
    }  
     if (
       (computerChoice === "spock" && userChoice === "scissors") ||
       (computerChoice === "spock" && userChoice === "rock")
     ) {
       result = "you lose!";
     }
  resultDisplay.innerHTML = result;
}
