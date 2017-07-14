var vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]
var splittedWord = wordInput.split('');
var twoLetters = [splittedWord[0], splittedWord[1]];
var threeLetters = [splittedWord[0], splittedWord[1], splittedWord[2]];
var consonant = ["c","d","f","g","h","i","j","k","l","m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "z", "C",
"D","F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "Z", "Y"];

var pigLatin = function(wordInput) {

  for (i = 0; i < vowels.length; i++) {
    if (splittedWord[0] === vowels[i]) {
      return splittedWord.join('') + "way";
    }
    for (j = 0; j < splittedWord.length; j++) {
      if (splittedWord[0] != vowels[i]) {
        var consWord1 = splittedWord.slice([1]);
        consWord1.push(splittedWord[1]);
        return consWord1.join('') + "ay";
      }
    }

    return wordInput;
  };
};

$(document).ready(function() {
  $("form#pig-form").submit(function(event) {
    event.preventDefault();
    var wordInput = $("input#word").val();
    var result = pigLatin(wordInput);
    $("#result").text(result);
  });
});
