const words = ["PROGRAMMERING", "STOCKHOLM", "STUDENTER", "JAVASCRIPT", "AFTERWORK"];
let livesLeft = 5;
let guessCount = [];
let letters = [];

let word = words[Math.floor(Math.random() * words.length)];

for (var i = 0; i < word.length; i++) {
  letters[i] = "_";
}

let remainingLetters = word.length;

// alert(word);

function wrongLetters() {
  let guessCount = word.charAt(0);
  return guessCount;
}

// ********* GAME START ***************

while (remainingLetters > 0) {
  let guess = prompt(`Guess a letter, or click cancel to stop playing.\n 
  ${letters.join(" ")}

  Lives left: ${livesLeft} 
  Guesses made: ${guessCount}`);

  if (guess === null) {
    alert("You have canceled the game.");
    break;
  }

  guess = guess.toUpperCase();

  if (!guess.search(/[^a-zA-Z]+/) || guess.length !== 1) {
    alert("Please enter a single letter between A-Z.");
  }

  else {
    for (var j = 0; j < word.length; j++) {
      if (word[j].toUpperCase() === guess.toUpperCase()) {
        letters[j] = guess;
        remainingLetters--;
      }
    } if (!word.includes(guess)) {
      guessCount.push(`${guess}`);
      livesLeft--;
    }
  }
  if (remainingLetters === 0) {
    alert("You won, congratulations!");

  } if (livesLeft === 0) {
    alert(`You lost! The correct word was ${word}.`);
    break;
  }
}


