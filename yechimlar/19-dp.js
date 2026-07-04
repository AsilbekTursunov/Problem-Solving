// ============================================
// Mavzu 19: Dynamic Programming — YECHIMLAR
// Tekshirish:  node yechimlar/19-dp.js
// ============================================

// 19.1 — Fibonachchi (sikl bilan).  10 -> 55
function fibDP(n) {
  // TODO
}

// 19.2 — zinapoyaga minimal narx.  [10,15,20] -> 15
function minNarx(cost) {
  // TODO
}

// 19.3 — uy o'g'risi (yonma-yon bo'lmaydi).  [2,7,9,3,1] -> 12
function uyOgri(arr) {
  // TODO
}

// 19.4 — minimal tangalar (bo'lmasa -1).  ([1,2,5],11) -> 3
function tangaAlmashtirish(coins, amount) {
  // TODO
}

// 19.5 — m x n to'rda yo'llar soni.  (3,7) -> 28
function yollarSoni(m, n) {
  // TODO
}

// 19.6 — Tribonachchi.  4 -> 4
function tribonachchi(n) {
  // TODO
}

// 19.7 — maksimal ko'paytmali pastki massiv.  [2,3,-2,4] -> 6
function maxKopaytma(arr) {
  // TODO
}

// 19.8 — eng uzun o'suvchi qism-ketma-ketlik.  [10,9,2,5,3,7,101,18] -> 4
function LIS(arr) {
  // TODO
}

// 19.9 — eng uzun umumiy qism-ketma-ketlik.  ("abcde","ace") -> 3
function LCS(a, b) {
  // TODO
}

// 19.10 — BONUS aylana o'g'ri.  [2,3,2] -> 3
function aylanaOgri(arr) {
  // TODO
}

// ---------------- TEST ----------------
console.log("19.1 ", fibDP(10),                          "| kutilgan: 55");
console.log("19.2 ", minNarx([10,15,20]),                "| kutilgan: 15");
console.log("19.3 ", uyOgri([2,7,9,3,1]),                "| kutilgan: 12");
console.log("19.4 ", tangaAlmashtirish([1,2,5], 11),     "| kutilgan: 3");
console.log("19.5 ", yollarSoni(3, 7),                   "| kutilgan: 28");
console.log("19.6 ", tribonachchi(4),                    "| kutilgan: 4");
console.log("19.7 ", maxKopaytma([2,3,-2,4]),            "| kutilgan: 6");
console.log("19.8 ", LIS([10,9,2,5,3,7,101,18]),         "| kutilgan: 4");
console.log("19.9 ", LCS("abcde", "ace"),                "| kutilgan: 3");
console.log("19.10", aylanaOgri([2,3,2]),                "| kutilgan: 3 (bonus)");
