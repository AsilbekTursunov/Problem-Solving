// ============================================
// Mavzu 5: Satrlar — YECHIMLAR
// Tekshirish:  node yechimlar/05-satrlar.js
// ============================================

// 5.1 — teskari.  "salom" -> "molas"
function teskari(s) {
  // TODO
  const words = s?.split('').reverse()
  return words.join('')
}

// 5.2 — katta-kichik almashtirish.  "Salom" -> "sALOM"
function registrAlmashtir(s) {
  // TODO
  const words = s?.split('')
  const result = words.reduce((acc, value, index) => {
    if (value === String(value).toUpperCase()) {
      acc += String(value).toLowerCase()
    } else if (value === String(value).toLowerCase()) {
      acc += String(value).toUpperCase()
    }
    return acc
  }, "")
  return result
}


// 5.3 — so'zlar soni.  "men kod yozaman" -> 3
function sozlarSoni(s) {
  // TODO
  const words = s?.split(' ')
  return words?.length
}

// 5.4 — eng uzun so'z.  "men dasturlashni organaman" -> "dasturlashni"
function engUzunSoz(s) {
  // TODO
  const words = s?.split(' ')
  const maxWord = words.reduce((acc, value) => {
    if (acc.uzun < String(value).length) {
      acc.word = value
      acc.uzun = String(value).length
    }
    return acc
  }, { uzun: 0, word: '' })
  return maxWord.word
}


// 5.5 — belgi necha marta.  ("banana","a") -> 3
function belgiSoni(s, belgi) {
  // TODO
  const letters = s.split('')
  return letters.reduce((acc, letter) => {
    if (letter === belgi) {
      acc++
    }
    return acc
  }, 0)
}

// 5.6 — palindrommi.  "kayak" -> true, "olma" -> false
function palindrom(s) {
  // TODO
  let left = 0;
  let right = s.length - 1
  const words = s.split('')

  const result = words.every(() => {
    while (left < right) {
      if (words[left] === words[right]) return true
      else return false
    }
  })

  return result
}

// 5.7 — probellarni olib tashlash.  "a b c" -> "abc"
function probelsiz(s) {
  // TODO
  return s.replace(/\s/g, '')
}

// 5.8 — birinchi katta harf indeksi (yo'q -> -1).  "abcDef" -> 3
function birinchiKattaHarf(s) {
  // TODO  
  for (i = 0; i <= s.length; i++) {
    const char = s[i];
    // Checks if character is uppercase and ensures it is a letter
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      return i;
    }
  }
  return -1
}



// 5.9 — IP defang.   -> "1[.]1[.]1[.]1"
function defang(s) {
  // TODO
  return s.replace(/\./g, "[.]")
} 

// 5.10 — so'zlarni teskari tartibda.  "men kod yozaman" -> "yozaman kod men"
function sozlarniTeskari(s) {
  // TODO
  const words = s.split(' ')
  return words.reverse().join(' ')
} 
// ---------------- TEST ----------------
console.log("5.1 ", teskari("salom"), "| kutilgan: molas");
console.log("5.2 ", registrAlmashtir("Salom"), "| kutilgan: sALOM");
console.log("5.3 ", sozlarSoni("men kod yozaman"), "| kutilgan: 3");
console.log("5.4 ", engUzunSoz("men dasturlashni organaman"), "| kutilgan: dasturlashni");
console.log("5.5 ", belgiSoni("banana", "a"), "| kutilgan: 3");
console.log("5.6 ", palindrom("kayak"), palindrom("olma"), "| kutilgan: true false");
console.log("5.7 ", probelsiz("a b c"), "| kutilgan: abc");
console.log("5.8 ", birinchiKattaHarf("abcDef"), "| kutilgan: 3");
console.log("5.9 ", defang("1.1.1.1"), "| kutilgan: 1[.]1[.]1[.]1");
console.log("5.10", sozlarniTeskari("men kod yozaman"), "| kutilgan: yozaman kod men");
