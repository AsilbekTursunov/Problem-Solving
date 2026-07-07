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

**8.1.** 🟢 **Oraliq yig'indisi.** Massiv va ikki indeks `i`, `j` berilgan. `i`-indeksdan `j`-indeksgacha (ikkalasi ham hisobga olinadi) bo'lgan elementlar yig'indisini qaytaring.
   - **Misol:** `([2,4,6,8], 1, 2)` → `10` — 1- va 2-indekslardagi qiymatlar `4+6=10`.

**8.2.** 🟢 **Prefix (running sum) massivini tuzing.** Massiv berilgan. Yangi massiv qaytaring, unda har bir o'rinda "boshidan shu indeksgacha" (shu indeks ham qo'shilib) barcha elementlar yig'indisi tursin.
   - **Misol:** `[1,2,3,4]` → `[1,3,6,10]` — `1`, `1+2=3`, `1+2+3=6`, `1+2+3+4=10`.

**8.3.** 🟢 **Running max — har indeksgacha eng katta qiymat.** Massiv berilgan. Yangi massiv qaytaring, unda har bir o'rinda "boshidan shu indeksgacha" ko'rilgan eng katta qiymat tursin.
   - **Misol:** `[3,1,4,1,5]` → `[3,3,4,4,5]` — har qadamda hozirgacha uchragan maksimum: `3`, `max(3,1)=3`, `max(3,4)=4`, `4`, `5`.

**8.4.** 🟡 **Pivot indeks.** Shunday indeksni toping-ki, uning **chap tomonidagi** barcha elementlar yig'indisi **o'ng tomonidagi** barcha elementlar yig'indisiga teng bo'lsin (indeksning o'zi hisobga olinmaydi). Bunday indeks bo'lmasa `-1` qaytaring.
   - **Misol:** `[1,7,3,6,5,6]` → `3` — 3-indeks (qiymati 6) ning chapi `1+7+3=11`, o'ngi `5+6=11`, teng.
   - *(LeetCode 724)*

**8.5.** 🟡 **Maksimal pastki massiv yig'indisi (Kadane).** "Pastki massiv" = massivning **ketma-ket** (uzluksiz) bo'lagi. Eng katta yig'indi beradigan (kamida bitta elementli) shunday bo'lakning yig'indisini qaytaring.
   - **Misol:** `[-2,1,-3,4,-1,2,1,-5,4]` → `6` — eng katta yig'indili bo'lak `[4,-1,2,1]`, yig'indisi `6`.
   - *(LeetCode 53)*

**8.6.** 🟡 **Yig'indisi `k` ga teng pastki massivlar soni.** Massiv va son `k` berilgan. Yig'indisi aynan `k` ga teng bo'lgan ketma-ket bo'laklar (pastki massivlar) nechtaligini qaytaring.
   - **Misol:** `([1,1,1], 2)` → `2` — yig'indisi 2 bo'lgan ikkita bo'lak bor: `[1,1]` (0–1 indekslar) va `[1,1]` (1–2 indekslar).
   - *(LeetCode 560)*

**8.7.** 🟡 **O'zidan boshqa hammaning ko'paytmasi (bo'lishsiz).** Massiv berilgan. Yangi massiv qaytaring, unda har bir o'rinda **o'sha element bundan mustasno** qolgan barcha elementlar ko'paytmasi tursin. Bo'lish amali (`/`) ishlatmang.
   - **Misol:** `[1,2,3,4]` → `[24,12,8,6]` — 0-o'rin `2·3·4=24`, 1-o'rin `1·3·4=12`, 2-o'rin `1·2·4=8`, 3-o'rin `1·2·3=6`.
   - *(LeetCode 238)*

**8.8.** 🟡 **Bir nechta oraliq savoliga javob bering.** Massiv va savollar ro'yxati berilgan; har bir savol `[i, j]` ko'rinishida (ikkalasi ham hisobga olinadi). Har bir savol uchun `[i..j]` oraliq yig'indisini hisoblab, javoblar massivini qaytaring.
   - **Misol:** `([1,2,3,4,5], [[0,1],[2,4]])` → `[3,12]` — `[0,1]` uchun `1+2=3`, `[2,4]` uchun `3+4+5=12`.
   - *Ipuchi:* prefix massivini bir marta tuzsangiz, har bir savolga bitta ayirish bilan javob berasiz.

**8.9.** 🟡 **Eng kichik boshlang'ich qiymat.** Massiv berilgan. Bir `startValue` sonidan boshlab, massiv elementlarini chapdan o'ngga ketma-ket qo'shib borasiz. Shunday **eng kichik musbat** `startValue` ni toping-ki, qo'shish davomida joriy yig'indi hech qachon `1` dan pastga tushmasin.
   - **Misol:** `[-3,2,-3,4,2]` → `5` — `5` dan boshlasak: `5, 5-3=2, 2+2=4, 4-3=1, 1+4=5, 5+2=7` — hammasi ≥ 1; `4` dan boshlansa oraliqda `0` chiqib ketadi.
   - *(LeetCode 1413)*

**8.10.** 🔴 BONUS — **yig'indisi `k` bo'lgan eng uzun pastki massiv uzunligi.** Massiv va son `k` berilgan. Yig'indisi aynan `k` ga teng bo'lgan ketma-ket bo'laklar orasidan eng uzunining **uzunligini** qaytaring (bunday bo'lak bo'lmasa `0`).
   - **Misol:** `([1,-1,5,-2,3], 3)` → `4` — `[1,-1,5,-2]` bo'lagining yig'indisi `3` va uzunligi `4`, bu eng uzuni.
   - *(LeetCode 325)*
