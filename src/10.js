const { removeVowels } = require("./9");

function removeVowelsForWords(words) {
  var result = words.map(function(word) {
    return removeVowels(word);
  });

  return result;
}

module.exports = {removeVowelsForWords,};
