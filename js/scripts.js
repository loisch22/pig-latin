var pigLatin = function(wordInput) {
  var vowel = ["a", "e", "i", "o", "u"];
  var vowelCaps = ["A", "E", "I", "O", "U"]
  var splittedWord = wordInput.split('');
  var firstLetter = splittedWord[0];
  var consonant = ["c","d","f","g","h","i","j","k","l","m", "n", "p", "q", "r", "s", "t", "v", "x", "z", "y"];

  if (vowel.indexOf(firstLetter) != -1) {
    var firstLetterReturn = splittedWord.join('') + "way";
    return firstLetterReturn;
  }
  else if(vowelCaps.indexOf(firstLetter) != -1) {
    var firstLetterReturn = splittedWord.join('') + "way";
    return firstLetterReturn;
  }
  else if(consonant.indexOf(firstLetter) != -1) {
    var sliced = splittedWord.slice(1);
    sliced.push(splittedWord[0]);
    var newWordCopy = sliced;

    var joinedNewWord = newWordCopy.join('');

    return joinedNewWord + "ay";
  }
  else {
    return wordInput;
  }
};



$(document).ready(function() {
  $("form#pig-form").submit(function(event) {
    event.preventDefault();
    var wordInput = $("input#word").val();
    var result = pigLatin(wordInput);
    $("#result").text(result);
  });
});
