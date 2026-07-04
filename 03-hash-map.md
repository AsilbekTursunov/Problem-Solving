# Mavzu 3: Hash Map / Chastota 🗂️

Hash Map (JS'da `object {}` yoki `Map`) — "kalit → qiymat" juftliklari saqlanadigan tuzilma. Eng kuchli pattern: biror narsani **sanash** yoki **tez qidirish** kerak bo'lganda.

**Nega muhim?** Massivda qidirish sekin (har safar boshdan oxir aylanasiz). Hash Map'da qidirish **bir zumda** (`map[kalit]`). Aynan shu narsa ko'p LeetCode masalalarini "sekin"dan "tez"ga aylantiradi.

---

## ✅ Yechilgan misol: Two Sum (LeetCode #1)

> **Masala:** Sonlar massivi va `target` berilgan. Yig'indisi `target` ga teng bo'lgan ikki sonning **indekslarini** qaytaring.
> `([2, 7, 11, 15], 9)` → `[0, 1]` (chunki 2+7=9)

### 1-qadam: O'QI va TUSHUN
- **Input:** massiv `[2,7,11,15]`, `target = 9`
- **Output:** ikki indeks `[0,1]`
- **Asosiy fikr:** har bir son uchun menga "juft son" kerak — bu `target - shu son`.

### 2-qadam: QO'LDA YECH
Sodda (lekin sekin) yo'l: har bir juftlikni tekshirish — 2 ta ichma-ich sikl. Ishlaydi, lekin sekin.

**Yaxshiroq yo'l:** har bir sonni ko'rganda o'ylayman: *"menga `9 - son` kerak edi. Men uni avval ko'rganmidim?"*
- `2` ni ko'rdim. Menga `7` kerak. Avval ko'rganmidim? Yo'q. `2` ni eslab qolaman → `{2: indeks 0}`
- `7` ni ko'rdim. Menga `2` kerak. Avval ko'rganmidim? **HA, indeks 0 da!** → Javob: `[0, 1]` ✅

### 3-qadam: REJA
1. Bo'sh `map` (object) ochaman — ko'rgan sonlarni `"son → indeks"` qilib saqlash uchun
2. Har bir `i` indeksdagi `son` bo'yicha aylanaman
3. `kerak = target - son` hisoblayman
4. Agar `kerak` `map`da bo'lsa → `[map[kerak], i]` qaytaraman
5. Bo'lmasa, `map[son] = i` qilib saqlayman va davom etaman

### 4-qadam: KOD
```javascript
function twoSum(arr, target) {
  const map = {};                       // son -> indeks
  for (let i = 0; i < arr.length; i++) {
    const kerak = target - arr[i];
    if (map[kerak] !== undefined) {     // kerakli juftni avval ko'rganmizmi?
      return [map[kerak], i];
    }
    map[arr[i]] = i;                    // bu sonni eslab qolamiz
  }
  return [];                            // topilmasa
}
```

### 5-qadam: TEKSHIR
- `([2,7,11,15], 9)` → `[0,1]` ✅
- `([3,2,4], 6)` → `[1,2]` ✅ (3 saqlandi, 2 saqlandi, 4 ko'rdik → kerak=2 bor!)
- `([3,3], 6)` → `[0,1]` ✅

> 🔑 **PATTERN — "avval ko'rganmidim?":** biror narsani qidirish yoki sanash kerak bo'lsa, Hash Map ishlatib, **bir marta** aylanishda hal qiling. `map[kalit]` borligini tekshirish bir zumda bo'ladi. Sanash uchun: `map[kalit] = (map[kalit] || 0) + 1`.

---

## 📝 10 ta mashq

`yechimlar/03-hash-map.js` da yeching.

**3.1.** `x` element massivda necha marta uchraydi?
`([1,2,2,3,2], 2)` → `3`

**3.2.** Massivda takrorlanuvchi element bormi? (`true`/`false`)
`[1,2,3,1]` → `true`  *(LeetCode 217)*

**3.3.** Har bir elementning chastotasini object qilib qaytaring.
`[1,1,2,3]` → `{1:2, 2:1, 3:1}`

**3.4.** Eng ko'p uchraydigan elementni qaytaring.
`[1,3,3,2,3]` → `3`

**3.5.** String'dagi birinchi takrorlanmas belgi indeksi (yo'q bo'lsa `-1`).
`"leetcode"` → `0`  *(LeetCode 387)*

**3.6.** Ikki string anagrammi? (bir xil harflardan tuzilganmi)
`("anagram","nagaram")` → `true`  *(LeetCode 242)*

**3.7.** Yagona son: hammasi 2 martadan, faqat bittasi 1 marta. Shu sonni toping.
`[4,1,2,1,2]` → `4`  *(LeetCode 136)*

**3.8.** Ikki massivning umumiy (kesishma) elementlari.
`([1,2,2,1],[2,2])` → `[2]`  *(LeetCode 349)*

**3.9.** Ikki string'da nechta umumiy **xil** harf bor.
`("abc","bcd")` → `2` (b, c)

**3.10.** Massivda yig'indisi `target` ga teng juftlik bormi? (`true`/`false`)
`([1,4,6], 10)` → `true` (4+6)
