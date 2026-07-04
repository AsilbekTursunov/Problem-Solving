// ============================================
// Mavzu 14: Bit Manipulation (Bitlar bilan ishlash) — YECHIMLAR
// Tekshirish:  node yechimlar/14-bit-manipulation.js
// ============================================

// 14.1 — toq sonmi (n & 1).  7 -> true, 8 -> false
function toqmi(n) {
  // TODO
}

// 14.2 — 2 ga ko'paytir (<<).  5 -> 10
function ikkiKopaytir(n) {
  // TODO
}

// 14.3 — 2 ning darajasimi (n & (n-1)).  16 -> true, 18 -> false
function ikkiDaraja(n) {
  // TODO
}

// 14.4 — Hamming masofasi.  (1, 4) -> 2
function hammingMasofa(a, b) {
  // TODO
}

// 14.5 — yagona son (XOR).  [4,1,2,1,2] -> 4
function yagonaSon(arr) {
  // TODO
}

// 14.6 — yo'qolgan son (0..n).  [3,0,1] -> 2
function yoqolganSon(arr) {
  // TODO
}

// 14.7 — 0..n har son uchun 1 bitlar soni.  5 -> [0,1,1,2,1,2]
function bitlarSoni(n) {
  // TODO
}

// 14.8 — bit to'ldiruvchi (complement).  5 -> 2
function toldiruvchi(n) {
  // TODO
}

// 14.9 — 4 ning darajasimi.  16 -> true, 15 -> false
function tortDaraja(n) {
  // TODO
}

// 14.10 — BONUS qo'shish (+/- siz, XOR + carry).  (2, 3) -> 5
function qoshish(a, b) {
  // TODO
}

// ---------------- TEST ----------------
console.log("14.1 ", toqmi(7), toqmi(8),             "| kutilgan: true false");
console.log("14.2 ", ikkiKopaytir(5),                "| kutilgan: 10");
console.log("14.3 ", ikkiDaraja(16), ikkiDaraja(18), "| kutilgan: true false");
console.log("14.4 ", hammingMasofa(1, 4),            "| kutilgan: 2");
console.log("14.5 ", yagonaSon([4,1,2,1,2]),         "| kutilgan: 4");
console.log("14.6 ", yoqolganSon([3,0,1]),           "| kutilgan: 2");
console.log("14.7 ", bitlarSoni(5),                  "| kutilgan: [0,1,1,2,1,2]");
console.log("14.8 ", toldiruvchi(5),                 "| kutilgan: 2");
console.log("14.9 ", tortDaraja(16), tortDaraja(15), "| kutilgan: true false");
console.log("14.10", qoshish(2, 3),                  "| kutilgan: 5");
