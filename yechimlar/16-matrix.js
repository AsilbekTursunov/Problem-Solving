// ============================================
// Mavzu 16: 2D Massiv / Matrix (Matritsa) — YECHIMLAR
// Tekshirish:  node yechimlar/16-matrix.js
// ============================================

// 16.1 — Barcha elementlar yig'indisi.
// Matritsa m (massivlar massivi) ichidagi barcha sonlarni qo'shib, bitta yig'indi qaytaring.
// Ikkita ichma-ich sikl bilan har bir katakni ko'rib chiqing.
// Misol: [[1,2],[3,4]] -> 10   (1 + 2 + 3 + 4 = 10)
function matritsaYigindi(m) {
  // TODO
}

// 16.2 — Har qator yig'indisi.
// Matritsa m ning har bir qatori (ichki massiv) elementlari yig'indisini alohida hisoblang.
// Natijalarni yangi massiv qilib qaytaring; uzunligi qatorlar soniga teng.
// Misol: [[1,2],[3,4]] -> [3,7]   (1+2=3, 3+4=7)
function qatorYigindi(m) {
  // TODO
}

// 16.3 — Diagonallar yig'indisi.
// Kvadrat matritsaning asosiy (m[i][i]) va yon diagonalidagi elementlar yig'indisini toping.
// Markaziy katak ikkala diagonalga tegishli bo'lsa, faqat bir marta qo'shiladi.
// Misol: [[1,2,3],[4,5,6],[7,8,9]] -> 25   (asosiy 1+5+9, yon 3+5+7, markaz 5 bir marta)
function diagonalYigindi(m) {
  // TODO
}

// 16.4 — 90° soat yo'nalishida aylantirish.
// Kvadrat matritsa m ni soat mili yo'nalishida 90 gradusga burilgan yangi matritsa qilib qaytaring.
// Aylantirilganda eski birinchi qator natijaning oxirgi ustuniga aylanadi.
// Misol: [[1,2],[3,4]] -> [[3,1],[4,2]]
function aylantir90(m) {
  // TODO
}

// 16.5 — Agdar va invert qil.
// 0 va 1 lardan iborat matritsa m: (1) har qatorni gorizontal agdaring (teskariga o'giring),
// (2) so'ng har bir sonni invert qiling (0 -> 1, 1 -> 0). Natijaviy matritsani qaytaring.
// Misol: [[1,1,0],[1,0,1],[0,0,0]] -> [[1,0,0],[0,1,0],[1,1,1]]   ([1,1,0] -> agdar [0,1,1] -> invert [1,0,0])
function agdarInvert(m) {
  // TODO
}

// 16.6 — Saralangan matritsada qidirish.
// Matritsa m (har qator chapdan o'ngga o'suvchi tartibda) va target soni beriladi.
// target matritsada bor bo'lsa true, aks holda false.
// Misol: ([[1,3,5],[7,9,11]],9) -> true   (9 soni ikkinchi qatorda mavjud)
function qidir(m, t) {
  // TODO
}

// 16.7 — Spiral o'qish.
// Matritsa m elementlarini spiral tartibda o'qing: tashqi chetdan soat mili yo'nalishida ichkariga —
// yuqori qator -> o'ng ustun -> pastki qator -> chap ustun, keyin ichki qatlam.
// O'qilgan sonlarni bitta massiv qilib qaytaring.
// Misol: [[1,2,3],[4,5,6],[7,8,9]] -> [1,2,3,6,9,8,7,4,5]   (tashqi halqa, oxirida markaz 5)
function spiral(m) {
  // TODO
}

// 16.8 — Manfiylar soni.
// Matritsa m da har qator ham, har ustun ham kamayuvchi (o'smaydigan) tartibda joylashgan.
// Matritsadagi manfiy (noldan kichik) sonlar sonini qaytaring.
// Misol: -> 8   (test massividagi jami manfiy sonlar soni)
function manfiySanash(m) {
  // TODO
}

// 16.9 — Orollar soni.
// grid — "1" (quruqlik) va "0" (suv) belgilaridan iborat matritsa.
// Orol — gorizontal yoki vertikal bog'langan quruqlik kataklari (diagonal hisoblanmaydi).
// Nechta alohida orol borligini qaytaring.
// Misol: -> 2   (test gridida ikkita alohida orol bor)
function orollar(grid) {
  // TODO
}

// 16.10 — BONUS: Spiral matritsa yasash.
// Butun son n beriladi. 1 dan n² gacha sonlarni spiral tartibda (tashqi chetdan soat mili
// yo'nalishida ichkariga) to'ldirilgan n × n matritsani hosil qilib qaytaring.
// Misol: 3 -> [[1,2,3],[8,9,4],[7,6,5]]   (1..8 aylana joylashadi, 9 markazga tushadi)
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
