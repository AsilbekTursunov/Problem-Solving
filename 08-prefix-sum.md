# Mavzu 8: Prefix Sum (Oldindan yig'indi) ➕

Massivning "boshidan shu indeksgacha yig'indi"sini **bir marta** oldindan hisoblab qo'yamiz. Keyin istalgan `[i, j]` oralig'i yig'indisini **bitta ayirish** bilan topamiz — qayta-qayta sanash shart emas.

> Difficulty: 🟢 oson · 🟡 o'rta · 🔴 qiyin

---

## ✅ Yechilgan misol: Oraliq yig'indisi (`[i..j]`)

> **Masala:** Massiv va `i, j` indekslar berilgan. `arr[i] + ... + arr[j]` ni qaytaring.
> `([2, 4, 6, 8], 1, 2)` → `10` (4+6)

### 1-qadam: O'QI va TUSHUN
- **Input:** massiv + ikki indeks `i, j`
- **Output:** o'sha oraliq yig'indisi
- Agar ko'p marta turli oraliq so'ralsa, har safar sanash sekin. Oldindan tayyorlab qo'yamiz.

### 2-qadam: QO'LDA YECH
`prefix` massiv tuzaman — `prefix[k]` = birinchi `k` element yig'indisi:
```
arr    =    [2, 4, 6, 8]
prefix = [0, 2, 6, 12, 20]   // prefix[0]=0, keyin qo'shib boramiz
```
Endi `sum(1, 2)` = `prefix[3] − prefix[1]` = `12 − 2` = **10** ✅
(Ya'ni "0..2 yig'indisi" minus "0..0 yig'indisi".)

### 3-qadam: REJA
1. `prefix[0] = 0`
2. Har bir `k` uchun `prefix[k+1] = prefix[k] + arr[k]`
3. Javob: `prefix[j+1] - prefix[i]`

### 4-qadam: KOD
```javascript
function rangeSum(arr, i, j) {
  const prefix = [0];
  for (let k = 0; k < arr.length; k++) {
    prefix[k + 1] = prefix[k] + arr[k];   // boshidan k+1 gacha yig'indi
  }
  return prefix[j + 1] - prefix[i];        // oraliq = katta - kichik
}
```

### 5-qadam: TEKSHIR
- `([2,4,6,8], 1, 2)` → `10` ✅
- `([2,4,6,8], 0, 3)` → `20` ✅ (hammasi)
- `([2,4,6,8], 2, 2)` → `6` ✅ (bitta element)

> 🔑 **PATTERN — "oldindan tayyorla":** "oraliq yig'indisi" yoki "shu yergacha nechta/qancha" turidagi savollarda prefix massiv tuzing. `oraliq(i,j) = prefix[j+1] - prefix[i]`. Bir marta tayyorlash O(n), har bir savol O(1).

---

## 📝 10 ta mashq

`yechimlar/08-prefix-sum.js` da yeching.

**8.1.** 🟢 Oraliq yig'indisi.
`([2,4,6,8], 1, 2)` → `10`

**8.2.** 🟢 Prefix (running sum) massivini tuzing.
`[1,2,3,4]` → `[1,3,6,10]`

**8.3.** 🟢 Running max — har indeksgacha eng katta qiymat.
`[3,1,4,1,5]` → `[3,3,4,4,5]`

**8.4.** 🟡 Pivot indeks: chap yig'indi = o'ng yig'indi bo'lgan indeks (yo'q → -1).
`[1,7,3,6,5,6]` → `3`  *(LeetCode 724)*

**8.5.** 🟡 Maksimal pastki massiv yig'indisi (Kadane).
`[-2,1,-3,4,-1,2,1,-5,4]` → `6`  *(LeetCode 53)*

**8.6.** 🟡 Yig'indisi `k` ga teng pastki massivlar soni.
`([1,1,1], 2)` → `2`  *(LeetCode 560)*

**8.7.** 🟡 O'zidan boshqa hammaning ko'paytmasi (bo'lishsiz).
`[1,2,3,4]` → `[24,12,8,6]`  *(LeetCode 238)*

**8.8.** 🟡 Bir nechta oraliq savoliga javob bering.
`([1,2,3,4,5], [[0,1],[2,4]])` → `[3,12]`

**8.9.** 🟡 Eng kichik boshlang'ich qiymat: yig'indi yo'lda doim ≥ 1 bo'lishi uchun.
`[-3,2,-3,4,2]` → `5`  *(LeetCode 1413)*

**8.10.** 🔴 BONUS — yig'indisi `k` bo'lgan eng uzun pastki massiv uzunligi.
`([1,-1,5,-2,3], 3)` → `4`  *(LeetCode 325)*
