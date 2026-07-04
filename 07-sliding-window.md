# Mavzu 7: Sliding Window (Suriluvchi oyna) 🪟

Massivning **ketma-ket bo'lagi** (oyna) ustida ishlash. Oynani har safar 1 qadam surganda, butun yig'indini qaytadan hisoblamaymiz — **eski elementni ayiramiz, yangisini qo'shamiz**. Shu nayrang sekin (O(n·k)) yechimni tez (O(n)) qiladi.

> Difficulty: 🟢 oson · 🟡 o'rta · 🔴 qiyin

---

## ✅ Yechilgan misol: `k` ta ketma-ket elementning maksimal yig'indisi

> **Masala:** Massiv va `k` berilgan. `k` ta yonma-yon elementning eng katta yig'indisini toping.
> `([2, 1, 5, 1, 3, 2], 3)` → `9` (5+1+3)

### 1-qadam: O'QI va TUSHUN
- **Input:** massiv + oyna kengligi `k`
- **Output:** eng katta oyna yig'indisi

### 2-qadam: QO'LDA YECH
`[2,1,5,1,3,2]`, `k=3`:
- Birinchi oyna `[2,1,5]` = 8
- Oynani 1 surdim → `[1,5,1]`. Qaytadan qo'shmayman: **8 − 2 (chiqgan) + 1 (kirgan) = 7**
- `[5,1,3]` → 7 − 1 + 3 = 9
- `[1,3,2]` → 9 − 5 + 2 = 6
- max = **9** ✅

### 3-qadam: REJA
1. Birinchi `k` element yig'indisini hisoblayman → `sum`, `max = sum`
2. `i` ni `k` dan oxirgacha suraman:
   - `sum += arr[i] - arr[i-k]` (yangi kirdi, eski chiqdi)
   - `max = Math.max(max, sum)`
3. `max` qaytaraman

### 4-qadam: KOD
```javascript
function maxSumK(arr, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];   // birinchi oyna
  let max = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];                 // sur: +yangi -eski
    max = Math.max(max, sum);
  }
  return max;
}
```

### 5-qadam: TEKSHIR
- `([2,1,5,1,3,2], 3)` → `9` ✅
- `([1,2,3], 3)` → `6` ✅ (bitta oyna)
- `([5], 1)` → `5` ✅

> 🔑 **PATTERN — "+yangi −eski":** ketma-ket bo'lak ustida ishlaganda butun yig'indini qayta hisoblamang. Oynani surganda chiqib ketgan elementni ayiring, kirganini qo'shing. Oyna kengligi o'zgaruvchan bo'lsa (🔴 masalalar) — ikkita ko'rsatkich `left`/`right` bilan kengaytirib/qisqartirib boriladi.

---

## 📝 10 ta mashq

`yechimlar/07-sliding-window.js` da yeching.

**7.1.** 🟢 `k` ta ketma-ket elementning **minimal** yig'indisi.
`([3,1,4,1,5,9,2], 2)` → `4` (3+1)

**7.2.** 🟢 Har bir `k`-lik oynaning yig'indisini massiv qilib qaytaring.
`([1,2,3,4,5], 2)` → `[3,5,7,9]`

**7.3.** 🟡 `k` ta ketma-ket elementning maksimal o'rtacha qiymati.
`([1,12,-5,-6,50,3], 4)` → `12.75`  *(LeetCode 643)*

**7.4.** 🟢 Eng uzun ketma-ket `1` lar soni.
`[1,1,0,1,1,1]` → `3`  *(LeetCode 485)*

**7.5.** 🟡 `k` masofa ichida takror element bormi? (`true`/`false`)
`([1,2,3,1], 3)` → `true`  *(LeetCode 219)*

**7.6.** 🟡 `k` uzunlikdagi oynada maksimal unli harflar soni.
`("abciiidef", 3)` → `3` ("iii")  *(LeetCode 1456)*

**7.7.** 🟡 `k` uzunlikdagi nechta oynaning o'rtachasi `threshold` dan kichik emas.
`([2,2,2,2,5,5,5,8], 3, 4)` → `3`  *(LeetCode 1343)*

**7.8.** 🔴 Takrorlanmaydigan eng uzun pastki satr uzunligi.
`"abcabcbb"` → `3` ("abc")  *(LeetCode 3)*

**7.9.** 🔴 Yig'indisi `target` dan kichik bo'lmagan eng qisqa pastki massiv uzunligi.
`(7, [2,3,1,2,4,3])` → `2` ([4,3])  *(LeetCode 209)*

**7.10.** 🔴 BONUS — ko'pi bilan `k` ta `0` ni `1` ga aylantirib, eng uzun `1` lar ketma-ketligi.
`([1,1,1,0,0,0,1,1,1,1,0], 2)` → `6`  *(LeetCode 1004)*
