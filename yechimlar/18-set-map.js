// ============================================
// Mavzu 18: Set / Map naqshlari — YECHIMLAR
// Tekshirish:  node yechimlar/18-set-map.js
// ============================================

// 18.1 — noyob elementlar soni.  [1,2,2,3,3,3] -> 3
function noyobSoni(arr) {
  // TODO
}

// 18.2 — dublikatlarni o'chir (tartib saqlanadi).  [1,2,2,3,1] -> [1,2,3]
function dupOchir(arr) {
  // TODO
}

// 18.3 — birlashma (union, saralangan noyob).  ([1,2,2],[2,3]) -> [1,2,3]
function birlashma(a, b) {
  // TODO
}

// 18.4 — kesishma (noyob).  ([1,2,2,1],[2,2,3]) -> [2]
function kesishma(a, b) {
  // TODO
}

// 18.5 — birinchi takrorlangan element.  [2,1,3,5,3,2] -> 3
function birinchiTakror(arr) {
  // TODO
}

// 18.6 — 0..n dan yo'qolgan son.  [0,1,3] -> 2
function yoqolgan(arr) {
  // TODO
}

// 18.7 — nechta tosh javohir.  ("aA","aAAbbbb") -> 3
function javohir(J, S) {
  // TODO
}

// 18.8 — izomorf satrlar.  ("egg","add") -> true, ("foo","bar") -> false
function izomorf(a, b) {
  // TODO
}

// 18.9 — anagram guruhlari soni.  ["eat","tea","tan","ate","nat","bat"] -> 3
function anagramGuruhSoni(arr) {
  // TODO
}

// 18.10 — BONUS yig'indisi 0 bo'lgan subarray bormi.  [4,2,-3,1,6] -> true
function nolYigindiBor(arr) {
  // TODO
}

// ---------------- TEST ----------------
console.log("18.1 ", noyobSoni([1,2,2,3,3,3]), "| kutilgan: 3");
console.log("18.2 ", JSON.stringify(dupOchir([1,2,2,3,1])), "| kutilgan: [1,2,3]");
console.log("18.3 ", JSON.stringify(birlashma([1,2,2],[2,3])), "| kutilgan: [1,2,3]");
console.log("18.4 ", JSON.stringify(kesishma([1,2,2,1],[2,2,3])), "| kutilgan: [2]");
console.log("18.5 ", birinchiTakror([2,1,3,5,3,2]), "| kutilgan: 3");
console.log("18.6 ", yoqolgan([0,1,3]), "| kutilgan: 2");
console.log("18.7 ", javohir("aA","aAAbbbb"), "| kutilgan: 3");
console.log("18.8 ", izomorf("egg","add"), izomorf("foo","bar"), "| kutilgan: true false");
console.log("18.9 ", anagramGuruhSoni(["eat","tea","tan","ate","nat","bat"]), "| kutilgan: 3");
console.log("18.10", nolYigindiBor([4,2,-3,1,6]), "| kutilgan: true (bonus)");
