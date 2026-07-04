# Mavzu 15: Greedy (Ochko'z algoritmlar) 🤑

Greedy = har qadamda **"hozir eng yaxshi ko'ringan"** tanlovni qilish. Ba'zan bu global optimal yechimga olib keladi. Doim ishlamaydi, lekin ishlaganda juda sodda va tez.

> Difficulty: 🟢 oson · 🟡 o'rta · 🔴 qiyin

---

## ✅ Yechilgan misol: Aksiyadan maksimal foyda (bir marta sotib olish/sotish)

> **Masala:** Har kuni aksiya narxi berilgan. **Bir marta** sotib olib, keyin **bir marta** sotsangiz, maksimal foyda qancha? (sota olmasangiz `0`).
> `[7, 1, 5, 3, 6, 4]` → `5` (1 da ol, 6 da sot)

### 1-qadam: O'QI va TUSHUN
- **Input:** narxlar massivi
- **Output:** maksimal foyda (son)
- **Kalit:** avval olish, keyin sotish kerak — ya'ni arzonni oldin, qimmatni keyin topish

### 2-qadam: QO'LDA YECH
`[7,1,5,3,6,4]`. Eng arzon narxni eslab boraman, har kuni "agar bugun sotsam?" deb tekshiraman:
- `7` → eng arzon `7`, foyda `0`
- `1` → eng arzon `1`, foyda `0`
- `5` → `5-1=4`, foyda `4`
- `3` → `3-1=2`, foyda hali `4`
- `6` → `6-1=5`, foyda `5` ✅
- `4` → `4-1=3`, foyda hali `5`

Javob: **`5`**

### 3-qadam: REJA
1. `minPrice = Infinity`, `maxProfit = 0`
2. Har bir `narx` uchun:
   - agar `narx < minPrice` → `minPrice = narx`
   - aks holda `maxProfit = Math.max(maxProfit, narx - minPrice)`
3. `maxProfit` qaytar

### 4-qadam: KOD
```javascript
function maxFoyda(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (const narx of prices) {
    if (narx < minPrice) minPrice = narx;            // yangi arzon narx
    else maxProfit = Math.max(maxProfit, narx - minPrice); // bugun sotsam?
  }
  return maxProfit;
}
```

### 5-qadam: TEKSHIR
- `[7,1,5,3,6,4]` → `5` ✅
- `[7,6,4,3,1]` → `0` ✅ (narx faqat tushyapti, sotmaymiz)
- `[1,2,3,4,5]` → `4` ✅ (1 da ol, 5 da sot)

> 🔑 **PATTERN — "hozir eng yaxshini ol":** bir marta o'tib, kerakli minimum/maksimumni kuzatib boring. Har qadamda mahalliy eng yaxshi tanlov global javobni quradi. Asosiy xato — kelajakni "ko'rishga" urinish; greedy faqat shu paytgacha bo'lgan ma'lumotga tayanadi.

---

## 📝 10 ta mashq

`yechimlar/15-greedy.js` da yeching.

**15.1.** 🟢 Oxirigacha sakrab yetib bo'ladimi? Har element — shu joydan **maksimal qadam** soni (`true`/`false`).
`[2,3,1,1,4]` → `true`, `[3,2,1,0,4]` → `false`  *(LeetCode 55)*

**15.2.** 🟢 Limonad qaytimi: har mijoz `$5`, `$10` yoki `$20` beradi, limonad `$5`. Hammaga to'g'ri qaytim bera olasizmi? (`true`/`false`)
`[5,5,5,10,20]` → `true`  *(LeetCode 860)*

**15.3.** 🟡 Bolalarga pechene: `g` — bolalar ishtahasi, `s` — pechene o'lchamlari. Nechta bolani to'q qila olasiz (har bolaga 1 ta, `s[j] >= g[i]` bo'lsa)?
`([1,2,3], [1,1])` → `1`  *(LeetCode 455)*

**15.4.** 🟡 Gul ekish: `arr` — gulzor (`1` — band, `0` — bo'sh), yonma-yon ekib bo'lmaydi. `n` ta yangi gulni ekib bo'ladimi? (`true`/`false`)
`([1,0,0,0,1], 1)` → `true`  *(LeetCode 605)*

**15.5.** 🟡 Aksiyadan ko'p marta savdo: istalgancha marta olib-sotib, maksimal foyda.
`[7,1,5,3,6,4]` → `7`  *(LeetCode 122)*

**15.6.** 🟡 Minimal tangalar soni (kanonik tangalar uchun greedy): `amount` ni eng kam tanga bilan yig'ing.
`([1,5,10,25], 36)` → `3`

**15.7.** 🟡 Bo'luvchi belgilar: `s` ni shunday bo'laklarga bo'lingki, har harf **faqat bitta** bo'lakda bo'lsin. Bo'lak uzunliklarini qaytaring.
`"ababcbacadefegdehijhklij"` → `[9,7,8]`  *(LeetCode 763)*

**15.8.** 🔴 Gaz stansiyasi: `gas[i]` — i-stansiyadagi yoqilg'i, `cost[i]` — i dan i+1 ga yetish narxi. Aylanani to'liq bosib o'tish mumkin bo'lgan boshlang'ich indeksni qaytaring (yo'q bo'lsa `-1`).
`([1,2,3,4,5], [3,4,5,1,2])` → `3`  *(LeetCode 134)*

**15.9.** 🔴 Sakrash II: oxirgi indeksgacha yetib borish uchun **minimal sakrashlar** soni (har element — max qadam).
`[2,3,1,1,4]` → `2`  *(LeetCode 45)*

**15.10.** 🔴 BONUS — Shirinlik: bolalarga konfet. Har bolaga `≥1` ta, va **qo'shnisidan reytingi yuqori** bo'lsa undan ko'proq berilsin. Minimal jami konfet soni.
`[1,0,2]` → `5`  *(LeetCode 135)*
