// ============================================
// Mavzu 18: Set / Map naqshlari — YECHIMLAR
// Tekshirish:  node yechimlar/18-set-map.js
// ============================================

// 18.1 — Noyob elementlar soni.
// Sonlar massivi berilgan.
// Unda nechta xil (bir-biridan farqli) qiymat borligini qaytaring.
// Bir xil qiymat necha marta uchrasa ham faqat bir marta sanaladi.
// Misol: [1,2,2,3,3,3] -> 3
function noyobSoni(arr) {
  // TODO
}

// 18.2 — Dublikatlarni o'chir (tartibni saqlab).
// Sonlar massivi berilgan.
// Har bir qiymatning faqat birinchi uchraganini qoldiring, qolgan takrorlarni tashlang.
// Asl tartibni saqlab, yangi massivni qaytaring.
// Misol: [1,2,2,3,1] -> [1,2,3]
function dupOchir(arr) {
  // TODO
}

// 18.3 — Ikki massiv birlashmasi (union).
// Ikkita sonlar massivi berilgan.
// Ikkalasida uchragan barcha qiymatlarni, har birini bir martadan (noyob) oling.
// Ularni o'sish tartibida saralab qaytaring.
// Misol: ([1,2,2],[2,3]) -> [1,2,3]
function birlashma(a, b) {
  // TODO
}

// 18.4 — Ikki massiv kesishmasi.
// Ikkita sonlar massivi berilgan.
// Har ikkalasida ham uchraydigan qiymatlarni topping.
// Har birini bir martadan (noyob) qaytaring.
// Misol: ([1,2,2,1],[2,2,3]) -> [2]
function kesishma(a, b) {
  // TODO
}

// 18.5 — Birinchi takrorlangan element.
// Sonlar massivi berilgan.
// Chapdan o'ngga yurganda ikkinchi marta uchragan (oldin ko'rilgan) birinchi qiymatni toping.
// Shu qiymatni qaytaring.
// Misol: [2,1,3,5,3,2] -> 3
function birinchiTakror(arr) {
  // TODO
}

// 18.6 — Yo'qolgan sonni top.
// 0 dan n gacha sonlardan bittasi tushib qolgan massiv berilgan (massivda n ta son bor).
// Yetishmayotgan sonni qaytaring.
// Misol: [0,1,3] -> 2   (n=3, ya'ni 0,1,2,3 bo'lishi kerak edi, 2 yo'q)
function yoqolgan(arr) {
  // TODO
}

// 18.7 — Nechta tosh — javohir?
// Ikki satr: J — javohir harflari (har biri noyob), S — sizdagi toshlar.
// S dagi harflardan nechtasi J da mavjudligini sanang.
// Katta va kichik harflar farqli (a va A boshqa-boshqa).
// Misol: ("aA","aAAbbbb") -> 3
function javohir(J, S) {
  // TODO
}

// 18.8 — Izomorf satrlar.
// Ikki bir xil uzunlikdagi satr berilgan.
// Birinchi satr harflarini bir xilda almashtirib (bir harf faqat bitta harfga,
// ikki xil harf bitta harfga emas) ikkinchisini to'liq hosil qilib bo'lsa true, aks holda false.
// Misol: ("egg","add") -> true, ("foo","bar") -> false
function izomorf(a, b) {
  // TODO
}

// 18.9 — Anagram guruhlari soni.
// Satrlar ro'yxati berilgan.
// Bir xil harflardan tuzilgan (faqat tartibi boshqacha) satrlar bitta anagram guruhi.
// Nechta alohida guruh hosil bo'lishini qaytaring.
// Misol: ["eat","tea","tan","ate","nat","bat"] -> 3
function anagramGuruhSoni(arr) {
  // TODO
}

// 18.10 — BONUS: Yig'indisi 0 bo'lgan bo'lak bormi?
// Sonlar massivi berilgan.
// Ketma-ket (yonma-yon) joylashgan biror bo'lagi (subarray) yig'indisi aynan 0 bo'lsa true.
// Bunday bo'lak yo'q bo'lsa false qaytaring.
// Misol: [4,2,-3,1,6] -> true   ([2,-3,1] yig'indisi 0)
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
