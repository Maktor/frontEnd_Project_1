const mainDiv = document.getElementById("main");

let createOnce = 1;
storeWord = ""

let ptag = document.createElement("p");
ptag.innerHTML = "Player 2, close your eyes! Player 1, click next.";
mainDiv.appendChild(ptag);

let nextButton1 = document.createElement("button");
nextButton1.innerHTML = "Next";
mainDiv.appendChild(nextButton1);
nextButton1.id = "nextButton";

nextButton1.addEventListener("click", () => {

  if(createOnce == 1){
    createOnce -= 1;
    nextButton1.remove()

    let nextButton2 = document.createElement("button");
    nextButton2.innerHTML = "Next";
    mainDiv.appendChild(nextButton2);
    nextButton2.id = "nextButton";  
  
    ptag.innerHTML = "Player 1, type in one word that you want Player 2 to guess. Click next to continue.";
  
    let guessWordInput = document.createElement("input");
    mainDiv.appendChild(guessWordInput);
    guessWordInput.id = "guessInput";
  
    nextButton2.addEventListener("click", () => {
      if(guessWordInput.value.length === 0){
        alert("Input is empty, type in a word!");
      } else {
        nextButton2.remove();
        guessWordInput.remove();

        storeWord = guessWordInput.value;
        alert(guessWordInput.value);

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


        const newWord = document.getElementById("newWord");
        const incorrectGuesses = document.getElementById("incorrectGuesses");

      }
    });
  }
});
