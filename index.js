var Letter = require("./letter.js");
var inquirer = require("inquirer");

var words = ["red", "blue", "green", "yellow"];

var wordsSelected = words[Math.floor(Math.random() * words.length)];
var wordsToLetter = wordsSelected.split("")
// console.log(wordsSelected);
var wordToGuess = new Letter(wordsToLetter);
wordToGuess.displayLetter();

function questions() {
    inquirer.prompt([
        {
            type: "input",
            name: 'question',
            message: "Guess a letter"
        }
    ]).then(function(answer) {
        console.log(answer)
        questions();
    })

}
questions();


