var character = 'j'

function isCharacterAVowel (char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true
  } else {
    return false
  }
}

console.log('It is ' + isCharacterAVowel(character) + ' that the character ' + character + ' is a vowel.')
