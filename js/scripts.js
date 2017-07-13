var pigLatin = function(wordInput) {
  var vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]
  var splittedWord = wordInput.split('');
  var twoLetters = [splittedWord[0], splittedWord[1]];
  var threeLetters = [splittedWord[0], splittedWord[1], splittedWord[2]];
  var consonant = ["c","d","f","g","h","i","j","k","l","m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "z", "C",
  "D","F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "Z", "Y"];



   if ((consonant.indexOf(threeLetters[0]) != -1) && (consonant.indexOf(threeLetters[1]) != -1) && (consonant.indexOf(threeLetters[2]) != -1) {
      var consThree = splittedWord.slice(3);
      console.log(consThree);
   }
   else if ((consonant.indexOf(twoLetters[0]) != -1) && (consonant.indexOf(twoLetters[1]) != -1)) {
    var consTwo = splittedWord.slice(2);
    consTwo.push(twoLetters.join(''));
    var newWordCopy2 = consTwo;

    var joinedNewWord2 = newWordCopy2.join('');

    return joinedNewWord2 + "ay";

  } else if (consonant.indexOf(splittedWord[0]) != -1) {
    var sliced = splittedWord.slice(1);
    sliced.push(splittedWord[0]);
    var newWordCopy = sliced;

    var joinedNewWord = newWordCopy.join('');

    return joinedNewWord + "ay";
  } else if (vowels.indexOf(splittedWord[0]) != -1) {
    var vowelReturn = splittedWord.join('') + "way";
    return vowelReturn;
  } else {
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
