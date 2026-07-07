// ============================================
// Mavzu 10: Recursion — YECHIMLAR
// Faqat rekursiya — sikl (for/while) ishlatmang!
// Tekshirish:  node yechimlar/10-recursion.js
// ============================================

// 10.1 — 1 dan n gacha yig'indi (rekursiv).
// Butun son n berilgan. 1 + 2 + ... + n yig'indisini rekursiya bilan hisoblang.
// (Base case: n === 0; rekursiv holat: n + yigindiN(n-1).)
// Misol: 5 -> 15   (1+2+3+4+5)
function yigindiN(n) {
  // TODO
}

// 10.2 — Faktorial (rekursiv).
// Butun son n berilgan. n! = 1*2*3*...*n ni rekursiya bilan hisoblang.
// (Base case: 0! = 1; rekursiv holat: n * faktorial(n-1).)
// Misol: 5 -> 120   (1*2*3*4*5)
function faktorialRec(n) {
  // TODO
}

// 10.3 — Daraja: base ning exp-darajasi.
// Ikki son base va exp berilgan. base ni exp marta o'ziga ko'paytirib (base^exp) qaytaring.
// (Base case: exp === 0 -> 1; rekursiv holat: base * daraja(base, exp-1).)
// Misol: (2,10) -> 1024
function daraja(base, exp) {
  // TODO
}

// 10.4 — String'ni teskari aylantiring (rekursiv).
// String berilgan. Harflari teskari tartibda joylashgan yangi stringni rekursiya bilan qaytaring.
// (Base case: bo'sh string; rekursiv holat: teskari(qolgani) + birinchi_harf.)
// Misol: "abc" -> "cba"
function teskariRec(s) {
  // TODO
}

// 10.5 — Sonning raqamlari yig'indisi (rekursiv).
// Butun son berilgan. Uning barcha raqamlari yig'indisini rekursiya bilan hisoblang.
// (Oxirgi raqam: n % 10; qolgan qismi: Math.floor(n / 10); base case: n === 0.)
// Misol: 1234 -> 10   (1+2+3+4)
function raqamYigRec(n) {
  // TODO
}

// 10.6 — Ikki sonning EKUB (GCD) — Evklid usuli.
// Ikki musbat son a va b berilgan. Ularning eng katta umumiy bo'luvchisini
// (ikkalasini ham qoldiqsiz bo'ladigan eng katta son) toping: gcd(a,b) = gcd(b, a % b), b === 0 bo'lsa javob a.
// Misol: (48,18) -> 6
function ekub(a, b) {
  // TODO
}

// 10.7 — n-Fibonachchi.
// Butun n berilgan. Fibonachchi ketma-ketligining n-a'zosini rekursiya bilan qaytaring
// (0, 1, 1, 2, 3, 5, 8, ...; har son oldingi ikkitasining yig'indisi). (Base: n < 2 -> n.)
// Misol: 10 -> 55
function fib(n) {
  // TODO
}

// 10.8 — String palindrommi? (rekursiv).
// String berilgan. U palindrom bo'lsa (oldindan ham, orqadan ham bir xil o'qilsa) true, aks holda false.
// (Chetdagi ikki harfni solishtiring; teng bo'lsa ichkarini tekshiring; 0 yoki 1 harfli string doim palindrom.)
// Misol: "kayak" -> true, "olma" -> false
function palindromRec(s) {
  // TODO
}

// 10.9 — Massiv elementlari yig'indisi (rekursiv).
// Sonlar massivi berilgan. Barcha elementlar yig'indisini rekursiya bilan hisoblang.
// (Base case: bo'sh massiv -> 0; rekursiv holat: birinchi element + qolgan massiv yig'indisi.)
// Misol: [1,2,3,4] -> 10
function massivYigRec(arr) {
  // TODO
}

// 10.10 — BONUS: Hanoi minorasi — minimal yurishlar soni.
// Disklar soni n berilgan. Barcha n diskni ko'chirib bo'lish uchun kerak bo'ladigan
// eng kam yurishlar sonini rekursiya bilan qaytaring. (Qoida: hanoi(n) = 2*hanoi(n-1) + 1, base: hanoi(0) = 0.)
// Misol: 3 -> 7
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
