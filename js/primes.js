function isPrime (num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num > 1
}

function primes (max) {
  var arrayPrimes = []
  for (var j = 2; j <= max; j++) {
    if (isPrime(j) === true) {
      arrayPrimes.push(j)
    }
  }
  return arrayPrimes
}

console.log(primes(31))
