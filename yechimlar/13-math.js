// ============================================
// Mavzu 13: Math (Matematik masalalar) — YECHIMLAR
// Tekshirish:  node yechimlar/13-math.js
// ============================================

// 13.1 — 2 ning darajasimi.  16 -> true, 18 -> false
function ikkiDaraja(n) {
  // TODO
}

// 13.2 — digital root.  38 -> 2
function raqamIldiz(n) {
  // TODO
}

// 13.3 — songa 1 qo'sh.  [1,2,3] -> [1,2,4], [9,9] -> [1,0,0]
function plusOne(arr) {
  // TODO
}

// 13.4 — n dan kichik tub sonlar soni.  10 -> 4
function tubSanash(n) {
  // TODO
}

// 13.5 — EKUB (GCD).  (48, 18) -> 6
function ekub(a, b) {
  // TODO
}

// 13.6 — EKUK (LCM).  (4, 6) -> 12
function ekuk(a, b) {
  // TODO
}

// 13.7 — teskari son (ishora saqlanadi).  -123 -> -321, 123 -> 321
function teskariSon(n) {
  // TODO
}

// 13.8 — happy number.  19 -> true
function baxtliSon(n) {
  // TODO
}

// 13.9 — Excel ustun raqami.  "AB" -> 28
function excelRaqam(s) {
  // TODO
}

// 13.10 — BONUS tez daraja x^n.  (2,10) -> 1024, (2,-2) -> 0.25
function daraja(x, n) {
  // TODO
}

// ---------------- TEST ----------------
console.log("13.1 ", ikkiDaraja(16), ikkiDaraja(18), "| kutilgan: true false");
console.log("13.2 ", raqamIldiz(38),                 "| kutilgan: 2");
console.log("13.3 ", plusOne([1,2,3]), plusOne([9,9]), "| kutilgan: [1,2,4] [1,0,0]");
console.log("13.4 ", tubSanash(10),                  "| kutilgan: 4");
console.log("13.5 ", ekub(48, 18),                   "| kutilgan: 6");
console.log("13.6 ", ekuk(4, 6),                     "| kutilgan: 12");
console.log("13.7 ", teskariSon(-123), teskariSon(123), "| kutilgan: -321 321");
console.log("13.8 ", baxtliSon(19),                  "| kutilgan: true");
console.log("13.9 ", excelRaqam("AB"),               "| kutilgan: 28");
console.log("13.10", daraja(2,10), daraja(2,-2),     "| kutilgan: 1024 0.25");
