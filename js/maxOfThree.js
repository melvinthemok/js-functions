var one = 36
var two = 72
var three = 72

function maxOfThreeNumbers (one, two, three) {
  var max = one
  if ((two > one && two >= three) || (two >= one && two > three)) {
    return two
  } else if ((three > one && three > two) || (three >= one && three > two)) {
    return three
  } else {
    return one
  }
}

console.log('The greatest of the numbers ' + one + ', ' + two + ' and ' + three + ', is ' + maxOfThreeNumbers(45, 45, 42) + '.')
