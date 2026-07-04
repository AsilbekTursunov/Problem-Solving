# Mavzu 13: Math (Matematik masalalar) 🔢

Sonlar, raqamlar, bo'linish va tublik bilan ishlash. Bu yerda massiv emas, **sonning o'zi** ustida amallar bajaramiz: raqamlarga ajratish, qoldiq olish (`%`), bo'lish (`/`) va daraja.

> Difficulty: 🟢 oson · 🟡 o'rta · 🔴 qiyin

---

## ✅ Yechilgan misol: Rim raqamini songa o'girish

> **Masala:** Rim raqami (string) berilgan. Uni butun songa o'giring.
> `"MCMXCIV"` → `1994`

### 1-qadam: O'QI va TUSHUN
- **Input:** Rim raqamlaridan iborat string (`I, V, X, L, C, D, M`)
- **Output:** butun son
- **Kalit:** odatda har bir belgi qiymatini qo'shamiz. **AMMO** agar kichik belgi kattadan oldin kelsa (masalan `IV` = 4), uni **ayiramiz**.

### 2-qadam: QO'LDA YECH
`"MCMXCIV"`. Qiymatlar: M=1000, C=100, X=10, I=1, V=5.
Chapdan o'ngga yuraman, har birini keyingisi bilan solishtiraman:
- `M`(1000), keyingisi `C`(100). `1000 >= 100` → **qo'sh**: `1000`
- `C`(100), keyingisi `M`(1000). `100 < 1000` → **ayir**: `-100` → jami `900`
- `M`(1000), keyingisi `X`(10). qo'sh → `1900`
- `X`(10), keyingisi `C`(100). `10 < 100` → ayir → `1890`
- `C`(100), keyingisi `I`(1). qo'sh → `1990`
- `I`(1), keyingisi `V`(5). `1 < 5` → ayir → `1989`
- `V`(5), oxirgi belgi. qo'sh → **`1994`** ✅

### 3-qadam: REJA
1. `map` tuzaman: har Rim belgisining qiymati.
2. `total = 0`. Stringni chapdan o'ngga aylanaman (`i`).
3. Agar `qiymat[i] < qiymat[i+1]` → `total -= qiymat[i]` (ayir).
4. Aks holda → `total += qiymat[i]` (qo'sh).
5. `total` qaytar.

### 4-qadam: KOD
```javascript
function rimSon(s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const joriy = map[s[i]];
    const keyingi = map[s[i + 1]];        // oxirida undefined bo'ladi
    if (keyingi && joriy < keyingi) {
      total -= joriy;                      // kichik kattadan oldin -> ayir
    } else {
      total += joriy;                      // aks holda -> qo'sh
    }
  }
  return total;
}
```

### 5-qadam: TEKSHIR
- `"MCMXCIV"` → `1994` ✅
- `"III"` → `3` ✅ (oddiy qo'shish)
- `"IV"` → `4` ✅ (1 < 5 → ayir, keyin 5 → qo'sh)

> 🔑 **PATTERN — "qiymatni map qil, qo'shni bilan solishtir":** belgilarni songa o'girish uchun `map` ishlating. Asosiy nayrang — joriy element keyingisidan kichik bo'lsa ayirish. Sonlar bilan ishlashda `%` (qoldiq) va `Math.floor(n / 10)` (oxirgi raqamni olib tashlash) eng ko'p ishlatiladigan amallar.

---

## 📝 10 ta mashq

`yechimlar/13-math.js` da yeching.

**13.1.** 🟢 `ikkiDaraja(n)` — `n` 2 ning darajasimi? (`true`/`false`)
`16` → `true`, `18` → `false`  *(LeetCode 231)*

**13.2.** 🟢 `raqamIldiz(n)` — raqamlar yig'indisini bitta raqam qolguncha hisobla (digital root).
`38` → `2`  *(3+8=11 → 1+1=2)*  *(LeetCode 258)*

**13.3.** 🟢 `plusOne(arr)` — raqamlar massivi bilan ifodalangan songa 1 qo'sh.
`[1,2,3]` → `[1,2,4]`, `[9,9]` → `[1,0,0]`  *(LeetCode 66)*

**13.4.** 🟡 `tubSanash(n)` — `n` dan kichik nechta tub son bor?
`10` → `4`  *(2, 3, 5, 7)*  *(LeetCode 204)*

**13.5.** 🟡 `ekub(a, b)` — eng katta umumiy bo'luvchi (GCD, iterativ).
`(48, 18)` → `6`

**13.6.** 🟡 `ekuk(a, b)` — eng kichik umumiy karra (LCM).
`(4, 6)` → `12`

**13.7.** 🟡 `teskariSon(n)` — sonni teskari o'gir (ishora saqlanadi).
`-123` → `-321`, `123` → `321`  *(LeetCode 7, overflow'ni e'tiborsiz qoldiring)*

**13.8.** 🟡 `baxtliSon(n)` — happy number'mi? (`true`/`false`)
`19` → `true`  *(1²+9²=82 → 8²+2²=68 → ... → 1)*  *(LeetCode 202)*

**13.9.** 🟡 `excelRaqam(s)` — Excel ustun nomini raqamga o'gir.
`"AB"` → `28`  *(A=1, B=2; 1×26+2=28)*  *(LeetCode 171)*

**13.10.** 🔴 BONUS — `daraja(x, n)` — tez daraja: `x^n` hisobla.
`(2, 10)` → `1024`, `(2, -2)` → `0.25`  *(LeetCode 50)*
