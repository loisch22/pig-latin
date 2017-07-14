var vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]

var pigLatin = function(wordInput) {
  var splittedWord = wordInput.split('');
  var consWord = [];

  for (var i = 0; i < vowels.length; i++) {
    if (splittedWord[0] === vowels[i]) {
    return splittedWord.join('') + "way";
    }
   for (j = 0; j < 3; j++) {
        if (splittedWord[j] !== vowels[j]) {
        var consWord1 = splittedWord[j];
        consWord.push(consWord1);
      } debugger;
    } var sliceWord = splittedWord.slice(j);
      sliceWord.push(consWord);
      return  sliceWord.join('') + "ay";
    }
    return wordInput;
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
