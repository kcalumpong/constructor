var Letter = function(letter) {
    this.letter = letter;
    this.guessed = false;
    //don't know what the letter is yet
}

this.displayLetter =function() {
    if (this.guess) {
        return this.letter + " ";
    }else {
        return "_"
    }
};

this.checkGuess = function(guess) {
    if (guess === this.letter){
        this.guessed = true;
    }
};

module.exports = Letter;