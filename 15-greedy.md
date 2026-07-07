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

**15.1.** 🟢 **Oxirigacha sakrab yetib bo'ladimi?** Butun sonlar massivi `arr` beriladi; siz `0`-indeksdan boshlaysiz. Har bir `arr[i]` — shu katakdan **oldinga** eng ko'pi bilan necha qadam sakrash mumkinligini bildiradi (`0` dan `arr[i]` gacha). Oxirgi indeksga yetib borish mumkin bo'lsa `true`, aks holda `false` qaytaring.
   - **Misol:** `[2,3,1,1,4]` → `true`, `[3,2,1,0,4]` → `false` — birinchisida `0→1→4` yo'li bor; ikkinchisida `0` katagiga tushib qolib, oldinga sakrab bo'lmaydi.
   - *(LeetCode 55)*

**15.2.** 🟢 **Limonad qaytimi.** Har biri `5`, `10` yoki `20` dollar bo'lgan mijozlar navbati `arr` sifatida beriladi. Bir stakan limonad `$5` turadi. Har bir mijoz bittadan stakan oladi va yuqoridagi kupyuralardan biri bilan to'laydi; siz to'g'ri qaytim qaytarishingiz kerak (dastlab kassangiz bo'sh, faqat oldingi mijozlardan tushgan pul bilan qaytim berasiz). Hammaga to'g'ri qaytim bera olsangiz `true`, aks holda `false`.
   - **Misol:** `[5,5,5,10,20]` → `true` — dastlabki uch `$5` dan qaytim shart emas; `$10` bergan mijozga bitta `$5` qaytariladi; `$20` bergan mijozga `$10 + $5` qaytariladi.
   - *(LeetCode 860)*

**15.3.** 🟡 **Bolalarga pechene.** Ikkita massiv beriladi: `g` — har bir bolaning ishtahasi (talab qilinadigan minimal o'lcham), `s` — mavjud pechenelarning o'lchamlari. Bir bolaga faqat bitta pechene berish mumkin, va agar pechene o'lchami `s[j]` bolaning ishtahasi `g[i]` dan kichik bo'lmasa (`s[j] >= g[i]`), o'sha bola to'q bo'ladi. Eng ko'pi bilan nechta bolani to'q qila olishingizni qaytaring.
   - **Misol:** `([1,2,3], [1,1])` → `1` — bizda ikkita `1`-o'lchamli pechene bor; ular faqat ishtahasi `1` bo'lgan bitta bolani to'q qila oladi, qolgan `2` va `3` ishtahali bolalarga yetmaydi.
   - *(LeetCode 455)*

**15.4.** 🟡 **Gul ekish.** `arr` — gulzor: `1` — o'sha katakda gul bor (band), `0` — bo'sh. Qoida: **yonma-yon** ikkita gul bo'lishi mumkin emas (qo'shni kataklar ikkalasi ham `1` bo'lmasin). Berilgan qoidani buzmasdan yana `n` ta yangi gul ekib bo'lsa `true`, aks holda `false` qaytaring.
   - **Misol:** `([1,0,0,0,1], 1)` → `true` — o'rtadagi `0` (indeks `2`) ga bitta gul eksak, chap-o'ng qo'shnilari bo'sh, demak qoida buzilmaydi.
   - *(LeetCode 605)*

**15.5.** 🟡 **Aksiyadan ko'p marta savdo.** `prices` — har kungi aksiya narxi. Bu safar istalgancha marta olib-sotishingiz mumkin (lekin bir vaqtda faqat bitta aksiyaga egalik qilasiz: sotmasdan yana ololmaysiz). Jami maksimal foydani qaytaring. Maslahat: narx har oshgan ketma-ket bo'lakdan foyda oling — ya'ni bugun narx kechagidan baland bo'lsa, o'sha farqni yig'ib boring.
   - **Misol:** `[7,1,5,3,6,4]` → `7` — `1` da olib `5` da sot (`+4`), keyin `3` da olib `6` da sot (`+3`); jami `4 + 3 = 7`.
   - *(LeetCode 122)*

**15.6.** 🟡 **Minimal tangalar soni.** Ikkita argument beriladi: `coins` — tanga qiymatlari (bu masalada kanonik to'plam, ya'ni har doim eng katta tangadan boshlab greedy tanlash to'g'ri javob beradi) va `amount` — yig'ilishi kerak bo'lgan summa. Shu summani hosil qilish uchun kerak bo'ladigan **eng kam** tangalar sonini qaytaring. Maslahat: har qadamda summadan oshmaydigan eng katta tangani oling.
   - **Misol:** `([1,5,10,25], 36)` → `3` — `25 + 10 + 1 = 36`, jami `3` ta tanga.

**15.7.** 🟡 **Bo'luvchi belgilar.** Bitta satr `s` beriladi. Uni ketma-ket bo'laklarga shunday ajratingki, har bir harf faqat bitta bo'lakda uchrasin (bir harf ikki xil bo'lakda bo'lmasin), va bo'laklar soni imkon qadar ko'p bo'lsin. Bo'laklarning uzunliklarini tartib bilan massiv qilib qaytaring. Maslahat: har harfning satrdagi **oxirgi** pozitsiyasini oldindan toping, keyin joriy bo'lak shu chegaraga yetganda uni yoping.
   - **Misol:** `"ababcbacadefegdehijhklij"` → `[9,7,8]` — birinchi `9` ta harf (`ababcbaca`) o'zaro to'liq yopiq, keyin `7` ta (`defegde`), so'ng `8` ta (`hijhklij`).
   - *(LeetCode 763)*

**15.8.** 🔴 **Gaz stansiyasi (halqa yo'l).** Ikkita massiv beriladi: `gas[i]` — `i`-stansiyada olinadigan yoqilg'i, `cost[i]` — `i`-stansiyadan keyingi (`i+1`) stansiyaga yetish uchun sarflanadigan yoqilg'i. Stansiyalar halqa shaklida (oxirgisidan keyin yana `0` keladi). Baki bo'sh mashinada biror stansiyadan boshlab, butun halqani bir marta to'liq aylanib chiqa olsangiz, o'sha **boshlang'ich stansiya indeksini** qaytaring; hech qaysi stansiyadan aylanib bo'lmasa `-1` qaytaring (yechim yagona bo'ladi).
   - **Misol:** `([1,2,3,4,5], [3,4,5,1,2])` → `3` — `3`-indeksdan boshlansa baki hech qachon manfiyga tushmay to'liq aylanib chiqiladi.
   - *(LeetCode 134)*

**15.9.** 🔴 **Sakrash II (minimal sakrashlar).** Butun sonlar massivi `arr` beriladi; `0`-indeksdan boshlaysiz va har bir `arr[i]` shu katakdan oldinga eng ko'pi bilan necha qadam sakrash mumkinligini bildiradi (oxirgi indeksga yetib borish har doim mumkin deb hisoblang). Oxirgi indeksga yetib borish uchun kerak bo'ladigan **eng kam** sakrashlar sonini qaytaring.
   - **Misol:** `[2,3,1,1,4]` → `2` — `0`-indeksdan `1`-indeksga sakrab (1 qadam), so'ng u yerdan to'g'ri oxiriga sakrab (2-qadam); jami `2` ta sakrash.
   - *(LeetCode 45)*

**15.10.** 🔴 BONUS — **Shirinlik (konfet taqsimlash).** `arr` — bolalarning bir qatorga tizilgan reytinglari. Har bir bolaga kamida `1` ta konfet berish shart, va agar biror bolaning reytingi bevosita qo'shnisinikidan yuqori bo'lsa, unga o'sha qo'shnisidan ko'proq konfet berilishi kerak. Shu shartlarni bajaradigan **eng kam jami** konfet sonini qaytaring.
   - **Misol:** `[1,0,2]` → `5` — konfetlar `[2,1,2]` tarzida beriladi (o'rtadagi eng pastga `1`, ikki chetdagi undan yuqori reytinglarga `2` tadan); jami `2 + 1 + 2 = 5`.
   - *(LeetCode 135)*
