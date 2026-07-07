// ============================================
// Mavzu 20: Aralash takrorlash (Mixed) — YECHIMLAR
// Tekshirish:  node yechimlar/20-aralash.js
// ============================================

// 20.1 — So'zlarni teskari qilish.
// Bitta gap (matn) satri berilgan. Undagi SO'ZLAR tartibini teskari qilib,
// bitta satr qaytaring. So'zlar orasida faqat bitta probel qolsin
// (boshi, oxiri va ortiqcha probellar tashlansin).
// Misol: "the sky is blue" -> "blue is sky the"
function sozTeskari(s) {
  // TODO
}

// 20.2 — Ko'pchilik element.
// Massivda yarmidan ko'p marta (ya'ni n/2 dan ortiq) uchraydigan
// elementni qaytaring. Bunday element albatta bitta bor deb hisoblang.
// (hash map bilan sanash yoki Boyer-Moore ovoz berish usuli ishlaydi)
// Misol: [2,2,1,1,1,2,2] -> 2   (2 to'rt marta, 7 tadan yarmidan ko'p)
function kopchilik(arr) {
  // TODO
}

// 20.3 — Umumiy prefiks.
// Satrlar massivi berilgan. Barcha satrlar uchun umumiy bo'lgan eng uzun
// boshlang'ich bo'lak (prefix = satr boshidagi qism) ni qaytaring.
// Umumiy boshlanish bo'lmasa, bo'sh satr "" qaytaring.
// Misol: ["flower","flow","flight"] -> "fl"   (uchalasi "fl" bilan boshlanadi)
function umumiyPrefiks(arr) {
  // TODO
}

// 20.4 — Ikki saralangan massivni birlashtirish.
// a va b ikkalasi saralangan. a da m ta haqiqiy son, keyin n ta 0
// (bo'sh joy); b da n ta son bor. Ikkalasini saralangan holicha
// a ning ICHIGA birlashtiring va yangilangan a ni qaytaring.
// Misol: ([1,2,3,0,0,0],3,[2,5,6],3) -> [1,2,2,3,5,6]
function birlashtirSarala(a, m, b, n) {
  // TODO
}

// 20.5 — Palindromga aylantirish (1 harf o'chirish).
// Palindrom = teskari o'qilganda ham bir xil satr (masalan "aba").
// Berilgan satrdan KO'PI BILAN bitta harfni o'chirib palindrom
// hosil qilib bo'ladimi? true/false qaytaring (o'zi palindrom bo'lsa ham true).
// Misol: "abca" -> true   (c ni o'chirsak "aba")
function palindromII(s) {
  // TODO
}

// 20.6 — k-chi eng katta element.
// Massivdagi k-chi eng katta sonni qaytaring
// (k=1 eng kattasi, k=2 ikkinchi eng kattasi, ...).
// Bu tartibdagi element, takroriylar alohida sanalmaydi.
// Misol: ([3,2,1,5,6,4],2) -> 5   (kattadan: 6,5,4,... — 2-si 5)
function kInchiKatta(arr, k) {
  // TODO
}

// 20.7 — Ranglarni saralash.
// Massivda faqat 0, 1, 2 sonlari bor (bayroq ranglari deb tasavvur qiling).
// Massivni JOYIDA (yangi massiv yaratmasdan) shunday tartiblangki, avval
// barcha 0 lar, keyin 1 lar, oxirida 2 lar tursin. O'zgargan massivni qaytaring.
// Misol: [2,0,2,1,1,0] -> [0,0,1,1,2,2]
function ranglarSarala(arr) {
  // TODO
}

// 20.8 — Anagram tekshirish (saralash bilan).
// Anagram = bir xil harflardan, faqat tartibi boshqacha tuzilgan ikki satr.
// Ikki satrni saralab, natijalar teng bo'lsa ular anagram.
// true yoki false qaytaring.
// Misol: ("listen","silent") -> true   (ikkalasi ham "eilnst" harflaridan)
function anagramSort(a, b) {
  // TODO
}

// 20.9 — Uch son yig'indisi (3Sum).
// Massivdan UCHTA son tanlab, yig'indisi aynan 0 bo'lgan barcha NOYOB
// (takrorlanmaydigan) uchliklarni toping.
// Har uchlik ichidagi sonlar o'suvchi tartibda, natija ro'yxati ham tartibli.
// Misol: [-1,0,1,2,-1,-4] -> [[-1,-1,2],[-1,0,1]]
function uchYigindi(arr) {
  // TODO
}

// 20.10 — BONUS: Yomg'ir suvini ushlash.
// Har son bitta ustun (devor) balandligini bildiradi. Yomg'irdan so'ng
// ustunlar orasidagi chuqurchalarda ushlanib qolgan suv hajmini qaytaring.
// Har katak ustidagi suv = chapdagi va o'ngdagi eng baland ustunning
// kichigidan katakning o'z balandligini ayirgani.
// Misol: [0,1,0,2,1,0,1,3,2,1,2,1] -> 6
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
