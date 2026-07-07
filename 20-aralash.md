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

**20.1.** 🟡 **So'zlarni teskari qilish.** `sozTeskari(s)` — bitta gap (matn) satri berilgan. Undagi so'zlar tartibini **teskari** qilib, bitta satr qaytaring. Har so'z orasida faqat bitta probel qolsin (boshidagi, oxiridagi va ortiqcha probellar tashlansin).
   - **Misol:** `"the sky is blue"` → `"blue is sky the"` — so'zlar (harflari emas) teskari tartibda joylashdi.
   - *(LeetCode 151)*

**20.2.** 🟡 **Ko'pchilik element.** `kopchilik(arr)` — massivda **yarmidan ko'p** marta (ya'ni `n/2` dan ortiq) uchraydigan elementni qaytaring. Bunday element albatta bitta bor deb hisoblang (hash map bilan sanash yoki Boyer–Moore ovoz berish usuli ishlaydi).
   - **Misol:** `[2,2,1,1,1,2,2]` → `2` — `2` to'rt marta uchradi, 7 tadan yarmidan ko'p.
   - *(LeetCode 169)*

**20.3.** 🟡 **Umumiy prefiks.** `umumiyPrefiks(arr)` — satrlar massivi berilgan. Barcha satrlar uchun **umumiy bo'lgan eng uzun boshlang'ich bo'lak** (prefix = satr boshidan boshlanadigan qism) ni qaytaring. Umumiy boshlanish bo'lmasa, bo'sh satr `""` qaytaring.
   - **Misol:** `["flower","flow","flight"]` → `"fl"` — uchalasi ham `fl` bilan boshlanadi, `flo` esa `flight` da yo'q.
   - *(LeetCode 14)*

**20.4.** 🟡 **Ikki saralangan massivni birlashtirish.** `birlashtirSarala(a, m, b, n)` — `a` va `b` ikkalasi ham allaqachon saralangan. `a` massivida `m` ta haqiqiy son bor, keyin `n` ta `0` (bo'sh joy sifatida) turadi; `b` da esa `n` ta son bor. Ikkala ro'yxatni saralangan holicha **`a` ning ichiga** birlashtiring va yangilangan `a` ni qaytaring.
   - **Misol:** `([1,2,3,0,0,0], 3, [2,5,6], 3)` → `[1,2,2,3,5,6]` — `b` ning sonlari `a` ga aralashtirilib, natija o'sib boruvchi tartibda.
   - *(LeetCode 88)*

**20.5.** 🟡 **Palindromga aylantirish (1 harf o'chirish).** `palindromII(s)` — palindrom = teskari o'qilganda ham bir xil bo'lgan satr (masalan `"aba"`). Berilgan satrdan **ko'pi bilan bitta** harfni o'chirib palindrom hosil qilib bo'ladimi? `true` yoki `false` qaytaring (agar satr o'zi allaqachon palindrom bo'lsa ham `true`).
   - **Misol:** `"abca"` → `true` — `c` (yoki `b`) harfini o'chirsak `"aba"` (palindrom) hosil bo'ladi.
   - *(LeetCode 680)*

**20.6.** 🟡 **k-chi eng katta element.** `kInchiKatta(arr, k)` — massivdagi **k-chi eng katta** sonni qaytaring (`k=1` eng kattasi, `k=2` ikkinchi eng kattasi, ...). Bu tartibdagi element, takroriylar alohida sanalmaydi.
   - **Misol:** `([3,2,1,5,6,4], 2)` → `5` — kattadan saralasak `6,5,4,...`, 2-eng katta `5`.
   - *(LeetCode 215)*

**20.7.** 🟡 **Ranglarni saralash.** `ranglarSarala(arr)` — massivda faqat `0`, `1`, `2` sonlari bor (bayroq ranglari deb tasavvur qiling). Massivni **joyida** (yangi massiv yaratmasdan) shunday tartiblangki, avval barcha `0` lar, keyin `1` lar, oxirida `2` lar tursin. O'zgargan massivni qaytaring.
   - **Misol:** `[2,0,2,1,1,0]` → `[0,0,1,1,2,2]` — nol, bir, ikkilar guruh-guruh bo'lib joylashdi.
   - *(LeetCode 75)*

**20.8.** 🟡 **Anagram tekshirish (saralash bilan).** `anagramSort(a, b)` — anagram = bir xil harflardan, faqat tartibi boshqacha tuzilgan ikki satr. Ikki satrni **saralab**, natijalar teng bo'lsa ular anagram. `true` yoki `false` qaytaring.
   - **Misol:** `("listen", "silent")` → `true` — ikkala so'z ham `eilnst` harflaridan iborat, faqat tartibi farq qiladi.

**20.9.** 🔴 **Uch son yig'indisi (3Sum).** `uchYigindi(arr)` — massivdan **uchta** son tanlab, yig'indisi aynan `0` bo'lgan barcha **noyob** (takrorlanmaydigan) uchliklarni toping. Har uchlik ichidagi sonlar o'suvchi tartibda, natija ro'yxati ham tartiblangan bo'lsin.
   - **Misol:** `[-1,0,1,2,-1,-4]` → `[[-1,-1,2],[-1,0,1]]` — `(-1)+(-1)+2=0` va `(-1)+0+1=0`; boshqa noyob uchlik yo'q.
   - *(LeetCode 15)*

**20.10.** 🔴 BONUS — **Yomg'ir suvini ushlash.** `yomgirSuv(arr)` — har son bitta ustun (devor) balandligini bildiradi. Yomg'irdan so'ng ustunlar orasidagi chuqurchalarda **ushlanib qolgan suv hajmini** qaytaring. Har katak ustidagi suv = shu katakdan chapdagi eng baland va o'ngdagi eng baland ustunning kichigidan, katakning o'z balandligini ayirgani.
   - **Misol:** `[0,1,0,2,1,0,1,3,2,1,2,1]` → `6` — pastliklarda jami 6 birlik suv to'planadi.
   - *(LeetCode 42)*
