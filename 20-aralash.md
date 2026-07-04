# Mavzu 20: Aralash takrorlash (Mixed) 🎓

Bu mavzu — kichik **mock-interview**. Oldingi naqshlar (hash map, ikki ko'rsatkich, saralash, stack) aralash keladi. Har masalada avval **"qaysi naqsh?"** deb o'ylang.

> Difficulty: 🟢 oson · 🟡 o'rta · 🔴 qiyin

---

## ✅ Yechilgan misol: Eng ko'p uchraydigan K element

> **Masala:** Massiv va son `k` berilgan. Eng ko'p uchraydigan `k` ta elementni qaytaring.
> `([1,1,1,2,2,3], 2)` → `[1,2]`

### 1-qadam: O'QI va TUSHUN
- **Input:** massiv + son `k`
- **Output:** eng ko'p uchragan `k` ta element
- **Kalit:** har element necha marta kelganini sanash kerak → **hash map** naqshi.

### 2-qadam: QO'LDA YECH
`[1,1,1,2,2,3]`:
- chastota: `1 → 3 marta`, `2 → 2 marta`, `3 → 1 marta`
- kattadan kichikka saralayman: `1(3), 2(2), 3(1)`
- birinchi `k=2` tasini olaman → `[1, 2]` ✅

### 3-qadam: REJA
1. `Map` da har sonning chastotasini sana
2. `Map` ni massivga aylantir va chastota bo'yicha **kamayish** tartibida sarala
3. birinchi `k` ta kalitni qaytar

### 4-qadam: KOD
```javascript
function topKFrequent(nums, k) {
  const freq = new Map();
  for (const x of nums) {
    freq.set(x, (freq.get(x) || 0) + 1);   // chastotani sana
  }
  const sorted = [...freq.entries()].sort((a, b) => b[1] - a[1]); // katta -> kichik
  return sorted.slice(0, k).map(pair => pair[0]);   // birinchi k ta kalit
}
```

### 5-qadam: TEKSHIR
- `([1,1,1,2,2,3], 2)` → `[1,2]` ✅
- `([1], 1)` → `[1]` ✅
- `([4,4,5,5,6], 2)` → `[4,5]` ✅

> 🔑 **PATTERN — "qaysi naqsh?":** masalani o'qib darrov urinmang. Avval turini aniqlang: sanash kerakmi (hash map), saralangan/ikki uchdanmi (ikki ko'rsatkich), tartib kerakmi (sort), oxirgi ochilgan elementmi (stack). To'g'ri naqshni tanlasangiz — yarim ish bitdi.

---

## 📝 10 ta mashq

`yechimlar/20-aralash.js` da yeching.

**20.1.** 🟡 `sozTeskari(s)` — gapdagi so'zlarni teskari tartibda qaytaring (ortiqcha probelsiz).
`"the sky is blue"` → `"blue is sky the"`  *(LeetCode 151)*

**20.2.** 🟡 `kopchilik(arr)` — massivda yarmidan **ko'p** uchraydigan element.
`[2,2,1,1,1,2,2]` → `2`  *(LeetCode 169)*

**20.3.** 🟡 `umumiyPrefiks(arr)` — barcha satrlarning eng uzun umumiy boshlanishi (prefix).
`["flower","flow","flight"]` → `"fl"`  *(LeetCode 14)*

**20.4.** 🟡 `birlashtirSarala(a, m, b, n)` — ikki saralangan massivni `a` ichiga birlashtiring (`a` da `m` ta haqiqiy son + `n` ta `0`; `b` da `n` ta son). Birlashgan `a` ni qaytaring.
`([1,2,3,0,0,0], 3, [2,5,6], 3)` → `[1,2,2,3,5,6]`  *(LeetCode 88)*

**20.5.** 🟡 `palindromII(s)` — ko'pi bilan **1 ta** harf o'chirib palindrom qilsa bo'ladimi? (`true`/`false`)
`"abca"` → `true`  *(LeetCode 680)*

**20.6.** 🟡 `kInchiKatta(arr, k)` — `k`-chi eng katta element.
`([3,2,1,5,6,4], 2)` → `5`  *(LeetCode 215)*

**20.7.** 🟡 `ranglarSarala(arr)` — faqat `0,1,2` lardan iborat massivni joyida saralang.
`[2,0,2,1,1,0]` → `[0,0,1,1,2,2]`  *(LeetCode 75)*

**20.8.** 🟡 `anagramSort(a, b)` — saralash orqali ikki satr anagrammi tekshiring (`true`/`false`).
`("listen", "silent")` → `true`

**20.9.** 🔴 `uchYigindi(arr)` — yig'indisi `0` bo'lgan **noyob** uchliklar. (Har uchlik o'suvchi tartibda, ro'yxat ham tartiblangan.)
`[-1,0,1,2,-1,-4]` → `[[-1,-1,2],[-1,0,1]]`  *(LeetCode 15)*

**20.10.** 🔴 BONUS — `yomgirSuv(arr)` — har ustun balandligi berilgan. Yomg'irdan keyin ushlangan suv hajmini toping.
`[0,1,0,2,1,0,1,3,2,1,2,1]` → `6`  *(LeetCode 42)*
