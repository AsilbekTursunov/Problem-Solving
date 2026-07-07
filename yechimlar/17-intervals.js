// ============================================
// Mavzu 17: Intervallar (Intervals) — YECHIMLAR
// Tekshirish:  node yechimlar/17-intervals.js
// ============================================

// 17.1 — Ikki interval kesishadimi?
// Har biri [boshi, oxiri] ko'rinishidagi ikki interval berilgan.
// Ular hech bo'lmasa bitta umumiy nuqtaga ega bo'lsa — kesishadi.
// Kesishsa true, umuman tegmasa false qaytaring.
// Misol: ([1,3],[2,4]) -> true
function ustmaUst(a, b) {
  // TODO
}

// 17.2 — Intervallarni boshiga qarab sarala.
// Intervallar ro'yxati berilgan.
// Har birining boshi (birinchi soni) o'sish tartibida bo'lsin.
// Saralangan yangi ro'yxatni qaytaring.
// Misol: [[3,4],[1,2]] -> [[1,2],[3,4]]
function boshBoyichaSarala(intervals) {
  // TODO
}

// 17.3 — Barcha uchrashuvlarga ulgurasizmi?
// Har biri [boshlanish, tugash] ko'rinishidagi uchrashuvlar ro'yxati berilgan.
// Ikki uchrashuv vaqti ustma-ust tushsa, hammasiga ulgurib bo'lmaydi.
// Mumkin bo'lsa true, aks holda false qaytaring.
// Misol: [[0,30],[5,10],[15,20]] -> false   ([0,30] va [5,10] ustma-ust)
function hammaUchrashuv(intervals) {
  // TODO
}

// 17.4 — Yangi intervalni qo'yib birlashtir.
// Saralangan, o'zaro kesishmaydigan intervallar va bitta yangi interval berilgan.
// Yangi intervalni to'g'ri joyga qo'ying.
// Agar u qo'shnilari bilan ustma-ust tushsa — ularni bitta katta intervalga birlashtiring.
// Yakuniy ro'yxatni qaytaring.
// Misol: ([[1,3],[6,9]],[2,5]) -> [[1,5],[6,9]]
function qoyish(intervals, newInt) {
  // TODO
}

// 17.5 — Kerakli minimal xonalar soni.
// Har biri [boshlanish, tugash] ko'rinishidagi uchrashuvlar ro'yxati berilgan.
// Bir vaqtda bo'layotgan har bir uchrashuv uchun alohida xona kerak.
// Hammasini o'tkazish uchun eng kamida nechta xona kerakligini qaytaring.
// Misol: [[0,30],[5,10],[15,20]] -> 2
function minXona(intervals) {
  // TODO
}

// 17.6 — Kesishmaslik uchun nechtasini o'chirish kerak?
// Intervallar ro'yxati berilgan.
// Qolganlari bir-biri bilan kesishmasligi uchun eng kamida nechta intervalni
// olib tashlash kerakligini qaytaring (faqat chekkasi tegishi kesishish emas).
// Misol: [[1,2],[2,3],[3,4],[1,3]] -> 1
function ortiqchaOchir(intervals) {
  // TODO
}

// 17.7 — Ikki ro'yxatning kesishmasi.
// Ikkita saralangan interval ro'yxati (A va B) berilgan.
// Har bir A va B intervalining umumiy (ustma-ust tushgan) qismini toping.
// Shu umumiy bo'laklar ro'yxatini qaytaring.
// Misol: ([[0,2],[5,10]],[[1,5],[8,12]]) -> [[1,2],[5,5],[8,10]]
function kesishma(A, B) {
  // TODO
}

// 17.8 — Bir vaqtda eng ko'p nechta interval ustma-ust?
// Intervallar ro'yxati berilgan.
// Vaqt o'qidagi biror nuqtada bir vaqtning o'zida eng ko'pi bilan
// nechta interval ustma-ust tushishini (bir-birini qoplashini) qaytaring.
// Misol: [[1,4],[2,5],[3,6]] -> 3
function maxBirvaqt(intervals) {
  // TODO
}

// 17.9 — BONUS: Minimal o'qlar bilan barcha sharlarni yorish.
// Har bir shar [boshi, oxiri] diapazonda X o'qi bo'ylab turadi.
// Bir x nuqtaga o'q otsangiz, boshi <= x <= oxiri bo'lgan barcha sharlar yoriladi.
// Barcha sharlarni yorish uchun kerak bo'ladigan eng kam o'qlar sonini qaytaring.
// Misol: [[10,16],[2,8],[1,6],[7,12]] -> 2
function minOq(points) {
  // TODO
}

// 17.10 — BONUS: Yo'lovchilarni sig'dirib bo'ladimi?
// Sayohatlar ro'yxati berilgan, har biri [yo'lovchi_soni, boshlanish, tugash].
// Mashina sig'imi cap ham berilgan.
// Yo'l davomida yo'lovchilar soni hech qachon cap dan oshmasa true, oshsa false.
// Misol: ([[2,1,5],[3,3,7]],4) -> false
function mashinaPool(trips, cap) {
  // TODO
}

// ---------------- TEST ----------------
console.log("17.1 ", ustmaUst([1,3],[2,4]), ustmaUst([1,2],[3,4]), "| kutilgan: true false");
console.log("17.2 ", JSON.stringify(boshBoyichaSarala([[3,4],[1,2]])), "| kutilgan: [[1,2],[3,4]]");
console.log("17.3 ", hammaUchrashuv([[0,30],[5,10],[15,20]]), "| kutilgan: false");
console.log("17.4 ", JSON.stringify(qoyish([[1,3],[6,9]],[2,5])), "| kutilgan: [[1,5],[6,9]]");
console.log("17.5 ", minXona([[0,30],[5,10],[15,20]]), "| kutilgan: 2");
console.log("17.6 ", ortiqchaOchir([[1,2],[2,3],[3,4],[1,3]]), "| kutilgan: 1");
console.log("17.7 ", JSON.stringify(kesishma([[0,2],[5,10]],[[1,5],[8,12]])), "| kutilgan: [[1,2],[5,5],[8,10]]");
console.log("17.8 ", maxBirvaqt([[1,4],[2,5],[3,6]]), "| kutilgan: 3");
console.log("17.9 ", minOq([[10,16],[2,8],[1,6],[7,12]]), "| kutilgan: 2");
console.log("17.10", mashinaPool([[2,1,5],[3,3,7]],4), "| kutilgan: false (bonus)");
