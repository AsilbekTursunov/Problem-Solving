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

**14.1.** 🟢 `toqmi(n)` — `n` toq sonmi? (`n & 1` orqali, `true`/`false`)
`7` → `true`, `8` → `false`

**14.2.** 🟢 `ikkiKopaytir(n)` — `n` ni 2 ga ko'paytir (`<<` orqali).
`5` → `10`

**14.3.** 🟢 `ikkiDaraja(n)` — `n` 2 ning darajasimi? (`n & (n-1)` orqali, `true`/`false`)
`16` → `true`, `18` → `false`  *(LeetCode 231)*

**14.4.** 🟡 `hammingMasofa(a, b)` — nechta bit pozitsiyasida `a` va `b` farq qiladi?
`(1, 4)` → `2`  *(`001` va `100` — 2 ta farq)*  *(LeetCode 461)*

**14.5.** 🟡 `yagonaSon(arr)` — har son 2 martadan, faqat bittasi 1 marta. Shuni top (XOR bilan).
`[4,1,2,1,2]` → `4`  *(LeetCode 136)*

**14.6.** 🟡 `yoqolganSon(arr)` — `0..n` oralig'idan yo'qolgan bitta sonni top.
`[3,0,1]` → `2`  *(LeetCode 268)*

**14.7.** 🟡 `bitlarSoni(n)` — `0` dan `n` gacha har son uchun `1` bitlar sonini massivga qaytar.
`5` → `[0,1,1,2,1,2]`  *(LeetCode 338)*

**14.8.** 🟡 `toldiruvchi(n)` — sonning bit to'ldiruvchisi (complement: barcha bitlarni teskari).
`5` → `2`  *(`101` → `010` = 2)*  *(LeetCode 476)*

**14.9.** 🟡 `tortDaraja(n)` — `n` 4 ning darajasimi? (`true`/`false`)
`16` → `true`, `15` → `false`  *(LeetCode 342)*

**14.10.** 🔴 BONUS — `qoshish(a, b)` — `+` va `-` ishlatmasdan ikki sonni qo'sh (XOR + carry).
`(2, 3)` → `5`  *(LeetCode 371)*
