const placy = document.getElementById("placy");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const newWord = document.getElementById("newWord");
const incorrectGuesses = document.getElementById("incorrectGuesses");

const words = ["website", "javascript", "mobile", "laptop", "programming", "coding", "aaron", "macbook", "library", "women", "men"]
var word = words[Math.floor(Math.random() * words.length)];

let wordArray = word.split("");
let displayArray = wordArray.map(() => "_");
let incorrectCounter = 0;
let maxIncorrectGuesses = 5;

placy.innerHTML = displayArray.join(" ");

guessButton.addEventListener("click", () => {
  let guess = guessInput.value;
  let isCorrect = false;

  for (let i = 0; i < wordArray.length; i++) {
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
    alert("You win!");
  } if (incorrectCounter >= maxIncorrectGuesses) {
    alert("You lost, loser. The word was " + word);
  }
});