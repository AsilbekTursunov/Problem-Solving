# Mavzu 2: Massiv bilan ishlash 📊

Massiv — bir nechta qiymatni saqlovchi ro'yxat. Ko'p masalalar "massivni aylanib, biror narsani topish yoki hisoblash"ga keladi.

---

## ✅ Yechilgan misol: Massivdagi eng katta sonni topish

> **Masala:** Sonlar massivi berilgan, eng katta sonni qaytaring.
> `[3, 7, 2, 9, 4]` → `9`

### 1-qadam: O'QI va TUSHUN
- **Input:** sonlar massivi
- **Output:** bitta son (eng kattasi)

### 2-qadam: QO'LDA YECH
Odam sifatida men birinchi sonni "hozircha eng katta" deb eslab qolaman, keyin har birini u bilan solishtiraman:
- `max = 3` (birinchisi)
- `7 > 3`? ha → `max = 7`
- `2 > 7`? yo'q
- `9 > 7`? ha → `max = 9`
- `4 > 9`? yo'q
- **Javob: 9** ✅

### 3-qadam: REJA
1. `max` ni birinchi element qilaman (`arr[0]`)
2. Har bir element bo'yicha aylanaman (ikkinchisidan boshlab)
3. Agar element `max` dan katta bo'lsa, `max` ni yangilayman
4. `max` ni qaytaraman

### 4-qadam: KOD
```javascript
function engKatta(arr) {
  let max = arr[0];                       // 1-qadam: birinchini boshlang'ich deb olamiz
  for (let i = 1; i < arr.length; i++) {  // 2-qadam: 1-indeksdan
    if (arr[i] > max) {                   // 3-qadam
      max = arr[i];
    }
  }
  return max;                             // 4-qadam
}
```

### 5-qadam: TEKSHIR
- `[3,7,2,9,4]` → `9` ✅
- `[5]` → `5` ✅ (sikl ishlamaydi, `max=5` qoladi)
- `[-1,-5,-2]` → `-1` ✅

> ⚠️ **Muhim xato:** `max` ni `0` dan boshlamang! Agar massivda hammasi manfiy bo'lsa (`[-1,-5,-2]`), `max=0` xato `0` qaytaradi. Shuning uchun `max = arr[0]` dan boshlaymiz.

> 🔑 **PATTERN — "hozircha eng yaxshisi" (running best):** `max`/`min`/`sum` topishda bitta o'zgaruvchi ochib, aylanish davomida yangilab borasiz. Boshlang'ich qiymatni `arr[0]` qiling.

---

## 📝 10 ta mashq

`yechimlar/02-massiv.js` da yeching.

**2.1.** Massiv elementlari yig'indisi.
`[1,2,3,4]` → `10`

**2.2.** Massiv o'rtacha qiymati (average).
`[2,4,6]` → `4`

**2.3.** Eng kichik element.
`[3,7,2,9]` → `2`

**2.4.** Massivda `x` soni bormi? (`true`/`false`)
`([1,2,3], 2)` → `true`

**2.5.** Massivdagi musbat sonlar soni.
`[-1,2,-3,4,5]` → `3`

**2.6.** Massivni teskari aylantiring (yangi massiv qaytaring).
`[1,2,3]` → `[3,2,1]`
*Shart: o'rnatilgan `.reverse()` ishlatmang — qo'lda qiling.*

**2.7.** Ikkinchi eng katta element.
`[3,7,2,9,4]` → `7`

**2.8.** Massivdagi barcha elementlarni 2 ga ko'paytiring (yangi massiv).
`[1,2,3]` → `[2,4,6]`

**2.9.** `x` element massivda nechinchi indeksda? (yo'q bo'lsa `-1`)
`([4,5,6], 5)` → `1`

**2.10.** "Running sum" — har bir indeksgacha yig'indi.
`[1,2,3,4]` → `[1,3,6,10]`  *(LeetCode 1480)*
