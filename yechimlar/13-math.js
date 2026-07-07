// ============================================
// Mavzu 13: Math (Matematik masalalar) — YECHIMLAR
// Tekshirish:  node yechimlar/13-math.js
// ============================================

// 13.1 — 2 ning darajasimi?
// Musbat butun son n berilgan. Agar n ni 2 ning biror darajasi
// (1, 2, 4, 8, 16, ...) ko'rinishida yozib bo'lsa true, aks holda false.
// Misol: 16 -> true (2^4), 18 -> false
function ikkiDaraja(n) {
  // TODO
}

// 13.2 — Raqamli ildiz (digital root).
// Son berilgan. Uning raqamlarini qo'shing; natija ko'p xonali bo'lsa,
// yana raqamlarini qo'shishni bitta raqam qolguncha takrorlang.
// Misol: 38 -> 2   (3+8=11, keyin 1+1=2)
function raqamIldiz(n) {
  // TODO
}

// 13.3 — Songa 1 qo'shish.
// Sonning har raqami massiv elementi sifatida saqlangan ([1,2,3]=123).
// Songa 1 qo'shib, natijani yana shunday raqamlar massivi qilib qaytaring.
// Oxirgi raqam 9 bo'lsa xona ko'chishini (perenos) hisobga oling.
// Misol: [1,2,3] -> [1,2,4], [9,9] -> [1,0,0]
function plusOne(arr) {
  // TODO
}

// 13.4 — Tub sonlarni sanash.
// n soni berilgan. n dan qat'iy kichik nechta tub son borligini
// qaytaring. Tub son — 1 dan katta, faqat 1 ga va o'ziga bo'linadi.
// Misol: 10 -> 4   (2, 3, 5, 7)
function tubSanash(n) {
  // TODO
}

// 13.5 — EKUB (eng katta umumiy bo'luvchi, GCD).
// Ikkita musbat butun son berilgan. Ikkalasini ham qoldiqsiz
// bo'ladigan eng katta sonni topib qaytaring.
// Misol: (48, 18) -> 6
function ekub(a, b) {
  // TODO
}

// 13.6 — EKUK (eng kichik umumiy karra, LCM).
// Ikkita musbat butun son berilgan. Ikkalasiga ham qoldiqsiz
// bo'linadigan eng kichik sonni topib qaytaring.
// Misol: (4, 6) -> 12
function ekuk(a, b) {
  // TODO
}

// 13.7 — Sonni teskari o'girish.
// Butun son berilgan. Uning raqamlarini teskari tartibda yozib
// chiqing; ishora (musbat/manfiy) o'z joyida saqlanadi.
// Misol: -123 -> -321, 123 -> 321
function teskariSon(n) {
  // TODO
}

// 13.8 — Baxtli son (happy number).
// Musbat butun son berilgan. Har qadamda sonni raqamlari kvadratlari
// yig'indisi bilan almashtiring; 1 ga yetsa true, tsiklda aylanib
// qolib hech qachon 1 ga yetmasa false qaytaring.
// Misol: 19 -> true   (1+81=82 -> 64+4=68 -> ... -> 1)
function baxtliSon(n) {
  // TODO
}

// 13.9 — Excel ustun raqami.
// Excel ustun nomi (harflar) berilgan (A=1, B=2, ..., Z=26, AA=27, ...).
// Shu nomga mos ustun tartib raqamini qaytaring — 26 asosidagi sanoqqa o'xshaydi.
// Misol: "AB" -> 28   (A=1, B=2 -> 1*26 + 2 = 28)
function excelRaqam(s) {
  // TODO
}

// 13.10 — BONUS: Tez daraja (x^n).
// Asos x va daraja n (butun son) berilgan. x ni n-darajaga
// ko'tarib natijani qaytaring. n manfiy bo'lsa natija kasr (x^-n = 1/x^n).
// Misol: (2,10) -> 1024, (2,-2) -> 0.25
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
