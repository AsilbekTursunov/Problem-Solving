// ============================================
// Mavzu 9: Stack — YECHIMLAR
// Tekshirish:  node yechimlar/09-stack.js
// ============================================

// 9.1 — Stack yordamida string'ni teskari aylantiring.
// String berilgan. Harflarini teskari tartibda joylashtirilgan yangi string qaytaring.
// (Har harfni stekka push qilib, keyin pop bilan chiqarsangiz tabiiy teskari chiqadi.)
// Misol: "abc" -> "cba"
function reverseStack(s) {
  // TODO
}

// 9.2 — Faqat () qavslari balansmi?
// Faqat ( va ) belgilaridan iborat string berilgan.
// Har ochilgan qavsga to'g'ri tartibda yopiluvchi juftlik bormi? Bo'lsa true, aks holda false.
// Misol: "(())" -> true (hammasi yopilgan), "())" -> false (bitta ortiqcha yopuvchi)
function balansSimple(s) {
  // TODO
}

// 9.3 — Yonma-yon bir xil harflarni o'chiring (toza bo'lguncha).
// Ketma-ket kelgan ikkita bir xil harfni o'chiring; o'chirgach yana yonma-yon juftlik
// hosil bo'lsa, uni ham o'chiring — boshqa o'chirib bo'lmaydigan holatgacha. Qolgan stringni qaytaring.
// Misol: "abbaca" -> "ca"   (avval bb o'chadi -> "aaca", keyin aa -> "ca")
function qoshDupOchir(s) {
  // TODO
}

// 9.4 — O'ngdagi birinchi kattaroq element.
// Har element uchun undan o'ngroqda turgan birinchi kattaroq qiymatni toping.
// Bunday element bo'lmasa -1 qo'ying. Natijani massiv sifatida qaytaring.
// Misol: [2,1,2,4,3] -> [4,2,4,-1,-1]   (oxirgi ikki elementdan o'ngda kattaroq yo'q)
function keyingiKatta(arr) {
  // TODO
}

// 9.5 — RPN (teskari polyak) ifodani hisoblang.
// Amal belgisi (+, -, *, /) o'zi ta'sir qiladigan ikki sondan KEYIN yoziladi
// (masalan "2 1 +" = 2+1). Tokenlar massivi berilgan; natijani son qilib qaytaring.
// Misol: ["2","1","+","3","*"] -> 9   (avval 2+1=3, keyin 3*3=9)
function evalRPN(tokens) {
  // TODO
}

// 9.6 — Beysbol o'yini ballari yig'indisi.
// Tokenlar: son -> o'sha balni yozing; "+" -> oxirgi ikki balning yig'indisini yozing;
// "D" -> oxirgi balni ikkilantirib yozing; "C" -> oxirgi yozilgan balni bekor qiling.
// Barcha yozib qolgan ballar yig'indisini qaytaring.
// Misol: ["5","2","C","D","+"] -> 30   (5; 2; C->5; D->5,10; +->5,10,15; yig'indi 30)
function baseball(ops) {
  // TODO
}

// 9.7 — Yonma-yon bir xil harfning katta+kichik juftini o'chiring.
// Ketma-ket kelgan bir xil harfning katta va kichik varianti (masalan "sS" yoki "Ss")
// "yomon" juftlik — uni o'chiring; o'chirgach yana shunday juftlik hosil bo'lsa, uni ham. Toza stringni qaytaring.
// Misol: "leEeetcode" -> "leetcode"   (o'rtadagi Ee/eE juftligi o'chadi)
function yaxshiSatr(s) {
  // TODO
}

// 9.8 — Backspace bilan solishtiring.
// Ikkita string berilgan; ulardagi # belgisi "backspace" (oldingi bitta harfni o'chirish) deb qaraladi.
// Har ikkalasini shu qoida bo'yicha "yozib bo'lgach", natijalar bir xil chiqadimi? Bir xil bo'lsa true, aks holda false.
// Misol: ("ab#c","ad#c") -> true   (ikkalasi ham "ac" ga aylanadi)
function backspaceCompare(a, b) {
  // TODO
}

// 9.9 — Necha kundan keyin harorat oshadi.
// Kunlik haroratlar massivi berilgan. Har kun uchun: undan kechroq kelib harorati yuqoriroq
// bo'lgan eng yaqin kungacha necha kun kutish kerakligini toping. Bunday kun bo'lmasa 0. Natijani massiv qilib qaytaring.
// Misol: [73,74,75,71,69,72,76,73] -> [1,1,4,2,1,1,0,0]
function kunlikHarorat(arr) {
  // TODO
}

// 9.10 — BONUS: Unix yo'lini soddalashtiring.
// Unix uslubidagi mutlaq fayl yo'li (string) berilgan. Kanonik ko'rinishga keltiring:
// ketma-ket / larni bittaga qisqartiring, oxiridagi ortiqcha / ni oling (ildiz / bo'lmasa).
// Misol: "/home//foo/" -> "/home/foo"   (qo'sh // bitta bo'ladi, oxirgi / olib tashlanadi)
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
