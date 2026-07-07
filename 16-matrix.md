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

**16.1.** 🟢 **Barcha elementlar yig'indisi.** Matritsa `m` (massivlar massivi) beriladi. Uning ichidagi **barcha** sonlarni qo'shib, bitta umumiy yig'indini qaytaring. Ikkita ichma-ich sikl bilan har bir katakni ko'rib chiqing.
   - **Misol:** `[[1,2],[3,4]]` → `10` — `1 + 2 + 3 + 4 = 10`.

**16.2.** 🟢 **Har qator yig'indisi.** Matritsa `m` beriladi. Har bir qatorning (ichki massivning) elementlari yig'indisini alohida hisoblab, natijalarni yangi massiv qilib qaytaring. Natija uzunligi qatorlar soniga teng bo'ladi.
   - **Misol:** `[[1,2],[3,4]]` → `[3,7]` — birinchi qator `1+2=3`, ikkinchi qator `3+4=7`.

**16.3.** 🟡 **Diagonallar yig'indisi.** Kvadrat matritsaning ikkala diagonalidagi (asosiy diagonal — chap-yuqoridan o'ng-pastga, `m[i][i]`; va yon diagonal — o'ng-yuqoridan chap-pastga) elementlar yig'indisini toping. Agar markaziy katak ikkala diagonalga ham tegishli bo'lsa (toq o'lchamli matritsada), u faqat **bir marta** qo'shiladi.
   - **Misol:** `[[1,2,3],[4,5,6],[7,8,9]]` → `25` — asosiy `1+5+9`, yon `3+5+7`, markaz `5` bir marta sanaladi: `1+9+3+7+5 = 25`.
   - *(LeetCode 1572)*

**16.4.** 🟡 **90° soat yo'nalishida aylantirish.** Kvadrat matritsa `m` beriladi. Uni soat mili yo'nalishida `90` gradusga burilgan **yangi** matritsa qilib qaytaring. Aylantirilganda eski birinchi qator natijaning oxirgi ustuniga aylanadi.
   - **Misol:** `[[1,2],[3,4]]` → `[[3,1],[4,2]]` — chap ustundagi `1,3` yuqori qatorga `3,1` bo'lib ko'chadi va hokazo.
   - *(LeetCode 48)*

**16.5.** 🟡 **Agdar va invert qil.** `0` va `1` lardan iborat matritsa `m` beriladi. Ikki bosqichni bajaring: (1) har bir qatorni gorizontal **agdaring** (ya'ni qatorni teskariga o'giring — masalan `[1,1,0]` → `[0,1,1]`); (2) so'ng har bir sonni **invert** qiling (`0` → `1`, `1` → `0`). Natijaviy matritsani qaytaring.
   - **Misol:** `[[1,1,0],[1,0,1],[0,0,0]]` → `[[1,0,0],[0,1,0],[1,1,1]]` — masalan `[1,1,0]` avval agdarilib `[0,1,1]`, so'ng invert bo'lib `[1,0,0]` bo'ladi.
   - *(LeetCode 832)*

**16.6.** 🟡 **Saralangan matritsada qidirish.** Matritsa `m` (har bir qator chapdan o'ngga o'suvchi tartibda saralangan) va `target` soni beriladi. Agar `target` matritsada bor bo'lsa `true`, aks holda `false` qaytaring.
   - **Misol:** `([[1,3,5],[7,9,11]], 9)` → `true` — `9` soni ikkinchi qatorda mavjud.

**16.7.** 🟡 **Spiral o'qish.** Matritsa `m` beriladi. Uning elementlarini spiral (aylana) tartibda o'qing: tashqi chetdan boshlab soat mili yo'nalishida ichkariga qarab — yuqori qator → o'ng ustun → pastki qator → chap ustun, keyin ichki qatlam. O'qilgan tartibdagi sonlarni bitta massiv qilib qaytaring.
   - **Misol:** `[[1,2,3],[4,5,6],[7,8,9]]` → `[1,2,3,6,9,8,7,4,5]` — tashqi halqa `1,2,3,6,9,8,7,4` aylanib o'qiladi, oxirida markaz `5`.
   - *(LeetCode 54)*

**16.8.** 🟡 **Manfiylar soni.** Matritsa `m` beriladi; unda har bir qator ham, har bir ustun ham **kamayuvchi** (o'smaydigan) tartibda joylashgan. Matritsadagi **manfiy** (noldan kichik) sonlar sonini qaytaring.
   - **Misol:** `[[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]` → `8` — matritsada jami `8` ta manfiy son bor.
   - *(LeetCode 1351)*

**16.9.** 🔴 **Orollar soni.** `grid` — `"1"` (quruqlik) va `"0"` (suv) belgilaridan iborat matritsa. Orol — gorizontal yoki vertikal (yonma-yon) bog'langan quruqlik kataklari to'plami; diagonal bog'lanish hisoblanmaydi. Nechta alohida orol borligini qaytaring.
   - **Misol:** `[["1","1","0"],["0","1","0"],["0","0","1"]]` → `2` — chap-yuqoridagi bog'langan `1` lar bitta orol, o'ng-pastdagi yolg'iz `1` ikkinchi orol.
   - *(LeetCode 200)*

**16.10.** 🔴 BONUS — **Spiral matritsa yasash.** Bitta butun son `n` beriladi. `1` dan `n²` gacha bo'lgan sonlarni spiral tartibda (tashqi chetdan soat mili yo'nalishida ichkariga qarab) to'ldirilgan `n × n` matritsani hosil qiling va qaytaring.
   - **Misol:** `3` → `[[1,2,3],[8,9,4],[7,6,5]]` — `1..9` sonlari tashqaridan `1,2,3,4,5,6,7,8` bo'lib aylana joylashadi, `9` markazga tushadi.
   - *(LeetCode 59)*
