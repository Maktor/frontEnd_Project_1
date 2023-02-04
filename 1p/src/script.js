const placy = document.getElementById("placy");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const playAgainButton = document.getElementById("playAgain");
const incorrectGuesses = document.getElementById("incorrectGuesses");

const words = ["website", "javascript", "mobile", "laptop", "programming", "coding", "aaron", "macbook", "library", "women", "men", "africa", "happy", "chair", "chat", "book", "downtown", "empty", "number", "green", "goodbye"];
var word = words[Math.floor(Math.random() * words.length)];

let wordArray = word.split("");
let displayArray = wordArray.map(() => "_");
let incorrectCounter = 0;
let maxIncorrectGuesses = 5;

placy.innerHTML = displayArray.join(" ");

playAgainButton.addEventListener("click", () => {
  location.reload();
});

guessButton.addEventListener("click", () => {
  let guess = guessInput.value;
  let isCorrect = false;

  if(guessInput.value.length === 0){
    alert("Input is empty, type in a word!");
  } else if(guessInput.value.length > 1){
    alert("One letter at a time!");
    guessInput.value = '';
  } else {
    for (let i = 0; i < wordArray.length; i++) {
      guessInput.value = '';
      if (wordArray[i] === guess) {
        displayArray[i] = guess;
        placy.innerHTML = displayArray.join(" ");
        isCorrect = true;
      }
    }
    if (!isCorrect) {
      incorrectCounter = incorrectCounter + 1;
      incorrectGuesses.innerHTML += " " + guess;
    } if (displayArray.join("") === word) {
      incorrectGuesses.innerHTML = "You Won!";
      incorrectGuesses.style.color = "#4aa4ff"
      guessInput.value = '';
    } if (incorrectCounter >= maxIncorrectGuesses) {
      incorrectGuesses.innerHTML = "You lost, loser. The word was " + word + "!";
      incorrectGuesses.style.color = "#4aa4ff"
    }
  }
});