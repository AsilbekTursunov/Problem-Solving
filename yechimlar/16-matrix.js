// ============================================
// Mavzu 16: 2D Massiv / Matrix (Matritsa) — YECHIMLAR
// Tekshirish:  node yechimlar/16-matrix.js
// ============================================

// 16.1 — barcha elementlar yig'indisi.  [[1,2],[3,4]] -> 10
function matritsaYigindi(m) {
  // TODO
}

// 16.2 — har qator yig'indisi.  [[1,2],[3,4]] -> [3,7]
function qatorYigindi(m) {
  // TODO
}

// 16.3 — diagonallar yig'indisi (markaz bir marta).  [[1,2,3],[4,5,6],[7,8,9]] -> 25
function diagonalYigindi(m) {
  // TODO
}

// 16.4 — soat yo'nalishida 90° aylantir.  [[1,2],[3,4]] -> [[3,1],[4,2]]
function aylantir90(m) {
  // TODO
}

// 16.5 — gorizontal agdar, keyin invert (0<->1).  [[1,1,0],[1,0,1],[0,0,0]] -> [[1,0,0],[0,1,0],[1,1,1]]
function agdarInvert(m) {
  // TODO
}

// 16.6 — har qatori saralangan matritsada qidir.  ([[1,3,5],[7,9,11]],9) -> true
function qidir(m, t) {
  // TODO
}

// 16.7 — spiral tartibda o'qi.  [[1,2,3],[4,5,6],[7,8,9]] -> [1,2,3,6,9,8,7,4,5]
function spiral(m) {
  // TODO
}

// 16.8 — manfiylar soni (qator/ustun kamayuvchi).  -> 8
function manfiySanash(m) {
  // TODO
}

// 16.9 — orollar soni ("1" quruqlik, "0" suv).  -> 2
function orollar(grid) {
  // TODO
}

// 16.10 — BONUS 1..n^2 ni spiral n×n matritsa.  3 -> [[1,2,3],[8,9,4],[7,6,5]]
function spiralYasash(n) {
  // TODO
}

// ---------------- TEST ----------------
console.log("16.1 ", matritsaYigindi([[1,2],[3,4]]),          "| kutilgan: 10");
console.log("16.2 ", JSON.stringify(qatorYigindi([[1,2],[3,4]])), "| kutilgan: [3,7]");
console.log("16.3 ", diagonalYigindi([[1,2,3],[4,5,6],[7,8,9]]), "| kutilgan: 25");
console.log("16.4 ", JSON.stringify(aylantir90([[1,2],[3,4]])),  "| kutilgan: [[3,1],[4,2]]");
console.log("16.5 ", JSON.stringify(agdarInvert([[1,1,0],[1,0,1],[0,0,0]])), "| kutilgan: [[1,0,0],[0,1,0],[1,1,1]]");
console.log("16.6 ", qidir([[1,3,5],[7,9,11]],9),             "| kutilgan: true");
console.log("16.7 ", JSON.stringify(spiral([[1,2,3],[4,5,6],[7,8,9]])), "| kutilgan: [1,2,3,6,9,8,7,4,5]");
console.log("16.8 ", manfiySanash([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]), "| kutilgan: 8");
console.log("16.9 ", orollar([["1","1","0"],["0","1","0"],["0","0","1"]]), "| kutilgan: 2");
console.log("16.10", JSON.stringify(spiralYasash(3)),         "| kutilgan: [[1,2,3],[8,9,4],[7,6,5]] (bonus)");
