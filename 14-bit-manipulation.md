# Mavzu 14: Bit Manipulation (Bitlar bilan ishlash) 💡

Sonlarni kompyuter ikkilik (binary) ko'rinishda saqlaydi: `5` → `101`. Bit amallari shu nollar va birlar ustida ishlaydi: `&` (AND), `|` (OR), `^` (XOR), `<<` (chapga surish), `>>` (o'ngga surish).

> Eslatma: `n & 1` — oxirgi bit (1 yoki 0); `n & (n-1)` — eng o'ngdagi `1` bitni o'chiradi.

> Difficulty: 🟢 oson · 🟡 o'rta · 🔴 qiyin

---

## ✅ Yechilgan misol: 1 bitlar soni (Hamming weight)

> **Masala:** Butun son berilgan. Uning ikkilik ko'rinishida nechta `1` bit borligini sanang.
> `11` → `3`  *(11 = `1011`, uchta bir)*

### 1-qadam: O'QI va TUSHUN
- **Input:** butun son `n`
- **Output:** `1` bitlar soni
- **Kalit:** `11` ikkilikda `1011`. Birlarni sanashimiz kerak: 1, 0, 1, 1 → 3 ta.

### 2-qadam: QO'LDA YECH
`n = 11` = `1011`. Oxirgi bitni `n & 1` bilan tekshiraman, keyin `n` ni o'ngga suraman:
- `1011 & 1 = 1` → count=1. `n >>>= 1` → `101`
- `101 & 1 = 1` → count=2. `n >>>= 1` → `10`
- `10 & 1 = 0` → count=2. `n >>>= 1` → `1`
- `1 & 1 = 1` → count=3. `n >>>= 1` → `0`
- `n = 0` → to'xta. Javob **`3`** ✅

### 3-qadam: REJA
1. `count = 0`.
2. `n` noldan katta bo'lguncha:
   - `count += n & 1` (oxirgi bit `1` bo'lsa qo'sh)
   - `n >>>= 1` (bitlarni o'ngga sur)
3. `count` qaytar.

### 4-qadam: KOD
```javascript
function bitlarSoni1(n) {
  let count = 0;
  while (n !== 0) {
    count += n & 1;     // oxirgi bit 1 bo'lsa +1
    n >>>= 1;           // o'ngga sur (>>> — ishorasiz surish)
  }
  return count;
}

// Nayrang varianti: n &= n - 1 har safar bitta 1 bitni o'chiradi
function bitlarSoni2(n) {
  let count = 0;
  while (n !== 0) {
    n &= n - 1;         // eng o'ngdagi 1 bitni o'chir
    count++;
  }
  return count;
}
```

### 5-qadam: TEKSHIR
- `11` → `3` ✅ (`1011`)
- `1` → `1` ✅ (`1`)
- `8` → `1` ✅ (`1000`)

> 🔑 **PATTERN — "bitlarni birma-bir tekshir":** `n & 1` oxirgi bitni beradi, `n >>> 1` esa o'ngga suradi — shu ikkisi bilan barcha bitlarni aylanasiz. Yana bir kuchli nayrang: `n & (n - 1)` eng o'ngdagi `1` ni o'chiradi (1 bitlarni sanashda tezroq). `XOR` (`^`) esa juftlarni yo'q qiladi: `a ^ a = 0`.

---

## 📝 10 ta mashq

`yechimlar/14-bit-manipulation.js` da yeching.

**14.1.** 🟢 **Toq sonmi?** Bitta butun son `n` beriladi. U toq (juft emas) bo'lsa `true`, aks holda `false` qaytaring. Maslahat: har qanday sonning eng oxirgi biti `1` bo'lsa son toq — buni `n & 1` (bit AND) bilan tekshiring: agar natija `1` bo'lsa, son toq.
   - **Misol:** `7` → `true`, `8` → `false` — `7` ning ikkilik ko'rinishi `111`, oxirgi bit `1` (toq); `8` esa `1000`, oxirgi bit `0` (juft).

**14.2.** 🟢 **Ikkiga ko'paytirish (bit surish bilan).** Bitta butun son `n` beriladi. Uni `2` ga ko'paytirilgan natijani qaytaring, lekin `*` emas, `<<` (chapga surish) amali bilan. Bitlarni bir pozitsiya chapga surish (`n << 1`) sonni aynan `2` barobar oshiradi.
   - **Misol:** `5` → `10` — `5` ikkilikda `101`, bir pozitsiya chapga surilsa `1010` = `10`.

**14.3.** 🟢 **2 ning darajasimi?** Bitta butun son `n` beriladi. Agar `n` ni `2` ning biror darajasi sifatida yozish mumkin bo'lsa (`1, 2, 4, 8, 16, ...`) `true`, aks holda `false` qaytaring. Maslahat: `2` ning darajasida faqat bitta `1` bit bo'ladi, shuning uchun `n & (n - 1)` amali `0` chiqadi (bu amal eng o'ngdagi `1` bitni o'chiradi). Musbat bo'lmagan sonlar uchun `false`.
   - **Misol:** `16` → `true`, `18` → `false` — `16` = `10000` (bitta `1`), `18` = `10010` (ikkita `1`, demak daraja emas).
   - *(LeetCode 231)*

**14.4.** 🟡 **Hamming masofasi.** Ikkita butun son `a` va `b` beriladi. Ularning ikkilik ko'rinishlarini bir-birining ostiga qo'yib, nechta bit pozitsiyasida farq qilishini sanang. Maslahat: `a ^ b` (XOR — farq qilgan pozitsiyalarda `1` chiqadi) ni hisoblab, undagi `1` bitlar sonini sanang.
   - **Misol:** `(1, 4)` → `2` — `1` = `001`, `4` = `100`; birinchi va uchinchi pozitsiyada farq bor, demak `2` ta.
   - *(LeetCode 461)*

**14.5.** 🟡 **Yagona son.** Massiv `arr` beriladi: undagi har bir son roppa-rosa `2` marta uchraydi, faqat bitta son esa `1` marta. Shu yolg'iz sonni toping. Maslahat: XOR (`^`) juftlarni yo'q qiladi (`a ^ a = 0`), shuning uchun barcha elementlarni XOR qilsangiz faqat yolg'iz son qoladi.
   - **Misol:** `[4,1,2,1,2]` → `4` — `1` lar bir-birini, `2` lar bir-birini yo'q qiladi, `4` yolg'iz qoladi.
   - *(LeetCode 136)*

**14.6.** 🟡 **Yo'qolgan son.** `n` ta sondan iborat `arr` massivi beriladi; undagi sonlar `0` dan `n` gacha bo'lgan oraliqdan olingan, lekin shu oraliqdagi bitta son tushib qolgan. Yo'qolgan shu sonni toping.
   - **Misol:** `[3,0,1]` → `2` — massivda `0, 1, 3` bor, lekin `0..3` oralig'idan `2` yo'q.
   - *(LeetCode 268)*

**14.7.** 🟡 **Bitlar soni massivi.** Bitta butun son `n` beriladi. `0` dan `n` gacha (ikkalasi ham kiradi) har bir son uchun uning ikkilik ko'rinishidagi `1` bitlar sonini hisoblab, natijalarni massiv qilib qaytaring. Massiv uzunligi `n + 1` bo'ladi.
   - **Misol:** `5` → `[0,1,1,2,1,2]` — `0`=`0` (0 ta), `1`=`1` (1 ta), `2`=`10` (1 ta), `3`=`11` (2 ta), `4`=`100` (1 ta), `5`=`101` (2 ta).
   - *(LeetCode 338)*

**14.8.** 🟡 **Bit to'ldiruvchi (complement).** Bitta musbat butun son `n` beriladi. To'ldiruvchi degani — sonning ikkilik ko'rinishidagi har bir bitni teskarisiga o'zgartirish (`0` → `1`, `1` → `0`), lekin faqat kerakli bitlar doirasida (boshidagi ortiqcha nollarni qo'shmasdan). Shu yangi sonni qaytaring.
   - **Misol:** `5` → `2` — `5` = `101`, har bir bit teskari qilinsa `010` = `2`.
   - *(LeetCode 476)*

**14.9.** 🟡 **4 ning darajasimi?** Bitta butun son `n` beriladi. Agar `n` ni `4` ning biror darajasi sifatida yozish mumkin bo'lsa (`1, 4, 16, 64, ...`) `true`, aks holda `false` qaytaring. Diqqat: `8` — `2` ning darajasi, lekin `4` ning darajasi emas.
   - **Misol:** `16` → `true`, `15` → `false` — `16 = 4 × 4` (demak `4²`); `15` esa `4` ning hech qaysi darajasiga teng emas.
   - *(LeetCode 342)*

**14.10.** 🔴 BONUS — **Qo'shmasdan qo'shish.** Ikkita butun son `a` va `b` beriladi. Ularning yig'indisini qaytaring, lekin `+` va `-` amallaridan foydalanmasdan — faqat bit amallari bilan. Maslahat: `a ^ b` (XOR) — o'nga ko'chirishsiz qo'shishni, `(a & b) << 1` esa har bir pozitsiyadagi o'nga ko'chirish (carry) ni beradi; carry `0` bo'lguncha shu ikkisini takrorlab qo'shib boring.
   - **Misol:** `(2, 3)` → `5` — `2 + 3` bit amallari bilan bosqichma-bosqich hisoblanadi va natija `5` chiqadi.
   - *(LeetCode 371)*
