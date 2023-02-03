const placy = document.getElementById("placy");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const newWord = document.getElementById("newWord");
const incorrectGuesses = document.getElementById("incorrectGuesses");

const words = ["website", "javascript", "mobile", "laptop", "programming", "coding", "aaron", "macbook", "library", "women", "men"]
var word = words[Math.floor(Math.random() * words.length)];

