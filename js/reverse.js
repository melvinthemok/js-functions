var num = 'jag testar'
var outputString = ''

function reverseString (num) {
  for (i = num.length - 1; i >= 0; i--) {
    outputString += num[i]
  }
  return outputString
}

console.log('The reverse of the string ' + num + ' is ' + reverseString(num) + '.')
