# Mavzu 6: Binary Search (Ikkilik qidiruv) 🔍

**SARALANGAN** massivda elementni tez topish usuli. Oddiy qidiruv har birini ko'radi (sekin). Binary search har qadamda massivni **ikkiga bo'lib**, yarmini tashlab yuboradi — juda tez.

> Difficulty: 🟢 oson · 🟡 o'rta · 🔴 qiyin

---

## ✅ Yechilgan misol: Saralangan massivda element indeksini topish

> **Masala:** Saralangan massiv va `target` berilgan. `target` indeksini qaytaring (yo'q bo'lsa `-1`).
> `([1, 3, 5, 7, 9], 7)` → `3`

### 1-qadam: O'QI va TUSHUN
- **Input:** saralangan massiv + qidirilayotgan son
- **Output:** indeks yoki `-1`
- **Kalit:** massiv saralangan — bundan foydalanamiz!

### 2-qadam: QO'LDA YECH
`[1,3,5,7,9]`, target `7`. O'rtaga qarayman:
- `l=0, r=4`, o'rta `mid=2` → `arr[2]=5`. `5 < 7`? ha → demak `7` o'ngda. `l=mid+1=3`
- `l=3, r=4`, `mid=3` → `arr[3]=7`. Topildi! → **`3`** ✅

Har qadamda yarmini tashladim. 5 elementdan faqat 2 tasini ko'rdim.

### 3-qadam: REJA
1. `l=0`, `r=length-1`
2. `l <= r` bo'lguncha:
   - `mid = (l+r) / 2` (pastga yaxlitlash)
   - `arr[mid] === target` → `mid` qaytar
   - `arr[mid] < target` → o'ngga qara: `l = mid+1`
   - aks holda → chapga qara: `r = mid-1`
3. Topilmasa → `-1`

### 4-qadam: KOD
```javascript
function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) l = mid + 1;   // o'ng yarmiga o't
    else r = mid - 1;                       // chap yarmiga o't
  }
  return -1;
}
```

### 5-qadam: TEKSHIR
- `([1,3,5,7,9], 7)` → `3` ✅
- `([1,3,5,7,9], 1)` → `0` ✅
- `([1,3,5,7,9], 4)` → `-1` ✅ (yo'q)

> 🔑 **PATTERN — "ikkiga bo'l":** saralangan ma'lumotda `l`/`r`/`mid` bilan har qadamda yarmini tashlang. 1 million elementni 20 qadamda qidiradi! Asosiy xato — `while` shartini (`<=`) va `mid±1` ni chalkashtirish.

---

## 📝 10 ta mashq

`yechimlar/06-binary-search.js` da yeching.

**6.1.** 🟢 Saralangan massivda `target` indeksi (yo'q → `-1`).
`([2,5,8,12,16], 12)` → `3`

**6.2.** 🟢 Element bormi? binary search bilan (`true`/`false`).
`([1,2,3,4,5], 4)` → `true`

**6.3.** 🟡 Insert pozitsiya: `target` qaysi indeksga qo'yilsa, massiv saralangan qoladi.
`([1,3,5,6], 5)` → `2`, `([1,3,5,6], 2)` → `1`  *(LeetCode 35)*

**6.4.** 🟡 Son to'liq kvadratmi? (`true`/`false`) — `Math.sqrt` siz.
`16` → `true`, `14` → `false`  *(LeetCode 367)*

**6.5.** 🟡 Sonning kvadrat ildizi (butun qismi).
`8` → `2`, `16` → `4`  *(LeetCode 69)*

**6.6.** 🟡 Takrorlanuvchi saralangan massivda `target` **birinchi** uchragan indeksi.
`([5,7,7,8,8,10], 8)` → `3`  *(LeetCode 34)*

**6.7.** 🟡 Saralangan massivda `target` necha marta uchraydi.
`([1,2,2,2,3], 2)` → `3`

**6.8.** 🟡 Ceiling: `target` dan kichik bo'lmagan eng kichik qiymat.
`([1,3,5,7], 4)` → `5`

**6.9.** 🔴 Har element 2 martadan, faqat bittasi 1 marta (saralangan). Shu elementni toping.
`[1,1,2,3,3,4,4]` → `2`  *(LeetCode 540)*

**6.10.** 🔴 BONUS — "peak" element indeksi (qo'shnilaridan katta).
`[1,2,3,1]` → `2`  *(LeetCode 162)*
