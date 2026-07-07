// ============================================
// Mavzu 19: Dynamic Programming — YECHIMLAR
// Tekshirish:  node yechimlar/19-dp.js
// ============================================

// 19.1 — Fibonachchi (sikl bilan).
// Fibonachchi ketma-ketligi: 0,1,1,2,3,5,8,... — har son oldingi
// IKKI sonning yig'indisi (F0=0, F1=1). n-sonni toping.
// Rekursiya emas, oddiy sikl bilan pastdan-yuqoriga hisoblang.
// Misol: 10 -> 55   (0,1,1,2,3,5,8,13,21,34,55 — 10-a'zo)
function fibDP(n) {
  // TODO
}

// 19.2 — Zinapoyaga minimal narx.
// cost[i] — har pog'onaga qadam qo'yish narxi. Har qadamda 1 yoki 2
// pog'ona ko'tarilasiz; 0- yoki 1-indeksdan boshlab tura olasiz.
// Tepaga chiqishning ENG ARZON umumiy narxini qaytaring.
// Misol: [10,15,20] -> 15   (1-indeksdan sakrasak 15; 10+20=30 dan arzon)
function minNarx(cost) {
  // TODO
}

// 19.3 — Uy o'g'risi (house robber).
// arr — har uydagi pul miqdori. Maksimal pul o'g'irlang,
// LEKIN yonma-yon (qo'shni) ikki uyni birdan o'g'irlab bo'lmaydi.
// Eng ko'p qancha olishingiz mumkinligini qaytaring.
// Misol: [2,7,9,3,1] -> 12   (1-,3-,5-uylar: 2+9+1=12)
function uyOgri(arr) {
  // TODO
}

// 19.4 — Tanga almashtirish.
// coins — tanga nominallari (har biridan cheksiz), amount — yig'iladigan summa.
// Aynan amount ni yig'ish uchun kerak ENG KAM tangalar sonini qaytaring.
// Agar hech qanday usul bilan yig'ib bo'lmasa -1 qaytaring.
// Misol: ([1,2,5],11) -> 3   (5+5+1=11, ya'ni 3 ta tanga)
function tangaAlmashtirish(coins, amount) {
  // TODO
}

// 19.5 — To'rdagi yo'llar soni.
// m qator, n ustundan iborat to'r. Robot yuqori-chapdan past-o'ngga boradi,
// har qadamda faqat PASTGA yoki O'NGGA yura oladi.
// Nechta har xil yo'l borligini qaytaring.
// Misol: (3,7) -> 28   (3x7 to'rda jami 28 xil yo'l)
function yollarSoni(m, n) {
  // TODO
}

// 19.6 — Tribonachchi.
// Fibonachchiga o'xshash, lekin har son oldingi UCH sonning yig'indisi.
// Boshlang'ich: T0=0, T1=1, T2=1, keyin Tn = Tn-1 + Tn-2 + Tn-3.
// n-sonni qaytaring.
// Misol: 4 -> 4   (0,1,1,2,4,... — T4 = 2+1+1 = 4)
function tribonachchi(n) {
  // TODO
}

// 19.7 — Maksimal ko'paytmali pastki massiv.
// Pastki massiv (subarray = ketma-ket bo'lak) tanlab, elementlarini ko'paytiring.
// Eng katta ko'paytma qiymatini qaytaring.
// Diqqat: manfiy sonlar bor — eng katta VA eng kichik ko'paytmani birga kuzating.
// Misol: [2,3,-2,4] -> 6   ([2,3] bo'lagi: 2*3=6)
function maxKopaytma(arr) {
  // TODO
}

// 19.8 — Eng uzun o'suvchi qism-ketma-ketlik (LIS).
// Qism-ketma-ketlik = tartibni saqlab, oraliqlarni tashlab tanlash.
// Qat'iy o'suvchi (har keyingisi oldingisidan katta) eng uzunining
// UZUNLIGINI qaytaring.
// Misol: [10,9,2,5,3,7,101,18] -> 4   (masalan 2,3,7,101 — uzunligi 4)
function LIS(arr) {
  // TODO
}

// 19.9 — Eng uzun umumiy qism-ketma-ketlik (LCS).
// Ikki satr berilgan. Ikkalasida ham (tartibni saqlab, oraliqlarni tashlab)
// uchraydigan eng uzun umumiy qism-ketma-ketlik UZUNLIGINI qaytaring.
// Harflar yonma-yon bo'lishi shart emas, faqat tartib saqlansa bo'ldi.
// Misol: ("abcde","ace") -> 3   (a,c,e ikkalasida shu tartibda)
function LCS(a, b) {
  // TODO
}

// 19.10 — BONUS: Aylana bo'ylab uy o'g'risi.
// Yana uy o'g'risi (19.3), lekin uylar AYLANA bo'ylab: birinchi va oxirgi
// uy ham bir-biriga qo'shni. Demak ikkalasini birdan o'g'irlab bo'lmaydi.
// Maksimal o'ljani qaytaring (maslahat: "birinchisiz" va "oxirgisiz" holatlar).
// Misol: [2,3,2] -> 3   (birinchi va oxirgi qo'shni; o'rtadagi 3 eng yaxshisi)
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
