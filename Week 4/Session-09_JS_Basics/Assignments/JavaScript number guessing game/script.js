// Your solution goes here

const playGuessingGame = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
  let attempts = 0;
  let guessedNumber = parseInt(prompt("Enter a Number between 1 to 100"));
  console.log(typeof guessedNumber);
  console.log(guessedNumber.trim());
  while (attempts < 10 || guessedNumber !== randomNumber) {
    if (guessedNumber === null) {
      return 0;
    }

    if (isNaN(guessedNumber)) {
      prompt("please enter a number");
      continue;
    }

    if (guessedNumber == randomNumber) {
      attempts++;
      return attempts;
    } else if (guessedNumber < randomNumber) {
      guessedNumber = prompt(
        guessedNumber + "is too small.Guess a larger number"
      );
      attempts++;
    } else if (guessedNumber > randomNumber) {
      guessedNumber = prompt(
        guessedNumber + "is too Large.Guess a smaller number"
      );
      attempts++;
    }
  }
  return attempts;
};
