// ============================================
// Mavzu 3: Hash Map / Chastota — YECHIMLAR
// Tekshirish:  node yechimlar/03-hash-map.js
// ============================================

// 3.1 — x necha marta.  ([1,2,2,3,2], 2) -> 3
function nechaMarta(arr, x) {
  // TODO
  return arr.filter(item => item === x)?.length
}

// 3.2 — takror bormi.  [1,2,3,1] -> true
function takrorBormi(arr) {
  // TODO
  const newArr = new Set(arr)
  return arr?.length === newArr.size ? false : true
}

// 3.3 — chastota object.  [1,1,2,3] -> {1:2,2:1,3:1}
function chastota(arr) {
  // TODO
  return arr?.reduce((acc, value) => ({ ...acc, [value]: arr?.filter(num => num === value)?.length }), [])
}

// 3.4 — eng ko'p uchraydigan.  [1,3,3,2,3] -> 3
function engKopUchraydigan(arr) {
  // TODO
  let mostNumber = 0
  let mostCount = 0
  let repeats = {}
  arr?.forEach((item, index, arr) => {
    repeats = { ...repeats, [item]: ((repeats[item] || 0) + 1) }
  })
  Object.entries(repeats).reduce((acc, item, index) => {
    if (item[1] > mostCount) {
      mostNumber = item[0]
      mostCount = item[1]
    }
  }, 0)
  return mostNumber
}

// 3.5 — birinchi takrorlanmas belgi indeksi.  "leetcode" -> 0
function birinchiYagona(s) {
  // TODO 
  const words = s?.split('')

  for (const word of words) {
    const count = words.filter(item => item === word).length
    if (count === 1) {
      return s.indexOf(word)
    }
  }
}
// 3.6 — anagrammi.  ("anagram","nagaram") -> true
function anagrammi(a, b) {
  // TODO
  if (a?.length !== b?.length) return false

  const A = a?.split('')
  const B = b?.split('')
  const result = A.every((value) => {
    const gapALength = A?.filter(item => item === value)?.length
    const gapBLength = B?.filter(item => item === value)?.length
    if (gapALength === gapBLength) return true
    return false
  })
  return result
}



// 3.7 — yagona son.  [4,1,2,1,2] -> 4
function yagonaSon(arr) {
  // TODO
  const numbers = []
  arr?.forEach((acc, val) => {
    const length = arr?.filter(item => item === val)?.length
    if (length === 1) {
      numbers.push(val)
    }
  }, [])
  return numbers?.length > 1 ? numbers : numbers[0]
}


// 3.8 — kesishma.  ([1,2,2,1],[2,2]) -> [2]
function kesishma(a, b) {
  // TODO
  const lessOne = a?.length > b?.length ? b : a
  const result = lessOne?.reduce((acc, value) => {
    if (a.includes(value) && b.includes(value) && !acc.includes(value)) {
      acc.push(value)
    }
    return acc
  }, [])
  return result
}


// 3.9 — umumiy xil harflar soni.  ("abc","bcd") -> 2
function umumiyHarflar(a, b) {
  // TODO
  const A = a?.split('')
  const B = b?.split('')
  const lessOne = A?.length > B?.length ? B : A
  const result = lessOne?.reduce((acc, value) => {
    if (a.includes(value) && b.includes(value) && !acc.includes(value)) {
      acc.push(value)
    }
    return acc
  }, [])
  return result?.length
}


// 3.10 — juftlik bormi.  ([1,4,6], 10) -> true
function juftlikBormi(arr, target) {
  // TODO
  for (i = 0; i < arr.length; i++) {
    if ((arr[i] + arr[i + 1]) === target) {
      return true
    }
  }
}

// ---------------- TEST ----------------
console.log("3.1 ", nechaMarta([1, 2, 2, 3, 2], 2), "| kutilgan: 3");
console.log("3.2 ", takrorBormi([1, 2, 3, 1]), "| kutilgan: true");
console.log("3.3 ", JSON.stringify(chastota([1, 1, 2, 3])), '| kutilgan: {"1":2,"2":1,"3":1}');
console.log("3.4 ", engKopUchraydigan([1, 3, 3, 2, 3]), "| kutilgan: 3");
console.log("3.5 ", birinchiYagona("leetcode"), "| kutilgan: 0");
console.log("3.6 ", anagrammi("anagram", "nagaram"), "| kutilgan: true");
console.log("3.7 ", yagonaSon([4, 1, 2, 1, 2]), "| kutilgan: 4");
console.log("3.8 ", JSON.stringify(kesishma([1, 2, 2, 1], [2, 2])), "| kutilgan: [2]");
console.log("3.9 ", umumiyHarflar("abc", "bcd"), "| kutilgan: 2");
console.log("3.10", juftlikBormi([1, 4, 6], 10), "| kutilgan: true");
