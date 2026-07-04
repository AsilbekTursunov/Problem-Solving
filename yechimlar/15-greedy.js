// ============================================
// Mavzu 15: Greedy (Ochko'z algoritmlar) — YECHIMLAR
// Tekshirish:  node yechimlar/15-greedy.js
// ============================================

// 15.1 — oxirigacha sakrab yetib bo'ladimi.  [2,3,1,1,4] -> true, [3,2,1,0,4] -> false
function sakray(arr) {
  // TODO
}

// 15.2 — limonad qaytimi ($5,$10,$20).  [5,5,5,10,20] -> true
function limonad(arr) {
  // TODO
}

// 15.3 — pechene (g ishtaha, s o'lcham), nechta bola to'q.  ([1,2,3],[1,1]) -> 1
function pechene(g, s) {
  // TODO
}

// 15.4 — n ta gulni ekib bo'ladimi (yonma-yon bo'lmaydi).  ([1,0,0,0,1],1) -> true
function gulEk(arr, n) {
  // TODO
}

// 15.5 — aksiyadan ko'p marta savdo, max foyda.  [7,1,5,3,6,4] -> 7
function foydaII(prices) {
  // TODO
}

// 15.6 — minimal tangalar soni (kanonik).  ([1,5,10,25],36) -> 3
function minTanga(coins, amount) {
  // TODO
}

// 15.7 — bo'luvchi belgilar, bo'lak uzunliklari.  "ababcbacadefegdehijhklij" -> [9,7,8]
function boluvchiBelgilar(s) {
  // TODO
}

// 15.8 — gaz stansiya, boshlang'ich indeks.  ([1,2,3,4,5],[3,4,5,1,2]) -> 3
function gazStansiya(gas, cost) {
  // TODO
}

// 15.9 — oxirigacha minimal sakrashlar.  [2,3,1,1,4] -> 2
function sakrayII(arr) {
  // TODO
}

// 15.10 — BONUS shirinlik (konfet).  [1,0,2] -> 5
function shirinlik(arr) {
  // TODO
}

// ---------------- TEST ----------------
console.log("15.1 ", sakray([2,3,1,1,4]), sakray([3,2,1,0,4]), "| kutilgan: true false");
console.log("15.2 ", limonad([5,5,5,10,20]),          "| kutilgan: true");
console.log("15.3 ", pechene([1,2,3],[1,1]),          "| kutilgan: 1");
console.log("15.4 ", gulEk([1,0,0,0,1],1),            "| kutilgan: true");
console.log("15.5 ", foydaII([7,1,5,3,6,4]),          "| kutilgan: 7");
console.log("15.6 ", minTanga([1,5,10,25],36),        "| kutilgan: 3");
console.log("15.7 ", JSON.stringify(boluvchiBelgilar("ababcbacadefegdehijhklij")), "| kutilgan: [9,7,8]");
console.log("15.8 ", gazStansiya([1,2,3,4,5],[3,4,5,1,2]), "| kutilgan: 3");
console.log("15.9 ", sakrayII([2,3,1,1,4]),           "| kutilgan: 2");
console.log("15.10", shirinlik([1,0,2]),              "| kutilgan: 5 (bonus)");
