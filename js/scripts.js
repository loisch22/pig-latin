var vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]

var pigLatin = function(wordInput) {
  var splittedWord = wordInput.split('');
  var consWord = [];

  for (i = 0; i < vowels.length; i++) {
    if (splittedWord[0] === vowels[i]) {
    return splittedWord.join('') + "way";
    }
  } for (j = 0; j < splittedWord.length; j++) {
        while (splittedWord[j] != vowels[i]) {
        var consWord1 = splittedWord[j];
        consWord.push(consWord1);
      } debugger;
        var sliceWord = splittedWord.slice(vowels[i]);
        sliceWord.push(consWord);

        return sliceWord.join('') + "ay";
      }
    }

    // return splittedWord.join('');


$(document).ready(function() {
  $("form#pig-form").submit(function(event) {
    event.preventDefault();
    var wordInput = $("input#word").val();
    var result = pigLatin(wordInput);
    $("#result").text(result);
  });
});
