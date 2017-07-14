


var pigLatin = function(wordInput) {

  var vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]
  var splittedWord = wordInput.split('');
debugger;
  for (i = 0; i < vowels.length; i++) {
    if (splittedWord[0] === vowels[i]) {
      return splittedWord.join('') + "way";
    } else  if (splittedWord[0] != vowels[i]) {
      var consWord1 = splittedWord.slice([1]);
      consWord1.push(splittedWord[0]);
      return consWord1.join('') + "ay";
    } else if (splittedWord.indexOf(vowels) != vowels[i]) {
      
    }
  }
}
    return wordInput;
};


$(document).ready(function() {
  $("form#pig-form").submit(function(event) {
    event.preventDefault();
    var wordInput = $("input#word").val();
    var result = pigLatin(wordInput);
    $("#result").text(result);
  });
});
