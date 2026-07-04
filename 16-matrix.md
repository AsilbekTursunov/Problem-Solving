# Mavzu 16: 2D Massiv / Matrix (Matritsa) 🔲

Matritsa = **massivlar massivi** (`m[i][j]` — i-qator, j-ustun). Ikkita ichma-ich sikl bilan aylaniladi: tashqi sikl qatorlar, ichki sikl ustunlar bo'ylab.

> Difficulty: 🟢 oson · 🟡 o'rta · 🔴 qiyin

---

## ✅ Yechilgan misol: Matritsani transpozitsiya qilish

> **Masala:** Matritsani **transpozitsiya** qiling — qator va ustunlar joyini almashtiring (`m[i][j]` → `result[j][i]`).
> `[[1,2,3],[4,5,6]]` → `[[1,4],[2,5],[3,6]]`

### 1-qadam: O'QI va TUSHUN
- **Input:** `m` matritsa (qatorlar × ustunlar)
- **Output:** transpozitsiya qilingan yangi matritsa (ustunlar × qatorlar)
- **Kalit:** birinchi qator → birinchi ustun bo'ladi

### 2-qadam: QO'LDA YECH
`[[1,2,3],[4,5,6]]` — 2 qator, 3 ustun. Natija 3 qator, 2 ustun bo'ladi:
- `m[0][0]=1` → `r[0][0]`
- `m[0][1]=2` → `r[1][0]`
- `m[0][2]=3` → `r[2][0]`
- `m[1][0]=4` → `r[0][1]`
- `m[1][1]=5` → `r[1][1]`
- `m[1][2]=6` → `r[2][1]`

Natija: **`[[1,4],[2,5],[3,6]]`** ✅

### 3-qadam: REJA
1. Qatorlar soni `R = m.length`, ustunlar soni `C = m[0].length`
2. Yangi bo'sh matritsa `result` — `C` qator, har biri bo'sh massiv
3. Har `i` (qator), har `j` (ustun) uchun: `result[j][i] = m[i][j]`
4. `result` qaytar

### 4-qadam: KOD
```javascript
function transpoz(m) {
  const R = m.length;
  const C = m[0].length;
  const result = [];
  for (let j = 0; j < C; j++) result.push([]); // C ta bo'sh qator
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      result[j][i] = m[i][j];                   // qator <-> ustun
    }
  }
  return result;
}
```

### 5-qadam: TEKSHIR
- `[[1,2,3],[4,5,6]]` → `[[1,4],[2,5],[3,6]]` ✅
- `[[1,2],[3,4]]` → `[[1,3],[2,4]]` ✅
- `[[5]]` → `[[5]]` ✅ (1×1 o'zgarmaydi)

> 🔑 **PATTERN — "ikki sikl, i va j":** matritsada deyarli har doim tashqi sikl `i` (qator) va ichki sikl `j` (ustun). Indekslarni almashtirish (`[i][j]` → `[j][i]`) — aylantirish/transpozitsiyaning kaliti. Asosiy xato — qator/ustun sonini (`m.length` vs `m[0].length`) chalkashtirish.

---

## 📝 10 ta mashq

`yechimlar/16-matrix.js` da yeching.

**16.1.** 🟢 Barcha elementlar yig'indisi.
`[[1,2],[3,4]]` → `10`

**16.2.** 🟢 Har qator yig'indisi (massiv qaytaring).
`[[1,2],[3,4]]` → `[3,7]`

**16.3.** 🟡 Diagonallar yig'indisi (asosiy + yon diagonal; markaz katak bir marta sanaladi).
`[[1,2,3],[4,5,6],[7,8,9]]` → `25`  *(LeetCode 1572)*

**16.4.** 🟡 Soat yo'nalishida 90° aylantir (yangi matritsa).
`[[1,2],[3,4]]` → `[[3,1],[4,2]]`  *(LeetCode 48)*

**16.5.** 🟡 Har qatorni gorizontal **agdar**, keyin **invert** qil (`0↔1`).
`[[1,1,0],[1,0,1],[0,0,0]]` → `[[1,0,0],[0,1,0],[1,1,1]]`  *(LeetCode 832)*

**16.6.** 🟡 Har qatori saralangan matritsada `target` ni qidir (`true`/`false`).
`([[1,3,5],[7,9,11]], 9)` → `true`

**16.7.** 🟡 Spiral tartibda o'qi (tashqaridan ichkariga, soat yo'nalishi).
`[[1,2,3],[4,5,6],[7,8,9]]` → `[1,2,3,6,9,8,7,4,5]`  *(LeetCode 54)*

**16.8.** 🟡 Manfiylar soni: har qatori va har ustuni **kamayuvchi** tartibdagi matritsa.
`[[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]` → `8`  *(LeetCode 1351)*

**16.9.** 🔴 Orollar soni: `"1"` — quruqlik, `"0"` — suv. Gorizontal/vertikal bog'langan quruqliklar bitta orol.
`[["1","1","0"],["0","1","0"],["0","0","1"]]` → `2`  *(LeetCode 200)*

**16.10.** 🔴 BONUS — `1..n²` sonlarini spiral tartibda `n×n` matritsa qilib joylashtir.
`3` → `[[1,2,3],[8,9,4],[7,6,5]]`  *(LeetCode 59)*
