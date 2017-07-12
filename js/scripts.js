var pigLatin = function(wordInput) {
var vowel = ["a", "e","i", "o", "u"];
var wordInputSplit = wordInput.split('');

  if (vowel.ofIndex(wordInputSplit[0]) != -1) {
    wordInputSplit[0] = wordInputSplit + "way";
  }
  else }
    return wordInput;
  }

$(document).ready(function() {
  $("form#pig-form").submit(function(event) {
    event.preventDefault();
    var wordInput = $("input#word").val();
    var result = pigLatin(wordInput);
    $("#result").text(result);
  });
});
