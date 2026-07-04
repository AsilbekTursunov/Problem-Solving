// ============================================
// Mavzu 4: Ikki ko'rsatkich — YECHIMLAR
// Tekshirish:  node yechimlar/04-ikki-korsatkich.js
// ============================================

// 4.1 — belgilar massivini teskari (joyida).  ['h','e','l','l','o'] -> ['o','l','l','e','h']
function teskariMassiv(arr) {
  // TODO (arr ni o'zgartirib, qaytaring)
  return arr.reverse()
}


// 4.2 — son palindrommi.  121 -> true, 123 -> false
function sonPalindrom(n) {
  // TODO
  const numbers = String(n)?.split('')
  return numbers[0] === numbers[numbers?.length - 1]
}

// 4.3 — saralangan massivda juftlik indekslari.  ([1,3,5,7], 8) -> [1,2]
function juftlikIndeks(arr, target) {
  // TODO
  let result = []
  for (i = 0; i <= arr?.length - 1; i++) {
    if ((arr[i] + arr[i + 1]) === target) {
      result = [i, i + 1]
    }
  }
  return result
}


// 4.4 — nollarni oxiriga surish.  [0,1,0,3,12] -> [1,3,12,0,0]
function nollarniSur(numbers) {
  // TODO
  const result = []
  const sorts = numbers?.sort((a, b) => b - a)
  for (const num of sorts) {
    if (num === 0) {
      result.push(num)
    } else {
      result.unshift(num)
    }
  }
  return result
}


// 4.5 — saralangan massivdan dublikatlarni olib tashlash, yangi uzunlik.  [1,1,2,2,3] -> 3
function dublikatOchir(arr) {
  // TODO
  const single = new Set(arr)
  return single.size
}


// 4.6 — unlilarni teskari.  "hello" -> "holle" opportunity
function unliTeskari(s) {
  // TODO
  const split = s?.split('')
  const unli = new Set(['a', 'e', 'i', 'o', 'u'])
  let left = 0
  let right = split?.length - 1

  while (left < right) {
    if (!unli.has(split[left])) {
      left++
    } else if (!unli.has(split[right])) {
      right--
    } else {
      [split[left], split[right]] = [split[right], split[left]]
      left++;
      right--;
    }
  }

  return split.join('')
}

// 4.7 — toza palindrom (faqat harf/raqam).  "A man, a plan, a canal: Panama" -> true
function tozaPalindrom(s) {
  // TODO
  const clean = String(s).toLowerCase().replace(/[\s,@#$?<'">.%&*(){}\[\]|\\]/g, '')
  const words = clean.split('')
  let left = 0
  let right = words?.length - 1
  const truePalindrom = []
  while (left <= right) {
    if (words[left] === words[right]) {
      truePalindrom.push(true)
    } else {
      truePalindrom.push(false)
    }
    left++
    right--
  }
  return truePalindrom?.every(item => item)
}

// 4.8 — saralangan kvadratlar.  [-4,-1,0,3,10] -> [0,1,9,16,100]
function kvadratlar(arr) {
  // TODO
  const math = arr.map(item => (item) ** 2)
  return math.sort((a, b) => a - b)
}

// 4.9 — subsequence.  ("abc","ahbgc") -> true
function subsequence(s, t) {
  // TODO
  const sWords = s?.split('')
  const tWords = t?.split('')
  const tWordsLetters = new Set(tWords)
  return sWords.every(item => tWordsLetters.has(item))
}



// 4.10 — BONUS max suv yuzasi.  [1,8,6,2,7,4,8,3,5] -> 49
function maxSuv(arr) {
  // TODO (ixtiyoriy)
  let left = 0;
  let right = arr?.length - 1
  let maxNumber = 0
  let between = {}
  while (left < right) {
    if (arr[left] > arr[right]) {
      let gather = Math.min(arr[left], arr[right]) * (right - left)
      if (gather > maxNumber) {
        maxNumber = gather
        between[gather] = [arr[left], arr[right]]
      }
      right--
    } else {
      let gather = Math.min(arr[right], arr[left]) * (right - left)
      if (gather > maxNumber) {
        maxNumber = gather
        between[gather] = [arr[right], arr[left]]
      }
      left++
    }
  }

  return maxNumber
} 


// ---------------- TEST ----------------
console.log("4.1 ", JSON.stringify(teskariMassiv(['h', 'e', 'l', 'l', 'o'])), '| kutilgan: ["o","l","l","e","h"]');
console.log("4.2 ", sonPalindrom(121), sonPalindrom(123), "| kutilgan: true false");
console.log("4.3 ", JSON.stringify(juftlikIndeks([1, 3, 5, 7], 8)), "| kutilgan: [1,2]");
console.log("4.4 ", JSON.stringify(nollarniSur([0, 1, 0, 3, 12])), "| kutilgan: [1,3,12,0,0]");
console.log("4.5 ", dublikatOchir([1, 1, 2, 2, 3]), "| kutilgan: 3");
console.log("4.6 ", unliTeskari("hello"), "| kutilgan: holle");
console.log("4.7 ", tozaPalindrom("A man, a plan, a canal: Panama"), "| kutilgan: true");
console.log("4.8 ", JSON.stringify(kvadratlar([-4, -1, 0, 3, 10])), "| kutilgan: [0,1,9,16,100]");
console.log("4.9 ", subsequence("abc", "ahbgc"), "| kutilgan: true");
console.log("4.10", maxSuv([1, 8, 6, 2, 5, 4, 8, 3, 7]), "| kutilgan: 49 (bonus)");
