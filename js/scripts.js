var pigLatin = function(wordInput) {
  var vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]
  var splittedWord = wordInput.split('');
  var twoLetters = [splittedWord[0], splittedWord[1]];
  var threeLetters = [splittedWord[0], splittedWord[1], splittedWord[2]];
  var consonant = ["c","d","f","g","h","i","j","k","l","m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "z", "C",
  "D","F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "Z", "Y"];

  

};



$(document).ready(function() {
  $("form#pig-form").submit(function(event) {
    event.preventDefault();
    var wordInput = $("input#word").val();
    var result = pigLatin(wordInput);
    $("#result").text(result);
  });
});
