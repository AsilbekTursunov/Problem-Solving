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

**18.1.** 🟢 **Noyob elementlar soni.** Sonlar massivi berilgan. Unda **nechta xil** (bir-biridan farqli, takrorlanmaydigan) qiymat borligini qaytaring. Bir xil qiymat necha marta uchrasa ham faqat bir marta sanaladi.
   - **Misol:** `[1,2,2,3,3,3]` → `3` — massivda faqat `1`, `2`, `3` degan 3 xil qiymat bor.

**18.2.** 🟢 **Dublikatlarni o'chir (tartibni saqlab).** Sonlar massivi berilgan. Takrorlangan qiymatlarni olib tashlab, har bir qiymatning faqat **birinchi uchraganini** qoldiring; asl **tartibni saqlang**.
   - **Misol:** `[1,2,2,3,1]` → `[1,2,3]` — ikkinchi `2` va oxirgi `1` takror bo'lgani uchun tashlab yuboriladi, qolganlari uchragan tartibda turadi.

**18.3.** 🟡 **Ikki massiv birlashmasi (union).** Ikkita sonlar massivi berilgan. Ularning **birlashmasini** — ya'ni ikkalasida uchragan barcha qiymatlarni, har birini bir martadan (noyob), **o'sish tartibida** saralab qaytaring. (Birlashma = ikki to'plamning hamma elementlari birga.)
   - **Misol:** `([1,2,2],[2,3])` → `[1,2,3]` — ikkala massivda uchragan qiymatlar `1,2,3`; takrorlar olib tashlanib saralanadi.

**18.4.** 🟡 **Ikki massiv kesishmasi.** Ikkita sonlar massivi berilgan. **Har ikkalasida ham** uchraydigan qiymatlarni, har birini bir martadan (noyob) qaytaring. (Kesishma = faqat ikkala to'plamda ham bor bo'lgan elementlar.)
   - **Misol:** `([1,2,2,1],[2,2,3])` → `[2]` — ikkala massivda ham uchraydigan yagona qiymat `2`.

**18.5.** 🟡 **Birinchi takrorlangan element.** Sonlar massivi berilgan. Chapdan o'ngga yurganda **ikkinchi marta** uchragan (ya'ni oldin ko'rilgan) birinchi qiymatni qaytaring.
   - **Misol:** `[2,1,3,5,3,2]` → `3` — `3` avval 3-o'rinda ko'rilgan, keyin 5-o'rinda yana uchraydi; bu `2` ning ikkinchi uchrashidan oldin sodir bo'ladi.

**18.6.** 🟡 **Yo'qolgan sonni top.** `0` dan `n` gacha bo'lgan sonlardan bittasi tushib qolgan massiv berilgan (massivda `n` ta son bor). **Yetishmayotgan** sonni qaytaring.
   - **Misol:** `[0,1,3]` → `2` — bu yerda `n=3`, ya'ni `0,1,2,3` bo'lishi kerak edi, lekin `2` yo'q.

**18.7.** 🟡 **Nechta tosh — javohir?** Ikki satr berilgan: `J` — javohir hisoblangan harflar (har biri noyob), `S` — sizdagi toshlar. `S` dagi harflardan **nechtasi** `J` da mavjudligini sanang. Katta va kichik harflar farqli hisoblanadi (`a` va `A` — boshqa-boshqa).
   - **Misol:** `("aA","aAAbbbb")` → `3` — `S` dagi bitta `a` va ikkita `A` javohir (`aA` ichida bor), `b` lar javohir emas; jami `3`.
   - *(LeetCode 771)*

**18.8.** 🟡 **Izomorf satrlar.** Ikki bir xil uzunlikdagi satr berilgan. Agar birinchi satrning har bir harfini ikkinchisining mos harfiga **bir xilda almashtirib** (bir harf faqat bitta harfga, ikki xil harf bitta harfga emas) ikkinchi satrni to'liq hosil qilib bo'lsa `true`, aks holda `false` qaytaring.
   - **Misol:** `("egg","add")` → `true`, `("foo","bar")` → `false` — `egg` da `e→a`, `g→d` mos keladi; `foo` da esa ikkala `o` `r` va `a` ga to'g'ri kelib, moslik buziladi.
   - *(LeetCode 205)*

**18.9.** 🟡 **Anagram guruhlari soni.** Satrlar ro'yxati berilgan. Bir xil harflardan tuzilgan (faqat tartibi boshqacha bo'lgan) satrlar bitta **anagram guruhi** hisoblanadi. Nechta **alohida guruh** hosil bo'lishini qaytaring.
   - **Misol:** `["eat","tea","tan","ate","nat","bat"]` → `3` — `{eat,tea,ate}`, `{tan,nat}` va `{bat}` degan 3 guruh chiqadi.
   - *(LeetCode 49)*

**18.10.** 🔴 BONUS — **Yig'indisi 0 bo'lgan bo'lak bormi?** Sonlar massivi berilgan. Uning **ketma-ket** joylashgan biror bo'lagi (subarray) yig'indisi aynan `0` ga teng bo'lsa `true`, bunday bo'lak yo'q bo'lsa `false` qaytaring. Subarray — massivning yonma-yon turgan elementlaridan iborat qismi.
   - **Misol:** `[4,2,-3,1,6]` → `true` — `[2,-3,1]` bo'lagining yig'indisi `2-3+1=0`.
