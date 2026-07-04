// ============================================
// Mavzu 9: Stack — YECHIMLAR
// Tekshirish:  node yechimlar/09-stack.js
// ============================================

// 9.1 — stack bilan teskari.  "abc" -> "cba"
function reverseStack(s) {
  // TODO
}

// 9.2 — faqat () balansmi.  "(())" -> true, "())" -> false
function balansSimple(s) {
  // TODO
}

// 9.3 — yonma-yon dublikatlarni o'chir.  "abbaca" -> "ca"
function qoshDupOchir(s) {
  // TODO
}

// 9.4 — o'ngdagi birinchi kattaroq (yo'q -> -1).  [2,1,2,4,3] -> [4,2,4,-1,-1]
function keyingiKatta(arr) {
  // TODO
}

// 9.5 — RPN hisoblash.  ["2","1","+","3","*"] -> 9
function evalRPN(tokens) {
  // TODO
}

// 9.6 — beysbol ballari.  ["5","2","C","D","+"] -> 30
function baseball(ops) {
  // TODO
}

// 9.7 — katta+kichik juftni o'chir.  "leEeetcode" -> "leetcode"
function yaxshiSatr(s) {
  // TODO
}

// 9.8 — backspace solishtirish.  ("ab#c","ad#c") -> true
function backspaceCompare(a, b) {
  // TODO
}

// 9.9 — kunlik harorat.  [73,74,75,71,69,72,76,73] -> [1,1,4,2,1,1,0,0]
function kunlikHarorat(arr) {
  // TODO
}

// 9.10 — BONUS yo'lni soddalashtir.  "/home//foo/" -> "/home/foo"
function soddalashtir(path) {
  // TODO
}

// ---------------- TEST ----------------
console.log("9.1 ", reverseStack("abc"),             "| kutilgan: cba");
console.log("9.2 ", balansSimple("(())"), balansSimple("())"), "| kutilgan: true false");
console.log("9.3 ", qoshDupOchir("abbaca"),          "| kutilgan: ca");
console.log("9.4 ", JSON.stringify(keyingiKatta([2,1,2,4,3])), "| kutilgan: [4,2,4,-1,-1]");
console.log("9.5 ", evalRPN(["2","1","+","3","*"]),  "| kutilgan: 9");
console.log("9.6 ", baseball(["5","2","C","D","+"]), "| kutilgan: 30");
console.log("9.7 ", yaxshiSatr("leEeetcode"),        "| kutilgan: leetcode");
console.log("9.8 ", backspaceCompare("ab#c","ad#c"), "| kutilgan: true");
console.log("9.9 ", JSON.stringify(kunlikHarorat([73,74,75,71,69,72,76,73])), "| kutilgan: [1,1,4,2,1,1,0,0]");
console.log("9.10", soddalashtir("/home//foo/"),     "| kutilgan: /home/foo (bonus)");
