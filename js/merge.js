function compareNumber (a, b) {
  return a - b
}

function merge (arrayOne, arrayTwo) {
  var arrayThree = arrayOne.concat(arrayTwo)
  arrayThree = arrayThree.sort(compareNumber)
  return arrayThree
}

console.log(merge([31,7,9], [12, 605, 39]))
