var num = [1, 2, 3, 4, 5]

function sillySum (array) {
  var sum = 0
  for (var i = 0; i < array.length; i++)
    sum += (array[i] * i)
  return sum
}

console.log('The sum of the product of each number in the array ' + num + ', multiplied by its index, is ' + sillySum(num) + '.')
