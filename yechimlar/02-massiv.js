// ============================================
// Mavzu 2: Massiv — YECHIMLAR
// Tekshirish:  node yechimlar/02-massiv.js
// ============================================

// 2.1 — yig'indi.  [1,2,3,4] -> 10
function yigindi(arr) {
  // TODO
  return arr.reduce((acc, curr) => acc + curr, 0)
}

// 2.2 — o'rtacha.  [2,4,6] -> 4
function ortacha(arr) {
  // TODO
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length
}

// 2.3 — eng kichik.  [3,7,2,9] -> 2
function engKichik(arr) {
  // TODO
  return Math.min(...arr)
}

// 2.4 — x bormi.  ([1,2,3], 2) -> true
function bormi(arr, x) {
  // TODO
  return arr.includes(x)
}

// 2.5 — musbatlar soni.  [-1,2,-3,4,5] -> 3
function musbatlarSoni(arr) {
  // TODO
  return arr.filter(num => num > 0).length
}

// 2.6 — teskari (.reverse() siz).  [1,2,3] -> [3,2,1]
function teskari(arr) {
  // TODO
  const result = []
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
  }
  return result
}


// 2.7 — ikkinchi eng katta.  [3,7,2,9,4] -> 7
function ikkinchiEngKatta(arr) {
  // TODO
  const sorted = arr.sort((a, b) => b - a)
  return sorted[1]
}

// 2.8 — har birini 2 ga ko'paytirish.  [1,2,3] -> [2,4,6]
function ikkiBaravar(arr) {
  // TODO
  return arr.map(num => num * 2)
}

// 2.9 — x indeksi (yo'q bo'lsa -1).  ([4,5,6], 5) -> 1
function indeks(arr, x) {
  // TODO
  return arr.indexOf(x) ?? -1
}

// 2.10 — running sum.  [1,2,3,4] -> [1,3,6,10]
function runningSum(arr) {
  // TODO
  const result = []
  let last = 0
  for (let i = 0; i <= arr?.length - 1; i++) {
    result.push(arr[i] + last)
    last += arr[i] 
  }
  return result
}

// ---------------- TEST ----------------
console.log("2.1 ", yigindi([1, 2, 3, 4]), "| kutilgan: 10");
console.log("2.2 ", ortacha([2, 4, 6]), "| kutilgan: 4");
console.log("2.3 ", engKichik([3, 7, 2, 9]), "| kutilgan: 2");
console.log("2.4 ", bormi([1, 2, 3], 2), "| kutilgan: true");
console.log("2.5 ", musbatlarSoni([-1, 2, -3, 4, 5]), "| kutilgan: 3");
console.log("2.6 ", JSON.stringify(teskari([1, 2, 3])), "| kutilgan: [3,2,1]");
console.log("2.7 ", ikkinchiEngKatta([3, 7, 2, 9, 4]), "| kutilgan: 7");
console.log("2.8 ", JSON.stringify(ikkiBaravar([1, 2, 3])), "| kutilgan: [2,4,6]");
console.log("2.9 ", indeks([4, 5, 6], 5), "| kutilgan: 1");
console.log("2.10", JSON.stringify(runningSum([1, 2, 3, 4])), "| kutilgan: [1,3,6,10]");
