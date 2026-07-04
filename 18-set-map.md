# Mavzu 18: Set / Map naqshlari 🎯

`Set` — takrorsiz qiymatlar to'plami (biror narsa **bor/yo'q**ligini bir zumda tekshiradi); `Map`/object — kalit→qiymat juftliklari. Tezkor qidiruv va sanash uchun eng kuchli vositalar.

> Difficulty: 🟢 oson · 🟡 o'rta · 🔴 qiyin

---

## ✅ Yechilgan misol: Eng uzun ketma-ket sonlar zanjiri

> **Masala:** Massivdagi eng uzun ketma-ket (consecutive) sonlar zanjiri uzunligini toping.
> `[100, 4, 200, 1, 3, 2]` → `4` (zanjir: `1, 2, 3, 4`)

### 1-qadam: O'QI va TUSHUN
- **Input:** sonlar massivi (saralanmagan)
- **Output:** eng uzun ketma-ket zanjir uzunligi
- **Kalit:** `1,2,3,4` ketma-ket — uzunligi `4`. Tartib muhim emas, qiymatlar muhim.

### 2-qadam: QO'LDA YECH
Hammasini `Set` ga solaman: `{100, 4, 200, 1, 3, 2}`.
Faqat **zanjir boshidan** boshlayman — ya'ni `n-1` Set da bo'lmasa, `n` zanjir boshi:
- `100`: `99` bormi? yo'q → boshi. `101` bormi? yo'q → uzunlik `1`
- `4`: `3` bormi? **ha** → boshi emas, o'tkazib yuboraman
- `200`: `199`? yo'q → boshi. `201`? yo'q → uzunlik `1`
- `1`: `0`? yo'q → boshi! `2`? ha, `3`? ha, `4`? ha, `5`? yo'q → uzunlik `4` ✅
- Eng kattasi → **`4`**

### 3-qadam: REJA
1. Barcha sonlarni `Set` ga sol.
2. Har bir son `n` uchun: agar `n-1` Set da **yo'q** bo'lsa (demak zanjir boshi):
   - `n+1, n+2, ...` Set da borligicha sanab uzunlikni o'lcha.
3. Eng katta uzunlikni qaytar.

> Nega tez? Har bir zanjir faqat **bir marta** (boshidan) sanaladi.

### 4-qadam: KOD
```javascript
function longestConsecutive(nums) {
  const set = new Set(nums);
  let engUzun = 0;

  for (const n of set) {
    // faqat zanjir BOSHIDAN boshlaymiz
    if (!set.has(n - 1)) {
      let joriy = n;
      let uzunlik = 1;
      while (set.has(joriy + 1)) {
        joriy++;
        uzunlik++;
      }
      engUzun = Math.max(engUzun, uzunlik);
    }
  }
  return engUzun;
}
```

### 5-qadam: TEKSHIR
- `[100,4,200,1,3,2]` → `4` ✅
- `[]` → `0` ✅
- `[1,2,0,1]` → `3` ✅ (`0,1,2`; dublikat `1` muammo emas — Set)

> 🔑 **PATTERN — "Set bilan bor/yo'q":** `Set.has(x)` bir zumda ishlaydi. Qidiruv/dublikat/zanjir masalalarida massivni Set ga solib, har element uchun "qo'shnisi bormi?" deb so'rang. Sanash kerak bo'lsa — `Map` da kalit→soni saqlang.

---

## 📝 10 ta mashq

`yechimlar/18-set-map.js` da yeching.

**18.1.** 🟢 Noyob (xil) elementlar soni.
`[1,2,2,3,3,3]` → `3`

**18.2.** 🟢 Dublikatlarni o'chir (tartibni saqlab).
`[1,2,2,3,1]` → `[1,2,3]`

**18.3.** 🟡 Ikki massiv birlashmasi (union — saralangan, noyob).
`([1,2,2],[2,3])` → `[1,2,3]`

**18.4.** 🟡 Ikki massiv kesishmasi (noyob).
`([1,2,2,1],[2,2,3])` → `[2]`

**18.5.** 🟡 Birinchi takrorlangan element.
`[2,1,3,5,3,2]` → `3`

**18.6.** 🟡 `0..n` dan yo'qolgan son.
`[0,1,3]` → `2`

**18.7.** 🟡 `S` dagi nechta tosh `J` dagi javohir.
`("aA","aAAbbbb")` → `3`  *(LeetCode 771)*

**18.8.** 🟡 Izomorf satrlar (bir-biriga to'liq mos almashtirish). (`true`/`false`)
`("egg","add")` → `true`, `("foo","bar")` → `false`  *(LeetCode 205)*

**18.9.** 🟡 Anagram guruhlari soni.
`["eat","tea","tan","ate","nat","bat"]` → `3`  *(LeetCode 49)*

**18.10.** 🔴 BONUS — yig'indisi `0` bo'lgan pastki massiv (subarray) bormi? (`true`/`false`)
`[4,2,-3,1,6]` → `true`
