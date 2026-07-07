// ============================================
// Mavzu 14: Bit Manipulation (Bitlar bilan ishlash) — YECHIMLAR
// Tekshirish:  node yechimlar/14-bit-manipulation.js
// ============================================

// 14.1 — Toq sonmi?
// Butun son n berilgan. U toq bo'lsa true, juft bo'lsa false qaytaring.
// Maslahat: sonning oxirgi biti 1 bo'lsa son toq (n & 1).
// Misol: 7 -> true, 8 -> false   (7 = 111 oxirgi bit 1; 8 = 1000 oxirgi bit 0)
function toqmi(n) {
  // TODO
}

// 14.2 — Ikkiga ko'paytirish (bit surish bilan).
// Butun son n ni 2 ga ko'paytirilgan natijasini qaytaring.
// Lekin * emas, chapga surish amali (n << 1) bilan bajaring.
// Misol: 5 -> 10   (5 = 101, bir pozitsiya chapga surilsa 1010 = 10)
function ikkiKopaytir(n) {
  // TODO
}

// 14.3 — 2 ning darajasimi?
// n ni 2 ning darajasi (1, 2, 4, 8, 16, ...) sifatida yozib bo'lsa true, aks holda false.
// Maslahat: 2 ning darajasida faqat bitta 1 bit bo'ladi, shuning uchun n & (n-1) == 0.
// Musbat bo'lmagan sonlar uchun false.
// Misol: 16 -> true, 18 -> false   (16 = 10000 bitta 1; 18 = 10010 ikkita 1)
function ikkiDaraja(n) {
  // TODO
}

// 14.4 — Hamming masofasi.
// Ikkita son a va b ning ikkilik ko'rinishi nechta bit pozitsiyasida farq qilishini sanang.
// Maslahat: a ^ b (XOR) farq qilgan joyda 1 beradi, shu 1 bitlarni sanang.
// Misol: (1, 4) -> 2   (1 = 001, 4 = 100; birinchi va uchinchi pozitsiyada farq bor)
function hammingMasofa(a, b) {
  // TODO
}

// 14.5 — Yagona son.
// Massivda har son roppa-rosa 2 marta uchraydi, faqat bittasi 1 marta.
// Shu yolg'iz sonni toping.
// Maslahat: XOR (^) juftlarni yo'q qiladi (a ^ a = 0), yolg'iz son qoladi.
// Misol: [4,1,2,1,2] -> 4   (1 lar va 2 lar bir-birini yo'q qiladi, 4 qoladi)
function yagonaSon(arr) {
  // TODO
}

// 14.6 — Yo'qolgan son.
// n ta sondan iborat massiv 0..n oralig'idan olingan, lekin bitta son tushib qolgan.
// Yo'qolgan shu sonni toping.
// Misol: [3,0,1] -> 2   (massivda 0, 1, 3 bor, 0..3 dan 2 yo'q)
function yoqolganSon(arr) {
  // TODO
}

// 14.7 — Bitlar soni massivi.
// 0 dan n gacha (ikkalasi ham kiradi) har son uchun ikkilikdagi 1 bitlar sonini hisoblang.
// Natijalarni massiv qilib qaytaring; uzunligi n + 1 bo'ladi.
// Misol: 5 -> [0,1,1,2,1,2]   (0=0, 1=1, 2=10, 3=11, 4=100, 5=101 dagi 1 lar soni)
function bitlarSoni(n) {
  // TODO
}

// 14.8 — Bit to'ldiruvchi (complement).
// Musbat son n berilgan. Ikkilikdagi har bir bitni teskarisiga o'zgartiring (0->1, 1->0),
// lekin faqat kerakli bitlar doirasida (boshidagi ortiqcha nollarni qo'shmasdan).
// Misol: 5 -> 2   (5 = 101, har bit teskari qilinsa 010 = 2)
function toldiruvchi(n) {
  // TODO
}

// 14.9 — 4 ning darajasimi?
// n ni 4 ning darajasi (1, 4, 16, 64, ...) sifatida yozib bo'lsa true, aks holda false.
// Diqqat: 8 — 2 ning darajasi, lekin 4 ning darajasi emas.
// Misol: 16 -> true, 15 -> false   (16 = 4×4 = 4²; 15 esa 4 ning darajasi emas)
function tortDaraja(n) {
  // TODO
}

// 14.10 — BONUS: Qo'shmasdan qo'shish.
// a va b ning yig'indisini qaytaring, lekin + va - ishlatmasdan, faqat bit amallari bilan.
// Maslahat: a ^ b — ko'chirishsiz qo'shish, (a & b) << 1 — carry; carry 0 bo'lguncha takrorlang.
// Misol: (2, 3) -> 5   (bit amallari bilan bosqichma-bosqich hisoblanadi)
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
