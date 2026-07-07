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

**13.1.** 🟢 **2 ning darajasimi.** `ikkiDaraja(n)` — musbat butun son `n` berilgan. Agar `n` ni 2 ning biror darajasi ko'rinishida yozish mumkin bo'lsa (`1, 2, 4, 8, 16, ...`) `true`, aks holda `false` qaytaring.
   - **Misol:** `16` → `true` (chunki `2⁴ = 16`), `18` → `false` (18 ni 2 ning darajasi qilib yozib bo'lmaydi).
   - *(LeetCode 231)*

**13.2.** 🟢 **Raqamli ildiz (digital root).** `raqamIldiz(n)` — son berilgan. Uning raqamlarini qo'shing; natija ko'p xonali bo'lsa, yana raqamlarini qo'shishni **bitta raqam qolguncha** takrorlang va shu bitta raqamni qaytaring.
   - **Misol:** `38` → `2` — `3+8=11`, keyin `1+1=2`.
   - *(LeetCode 258)*

**13.3.** 🟢 **Songa 1 qo'shish.** `plusOne(arr)` — bir son berilgan, lekin uning har bir raqami massiv elementi sifatida saqlangan (`[1,2,3]` = 123 soni). Shu songa 1 qo'shib, natijani yana xuddi shunday raqamlar massivi ko'rinishida qaytaring. Oxirgi raqam 9 bo'lsa xona ko'chishini (perenos) hisobga oling.
   - **Misol:** `[1,2,3]` → `[1,2,4]` (123+1=124); `[9,9]` → `[1,0,0]` (99+1=100).
   - *(LeetCode 66)*

**13.4.** 🟡 **Tub sonlarni sanash.** `tubSanash(n)` — `n` soni berilgan. `n` dan **qat'iy kichik** (ya'ni `n` ning o'zi kirmaydi) nechta tub son borligini qaytaring. Tub son — 1 dan katta, faqat 1 ga va o'ziga bo'linadigan son.
   - **Misol:** `10` → `4` — 10 dan kichik tublar: `2, 3, 5, 7` (jami 4 ta).
   - *(LeetCode 204)*

**13.5.** 🟡 **EKUB (eng katta umumiy bo'luvchi).** `ekub(a, b)` — ikkita musbat butun son berilgan. Ikkalasini ham qoldiqsiz bo'ladigan eng katta sonni (GCD) toping va qaytaring.
   - **Misol:** `(48, 18)` → `6` — 6 ham 48 ni, ham 18 ni qoldiqsiz bo'ladi, undan kattasi yo'q.

**13.6.** 🟡 **EKUK (eng kichik umumiy karra).** `ekuk(a, b)` — ikkita musbat butun son berilgan. Ikkalasiga ham qoldiqsiz bo'linadigan eng kichik sonni (LCM) toping va qaytaring.
   - **Misol:** `(4, 6)` → `12` — 12 ham 4 ga, ham 6 ga bo'linadi, undan kichigi bunday emas.

**13.7.** 🟡 **Sonni teskari o'girish.** `teskariSon(n)` — butun son berilgan. Uning raqamlarini teskari tartibda yozib chiqing; **ishora (musbat/manfiy) saqlanadi**.
   - **Misol:** `-123` → `-321`, `123` → `321` — raqamlar teskari, minus o'z joyida qoladi.
   - *(LeetCode 7, overflow'ni e'tiborsiz qoldiring)*

**13.8.** 🟡 **Baxtli son (happy number).** `baxtliSon(n)` — musbat butun son berilgan. Har qadamda sonni raqamlari kvadratlari yig'indisi bilan almashtiring; agar takrorlay-takrorlay `1` ga yetsa `true`, agar tsiklda aylanib qolib hech qachon 1 ga yetmasa `false` qaytaring.
   - **Misol:** `19` → `true` — `1²+9²=82` → `8²+2²=68` → ... → oxir-oqibat `1`.
   - *(LeetCode 202)*

**13.9.** 🟡 **Excel ustun raqami.** `excelRaqam(s)` — Excel jadvalidagi ustun nomi (harflardan iborat string) berilgan (`A=1, B=2, ..., Z=26, AA=27, ...`). Shu nomga mos ustun tartib raqamini qaytaring — bu 26 asosidagi sanoq tizimiga o'xshaydi.
   - **Misol:** `"AB"` → `28` — `A=1, B=2`, demak `1×26 + 2 = 28`.
   - *(LeetCode 171)*

**13.10.** 🔴 BONUS — **Tez daraja.** `daraja(x, n)` — asos `x` (son) va daraja `n` (butun son) berilgan. `x` ni `n`-darajaga ko'tarib (`x^n`) natijani qaytaring. `n` manfiy bo'lsa natija kasr bo'ladi (`x⁻ⁿ = 1 / xⁿ`).
   - **Misol:** `(2, 10)` → `1024` (`2¹⁰`); `(2, -2)` → `0.25` (`1 / 2² = 1/4`).
   - *(LeetCode 50)*
