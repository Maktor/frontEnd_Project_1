const mainDiv = document.getElementById("main");
const playAgainButton = document.getElementById("playAgain");

let createOnce = 1;

let ptag = document.createElement("p");
ptag.innerHTML = "Player 2, close your eyes! Player 1, click next.";
mainDiv.appendChild(ptag);

let nextButton1 = document.createElement("button");
nextButton1.innerHTML = "Next";
mainDiv.appendChild(nextButton1);
nextButton1.id = "nextButton";

playAgainButton.addEventListener("click", () => {
  location.reload();
});

nextButton1.addEventListener("click", () => {

  if(createOnce == 1){
    createOnce -= 1;
    nextButton1.remove();

    let nextButton2 = document.createElement("button");
    nextButton2.innerHTML = "Next";
    mainDiv.appendChild(nextButton2);
    nextButton2.id = "nextButton";  
  
    ptag.innerHTML = "Player 1, type in one word that you want Player 2 to guess. Click next to continue.";
  
    let wordToGuess = document.createElement("input");
    mainDiv.appendChild(wordToGuess);
    wordToGuess.id = "guessInput";
  
    nextButton2.addEventListener("click", () => {
      if(wordToGuess.value.length === 0){
        ptag.innerHTML = "Input is empty, type in a word!";
        ptag.style.color = "#4aa4ff";
      } else {
        nextButton2.remove();
        wordToGuess.remove();

        ptag.innerHTML = "Player 2, start guessing letters. You only have 5 shots!";

        let placy = document.createElement("p");
        placy.innerHTML = "";
        mainDiv.appendChild(placy);

        let guessInput = document.createElement("input");
        mainDiv.appendChild(guessInput);
        guessInput.id = "guessInput";

        let guessButton = document.createElement("button");
        guessButton.innerHTML = "Guess";
        mainDiv.appendChild(guessButton);
        guessButton.id = "nextButton";

        let incorrectGuesses = document.createElement("p");
        incorrectGuesses.innerHTML = "Letters Guessed:";
        mainDiv.appendChild(incorrectGuesses);

        let toLowerCase2 = wordToGuess.value;
        let storeWord = toLowerCase2.toLowerCase();
        
        let incorrectCounter = 0;
        let maxIncorrectGuesses = 5;

        let wordArray = storeWord.split("");
        let displayArray = wordArray.map(() => "_");

        placy.innerHTML = displayArray.join(" ");

        guessButton.addEventListener("click", () => {

          let toLowerCase1 = guessInput.value;
          let guessInputStorage = toLowerCase1.toLowerCase();

          let guess = guessInputStorage;
          let isCorrect = false;

          if(guessInputStorage.length === 0){
            ptag.innerHTML = "Input is empty, type in a word!";
            ptag.style.color = "#4aa4ff";
          } else if(guessInputStorage.length > 1){
            ptag.innerHTML = "One letter at a time!";
            ptag.style.color = "#4aa4ff";
            guessInput.value = '';
          } else {

            ptag.innerHTML = "Player 2, start guessing letters. You only have 5 shots!";
            ptag.style.color = "black";

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
            } if (displayArray.join("") === storeWord) {
              ptag.innerHTML = "Player 2 wins!";
              ptag.style.color = "#FF7F11";
              guessInputStorage = '';
              guessInput.readOnly = true;
              guessButton.disabled = true;
            } if (incorrectCounter >= maxIncorrectGuesses) {
              ptag.innerHTML = "Player 2 lost, loser. Player 1 won, giga chad!";
              ptag.style.color = "#FF7F11";
              guessInput.readOnly = true;
              guessButton.disabled = true;
            }
          }
        });
      
      }
    });
  }
});
