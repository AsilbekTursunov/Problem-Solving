// ============================================
// Mavzu 20: Aralash takrorlash (Mixed) — YECHIMLAR
// Tekshirish:  node yechimlar/20-aralash.js
// ============================================

// 20.1 — so'zlarni teskari.  "the sky is blue" -> "blue is sky the"
function sozTeskari(s) {
  // TODO
}

// 20.2 — yarmidan ko'p uchraydigan element.  [2,2,1,1,1,2,2] -> 2
function kopchilik(arr) {
  // TODO
}

// 20.3 — eng uzun umumiy prefiks.  ["flower","flow","flight"] -> "fl"
function umumiyPrefiks(arr) {
  // TODO
}

// 20.4 — ikki saralangan massivni birlashtir.  ([1,2,3,0,0,0],3,[2,5,6],3) -> [1,2,2,3,5,6]
function birlashtirSarala(a, m, b, n) {
  // TODO
}

// 20.5 — 1 harf o'chirib palindrom bo'ladimi.  "abca" -> true
function palindromII(s) {
  // TODO
}

// 20.6 — k-chi eng katta.  ([3,2,1,5,6,4],2) -> 5
function kInchiKatta(arr, k) {
  // TODO
}

// 20.7 — 0,1,2 larni sarala (joyida).  [2,0,2,1,1,0] -> [0,0,1,1,2,2]
function ranglarSarala(arr) {
  // TODO
}

// 20.8 — anagram (saralash bilan).  ("listen","silent") -> true
function anagramSort(a, b) {
  // TODO
}

// 20.9 — yig'indisi 0 noyob uchliklar.  [-1,0,1,2,-1,-4] -> [[-1,-1,2],[-1,0,1]]
function uchYigindi(arr) {
  // TODO
}

// 20.10 — BONUS yomg'ir suvi.  [0,1,0,2,1,0,1,3,2,1,2,1] -> 6
function yomgirSuv(arr) {
  // TODO
}

// ---------------- TEST ----------------
console.log("20.1 ", sozTeskari("the sky is blue"),                  "| kutilgan: blue is sky the");
console.log("20.2 ", kopchilik([2,2,1,1,1,2,2]),                     "| kutilgan: 2");
console.log("20.3 ", umumiyPrefiks(["flower","flow","flight"]),      "| kutilgan: fl");
console.log("20.4 ", JSON.stringify(birlashtirSarala([1,2,3,0,0,0],3,[2,5,6],3)), "| kutilgan: [1,2,2,3,5,6]");
console.log("20.5 ", palindromII("abca"),                            "| kutilgan: true");
console.log("20.6 ", kInchiKatta([3,2,1,5,6,4], 2),                  "| kutilgan: 5");
console.log("20.7 ", JSON.stringify(ranglarSarala([2,0,2,1,1,0])),   "| kutilgan: [0,0,1,1,2,2]");
console.log("20.8 ", anagramSort("listen", "silent"),                "| kutilgan: true");
console.log("20.9 ", JSON.stringify(uchYigindi([-1,0,1,2,-1,-4])),   "| kutilgan: [[-1,-1,2],[-1,0,1]]");
console.log("20.10", yomgirSuv([0,1,0,2,1,0,1,3,2,1,2,1]),           "| kutilgan: 6");
