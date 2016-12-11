var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumArray (num) {
  var sum = 0
  for (var i = 0; i < num.length; i++) {
    sum += num[i]
  }
  return sum
}

console.log('The sum of ' + num + ' is ' + sumArray(num) + '.')

function multiplyArray (num) {
  var prod = 1
  for (var i = 0; i < num.length; i++) {
    prod *= num[i]
  }
  return prod
}

console.log('The product of ' + num + ' is ' + multiplyArray(num) + '.')
