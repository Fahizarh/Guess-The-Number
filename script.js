// Define the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Function for when the check button is clicked
function onClickCheck() {
  guessNumber = Number(document.querySelector(".guess").value);
  // When no number is entered
  if (!guessNumber) {
    displayMessage("⛔ No number entered");
  }

  // When player guesses correct number
  else if (guessNumber === secretNumber) {
    displayMessage("✅ Correct!");
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }

  // When player selects a number greater than 20
  else if (guessNumber > 20) {
    displayMessage("Choose a number from 1 to 20");
  }

  // When the number guessed is too high or low
  else if (guessNumber !== secretNumber) {
    if (score > 1) {
      // Refactoring code using ternary operator
      displayMessage(guessNumber > secretNumber ? "Too high" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Game Over!");
      document.querySelector(".score").textContent = 0;
    }
  }
}

document.querySelector(".check").addEventListener("click", onClickCheck);

// Function for when the again button is clicked
function onClickAgain() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
}

document.querySelector(".again").addEventListener("click", onClickAgain);
