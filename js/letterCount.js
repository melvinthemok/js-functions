var testWord = 'The quick brown fox jumps over the lazy dog.'

function letterCount (word) {
  word = word.toLowerCase()
  word = word.replace(/[^A-Z]/ig, '')
  var histogram = {}
  for (var i = 0; i < word.length; i++) {
    var letter = word[i]
    histogram[letter] = (histogram[letter] || 0) + 1
  }
  return histogram
}

console.log(letterCount(testWord))



// newWord = word.replace(/[^A-Z]/ig, '')

/*
function genEmptyObj () {
  var a = 97
  var charArray = {}
  for (var i = 0; i < 26; i++) {
    charArray[String.fromCharCode(a + i)] = undefined
  }
  return charArray
}

console.log(genEmptyObj())

var numOfX = []

function genArrOfX (input) {
  var lowerCase = 97
  var upperCase = 65
  for (var i = 0; i < 26; i++) {
    var count = 0
    var lowerCaseString = input.split(String.fromCharCode(lowerCase + i))
    count += lowerCaseString.length - 1
    var upperCaseString = input.split(String.fromCharCode(upperCase + i))
    count += upperCaseString.length - 1
    numOfX.push(count)
  }
  return numOfX
}

function addToObject(array, object) {
  object[array] = array
}

// console.log(word.replace(/[^a]/g, '').length)
console.log(genArrOfX(word))
console.log(addToObject(genArrOfX(word), genEmptyObj()))
*/
