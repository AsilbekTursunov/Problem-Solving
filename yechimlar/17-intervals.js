// ============================================
// Mavzu 17: Intervallar (Intervals) — YECHIMLAR
// Tekshirish:  node yechimlar/17-intervals.js
// ============================================

// 17.1 — ikki interval kesishadimi.  ([1,3],[2,4]) -> true
function ustmaUst(a, b) {
  // TODO
}

// 17.2 — boshiga qarab sarala.  [[3,4],[1,2]] -> [[1,2],[3,4]]
function boshBoyichaSarala(intervals) {
  // TODO
}

// 17.3 — hamma uchrashuvda qatnashsa bo'ladimi.  [[0,30],[5,10],[15,20]] -> false
function hammaUchrashuv(intervals) {
  // TODO
}

// 17.4 — yangi intervalni qo'yib birlashtir.  ([[1,3],[6,9]],[2,5]) -> [[1,5],[6,9]]
function qoyish(intervals, newInt) {
  // TODO
}

// 17.5 — minimal xonalar soni.  [[0,30],[5,10],[15,20]] -> 2
function minXona(intervals) {
  // TODO
}

// 17.6 — kesishmaslik uchun o'chiriladigan minimal son.  [[1,2],[2,3],[3,4],[1,3]] -> 1
function ortiqchaOchir(intervals) {
  // TODO
}

// 17.7 — ikki saralangan ro'yxat kesishmasi.  ([[0,2],[5,10]],[[1,5],[8,12]]) -> [[1,2],[5,5],[8,10]]
function kesishma(A, B) {
  // TODO
}

// 17.8 — bir vaqtdagi maksimal ustma-ust soni.  [[1,4],[2,5],[3,6]] -> 3
function maxBirvaqt(intervals) {
  // TODO
}

// 17.9 — BONUS minimal o'qlar.  [[10,16],[2,8],[1,6],[7,12]] -> 2
function minOq(points) {
  // TODO
}

// 17.10 — BONUS mashina pool.  ([[2,1,5],[3,3,7]],4) -> false
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
