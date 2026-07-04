// ============================================
// Mavzu 10: Recursion — YECHIMLAR
// Faqat rekursiya — sikl (for/while) ishlatmang!
// Tekshirish:  node yechimlar/10-recursion.js
// ============================================

// 10.1 — 1..n yig'indi (rekursiv).  5 -> 15
function yigindiN(n) {
  // TODO
}

// 10.2 — faktorial (rekursiv).  5 -> 120
function faktorialRec(n) {
  // TODO
}

// 10.3 — daraja base^exp.  (2,10) -> 1024
function daraja(base, exp) {
  // TODO
}

// 10.4 — teskari string (rekursiv).  "abc" -> "cba"
function teskariRec(s) {
  // TODO
}

// 10.5 — raqamlar yig'indisi (rekursiv).  1234 -> 10
function raqamYigRec(n) {
  // TODO
}

// 10.6 — EKUB (Evklid).  (48,18) -> 6
function ekub(a, b) {
  // TODO
}

// 10.7 — n-Fibonachchi.  10 -> 55
function fib(n) {
  // TODO
}

// 10.8 — palindrom (rekursiv).  "kayak" -> true, "olma" -> false
function palindromRec(s) {
  // TODO
}

// 10.9 — massiv yig'indisi (rekursiv).  [1,2,3,4] -> 10
function massivYigRec(arr) {
  // TODO
}

// 10.10 — BONUS Hanoi yurishlar soni.  3 -> 7
function hanoi(n) {
  // TODO
}

// ---------------- TEST ----------------
console.log("10.1 ", yigindiN(5),          "| kutilgan: 15");
console.log("10.2 ", faktorialRec(5),      "| kutilgan: 120");
console.log("10.3 ", daraja(2, 10),        "| kutilgan: 1024");
console.log("10.4 ", teskariRec("abc"),    "| kutilgan: cba");
console.log("10.5 ", raqamYigRec(1234),    "| kutilgan: 10");
console.log("10.6 ", ekub(48, 18),         "| kutilgan: 6");
console.log("10.7 ", fib(10),              "| kutilgan: 55");
console.log("10.8 ", palindromRec("kayak"), palindromRec("olma"), "| kutilgan: true false");
console.log("10.9 ", massivYigRec([1,2,3,4]), "| kutilgan: 10");
console.log("10.10", hanoi(3),             "| kutilgan: 7 (bonus)");
