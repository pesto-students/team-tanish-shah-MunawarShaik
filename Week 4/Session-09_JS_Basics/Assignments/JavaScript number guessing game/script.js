function playGuessingGame(numToGuess, totalGuesses = 10) {
  numToGuess = Math.floor(Math.random() * 100) + 1;
  console.log(numToGuess);
  let number = prompt("Enter a number between 1 to 100.");

  // player click on cancel button
  if (number === null) return 0;

  // player enter empty value or value that is not a number
  if (isNaN(number) || number === "")
    playGuessingGame(numToGuess, totalGuesses);

  let count = 1;

  for (let i = count; i < totalGuesses; i++) {
    // player click on cancel button
    if (number === null) return 0;

    // player enter empty value or value that is not number
    if (isNaN(number) || number === "") {
      number = prompt("Please enter a number.");
      i--;
    }
    // guessed number < numToGuess
    else if (number < numToGuess)
      number = prompt(`${number} is too small. Guess a larger number.`);
    // guessed number > numToGuess
    else if (number > numToGuess)
      number = prompt(`${number} is too large. Guess a smaller number`);
    // guessed the number
    else return i;
  }

  return 0;
}
// playGuessingGame();
