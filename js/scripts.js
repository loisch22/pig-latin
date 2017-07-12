var pigLatin = function(wordInput) {
  var vowel = ["a", "e", "i", "o", "u"];
  var vowelCaps = ["A", "E", "I", "O", "U"]
  var wordInputSplit = wordInput.split('');
  var firstLetter = wordInputSplit[0];

  if (vowel.indexOf(firstLetter) != -1) {
    var firstLetterReturn = wordInputSplit.join('') + "way";
    return firstLetterReturn;
  }
  else if(vowelCaps.indexOf(firstLetter) != -1) {
    var firstLetterReturn = wordInputSplit.join('') + "way";
    return firstLetterReturn;

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
