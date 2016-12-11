var words = ['interregnum', 'rococo', 'obsequious', 'extirpate']

function findLongestWord (array) {
  var maxLength = 0
  for (i = 0; i < array.length; i++) {
    if (array[i].length > maxLength) {
      maxLength = array[i].length
    }
  }
  return maxLength
}

console.log('The length of the longest word in the array ' + words + ' is ' + findLongestWord(words) + '.')
