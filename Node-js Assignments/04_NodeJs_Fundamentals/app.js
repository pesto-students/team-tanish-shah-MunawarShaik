const fs = require("fs");
const generateGreeting = require("./greetings");
const readline = require("readline");

const name = readline.createInterface({
  input: process.stdin, // Read from standard input (the console)
  output: process.stdout, // Output to standard output (the console)
});
name.question("What is your name? ", (name) => {
  const greeting = generateGreeting(name);

  // Save the greeting to a text file
  fs.writeFile("output.txt", greeting, (err) => {
    if (err) throw err;
    console.log("Greeting saved to output.txt");
    // name.close();
  });
});
